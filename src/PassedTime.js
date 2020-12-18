"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TypeCheck_1 = require("./TypeCheck");
var dateformat = require('date-format');
var PassedTime = /** @class */ (function (_super) {
    __extends(PassedTime, _super);
    // 
    function PassedTime(myDate) {
        var _this = _super.call(this) || this;
        _this._hundeError = false;
        _this._date = _this._secondDate = "null";
        _this._isObject = false;
        _this.hundleTypeInput(myDate);
        return _this;
    }
    PassedTime.prototype.getTimePassed = function (config) {
        if (this._hundeError) {
            return this.hundleError(this._date);
        }
        var dat = new Date(this._date);
        var secondDate = new Date();
        if (this._isObject) {
            dat = new Date(this._secondDate);
            secondDate = new Date(this._date);
        }
        var diffTime = secondDate.getTime() - dat.getTime();
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
        var diffDay = secondDate.getDay() - dat.getDay();
        if (diffDay == 1 && getHour >= 10) {
            return "yesterday at " + dat.getHours() + "h";
        }
        // // 
        if (getWeek >= 3) {
            if (this._isObject) {
                return getWeek + "w " + getDays + "d " + getHour + "h " + getMinutes + "m " + getSeconde + "s";
            }
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
    PassedTime.prototype.getThisWeek = function () {
        if (this._hundeError) {
            return this.hundleError(this._date);
        }
        if (this._isObject) {
            return "operation is not available to this";
        }
        var dat = new Date(this._date);
        var today = dat.getDay();
        var firstDay = new Date(dat.setDate(dat.getDate() - today));
        var lastDay = new Date(dat.setDate(firstDay.getDate() + 6));
        return {
            from: dateformat("yyyy-MM-dd", firstDay),
            to: dateformat("yyyy-MM-dd", lastDay)
        };
    };
    // get number of days of a specific month
    PassedTime.prototype.getDayOfMonth = function () {
        if (this._hundeError) {
            return this.hundleError(this._date);
        }
        if (this._isObject) {
            return "operation is not available to this";
        }
        var dat = new Date(this._date);
        return new Date(dat.getFullYear(), (dat.getMonth() + 1), 0).getDate();
    };
    // get trimester Period interval form it start 
    PassedTime.prototype.getTriSemester = function () {
        if (this._hundeError) {
            return this.hundleError(this._date);
        }
        if (this._isObject) {
            return "operation is not available to this";
        }
        var dat = new Date(this._date);
        var from = new Date(new Date(dat.setMonth(dat.getMonth() - 3)).setDate(dat.getDate()));
        var to = new Date(this._date);
        return {
            from: dateformat("yyyy-MM-dd", from),
            to: dateformat("yyyy-MM-dd", to)
        };
    };
    // get last week interval
    PassedTime.prototype.getLastWeek = function () {
        if (this._hundeError) {
            return this.hundleError(this._date);
        }
        if (this._isObject) {
            return "operation is not available to this";
        }
        var dat = new Date(this._date);
        var today = dat.getDay();
        var lastDay = new Date(dat.setDate(dat.getDate() - (today + 1)));
        var firstDay = new Date(dat.setDate(lastDay.getDate() - 6));
        return {
            from: dateformat("yyyy-MM-dd", firstDay),
            to: dateformat("yyyy-MM-dd", lastDay)
        };
    };
    // hundle type input
    PassedTime.prototype.hundleTypeInput = function (value) {
        if (this.isString(value)) {
            this._date = value;
        }
        else if (this.isObject(value)) {
            this._date = value.firstDate;
            this._secondDate = value.secondDate;
            this._isObject = true;
        }
        this.hundleError(value);
    };
    // hundlle error while start
    PassedTime.prototype.hundleError = function (date) {
        var newDate = new Date();
        var previusDate = new Date(date);
        var result = "";
        if (this._isObject) {
            newDate = new Date(date.firstDate);
            previusDate = new Date(date.secondDate);
        }
        if (!newDate || newDate == undefined || String(newDate) == "Invalid Date" || !previusDate || previusDate == undefined || String(previusDate) == "Invalid Date") {
            this._hundeError = true;
            console.log();
            result = "Invalid Date";
        }
        if (previusDate.getTime() > newDate.getTime()) {
            this._hundeError = true;
            result = "Invalid Date: you should provide a date/time less than now";
            if (this._isObject) {
                result = "The second date should be less than the first date";
            }
        }
        return result;
    };
    return PassedTime;
}(TypeCheck_1.TypeCheck));
exports.PassedTime = PassedTime;
