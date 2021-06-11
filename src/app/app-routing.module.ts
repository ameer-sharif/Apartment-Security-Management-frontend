import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FlatManagementComponent } from './flat-management/flat-management.component';
import { FlatRentComponent } from './flat-management/flat-rent/flat-rent.component';
import { FlatComponent } from './flat-management/flat/flat.component';
import { HomeComponent } from './home/home.component';
import { AllFlatsComponent } from './flat-management/flat/all-flats/all-flats.component';
import { AddFlatComponent } from './flat-management/flat/add-flat/add-flat.component';
import { DeleteFlatComponent } from './flat-management/flat/delete-flat/delete-flat.component';
import { UpdateFlatComponent } from './flat-management/flat/update-flat/update-flat.component';
import { FlatByIdComponent } from './flat-management/flat/flat-by-id/flat-by-id.component';
import { FlatByNameComponent } from './flat-management/flat/flat-by-name/flat-by-name.component';
import { DisplayFlatsComponent } from './flat-management/flat/all-flats/display-flat.component';
import { ViewByNameComponent } from './flat-management/flat/flat-by-name/view-by-name.component';
import { UpdateFlatFormComponent } from './flat-management/flat/update-flat/update-flatform.component';
import { FlatRentByIdComponent } from './flat-management/flat-rent/flatrentbyid.component';
import { FlatRentByNameComponent } from './flat-management/flat-rent/flatrentbyname.component';
import { AllFlatRentComponent } from './flat-management/flat-rent/allflatrents.component';
import { ViewRentByNameComponent } from './flat-management/flat-rent/viewrentbyname.component';
import { CreateFlatRentComponent } from './flat-management/flat-rent/createflatrent.component';
import { UpdateFlatRentComponent } from './flat-management/flat-rent/updateflatrent.component';
import { DeleteFlatRentComponent } from './flat-management/flat-rent/deleteflatrent.component';
import { UpdateFlatRentFormComponent } from './flat-management/flat-rent/updateflatrentform.component';
import { FlatRent1Component } from './flat-management/flat-rent/flatrent.component';

import { DeliveryManagementComponent } from './delivery-management/delivery-management.component';
import { AddDeliveryComponent } from './delivery-management/add-delivery/add-delivery.component';
import { DeleteDeliveryComponent } from './delivery-management/delete-delivery/delete-delivery.component';
import { UpdateDeliveryComponent } from './delivery-management/update-delivery/update-delivery.component';
import { DeliveryByIdComponent } from './delivery-management/delivery-by-id/delivery-by-id.component';
import { DeliveryByNameComponent } from './delivery-management/delivery-by-name/delivery-by-name.component';
import { DeliveryComponent } from './delivery-management/all-delivery/delivery.component';
import { DeliveryListComponent } from './delivery-management/all-delivery/all-delivery.component';

import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';
import { AddVehicleComponent } from './vehicle-management/add-vehicle/add-vehicle.component';
import { DeleteVehicleComponent } from './vehicle-management/delete-vehicle/delete-vehicle.component';
import { UpdateVehicleComponent } from './vehicle-management/update-vehicle/update-vehicle.component';
import { AllVehicleComponent } from './vehicle-management/all-vehicle/all-vehicle.component';
import { VehicleByNameComponent } from './vehicle-management/vehicle-by-name/vehicle-by-name.component';
import { VehicleComponent } from './vehicle-management/all-vehicle/vehicle.component';

import { GuardManagementComponent } from './guard-management/guard-management.component';

import { GuardShiftSComponent } from './guard-management/guard-shift/guard-shift.component';
import { GuardSalarySComponent } from './guard-management/guard-salary/guard-salary.component';
import { AddGuardTrainComponent } from './guard-management/guard-train/add-guardtrain/add-guardtrain.component';
import { GuardTrainByIdComponent,  } from './guard-management/guard-train/guardtrain-by-id/guardtrain-by-id.component';
import { GuardTrainByNameComponent } from './guard-management/guard-train/guardtrain-by-name/guardtrain-by-name.component';
import { AllGuardTrainComponent } from './guard-management/guard-train/all-guardtrain/all-guardtrain.component';
import { DeleteGuardTrainComponent } from './guard-management/guard-train/delete-guardtrain/delete-guardtrain.component';
import { UpdateGuardTrainComponent } from './guard-management/guard-train/update-guardtrain/update-guardtrain.component';

import { AllGuardShiftComponent } from './guard-management/guard-shift/all-guardshift/all-guardshift.component';
import { AddGuardShiftComponent } from './guard-management/guard-shift/add-guardshift/add-guardshift.component';
import { DeleteGuardShiftComponent } from './guard-management/guard-shift/delete-guardshift/delete-guardshift.component';
import { UpdateGuardShiftComponent } from './guard-management/guard-shift/update-guardshift/update-guardshift.component';
import { GuardShiftByIdComponent } from './guard-management/guard-shift/guardshift-by-id/guardshift-by-id.component';
import { GuardShiftByNameComponent } from './guard-management/guard-shift/guardshift-by-name/guardshift-by-name.component';

