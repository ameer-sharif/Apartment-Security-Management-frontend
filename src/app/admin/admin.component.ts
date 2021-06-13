import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  private adminDb : Admin[];
  userData : Admin = new Admin("", "" );
  isDisable = false;
  constructor(private adminService: AdminService , private router : Router) { }

  ngOnInit() {
    this.adminService.getAllDatabase().subscribe(adminarr => this.adminDb = adminarr);
  }
  validation(){
    console.log("validation");
    console.log(this.userData.emailId);
    console.log(this.userData.password);

    if(this.adminDb.find(admin => admin.emailId === this.userData.emailId)){
      if(this.adminDb.find(admin => admin.emailId === this.userData.emailId && admin.password === this.userData.password)){
      // this.isDisable = false;
      localStorage.setItem('isAdmin','admin');
        this.router.navigate(['/navbar'])
      }else{
        document.getElementById("errPass").innerHTML = "Invalid Username";
      }
    }else{
      document.getElementById("errName").innerHTML = "Invalid username";
    }
}

}