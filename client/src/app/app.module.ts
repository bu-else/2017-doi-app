import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, AlertController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { EulaPage } from "../pages/eula/eula";
import { WaitPage } from "../pages/wait/wait";
import { AccountSettingsPage } from "../pages/accountSettings/accountSettings";
import { MainPage } from "../pages/main/main";
import { RegistrationPage } from "../pages/registration/registration";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation} from "@ionic-native/geolocation";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    EulaPage,
    WaitPage,
    AccountSettingsPage,
    MainPage,
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
    TabsPage,
    EulaPage,
    WaitPage,
    AccountSettingsPage,
    MainPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertController,
    Geolocation,
    Storage
  ]
})
export class AppModule {}
