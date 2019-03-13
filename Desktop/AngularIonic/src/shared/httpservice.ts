import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Constants } from '../shared/constant';
import { Utility } from '../shared/utility';
import { Network } from '@ionic-native/network';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
constructor(
    public http: Http,
    public constants: Constants,
    //public network: Network,
    public utills: Utility
){}
postData(_url, _params?, _headerParams?, _options?) {
    try {
        let headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );

        if (!this.utills.isEmpty(_headerParams)) {
            for (let i = 0; i < _headerParams.length; i++) {
                headers.append(_headerParams[i].key, _headerParams[i].value);
            }
        }

        let postOptions = new RequestOptions({
            headers: headers
        });
        return this.http.post(_url, _params, postOptions)
            .map(res => res.json())
        //   .timeout(this.constants.APP_SERVICE_DATA.TIMEOUT_IN_MILLISECOND);

    }
    catch (e) {

        return Observable.throw(e);
    }
}

getData(_url, _params?, _headerParams?) {
    try {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Accept", 'application/json');

       // headers.append("Authorization", this.constants.APP_SERVICE_DATA.AUTHORIZATION);

        if (!this.utills.isEmpty(_headerParams)) {
            for (let i = 0; i < _headerParams.length; i++) {
                headers.append(_headerParams[i].key, _headerParams[i].value);
            }
        }
        //var params = _params;
        let getOptions = new RequestOptions({
            headers: headers,
            params: _params,

        });

        return this.http.get(_url, getOptions)
            .map(res => res.json())
           // .timeout(this.constants.PASS_KEY.TIMEOUT_IN_MILLISECOND);


    }
    catch (e) {
        let error = new Error();
        // error.catchError = true;
        // error.pageName = "Api";
        // error.message = "getData : " + e.message;
        return Observable.throw(error);
    }
}
}
