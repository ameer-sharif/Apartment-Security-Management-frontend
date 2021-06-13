import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { IGuard } from 'src/app/model/guardtrain.model';
import { GuardService } from 'src/app/service/guard.service';







@Component({
  selector: 'deleteguard',
  template: `<h1> delete </h1> `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class DeleteGuardTrainComponent implements OnInit {

guard: IGuard
  constructor(private router: Router, private guardService:GuardService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let guarddata: number = +this.activatedRoute.snapshot.params['fid'];
    console.log(guarddata)
    this.guardService.DeleteGuard(guarddata).subscribe(data => this.guard = data);
    console.log("deleted");
    this.router.navigate(['/navbar/guard-management/GuardTraining']);
  }
  
}