import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as $ from 'jquery';
import {RegistrationPage} from "../registration/registration";
import {TabsPage} from "../tabs/tabs";
import * as Env from "../../env";

/*
import * as basil from 'basil-js';
import * as Hapi from 'hapi';
*/


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  registered: boolean;
  @ViewChild('myNav') nav: NavController;
  authForm: FormGroup;
  name;
  password;
  items;

  constructor(private http:Http, public navCtrl: NavController, public storage: Storage, private alertCtrl: AlertController,public navParams: NavParams, public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
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

  public logIn():void {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    //headers.append("Access-Control-Allow-Origin"," *");
    let options = new RequestOptions({ headers: headers });
    var name = this.name;
    var password = this.password;

    let postParams = {
      "username": name,
      "password": password
    }
    console.log(postParams);

    this.http.post("http://localhost:8001/api/login", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
        this.items = data.json().session._id;
        console.log(this.items);
      }, error => {
        console.log("error");
        console.log(error);// Error getting the data
      });
    console.log("here");

  }
  public goToReg(): void {
    this.navCtrl.push(RegistrationPage);
  }

  public goToMain(): void {
    console.log(this.items);
    this.navCtrl.push(TabsPage, {
      sessionKey: this.items
    });
  }

  /*
  public async register() {
    await this.storage.set("registered",true);
    this.checkAgreed()
  }
  */
}

