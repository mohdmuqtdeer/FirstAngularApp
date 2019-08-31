import { Component, OnInit } from '@angular/core';

import {ShopingCartService} from '../shoping-cart.service';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

 item;
 items: any;
 cartItems: any;
 multipleItems;
  constructor(private shopingCart: ShopingCartService, private route: ActivatedRoute) {
    this.GetItems();
  }
  ngDoCheck() {
    this.GetItems();
  }
  ngOnInit() {
  }
  addItem(newItem) {
       this.shopingCart.AddItem(newItem);
  }
  UpdateItem(itemId) {
      this.shopingCart.UpdateItem(itemId);
      this.GetItems();
  }
  DeleteItem(itemId) {
    this.shopingCart.DeleteItem(itemId);
    this.GetItems();
  }
GetItems() {
   this.items = this.shopingCart.GetItems();
}

}
