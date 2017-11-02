import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {HTTP} from "@ionic-native/http";
import {Geolocation} from "@ionic-native/geolocation";
import {Platform} from 'ionic-angular';

export enum EmergencyState {CALL, WAIT};

@Component({
  selector: 'page-wait',
  templateUrl: 'wait.html'
})

export class WaitPage {
  emergencyEnum = EmergencyState;
  state: EmergencyState;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              public geolocation: Geolocation, public http: HTTP, public platform: Platform) {
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
            this.emergencyOver();
          }
        },
        {
          text: 'Confirm Emergency',
          handler: () => {
            this.confirmEmergency();
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

  private confirmEmergency(): void {
    this.state = EmergencyState.WAIT;
    this.geolocation.getCurrentPosition().then((resp) => {
      this.sendFirst(resp.coords);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  private sendFirst(coords): void {

    //localhost:3000/first/' + latLng
      this.http.get('http://localhost:3000/first/55,34', {}, {})
        .then(data => {
          console.log("SUCCESS");
          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);

        })
        .catch(error => {
          console.log("ERROR");
          console.log(error)
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });
  }
}
