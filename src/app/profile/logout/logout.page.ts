import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  imports:[IonicModule]
})
export class LogoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
