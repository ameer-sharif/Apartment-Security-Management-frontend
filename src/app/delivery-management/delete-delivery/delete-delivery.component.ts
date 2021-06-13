import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDelivery } from 'src/app/model/delivery.model';
import { DeliveryService } from 'src/app/service/delivery.service';


@Component({
  selector: 'delete-delivery',
  template:  ``
              ,
              
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']

})
export class DeleteDeliveryComponent implements OnInit {
  
  delete : IDelivery;

  constructor(private router: Router, private deliveryService: DeliveryService,private activatedRoute:ActivatedRoute) {
  }

  
  ngOnInit(): void {
    let deliveryId : number = this.activatedRoute.snapshot.params['did'];
    console.log(deliveryId);
    this.deliveryService.deleteDelivery(deliveryId).subscribe(data =>this.delete= data);
    console.log("deleted");
    this.router.navigate(['/navbar/delivery-management/deliveries']);
  }
 

}