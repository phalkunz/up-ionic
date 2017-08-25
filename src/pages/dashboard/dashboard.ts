import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { PredictionsPage, SignupPage, StandingsPage } from '../';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  public predictions = PredictionsPage;
  public standings = StandingsPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController
  ) {
  }

  /**
   * @todo move this method to (BasePage) and have the class extends BaseClass
   * @param page String
   */
  openPage(page) {
    this.navCtrl.push(page);
    this.menuCtrl.close();
  }
}
