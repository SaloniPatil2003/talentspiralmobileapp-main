import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeionic',
  templateUrl: './registeionic.page.html',
  styleUrls: ['./registeionic.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class RegisteionicPage implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  navigateToSignIn(){
    this.router.navigate(['/signin'])
  }
}