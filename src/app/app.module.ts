
import { environment } from 'src/environments/environment';
import { newService } from './service/new.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './page/website/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutAdminComponent } from './layout/admin/layout-admin/layout-admin.component';
import { LayoutWebsiteComponent } from './layout/website/layout-website/layout-website.component';
import { NewsComponent } from './page/website/news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboradComponent } from './page/admin/admin-dashborad/admin-dashborad.component';
import { productService } from './product.service';
import { HomepageComponent } from './page/website/homepage/homepage.component';
import { SiginPageComponent } from './page/website/sigin-page/sigin-page.component';
import { SigupPageComponent } from './page/website/sigup-page/sigup-page.component';
import { ProductsPageComponent } from './page/website/products-page/products-page.component';
import { ProductDetailPageComponent } from './page/website/product-detail-page/product-detail-page.component';
import { ProductDashboardComponent } from './page/admin/product-dashboard/product-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './page/admin/product-edit/product-edit.component';
import  firebase from 'firebase'
firebase.initializeApp(environment.config);
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DetailComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    ContactComponent,
    PageNotFoundComponent,
    AdminDashboradComponent,
    LayoutWebsiteComponent,
    LayoutAdminComponent,
    HomepageComponent,
    SiginPageComponent,
    SigupPageComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    ProductDashboardComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    FontAwesomeModule,
  ],
  providers: [productService, newService],
  bootstrap: [AppComponent],
})
export class AppModule {}
