import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-eula',
  templateUrl: 'eula.html'
})
export class EulaPage {
  hidden: boolean;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.hide()
  }

  public async hide() {
    if (!await this.storage.get("agreed")) {
      return;
    }
    this.hidden = true;

  }
  public agree(): void {
    this.storage.set("agreed",true);
    this.hide()
  }

}
