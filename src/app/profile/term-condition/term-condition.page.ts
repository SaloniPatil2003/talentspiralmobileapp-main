import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.page.html',
  styleUrls: ['./term-condition.page.scss'],
  imports:[IonicModule]
})
export class TermConditionPage implements OnInit {

  constructor(private router : Router) { }

  navigateToProfile(){
    this.router.navigate(['all-tabs/profile']);
  }
  ngOnInit() {
  }

}
