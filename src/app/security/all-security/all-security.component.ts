import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Security } from 'src/app/Model/Security.model';
import { SecurityService } from 'src/app/service/security.service';

@Component({
    selector: 'security',
    templateUrl:`./all-security.component.html`,
    styleUrls:['./all-security.component.css']
})

export class AllSecurityComponent implements OnInit {

    private secur:Security[];


    constructor(private securityService:SecurityService,private router:Router){
    }
    ngOnInit(){
         console.log("Security Component Called********")
        this.securityService.getAllSecurity().subscribe(securities => this.secur = securities)
    }

    onButtonClick(mid:String){
        console.log("Butoon clicked ******")
        this.router.navigate(['/navbar/securityM/secureById/'+mid]);
      }
  
    
}
