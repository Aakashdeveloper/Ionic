import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Constants} from '../../shared/constant';
import { Api} from '../../shared/httpservice';
import { Utility} from '../../shared/utility';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-newsroom',
  templateUrl: 'newsroom.html',
})

export class NewsroomPage {

  public latestNewsObject:any;
  constructor(public navCtrl: NavController,
    public Storage: Storage,
    public Constants: Constants,) {
      this.latestNewsObject = this.Constants.NEWS_INFORMATION;

  }
}
