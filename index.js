const figlet = require('figlet');
const cowsay = require('cowsay');
const graphtea = require('graph-tea');
const teawordart = require('tea-word-art');
const teacharactergraph = require('tea-character-graph');
const teaclassificationdescription = require('tea-classification-description');
const teaintroduce = require('tea-introduce');
const checkiputil = require('check-ip-util');

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