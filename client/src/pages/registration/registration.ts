import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
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
      var firstName = $("#firstName") ? $("#firstName")[0].value : " ";
      var phoneNumber = $("#phoneNumber") ? $("#phoneNumber")[0].value : "";
      var zipCode = $("#zipCode") ? $("#zipCode")[0].value : "";
      var email = $("#email") ? ($("#email")[0].value) : ""; //default
      var password = $("#psw") ? $("#psw")[0].value : "";

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
        dataType: "json",
        success: function (data, text) {
          //basil.set('cookie', data);
          console.log("sucess");
          console.log(data)
          //window.location.href = serverUrl;
        },
        error: function (request, status, error) {
          var reply = request.responseText
          console.log("WE HERE")
          var replyText = (JSON.parse(reply))
          alert(replyText.message)
          console.log('failure')
        }
      });
    })

    /*
    public async register() {
      await this.storage.set("registered",true);
      this.checkAgreed()
    }
    */
  }
}
