import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  imports:[IonicModule]
})
export class ServicesPage implements OnInit {

  constructor(private router: Router) { }

   navigationTOAiServiceDetail(){
    this.router.navigate(['all-tabs/service-ai-details'])
   }
   navigationTONotification(){
    this.router.navigate(['all-tabs/notification'])
   }

  ngOnInit() {
  }

}
