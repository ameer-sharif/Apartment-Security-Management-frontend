import { HttpClient , HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";
import { cvehicle } from "../model/vehicle.model";


@Injectable()
export class VehicleService{

    private url : string = "http://localhost:9997/vehicle";
    
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private httpClient : HttpClient){

    }

    public getAllvehicles(): Observable<cvehicle[]>{
       // return vehicles;
       //Observable receive the data sources processing 
       //let obs:Observable<cvehicle[]> = this.httpClient.get<cvehicle[]>(this.url);
       //return obs.subscribe(data );
       return this.httpClient.get<cvehicle[]>(this.url);
    }

    public getVehicleByName(vname: string): Observable<cvehicle> {
        //return vehicle.find(vehicle => vehicle.name === vname);
        
        const url =  `${this.url}/${vname}`;
        return this.httpClient.get<cvehicle>(url);     
    }

    public addVehicle(newVehicle):Observable<cvehicle> {
    return this.httpClient.post<cvehicle>(this.url, newVehicle, this.httpOptions);
  }

  public deleteVehicle(vname: string): Observable<cvehicle> {
    // return vehicle.find( vehicle => vehicle.name === vname);
    const url = `${this.url}/${vname}`;
    return this.httpClient.delete<cvehicle>(url);
  }
  public updateVehicle(newVehicle): Observable<cvehicle> {
    return this.httpClient.put<cvehicle>(this.url, newVehicle, this.httpOptions);
  }

}