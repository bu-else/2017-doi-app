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
  private uuid: string;
  private showMap: boolean = false;

  private map: L.Map;
  private mapWidth: string = "500px";
  private mapHeight: string = "500px";
  private zero: string = "0px";
  private viewHeight: number = 15;

  private pingIntervalTime: number = 30 * 1000;
  private latLng: L.LatLng;
  private marker: L.Marker;
  private address: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: HttpClient) {

  }

  public viewEmergency(): void {
    this.http.get("http://localhost:8100/fetch-info/?&EmergencyID=" + this.uuid, {"responseType": "json"}).subscribe(
      data => {
        this.loadMap(data["address"], data["latLng"], data["description"]);
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
    this.http.get("http://localhost:8100/end-emergency/?&EmergencyID=" + this.uuid, {"responseType": "text"}).subscribe(
      data => {
        this.goBack();
      },
      err => {
        console.log(err);
        this.showError(err.status, err.statusText);
      }
    );
  }

  public initMap(): void {
    console.log("HELLO");
    this.loaded = true;
    this.map = L.map('map', {
      zoom: this.viewHeight
    });
    //Add OSM Layer
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      .addTo(this.map);
  }

  public loadMap(newAddress: string, latLngRaw: string, description: string): void {
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
    this.marker.bindPopup(newAddress).openPopup();
    this.address = newAddress;

    setTimeout(()=> {
      document.getElementById("description").innerText = description;
    },1);

    this.pullUpdates();
  }

  public updateMap(newAddress: string, latLngRaw: string, description: string): void {
    if (!this.showMap) {
      return;
    }
    const s = latLngRaw.split(",");
    const newLatLng = new L.LatLng(Number(s[0]), Number(s[1]));
    if (newLatLng.equals(this.latLng) && this.address==newAddress) {
      return
    }
    this.latLng = newLatLng;
    this.showAlert("Emergency has been updated",
      "The updated location for the emergency is now shown on your map.",
      () => {
        this.marker.unbindPopup();
        this.marker.setLatLng(this.latLng)
        this.marker.bindPopup(newAddress).openPopup();
      })

    document.getElementById("description").innerText = description;
  }

  public pullUpdates(): void {
    if (!this.showMap) {
      return;
    }
    setTimeout(() => {
      this.pullUpdates()
    }, this.pingIntervalTime);

    this.http.get("http://localhost:8100/dispatch-status/?&EmergencyID=" + this.uuid, {"responseType": "text"}).subscribe(
      data => {
        switch (data) {
          case "Ended":
            this.goBack();
            this.showAlert('Emergency over!',
              'The emergency was ended successfully!',
              () => {});
            break;
          case "Accepted":
          case "Rejected":
          case "Pending":
            this.http.get("http://localhost:8100/fetch-info/?&EmergencyID=" + this.uuid, {"responseType": "json"}).subscribe(
              data => {
                this.updateMap(data["address"], data["latLng"], data["description"]);
              },
              err => {
                console.log(err);
                this.showError(err.status, err.statusText);
              }
            );
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
  }

  public goBack(): void {
    this.uuid = "";
    this.showMap = false;

    const mapBox = document.getElementById("map");
    mapBox.style.width = this.zero;
    mapBox.style.height = this.zero;
  }

  public showError(code: string, text: string): void {
    this.showAlert('Error ' + code,
      'An error occurred:\n' + text,
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
