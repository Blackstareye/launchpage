var isBrowser = typeof window !== 'undefined' &&
    ({}).toString.call(window) === '[object Window]';

var isNode = typeof global !== "undefined" &&
    ({}).toString.call(global) === '[object global]';