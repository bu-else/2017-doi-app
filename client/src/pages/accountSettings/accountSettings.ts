import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';

import { MainPage } from '../main/main';

@Component({
  selector: 'page-accountSettings',
  templateUrl: 'accountSettings.html'
})
export class AccountSettingsPage {
  @ViewChild('myNav') nav: NavController;
  authForm: FormGroup;

  constructor(public navCtrl: NavController, public storage: Storage, private alertCtrl: AlertController,public navParams: NavParams, public formBuilder: FormBuilder) {
    this.nav = navCtrl;

    this.authForm = formBuilder.group({
      email: [window.localStorage.getItem('email'), Validators.compose([Validators.required,Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      phoneNumber: [window.localStorage.getItem('phoneNum'), Validators.compose([Validators.required])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      zipCode: [window.localStorage.getItem('zipCode'), Validators.compose([Validators.required,])],
    },{validator: this.matchingPasswords('password', 'repeatPassword')});
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  public goToMain(): void{
    this.navCtrl.setRoot(MainPage);
  }
  public presentAlert(): void {
    let alert = this.alertCtrl.create({
      title: 'Your account had been updated!',
      subTitle: "You're all set",
      buttons: ['Dismiss']
    });
    alert.present();
  }

  onSubmit(value: any): void {
    if(this.authForm.valid) {
      window.localStorage.setItem('email', value.email);
      window.localStorage.setItem('password', value.password);
      window.localStorage.setItem('phoneNum',value.phoneNumber);
      window.localStorage.setItem('zipCode',value.zipCode);
    }
  }

}
