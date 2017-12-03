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
  private center: L.PointTuple;
  private mapWidth: string = "500px";
  private mapHeight: string = "500px";
  private zero: string = "0px";
  private uuid: string;
  private viewHeight: number = 15;

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


  public loadMap(address: string, latLngRaw: string) {
    if (!this.loaded) {
      this.initMap();
    }
    this.showMap = true;

    const mapBox = document.getElementById("map");
    mapBox.style.width = this.mapWidth;
    mapBox.style.height = this.mapHeight;

    const s = latLngRaw.split(",");
    const latLng = new L.LatLng(Number(s[0]),Number(s[1]));
    this.map.setView(latLng, this.viewHeight);

    var marker = L.marker(latLng).addTo(this.map);
    marker.bindPopup(address).openPopup();
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
    let dialogue = this.alertCtrl.create({
      title: 'Error ' + code,
      message: 'An error occurred:\n' + text,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.goBack();
          }
        },
      ],
      cssClass: 'big-alert'
    });
    dialogue.present();
  }

}
