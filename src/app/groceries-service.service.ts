import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items = [
  ];

  // getItems() {
  //   this.items;
  // }

  async removeItem(index) {
    await this.items.splice(index, 1);
  }

  async addItem(item) {
    this.items.push(item);
  }

  async editItem(item, index) {
    this.items[index] = item;
  }

  constructor() { }
}


