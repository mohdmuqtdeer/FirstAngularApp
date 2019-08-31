import { Component, OnInit } from '@angular/core';
import {ShopingCartService} from '../shoping-cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {


productItem: string;
constructor(private shopingCart: ShopingCartService, private route: ActivatedRoute) {
  this.productItem = this.route.snapshot.params['productId'];
 }

ngOnInit() {
}
addItemToCart(item) {
  this.shopingCart.AddItem(item);
}

}
