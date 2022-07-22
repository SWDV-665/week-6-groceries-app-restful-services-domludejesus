import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';

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
    public dataService: GroceriesServiceService,
    public inputDialogService: InputDialogServiceService) {

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
    this.inputDialogService.showPrompt(item, index)


  }


  async addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }
}




