import { ProductType } from './../../../productType';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product : any = {
    name : "",
    price : ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  addProduct(event:Event){
    event.preventDefault()
    console.log(this.product);
    
  }

}
