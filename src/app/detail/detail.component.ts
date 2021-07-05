import { productService } from './../product.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from '../productType';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() product: ProductType;
  constructor(
    private  productService : productService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.productService.getDetailProduct()
    this.route.params.subscribe(data=>{
      this.productService.getDetailProduct(data.id)
      
    })
  }


}
