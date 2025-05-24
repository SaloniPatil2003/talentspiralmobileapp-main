import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurExpertPage } from './our-expert.page';

const routes: Routes = [
  {
    path: '',
    component: OurExpertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurExpertPageRoutingModule {}
