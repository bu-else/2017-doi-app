import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import * as Config from './config.js';
import * as $ from 'jquery';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  public clearStorage(): void {
    this.storage.clear();
    // console.log(Config.get("projectName"));
  }

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
}
