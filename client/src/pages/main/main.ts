import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import * as Config from './config.js';
import * as $ from 'jquery';
import {LoginPage} from "../logIn/login";
import { AlertController } from 'ionic-angular';
import * as Env from "../../env";


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public storage: Storage,private alertCtrl: AlertController) {

  }

  public async clearStorage() {
    console.log(await this.storage.clear());
    // console.log(Config.get("projectName"));
    console.log(await this.storage.set("phoneNumber",Env.BEN_NUMBER));
  }
  public goToLogin(): void{
    this.navCtrl.setRoot(LoginPage);
  }
  public presentAlert(): void {
    let alert = this.alertCtrl.create({
      title: 'You have been logged out!',
      subTitle: "You're all set",
      buttons: ['Dismiss']
    });
    alert.present();
  }
/*
  logOut() {
    $("#form3Sbm").click(function () {
      //submitHandlerPatient("<%= configUrl %>");
      $.ajax({
        type: 'Delete',
        url: "localhost:8001/api/logout",
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
    })
  }
  */
}
