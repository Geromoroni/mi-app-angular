import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteDisksService } from '../../services/favorite-disks.service';
import { Disk } from '../../interfaces/Disk';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
constructor(public favoriteDisksService: FavoriteDisksService) {}

  getFavorites(): Disk[] {
    return this.favoriteDisksService.getFavorites(); // Obtiene la lista de favoritos
  }
  removeFromFavorites(disk: Disk): void {
    this.favoriteDisksService.removeFavorite(disk); // Quita el disco de favoritos
  }
}
