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
  hasLocation = false;
  agreed = false;
  constructor(public navCtrl: NavController, public storage: Storage, public geolocation: Geolocation) {
    this.checkAgreed();
  }
  public async checkAgreed() {
    this.agreed = await this.storage.get("agreed");
    if (!this.agreed) {
      return;
    }

    this.geolocation.getCurrentPosition().then((resp) => {
      // Requesting the coordinate is good enough.
      this.navCtrl.parent.select(1);
    }).catch((error) => {
      this.hasLocation = false;
      console.log('Error getting location', error);
    });

  }
  public async agree() {
    await this.storage.set("agreed",true);

    this.checkAgreed();
  }

  public goToMain(): void{
    this.navCtrl.setRoot(TabsPage);
  }


  public disagree(): void {
    this.hidden = true;
  }


}
