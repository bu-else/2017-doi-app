import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import L from "leaflet";


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  private loaded: boolean;
  private showMap: boolean = false;
  private map: L.Map;
  private mapWidth: string = "500px";
  private mapHeight: string = "500px";
  private zero: string = "0px";
  private uuid: string;
  private viewHeight: number = 15;
  private pingIntervalTime: number = 30 * 1000;
  private latLng: L.LatLng;
  private marker: L.Marker;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: HttpClient) {

  }

  public viewEmergency(): void {
    this.http.get("http://localhost:8100/fetch/?&emergencyID=" + this.uuid, {"responseType": "json"}).subscribe(
      data => {
        this.loadMap(data["address"], data["latLng"]);
      },
      err => {
        console.log(err);
        this.showError(err.status, err.statusText);
      }
    );
  }

  public endEmergency(): void {
    let dialogue = this.alertCtrl.create({
      title: 'Please confirm ending this emergency.',
      message: 'Emergency caller will be notified.',
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

  private sendEndHttp(): void {
    this.http.get("http://localhost:8100/end/?&emergencyID=" + this.uuid, {"responseType": "text"}).subscribe(
      data => {
        this.goBack();
      },
      err => {
        console.log(err);
        this.showError(err.status, err.statusText);
      }
    );
  }

  public loadMap(address: string, latLngRaw: string): void {
    if (!this.loaded) {
      this.initMap();
    }
    this.showMap = true;

    const mapBox = document.getElementById("map");
    mapBox.style.width = this.mapWidth;
    mapBox.style.height = this.mapHeight;

    const s = latLngRaw.split(",");
    this.latLng = new L.LatLng(Number(s[0]), Number(s[1]));
    this.map.setView(this.latLng, this.viewHeight);

    this.marker = L.marker(this.latLng).addTo(this.map);
    this.marker.bindPopup(address).openPopup();

    this.pullUpdates();
  }

  public updateMap(address: string, latLngRaw: string): void {
    if (!this.showMap) {
      return;
    }
    const s = latLngRaw.split(",");
    const latLng = new L.LatLng(Number(s[0]), Number(s[1]));
    if (latLng.equals(this.latLng)) {
      return
    }
    this.showAlert("Emergency has been updated",
      "The updated location for the emergency is now shown on your map",
      () => {
        this.marker.unbindPopup();
        this.marker.setLatLng(this.latLng)
        this.marker.bindPopup(address).openPopup();
      })
  }

  public pullUpdates(): void {
    if (!this.showMap) {
      return;
    }
    setTimeout(() => {
      this.pullUpdates()
    }, this.pingIntervalTime);

    this.http.get("http://localhost:8100/dispatch/?&emergencyID=" + this.uuid, {"responseType": "text"}).subscribe(
      data => {
        switch (data) {
          case "Ended":
            this.showAlert('Emergency over!',
              'The emergency was ended successfully!',
              () => {
                this.goBack();
              });
            break;
          default:
            this.showError("501", "Unexpected response from the server");
            break;
        }

      },
      err => {
        console.log(err);
        this.showError(err.status, err.statusText);
      }
    );
    this.http.get("http://localhost:8100/fetch/?&emergencyID=" + this.uuid, {"responseType": "json"}).subscribe(
      data => {
        this.updateMap(data["address"], data["latLng"]);
      },
      err => {
        console.log(err);
        this.showError(err.status, err.statusText);
      }
    );
  }

  public goBack(): void {
    this.uuid = "";
    this.showMap = false;

    const mapBox = document.getElementById("map");
    mapBox.style.width = this.zero;
    mapBox.style.height = this.zero;
  }


  initMap() {
    this.loaded = true;
    this.map = L.map('map', {
      zoom: 13
    });
    //Add OSM Layer
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      .addTo(this.map);
  }

  public showError(code: string, text: string): void {
    this.showAlert('Error ' + code,
      'An error occurred:\n' + text + '\n Please call 911 to handle this emergency!',
      () => {
        this.goBack();
      });
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
}
