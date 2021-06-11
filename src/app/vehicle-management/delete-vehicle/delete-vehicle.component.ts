import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { cvehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service';





@Component({
  selector: 'deletevehicle',
  template: `<h1> delete </h1> `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class DeleteVehicleComponent implements OnInit {

vdata: cvehicle
  constructor(private router: Router, private vehicleService: VehicleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let vehicledata: string = this.activatedRoute.snapshot.params['vname'];
    console.log(vehicledata)
    this.vehicleService.deleteVehicle(vehicledata).subscribe(data => this.vdata = data);
    console.log("deleted");
    this.router.navigate(['./vehicle-management/vehicle']);
  }
  
}