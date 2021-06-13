import { Time } from "@angular/common"
export class User{
   

    constructor(
    public userId: number,
    public firstName: string,
    public lastName: string,
    public loginId: string,
    private password: string,
    private mobileNo: string,
    public emailId: string,
    public roleId: number,
    
    ){
        
    }
    
}