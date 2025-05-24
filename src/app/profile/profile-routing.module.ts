import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path:'edit',
    loadChildren:()=> import('./edit-profile/edit-profile.module').then(m=>m.EditProfilePageModule)
  },
  {
    path: 'my-courses',
    loadChildren: () => import('./my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
  },  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'term-condition',
    loadChildren: () => import('./term-condition/term-condition.module').then( m => m.TermConditionPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}