import { CategoryService } from './../service/category.service';
import { cateType } from './../type/category';
import { productService } from 'src/app/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  product: any = {};
  cate : any = [];
  image  : string
  constructor(
    private productService: productService , 
    private CategoryService : CategoryService,
    private Router : Router) {}

  ngOnInit(): void {
    this.getAllCate()
  }
  handleChangeImage(e:any){
    const file = e.target.files[0];
    let storeRef = firebase.storage().ref(`images/${file.name}`);
    storeRef.put(file).then((e) => {
      storeRef.getDownloadURL().then(async (url) => {
        this.image = url
        
      });
    });
    
  }
  getAllCate(){
    this.CategoryService.getCate().subscribe(data => this.cate = data
    )
  }
  handleAddProduct() {
    console.log(this.product);
    this.Router.navigateByUrl("/admin/product")
    this.productService.addProduct(this.product).subscribe((data) => {});
  }
}
