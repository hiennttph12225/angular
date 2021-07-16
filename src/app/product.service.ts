import { isToken, isUserId } from './auth/until';
import { Injectable ,OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { ProductType } from './productType';
@Injectable()
export class productService {
  products : ProductType[]
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${isToken()}`
    })
  };
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.getAllProducts()
  }
  api_URL = 'https://headphoneapi.herokuapp.com/api/products'
  getProducts():Observable<ProductType[]>{
        return this.http.get<ProductType[]>(this.api_URL)
  }
  getAllProducts(){
    this.getProducts().subscribe(product =>{
      console.log("sản phẩm" ,product);
      this.products = product
    })
  }
  getDetailProduct(id:any){
    return this.http.get<ProductType[]>(`${this.api_URL}/${id}`)
  }
  getLimitProducts(){
    return this.http.get<ProductType[]>(`${this.api_URL}?page=2&limit=6`)
  }
  removeProduct(id : any){
    return this.http.delete<ProductType>(`${this.api_URL}/${id}/${isUserId()}`,this.httpOptions)
  }
}
