import { Component } from '@angular/core';

import { TempsPage } from '../temps/temps';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TempsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
