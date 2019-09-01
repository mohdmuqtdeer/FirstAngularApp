import { Component, OnInit } from '@angular/core';

import { ShopingCartService} from '../shoping-cart.service';
@Component({
  selector: 'app-pricerangeslider',
  templateUrl: './pricerangeslider.component.html',
  styleUrls: ['./pricerangeslider.component.scss']
})
export class PricerangesliderComponent implements OnInit {
  priceRange = 10;
  constructor(private shopingCartServices: ShopingCartService) { }

  ngOnInit() {
  }
  onPriceRangeChannge(event) {
         this.shopingCartServices.PriceFilter(this.priceRange);
  }

}
