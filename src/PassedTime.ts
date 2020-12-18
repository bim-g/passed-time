import { TypeCheck } from "./TypeCheck";

const dateformat = require('date-format');
export class PassedTime extends TypeCheck{
    private _date:string;
    private _secondDate:string;
    private _hundeError:boolean;
    private _isObject:boolean;
    // 
    constructor(myDate:any){
        super();
        this._hundeError=false;
        this._date=this._secondDate="null";
        this._isObject=false;
        this.hundleTypeInput(myDate);
    }    
    getTimePassed(config?:any):string{
        if(this._hundeError){
            return this.hundleError(this._date);
        }
        
        let dat=new Date(this._date);
        let secondDate=new Date();
        if(this._isObject){
           dat= new Date(this._secondDate);
           secondDate= new Date(this._date);
        }
        let diffTime = secondDate.getTime() - dat.getTime();
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
        let diffDay=secondDate.getDay()-dat.getDay();
        if(diffDay==1 && getHour>=10){
            return `yesterday at ${dat.getHours()}h`;
        }
        // // 
        if (getWeek >=3) {
            if(this._isObject){
                return `${getWeek}w ${getDays}d ${getHour}h ${getMinutes}m ${getSeconde}s`;
            }
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
        if(this._hundeError){
            return this.hundleError(this._date);
        }
        if(this._isObject){
            return "operation is not available to this";
        }
        let dat=new Date(this._date);
        let today= dat.getDay();
        let firstDay=new Date(dat.setDate(dat.getDate()-today));
        let lastDay=new Date(dat.setDate(firstDay.getDate()+6))
        return {
            from:dateformat("yyyy-MM-dd",firstDay),
            to:dateformat("yyyy-MM-dd",lastDay)
        }
    }
    // get number of days of a specific month
    getDayOfMonth(){
        if(this._hundeError){
            return this.hundleError(this._date);
        }
        if(this._isObject){
            return "operation is not available to this";
        }
        let dat=new Date(this._date);
        return new Date(dat.getFullYear(),(dat.getMonth()+1),0).getDate()
    }
    // get trimester Period interval form it start 
    getTriSemester(){
        if(this._hundeError){
            return this.hundleError(this._date);
        }
        if(this._isObject){
            return "operation is not available to this";
        }
        let dat=new Date(this._date);
        let from=new Date(new Date(dat.setMonth(dat.getMonth()-3)).setDate(dat.getDate()));
        let to=new Date(this._date);
        return {
            from:dateformat("yyyy-MM-dd",from),
            to:dateformat("yyyy-MM-dd",to)
        }
    }
    // get last week interval
    getLastWeek(){
        if(this._hundeError){
            return this.hundleError(this._date);
        }
        if(this._isObject){
            return "operation is not available to this";
        }
        let dat= new Date(this._date);
        let today=dat.getDay();
        let lastDay=new Date(dat.setDate(dat.getDate()-(today+1)))
        let firstDay= new Date(dat.setDate(lastDay.getDate()-6))
        return{
            from:dateformat("yyyy-MM-dd",firstDay),
            to:dateformat("yyyy-MM-dd",lastDay)
        }
    }
    // hundle type input
    private hundleTypeInput(value:any):void{       
        if(this.isString(value)){
            this._date=value;
        }else if(this.isObject(value)){
            this._date=value.firstDate;
            this._secondDate=value.secondDate;
            this._isObject=true;
        }
        this.hundleError(value);
    } 
    // hundlle error while start
    private hundleError(date:any):string{
        let newDate:Date=new Date();
        let previusDate:Date=new Date(date);
        let result:string="";
        if(this._isObject){
            newDate=new Date(date.firstDate);
            previusDate= new Date(date.secondDate);
        }
        
        if(!newDate || newDate==undefined || String(newDate)=="Invalid Date" || !previusDate || previusDate==undefined || String(previusDate)=="Invalid Date"){
            this._hundeError=true;
            console.log();
            result= "Invalid Date"
        }
        if(previusDate.getTime()>newDate.getTime()){
            this._hundeError=true;
            result= "Invalid Date: you should provide a date/time less than now";
            if(this._isObject){
              result="The second date should be less than the first date";  
            }
        }        
        return result;
    }
      
}