import { Component, OnInit } from '@angular/core';
import { GuardShift } from 'src/app/model/guardshift.model';
import { GuardService } from 'src/app/service/guard.service';


@Component({
  selector: 'guardshift',
  template: `<div >
                <h1>Guard Shift Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let guards of guards" class="col-md-4 ">  
                        <allguardshift #allguards [guarddata] = guards  (customEvent)="parentFunction($event)" ></allguardshift>
                        <!-- <div>
                        {{allguards.i}}
                        {{allguards.testmyFunction()}}
                        </div> 
                        -->

                  </div>
              </div>`

})
export class GuardShiftComponent {


  //private guardService:GuardService;
  private guards:GuardShift[];
  //private guardService:GuardService


  constructor(private guardService:GuardService )         //Dependency injection
  {
    //this.guardService=new GuardService;
    this.guardService.getAllGuardShift().subscribe(guarddata => this.guards = guarddata);
  } 




  parentFunction(event) {
    console.log(event);
  }


}

function ngOnInit() {
  throw new Error('Function not implemented.');
}