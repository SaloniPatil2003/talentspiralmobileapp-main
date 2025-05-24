import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSecondPageRoutingModule } from './register-second-routing.module';

import { RegisterSecondPage } from './register-second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterSecondPageRoutingModule
  ],
  // declarations: [RegisterSecondPage]
})
export class RegisterSecondPageModule {}
