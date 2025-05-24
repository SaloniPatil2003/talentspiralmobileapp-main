import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceAiDetailsPage } from './service-ai-details.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceAiDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceAiDetailsPageRoutingModule {}
