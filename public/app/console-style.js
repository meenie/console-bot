import Q from 'q';
import {checkImageExists} from './utils/check-image-exists';

RegExp.quote = function(str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

let cachedEmojis = [];

export function style(name, msg) {
    let ret = [],
        emojiUrl = 'http://www.emoji-cheat-sheet.com/graphics/emojis/',
        emojiRegex = /:(.+?):/g,
        emojis = msg.match(emojiRegex),
        promises = [];

    ret.push('%c' + name + ': %c' + msg);
    ret.push('color: green; font-weight: bold');
    ret.push('color: black');

    if (emojis !== null) {
        for (let emoji of emojis) {
            emoji = emoji.substr(1, emoji.length - 2);
            let emojiSrc = `${emojiUrl}${encodeURIComponent(emoji)}.png`;

            if (cachedEmojis.indexOf(emoji) !== -1) {
                promises.push(Q(emoji));
            } else {
                let promise = checkImageExists(emojiSrc).then(() => {
                    if (cachedEmojis.indexOf(emoji) === -1) {
                        cachedEmojis.push(emoji);
                    }

                    return emoji;
                });

                promises.push(promise);
            }
        }
    }

    return Q.allSettled(promises).then((emojis) => {
        for (let emoji of emojis) {
            if (emoji.state === 'rejected') {
                continue;
            }

            let emojiSrc = `${emojiUrl}${encodeURIComponent(emoji.value)}.png`,
                emojiStyle = `background-image: url("${emojiSrc}"); background-size: cover`,
                emojiRegex = new RegExp(`:${RegExp.quote(emoji.value)}:\s*`);

            ret[0] = ret[0].replace(emojiRegex, '%c  %c');
            ret.push(emojiStyle);
            ret.push('color: black');
        }

        return ret;
    });
}
