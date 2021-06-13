import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";
import { Visitor } from "../model/visitor.model";

@Injectable()
export class VisitorService {
  [x: string]: any;
 
  private base_url : string = "http://localhost:9997/visitors"

 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
    constructor(private httpClient : HttpClient ){
    }
   public getAllVisitors(): Observable<Visitor[]> {
        return  this.httpClient.get<Visitor[]>(this.base_url);
        
    }
    public getVisitorById(fno : number): Observable<Visitor> {
      const getbyidurl = `${this.base_url}/id/${fno}`;
      console.log(getbyidurl);
      return this.httpClient.get<Visitor>(getbyidurl);  
    }

    public getVisitorByName(vname : string): Observable<Visitor> {
      const getbynameurl = `${this.base_url}/name/${vname}`;
      console.log(getbynameurl);
      return this.httpClient.get<Visitor>(getbynameurl);  
    }


    public addVisitor(newVisitor: Visitor ):Observable<Visitor> {
      console.log(this.base_url);
      return this.httpClient.post<Visitor>(this.base_url, newVisitor, this.httpOptions);
      
    }  
  public updateVisitor(newVisitor: Visitor): Observable<Visitor> {
    // const url = `${this.url}/${fno}`;
    console.log("*******url")
    return this.httpClient.put<Visitor>(this.base_url,newVisitor, this.httpOptions);
  }


    public delete(flatNo:String):Observable<any>{
      const deleteurl=`${this.base_url}/${flatNo}`;
      return this.httpClient.delete<any>(deleteurl);
    }

    // public updateHelp(fno : number):Observable<any>{
    //   const url=`${this.url}/${fno}`;
    //   return this.httpClient.put<any>(url);
    // }
  //observable recieve data sources & programing on
      //  let obs : Observable<Visitor[]>= this.httpClient.get<Visitor[]>(this.url);

}