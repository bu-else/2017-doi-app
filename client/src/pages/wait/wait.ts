import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import {UniqueDeviceID} from "@ionic-native/unique-device-id";
import { SMS } from '@ionic-native/sms';

export enum EmergencyState {CALL,SEND,WAIT};

@Component({
  selector: 'page-wait',
  templateUrl: 'wait.html'
})

export class WaitPage {
  // tslint:disable-next-line: no-unused-variable
  private emergencyEnum = EmergencyState;
  private state : EmergencyState;
  private address: string;
  private zipcode: string;
  private isSMS: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public geolocation: Geolocation, public http: HttpClient, public  uniqueDeviceID: UniqueDeviceID, public sms: SMS) {
    this.state = EmergencyState.CALL;
  }

  public startEmergency(): void {
    let dialogue = this.alertCtrl.create({
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
            this.askMethod();
          }
        }
      ],
      cssClass: 'big-alert'
    });
    dialogue.present();
  }

  public askMethod(): void {
    let dialogue = this.alertCtrl.create({
      title: 'Method',
      message: 'Send this emergency over wifi or sms?',
      buttons: [
        {
          text: 'Sms',
          handler: () => {
            this.isSMS = true;
            this.sendLocation();
          }
        },
        {
          text: 'Wifi',
          handler: () => {
            this.isSMS = false;
            this.sendLocation();
          }
        }
      ],
      cssClass: 'big-alert'
    });
    dialogue.present();
  }

  public async sendLocation() {
    this.state = EmergencyState.SEND;
    var location;
    try {
      location = await this.geolocation.getCurrentPosition();
    } catch (e) {
      console.log("Error getting location")
      return
    }
    var uuid;
    try {
      uuid = await this.uniqueDeviceID.get();
    } catch (e) {
      uuid = "computer-id";
    }
    const latLng = location.coords.latitude + "," + location.coords.longitude;

    if (this.isSMS) {
      this.sms.send("6178299064","latlng\n"+uuid+"\n"+latLng,{replaceLineBreaks:true});
    } else {
      this.http.get("http://localhost:8100/latlng/?&UUID=" + uuid + "&LatLng=" + latLng, {"responseType": "text"}).subscribe(
        data => {
          return console.log(data);
        },
        err => {
          console.log(err);
          this.showError(err.status,err.statusText);
        }
      );
    }
  }

  public async sendAddress() {
    var uuid;
    try {
      uuid = await this.uniqueDeviceID.get();
    } catch (e) {
      uuid = "computer-id";
    }

    if (this.isSMS) {
      this.sms.send("6178299064","address\n"+uuid+"\n"+this.address+"\n"+this.zipcode,{replaceLineBreaks:true});
    } else {
      console.log("HELLO");
      this.http.get("http://localhost:8100/address/?&UUID=" + uuid + "&Address=" + this.address + "&Zipcode=" + this.zipcode, {"responseType": "text"}).subscribe(
        data => {
          return console.log(data);
        },
        err => {
          console.log(err);
          this.showError(err.status,err.statusText);
        }
      );
    }
    this.state = EmergencyState.WAIT;
  }

  public async emergencyOver() {
    var uuid;
    try {
      uuid = await this.uniqueDeviceID.get();
    } catch (e) {
      uuid = "computer-id";
    }

    if (this.isSMS) {
      this.sms.send("6178299064","end\n"+uuid,{replaceLineBreaks:true});
    } else {
      this.http.get("http://localhost:8100/end/?&UUID=" + uuid, {"responseType": "text"}).subscribe(
        data => {
          return console.log(data);
        },
        err => {
          console.log(err);
          this.showError(err.status,err.statusText);
        }
      );
    }
    this.state = EmergencyState.CALL;
    this.navCtrl.parent.select(0);
  }

  public showError(code:string, text:string): void {
    let dialogue = this.alertCtrl.create({
      title: 'Error ' + code,
      message: 'An error occurred:\n' + text,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.state = EmergencyState.CALL;
            this.navCtrl.parent.select(0);
          }
        },
      ],
      cssClass: 'big-alert'
    });
    dialogue.present();
  }

}
