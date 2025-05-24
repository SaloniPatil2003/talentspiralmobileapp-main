import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.page.html',
  styleUrls: ['./my-courses.page.scss'],
  imports:[IonicModule]
})
export class MyCoursesPage implements OnInit {

  constructor(private router : Router) { }
  navigateToProfile(){
    this.router.navigate(['all-tabs/profile']);
  }


  ngOnInit() {
  }

}
