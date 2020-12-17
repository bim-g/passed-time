export default class TimePassed{
    private _date:string;
    // 
    constructor(myDate:any){
        this._date= myDate;
    }    
    getTimePassed(config?:any):string{
        let dat=new Date(this._date);
        let _hundeError=this.hundleError(this._date);
        if(_hundeError){
            return _hundeError;
        }
        let diffTime = new Date().getTime() - dat.getTime();
        // get remaining millisecond for each step
        let r_week = diffTime % (60 * 60 * 24 * 7 * 1000);
        let r_days = r_week % (60 * 60 * 24 * 1000);
        let r_hours = r_days % (60 * 60 * 1000);
        let r_minute = r_hours % (60 * 1000);
        // get periode of time
        let getWeek =Math.floor(diffTime / (60 * 60 * 24 * 7 * 1000));
        let getDays =Math.floor(r_week / (60 * 60 * 24 * 1000));
        let getHour =Math.floor(r_days / (60 * 60 * 1000));
        let getMinutes =Math.floor(r_hours / (60 * 1000));
        let getSeconde =Math.floor(r_minute / 1000);
        let timePost = "";
        // check congiguration
        let detail=false;
        if(config && config.detail!=undefined){
            detail=config.detail;
        }
        // 
        let diffDay=new Date().getDay()-dat.getDay();
        if(diffDay==1 && getHour>=10){
            return `yesterday at ${dat.getHours()}h`;
        }
        // // 
        if (getWeek >=3) {
            return String(new Date(this._date));
        }else if (getWeek>0 ) {
            return  detail ? `${getWeek}w ${getDays}d ${getHour}h ${getMinutes}m ${getSeconde}s` : `${getWeek}w`;
        } else if (getDays > 0 && getDays < 7) {
            return  detail ? `${getDays}d ${getHour}h ${getMinutes}m ${getSeconde}s` : `${getDays}d`;
        } else if (getHour > 0 && getHour < 24) { 
            return  detail ? `${getHour}h ${getMinutes}m ${getSeconde}s` : `${getHour}h`;
        } else if (getMinutes > 0 && getMinutes < 60) {
            return detail? `${getMinutes}m ${getSeconde}s`: `${getMinutes}m`;
        } else {
            return `${getSeconde}s`;
        }
    }
    // get this week interval
    getThisWeek(){
        let dat=new Date(this._date);
        let today= dat.getDay();
        let firstDay=new Date(dat.setDate(dat.getDate()-today));
        let lastDay=new Date(dat.setDate(firstDay.getDate()+6))
        return {
            from:firstDay,
            to:lastDay
        }
    }
    // get number of days of a specific month
    getDayOfMonth(){
        let dat=new Date(this._date);
        return new Date(dat.getFullYear(),dat.getMonth(),0).getDate()
    }
    // get trimester Period interval form it start 
    getTriSemester(){
        let dat=new Date(this._date);
        let from=new Date(this._date);
        let to=new Date(new Date(dat.setMonth(from.getMonth()-3)).setDate(from.getDate()));
        return {
            from:from,
            to:to
        }
    }
    // get last week interval
    getLastWeek(){
        let dat= new Date(this._date);
        let today=dat.getDay();
        let lastDay=new Date(dat.setDate(dat.getDate()-(today+1)))
        let firstDay= new Date(dat.setDate(lastDay.getDate()-6))
        return{
            from:firstDay,
            to:lastDay
        }
    }

    private hundleError(date:string){
        let dt= new Date(date);
        if(!dt || dt==undefined){
            return "you should provide a correct format o date"
        }
        if(dt.getTime()>new Date().getTime()){
            return "you should provide a date/time thess than now";
        }
        return false;
    }   
}