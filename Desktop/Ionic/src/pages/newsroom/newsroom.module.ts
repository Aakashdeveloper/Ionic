import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsroomPage } from './newsroom';

@NgModule({
  declarations: [
    NewsroomPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsroomPage),
  ],
})
export class NewsroomPageModule {}
