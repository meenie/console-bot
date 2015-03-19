var internals = {};

module.exports.register = function(server, options, next) {
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    });

    next();
};

module.exports.register.attributes = {
    name: 'StaticFiles',
    version: '1.0.0'
};
