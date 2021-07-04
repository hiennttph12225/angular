import { ProductType } from './../productType';
import { Component, OnInit, Input, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // statusDirective = false;
  @Input() products: ProductType[];
  data : ProductType;
  log(msg: any) {
    console.log(msg);
  }
  ngOnInit(): void {}
  changeStatus() {
    // this.product.status = !this.product.status;
  }
  onChangeValue(event: any) {
    // this.product.name = event.target.value
  }
  removeItem(id: number) {
    this.products = this.products.filter((product) => product.id != id);
  }
  addProduct() {
    // this.products.push(this.product)
  }
  detailItem(product : ProductType){
    this.data = product
  }
}
