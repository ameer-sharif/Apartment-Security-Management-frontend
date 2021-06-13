import { Time } from "@angular/common"
export class Visitor{
   

    constructor(
    public flatNo: string,
    public ownerName: string,
    public name: string,
    public datepost?: Date,
    public arrivalTime?: string,
    public departureTime?: string,
    
    ){
        
    }
    
}