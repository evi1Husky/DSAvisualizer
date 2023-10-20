"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = exports.randomKey = void 0;
const randomKey = (charNumber) => {
    let str = '';
    for (let i = 0; i < charNumber; i++) {
        let char = Math.floor(Math.random() * 26) + 97;
        str += String.fromCharCode(char);
    }
    return str;
};
exports.randomKey = randomKey;
const randomNumber = (range) => {
    const randomByte = new Uint32Array(1);
    window.crypto.getRandomValues(randomByte);
    const number = (randomByte[0] / 4294967295) * range;
    return String(Math.round(number));
};
exports.randomNumber = randomNumber;
