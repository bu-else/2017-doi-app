import { Component } from '@angular/core';

import { EulaPage } from "../eula/eula";
import { WaitPage } from "../wait/wait";
import { AccountSettingsPage } from "../accountSettings/accountSettings";
import { MainPage } from "../main/main";
import { RegistrationPage } from "../registration/registration";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabEula = EulaPage;
  tabWait = WaitPage;
  tabAccountSettings = AccountSettingsPage;
  tabMainPage = MainPage;
  tabRegistration = RegistrationPage;

  constructor() {

  }



}
