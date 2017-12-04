import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Geolocation } from "@ionic-native/geolocation";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-eula',
  templateUrl: 'eula.html'
})
export class EulaPage {
  hidden: boolean;
  constructor(public navCtrl: NavController, public storage: Storage, public geolocation: Geolocation) {
    this.checkAgreed();
  }
  public async checkAgreed() {
    var result = await this.storage.get("agreed");
    if (!result) {
      return;
    }
    this.navCtrl.parent.select(1);
  }
  public async agree() {
    await this.storage.set("agreed",true);
    this.geolocation.getCurrentPosition().then((resp) => {
      // Requesting the coordinate is good enough.
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.checkAgreed();
  }

  public goToMain(): void{
    this.navCtrl.setRoot(TabsPage);
  }


  public disagree(): void {
    this.hidden = true;
  }


}
