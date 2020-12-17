"use strict";
exports.__esModule = true;
var index_1 = require("../src/index");
var date = "2020-12-17 10:23";
var tp = new index_1.TimePassed(date);
var config = {
    detail: true
};
// test without configurations details
var time = tp.getTimePassed();
console.log(time);
// time with configuration details
time = tp.getTimePassed(config);
console.log(time);
