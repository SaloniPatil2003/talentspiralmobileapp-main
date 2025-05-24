import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchInternshipPage } from './search-internship.page';

const routes: Routes = [
  {
    path: '',
    component: SearchInternshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchInternshipPageRoutingModule {}
