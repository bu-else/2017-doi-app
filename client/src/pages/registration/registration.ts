import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from 'ionic-angular';
import * as $ from 'jquery';
import {EulaPage} from "../eula/eula";
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
import * as basil from 'basil-js';
import * as Hapi from 'hapi';
*/


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  registered: boolean;
  @ViewChild('myNav') nav: NavController;
  authForm: FormGroup;
  email;
  zipCode;
  password;
  phoneNumber;
  name;
  constructor(private http:Http, public navCtrl: NavController, public storage: Storage, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.nav = navCtrl;

    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      zipCode: ['', Validators.compose([Validators.required])],
    }, {validator: this.matchingPasswords('password', 'repeatPassword')});
    this.checkAgreed();
  }


  postRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }

    this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  public async checkAgreed() {
    var result = await this.storage.get("registered");
    if (!result) {
      return;
    }
    this.registered = true;
    this.navCtrl.parent.select(2);
  }


  public register() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    //headers.append("Access-Control-Allow-Origin"," *");
    let options = new RequestOptions({ headers: headers });
    var name = this.name;
    var email = this.email;
    var password = this.password;

    let postParams = {
      "name": name,
      "email": email,
      "username": name,
      "password": password
    }
    console.log(postParams);

    this.http.post("http://localhost:8001/api/signup", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log("error");
        console.log(error);// Error getting the data
      });
  }

  public goToEULA(): void {
    this.navCtrl.setRoot(EulaPage);
  }

  onSubmit(value: any): void {
    if (this.authForm.valid) {
      window.localStorage.setItem('email', value.email);
      window.localStorage.setItem('password', value.password);
      window.localStorage.setItem('repeatPassword', value.repeatPassword);
      window.localStorage.setItem('phoneNum', value.phoneNumber);
      window.localStorage.setItem('zipCode', value.zipCode);
    }
  }

  /*
  public async register() {
    await this.storage.set("registered",true);
    this.checkAgreed()
  }
  */
}

