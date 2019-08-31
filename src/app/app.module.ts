import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ItemFilterComponent } from './item-filter/item-filter.component';
import { CheckoutitemsComponent } from './checkoutitems/checkoutitems.component';
import { MyshopingcartComponent } from './myshopingcart/myshopingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomepageComponent,
    TopnavigationComponent,
    PagenotfoundComponent,
    ProductDetailComponent,
    ItemFilterComponent,
    CheckoutitemsComponent,
    MyshopingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
