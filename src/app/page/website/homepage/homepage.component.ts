import { productService } from './../../../product.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  products : any
  productSlider  :any
  constructor(
    private productService : productService
  ) { }

  ngOnInit(): void {
    this.getAllProduct()
    this.getLimitProduct()
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay : true,
    autoplaySpeed : 1000,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
  customOptionslimit: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay : true,
    autoplaySpeed : 1000,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 4
      }
    },
  }

  getAllProduct(){
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
  getLimitProduct(){
    this.productService.getLimitProducts().subscribe((data)=>{
      console.log("limit",data);
      this.productSlider = data
    })
  }

}