import { VisitorManagementComponent } from './visitor-management/visitor-management.component';

import { DomesticHelpComponent } from './domestic-help/domestic-help.component';
import { AllDomesticHelpComponent } from './domestic-help/all-domestic-help/all-domestic-help.component';
import { AddDomesticHelpComponent } from './domestic-help/add-domestic-help/add-domestic-help.component';
import { UpdateDomesticHelpComponent } from './domestic-help/update-domestic-help/update-domestic-help.component';
import { DomesticHelpByIdComponent } from './domestic-help/domestic-help-by-id/domestic-help-by-id.component';
import { DomesticHelpByNameComponent } from './domestic-help/domestic-help-by-name/domestic-help-by-name.component';

import { SecurityComponent } from './security/all-security/security.component';
import { SecurityMComponent } from './security/security.component';
import { AllSecurityComponent } from './security/all-security/all-security.component';
import { AddSecurityComponent } from './security/add-security/add-security.component';
import { UpdateSecurityComponent } from './security/update-security/update-security.component';
import { SecurityByIdComponent } from './security/security-by-id/security-by-id.component';

import { DomesticComponent } from './domestic-help/all-domestic-help/domestic-help.component';
import { AllGuardSalaryComponent } from './guard-management/guard-salary/all-guardsalary/all-guardsalary.component';
import { DeleteGuardSalaryComponent } from './guard-management/guard-salary/delete-guardsalary/delete-guardsalary.component';
import { GuardSalaryByIdComponent } from './guard-management/guard-salary/guardsalary-by-id/guardsalary-by-id.component';
import { GuardSalaryByNameComponent } from './guard-management/guard-salary/guardsalary-by-name/guardsalary-by-name.component';
import { UpdateGuardSalaryComponent } from './guard-management/guard-salary/update-guardsalary/update-guardsalary.component';
import { AddGuardSalaryComponent } from './guard-management/guard-salary/add-guardsalary/add-guardsalary.component';
import { GuardTrainComponent } from './guard-management/guard-train/all-guardtrain/guardtrain.component';
import { GuardShiftComponent } from './guard-management/guard-shift/all-guardshift/guardshift.component';
import { GuardSalaryComponent } from './guard-management/guard-salary/all-guardsalary/guardsalary.component';


