import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceAiDetailsPageRoutingModule } from './service-ai-details-routing.module';

import { ServiceAiDetailsPage } from './service-ai-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceAiDetailsPageRoutingModule
  ],
  // declarations: [ServiceAiDetailsPage]
})
export class ServiceAiDetailsPageModule {}
