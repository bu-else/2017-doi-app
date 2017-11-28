import { Component } from '@angular/core';

import { EulaPage } from "../eula/eula";
import { WaitPage } from "../wait/wait";
import { AccountSettingsPage } from "../accountSettings/accountSettings";
import { MainPage } from "../main/main";
import { RegistrationPage } from "../registration/registration";
import { LoginPage } from "../logIn/login";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabEula = EulaPage;
  tabWait = WaitPage;
  tabAccountSettings = AccountSettingsPage;
  tabMainPage = MainPage;
  tabRegistration = RegistrationPage;
  tabLogIn = LoginPage;

  constructor() {

  }



}
