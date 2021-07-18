import { productService } from 'src/app/product.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  product: any = {
    name: '',
    price: '',
  };
  constructor(private productService: productService) {}

  ngOnInit(): void {}
  handleAddProduct() {
    this.productService.addProduct(this.product).subscribe(data => console.log(data)
    )
  }
}
