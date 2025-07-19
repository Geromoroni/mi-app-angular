import { Injectable } from '@angular/core';
import { Disk } from '../interfaces/Disk';

@Injectable({
  providedIn: 'root'
})
export class FavoriteDisksService {

  constructor() {}

  private favoriteDisks: Disk[] = []; // Lista de discos favoritos

  getFavorites(): Disk[] {
    return this.favoriteDisks; // Devuelve la lista de favoritos
  }

addFavorite(disk: Disk): void {
  if (!this.favoriteDisks.some(d => d.title === disk.title)) {
    this.favoriteDisks.push(disk); // Agrega el disco solo si no está ya en favoritos
  }
}

  removeFavorite(disk: Disk): void {
    this.favoriteDisks = this.favoriteDisks.filter(d => d !== disk); // Elimina el disco de favoritos
  }

  isFavorite(disk: Disk): boolean {
    return this.favoriteDisks.includes(disk); // Verifica si el disco está en favoritos
  }
}
