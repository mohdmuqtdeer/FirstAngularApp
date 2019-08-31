import { Component, OnInit } from '@angular/core';
import {ShopingCartService} from '../shoping-cart.service';
@Component({
  selector: 'app-myshopingcart',
  templateUrl: './myshopingcart.component.html',
  styleUrls: ['./myshopingcart.component.scss']
})
export class MyshopingcartComponent implements OnInit {
  cartItems;
  TotalAmount;
   public show: boolean;
  constructor(private shopingCart: ShopingCartService) {
    this.cartItems = this.shopingCart.GetCartItems();
    this.TotalAmount = '$0';
   }
  ngOnInit() {
  }
  ClearCart() {
    this.shopingCart.ClearCart();
    this.cartItems = this.shopingCart.GetCartItems();
      if ( this.cartItems.length === 0 ) {
        this.show = false;
       this.TotalAmount = '$0';
      } else {
        this.show = true;
        this.TotalAmount = '$100';
      }
    }

    RemoveItem(itemName){
       this.shopingCart.DeleteItem(itemName);
       this.cartItems = this.shopingCart.GetCartItems();
       if ( this.cartItems.length === 0 ) {
       this.TotalAmount = '$0';
      } else {
        this.TotalAmount = '$100';
      }
    }

}
