import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-marketing-details',
  templateUrl: './digital-marketing-details.page.html',
  styleUrls: ['./digital-marketing-details.page.scss'],
  imports:[IonicModule]
})
export class DigitalMarketingDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    navigateToBlogs(){
    this.router.navigate(['all-tabs/blog'])
  }

}
