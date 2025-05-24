import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.page.html',
  styleUrls: ['./test-detail.page.scss'],
  imports:[IonicModule]
})
export class TestDetailPage implements OnInit {

  constructor(private router: Router) { }


  navigateToTestPage(){
    this.router.navigate(['all-tabs/tests']);
  }
  ngOnInit() {
  }

}
