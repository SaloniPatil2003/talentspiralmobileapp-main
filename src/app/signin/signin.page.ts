import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  imports:[IonicModule]
})
export class SigninPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(){
    console.log("hey")
  }
  navigateToForgetPassword(){
    this.router.navigate(['/forgot-password']);
  }
  navigateToRegister(){
    this.router.navigate(['/registeionic']);
  }
  navigateToHomePage(){
    this.router.navigate(['/all-tabs/home'])
  }
}
