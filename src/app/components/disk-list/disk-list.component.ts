import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  movie = {
    "name": "Pulp Fiction",
    "genre": "Accion",
    "price": 1500,
    "stock": 5,
    "image": "assets\img\hnos.jpg"
  }

}
