import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreatMindsPage } from './great-minds';

@NgModule({
  declarations: [
    GreatMindsPage,
  ],
  imports: [
    IonicPageModule.forChild(GreatMindsPage),
  ],
})
export class GreatMindsPageModule {}
