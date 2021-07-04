import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {productService} from './product.service'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { DetailComponent } from './detail/detail.component';
import { HomePageComponent } from './home-page/home-page.component';

// import { AngularFirestore } from '@angular/fire/firestore/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    ProductAddComponent,
    DetailComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
