import { Component } from '@angular/core';

import { MessagesPage } from '../messages/messages';
import { AddPage } from '../add/add';
import { MyAccountPage } from '../myaccount/myaccount';
import { MorePage } from '../more/more';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagesPage;
  tab3Root = AddPage;
  tab4Root = MyAccountPage;
  tab5Root = MorePage;

  constructor() {

  }
}
