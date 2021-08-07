import { isToken, isUserId } from './auth/until';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from './productType';
@Injectable()
export class productService {
  products: ProductType[];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getAllProducts();
  }
  api_URL = 'https://60f6e00eeb48e700179197a0.mockapi.io/product';
  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.api_URL);
  }
  getAllProducts() {
    this.getProducts().subscribe((product) => {
      console.log('sản phẩm', product);
      this.products = product;
    });
  }
  getDetailProduct(id: any) {
    return this.http.get<ProductType[]>(`${this.api_URL}/${id}`);
  }
  getLimitProducts() {
    return this.http.get<ProductType[]>(`${this.api_URL}?page=2&limit=6`);
  }
  addProduct(data: any) {
    return this.http.post<ProductType>(
      `${this.api_URL}`,
      data
    );
  }
  removeProduct(id: any) {
    return this.http.delete<ProductType>(
      `${this.api_URL}/${id}`
    );
  }
  editProduct(id: string, data: any) {
    return this.http.put<ProductType>(
      `${this.api_URL}/${id}`,
      data,
    );
  }
}
