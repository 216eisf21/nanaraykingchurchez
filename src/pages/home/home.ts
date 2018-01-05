import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InspirationPage } from '../inspiration/inspiration';
import { GreatMindsPage } from '../great-minds/great-minds';
import { LoveQuotesPage } from '../love-quotes/love-quotes';
import { EducativeQuotesPage } from '../educative-quotes/educative-quotes';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  inspiration(){
   this.navCtrl.push(InspirationPage);
  }

  GMind(){
    this.navCtrl.push(GreatMindsPage);
   }

   lQuotes(){
    this.navCtrl.push(LoveQuotesPage);
   }

   eQuotes(){
    this.navCtrl.push(EducativeQuotesPage);
   }
}
