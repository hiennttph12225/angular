import { productService } from './../product.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from '../productType';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  // @Input() product: ProductType;
  product_detail: any;
  constructor(
    private productService: productService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProduct();

    // this.route.params.subscribe(data=>{
    //   this.productService.getDetailProduct(data.id)
    // })
  }
  getProduct() {
    this.route.params.subscribe((params) => {
      this.productService.getDetailProduct(params.id).subscribe((data) => {
        console.log(data);
        this.product_detail = data;
      });
    });
  }
}
