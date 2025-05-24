import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteionicPage } from './registeionic.page';
import { RegisterSecondPage } from '../register-second/register-second.page';

const routes: Routes = [
  {
    path: '',
    component: RegisteionicPage,
  },
  {
    path: 'register-second',
    component: RegisterSecondPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteionicPageRoutingModule {}