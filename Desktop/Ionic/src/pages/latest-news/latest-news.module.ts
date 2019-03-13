import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatestNewsPage } from './latest-news';

@NgModule({
  declarations: [
    LatestNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(LatestNewsPage),
  ],
})
export class LatestNewsPageModule {}
