import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IDelivery } from "../model/delivery.model";


@Injectable()
export class DeliveryService {
   
  private base_url : string ="http://localhost:9997/deliveries";
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private httpClient: HttpClient){

  }


    public getDelivery() : Observable<IDelivery[]>{
        // return deliveries;
        return this.httpClient.get<IDelivery[]>(this.base_url);
    }
    public getDeliveryById(did : number) : Observable<IDelivery>{
        // return deliveries.find(delivery => delivery.deliveryId === did);
        const getbyidurl = `${this.base_url}/id/${did}`;
        return this.httpClient.get<IDelivery>(getbyidurl);
    }

    public getDeliveryByName(dname : string) : Observable<IDelivery>{
      // return deliveries.find(delivery => delivery.deliveryId === did);
      const getbynameurl = `${this.base_url}/name/${dname}`;
      return this.httpClient.get<IDelivery>(getbynameurl);
  }

    public addDelivery(newDelivery):Observable<IDelivery> {
        return this.httpClient.post<IDelivery>(this.base_url, newDelivery, this.httpOptions);
      }

    public deleteDelivery(did : number) : Observable<IDelivery>{
        // return deliveries.find(delivery => delivery.deliveryId === did);
        const base_url = `${this.base_url}/${did}`;
        return this.httpClient.delete<IDelivery>(base_url);
    } 

    public updateDelivery(newDelivery):Observable<IDelivery> {
      return this.httpClient.put<IDelivery>(this.base_url, newDelivery, this.httpOptions);
    }
    

}