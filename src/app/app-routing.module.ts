import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { SigninPage } from './signin/signin.page';

const routes: Routes = [
  {
    path: 'registeionic',
    loadChildren: () => import('./registeionic/registeionic.module').then( m => m.RegisteionicPageModule)
  },
  {
    path: 'register-second',
    loadChildren: () => import('./register-second/register-second.module').then( m => m.RegisterSecondPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgetPasswordPageModule)
  },
  
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'courses',
  //   loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  // },
  {
    path: 'all-tabs',
    loadChildren: () => import('./all-tabs/all-tabs.module').then( m => m.AllTabsPageModule)
  },
  // {
  //   path: 'services',
  //   loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  // },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
