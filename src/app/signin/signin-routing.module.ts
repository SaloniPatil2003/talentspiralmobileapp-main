import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPage } from './signin.page';
import { RegisteionicPage } from '../registeionic/registeionic.page';
import { RegisterSecondPage } from '../register-second/register-second.page';
import { ForgetPasswordPage } from '../forgot-password/forgot-password.page';

const routes: Routes = [
  {
    path: '',
    component: SigninPage
  },
  {
      path: 'register',
      component: RegisteionicPage,
    },
    {
      path: 'register_second',
      component: RegisterSecondPage,
    },
    {
      path: 'forget-password',
      component: ForgetPasswordPage,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninPageRoutingModule {}
