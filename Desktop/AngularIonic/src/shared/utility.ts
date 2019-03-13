import { Injectable } from '@angular/core';
import { App, AlertController, LoadingController, Loading, Platform, ToastController,Nav } from 'ionic-angular';
import { Constants } from '../shared/constant';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

@Injectable()
export class Utility {
    loading: any;
    notificationTokenId: string = '';

    constructor(public loadingCtrl: LoadingController,
        //public inappbrowser: InAppBrowser,
        public platform: Platform,
        public Constants: Constants,
       // public network: Network,
        private toastCtrl: ToastController,
       // private fcm: FCM,
        public app:App

    ) { }
    showLoader(message: string = "") {
        this.loading = this.loadingCtrl.create({
            content: message,
            enableBackdropDismiss: false
        })
        this.loading.present();
    }
    hideLoader() {
        return new Promise((resolve, reject) => {
            try {
                if (this.loading != null) {
                    this.loading.dismiss()
                        .then(() => {
                            resolve();
                        })
                        .catch((error) => {
                            reject(error);
                        });
                    this.loading = null;
                }
            } catch (e) {
                let error = new Error();
                reject(error);
             }
        });
    }
    isEmpty(variable: any) {
        try {

            if ((variable == null) || (variable == undefined) || (variable == "null") || (variable == "undefined")) {
                return true;
            }
            else if (typeof variable == 'object' && (Object.keys(variable).length === 0 && variable.constructor === Object)) {
                return true;
            }
            else if (variable == '') {
                return true;
            }
            else
                return false;
        } catch (error) {
            error.message = "isEmpty : " + error.message;
            error.pageName = "Utills";
            error.catchError = true;

        }
    }

    isEmptyObject(obj: any) {
        try {

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {

                    return false;
                }


            }

            return JSON.stringify(obj) === JSON.stringify({});
        } catch (error) {
            error.message = "isEmptyObject : " + error.message;
            error.pageName = "Utills";
            error.catchError = true;

        }
    }
    // openLinkInappBrowser(url) {

    //     const options: InAppBrowserOptions = {
    //         hidden: 'no',
    //         closebuttoncaption: 'Close',
    //         clearcache: 'yes',
    //         clearsessioncache: 'yes',
    //         location: 'no',
    //         EnableViewPortScale: 'yes'
    //     };
    //     // window.open(encodeURI(url), '_blank', JSON.stringify(options));

    //     if (this.inappbrowser !== undefined && this.inappbrowser != null) {
    //         this.inappbrowser.create(url, '_blank', options);
    //         if (this.platform.is('ios')) {
    //             window.open(encodeURI(url), '_blank', JSON.stringify(options));//'location=no,EnableViewPortScale=yes'
    //             this.hideLoader();
    //         }
    //         else {
    //             window.open(encodeURI(url), '_system', JSON.stringify(options));
    //             this.hideLoader();
    //         }
    //     } else {
    //         console.log("openWebpage failed");
    //     }
    // }
    showToastMessage(toastMessage) {
        let toast = this.toastCtrl.create({
            message: toastMessage,
            duration: 3000,
            position: 'bottom',
            cssClass: "toastMessage",
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }
    // isNetworkConnectionAvailable(): Promise<boolean> {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             if(this.platform.is('cordova')){
    //             if (this.network.type == "none" || this.network.type == 'null' || this.network.type == undefined) {
    //                 this.hideLoader();
    //                 this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.NO_NETWORK_MESSAGE);
    //                 resolve(false);
    //             }
    //             else {
    //                 resolve(true);
    //             }
    //         }else{

    //             resolve(true);
    //         }
    //         }
    //         catch (e) {
    //             reject(e);
    //         }
    //     });

    // }


    errorDetails(error) {
        try {
            this.hideLoader();

            if (!this.isEmpty(error)) {



                if (!this.isEmpty(error.status)) {
                    switch (error.status) {
                        case 401:
                        this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.LOGIN_ERROR);

                         this.app.getRootNav().setRoot(LoginPage);


                       break;

                        case 404:
                         this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.SERVER_DATA_ERROR);

                          this.app.getRootNav().setRoot(LoginPage);


                        break;
                        case 408:
                            this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.SERVER_DATA_ERROR);
                            break;


                        default:
                        this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.SERVER_DATA_ERROR);
                        break;
                    }
                }
                else if (error.catchError == true) {

                    this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.SERVICE_NOT_FOUND);
                }

                else if (error.serverDataError == true) {
                    this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.SERVICE_NOT_FOUND);
                }

                else if (error.name == "TimeoutError") {
                    this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.SERVICE_NOT_FOUND);
                }
                else {

                    this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.SERVICE_NOT_FOUND);
                }
            } else {
                this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.SERVICE_NOT_FOUND);
            }

            // this.showAlert(JSON.stringify(error), "Take screenshot");

        } catch (error) {
            error.message = "errorDetails : " + error.message;
            error.pageName = "Utills";
            error.catchError = true;
            this.showToastMessage(this.Constants.COMMON_APP_MESSAGE.SERVICE_NOT_FOUND);

            //this.showAlert(JSON.stringify(error), "Take screenshot");
        }
    }
//     getNotificationToken() {

//         if (this.platform.is('cordova')) {
//             this.platform.ready().then(() => {
//                 this.fcm.getToken().then(token => {
//                     console.log('Token' + token);
//                     this.notificationTokenId = token;

//                 });
//                 this.fcm.onTokenRefresh().subscribe(token => {
//                     console.log('Refresh Token' + token);
//                     this.notificationTokenId = token;
//                 })
//             })
//         }
//         else {
//             this.notificationTokenId = '0';

//         }
//         return this.notificationTokenId;
//     }

//     receiveNotification()
//     {
//         if (this.platform.is('cordova')) {
//             this.platform.ready().then(() => {
//            this.fcm.onNotification().subscribe(data => {
//         alert(data);
//         alert(JSON.stringify(data));
//         if(data.wasTapped){
//         //  alert(data+JSON.stringify(data)+'Background')
//           console.log("Received in background");
//         } else {
//           //alert(data+JSON.stringify(data)+'Foreground')
//           console.log("Received in foreground");
//         };
//       });
//     })
// }
//     }

}
