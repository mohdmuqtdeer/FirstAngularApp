import { Injectable } from '@angular/core';
import { TranslationWidth } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  items = [];
  cartItem = [];
  filterItems = [];
  constructor() {
    this.items.push('Mango');
    this.items.push('Orange');
    this.items.push('Apple');
    this.items.push('Coconut');
    this.items.push('Banana');
    this.items.push('Black Currant');
    this.items.push('Blackberry');
    this.items.push('Prunus armeniaca');
    this.items.push('Malus domestica');

  }
AddItem(item) {
  if (this.cartItem.indexOf(item) === -1) {
    this.cartItem.push(item);
  } else {
    alert('Item already added in cart');
 }
}
GetCartItems() {
  return this.cartItem;
}
UpdateItem(itemId) {
  this.items.push(itemId);
}
DeleteItem(itemId) {
    this.cartItem = this.cartItem.filter(item => {
        return item !== itemId;
    });
  return this.cartItem;
}
GetItems() {
  if ( this.filterItems.length === 0 ) {
   this.filterItems = this.items;
  }
  return  this.filterItems;
}
GetFilterTag() {
  return this.items;
}
GetMultiOptionFilter(filterText) {
   if (filterText.length > 0) {
   this.filterItems = this.items.filter(item => {
        return filterText.indexOf(item) > - 1;
   });
 } else {
   this.filterItems = this.items;
 }
  // this.GetItems();
}
SearchItemByKeyWord(searchKey) {
  if (searchKey.length > 0) {
    this.filterItems = this.items.filter(item => {
         return item.toLowerCase().indexOf(searchKey.toLowerCase()) > - 1;
    });
  } else {
    this.filterItems = this.items;
  }

// this.GetItems();
}

ClearCart() {
this.cartItem = [];
return this.cartItem;
}
}
