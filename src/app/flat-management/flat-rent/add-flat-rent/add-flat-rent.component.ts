import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { crent } from 'src/app/model/flatrent.model';
import { FlatRentService } from 'src/app/service/flatrent.service';


@Component({
  selector: 'createflatrent',
  template: `
  <body>
    <div  class = "container" style="width:550px; "> 
      <div style="text-align:center;">
          <h3><b>New Flat Rent Registration</b></h3>
      </div>
      <hr/>
      <form [formGroup]="createForm" autocomplete="on" novalidate (ngSubmit)="addFlat(createForm.value)">
        
        <div class="form-group" >
          <label for="ownerName">Owner Name:</label>
          <input  id="ownerName" required type="text"   class="form-control" formControlName="ownerName"  (ngModel)=rent.ownerName placeholder="Enter Owner Name..." />
          <div *ngIf="(createForm.controls.ownerName?.invalid) && (createForm.controls.ownerName?.touched)" class="alert alert-danger">Required Owner Name</div>
        </div>

        <div class="form-group" >
          <label for="flatNo">Flat No:</label>
          <input  id="flatNo" required type="text"   class="form-control" formControlName="flatNo"  (ngModel)=rent.flatNo placeholder="Enter Flat No..." />
          <div *ngIf="(createForm.controls.flatNo?.invalid) && (createForm.controls.flatNo?.touched)" class="alert alert-danger">Required Flat No</div>
        </div>

        <div class="form-group" >
          <label for="amount">Amount:</label>
          <input  id="amount" [pattern]="'^[0-9]+$'" min='0'  required type="number" class="form-control" formControlName="amount" (ngModel)=rent.amount placeholder="Enter Amount ex:₹20,000..." />
          <div *ngIf="createForm.controls.amount?.invalid && (createForm.controls.amount?.touched)" class="alert alert-danger">Required Amount</div>
          <div *ngIf="createForm.controls.amount?.errors?.pattern" class="alert alert-danger">Negative amount is not allowed</div>
        </div>

        <div class="form-group" >
          <label for="flatType">Flat Type:</label>
          <input  id="flatType"  required type="text" class="form-control" formControlName="flatType" (ngModel)=rent.flatType placeholder="Enter Flat Type..." />
          <div *ngIf="createForm.controls.flatType?.invalid && (createForm.controls.flatType?.touched)" class="alert alert-danger">Required Flat Type</div>
        </div>

        <button type="submit" (click)=" on_click()" [disabled]=createForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
      </form>
    </div>
  </body>`,

  styleUrls: ['./add-flat-rent.component.css'],
}
)

export class AddFlatRentComponent implements OnInit {

  private rent: crent;
  createForm: FormGroup;

  constructor(private router: Router, private flatrentService: FlatRentService) {

  }

  ngOnInit() {

    this.createForm = new FormGroup
      ({
        ownerName: new FormControl(null, Validators.required),
        flatNo: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required),
        flatType: new FormControl(null, Validators.required)
      });
  }

  on_click() {
    alert('Added Successfully');
  }

  addFlat(newFlat) {
    this.flatrentService.addFlatRent(newFlat).subscribe(flat => this.rent = flat);
    this.router.navigate(['/navbar/flat-management/flatrent/rents'])
    console.log(newFlat)
  }

  cancel() {
    this.router.navigate(['/navbar/flat-management/flatrent/rents'])
  }

}
