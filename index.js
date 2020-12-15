module.exports = function(oldTime,config) {
    // get remaining time after substaction.
    let diffTime = new Date(new Date().getTime() - new Date(oldTime).getTime());
    // 
    let getMinutes = parseInt(diffTime / (60 * 1000));
    let getHour = parseInt(diffTime / (60 * 60 * 1000));
    let getDays = parseInt(diffTime / (60 * 60 * 24 * 1000));
    let getWeek = parseInt(diffTime / (60 * 60 * 24 * 7 * 1000));
    // 
    // remaining time
    let r_week = diffTime % (60 * 60 * 24 * 7 * 1000);
    let r_days = r_week % (60 * 60 * 24 * 1000);
    let r_hours = r_days % (60 * 60 * 1000);
    let r_minute = r_hours % (60 * 1000);
    // 
    // get time left after operations;
    let days = parseInt(r_week / (60 * 60 * 20 * 1000));
    let hours = parseInt(r_days / (60 * 60 * 1000))<10?"0"+parseInt(r_days / (60 * 60 * 1000)):parseInt(r_days / (60 * 60 * 1000));
    let minutes = parseInt(r_hours  / (60 * 1000))<10?"0"+parseInt(r_hours  / (60 * 1000)):parseInt(r_hours  / (60 * 1000));
    let secondes = parseInt(r_minute / 1000) < 10 ?"0"+parseInt(r_minute / 1000):parseInt(r_minute / 1000);
    let timePost = "";
    // check congiguration
    let detail=false;
    if(config && config.detail!=undefined){
        detail=config.detail;
    }
    // 
    if (getWeek >=3) {
        return new Date(oldTime);
    }else if (getDays >=7 && getWeek<3) {
        timePost += detail ? `${getWeek}w ${days}d ${hours}:${minutes}:${secondes}` : `${getWeek}`;
        
    } else if (getHour > 23 && getDays < 6) {
        timePost += detail ? `${getDays}d ${hours}:${minutes}:${secondes}` : `${getDays}d`;

    } else if (getHour > 0 && getHour < 24) { 
        timePost += detail ? `${hours}:${minutes}:${secondes}` : `${hours}h`;

    } else if (getMinutes > 0 && getMinutes < 60) {
        timePost +=detail? `0:${minutes}:${secondes}`: `${minutes}m`;

    } else {
        timePost +=`${secondes}s`;
    }
   
    return timePost;
}