import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = "Discs";

  items:any = [];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  async removeItem(item: any, index) {
    console.log("Removing Disc - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Disc - ' + item.name,
      duration: 1500
    });

    await toast.present();

    this.items.splice(index, 1);
  }

  async editItem(item: any, index) {
    console.log("Edit Disc - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing Disc - ' + item.name,
      duration: 1500
    });

    await toast.present();
    this.showEditItemPrompt(item, index);

  }

  addItem() {
    console.log("Adding Disc");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Add Disc',
      message: 'Please enter Disc info below',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'brand',
          placeholder: 'Brand'
        },
        {
          name: 'plastic',
          placeholder: 'Plastic'
        },
        {
          name: 'type',
          placeholder: 'Type (driver, mid, putter)'
        },
        {
          name: 'color',
          placeholder: 'Color'
        },
        {
          name: 'stats',
          placeholder: 'Flight Stats (speed, glide, turn, fade)'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    await prompt.present();
  }

  async showEditItemPrompt(item: any, index) {
    const prompt = await this.alertCtrl.create({
      header: 'Edit Disc',
      message: 'Please edit Disc info below',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'brand',
          placeholder: 'Brand'
        },
        {
          name: 'rubber',
          placeholder: 'Rubber'
        },
        {
          name: 'type',
          placeholder: 'Type (driver, mid, putter)'
        },
        {
          name: 'color',
          placeholder: 'Color'
        },
        {
          name: 'stats',
          placeholder: 'Flight Stats (speed, glide, turn, fade)'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items[index] = item;
          }
        }
      ]
    });
    await prompt.present();
  }


}