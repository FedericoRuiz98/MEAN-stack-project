import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  baseUrl : string = "/api/v1"

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+"/users");
  }
}
