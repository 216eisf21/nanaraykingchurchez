import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoveQuotesPage } from './love-quotes';

@NgModule({
  declarations: [
    LoveQuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(LoveQuotesPage),
  ],
})
export class LoveQuotesPageModule {}
