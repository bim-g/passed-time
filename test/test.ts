import TimePassed from '../src/index';

let date="2020-12-17 10:23";

const tp = new TimePassed(date);
const config={
    detail:true
}

// test without configurations details
let time=tp.getTimePassed()
console.log(time);

// time with configuration details
time=tp.getTimePassed(config);
console.log(time)