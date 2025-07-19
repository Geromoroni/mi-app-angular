import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() disk: any; // Recibe el disco desde el componente padre
  @Output() likeToggled = new EventEmitter<boolean>(); // Emite el nuevo estado

  toggleLike() {
    this.disk.like = !this.disk.like; // Cambia el estado directamente en el disco
    this.likeToggled.emit(this.disk.like); // Notifica al componente padre

  }
}


