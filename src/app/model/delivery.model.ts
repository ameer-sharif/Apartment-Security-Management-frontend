export class IDelivery {
    constructor(
        public deliveryId : number,
        public ownerName  : string,
        public time1      : string, 
        public date       : Date,
        public status1    : string
    ) { }
}