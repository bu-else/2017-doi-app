import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

export enum EmergencyState {CALL,WAIT};

@Component({
  selector: 'page-wait',
  templateUrl: 'wait.html'
})

export class WaitPage {
  emergencyEnum = EmergencyState;
  state : EmergencyState;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.state = EmergencyState.CALL;
  }

  public startEmergency(): void {
    let confirm = this.alertCtrl.create({
      title: 'Emergency',
      message: 'Please confirm the emergency.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.emergencyOver()
          }
        },
        {
          text: 'Confirm Emergency',
          handler: () => {
            this.state = EmergencyState.WAIT;
          }
        }
      ],
      cssClass: 'big-alert'
    });
    confirm.present();
  }

  public emergencyOver(): void {
    this.state = EmergencyState.CALL;
    this.navCtrl.parent.select(0);
  }

}
