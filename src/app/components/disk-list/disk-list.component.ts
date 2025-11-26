import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Disk } from '../../interfaces/Disk';
import { InputComponent } from "../../input/input.component"; // Importa la interfaz Disk

@Component({
  selector: 'app-disk-list',
  imports: [CommonModule, InputComponent],
  standalone: true,
  templateUrl: './disk-list.component.html',
  styleUrl: './disk-list.component.scss'
})

export class DiskListComponent {
  onLikeToggled(newState: boolean) {
    console.log('Nuevo estado de Me gusta:', newState);
  }


  

  mostrar: boolean = false;



  disks: Disk[] = [
    {
      title: 'The cult of Ray',
      artist: 'Frank Black',
      year: 1996,
      description: 'Uno de los álbumes más influyentes del rock alternativo, mezcla surrealismo lírico con guitarras explosivas.',
      image: 'https://imgs.search.brave.com/xbumjMezZe0cMoISv3euOpVn1JLgk5kuufrzr8IEf3o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYXN0/bHktczMuYWxsbXVz/aWMuY29tL3JlbGVh/c2UvbXIwMDAxMzI5/NzA1L2Zyb250LzQw/MC9xLV9kQ0dxN0pp/V0dfRlhqX2VLVXdn/NFExZ2hZOFZhUHls/bm03UHdjS05ZPS5q/cGc',
      like: false,

    },
    {
      title: 'Surfer Rosa',
      artist: 'Pixies',
      year: 1988,
      description: 'Álbum debut con un sonido crudo y producción de Steve Albini. Incluye el clásico "Where Is My Mind?".',
      image: 'https://imgs.search.brave.com/c4gR3iKkXoc7FvldjmZaPS-EQGggnPf6j10ja8vN9a4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvb09m/NkFadEVYR0dYNU9o/ZWx6WnA2OFFGMTE4/SDNsNjZfOFE2bFlI/ZHR3RS5qcGc_YXV0/bz13ZWJwJnM9M2Zh/M2MzZWY0YmMxYjYz/YTI0NTk5YzFhMTZm/ZjllYmQ1NTIyZmUx/Yg',
      like: false,

    },
    {
      title: 'Pylon',
      artist: 'Pylon',
      year: 1990,
      description: 'Con influencias del surf rock y ciencia ficción, este álbum sigue explorando el estilo alternativo de la banda.',
      image: 'https://imgs.search.brave.com/w7dSYfT0IF3vgXCuB-XjsoBIiW3BJ91Uha6aT1Xk8ZI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmRp/c2NvZ3MuY29tL291/N2FvZG5RWmdPRFNu/ZUdyV3U3UHZPbmIt/OENQdDR6TGRXQ1lQ/YzhkQzQvcnM6Zml0/L2c6c20vcTo0MC9o/OjMwMC93OjMwMC9j/ek02THk5a2FYTmpi/MmR6L0xXUmhkR0Zp/WVhObExXbHQvWVdk/bGN5OVNMVEUzT1Rj/MS9NamczTFRFMk1U/WTFNVE0yL01qQXRN/alkyT0M1dGNHOC5q/cGVn'
    },
    {
      title: 'Honeycomb',
      artist: 'Frank Black',
      year: 2005,
      description: 'Último álbum antes de su separación original. Más agresivo y centrado en guitarras.',
      image: 'https://imgs.search.brave.com/hMhYZj-yiRmHgluJ_SqGbZw78HSWpoHmOvGnK3-3kKk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bXVzaWNvbWguY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDA1/LzA3L2ZyYW5rLWJs/YWNrLWhvbmV5Y29t/Yi0zMDB4MzAwLmpw/Zw'
      , like: false,

    },
    {
      title: 'Frank Black',
      artist: 'Frank Black',
      year: 1993,
      description: 'Debut solista del líder de Pixies. Combina rock alternativo con letras surrealistas.',
      image: 'https://imgs.search.brave.com/GUN6T-ghQyWKGFQxOj_uefgCMCmhI4W7XLV9Ign7J30/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcm9n/cm9ncmFwaHkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzExL2ZyYW5rYmxh/Y2suanBn'
      , like: false,

    },
    {
      title: 'Teenager of the Year',
      artist: 'Frank Black',
      year: 1994,
      description: 'Doble álbum con 22 canciones. Considerado su obra maestra solista.',
      image: 'https://imgs.search.brave.com/mvEOQ9Kapeq99Rgh3WHqYaZzjZtu9Tize1JGgJSBWsE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYXN0/bHktczMuYWxsbXVz/aWMuY29tL3JlbGVh/c2UvbXIwMDAwMTM3/MDg0L2Zyb250LzQw/MC96eEZwaEw3N0tu/V3pSOXpIa042aWpS/eWhNLU9GSTh6RzRs/LXFWcFhYQjFJPS5q/cGc'
      , like: false

    }, {
      title: 'Drums And Wires',
      artist: 'XTC',
      year: 1979,
      description: 'Mezcla de rock clásico con letras introspectivas. Uno de sus discos más accesibles.',
      image: 'https://imgs.search.brave.com/9iw3lXoOzI-AEtt3gOgS9LODUSAFdj1zAzS1d-KsDlM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NS81My9YVENfRHJ1/bXNfYW5kX1dpcmVz/LmpwZy8yNTBweC1Y/VENfRHJ1bXNfYW5k/X1dpcmVzLmpwZw'
      , like: false
    }
  ];

  toggleView($event: MouseEvent) {
    this.mostrar = !this.mostrar;
  }
  toggleLike(disk: Disk) {
    disk.like = !disk.like;
  }
  
}
