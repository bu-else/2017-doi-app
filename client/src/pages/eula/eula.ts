import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: 'page-eula',
  templateUrl: 'eula.html'
})
export class EulaPage {
  agreed: boolean;
  hidden: boolean;

  constructor(public navCtrl: NavController, public storage: Storage, public geolocation: Geolocation) {
    this.checkAgreed();
  }

  public async checkAgreed() {
    var result = await this.storage.get("agreed");
    if (!result) {
      return;
    }
    this.agreed = true;
    this.hidden = true;
    this.navCtrl.parent.select(1);
  }

  public async agree() {
    await this.storage.set("agreed",true);
    this.geolocation.getCurrentPosition().then((resp) => {
      // Simply requesting the coordinate is good enough.
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.checkAgreed()
  }

  public disagree(): void {
    this.hidden = true;
  }

}
