import { localStoragetype, signinType } from './../type/signinTypes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class authService {

  constructor(private http: HttpClient) { }
  ngOnInit(){
  }
  api_Login  = 'https://headphoneapi.herokuapp.com/api/signin'
  signIn(email :string , password : string):Observable<signinType[]>{
    return this.http.get<signinType[]>(`${this.api_Login}?_email=${email}&_password=${password}`)
  }
}
