import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalMarketingDetailsPageRoutingModule } from './digital-marketing-details-routing.module';

import { DigitalMarketingDetailsPage } from './digital-marketing-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalMarketingDetailsPageRoutingModule
  ],
  // declarations: [DigitalMarketingDetailsPage]
})
export class DigitalMarketingDetailsPageModule {}
