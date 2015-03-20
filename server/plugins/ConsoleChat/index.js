module.exports.register = function(server, options, next) {
    server.plugins.hapio.io.on('connection', function(socket) {
        socket.on('msg', function(data) {
            if (server.methods.slackMessage) {
                server.methods.slackMessage(data.name, data.msg);
            }
            server.methods.consoleMessage(data.name, data.msg, socket);
        });

        socket.on('initChat', function(data) {
            server.methods.consoleMessage('Info', data.name + ' has joined the chat.');
            server.methods.slackMessage('Info', data.name + ' has joined the chat.');
        });
    });

    server.method('consoleMessage', function(name, msg) {
        server.plugins.hapio.io.emit('slackMsg', {name: name, msg: msg});
    });

    next();
};

module.exports.register.attributes = {
    name: 'ConsoleChat',
    version: '1.0.0'
};
