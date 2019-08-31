import { Component, OnInit } from '@angular/core';
import {ShopingCartService} from '../shoping-cart.service';
@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss']
})
export class ItemFilterComponent implements OnInit {
  items: any;
  selectedItems: Array<string> = [];
  constructor(private shopingCart: ShopingCartService) {
     this.GetItems();
  }
  ngOnInit() {
  }
  onCheckBoxSelection(searchText, event) {
    if (event.target.checked === false) {
      this.selectedItems = this.selectedItems.filter(item => {
          return item !== searchText;
      });

    } else {
    this.selectedItems.push(searchText);
    }
     console.log(this.selectedItems);
     this.shopingCart.GetMultiOptionFilter(this.selectedItems);
  }
  GetItems() {
    this.items = this.shopingCart.GetFilterTag();
 }

}
