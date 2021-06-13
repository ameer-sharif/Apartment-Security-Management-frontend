import {Component, OnInit} from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
import { DomesticHelp } from 'src/app/Model/DomesticHelp.model';
import { DomesticService } from 'src/app/service/domestichelp.service';

  
  @Component({
      selector: 'domByName',
      templateUrl:`./domestic-help-by-name.component.html`,
      // template: `<div  *ngFor="let domHelp of domestic" class="col-md-6 ">  </div>
      // <div> {{domestic}} </div>`
      // styleUrls:['./domestic.component.css']
  })
  export class DomesticHelpByNameComponent implements OnInit {
      
      private domHelp: DomesticHelp;
      private erroMessage;
    // router: Router;
  
    // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
    constructor(private domesticService: DomesticService, private activatedRoute: ActivatedRoute,private router:Router) {
    }
  
    ngOnInit(){
       
      console.log("get by Name method of Component*****");
          this.domesticService.getDomByName(this.activatedRoute.snapshot.params['fname']).subscribe((f) => {this.domHelp = f},
                                                                                                    (error)=>{this.erroMessage=error}); 
  
    }
    deleteHelp(flatNo:String){
      console.log(flatNo);
      this.domesticService.deleteHelp(flatNo).subscribe(data => this.domHelp=data);
      this.router.navigate(['/navbar/domestic-help/domHelp']);
    }
  
    updateHelp(flatNo:String){
      this.router.navigateByUrl("/navbar/domestic-help/update/"+flatNo)
  }
    
  
  }
