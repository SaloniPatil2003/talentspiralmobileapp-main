import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.page.html',
  styleUrls: ['./register-second.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class RegisterSecondPage implements OnInit {
  constructor(private router:Router) {}

  ngOnInit() {}
  navigateSignIn(){
    this.router.navigate(['/signin']);
  }
  navigateRegister(){
    this.router.navigate(['/registeionic']);
  }
}