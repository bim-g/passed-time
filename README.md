# remain-time
Welcom
This is a simple module that allow you to get the remaining time from a previous past time.
eg:`2min`left

# Introduction 
The module is not final state, is just simple module, for more detail, you contribute or addapt according to your need.

# Integration
The module is very easy to use.
* step one : Date Format
you need to have a date with this format`Y-M-dd h:m:s` eg: `2020-12-15` and if there is time follow the same rule to avoid crash, `Y-M-dd h:m:s` eg `2020-12-15 15:40:00`.

* step two : integration
include the module and form there you can pas the date as parametter, as show in the example bellow.
```javascript
    let getTime = require("remain-time");

    console.log(getTime("2020-12-15 21:40:10"));
    // expected result
    // 01h

```
it will desplay the how much has pas until the date passed on parameter.

In case you need more detail, you can add one parameters witch is optional.
```javascript
    let getTime = require("remain-time");

    console.log(getTime("2020-12-05 10:40:10"));
    // expected result
    // 2w 0d 01:19:34
```
Hope this module will be helpfull to you. 
feedback and comment are welcom.