import { hooks, isFunction, isUndefined, Shortcuts } from '@ice/shared';

import {
  CUSTOM_WRAPPER,
  PAGE_INIT,
  ROOT_STR,
  SET_DATA,
} from '../constants/index.js';
import type { Func, HydratedData, MpInstance, UpdatePayload, UpdatePayloadValue } from '../interface/index.js';
import { options } from '../options.js';
import { perf } from '../perf.js';
import { customWrapperCache } from '../utils/index.js';
import { Element } from './element.js';

function findCustomWrapper(root: RootElement, dataPathArr: string[]) {
  // ['root', 'cn', '[0]'] remove 'root' => ['cn', '[0]']
  const list = dataPathArr.slice(1);
  let currentData: any = root;
  let customWrapper: Record<string, any> | undefined;
  let splitedPath = '';

  list.some((item, i) => {
    const key = item
      // '[0]' => '0'
      .replace(/^\[(.+)\]$/, '$1')
      // 'cn' => 'childNodes'
      .replace(/\bcn\b/g, 'childNodes');

    currentData = currentData[key];

    if (isUndefined(currentData)) return true;

    if (currentData.nodeName === CUSTOM_WRAPPER) {
      const res = customWrapperCache.get(currentData.sid);
      if (res) {
        customWrapper = res;
        splitedPath = dataPathArr.slice(i + 2).join('.');
      }
    }
    return;
  });

  if (customWrapper) {
    return {
      customWrapper,
      splitedPath,
    };
  }
}

export class RootElement extends Element {
  private updatePayloads: UpdatePayload[] = [];

  private updateCallbacks: Func[] = [];

  public pendingUpdate = false;

  public ctx: null | MpInstance = null;

  public constructor() {
    super();
    this.nodeName = ROOT_STR;
    this.tagName = ROOT_STR.toUpperCase();
  }

  public get _path(): string {
    return ROOT_STR;
  }

  public get _root(): RootElement {
    return this;
  }

  public enqueueUpdate(payload: UpdatePayload): void {
    this.updatePayloads.push(payload);

    if (!this.pendingUpdate && this.ctx) {
      this.performUpdate();
    }
  }

  public performUpdate(initRender = false, prerender?: Func) {
    this.pendingUpdate = true;

    const ctx = this.ctx!;

    setTimeout(() => {
      perf.start(SET_DATA);
      const data: Record<string, UpdatePayloadValue | ReturnType<HydratedData>> = Object.create(null);
      const resetPaths = new Set<string>(
        initRender
          ? ['root.cn.[0]', 'root.cn[0]']
          : [],
      );

      while (this.updatePayloads.length > 0) {
        const { path, value } = this.updatePayloads.shift()!;
        if (path.endsWith(Shortcuts.Childnodes)) {
          resetPaths.add(path);
        }
        data[path] = value;
      }

      for (const path in data) {
        resetPaths.forEach(p => {
          // 已经重置了数组，就不需要分别再设置了
          if (path.includes(p) && path !== p) {
            delete data[path];
          }
        });

        const value = data[path];
        if (isFunction(value)) {
          data[path] = value();
        }
      }

      // 预渲染
      if (isFunction(prerender)) return prerender(data);

      // 正常渲染
      this.pendingUpdate = false;
      let normalUpdate = {};
      const customWrapperMap: Map<Record<any, any>, Record<string, any>> = new Map();

      if (initRender) {
        // 初次渲染，使用页面级别的 setData
        normalUpdate = data;
      } else {
        // 更新渲染，区分 CustomWrapper 与页面级别的 setData
        for (const p in data) {
          const dataPathArr = p.split('.');
          const found = findCustomWrapper(this, dataPathArr);
          if (found) {
            // 此项数据使用 CustomWrapper 去更新
            const { customWrapper, splitedPath } = found;
            // 合并同一个 customWrapper 的相关更新到一次 setData 中
            customWrapperMap.set(customWrapper, {
              ...(customWrapperMap.get(customWrapper) || {}),
              [`i.${splitedPath}`]: data[p],
            });
          } else {
            // 此项数据使用页面去更新
            normalUpdate[p] = data[p];
          }
        }
      }

      const customWrpperCount = customWrapperMap.size;
      const isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
      const updateArrLen = customWrpperCount + (isNeedNormalUpdate ? 1 : 0);
      let executeTime = 0;

      const cb = () => {
        if (++executeTime === updateArrLen) {
          perf.stop(SET_DATA);
          this.flushUpdateCallback();
          initRender && perf.stop(PAGE_INIT);
        }
      };

      // custom-wrapper setData
      if (customWrpperCount) {
        customWrapperMap.forEach((data, ctx) => {
          if (process.env.NODE_ENV !== 'production' && options.debug) {
            // eslint-disable-next-line no-console
            console.log('custom wrapper setData: ', data);
          }
          hooks.call('modifySetDataPayload', data, ctx);
          ctx.setData(data, cb);
        });
      }

      // page setData
      if (isNeedNormalUpdate) {
        if (process.env.NODE_ENV !== 'production' && options.debug) {
          // eslint-disable-next-line no-console
          console.log('page setData:', normalUpdate);
        }
        hooks.call('modifySetDataPayload', data, ctx);
        ctx.setData(normalUpdate, cb);
      }
    }, 0);
  }

  public enqueueUpdateCallback(cb: Func, ctx?: Record<string, any>) {
    this.updateCallbacks.push(() => {
      ctx ? cb.call(ctx) : cb();
    });
  }

  public flushUpdateCallback() {
    const { updateCallbacks } = this;
    if (!updateCallbacks.length) return;

    const copies = updateCallbacks.slice(0);
    this.updateCallbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
}
