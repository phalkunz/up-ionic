import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StandingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {

  public standings = [
    { position: 1, username: 'micmania1', pts: 136 },
    { position: 2, username: 'micmania1', pts: 136 },
    { position: 3, username: 'micmania1', pts: 136 },
    { position: 4, username: 'micmania1', pts: 136 },
    { position: 5, username: 'micmania1', pts: 136 },
    { position: 6, username: 'micmania1', pts: 136 },
    { position: 7, username: 'micmania1', pts: 136 },
    { position: 8, username: 'micmania1', pts: 136 },
    { position: 9, username: 'micmania1', pts: 136 },
    { position: 10, username: 'micmania1', pts: 136 },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
