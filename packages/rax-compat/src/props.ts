import type { ComponentProps, JSXElementConstructor } from 'react';
import { registrationNameToReactEvent } from './events.js';
import possibleStandardNames from './possible-standard-names.js';

// String#indexOf is usually faster than any other methods.
// https://www.measurethat.net/Benchmarks/Show/12312/0/js-regex-vs-startswith-vs-indexof-vs-endswith-vs-charat
function isEventLikeProp(key: string) {
  return key.indexOf('on') === 0;
}

function transformProps(type: string, props: ComponentProps<JSXElementConstructor<any>>): Record<string, any> {
  const transformedProps: Record<string, any> = {};
  Object.keys(props).forEach((propKey: string) => {
    let key: string = propKey;
    let val = props[propKey];
    const lowerCasedPropKey: string = propKey.toLowerCase();
    // Transform the event so that it works properly in React.
    // ontouchstart can work in rax, but react.js will check event in event plugin.
    // Rax compat should transform event which can work in rax runtime.
    // React support onDoubleClick but dblclick event is web Standards events.
    // etc...
    if (isEventLikeProp(lowerCasedPropKey)) {
      if (registrationNameToReactEvent.has(lowerCasedPropKey)) {
        const reactEvent: string = registrationNameToReactEvent.get(lowerCasedPropKey) || '';
        if (reactEvent !== propKey) {
          key = reactEvent;
        }
      }
      // eslint-disable-next-line no-prototype-builtins
    } else {
      if (Object.prototype.hasOwnProperty.call(possibleStandardNames, lowerCasedPropKey)) {
        // Transform attribute names that make it works properly in React.
        key = possibleStandardNames[lowerCasedPropKey];
      } else {
        // Handles component props from rax-components like resizeMode, this causes React to throw a warning.
        key = lowerCasedPropKey;
      }
    }

    transformedProps[key] = val;
  });

  return transformedProps;
}

export default transformProps;
