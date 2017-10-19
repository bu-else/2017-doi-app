import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-eula',
  templateUrl: 'eula.html'
})
export class EulaPage {
  agreed: boolean;
  hidden: boolean;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.checkAgreed();
  }

  public async checkAgreed() {
    var result = await this.storage.get("agreed");
    console.log(result)
    if (!result) {
      return;
    }
    this.agreed = true;
    this.hidden = true;

  }
  public agree(): void {
    this.storage.set("agreed",true);
    this.hidden = true;
    this.agreed = true;
  }
  public disagree(): void {
    this.hidden = true;
  }

}
