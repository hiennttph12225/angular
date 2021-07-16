import { SigupPageComponent } from './page/website/sigup-page/sigup-page.component';

import { ProductDashboardComponent } from './page/admin/product-dashboard/product-dashboard.component';
import { ProductsPageComponent } from './page/website/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { LayoutAdminComponent } from './layout/admin/layout-admin/layout-admin.component';
import { LayoutWebsiteComponent } from './layout/website/layout-website/layout-website.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboradComponent } from './page/admin/admin-dashborad/admin-dashborad.component';
import { AboutComponent } from './page/website/about/about.component';
import { HomepageComponent } from './page/website/homepage/homepage.component';
import { NewsComponent } from './page/website/news/news.component';
import { SiginPageComponent } from './page/website/sigin-page/sigin-page.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutWebsiteComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent },
      { path: 'about', component: AboutComponent },
      {
        path: 'product',
        component: ProductsPageComponent,
      },
      { path: 'news', component: NewsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'signin', component: SiginPageComponent },
      { path: 'signup', component: SigupPageComponent },
      { path: 'product/:id', component: DetailComponent },
     
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboradComponent },
      {path : "product" , component:ProductDashboardComponent}
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
