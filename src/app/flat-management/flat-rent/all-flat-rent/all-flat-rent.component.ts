import { Component, Input, Output, EventEmitter } from '@angular/core';
import { crent } from 'src/app/model/flatrent.model';


@Component({
  selector: 'allflatrents',
  template: `
  
  <div class="container">                                 
    <div class="well hoverwell thumbnail py-3 my-3" [routerLink]="['./id',flatrentdata.userId]">
      <div > USER ID : {{flatrentdata?.userId}} </div>
      <div> OWNER NAME : {{flatrentdata?.ownerName | titlecase}} </div>
      <div>
          <span> <button [class]=buttonStyle (click)="onButtonClick()"  [routerLink]="['./id',flatrentdata.userId]"> View </button></span>
      </div>
    </div>
  </div>`,

  styleUrls: ['./all-flat-rent.component.css'],
})

export class AllFlatRentComponent {
  @Input() flatrentdata: crent[];  // property receiving the data from parent using property binding
  // creating custom event 
  @Output() customEvent = new EventEmitter();

  isDisabled = true;
  buttonStyle = "btn btn-primary";

  myFunction() {
    this.isDisabled = false
    this.buttonStyle = "btn btn-success";
  }

  onButtonClick() {
    this.customEvent.emit(this.flatrentdata);  // what ever is send  by default get stored into one javascript '$event'
  }

  on_click1() {
    alert('Flat Rent By Id');
  }

}
