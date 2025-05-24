import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTabsPage } from './all-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AllTabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('../courses/courses.module').then(m => m.CoursesPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('../services/services.module').then(m => m.ServicesPageModule)
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
          },
          {
            path: 'edit-profile',
            loadChildren: () => import('../profile/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
          }
        ]
      },
      {
        path: 'internships',
        loadChildren: () => import('./internships/internships.module').then( m => m.InternshipsPageModule)
      },
      {
        path: 'tests',
        loadChildren: () => import('./tests/tests.module').then( m => m.TestsPageModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
      },
       {
    path: 'course-detail',
    loadChildren: () => import('./course-detail/course-detail.module').then( m => m.CourseDetailPageModule)
  },
  {
    path: 'our-expert',
    loadChildren: () => import('./our-expert/our-expert.module').then( m => m.OurExpertPageModule)
  },
  {
    path: 'test-detail',
    loadChildren: () => import('./test-detail/test-detail.module').then( m => m.TestDetailPageModule)
  },
   {
    path: 'digital-marketing-details',
    loadChildren: () => import('./digital-marketing-details/digital-marketing-details.module').then( m => m.DigitalMarketingDetailsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'search-internship',
    loadChildren: () => import('./search-internship/search-internship.module').then( m => m.SearchInternshipPageModule)
  },
   {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'service-ai-details',
    loadChildren: () => import('./service-ai-details/service-ai-details.module').then( m => m.ServiceAiDetailsPageModule)
  },



      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
 
  

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTabsPageRoutingModule {}