import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurExpertPageRoutingModule } from './our-expert-routing.module';

import { OurExpertPage } from './our-expert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurExpertPageRoutingModule
  ],
  // declarations: [OurExpertPage]
})
export class OurExpertPageModule {}
