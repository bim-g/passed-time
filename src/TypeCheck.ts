export class TypeCheck{
    // protected constructor(private name:any){}
    protected isString(x:any):boolean{
        return typeof x==="string";
    }   
    protected isNumber(x:any):boolean{
        return typeof x==="number";
    }   
    protected isObject(x:any):boolean{
        return typeof x==="object";
    }
}