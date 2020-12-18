"use strict";
exports.__esModule = true;
var index_1 = require("../src/index");
// let date="2020-12-17 10:23";
var date = {
    firstDate: "2020-12-17 10:23",
    secondDate: "2020-12-17 10:20"
};
var tp = new index_1.PassedTime(date);
var config = {
    detail: true
};
// test without configurations details
var time = tp.getTimePassed(config);
var result = {
    timeLeft: time,
    daysOfMonth: tp.getDayOfMonth(),
    thisWeekPeriod: tp.getThisWeek(),
    lastWeekPeriod: tp.getLastWeek(),
    thisTrimester: tp.getTriSemester()
};
console.log(time);
