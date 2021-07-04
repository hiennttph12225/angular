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
    id: 0,
    name: '',
    price: 123,
    status: true,
    image: '',
  };
  constructor() {}

  ngOnInit(): void {}
  onAddProduct(){
    this.data.emit(this.product)
  }
}
