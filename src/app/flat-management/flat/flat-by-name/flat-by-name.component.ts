import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';


@Component({
  selector: 'flatbyname',
  template: `
  <body>
    <div class="container" >
      <h1> Flat Details By Owner Name</h1>
      <hr/>
      <div  class= "row row-cols-2">
        <form #searchform="ngForm" autocomplete="off" novalidate (ngSubmit)="validate(searchform.value)">
          <div class="form-group">
            <label for="ownerName">OWNER NAME :</label>
            <input id="ownerName" type="text" required class="form-control" name="ownerName" (ngModel)=flatdata.ownerName
              placeholder="Enter your ownerName" >
            <div *ngIf="searchform.controls.ownerName?.invalid && (searchform.controls.ownerName?.touched)" class="alert alert-danger">
              ownerName can't be empty. </div>
            </div>
            <button type="submit" [disabled]=searchform.invalid class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="container">
      <div  class= "row row-cols-3">
        <div *ngIf="errorMessage" class="alert alert-danger  text-center">
        {{errorMessage?.error?.details | json}}
        </div>
  
        <div *ngIf="flatdata && flatdata!=null" class="well hoverwell thumbnail py-3 my-3">
          <div *ngFor="let flat of flatdata" >
            <div>
              <div> OWNER NAME : {{flat?.ownerName | titlecase}} </div>
              <div>FLAT NO : {{flat?.flatNo | titlecase}} </div>
              <div>FLOOR NO : {{flat?.floorNo | titlecase}} </div>
              <div> FLAT TYPE : {{flat?.flatType | titlecase}} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>`,
  
  styleUrls: ['./flat-by-name.component.css'],
})

export class FlatByNameComponent implements OnInit {

  p: number = 1;
  private flatdata: cflat[];
  private errorMessage = '';

  constructor(private flatService: FlatService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    this.errorMessage = "";
    this.flatdata = null;
  }

  validate(flatname) {
    console.log("***********" + flatname.ownerName);
    this.flatService.getFlatByName(flatname.ownerName).pipe().subscribe(
      (flat) => { this.ngOnInit(), this.flatdata = flat },
      (error) => { this.ngOnInit(), this.errorMessage = error },

    );
  }



}