import * as ES6Promise from "es6-promise";


export function registerPolyfills() {
    ES6Promise.polyfill();
}
