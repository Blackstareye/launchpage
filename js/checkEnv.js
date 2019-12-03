var isBrowser = typeof window !== 'undefined' &&
    ({}).toString.call(window) === '[object Window]';

var isNode = typeof global !== "undefined" &&
    ({}).toString.call(global) === '[object global]';

var PAGE_LOCATION_TYPE =
    //this is regular java object
    ({
        0: PAGE_LOCATION_STATUS.FILE,
        1: PAGE_LOCATION_STATUS.LOCAL_SERVER,
        2: PAGE_LOCATION_STATUS.REMOTE_SERVER
            //the bracket is a direct indexbased reference (key/value)  on THAT object
            //if the bar is not set, it is the default value, hence the OR with '||'
    })[locationType()] || "not defined";


// Returns the page location type
// 0 (falsey) = Local file, direct from disk (file://path/to/file.html)
// 1 (truthy) = Virtually remote file, from local server (http://localhost)
// 2 (truthy) = Remote file from remote server (http://example.com)

function locationType() {
    if (window.location.protocol == 'file:') { return 0; }
    if (!window.location.host.replace(/localhost|127\.0\.0\.1/i, '')) { return 2; }
    return 1;
}

function setConfigurationStoreTypes() {
    let types = ENVIROMENT.enviroment;
    if (types.includes(STORAGE_TYPE.PHP)) {
        //enable php

        //create a template with php conf
    }
    if (types.includes(STORAGE_TYPE.NODE)) {
        //enable node

        //create a template with node conf
    }
}