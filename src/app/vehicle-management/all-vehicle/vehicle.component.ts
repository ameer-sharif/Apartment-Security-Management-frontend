import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { cvehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service';


@Component({
  selector: 'vehicle',
  template: `<div class="container" style="background-color:blue" >
                <h1>Vehicle Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let vehicles of vehicles" class="col-md-4 ">  
                        <allvehicles #allvehicle [vehicledata] = vehicles  (customEvent)="parentFunction($event)" ></allvehicles>    
                      <!-- <div>
                          {{allvehicle.i}}
                      </div> -->

                </div>
              </div>`

})
export class VehicleComponent {

  parentFunction(event) {
    console.log(event);
  }

  
  private vehicles: cvehicle[];

  constructor(private vehicleService : VehicleService){
    console.log("*all vehicles**");
    /* let obs : Observable<cvehicle[]> =this.vehicleService.getAllvehicles()
    obs.subscribe(allvehicles => this.vehicles = data) */

    this.vehicleService.getAllvehicles().subscribe(vehicledata => this.vehicles = vehicledata)
  }

  
}