import { productService } from 'src/app/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products : any
  constructor(private productService: productService) {}
  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts() {
    this.productService.getProducts().subscribe((data) =>this.products = data);
  }
}
