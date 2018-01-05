import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InspirationPage } from '../pages/inspiration/inspiration';
import { GreatMindsPage } from '../pages/great-minds/great-minds';
import { LoveQuotesPage } from '../pages/love-quotes/love-quotes';
import { EducativeQuotesPage } from '../pages/educative-quotes/educative-quotes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InspirationPage,
    GreatMindsPage,
    LoveQuotesPage,
    EducativeQuotesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    HomePage,
    InspirationPage,
    GreatMindsPage,
    LoveQuotesPage,
    EducativeQuotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
