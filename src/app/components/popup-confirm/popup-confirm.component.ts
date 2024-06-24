import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-confirm.component.html',
  styleUrl: './popup-confirm.component.scss',
})
export class PopupConfirmComponent {
  @Input() opration!: string;
  @Input() product!: Product;
  @Output() confirm = new EventEmitter<void>();

  handleConfirm() {
    console.log('close before');
    this.confirm.emit();
    //close modal
    console.log('close modal');
  }
}
