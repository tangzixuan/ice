import * as os from 'node:os';

import { chalk } from './terminal.js';

// eslint-disable-next-line dot-notation
export const PLATFORMS = (global['PLATFORMS'] = global['PLATFORMS'] || {});

export const enum processTypeEnum {
  START = 'start',
  CREATE = 'create',
  COMPILE = 'compile',
  CONVERT = 'convert',
  COPY = 'copy',
  GENERATE = 'generate',
  MODIFY = 'modify',
  ERROR = 'error',
  WARNING = 'warning',
  UNLINK = 'unlink',
  REFERENCE = 'reference',
  REMIND = 'remind',
}

export interface IProcessTypeMap {
  [key: string]: {
    name: string;
    color: string | chalk.Chalk;
  };
}

export const processTypeMap: IProcessTypeMap = {
  [processTypeEnum.CREATE]: {
    name: '创建',
    color: 'cyan',
  },
  [processTypeEnum.COMPILE]: {
    name: '编译',
    color: 'green',
  },
  [processTypeEnum.CONVERT]: {
    name: '转换',
    color: chalk.rgb(255, 136, 0),
  },
  [processTypeEnum.COPY]: {
    name: '拷贝',
    color: 'magenta',
  },
  [processTypeEnum.GENERATE]: {
    name: '生成',
    color: 'blue',
  },
  [processTypeEnum.MODIFY]: {
    name: '修改',
    color: 'yellow',
  },
  [processTypeEnum.ERROR]: {
    name: '错误',
    color: 'red',
  },
  [processTypeEnum.WARNING]: {
    name: '警告',
    color: 'yellowBright',
  },
  [processTypeEnum.UNLINK]: {
    name: '删除',
    color: 'magenta',
  },
  [processTypeEnum.START]: {
    name: '启动',
    color: 'green',
  },
  [processTypeEnum.REFERENCE]: {
    name: '引用',
    color: 'blue',
  },
  [processTypeEnum.REMIND]: {
    name: '提示',
    color: 'green',
  },
};

export const CSS_EXT: string[] = ['.css', '.scss', '.sass', '.less', '.styl', '.stylus', '.wxss', '.acss'];
export const SCSS_EXT: string[] = ['.scss'];
export const JS_EXT: string[] = ['.js', '.jsx'];
export const TS_EXT: string[] = ['.ts', '.tsx'];
export const UX_EXT: string[] = ['.ux'];
export const SCRIPT_EXT: string[] = JS_EXT.concat(TS_EXT);
export const VUE_EXT: string[] = ['.vue'];

export const REG_JS = /\.m?js(\?.*)?$/;
export const REG_SCRIPT = /\.m?(js|jsx)(\?.*)?$/;
export const REG_TYPESCRIPT = /\.(tsx|ts)(\?.*)?$/;
export const REG_SCRIPTS = /\.m?[tj]sx?$/i;
export const REG_VUE = /\.vue$/i;
export const REG_SASS = /\.(s[ac]ss)$/;
export const REG_SASS_SASS = /\.sass$/;
export const REG_SASS_SCSS = /\.scss$/;
export const REG_LESS = /\.less$/;
export const REG_STYLUS = /\.styl(us)?$/;
export const REG_STYLE = /\.(css|scss|sass|less|styl|stylus|wxss|acss|ttss|jxss|qss)(\?.*)?$/;
export const REG_CSS = /\.(css|qss|jxss|wxss|acss|ttss)(\?.*)?$/;
export const REG_MEDIA = /\.(mp4|webm|ogg|mp3|m4a|wav|flac|aac)(\?.*)?$/;
export const REG_IMAGE = /\.(png|jpe?g|gif|bpm|svg|webp)(\?.*)?$/;
export const REG_FONT = /\.(woff2?|eot|ttf|otf)(\?.*)?$/;
export const REG_JSON = /\.json(\?.*)?$/;
export const REG_UX = /\.ux(\?.*)?$/;
export const REG_TEMPLATE = /\.(wxml|axml|ttml|qml|swan|jxml)(\?.*)?$/;
export const REG_WXML_IMPORT = /<import(.*)?src=(?:(?:'([^']*)')|(?:"([^"]*)"))/gi;
export const REG_URL =
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

export const REG_CSS_IMPORT = /@import (["'])(.+?)\1;/g;

export const NODE_MODULES = 'node_modules';
export const REG_NODE_MODULES = /node_modules/;
export const REG_NODE_MODULES_DIR = /[\\/]node_modules[\\/]/gi;

export const PROJECT_CONFIG = 'config/index';

export const DEVICE_RATIO = {
  640: 2.34 / 2,
  750: 1,
  828: 1.81 / 2,
};

export const FILE_PROCESSOR_MAP = {
  '.js': 'babel',
  '.scss': 'sass',
  '.sass': 'sass',
  '.less': 'less',
  '.styl': 'stylus',
};

export enum META_TYPE {
  ENTRY = 'ENTRY',
  PAGE = 'PAGE',
  COMPONENT = 'COMPONENT',
  NORMAL = 'NORMAL',
  STATIC = 'STATIC',
  CONFIG = 'CONFIG',
  EXPORTS = 'EXPORTS',
}

export const taroJsMiniComponentsPath = '@tarojs/components/mini';
export const taroJsComponents = '@tarojs/components';
export const taroJsQuickAppComponents = '@tarojs/components-qa';
export const taroJsFramework = '@tarojs/taro';
export const taroJsRedux = '@tarojs/redux';
export const taroJsMobx = '@tarojs/mobx';
export const taroJsMobxCommon = '@tarojs/mobx-common';

export const DEVICE_RATIO_NAME = 'deviceRatio';
export const isWindows = os.platform() === 'win32';

export const OUTPUT_DIR = 'dist';
export const SOURCE_DIR = 'src';
export const TEMP_DIR = '.temp';
export const NPM_DIR = 'npm';
export const ENTRY = 'app';

export enum FRAMEWORK_MAP {
  VUE3 = 'vue3',
  REACT = 'react',
  Solid = 'solid',
}

export const defaultMainFields = ['browser', 'module', 'jsnext:main', 'main'];
