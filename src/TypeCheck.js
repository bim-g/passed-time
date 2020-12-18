"use strict";
exports.__esModule = true;
var TypeCheck = /** @class */ (function () {
    function TypeCheck() {
    }
    // protected constructor(private name:any){}
    TypeCheck.prototype.isString = function (x) {
        return typeof x === "string";
    };
    TypeCheck.prototype.isNumber = function (x) {
        return typeof x === "number";
    };
    TypeCheck.prototype.isObject = function (x) {
        return typeof x === "object";
    };
    return TypeCheck;
}());
exports.TypeCheck = TypeCheck;
