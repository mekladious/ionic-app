import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestPage } from '../test/test'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1root = TestPage;
  tab2root = TestPage;
  tab3root = TestPage;

  active: string = "classifieds";
  constructor(public navCtrl: NavController) {
  }

}
