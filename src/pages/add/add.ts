import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NotificationsPage } from '../notifications/notifications';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  tab1Root = SettingsPage;
  tab2Root = NotificationsPage;

  constructor(public navCtrl: NavController) {

  }

}
