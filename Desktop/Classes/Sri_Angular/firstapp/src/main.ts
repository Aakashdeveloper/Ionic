import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));



  /*
  module=> All declration
  component=> HTML CSS Logic
  pipe=> help do change or alter data on run time
  service=> help to connect to third party
  route=> routing
  */
