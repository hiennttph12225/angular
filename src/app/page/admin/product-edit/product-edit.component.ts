import { CategoryService } from './../../../service/category.service';
import { productService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  product: any;
  category : any;
  constructor(
    private productService: productService,
    private route: ActivatedRoute,
    private CategoryService : CategoryService
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.getAllCate()
  }
  getAllCate(){
    this.CategoryService.getCate().subscribe(data => this.category = data)
  }
  getProduct() {
    this.route.params.subscribe((params) => {
      this.productService.getDetailProduct(params.id).subscribe((data) => {
        this.product = data;
      });
    });
  }
  editProduct() {
    console.log('new data', this.product);
    this.productService
      .editProduct(this.product._id, this.product)
      .subscribe((data) => console.log(data));
  }
}
