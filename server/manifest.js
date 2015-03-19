var Confidence = require('confidence'),
    config = require('./config'),
    criteria = {
        env: process.env.NODE_ENV || 'development'
    },
    store,
    manifest;

manifest = {
    $meta: 'ConsoleChat',
    connections: [{
        host: config.get('/server/host'),
        port: config.get('/server/port'),
        options: config.get('/server/options')
    }],
    plugins: {
        // Third Party Plugins
        'good': config.get('/good'),
        'hapio': {},

        // Local Plugins
        './plugins/ConsoleChat': {},
        './plugins/SlackBot': config.get('/slackBot'),
        './plugins/StaticFiles': {}
    }
};

store = new Confidence.Store(manifest);

exports.get = function (key) {

    return store.get(key, criteria);
};

exports.meta = function (key) {

    return store.meta(key, criteria);
};
