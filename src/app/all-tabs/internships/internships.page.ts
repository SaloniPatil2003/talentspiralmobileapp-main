import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.page.html',
  styleUrls: ['./internships.page.scss'],
  imports:[IonicModule]
})
export class InternshipsPage implements OnInit {

  constructor(private router: Router) { }


  navigateToHomePage(){
    this.router.navigate(['all-tabs/home']);
  }
  ngOnInit() {
  }

}
