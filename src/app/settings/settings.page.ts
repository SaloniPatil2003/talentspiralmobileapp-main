import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  imports:[IonicModule]
})
export class SettingsPage implements OnInit {

 
  constructor(private router: Router) {}

  navigationToEditPage() {
    this.router.navigateByUrl('/all-tabs/profile/edit-profile'); 
  }

  navigationToCourse() {
    this.router.navigateByUrl('/all-tabs/profile/my-courses');
  }

  navigationToPayment() {
    this.router.navigateByUrl('/all-tabs/profile/payment');
  }

  navigationToTerm() {
    this.router.navigateByUrl('/all-tabs/profile/term-condition');
  }

  navigationToPrivacy() {
    this.router.navigateByUrl('/all-tabs/profile/privacy');
  }
  navigationToLogout() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
