import io from 'socket.io-client';

export function init() {
    var socket = io(),
        myName;

    socket.on('slackMsg', function(data) {
        console.log(data.name + ':', data.msg);
    });

    say = function() {
        return sendMsg.apply(null, arguments);
    };

    say.toString = function() {
        return 'Use this to send messages. For example say("Hi there!")';
    };

    setName = function() {
        return initChat.apply(null, arguments);
    };

    setName.toString = function() {
        return 'Use this to set your nickname. For example setName("John D.")';
    };

    help = function() {};

    help.toString = function() {
        return `Welcome to the ConsoleBot chat system. Below are the commands you can use:
setName: Set the nickname you want to use for chatting
say: Send messages to other users`;

    };

    function initChat(name) {
        myName = name;
        socket.emit('initChat', {name: name});
    }

    function sendMsg(msg) {
        if (myName === undefined) {
            console.info('You must use setName("My Name") first.');
        } else {
            socket.emit('msg', {name: myName, msg: msg});
        }
    }
}
