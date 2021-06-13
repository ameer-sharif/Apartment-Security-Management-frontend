import {Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Security } from 'src/app/Model/Security.model';
import { SecurityService } from 'src/app/service/security.service';

@Component({
  selector: 'app-security-by-id',
  templateUrl: './security-by-id.component.html',
  styleUrls: ['./security-by-id.component.css']
})
export class SecurityByIdComponent implements OnInit {
   private secur:Security;
   private errorMessage;


    constructor(private securityService: SecurityService, private activatedRoute: ActivatedRoute,private router:Router) {
    }
    ngOnInit(){   
    console.log("get by id method of Component*****");
          this.securityService.getsecureById(this.activatedRoute.snapshot.params['mid']).subscribe((f) => {this.secur = f},
                                                                                                (error)=>{this.errorMessage=error},  ); // Capture id from URL and passit to service
    }   
    updateSecurity(msgId:String){
        this.router.navigateByUrl("/navbar/securityM/updateSecure/"+msgId)
    }

    deleteSecurity(msgId:String){
        console.log(msgId);
        this.securityService.deleteSecurity(msgId).subscribe(data => this.secur=data);
        this.router.navigate(['/navbar/securityM/security']);
      }

    
}
