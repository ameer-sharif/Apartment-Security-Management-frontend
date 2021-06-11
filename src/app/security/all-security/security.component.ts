import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: `./security.component.html`,
  styleUrls: ['./all-security.component.css']
})


export class SecurityComponent{

  @Input() navData

}