import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MainPage } from "../main/main";
import { TabsPage} from "../tabs/tabs";
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



  register() {
    $("#form1Sbm").click(function () {
      //submitHandlerPatient("<%= configUrl %>");
      var firstName = $("#firstName") ? $("#firstName")[0].value : "a";
      var phoneNumber = $("#phoneNumber") ? $("#phoneNumber")[0].value : "a";
      var zipCode = $("#zipCode") ? $("#zipCode")[0].value : "a";
      var email = $("#email") ? ($("#email")[0].value) : "a"; //default
      var password = $("#psw") ? $("#psw")[0].value : "a";
      var repeatPassword = $("#psw-repeat") ? $("#psw-repeat")[0].value : "ab";
      if (password != repeatPassword){
        console.log("Don't match");
        return
      }

      $.ajax({
        type: 'POST',
        url: "localhost:8001/api/signup",
        data: {
          firstName: firstName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          zipCode: zipCode
        },
        dataType: "application/json",
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
    })}
  public goToEULA(): void{
      this.navCtrl.setRoot(EulaPage);
  }

    /*
    public async register() {
      await this.storage.set("registered",true);
      this.checkAgreed()
    }
    */
  }

