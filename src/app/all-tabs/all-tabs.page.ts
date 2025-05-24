import { Component } from '@angular/core';

import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-all-tabs',
  templateUrl: './all-tabs.page.html',
  styleUrls: ['./all-tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonContent
  ],
})
export class AllTabsPage {
  constructor() {}
}