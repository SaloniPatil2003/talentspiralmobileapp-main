import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules'; // Import from swiper/modules
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements AfterViewInit {
  selectedTab: string = 'home';
  swiperModules = [Navigation]; // Use imported modules
  mySwiperOptions = {
    loop: true,
    navigation: true,
    pagination: { clickable: true },
    spaceBetween: 10
  };


  constructor(private router: Router) {
    register(); // Register Swiper custom elements
  }

  ngAfterViewInit() {
  // const swipers = document.querySelectorAll('.mySwiper');
  // console.log('Found Swiper instances:', swipers.length);
  // console.log('Current screen width:', window.innerWidth); // Debug screen width
  // swipers.forEach((swiperEl, index) => {
  //   console.log(`Initializing Swiper ${index + 1}`);
  //   new Swiper(swiperEl as HTMLElement, {
  //     modules: [Navigation, Pagination],
  //     loop: true,
  //     slidesPerView: 1, // Default to 1 for smaller screens
  //     spaceBetween: 0,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     breakpoints: {
  //       600: {
  //         slidesPerView: 2, // 2 slides for tablet screens
  //         spaceBetween: 0,
  //       },
  //       1024: {
  //         slidesPerView: 3, // 3 slides for larger screens
  //         spaceBetween: 0,
  //       },
  //     },
  //   });
  // });
}

   selectTab(tab: string) {
     this.selectedTab = tab;
   }

   navigateToCourseDetails(courseId?: string) {
     this.router.navigate(['/course-details', courseId || 'default']);
   }

   navigaterToHome() {
     this.router.navigate(['/home']);
   }

   navigateToCourses(){
this.router.navigate(['all-tabs', 'courses']);
   }

   navigaterToservices(){
     this.router.navigate(['/services']);
  }
  navigaterToNotification(){
     this.router.navigate(['all-tabs/notification']);
  }

  navigaterToAllCourses(){
     this.router.navigate(['all-tabs/courses']);
  }

  navigationToCourseDetails(){
    this.router.navigate(['all-tabs/course-detail']);
  }

}