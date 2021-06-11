  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  import { Router } from '@angular/router';
import { IDelivery } from 'src/app/model/delivery.model';
import { DeliveryService } from 'src/app/service/delivery.service';

  
  @Component({
    selector: 'create-delivery',
    template:  `<div class="col-md-6">
              <form [formGroup]="createForm"  autocomplete="on" novalidate (ngSubmit)="addDelivery(createForm.value)">
            <div class="form-group" >
              <label for="deliveryId">Delivery Id:</label>
              <em *ngIf="createForm.controls.deliveryId?.invalid && (createForm.controls.deliveryId?.touched)">Required</em>
              <input  id="deliveryId" type="text" required class="form-control" formControlName="deliveryId"  (ngModel)=delivery?.deliveryId placeholder="Enter delivery Id..." />
            </div>
            <div>
              <label for="DeliveryName">Owner Name:</label>
              <em *ngIf="createForm.controls.ownerName?.invalid && (createForm.controls.ownerName?.touched)">Required</em>
              <input  id="ownerName" type="text" required class="form-control" formControlName="ownerName"  (ngModel)=delivery?.ownerName placeholder="Enter delivery Owner Name..." />
          </div>
              <div class="form-group" >
             <em *ngIf="createForm.controls.date?.invalid && (createForm.controls.date?.touched)">Required</em>
             <label for="DeliveryDate">Delivery Date:</label>
              <input id="DeliveryeDate" required type="date" class="form-control" formControlName="date" (ngModel)=delivery?.date placeholder="format (mm/dd/yyyy)..." />
            </div>
            <div class="form-group" >
              <label for="DeliveryTime">Delivery Time:</label>
              <em *ngIf="createForm.controls.time1?.invalid && (createForm.controls.time1?.touched)">Required</em>
              <input  id="DeliveryTime"  required type="text" class="form-control" formControlName="time1" (ngModel)=delivery?.time1 placeholder="start and end time..." />
            </div>
            <div class="form-group" >
            <label for="DeliveryStatus">Delivery Status:</label>
            <em *ngIf="createForm.controls.status1?.invalid && (createForm.controls.status1?.touched)">Required</em>
            <input  id="DeliveryStatus"  required type="text" class="form-control" formControlName="status1" (ngModel)=delivery?.status1 placeholder="Delivery Status..." />
          </div>
          <button type="submit"  [disabled]=createForm.invalid class="btn btn-primary">Save</button>
            <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
      </form>
    </div>`
                ,
                
    styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
  
  })
  export class AddDeliveryComponent implements OnInit {
    private delivery : IDelivery;
    createForm : FormGroup;
    // delivery : IDelivery=new IDelivery(0,null,null,null,null)
    constructor(private router: Router, private deliveryService: DeliveryService) {
    }
  
    ngOnInit(){
  
      console.log("* create delivery *")
  
      this.createForm = new FormGroup
      ({
        deliveryId  : new FormControl(),
        ownerName   : new FormControl(),
        time1       : new FormControl(),
        date        : new FormControl(),
        status1     : new FormControl()
  
      });
      
    }
  
  
    addDelivery(newdelivery) {
      this.deliveryService.addDelivery(newdelivery).subscribe(delivery => this.delivery=delivery);
      this.router.navigate(['./delivery-management/deliveries']);
      console.log(newdelivery);
    }
  
    
  
  
    cancel() {
      this.router.navigate(['./delivery-management/deliveries'])
    }
  
  
  }