import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {SplashScreen} from '@capacitor/splash-screen';
SplashScreen.hide();
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  
constructor(private router: Router, private menuCtrl: MenuController) {}

navigateToProfile(){
  this.router.navigate(['/all-tabs/profile']);
}

navigateToRegister(){
  this.router.navigate(['/signin']);
}
navigateToInternship(){
  this.router.navigate(['/all-tabs/internships']);
}

navigateToTraningCertificationPage(){
  this.router.navigate(['all-tabs/courses']);
}
navigateToTest(){
  this.router.navigate(['/all-tabs/tests']);
}
navigateToAbout(){
  this.router.navigate(['/all-tabs/about-us']);
}
navigateToBlogs(){
  this.router.navigate(['/all-tabs/blog']);
}




}
