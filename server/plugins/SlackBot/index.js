var internals = {},
    SlackClient = require('slack-client');

module.exports.register = function(server, options, next) {
    internals.initBot(server, options);

    next();
};

module.exports.register.attributes = {
    name: 'SlackBot',
    version: '1.0.0'
};

internals.initBot = function(server, options) {
    var slack = new SlackClient(options.token),
        channel;

    slack.on('open', function() {
        var channels = slack.channels;

        for (var id in channels) {
            if (channels.hasOwnProperty(id) && channels[id].name === options.channel) {
                channel = channels[id];
                console.log('Channel Set!!');
            }
        }

        if (! channel) {
            throw new Error('No channel available to attach to.');
        }

        server.method('slackMessage', function(name, msg) {
            channel.send('*' + name + '*: ' + msg);
        });
    });

    slack.on('message', function(message) {

        var channel = slack.getChannelGroupOrDMByID(message.channel),
            userId = message.user ? message.user : message.message.user,
            user = slack.getUserByID(userId);

        if (channel.name === options.channel) {
            if (! user) {
                console.log(message);
            } else {
                if (message.text) {
                    server.methods.consoleMessage(user.name, message.text);
                }
            }
        }
    });

    slack.login();
};
