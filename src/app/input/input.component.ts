import { Component, Input,Output, EventEmitter } from '@angular/core';
import { FavoriteDisksService } from '../services/favorite-disks.service';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() disk: any; // Recibe el disco desde el componente padre
  @Output() likeToggled = new EventEmitter<boolean>(); // Emite el nuevo estado
  constructor(public favoriteDisksService: FavoriteDisksService) {}

  toggleLike() {
  if (this.favoriteDisksService.isFavorite(this.disk)) {
    this.favoriteDisksService.removeFavorite(this.disk); // Quita de favoritos
  } else {
    this.favoriteDisksService.addFavorite(this.disk); // Agrega a favoritos
  }
  this.disk.like = !this.disk.like; // Cambia el estado local
}
}


