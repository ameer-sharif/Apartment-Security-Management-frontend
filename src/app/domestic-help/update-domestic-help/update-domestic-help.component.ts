


  import { Component, OnInit } from '@angular/core';
  import { FormsModule,FormGroup,FormControl } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { pipe } from 'rxjs';
import { DomesticHelp } from 'src/app/Model/DomesticHelp.model';
import { DomesticService } from 'src/app/service/domestichelp.service';
  
  
  
  
  @Component({
    selector: 'update-Help',
    template: `<h1 style="text-align: center;"><u>Update Domestic Help</u></h1>
    <div class="col-md-6">
   
    <form [formGroup]="newHelpForm" autocomplete="off" novalidate (ngSubmit)="updateHelp(newHelpForm.value)">
    <div class="form-group" >
      <label for="flatNo">Flat No:</label>
          <input id="flatNo" required type="text" class="form-control" formControlName="flatNo"  readonly [ngModel]=domHelp?.flatNo />
    </div>
    <div class="form-group" >
      <label for="ownerName">Owner Name:</label>
      <em *ngIf="newHelpForm.controls.ownerName?.invalid && (newHelpForm.controls.ownerName?.touched)">Required</em>
          <input  id="ownerName" type="text" required class="form-control" formControlName="ownerName" [ngModel]=domHelp?.ownerName />
    </div>
    <div class="form-group" >
    <em *ngIf="newHelpForm.controls.name?.invalid && (newHelpForm.controls.name?.touched)">Required</em>
      <label for="name">Name:</label>
        <input id="name" required type="text" class="form-control" formControlName="name" [ngModel]=domHelp?.name />
    </div>
    <div class="form-group" >
      <label for="arrivalTime">Arrival Time:</label>
      <em *ngIf="newHelpForm.controls.arrivalTime?.invalid && (newHelpForm.controls.arrivalTime?.touched)">Required</em>
      <input  id="arrivalTime"  required type="text" class="form-control" formControlName="arrivalTime" [ngModel]=domHelp?.arrivalTime />
    </div>
    <div class="form-group" >
      <label for="departureTime"> Departure Time:</label>
      <em *ngIf="newHelpForm.controls.departureTime?.invalid && (newHelpForm.controls.departureTime?.touched)">Required</em>
         <input   id="departureTime" required type="text" formControlName="departureTime" [ngModel]=domHelp?.departureTime class="form-control"  />
    </div>
  
    <div class="form-group" >
      <label for="helpType"> Help Type:</label>
      <em *ngIf="newHelpForm.controls.helpType?.invalid && (newHelpForm.controls.helpType?.touched)">Required</em>
         <input   id="helpType" required type="text" formControlName="helpType" [ngModel]=domHelp?.helpType class="form-control" />
    </div>
  
    <div class="form-group" >
      <label for="dat"> Date:</label>
      <em *ngIf="newHelpForm.controls.dat?.invalid && (newHelpForm.controls.dat?.touched)">Required</em>
         <input   id="dat" required type="text" formControlName="dat" [ngModel]=domHelp?.dat class="form-control"/>
    </div>
    <button type="submit"  [disabled]=newHelpForm.invalid class="btn btn-primary">Update</button>
    <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
    </div>
  
    `,
    styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
  },
  
  )
  
  
  export class UpdateDomesticHelpComponent implements OnInit {
   
    flatNo : String
    domHelp : DomesticHelp ; 
    newHelpForm:FormGroup
    // dmHelp : DomesticHelp[];
    constructor(private router: Router, private domesticService: DomesticService, private activatedRoute: ActivatedRoute) {
    }
  
    ngOnInit(): void {
  
      this.newHelpForm=new FormGroup({
        flatNo:new FormControl(),
        ownerName:new FormControl(),
        name:new FormControl(),
        helpType:new FormControl(),
        arrivalTime:new FormControl(),
        departureTime:new FormControl(),
        dat:new FormControl()
      })
      console.log("on init called *")
     this.domesticService.getDomById(this.activatedRoute.snapshot.params['fid']).subscribe(dh => this.domHelp = dh);
  
      
    }
  
    updateHelp(domHelp){
         this.domesticService.updateHelp(domHelp).subscribe(pipe());
         this.router.navigate(['/domestic-help/domHelp']);
    }
  
    
    cancel() {
      this.router.navigate(['/domestic-help/domHelp'])
    }
  }
