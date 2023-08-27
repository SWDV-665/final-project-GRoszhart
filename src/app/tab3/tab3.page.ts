import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title = "Courses";

  items:any = [];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  async removeItem(item: any, index) {
    console.log("Removing Course - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Course - ' + item.name,
      duration: 1500
    });

    await toast.present();

    this.items.splice(index, 1);
  }

  async editItem(item: any, index) {
    console.log("Edit Course - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing Course - ' + item.name,
      duration: 1500
    });

    await toast.present();
    this.showEditItemPrompt(item, index);

  }

  addItem() {
    console.log("Adding Course");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Add Course',
      message: 'Please enter Course info below',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'city',
          placeholder: 'City'
        },
        {
          name: 'state',
          placeholder: 'State'
        },
        {
          name: 'holes',
          placeholder: 'Hole Count'
        },
        {
          name: 'par',
          placeholder: 'Par'
        },
        {
          name: 'review',
          placeholder: 'Review'
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
      header: 'Edit Course',
      message: 'Please edit Course info below',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'city',
          placeholder: 'City'
        },
        {
          name: 'state',
          placeholder: 'State'
        },
        {
          name: 'holes',
          placeholder: 'Hole Count'
        },
        {
          name: 'par',
          placeholder: 'Par'
        },
        {
          name: 'review',
          placeholder: 'Review'
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
