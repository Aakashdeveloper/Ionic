import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Constants} from '../../shared/constant';
/**
 * Generated class for the LatestNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-latest-news',
  templateUrl: 'latest-news.html',
})
export class LatestNewsPage {

  public latestNewsObject:any;
  constructor(public navCtrl: NavController,
    public Storage: Storage,
    public Constants: Constants,) {
      this.latestNewsObject = this.Constants.NEWS_INFORMATION;

  }

}
