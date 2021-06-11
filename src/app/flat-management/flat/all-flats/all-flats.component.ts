 import { Component, OnInit } from '@angular/core';
  import { observable, Observable } from 'rxjs';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';
 
  
  @Component({
    selector: 'flats',
    template: `<div class="container" >
                  <h1>Flat Details</h1>
                  <hr/>
                  <div  class= "row row-cols-2">
                  <div  *ngFor="let flats of flats  | paginate: {itemsPerPage: 6,currentPage:p}" class="col-md-4 " >  
                   
                          <allflats  [flatdata] = flats  (customEvent)="parentFunction($event)" ></allflats>   
                  </div>
                 
                </div>

                <footer>
                <pagination-controls (pageChange)="p=$event"></pagination-controls>
                </footer>
                `

  
  })
  export class AllFlatsComponent implements OnInit {
  
    p: number=1;

    parentFunction(event) {
      console.log(event);
    }
  
    
    private flats: cflat[];
  
    constructor(private flatService : FlatService){
     
    
  }
  
  ngOnInit(){
    console.log("***********all flats**************");
    
    this.flatService.getAllflats().subscribe(flatdata => this.flats = flatdata)
  
  }
  
  
  
    
  }
  
 
  
  