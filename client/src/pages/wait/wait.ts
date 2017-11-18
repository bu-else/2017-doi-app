import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";


export enum EmergencyState {CALL,SEND,WAIT};

@Component({
  selector: 'page-wait',
  templateUrl: 'wait.html'
})

export class WaitPage {
  // tslint:disable-next-line: no-unused-variable
  private emergencyEnum = EmergencyState;
  private state : EmergencyState;
  private id: string;
  private address: string;
  private zipcode: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public geolocation: Geolocation, public http: HttpClient) {
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
          text: 'wifi',
          handler: () => {
            this.confirmEmergency(true);
          }
        },
        {
          text: 'sms',
          handler: () => {
            this.confirmEmergency(false);
          }
        }
      ],
      cssClass: 'big-alert'
    });
    dialogue.present();
  }

  private confirmEmergency(isWifi:boolean): void {
    this.state = EmergencyState.SEND;
    this.geolocation.getCurrentPosition().then((resp) => {
      this.sendFirst(resp.coords);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  

  private sendFirst(coords): void {
    const args = coords.latitude + "," + coords.longitude;
    this.http.get('http://localhost:8100/first/' + args,{"responseType":"text"}).subscribe(data => {
      this.id = data;
    });
  }

  // tslint:disable-next-line: no-unused-variable
  private sendSecond(coords): void {
    const args = this.address + "," + this.zipcode + "," + this.id;
    console.log(args);
    this.http.get('http://localhost:8100/second/' + args,{"responseType":"text"}).subscribe(data => {

    });
    this.state = EmergencyState.WAIT;
  }

  public emergencyOver(): void {
    this.state = EmergencyState.CALL;
    this.navCtrl.parent.select(0);
  }

}
