import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Visitor } from 'src/app/model/visitor.model';
import { VisitorService } from 'src/app/service/visitor.service';

@Component({
  selector: 'visitor',
  template: `<h2>Visitor Component</h2>
            <div  *ngFor="let visitor of visitors | paginate: {itemsPerPage: 1 ,currentPage:p}"> 
            <allvisitor [visitorinfo] = visitor (customEvent) = "parentFunction($event)"></allvisitor>
            </div>
            <pagination-controls (pageChange)="p=$event"></pagination-controls>`
 
})
export class VisitorComponent {

  [x: string]: any;
  p: number=1;
  private visitors : Visitor[];

  constructor(private visitorService: VisitorService) {
    console.log("visitor component clicked****");
    //this.visitors = this.visitorService.getAllVisitors();
  //  let obs : Observable<Visitor[]> = this.visitorService.getAllVisitors();
  //   obs.subscribe(visitor => this.visitors = visitor);

  this.visitorService.getAllVisitors().subscribe(visitorarr => this.visitors = visitorarr);
  }

  parentFunction(event)
  { alert("Verify your Id")
    console.log(event);
  }

}