import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
 };
 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userAPIURL : string = "http://demo5911200.mockable.io/user";

  constructor(private httpClient:HttpClient) { }
  createUser (user:User):Observable<string>{
    return this.httpClient.post<string>(this.userAPIURL,user,httpOptions);
  }
 
}