const routes: Routes = [

  {
    path: "flat-management",
    component: FlatManagementComponent,
    children: [
      {
        path: "flat", component: FlatComponent,
        children: [
          { path: "flats", component: AllFlatsComponent },
          { path: "new", component: AddFlatComponent },
          { path: "flats/id/:fid", component: FlatByIdComponent },
          { path: "name", component: FlatByNameComponent },
          { path: "name/:fname", component: ViewByNameComponent },

          { path: "delete", component: DeleteFlatComponent },
          { path: "delete/:fid", component: DeleteFlatComponent },

          { path: "update", component: UpdateFlatComponent },
          { path: "update/:fid", component: UpdateFlatFormComponent },
        ]
      },


      {
        path: "flatrent", component: FlatRentComponent,
        children: [
          { path: "rents", component: FlatRent1Component },
          { path: "new", component: CreateFlatRentComponent },
          { path: "rents/id/:fid", component: FlatRentByIdComponent },
          { path: "name", component: FlatRentByNameComponent },
          { path: "name/:fname", component: ViewRentByNameComponent },

          { path: "delete", component: DeleteFlatRentComponent },
          { path: "delete/:fid", component: DeleteFlatRentComponent },

          { path: "update", component: UpdateFlatRentComponent },
          { path: "update/:fid", component: UpdateFlatRentFormComponent },
        ]

      },
    ]
  },

  {
    path: "delivery-management",
    component: DeliveryManagementComponent,
    children: [
      
          { path: "deliveries", component: DeliveryComponent },
          { path: "new", component: AddDeliveryComponent },
          { path: "deliveries/id/:did", component: DeliveryByIdComponent },
          { path: "deliveries/name/:dname", component: DeliveryByNameComponent },
          { path: "deliveries/:did", component: DeleteDeliveryComponent }, 
          { path: "updatedelivery/:did", component: UpdateDeliveryComponent },
        ]
  },

  {
    path: "vehicle-management",
    component: VehicleManagementComponent,
    children: [
      
          { path: "vehicle", component: VehicleComponent },
          { path: "vehicle/new", component: AddVehicleComponent },
          
          { path: "vehicle/:vname", component: VehicleByNameComponent },
          { path: "deletevehicle/:vname", component: DeleteVehicleComponent }, 
          { path: "updateVehicle/:vname", component: UpdateVehicleComponent },
        ]
  },

  {
    path: "domestic-help",
    component: DomesticHelpComponent,
    children: [
      
          { path: "domHelp", component: DomesticComponent },
          { path: "createHelp", component: AddDomesticHelpComponent },
          { path: "domHelp/:fid", component: DomesticHelpByIdComponent },
          { path: "domHelp/nam/:fname", component: DomesticHelpByNameComponent },
          { path: "update/:fid", component: UpdateDomesticHelpComponent },
        ]
  },

  {
    path: "securityM",
    component: SecurityMComponent,
    children: [
      
          { path: "security", component: AllSecurityComponent },
          { path: "addSecure", component: AddSecurityComponent },
          { path: "secureById/:mid", component: SecurityByIdComponent },
          { path: "updateSecure/:mid", component: UpdateSecurityComponent },
        ]
  },

  {
    path: "guard-management",
    component: GuardManagementComponent,
    children: [
      
      {path:"GuardTraining",component:GuardTrainComponent},
      {path:"GuardTraining/userId/:fid",component:GuardTrainByIdComponent},
      {path:"GuardTraining/delete/:fid",component:DeleteGuardTrainComponent},
      {path:"GuardTraining/update/:fid",component:UpdateGuardTrainComponent},
      {path:"GuardTraining/new",component:AddGuardTrainComponent},
      {path:"GuardTraining/name/:fname",component:GuardTrainByNameComponent},

      {path:"GuardShift",component:GuardShiftComponent},
      {path:"GuardShift/new",component:AddGuardShiftComponent},
      {path:"GuardShift/userId/:fid",component:GuardShiftByIdComponent},
      {path:"GuardShift/delete/:fid",component:DeleteGuardShiftComponent},
      {path:"GuardShift/update/:fid",component:UpdateGuardShiftComponent},
      {path:"GuardShift/name/:fname",component:GuardShiftByNameComponent},

      {path:"GuardSalary",component:GuardSalaryComponent},
      {path:"GuardSalary/new",component:AddGuardSalaryComponent},
      {path:"GuardSalary/userId/:fid",component:GuardSalaryByIdComponent},
      {path:"GuardSalary/delete/:fid",component:DeleteGuardSalaryComponent},
      {path:"GuardSalary/update/:fid",component:UpdateGuardSalaryComponent},
      {path:"GuardSalary/name/:fname",component:GuardSalaryByNameComponent},
        ]
  },
    




  { path: '**', component: ErrorComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  HomeComponent,
  FlatComponent,
  ErrorComponent,
  FlatManagementComponent,
  AllFlatsComponent,
  AddFlatComponent,
  DeleteFlatComponent,
  UpdateFlatComponent,
  UpdateFlatFormComponent,
  FlatByIdComponent,
  FlatByNameComponent,
  ViewByNameComponent,
  DisplayFlatsComponent,

  FlatRentComponent,
  FlatRent1Component,
  AllFlatRentComponent,
  FlatRentByIdComponent,
  FlatRentByNameComponent,
  ViewRentByNameComponent,
  CreateFlatRentComponent,
  DeleteFlatRentComponent,
  UpdateFlatRentComponent,
  UpdateFlatRentFormComponent,


  DeliveryManagementComponent,
  AddDeliveryComponent,
  DeliveryListComponent,
  DeleteDeliveryComponent,
  UpdateDeliveryComponent,
  DeliveryComponent,
  DeliveryByIdComponent,
  DeliveryByNameComponent,

  VehicleManagementComponent,
    AddVehicleComponent,
    DeleteVehicleComponent,
    UpdateVehicleComponent,
    AllVehicleComponent,
    VehicleComponent,
    VehicleByNameComponent, 

 GuardManagementComponent,
   
    AllGuardTrainComponent,
    GuardTrainComponent,
    AddGuardTrainComponent,
    DeleteGuardTrainComponent,
    UpdateGuardTrainComponent,
    GuardTrainByIdComponent,
    GuardTrainByNameComponent,

    GuardShiftSComponent,
    GuardShiftComponent,
    AllGuardShiftComponent,
    AddGuardShiftComponent,
    DeleteGuardShiftComponent,
    UpdateGuardShiftComponent,
    GuardShiftByIdComponent,
    GuardShiftByNameComponent,

    GuardSalarySComponent,
    GuardSalaryComponent,
    AllGuardSalaryComponent,
    AddGuardSalaryComponent,
    DeleteGuardSalaryComponent,
    UpdateGuardSalaryComponent,
    GuardSalaryByIdComponent,
    GuardSalaryByNameComponent,
 

    DomesticHelpComponent,
    DomesticComponent,
    AllDomesticHelpComponent,
    AddDomesticHelpComponent,
    UpdateDomesticHelpComponent,
    DomesticHelpByIdComponent,
    DomesticHelpByNameComponent,

    VisitorManagementComponent,
   
    SecurityMComponent,
    SecurityComponent,
    AllSecurityComponent,
    AddSecurityComponent,
    UpdateSecurityComponent,
    SecurityByIdComponent,




]