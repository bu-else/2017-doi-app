import { Component } from '@angular/core';

import { EulaPage } from "../eula/eula";
import { WaitPage } from "../wait/wait";
import { AccountSettingsPage } from "../accountSettings/accountSettings";
import { MainPage } from "../main/main";
import { RegistrationPage } from "../registration/registration";
import { LoginPage } from "../logIn/login";
import { MapPage } from "../map/map";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabWait = WaitPage;
  tabAccountSettings = AccountSettingsPage;
  tabMainPage = MainPage;
  tabMap = MapPage;

  constructor() {

  }



}
