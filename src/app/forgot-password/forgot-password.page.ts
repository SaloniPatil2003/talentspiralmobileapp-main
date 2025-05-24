import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  imports:[IonicModule]
})
export class ForgetPasswordPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateToSingIn(){
    this.router.navigate(['/signin'])
  }
}
