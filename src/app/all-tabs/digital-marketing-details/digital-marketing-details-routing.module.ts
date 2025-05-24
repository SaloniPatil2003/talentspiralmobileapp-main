import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalMarketingDetailsPage } from './digital-marketing-details.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalMarketingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalMarketingDetailsPageRoutingModule {}
