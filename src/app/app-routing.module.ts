import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ItemFilterComponent} from './item-filter/item-filter.component';
import {CheckoutitemsComponent} from './checkoutitems/checkoutitems.component';
import { MyshopingcartComponent} from './myshopingcart/myshopingcart.component';
const routes: Routes = [
  {path : '', component : HomepageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'aboutus/:productId', component: AboutusComponent},
  {path: 'topnavigation', component : TopnavigationComponent},
  {path: 'myshopingcart', component: MyshopingcartComponent},
  {path: 'productdetail/:productId', component: ProductDetailComponent},
  {path: 'itemfilter', component : ItemFilterComponent},
  {path: 'checkoutitems', component: CheckoutitemsComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
