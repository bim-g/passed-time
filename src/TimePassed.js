"use strict";
exports.__esModule = true;
var TimePassed = /** @class */ (function () {
    // 
    function TimePassed(myDate) {
        this._date = myDate;
    }
    TimePassed.prototype.getTimePassed = function (config) {
        var dat = new Date(this._date);
        var diffTime = new Date().getTime() - dat.getTime();
        // get remaining millisecond for each step
        var r_week = diffTime % (60 * 60 * 24 * 7 * 1000);
        var r_days = r_week % (60 * 60 * 24 * 1000);
        var r_hours = r_days % (60 * 60 * 1000);
        var r_minute = r_hours % (60 * 1000);
        // get periode of time
        var getWeek = Math.floor(diffTime / (60 * 60 * 24 * 7 * 1000));
        var getDays = Math.floor(r_week / (60 * 60 * 24 * 1000));
        var getHour = Math.floor(r_days / (60 * 60 * 1000));
        var getMinutes = Math.floor(r_hours / (60 * 1000));
        var getSeconde = Math.floor(r_minute / 1000);
        var timePost = "";
        // check congiguration
        var detail = false;
        if (config && config.detail != undefined) {
            detail = config.detail;
        }
        // 
        var diffDay = new Date().getDay() - dat.getDay();
        if (diffDay == 1 && getHour >= 10) {
            return "yesterday at " + dat.getHours() + "h";
        }
        // // 
        if (getWeek >= 3) {
            return String(new Date(this._date));
        }
        else if (getWeek > 0) {
            return detail ? getWeek + "w " + getDays + "d " + getHour + "h " + getMinutes + "m " + getSeconde + "s" : getWeek + "w";
        }
        else if (getDays > 0 && getDays < 7) {
            return detail ? getDays + "d " + getHour + "h " + getMinutes + "m " + getSeconde + "s" : getDays + "d";
        }
        else if (getHour > 0 && getHour < 24) {
            return detail ? getHour + "h " + getMinutes + "m " + getSeconde + "s" : getHour + "h";
        }
        else if (getMinutes > 0 && getMinutes < 60) {
            return detail ? getMinutes + "m " + getSeconde + "s" : getMinutes + "m";
        }
        else {
            return getSeconde + "s";
        }
    };
    // get this week interval
    TimePassed.prototype.getThisWeek = function () {
        var dat = new Date(this._date);
        var today = dat.getDay();
        var firstDay = new Date(dat.setDate(dat.getDate() - today));
        var lastDay = new Date(dat.setDate(firstDay.getDate() + 6));
        return {
            from: firstDay,
            to: lastDay
        };
    };
    // get number of days of a specific month
    TimePassed.prototype.getDayOfMonth = function () {
        var dat = new Date(this._date);
        return new Date(dat.getFullYear(), dat.getMonth(), 0).getDate();
    };
    // get trimester Period interval form it start 
    TimePassed.prototype.getTriSemester = function () {
        var dat = new Date(this._date);
        var from = new Date(this._date);
        var to = new Date(new Date(dat.setMonth(from.getMonth() - 3)).setDate(from.getDate()));
        return {
            from: from,
            to: to
        };
    };
    // get last week interval
    TimePassed.prototype.getLastWeek = function () {
        var dat = new Date(this._date);
        var today = dat.getDay();
        var lastDay = new Date(dat.setDate(dat.getDate() - (today + 1)));
        var firstDay = new Date(dat.setDate(lastDay.getDate() - 6));
        return {
            from: firstDay,
            to: lastDay
        };
    };
    return TimePassed;
}());
exports.TimePassed = TimePassed;
