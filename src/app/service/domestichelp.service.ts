import { Injectable } from '@angular/core';
import {DomesticHelp} from '../Model/DomesticHelp.model'
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomesticService {

   private  url  : string = "http://localhost:9997/aps"

   
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient : HttpClient){
  }

  public getAllHelp(): Observable<DomesticHelp[]> {
    return this.httpClient.get<DomesticHelp[]>(this.url);
  }

  public getDomById(fid: String): Observable<DomesticHelp> {
    // return courses.find( course => course.id === cid);
    const url = `${this.url}/${fid}`;
    return this.httpClient.get<DomesticHelp>(url);
  }

  public getDomByName(fname: String): Observable<DomesticHelp> {
    // return courses.find( course => course.id === cid);
    const url = `${this.url}/nam/${fname}`;
    return this.httpClient.get<DomesticHelp>(url);
  }

  public addHelp(newHelp):Observable<DomesticHelp> {
    return this.httpClient.post<DomesticHelp>(this.url, newHelp, this.httpOptions);
  }

  public deleteHelp(flatNo:String):Observable<any>{
    const url=`${this.url}/${flatNo}`;
    return this.httpClient.delete<any>(url);
  }

  public updateHelp(domHelp): Observable<DomesticHelp> {
    return this.httpClient.put<DomesticHelp>(this.url, domHelp, this.httpOptions);
  }


}
