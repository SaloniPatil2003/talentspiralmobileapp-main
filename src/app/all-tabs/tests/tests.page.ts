import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
  imports:[IonicModule]
})
export class TestsPage implements OnInit {

  constructor(private router: Router) { }

  navigateToProfile(){
    this.router.navigate(['all-tabs/home']);
  }

  navigateToDigitalMarketingDetails(){
   this.router.navigate(['all-tabs/test-detail']);
  }


  ngOnInit() {
  }

}
