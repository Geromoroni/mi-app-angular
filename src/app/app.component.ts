import { Component } from '@angular/core';
import { DiskListComponent } from './components/disk-list/disk-list.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DiskListComponent, ReactiveFormsModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miapp';
}