import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSecondPage } from './register-second.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSecondPageRoutingModule {}
