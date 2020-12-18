# PASSED-TIME
    Welcom
This is a simple module that allow you to get the difference between two  time left from a previous past time to now. 
eg:`2min`left
this module support `es5` and `es2015`
# Introduction 
The idea is to allow with a simple module be able to get the interval of time that left from a previous time until now.

* whats you can do with
    - you can get how much times left form a previus time untill now
    - you can get the inteval of time according to a defined time
    such as this`week`, `lastweek`,`days of this month`

* whats it can do.
    apart from those module, other expected are not avaible.

# Installation

```shell
    npm install time-passed
```
# Integration
The module is very easy to use.
- step one : Date Format
you need to have a date with this format`Y-M-dd` eg: `2020-12-15` and if there is time the following format is required to avoid crash, `Y-M-dd h:m:s` eg `2020-12-15 15:40:00`.

- step two : integration
include the module and form there you can pas the date as parametter, as show in the example bellow.
`require` or `import` are both support
- for ES5 or ES2017

* getTimePassed
this method allow to get how much time passed until nom.
```javascript
    const {PassedTime} = require("passed-time");
    let date="2020-12-17 10:23";
    const pt= new PassedTime(date)
    console.log(pt.getTimePassed());    
```
this out put look like, it will be defferent according the time you will test
```shell
    1d
```
* in case you would like to get more detail
you can diffine the configuration detail to true
```javascript
    const {PassedTime} = require("passed-time");
    // import {PassedTime} from "passed-time"; 
    let date="2020-12-17 10:23";
    const pt= new PassedTime(date)
    console.log(pt.getTimePassed({detail:true}));
```
```shell
    1d 7h 34m 50s
```
you can display allow available module as shown on the exemple bellow
```javascript
    const {  PassedTime } = require('passed-time');

    let dat="2020-12-17 10:23";

    let past = new PassedTime(dat);

    let config={
        detail:true
    };

    let time = {
        timeLeft:past.getTimePassed(config),
        daysOfMonth:tp.getDayOfMonth(),
        thisWeekPeriod:tp.getThisWeek(),
        lastWeekPeriod:tp.getLastWeek(),
        thisTrimester:tp.getTriSemester()
    };
    console.log(time);
```
checkout ou the response will looks like
```shell
    {
        timeLeft: '1d 7h 37m 28s',
        daysOfMonth: 31,
        thisWeekPeriod: { from: '2020-12-13', to: '2020-12-19' },
        lastWeekPeriod: { from: '2020-12-06', to: '2020-12-12' },
        thisTrimester: { from: '2020-09-17', to: '2020-12-17' }
    }
```

in case you need to get the differnet between two date
```javascript
    let date={
        firstDate:"2020-12-17 10:23",
        secondDate:"2020-12-17 10:20"
    };
    let tp = new PassedTime(dat);
    console.log(tp.getTimePassed(config))
```
this is the output
```shell
    3m 0s
```