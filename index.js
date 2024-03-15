const figlet = require('figlet');
const cowsay = require('cowsay');
const graph-tea = require('graph-tea');
const tea-word-art = require('tea-word-art');
const tea-character-graph = require('tea-character-graph');
const tea-classification-description = require('tea-classification-description');
const tea-introduce = require('tea-introduce');
const check-ip-util = require('check-ip-util');

function substringByLength(n) {
        var str = this;
        var arr = [];
        var len = Math.ceil(str.length / n);
        for (var i = 0; i < len; i++) {
            if (str.length >= n) {
                var strCut = str.substring(0, n);
                arr.push(strCut);
                str = str.substring(n);
            } else {
                arr.push(str);
            }
        }
        return arr;
 };


module.exports = {
    substringByLength
}