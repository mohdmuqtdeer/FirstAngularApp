import { Injectable } from '@angular/core';
import { TranslationWidth } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';

export interface ItemList {
  id: number;
 name: string;
 price: number;
 details: string;
}


@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  items: Array<ItemList> = [];
  cartItem = [];
  filterItems = [];
  constructor() {
    this.items.push({id: 1, name: 'Mango', price: 10, details: 'Some Mango about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'});
    this.items.push({id: 1, name: 'Orange', price: 20, details: 'Some Orange about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'});
    this.items.push({id: 1, name: 'Apple', price: 200, details: 'Some Apple about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'});
    this.items.push({id: 1, name: 'Coconut', price: 30, details: 'Some Coconut about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'});
    this.items.push({id: 1, name: 'Banana', price: 150, details: 'Some Banana about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'});
    this.items.push({id: 1, name: 'Black Currant', price: 104, details: 'Some Black Current about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'});
    this.items.push({id: 1, name: 'Blackberry', price: 16, details: 'Some Blackberry about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'});
    this.items.push({id: 1, name: 'Prunus armeniaca', price: 79, details: 'Some Preunus about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'});
    this.items.push({id: 1, name: 'Malus domestica', price: 82, details: 'Some Malus about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'});

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
        return filterText.indexOf(item.name) > - 1;
   });
 } else {
   this.filterItems = this.items;
 }
}
PriceFilter(price) {
  this.filterItems = [];
    this.filterItems = this.items.filter(item => {
         return item.price <= price;
    });
}


SearchItemByKeyWord(searchKey) {
  if (searchKey.length > 0) {
    this.filterItems = this.items.filter(item => {
         return item.name.toLowerCase().indexOf(searchKey.toLowerCase()) > - 1;
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
