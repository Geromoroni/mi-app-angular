import { Component } from '@angular/core';
import { DiskListComponent } from '../disk-list/disk-list.component';
import { CartComponent} from '../cart/cart.component';

@Component({
  selector: 'app-disk-section',
  standalone: true,
  imports: [DiskListComponent, CartComponent],
  templateUrl: './disk-section.component.html',
  styleUrl: './disk-section.component.scss'
})
export class DiskSectionComponent {

}
