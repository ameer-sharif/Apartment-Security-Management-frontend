import { Component,Input,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'allguardtrain',
  template:`<div >
  <div class="well hoverwell thumbnail py-3 my-3">
      <div > USER ID : {{guarddata?.userId}} </div>
      <div>GUARD TRAINIE NAME : {{guarddata?.name | titlecase}} </div>
      <div>DATE : {{guarddata?.date | titlecase}} </div>
      <div>MOBILE NO : {{guarddata?.mobileNo | titlecase}} </div>
      <div>STATUS : {{guarddata?.status | titlecase}} </div>
      <div>TIMEING : {{guarddata?.timeing | titlecase}} </div>
      <div>
          <span> <button [class]=buttonStyle (click)="onButtonClick()" [routerLink]="['/navbar/guard-management/GuardTraining/userId',guarddata.userId]"> View By Id</button></span>
      </div>

      <div>
      <span> <button [class]=buttonStyle (click)="onButtonClick()" [routerLink]="['/navbar/guard-management/GuardTraining/name',guarddata.name]"> View By Name</button></span>
  </div>
  </div>
</div>`,
})
export class AllGuardTrainComponent {
  @Input() guarddata;  // property receiving the data from parent using property binding
  // We can create custom event 
   @Output() customEvent =  new EventEmitter(); //   (customEvent) = "someFunction"
 
   isDisabled = true ;  
   buttonStyle = "btn btn-primary";
    
   public i:number=10;

   myFunction(){
     this.isDisabled = false
     this.buttonStyle = "btn btn-success";
   }

 
   onButtonClick(){
     this.customEvent.emit(this.guarddata);  // what ever is send  by default get stored into one javascript '$event'
   }

  

}