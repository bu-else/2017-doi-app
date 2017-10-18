import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EulaPage } from "../eula/eula";
import { WaitPage } from "../wait/wait";
import { AccountSettingsPage } from "../accountSettings/accountSettings";
import { MainPagePage } from "../mainPage/mainPage";
import { Message911Page } from "../message911/message911";
import { RegistrationPage } from "../registration/registration";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabHome = HomePage;
  tabAbout = AboutPage;
  tabContact = ContactPage;
  tabEula = EulaPage;
  tabWait = WaitPage;
  tabAccountSettings = AccountSettingsPage;
  tabMainPage = MainPagePage;
  tabMessage911 = Message911Page;
  tabRegistration = RegistrationPage;

  constructor() {

  }
}
