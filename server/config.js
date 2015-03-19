var Confidence = require('confidence'),
    Path = require('path'),
    criteria,
    store,
    config;

config = {
    $meta: 'Config file',
    server: {
        $filter: 'env',
        production: {
            host: process.env.HOST,
            port: process.env.PORT,
            apiHost: process.env.API_HOST,
            apiPort: process.env.API_PORT
        },
        development: {
            host: process.env.HOST || 'localhost',
            port: process.env.PORT || 3000
        }
    },
    good: {
        $filter: 'env',
        production: {
            opsInterval: 1000,
            reporters: [{
                reporter: require('good-console'),
                args: [{log: '*', request: '*'}]
            }]
        },
        $default: {
            opsInterval: 1000,
            reporters: [{
                reporter: require('good-console'),
                args: [{log: '*', request: '*'}]
            }]
        }
    },
    yar: {
        cookieOptions: {
            $filter: 'env',
            production: {
                password: process.env.SESSION_COOKIE_PASSWORD
            },
            development: {
                password: 'password',
                isSecure: false
            }
        }
    },
    slackBot: {
        $filter: 'env',
        production: {
            token: process.env.SLACK_TOKEN,
            channel: process.env.SLACK_CHANNEL
        },
        development: {
            token: '[set token here]',
            channel: 'console-bot'
        }
    }
};


criteria = {
    env: process.env.NODE_ENV || 'development'
};

store = new Confidence.Store(config);

exports.get = function(key) {

    return store.get(key, criteria);
};

exports.meta = function(key) {

    return store.meta(key, criteria);
};
