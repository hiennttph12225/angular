import { cateType } from './../type/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http : HttpClient
  ) { }
  ngOnInit(){

  }
  api_URL  = `https://headphoneapi.herokuapp.com/api/categories`
  getCate():Observable<cateType[]>{
    return this.http.get<cateType[]>(this.api_URL)
  }
}
