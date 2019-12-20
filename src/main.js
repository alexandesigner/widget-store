import { render } from './render'

const supportedAPI = ['init', 'render'];

/**
    The main entry of the widget
*/
function app(window) {

    // set default configurations
    let configurations = {};

    // all methods that were called till now and stored in queue
    // needs to be called now 
    let globalObject = window[window['Carhoo-Store']];
    let queue = globalObject.q;
    if (queue) {
        for (var i = 0; i < queue.length; i++) {
            if (queue[i][0].toLowerCase() == 'init') {
                configurations = extendObject(configurations, queue[i][1]);
            }
            else
                apiHandler(queue[i][0], queue[i][1]);
        }
    }

    // override temporary (until the widget loaded) handler
    // for widget's API calls
    globalObject = apiHandler;
    globalObject.configurations = configurations;
    window[window['Carhoo-Store']] = globalObject;
}

/**
    Method that handles all API calls
*/
function apiHandler(api, params) {
    if (!api) throw Error('API method required');
    api = api.toLowerCase();

    if (supportedAPI.indexOf(api) === -1) throw Error(`Method ${api} is not supported`);

    switch (api) {
        case 'render':
            render(params)
            break;
        default:
            console.warn(`No handler defined for ${api}`);
    }
}

function extendObject(a, b) {
    for (var key in b)
        if (b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

app(window);
