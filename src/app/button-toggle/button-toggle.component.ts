import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonMeta } from './button-meta.mode';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [NgFor],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss'
})
export class ButtonToggleComponent {
  @Input() options: ButtonMeta[] = [];
  @Output() selection = new EventEmitter<ButtonMeta>();

  public selected(selectedOption: ButtonMeta): void {
    this.options.forEach((option) => {
      option.isActive = (selectedOption === option);
    });

    this.selection.emit(selectedOption);
  }
}
