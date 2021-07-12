import { ProductType } from './../productType';
import { Component, OnInit  ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  @Output() data = new EventEmitter<ProductType>();
  
  constructor() {}

  ngOnInit(): void {}
  onAddProduct(){
    
  }
}
