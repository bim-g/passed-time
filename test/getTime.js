let getRemainTime = require('../index');
let mytime = "2020-12-15 21:40:10";
let moretime = "2020-12-01 21:40:10";
// without configuration parameter
// the module can teake a parameter to display or not more details
let rtime = getRemainTime(mytime);
console.log(rtime);
rtime = getRemainTime(moretime, {
    detail: true
});
console.log(rtime);