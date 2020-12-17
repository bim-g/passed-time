export declare class TimePassed {
    private _date;
    constructor(myDate: any);
    getTimePassed(config?: any): string;
    getThisWeek(): {
        from: Date;
        to: Date;
    };
    getDayOfMonth(): number;
    getTriSemester(): {
        from: Date;
        to: Date;
    };
    getLastWeek(): {
        from: Date;
        to: Date;
    };
    private hundleError;
}
