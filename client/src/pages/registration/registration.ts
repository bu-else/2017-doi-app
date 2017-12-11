import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import * as $ from 'jquery';
import {EulaPage} from "../eula/eula";

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

  constructor(public navCtrl: NavController, public storage: Storage, private alertCtrl: AlertController,public navParams: NavParams, public formBuilder: FormBuilder){
    this.nav = navCtrl;

    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      zipCode: ['', Validators.compose([Validators.required])],
    }, {validator: this.matchingPasswords('password', 'repeatPassword')});
    this.checkAgreed();
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

  public async checkAgreed() {
    var result = await this.storage.get("registered");
    if (!result) {
      return;
    }
    this.registered = true;
    this.navCtrl.parent.select(2);
  }



  public register() {
      //submitHandlerPatient("<%= configUrl %>");
      var phoneNumber = $("#phoneNumber") ? $("#phoneNumber")[0].value : "a";
      var zipCode = $("#zipCode") ? $("#zipCode")[0].value : "a";
      var email = $("#email") ? ($("#email")[0].value) : "a"; //default
      var password = $("#psw") ? $("#psw")[0].value : "a";

      // @Michael: Please keep this or refactor it because @Ben is relying on this for sending it to the server
      // You can remove this comment.
      this.storage.set("phoneNumber",$("#phoneNumber"));

      $.ajax({
        type: 'POST',
        url: "localhost:8001/api/signup",
        data: {
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          zipCode: zipCode
        },
        dataType: "jsonp",
        success: function (data, text) {
          //basil.set('cookie', data);



          console.log("sucess");
          console.log(data)
          //window.location.href = serverUrl;
        },
        error: function (request, status, error) {
          var reply = request.responseText
          var replyText = (JSON.parse(reply))
          alert(replyText.message)
          console.log('failure')
        }
      });
    }
  public goToEULA(): void{
      this.navCtrl.setRoot(EulaPage);
  }
  onSubmit(value: any): void {
    if(this.authForm.valid) {
      window.localStorage.setItem('email', value.email);
      window.localStorage.setItem('password', value.password);
      window.localStorage.setItem('repeatPassword',value.repeatPassword);
      window.localStorage.setItem('phoneNum',value.phoneNumber);
      window.localStorage.setItem('zipCode',value.zipCode);
    }
  }

    /*
    public async register() {
      await this.storage.set("registered",true);
      this.checkAgreed()
    }
    */
  }

