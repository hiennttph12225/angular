import { Injectable ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { ProductType } from './productType';
@Injectable()
export class productService {
  products : ProductType[]
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
    return this.http.get<ProductType[]>(`${this.api_URL}/${id}/${id}`)
  }
}
