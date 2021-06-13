import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from'rxjs';
import { Admin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getAdminEntity() {
    throw new Error('Method not implemented.');
  }

  private url :string = "http://localhost:9997/admin";


  private admindb : Admin[];

  constructor(private httpClient : HttpClient ) { }

  public getAllDatabase(): Observable<Admin[]>{
   // return admindb;
   this.httpClient.get<Admin[]>(this.url); 
   return this.httpClient.get<Admin[]>(this.url);

  }

}