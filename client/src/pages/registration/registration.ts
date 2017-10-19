import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  registered: boolean;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.checkAgreed();
  }

  public async checkAgreed() {
    var result = await this.storage.get("registered");
    if (!result) {
      return;
    }
    this.registered = true;
    this.navCtrl.parent.select(2);
  }

  public async register() {
    await this.storage.set("registered",true);
    this.checkAgreed()
  }

}
