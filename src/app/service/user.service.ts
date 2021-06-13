import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";
import { User } from "../model/user.model";


@Injectable()
export class UserService {
 
 private  base_url: string = "http://localhost:9997/user"

 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
    constructor(private httpClient : HttpClient ){
    }
   public getAllUser(): Observable<User[]> {
        return  this.httpClient.get<User[]>(this.base_url);
        
    }
    public getUserById(uid : number): Observable<User> {
      const getUserByIdurl = `${this.base_url}/id/${uid}`;
      console.log(getUserByIdurl);
      return this.httpClient.get<User>(getUserByIdurl);  
    }

    public getUserByName(uname : string): Observable<User> {
      const getUserByNameurl = `${this.base_url}/${uname}`;
      console.log(getUserByNameurl);
      return this.httpClient.get<User>(getUserByNameurl);  
    }


    public addUser(newUser: User ):Observable<User> {
      console.log(this.base_url);
      return this.httpClient.post<User>(this.base_url, newUser, this.httpOptions);
      
    }  
  public updateUser(newUser: User): Observable<User> {
    // const url = `${this.url}/${fno}`;
    console.log("*******url")
    return this.httpClient.put<User>(this.base_url,newUser, this.httpOptions);
  }

  public delete(userId:number):Observable<any>{
    const deleteurl=`${this.base_url}/${userId}`;
    return this.httpClient.delete<any>(deleteurl);
  }
}