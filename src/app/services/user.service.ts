import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { config } from './config/config'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(config.baseUrl+"/users");
  }

  public getUserById(id:number): Observable<User[]> {
    return this.http.get<User[]>(config.baseUrl+"/users/"+id);
  }

  public getUserByEmail(email:string): Observable<User[]> {
    return this.http.get<User[]>(config.baseUrl+"/users/email/"+email);
  }
  
}
