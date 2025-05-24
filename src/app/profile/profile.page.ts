import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [IonicModule],
  standalone: true
})
export class ProfilePage implements OnInit {
  isSubPage = false;

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
    this.router.navigateByUrl('/signin');
  }

  navigationToHome(){
    this.router.navigate(['/all-tabs/home']);
  }

  onSubPageActivate() {
    this.isSubPage = true;
  }

  onSubPageDeactivate() {
    this.isSubPage = false;
  }

  ngOnInit() {}
}