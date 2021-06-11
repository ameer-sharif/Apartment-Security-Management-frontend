import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-management',
  template: `

          <div class="container-fluid text-center ">
           <div class="row">
          <div class="col" >
          <button class=" btn btn-success" [routerLink]="['./flat']" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:true}">FLAT </button> &nbsp;
          <button class=" btn btn-success" [routerLink]="['./flatrent']" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:true}">FLAT RENT </button>
          </div>
          </div>
          </div>

          <router-outlet></router-outlet>
          `,
  styleUrls: ['./flat-management.component.css']
})
export class FlatManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
