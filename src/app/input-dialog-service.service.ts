import { Component, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public alertCtrl: AlertController,
    public dataService: GroceriesServiceService) { }

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
