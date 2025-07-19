import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DiskSectionComponent } from './components/disk-section/disk-section.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    BrowserModule,
    DiskSectionComponent,
    InputComponent
  ],
  providers: [],
  declarations: [
  
  ],
})
export class AppModule { }
