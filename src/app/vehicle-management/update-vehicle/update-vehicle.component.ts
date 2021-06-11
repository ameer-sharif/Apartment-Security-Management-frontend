import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { cvehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service';




@Component({
  selector: 'updatevehicle',
  template: `<div class="col-md-6">
 
  <form [formGroup]="updateForm" autocomplete="on" novalidate (ngSubmit)="updateVehicle(updateForm.value)">
        

  <div class="form-group" >
    <label for="name"> NAME:</label>
    <em *ngIf="(updateForm.controls.name?.invalid) && (updateForm.controls.name?.touched)">Required</em>
        <input  id="name" required type="text" class="form-control" formControlName="name"  [ngModel]=vehi?.name placeholder="Enter Name..." />
  </div>

  <div class="form-group" >
    <label for="date"> DATE:</label>
    <em *ngIf="(updateForm.controls.date?.invalid) && (updateForm.controls.date?.touched)">Required</em>
        <input  id="date" required type="date"   class="form-control" formControlName="date"  [ngModel]=vehi?.date placeholder="Enter Date..." />
  </div>

  <div class="form-group" >
    <label for="vehicleNo"> VEHICLE NO:</label>
    <em *ngIf="(updateForm.controls.vehicleNo?.invalid) && (updateForm.controls.vehicleNo?.touched)">Required</em>
        <input  id="vehicleNo" required type="text"   class="form-control" formControlName="vehicleNo"  [ngModel]=vehi?.vehicleNo placeholder="Enter Vehicle No..." />
  </div>

  <div class="form-group" >
    <label for="vehicleType"> VEHICLE TYPE:</label>
  <em *ngIf="updateForm.controls.vehicleType?.invalid && (updateForm.controls.vehicleType?.touched)">Required</em>
  <input  id="vehicleType"  required type="text" class="form-control" formControlName="vehicleType" [ngModel]=vehi?.vehicleType placeholder="Enter Vehicle Type..." />
</div>

<div class="form-group" >
<label for="departureTime"> DEPARTURE TIME:</label>
<em *ngIf="updateForm.controls.departureTime?.invalid && (updateForm.controls.departureTime?.touched)">Required</em>
<input  id="departureTime"  required type="text" class="form-control" formControlName="departureTime" [ngModel]=vehi?.departureTime placeholder="Enter Departure Time..." />
</div>

  <div class="form-group" >
    <label for="arrivalTime"> ARRIVAL TIME:</label>
    <em *ngIf="updateForm.controls.arrivalTime?.invalid && (updateForm.controls.arrivalTime?.touched)">Required</em>
    <input  id="arrivalTime"  required type="text" class="form-control" formControlName="arrivalTime" [ngModel]=vehi?.arrivalTime placeholder="Enter Arrival Time..." />
  </div>

 
<div class="form-group" >
<label for="parkingTime"> PARKING TIME:</label>
<em *ngIf="updateForm.controls.parkingTime?.invalid && (updateForm.controls.parkingTime?.touched)">Required</em>
<input  id="parkingTime"  required type="text" class="form-control" formControlName="parkingTime" [ngModel]=vehi?.parkingTime placeholder="Enter Parking Time..." />
</div>

  <button type="submit"  [disabled]=updateForm.invalid class="btn btn-primary">Update</button>
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  </div>

  `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class UpdateVehicleComponent implements OnInit {
 
  vname : string;
    vehi: cvehicle;
    updateForm: FormGroup;

  constructor(private router: Router, private vehicleService: VehicleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.updateForm = new FormGroup
    ({
      name : new FormControl(),
      date : new FormControl(),
      vehicleNo : new FormControl(),
      vehicleType : new FormControl(),
      departureTime : new FormControl(),
      arrivalTime : new FormControl(),
      parkingTime : new FormControl(),

});
    
    this.vehicleService.getVehicleByName(this.activatedRoute.snapshot.params['vname']).subscribe(vehicle => this.vehi = vehicle);

    // console.log(vehiclename)
    // this.vehicleService.deleteVehicle(vehiclename).subscribe(data => console.log(data));
    // this.router.navigate(['/co(urses']);
  }

  updateVehicle(vehi: cvehicle){
    console.log("*update**");
       this.vehicleService.updateVehicle(vehi).subscribe(vehicle => this.vehi = vehicle);
       this.router.navigate(['./vehicle-management/vehicle']);


      
       }
  }