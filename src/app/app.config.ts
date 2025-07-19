import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { DiskSectionComponent } from './components/disk-section/disk-section.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/disks', pathMatch: 'full' },
  { path: 'disks', component: DiskSectionComponent },
  { path: 'form', component: FormComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};