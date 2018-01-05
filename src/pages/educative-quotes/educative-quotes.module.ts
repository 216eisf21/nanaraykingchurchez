import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducativeQuotesPage } from './educative-quotes';

@NgModule({
  declarations: [
    EducativeQuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(EducativeQuotesPage),
  ],
})
export class EducativeQuotesPageModule {}
