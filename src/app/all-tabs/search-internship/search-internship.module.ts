import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { IonicModule } from '@ionic/angular';
import { SearchInternshipPageRoutingModule } from './search-internship-routing.module';
import { SearchInternshipPage } from './search-internship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule for ngModel
    IonicModule, // Add IonicModule to recognize ion-content
    SearchInternshipPageRoutingModule
  ],
  // declarations: [SearchInternshipPage] // Declare the component
})
export class SearchInternshipPageModule {}