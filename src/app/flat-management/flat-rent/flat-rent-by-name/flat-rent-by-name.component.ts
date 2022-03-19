import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { crent } from 'src/app/model/flatrent.model';
import { FlatRentService } from 'src/app/service/flatrent.service';


@Component({
  selector: 'flatRentbyname',
  template: `
  <body>
    <div class="container" >
      <h1> Flat Rent Details By Owner Name</h1>
      <hr/>
      <div  class= "row row-cols-2">                 
        <form #searchform="ngForm" autocomplete="off" novalidate (ngSubmit)="validate(searchform.value)">
          <div class="form-group">
            <label for="ownerName">OWNER NAME :</label>
            <input id="ownerName" type="text" required class="form-control" name="ownerName" (ngModel)=flatrent.ownerName
            placeholder="Enter your ownerName" >
            <div *ngIf="searchform.controls.ownerName?.invalid && (searchform.controls.ownerName?.touched)" class="alert alert-danger">
            ownerName can't be empty. </div>
          </div>
          <button type="submit"   [disabled]=searchform.invalid class="btn btn-primary">Search</button>
        </form>
      </div>    
      <br>
      <br>
      <br>
      <div class="container">
        <div  class= "row row-cols-3">
          <div *ngIf="errorMessage" class="alert alert-danger  text-center">
          {{errorMessage?.error?.details | json}}
          </div>
          <div *ngIf="flatrent && flatrent!=null" class="well hoverwell thumbnail py-3 my-3  ">
            <div *ngFor="let flat of flatrent ">
              <div> OWNER NAME : {{flat?.ownerName | titlecase}} </div>
              <div>FLAT NO : {{flat?.flatNo | titlecase}} </div>
              <div>AMOUNT : {{flat?.amount |currency:"INR"}} </div>
              <div> FLAT TYPE : {{flat?.flatType | titlecase}} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>`,
  styleUrls: ['./flat-rent-by-name.component.css'],
})

export class FlatRentByNameComponent implements OnInit {

  p: number = 1;
  private flatrent: crent[];
  private errorMessage = '';

  constructor(private flatrentService: FlatRentService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    this.errorMessage = "";
    this.flatrent = null;
  }

  validate(flatname) {
    console.log("***********" + flatname.ownerName);
    this.flatrentService.getFlatRentByName(flatname.ownerName).pipe().subscribe(
      (flat) => { this.ngOnInit(), this.flatrent = flat },
      (error) => { this.ngOnInit(), this.errorMessage = error },

    );
  }

}