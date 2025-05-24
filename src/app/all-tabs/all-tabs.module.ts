import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllTabsPageRoutingModule } from './all-tabs-routing.module';

import { AllTabsPage } from './all-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllTabsPageRoutingModule
  ],
  // declarations: [AllTabsPage]
})
export class AllTabsPageModule {}
