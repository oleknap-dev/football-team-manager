import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss',
})
export class PositionComponent {
  @Input() imageSource: string = '';
  @Output() removePlayer = new EventEmitter<void>();

  onRemovePlayer() {
    this.removePlayer.emit();
  }
}
