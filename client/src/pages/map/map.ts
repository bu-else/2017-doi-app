import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import L from "leaflet";


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  private loaded: boolean;
  private map: L.Map;
  private center: L.PointTuple;
  constructor(public navCtrl: NavController) {

  }


  ionViewDidEnter() {
    if (this.loaded) {
      return;
    }
    this.center = [48.775556, 9.182778]; //Stuttgart

    //setup leaflet map
    this.initMap();
  }

  initMap() {
    this.map = L.map('map', {
      center: this.center,
      zoom: 13
    });

    //Add OSM Layer
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      .addTo(this.map);
  }

}
