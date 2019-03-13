import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { NewsroomPage } from '../pages/newsroom/newsroom';
import { LatestNewsPage } from '../pages/latest-news/latest-news';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Utility} from '../shared/utility';
import { Constants } from '../shared/constant';

import { Http,HttpModule, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Api} from '../shared/httpservice';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    NewsroomPage,
    AboutusPage,
    LatestNewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    NewsroomPage,
    AboutusPage,
    LatestNewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Constants,
    Utility,
    Api
  ]
})
export class AppModule {}
