import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const API_AUTH = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  public isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  login(credentials): Observable<any> {
    return this.http.post<Observable<any>>(API_AUTH, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
