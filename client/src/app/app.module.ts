import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, AlertController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EulaPage } from "../pages/eula/eula";
import {WaitPage} from "../pages/wait/wait";
import { AccountSettingsPage } from "../pages/accountSettings/accountSettings";
import { MainPagePage } from "../pages/mainPage/mainPage";
import { Message911Page } from "../pages/message911/message911";
import { RegistrationPage } from "../pages/registration/registration";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EulaPage,
    WaitPage,
    AccountSettingsPage,
    MainPagePage,
    Message911Page,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EulaPage,
    WaitPage,
    AccountSettingsPage,
    MainPagePage,
    Message911Page,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertController,
    Storage
  ]
})
export class AppModule {}
