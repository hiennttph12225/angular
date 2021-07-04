import { Component , OnInit } from '@angular/core';
import { ProductType } from './productType';
import {productService} from './product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web15305';
  product: ProductType = {
    id: Math.floor(Math.random()* 2000),
    name : '',
    price : 300,
    image : "",
    status : false
  };
  products: ProductType[]
  constructor(
    private productService : productService
  ){}
  ngOnInit(){
    this.getProduct()
  }
  getProduct() {
    this.productService.getProducts().subscribe(data=>{
     this.products = data
    })
  }
  onAdd(product:any){
    this.products.push(product)

  }
}
