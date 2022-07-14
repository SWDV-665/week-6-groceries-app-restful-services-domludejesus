import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery List"; 

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
  constructor() {}

  removeItem(item) {
    console.log("Removing Item -", item)
  }

}



