import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MessagesPage } from '../messages/messages';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  constructor(public navCtrl: NavController) {

  }

}
