import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavController, AlertController} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {UniqueDeviceID} from "@ionic-native/unique-device-id";
import {SMS} from '@ionic-native/sms';
import * as Env from "../../env";
import {Storage} from '@ionic/storage';
import L from "leaflet";

enum EmergencyState {
  CONFIRM_CALL,
  WAIT_FOR_SERVER_PRE_START,
  DRAG_ON_MAP,
  WAIT_FOR_SERVER_POST_START,
  SEND_DESCRIPTION,
  WAIT_FOR_END
};

@Component({
  selector: 'page-wait',
  templateUrl: 'wait.html'
})

export class WaitPage {
  // HACK: We save the enum as a private variable so that it can be used in the HTML
  private emergencyEnum = EmergencyState;
  private state: EmergencyState;
  private isSMS: boolean;
  private isConfirmed: boolean;
  private confirmationTime: number = 2 * 60 * 1000;
  private pingIntervalTime: number = 15 * 1000;
  private currentPings: number = 0;
  private description: string;


  private loaded: boolean;
  private map: L.Map;
  private mapWidth: string = "500px";
  private mapHeight: string = "500px";
  private zero: string = "0px";
  private viewHeight: number = 17;
  private latLng: L.LatLng;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage, public geolocation: Geolocation, public http: HttpClient, public  uniqueDeviceID: UniqueDeviceID, public sms: SMS) {
    this.state = this.emergencyEnum.CONFIRM_CALL;
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

  public initMap(): void {
    this.loaded = true;
    this.map = L.map('map', {
      zoom: this.viewHeight
    });
    //Add OSM Layer
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      .addTo(this.map);
  }

  public async viewMap(latLngRaw: string) {
    if (!this.loaded) {
      this.initMap();
    }

    const mapBox = document.getElementById("map");
    mapBox.style.width = this.mapWidth;
    mapBox.style.height = this.mapHeight;

    const s = latLngRaw.split(",");
    this.latLng = new L.LatLng(Number(s[0]), Number(s[1]));
    this.map.panTo(this.latLng);

    const marker = L.marker(this.latLng, {draggable:true}).addTo(this.map);
    marker.on('dragend', function(event){
      const marker = event.target;
      const position = marker.getLatLng();

      this.latLng =  new L.LatLng(position.lat, position.lng);
      marker.setLatLng(this.latLng,{draggable:'true'});
      this.map.panTo(this.latLng);
    },this);
  }

  public hideMap(): void {
    const mapBox = document.getElementById("map");
    mapBox.style.width = this.zero;
    mapBox.style.height = this.zero;
  }

  public async finishDrag() {
    this.hideMap();
    var deviceID;
    try {
      deviceID = await this.uniqueDeviceID.get();
    } catch (e) {
      deviceID = "computer-id";
    }

    const latLng = this.latLng.lat + "," + this.latLng.lat;
    const request = "http://localhost:8100/update-latlng/?&deviceID=" + deviceID + "&LatLng=" + latLng;
    this.http.get(request, {"responseType": "text"}).subscribe(
      data => {
        this.state = this.emergencyEnum.SEND_DESCRIPTION;
      },
      err => {
        console.log(err);
        this.showError(err.statusText);
      }
    );
  }

  public async sendUpdate() {
    this.state = this.emergencyEnum.WAIT_FOR_SERVER_POST_START;
  }

  public askMethod(): void {
    let dialogue = this.alertCtrl.create({
      title: 'Method',
      message: 'Send this emergency over data or sms?',
      buttons: [
        {
          text: 'Sms',
          handler: () => {
            this.isSMS = true;
            this.sendLocation();
          }
        },
        {
          text: 'Data',
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
    this.state = this.emergencyEnum.WAIT_FOR_SERVER_PRE_START;

    var location;
    try {
      location = await this.geolocation.getCurrentPosition();
    } catch (e) {
      this.showError(e.toString());
      return;
    }

    var deviceID;
    try {
      deviceID = await this.uniqueDeviceID.get();
    } catch (e) {
      deviceID = "computer-id";
    }

    const latLng = location.coords.latitude + "," + location.coords.longitude;
    const phoneNumber = await this.storage.get("phoneNumber");
    if (!phoneNumber) {
      this.showError("No phone number stored for this account");
    }

    if (this.isSMS) {
      this.state = this.emergencyEnum.SEND_DESCRIPTION;
      this.sms.send(Env.TWILLIO_NUMBER, "start-call\n" + deviceID + "\n" + latLng, {replaceLineBreaks: true});
    } else {
      const request = "http://localhost:8100/start-call/?&deviceID=" + deviceID + "&From=" + phoneNumber + "&LatLng=" + latLng;
      this.http.get(request, {"responseType": "text"}).subscribe(
        data => {
          this.state = this.emergencyEnum.DRAG_ON_MAP;
          this.viewMap(latLng);
          this.getDispatch();
        },
        err => {
          console.log(err);
          this.showError(err.statusText);
        }
      );
    }
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
      this.sms.send(Env.TWILLIO_NUMBER, "end\n" + deviceID, {replaceLineBreaks: true});
    } else {
      this.http.get("http://localhost:8100/end/?&deviceID=" + deviceID, {"responseType": "text"}).subscribe(
        data => {
          return console.log(data);
        },
        err => {
          console.log(err);
          this.showError(err.statusText);
        }
      );
    }
  }

  public async getDispatch() {
    if (this.state == this.emergencyEnum.CONFIRM_CALL) {
      return;
    }
    var deviceID;
    try {
      deviceID = await this.uniqueDeviceID.get();
    } catch (e) {
      deviceID = "computer-id";
    }
    setTimeout(() => {
      this.getDispatch()
    }, this.pingIntervalTime);
    this.currentPings++;


    this.http.get("http://localhost:8100/dispatch-status/?&deviceID=" + deviceID, {"responseType": "text"}).subscribe(
      data => {
        switch (data) {
          case "Accepted":
            if (this.isConfirmed) {
              return;
            }
            this.showAlert('Emergency confirmed!',
              'Help is on the way to your position now!',
              () => {
              });
            this.isConfirmed = true;
            break;
          case "Rejected":
            this.showError("The dispatcher is unable to handle your request.");
            break;
          case "Pending":
            if (this.currentPings > this.confirmationTime / this.pingIntervalTime) {
              this.showError( "Did not receive a confirmation in time.");
              this.sendEndHttp();
            }
            break;
          case "Ended":
            this.showAlert('Emergency ended!',
              'The emergency was ended! Check your SMS for more details.',
              () => {
                this.resetEmergency();
              });
            break;
          default:
            this.showError( "Unexpected response from the server.");
            break;
        }

      },
      err => {
        console.log(err);
        this.showError(err.statusText);
      }
    );
  }


  public showError(text: string): void {
    this.resetEmergency();
    this.showAlert('Error!',
      'An error occurred:\n' + text + '\n Please call 911 to handle this emergency!',
      () => {});
  }

  public showAlert(title: string, message: string, handler: () => void) {
    let dialogue = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: handler
        },
      ],
      cssClass: 'big-alert'
    });
    dialogue.present();
  }

  private resetEmergency() {
    this.state = EmergencyState.CONFIRM_CALL;
    this.navCtrl.parent.select(0);
    this.isConfirmed = false;
    this.currentPings = 0;
    this.hideMap();
  }

}
