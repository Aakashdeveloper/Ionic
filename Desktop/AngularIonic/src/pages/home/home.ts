import { Component } from '@angular/core';
import { NavController, AlertController, Events  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { NewsroomPage } from '../newsroom/newsroom';
import { LatestNewsPage } from '../latest-news/latest-news';
import { AboutusPage } from '../aboutus/aboutus';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userName:string;
  activeClassNew:boolean = false;
  activeClassShe:boolean = false;
  constructor(public navCtrl: NavController,
    public Storage: Storage,
    private alertCtrl: AlertController,) {
      this.Storage.get('userInfo').then((userName) => {
        this.userName =  userName;
      });

  }
  navigatListing(pageName)
  {
     switch (pageName) {
    //   case "LatestnewsPage":
    //   this.activeClassLat = true;
    //   this.activeClassNew = false;
    //   this.activeClassShe = false;
    //   this.activeClassBus = false;
    //   this.activeClassHav = false;
    //       break;
      case "NewsroomPage":
      this.activeClassNew = true;
      this.activeClassShe = false;
      //this.activeClassLat = false;
      this.navCtrl.push(NewsroomPage)
          break;
      case "LatestNewsPage":
      this.activeClassShe = true;
      this.activeClassNew = false;
      this.navCtrl.push(LatestNewsPage)
          break;
      case "AboutusPage":
      this.activeClassShe = true;
      this.activeClassNew = false;
      this.navCtrl.push(AboutusPage)
          break;
      case "LoginPage":
      this.showConfirm();
          break;
      // case "businessUpdatePage":
      // this.activeClassBus = true;
      // //this.activeClassLat = false;
      // this.activeClassNew = false;
      // this.activeClassShe = false;
      // this.activeClassHav = false;
      //     break;
      // case "HaveyoursayPage":

      // this.activeClassHav = true;
      // //this.activeClassLat = false;
      // this.activeClassNew = false;
      // this.activeClassShe = false;
      // this.activeClassBus = false;
      //     break;
  }
  //this.navCtrl.push(pageName);
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
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
