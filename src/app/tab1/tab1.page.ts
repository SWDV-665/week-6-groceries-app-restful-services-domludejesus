import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular'; 

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
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  async removeItem(item) {
    console.log("Removing Item -", item); 
    const toast = await this.toastCtrl.create({
      message: 'Removing Item -' + item.name + "...", 
      duration: 3000
    }); 
    await toast.present(); 
  }

}



