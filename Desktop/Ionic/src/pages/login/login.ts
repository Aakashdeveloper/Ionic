import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utility } from '../../shared/utility';
import { Constants } from '../../shared/constant'
import { HomePage } from '../home/home';
import { Api } from '../../shared/httpservice';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private loginFormData: FormGroup;
  public keepSignInStatus: boolean = true;
  requiredUserNameMaxLength;
  requiredUsername;
  requiredPassword: string;
  public setuserInfo: any;
  public InvalidCredentials: any;
  public invalidCredentialsFlag: boolean = false;
  deviceToken: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public Utility: Utility,
    private menu: MenuController,
    public formBuilder: FormBuilder,
    public Constants: Constants,
    public Storage: Storage,
    public Api: Api,
    public http: Http,
    public events: Events,
    public platform: Platform,
  ) {

    // Form Validations
    this.loginFormData = this.formBuilder.group({
      // Validators.maxLength(10)
      firstName: ['', [Validators.required, Validators.maxLength(20)]], //['', Validators.required,], //Validators.pattern('[a-zA-Z][a-zA-Z ]+')  Validators.compose([Validators.maxLength(5)
      passWord: ['', Validators.required],
      keepSignInStatus: ['true']
    });

  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
    this.requiredUsername = this.Constants.LOGIN.USERNAME_REQUIRED;
    this.requiredPassword = this.Constants.LOGIN.PASSWORD_REQUIRED;
    this.requiredUserNameMaxLength = this.Constants.LOGIN.REQUIREDUSERNAMEMAXLENGTH;
  }

  keepSignedIn(event: any, signedInStatus) {
    if (this.keepSignInStatus) {
      this.keepSignInStatus = false;
    }
  }
  forgotPasswordOpenLink(event, url) {
  }

  //Submit Form
  saveAndSubmitData(loginformValues): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        var loginPostData;
        this.deviceToken = '0';
        loginPostData = {

        }
        this.Utility.showLoader();
        if (this.Constants.USER_LOGIN_INFO.USER_NAME == loginformValues.firstName && this.Constants.USER_LOGIN_INFO.PASS_WORD == loginformValues.passWord) {
          this.Storage.set('userInfo', loginformValues.firstName);
          this.navCtrl.setRoot(HomePage);
        } else {
          alert(this.Constants.COMMON_APP_MESSAGE.LOGIN_ERROR);
        }

        if (this.keepSignInStatus) {
          let signInfoObj = {
            "username": loginformValues.firstName,
            "password": loginformValues.passWord,
          }
          // this.Storage.set("SignInUserInfo", signInfoObj);
        } else {

          alert(this.Constants.COMMON_APP_MESSAGE.LOGIN_ERROR);
        }

        if (!this.Utility.isEmpty(loginformValues.firstName) && !this.Utility.isEmpty(loginformValues.passWord)) {
        } else {
          console.log('empty');
        }
        this.Utility.hideLoader();
      } catch (e) {
        let error = new Error();
        reject(error);
      }
    });
  }
}
  //}
