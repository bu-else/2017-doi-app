import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { LoginPage } from "../pages/logIn/login";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    EulaPage,
    WaitPage,
    AccountSettingsPage,
    MainPage,
    RegistrationPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    EulaPage,
    WaitPage,
    AccountSettingsPage,
    MainPage,
    RegistrationPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertController,
    Geolocation,
    UniqueDeviceID,
    SMS,
    Storage,
    HttpClientModule
  ]
})
export class AppModule {}
