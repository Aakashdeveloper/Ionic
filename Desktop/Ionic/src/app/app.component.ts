import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , AlertController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Constants } from '../shared/constant';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { NewsroomPage } from '../pages/newsroom/newsroom';
import { LatestNewsPage } from '../pages/latest-news/latest-news';
import { AboutusPage } from '../pages/aboutus/aboutus';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icons: string}>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public constants:Constants,
    private alertCtrl: AlertController,
    public Storage: Storage,) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icons: constants.MENU_ICONS_PATH.HOME_ICON },
      { title: 'News', component: NewsroomPage, icons: constants.MENU_ICONS_PATH.HAVE_YOU_SAY_ICON },
      { title: 'Latest Updates', component: LatestNewsPage, icons: constants.MENU_ICONS_PATH.NOTIFICATION_ICON },
      { title: 'About Us', component: AboutusPage, icons: constants.MENU_ICONS_PATH.ABOUT_ICON },
      { title: 'Exit', component: 'ExitPage', icons: constants.MENU_ICONS_PATH.LOGOUT_ICON }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.component == 'ExitPage') {
      this.showConfirm();
    }else{
      this.nav.setRoot(page.component);
    }

  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Exit Confirmation?',
      message: 'Do you really want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            //this.Storage.remove('userInfo');
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
