import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PredictionsPage } from '../';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public formInputs = {
    username: '',
    email: '',
    password: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public doSignup() {
    this.navCtrl.push(PredictionsPage);
  }

}
