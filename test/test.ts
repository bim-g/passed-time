// import {PassedTime} from '../src/index';
import passedTime from '../src/index';

// let date="2020-12-17 10:23";
let date={
        firstDate:"2020-12-17 10:23",
        secondDate:"2020-12-17 10:20"
    };

const tp = passedTime(date);
const config={
    detail:true
}

// test without configurations details
let time=tp.getTimePassed(config)

let result={
    timeLeft:time,
    daysOfMonth:tp.getDayOfMonth(),
    thisWeekPeriod:tp.getThisWeek(),
    lastWeekPeriod:tp.getLastWeek(),
    thisTrimester:tp.getTriSemester()
};
console.log(time)