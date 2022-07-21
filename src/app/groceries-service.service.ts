import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 5
    },
    {
      name: "Banana",
      quantity: 6
    },
    {
      name: "Sugar",
      quantity: 10
    },
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


