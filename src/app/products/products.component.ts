import { ProductType } from './../productType';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  product:ProductType = {
    id: Math.floor(Math.random()* 2000),
    name : '',
    price : 300,
    image : "",
    status : false
  }
  products: ProductType[] = [
    {
      id : 1,
      name: 'lê văn quyết 1',
      price: 200,
      image:
        "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      status: true,
    }, 
    {
      id : 2,
      name: 'lê văn quyết 1',
      price: 200,
      image:
        "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      status: true,
    },
    {
      id : 3,
      name: 'lê văn quyết 1',
      price: 200,
      image:
        "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      status: true,
    },
  ]
  ngOnInit(): void {}
  changeStatus() {
    // this.product.status = !this.product.status;
  }
  onChangeValue(event:any){
    // this.product.name = event.target.value
  }
  removeItem(id: number){
    this.products = this.products.filter(product => product.id != id)
  }
  addProduct(){
    this.products.push(this.product)
  }
}
