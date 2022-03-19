import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cflat } from 'src/app/model/flat.model';



@Component({
  selector: 'allflats',
  template: `
  <div class="container">   
    <div class="well hoverwell thumbnail py-3 my-3" [routerLink]="['./id',flatdata.userId]">
        <div > USER ID : {{flatdata?.userId}} </div>
        <div> OWNER NAME : {{flatdata?.ownerName | titlecase}} </div>
      <div>
          <span> <button [class]=buttonStyle (click) = "on_click1()" (click)="onButtonClick()"  [routerLink]="['./id',flatdata.userId]"> View </button></span>
      </div>
    </div>
  </div>`,

  styleUrls: ['./all-flats.component.css']
})
export class DisplayFlatsComponent {
  @Input() flatdata: cflat[];  // property receiving the data from parent using property binding
  
  // create custom event 
  @Output() customEvent = new EventEmitter(); 

  isDisabled = true;
  buttonStyle = "btn btn-primary";

  myFunction() {
    this.isDisabled = false
    this.buttonStyle = "btn btn-success";
  }

  onButtonClick() {
    this.customEvent.emit(this.flatdata);  // what ever is send  by default get stored into one javascript '$event'
  }

  on_click1() {
    alert('Flat Details By Id');
  }

}
