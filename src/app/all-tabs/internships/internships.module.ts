import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternshipsPageRoutingModule } from './internships-routing.module';

import { InternshipsPage } from './internships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternshipsPageRoutingModule
  ],
  // declarations: [InternshipsPage]
})
export class InternshipsPageModule {}
