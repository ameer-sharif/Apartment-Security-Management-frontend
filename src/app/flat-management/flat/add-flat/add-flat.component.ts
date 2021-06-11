import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';


@Component({
  selector: 'createflat',
  template: `
  <div  class = "container" style="width:550px; background-color: green"> 
        <div style="text-align:center;">
          <h3><b>New Flat Registration</b></h3>
        </div>
    
        <form [formGroup]="createForm" autocomplete="on" novalidate (ngSubmit)="addFlat(createForm.value)">
        

        <div class="form-group" >
          <label for="userId">User Id:</label>
          <em *ngIf="(createForm.controls.userId?.invalid) && (createForm.controls.userId?.touched)">Required</em>
              <input  id="userId" required type="text" class="form-control" formControlName="userId"  (ngModel)=flat?.userId placeholder="Enter User Id..." />
        </div>
      
        <div class="form-group" >
          <label for="ownerName">Owner Name:</label>
          <em *ngIf="(createForm.controls.ownerName?.invalid) && (createForm.controls.ownerName?.touched)">Required</em>
              <input  id="ownerName" required type="text"   class="form-control" formControlName="ownerName"  (ngModel)=flat.ownerName placeholder="Enter Owner Name..." />
        </div>

        <div class="form-group" >
          <label for="flatNo">Flat No:</label>
          <em *ngIf="(createForm.controls.flatNo?.invalid) && (createForm.controls.flatNo?.touched)">Required</em>
              <input  id="flatNo" required type="text"   class="form-control" formControlName="flatNo"  (ngModel)=flat.flatNo placeholder="Enter Flat No..." />
        </div>

        <div class="form-group" >
          <label for="floorNo">Floor No:</label>
        <em *ngIf="createForm.controls.floorNo?.invalid && (createForm.controls.floorNo?.touched)">Required</em>
        <input  id="floorNo"  required type="text" class="form-control" formControlName="floorNo" (ngModel)=flat.floorNo placeholder="Enter Floor No..." />
      </div>

        

        <div class="form-group" >
          <label for="flatType">Flat Type:</label>
          <em *ngIf="createForm.controls.flatType?.invalid && (createForm.controls.flatType?.touched)">Required</em>
          <input  id="flatType"  required type="text" class="form-control" formControlName="flatType" (ngModel)=flat.flatType placeholder="Enter Flat Type..." />
        </div>

        
        <button type="submit"  [disabled]=createForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
  <div>`,
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
}
)
export class AddFlatComponent implements OnInit {

  
  private flat: cflat;
  createForm: FormGroup;
  
  constructor(private router: Router, private flatService: FlatService) {
   
  }

  ngOnInit(){

    console.log("**** create flat ****")

    this.createForm = new FormGroup
    ({
          userId : new FormControl(),
          ownerName : new FormControl(),
          flatNo : new FormControl(),
          floorNo : new FormControl(),
          flatType : new FormControl()

    });
    
  }


  addFlat(newFlat: cflat) {
    this.flatService.addFlat(newFlat).subscribe(flat => this.flat = flat);
    this.router.navigate(['./flat-management/flat/flats'])
    console.log(newFlat)
  }

 

  cancel() {
    this.router.navigate(['./flat-management/flat/flats'])
  }






}

