import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RegistrationPage } from "../registration/registration";
import { EulaPage } from "../eula/eula";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  public clearStorage(): void {
    this.storage.clear();
  }
}
