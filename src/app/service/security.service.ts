import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Security} from '../Model/Security.model'

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private  url  : string = "http://localhost:9997/apart"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 
  constructor(private httpClient : HttpClient){
  }

  public getAllSecurity(): Observable<Security[]> {
    return this.httpClient.get<Security[]>(this.url);
  }

  public getsecureById(mid: String): Observable<Security> {
    // return courses.find( course => course.id === cid);
    const url = `${this.url}/${mid}`;
    return this.httpClient.get<Security>(url);
  }

  public addSecurity(secure):Observable<Security> {
    return this.httpClient.post<Security>(this.url, secure, this.httpOptions);
  }

  public updateSecurity(secure): Observable<Security> {
    return this.httpClient.put<Security>(this.url, secure, this.httpOptions);
  }

  public deleteSecurity(msgId:String):Observable<any>{
    const url=`${this.url}/${msgId}`;
    return this.httpClient.delete<any>(url);
  }

}