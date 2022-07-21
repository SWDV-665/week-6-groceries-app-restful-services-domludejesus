import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  //providers: [GroceriesServiceService]
})
export class Tab1Page {
  title = "Grocery List";


  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataService: GroceriesServiceService) {

  }

  loadItems() {
    //return this.dataService.getItems;
    return this.dataService.items;
  }

  async removeItem(item, index) {
    console.log("Removing Item -", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item -' + index + "...",
      duration: 3000

    });
    await toast.present();
    this.dataService.removeItem(index);


  }

  async editItem(item, index) {
    console.log("Edit Item -", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing Item -' + index + "...",
      duration: 3000

    });
    await toast.present();
    this.showEditItemPrompt(item, index)


  }

  async showEditItemPrompt(item, index) {
    const alert = await this.alertCtrl.create({
      header: 'Edit Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          min: 1,
          max: 100,
          value: item.quantity
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked')

          }
        },

        {
          text: 'Save',
          handler: item => {
            console.log('Saved Clicked', item);
            this.dataService.editItem(item, index);
          }
        }
      ],

    });

    await alert.present();
  }
  async addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Add Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          min: 1,
          max: 100
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked')

          }
        },

        {
          text: 'Save',
          handler: item => {
            console.log('Saved Clicked', item);
            this.dataService.addItem(item);

          }
        }
      ],

    });

    await alert.present();
  }
}




