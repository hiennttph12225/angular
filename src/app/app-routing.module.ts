import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path : "" , redirectTo : "/home" ,pathMatch : 'full' },
  {path : "home" ,  component : HomePageComponent , pathMatch : 'full'},
  {path: "about" , component:  AboutComponent},
  {path : "product" , component : ProductsComponent , data : {products : "products"}},
  {path : "news" , component : NewsComponent},
  {path : "contact" , component : ContactComponent},
  {path : "signin" , component : SigninComponent},
  {path : "signup" , component : SignupComponent},
  {path : "product/:id" , component : DetailComponent},
  {path : "**" , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
