import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
  imports:[IonicModule, CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesPage implements OnInit {
  swiperModules = [Navigation];
  mySwiperOption={
    loop:true,
    Navigation:true,
    Pagination:{clickable:true},
    spaceBetween:10
  }
  constructor(private menuCtrl: MenuController, private router: Router) { }
  openMenu() {
    this.menuCtrl.open(); // Opens the side menu
  }
  
  navigateToCourseDetails(){
    this.router.navigate(['/all-tabs/course-detail']);
  }
   navigationTONotification(){
    this.router.navigate(['all-tabs/notification'])
   }
   navigateToOurExpertAkriti(){
    this.router.navigate(['all-tabs/our-expert']);
  }

  ngOnInit() {
  }

}
