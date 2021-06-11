import { Component, OnInit } from '@angular/core';
import { IDelivery } from 'src/app/model/delivery.model';
import { DeliveryService } from 'src/app/service/delivery.service';

@Component({
  selector: 'delivery',
  template:  `<h1>Delivery Management</h1><hr/>
              <div *ngFor="let delivery of deliveries">
              <delivery-list [deliveryDetails]=delivery (customEvent)= "parentFunction($event)" ></delivery-list>
              </div>
              `
              ,
})
export class DeliveryComponent implements OnInit {

  private deliveries : IDelivery[];
  constructor(private deliveryService : DeliveryService){
    console.log("delivery clicked....")
    // this.deliveries = this.deliveryService.getDelivery();

    this.deliveryService.getDelivery().subscribe(deliveryarr => this.deliveries=deliveryarr)

  }
  ngOnInit(): void {
    this.deliveryService.getDelivery().subscribe(deliveryarr => this.deliveries=deliveryarr)
  }
  parentFunction(event) {
    console.log(event);
  }

}








  

  
 
