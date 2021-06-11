import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { cvehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'createvehicle',
  template: `
  <div  class = "container" style="width:550px" style="background-color:blue"> 
        <div style="text-align:center;">
          <h3><b>New Vehicle Registration</b></h3>
        </div>
    
    <form [formGroup]="createForm" autocomplete="on" novalidate (ngSubmit)="addVehicle(createForm.value)">
        

        <div class="form-group" >
          <label for="name"> NAME:</label>
          <em *ngIf="(createForm.controls.name?.invalid) && (createForm.controls.name?.touched)">Required</em>
              <input  id="name" required type="text" class="form-control" formControlName="name"  (ngModel)=vehicle?.name placeholder="Enter Name..." />
        </div>
      
        <div class="form-group" >
          <label for="date"> DATE:</label>
          <em *ngIf="(createForm.controls.date?.invalid) && (createForm.controls.date?.touched)">Required</em>
              <input  id="date" required type="date"   class="form-control" formControlName="date"  (ngModel)=vehicle?.date placeholder="Enter Date..." />
        </div>

        <div class="form-group" >
          <label for="vehicleNo"> VEHICLE NO:</label>
          <em *ngIf="(createForm.controls.vehicleNo?.invalid) && (createForm.controls.vehicleNo?.touched)">Required</em>
              <input  id="vehicleNo" required type="text"   class="form-control" formControlName="vehicleNo"  (ngModel)=vehicle?.vehicleNo placeholder="Enter Vehicle No..." />
        </div>

        <div class="form-group" >
          <label for="vehicleType"> VEHICLE TYPE:</label>
        <em *ngIf="createForm.controls.vehicleType?.invalid && (createForm.controls.vehicleType?.touched)">Required</em>
        <input  id="vehicleType"  required type="text" class="form-control" formControlName="vehicleType" (ngModel)=vehicle?.vehicleType placeholder="Enter Vehicle Type..." />
      </div>

      <div class="form-group" >
      <label for="departureTime"> DEPARTURE TIME:</label>
      <em *ngIf="createForm.controls.departureTime?.invalid && (createForm.controls.departureTime?.touched)">Required</em>
      <input  id="departureTime"  required type="text" class="form-control" formControlName="departureTime" (ngModel)=vehicle?.departureTime placeholder="Enter Departure Time..." />
    </div>

        <div class="form-group" >
          <label for="arrivalTime"> ARRIVAL TIME:</label>
          <em *ngIf="createForm.controls.arrivalTime?.invalid && (createForm.controls.arrivalTime?.touched)">Required</em>
          <input  id="arrivalTime"  required type="text" class="form-control" formControlName="arrivalTime" (ngModel)=vehicle?.arrivalTime placeholder="Enter Arrival Time..." />
        </div>

       
      <div class="form-group" >
      <label for="parkingTime"> PARKING TIME:</label>
      <em *ngIf="createForm.controls.parkingTime?.invalid && (createForm.controls.parkingTime?.touched)">Required</em>
      <input  id="parkingTime"  required type="text" class="form-control" formControlName="parkingTime" (ngModel)=vehicle?.parkingTime placeholder="Enter Parking Time..." />
    </div>

        
        <button type="submit"  [disabled]=createForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
  <div>`,
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
}
)
export class AddVehicleComponent implements OnInit {

  private vehicle: cvehicle;
  createForm: FormGroup;
  constructor(private router: Router, private vehicleService: VehicleService) {
  }

  ngOnInit(){

    console.log("* create vehicle *")

    this.createForm = new FormGroup
    ({
          name : new FormControl(),
          date : new FormControl(),
          vehicleNo : new FormControl(),
          vehicleType : new FormControl(),
          departureTime : new FormControl(),
          arrivalTime : new FormControl(),
          parkingTime : new FormControl(),

    });
    
  }

  addVehicle(newVehicle) {
    this.vehicleService.addVehicle(newVehicle).subscribe(vehicle => this.vehicle = vehicle);
    this.router.navigate(['./vehicle-management/vehicle'])
    console.log(newVehicle)
    }

  cancel() {
    this.router.navigate(['./vehicle-management/vehicle'])
  }

}