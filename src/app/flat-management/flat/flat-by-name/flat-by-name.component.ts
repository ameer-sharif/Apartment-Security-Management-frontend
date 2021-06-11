import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';


@Component({
  selector: 'flatbyname',
  template:`
  <div class="container" >
  <h1> Flat Details By Name</h1>
  <hr/>
  <div  class= "row row-cols-2">
  <div  *ngFor="let flats of flats  | paginate: {itemsPerPage: 6,currentPage:p}" class="col-md-4 " > 
                         
        <div class="well hoverwell thumbnail py-3 my-3" >
        
          <div > USER ID : {{flats?.userId}} </div>
            <div> OWNER NAME : {{flats?.ownerName | titlecase}} </div>
            <div>FLAT NO : {{flats?.flatNo | titlecase}} </div>
            <div>FLOOR NO : {{flats?.floorNo | titlecase}} </div>
            <div> FLAT TYPE : {{flats?.flatType | titlecase}} </div>
            <div>
            <button class="btn btn-danger " type="submit" (click)="onButtonClick()" [routerLink]="['./',flats.ownerName]"> VIEW
            </button>
            </div>
          </div>
        </div>
      

    </div>
  </div>

  <footer>
    <pagination-controls (pageChange)="p=$event"></pagination-controls>
    </footer>
    
    
 `,
})
export class FlatByNameComponent implements OnInit{

  p: number=1;
  
    private flats: cflat[];
    private name : cflat;
    @Output() customEvent =  new EventEmitter();
  
  
    constructor(private flatService : FlatService, private activatedRoute: ActivatedRoute, private router: Router){
              

    }

    ngOnInit(){

      console.log("***all flats***");
      this.flatService.getAllflats().subscribe(flat => this.flats = flat);

     
    }

    onButtonClick(){
      this.customEvent.emit(this.flats);  // what ever is send  by default get stored into one javascript '$event'
    }
  
    /* viewflat(){
        console.log("************ view*********");
      this.flatService.getFlatByName(this.activatedRoute.snapshot.params['fname']).subscribe(f => this.name = f);
        //this.router.navigate(['/flats']);
      } */

  

  
  
}

    

  


