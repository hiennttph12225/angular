import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productService } from 'src/app/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  product: any = {
    name: '',
    price: '',
    image : ''
  };
  constructor(
    private productService: productService,
    private Router : Router
    ) {}

  ngOnInit(): void {}
  handleAddProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data)
      this.Router.navigateByUrl("/admin/product")
    }
    )
  }
}
