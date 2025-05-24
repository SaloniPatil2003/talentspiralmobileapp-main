import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
  imports:[IonicModule]
})
export class PrivacyPage implements OnInit {

  constructor(private router : Router) { }

  navigateToProfile(){
    this.router.navigate(['all-tabs/profile']);
  }

  ngOnInit() {
  }

}
