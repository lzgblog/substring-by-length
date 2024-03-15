const cowsay = require('cowsay');
const tea-word-art = require('tea-word-art');
const tea-character-graph = require('tea-character-graph');
const tea-classification-description = require('tea-classification-description');
const tea-introduce = require('tea-introduce');
const check-ip-util = require('check-ip-util');
const substring-by-length = require('substring-by-length');

// 创建喝茶的图案
function printTea() {
	let teaCow = cowsay.say({
    text: "喝茶",
    e: "oO",
    T: "U "
	});

	console.log(teaCow);
}

module.exports = {
    printTea
}