import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path : "" , component : HomePageComponent },
  {path: "about" , component:  AboutComponent},
  {path : "product" , component : ProductsComponent , data : {products : "products"}},
  {path : "product/:id" , component : DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
