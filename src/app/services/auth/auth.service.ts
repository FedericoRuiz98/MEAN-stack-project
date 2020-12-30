import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(email : string, password : string): Observable<User>{
    return this.http.post<User>(config.baseUrl+"/login",
      {
        "email" : email,
        "password" : password
      })
  }

  public register(email : string, password: string, username : string): Observable<User>{
    return this.http.post<User>(config.baseUrl+"/register",
      {
        "email" : email,
        "password" : password,
        "username" : username
      })
  }

}
