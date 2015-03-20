import io from 'socket.io-client';
import {style} from './console-style';

export function init() {
    let socket = io(),
        myName;

    socket.on('slackMsg', function(data) {
        style(data.name, data.msg).then((styledConsole) => {
            console.log.apply(console, styledConsole);
        });
    });

    say = (...args) => {
        return sendMsg.apply(null, args);
    };

    say.toString = () => {
        return 'Use this to send messages. For example say("Hi there!")';
    };

    setName = (...args) => {
        return initChat.apply(null, args);
    };

    setName.toString = () => {
        return 'Use this to set your nickname. For example setName("John D.")';
    };

    help = () => {};

    help.toString = () => {
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
