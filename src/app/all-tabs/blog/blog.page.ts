import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
  imports:[IonicModule]
})
export class BlogPage implements OnInit {

  constructor(private router: Router) { }
  navigateToProfile(){
    this.router.navigate(['all-tabs/profile']);
  }

  navigateToBlogDetailsDigital(){
    this.router.navigate(['/all-tabs/digital-marketing-details']);
  }

  ngOnInit() {
  }

}
