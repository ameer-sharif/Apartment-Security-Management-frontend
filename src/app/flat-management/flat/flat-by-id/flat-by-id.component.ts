import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';


@Component({
  selector: 'flatbyid',
  template: `
  <body>
    <div *ngIf="errorMessage" class="alert alert-danger text-center" >
      {{errorMessage?.error?.details | json}}
    </div>
    <div class="container">
      <div  class= "row-1 row-cols-2">
        <div *ngIf="flatdata" class="well hoverwell thumbnail py-6 my-6">
          <div > USER ID : {{flatdata?.userId}} </div>
          <div> OWNER NAME : {{flatdata?.ownerName | titlecase}} </div>
          <div>FLAT NO : {{flatdata?.flatNo | titlecase}} </div>
          <div>FLOOR NO : {{flatdata?.floorNo | titlecase}} </div>
          <div> FLAT TYPE : {{flatdata?.flatType | titlecase}} </div>
        </div>
      </div>
    </div>
  </body>`,

  styleUrls: ['./flat-by-id.component.css'],
})

export class FlatByIdComponent implements OnInit {

  private flatdata: cflat;
  private errorMessage;

  constructor(private flatService: FlatService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.flatService.getFlatById(+this.activatedRoute.snapshot.params['fid']).subscribe(
      (flat) => { this.flatdata = flat },
      (error) => { this.errorMessage = error },

    );
  }

}
