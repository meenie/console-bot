var Glue = require('glue'),
    manifest = require('./manifest');

Glue.compose(manifest.get('/'), {relativeTo: __dirname}, function (err, server) {
    server.start(function () {
        server.log('info', 'Server running at: ' + server.connections[0].info.uri);
    });
});
