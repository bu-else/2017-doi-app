import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EulaPage } from "../eula/eula";
import { WaitPage } from "../wait/wait";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabHome = HomePage;
  tabAbout = AboutPage;
  tabContact = ContactPage;
  tabEula = EulaPage;
  tabWait = WaitPage;

  constructor() {

  }
}
