import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { ProductType } from './productType';
@Injectable()
export class productService {
     
  constructor(private http: HttpClient) {
  }
  api_URL = 'https://headphoneapi.herokuapp.com/api/products'
  getProducts():Observable<ProductType[]>{
        return this.http.get<ProductType[]>(this.api_URL)
  }
}
