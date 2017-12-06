import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavController, AlertController} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {UniqueDeviceID} from "@ionic-native/unique-device-id";
import {SMS} from '@ionic-native/sms';

export enum EmergencyState {
  CALL, // Button is available to call emergency. We then confirm.
  SEND, // Input address and send it to the dispatcher.
  WAIT // Nothing else to be done. Wait for dispatcher or button to be pressed.
};

@Component({
  selector: 'page-wait',
  templateUrl: 'wait.html'
})

export class WaitPage {
  // tslint:disable-next-line: no-unused-variable
  private emergencyEnum = EmergencyState;
  private state: EmergencyState;
  private address: string;
  private zipcode: string;
  private isSMS: boolean;
  private isConfirmed: boolean;
  private confirmationTime: number = 2 * 60 * 1000;
  private confirmationPings: number = 4;
  private currentPings: number = 0;

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
            this.resetEmergency();
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
      console.log("Error getting location");
      return;
    }
    var deviceID;
    try {
      deviceID = await this.uniqueDeviceID.get();
    } catch (e) {
      deviceID = "computer-id";
    }
    const latLng = location.coords.latitude + "," + location.coords.longitude;

    if (this.isSMS) {
      this.sms.send("6178299064", "latlng\n" + deviceID + "\n" + latLng, {replaceLineBreaks: true});
    } else {
      this.http.get("http://localhost:8100/latlng/?&deviceID=" + deviceID + "&LatLng=" + latLng, {"responseType": "text"}).subscribe(
        data => {
          this.getDispatch();
          return console.log(data);
        },
        err => {
          console.log(err);
          this.showError(err.status, err.statusText);
        }
      );
    }
  }

  public async sendAddress() {
    var deviceID;
    try {
      deviceID = await this.uniqueDeviceID.get();
    } catch (e) {
      deviceID = "computer-id";
    }

    if (this.isSMS) {
      this.sms.send("6178299064", "address\n" + deviceID + "\n" + this.address + "\n" + this.zipcode, {replaceLineBreaks: true});
    } else {
      console.log("HELLO");
      this.http.get("http://localhost:8100/address/?&deviceID=" + deviceID + "&Address=" + this.address + "&Zipcode=" + this.zipcode, {"responseType": "text"}).subscribe(
        data => {
          return console.log(data);
        },
        err => {
          console.log(err);
          this.showError(err.status, err.statusText);
        }
      );
    }
    this.state = EmergencyState.WAIT;
  }

  public endEmergency(): void {
    let dialogue = this.alertCtrl.create({
      title: 'Please confirm ending this emergency.',
      message: 'Emergency dispatcher will be notified.',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, End Emergency',
          handler: () => {
            this.sendEndHttp();
          }
        },
      ],
      cssClass: 'big-alert'
    });
    dialogue.present();
  }


  public async sendEndHttp() {
    this.resetEmergency();

    var deviceID;
    try {
      deviceID = await this.uniqueDeviceID.get();
    } catch (e) {
      deviceID = "computer-id";
    }
    if (this.isSMS) {
      this.sms.send("6178299064", "end\n" + deviceID, {replaceLineBreaks: true});
    } else {
      this.http.get("http://localhost:8100/end/?&deviceID=" + deviceID, {"responseType": "text"}).subscribe(
        data => {
          return console.log(data);
        },
        err => {
          console.log(err);
          this.showError(err.status, err.statusText);
        }
      );
    }

  }

  public async getDispatch() {
    if (this.state == EmergencyState.CALL) {
      return;
    }
    var deviceID;
    try {
      deviceID = await this.uniqueDeviceID.get();
    } catch (e) {
      deviceID = "computer-id";
    }
    this.currentPings++;
    this.http.get("http://localhost:8100/dispatch/?&deviceID=" + deviceID, {"responseType": "text"}).subscribe(
      data => {
        if (data == "Accepted") {
          let dialogue = this.alertCtrl.create({
            title: 'Emergency confirmed!',
            message: 'Help is on the way to your position now!',
            buttons: [
              {
                text: 'OK',
              },
            ],
            cssClass: 'big-alert'
          });
          dialogue.present();
          this.isConfirmed = true;
        } else if (data == "Rejected") {
          this.showError("503","The dispatcher is unable to handle your request.")
        } else {
          if (this.currentPings < this.confirmationPings) {
            setTimeout(() => {this.getDispatch()}, this.confirmationTime/this.confirmationPings);
          } else {
            this.showError("408", "Did not recieve a confirmation in time.");
          }
        }
      },
      err => {
        console.log(err);
        this.showError(err.status, err.statusText);
      }
    );
  }


  public showError(code: string, text: string): void {
    let dialogue = this.alertCtrl.create({
      title: 'Error ' + code,
      message: 'An error occurred:\n' + text +"\n Please call 911 to handle this emergency!",
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.resetEmergency();
          }
        },
      ],
      cssClass: 'big-alert'
    });
    dialogue.present();
  }

  private resetEmergency() {
    this.state = EmergencyState.CALL;
    this.navCtrl.parent.select(0);
    this.isConfirmed = false;
    this.currentPings = 0;
  }

}
