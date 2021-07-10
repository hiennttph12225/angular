import { ProductType } from './../productType';
import { Component, OnInit  ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  @Output() data = new EventEmitter<ProductType>();
  product: ProductType = {
    _id: '',
    name: '',
    price: 123,
    status: true,
    image: '',
    comment : [],
    description : ''
  };
  constructor() {}

  ngOnInit(): void {}
  onAddProduct(){
    this.data.emit(this.product)
  }
}
