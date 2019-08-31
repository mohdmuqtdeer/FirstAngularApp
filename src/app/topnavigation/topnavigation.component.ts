import { Component, OnInit } from '@angular/core';

import {ShopingCartService} from '../shoping-cart.service';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.scss']
})
export class TopnavigationComponent implements OnInit {
selectedCartItem;
  constructor(private shopingCart: ShopingCartService) {
   }
  ngOnInit() {
  }
  ngDoCheck() {
   this.selectedCartItem = this.shopingCart.GetCartItems().length;
  }

}
