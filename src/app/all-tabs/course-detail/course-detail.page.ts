import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:[IonicModule, CommonModule]
})
export class CourseDetailPage implements OnInit {
 swiperModules = [Navigation, Pagination];
  mySwiperOptions = {
    loop: true,
    navigation: true,
    pagination: { clickable: true },
    spaceBetween: 10 // Default value, will be overridden by CSS
  };
  constructor(private router: Router) { }

   navigaterToAllCourses(){
     this.router.navigate(['all-tabs/courses']);
  }

  navigateToOurExpertAkriti(){
    this.router.navigate(['all-tabs/our-expert']);
  }

   @ViewChild('swiperEx') swiperEx?: ElementRef<{ swiper: Swiper }>
  start: any;

  public USERID: any;
  public MOBILE: any;                                                                                                           


  ngOnInit() {
  }

   swiperSlideChanged() {
    console.log('changed: ', this.swiperEx?.nativeElement.swiper.activeIndex);
    this.start = this.swiperEx?.nativeElement.swiper.activeIndex;
  }

   goNext() {
    this.swiperEx?.nativeElement.swiper.slideNext(1000);
    // console.log('changed: ', this.swiperEx?.nativeElement.swiper.activeIndex);
    this.start = this.swiperEx?.nativeElement.swiper.activeIndex;
    // console.log("Button pressed");
    // this.storageService.getStorage('push_notification_token').then((data: any) => {
    //   console.log("TOKEN: ", data);
    // });
    
  }

  skip() {
    this.swiperEx?.nativeElement.swiper.slideTo(2);
    this.start = 2;
  }
}
