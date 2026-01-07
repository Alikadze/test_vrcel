import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-faq-item',
  imports: [
    TranslatePipe
  ],
  templateUrl: './faq-item.html',
  styleUrl: './faq-item.scss',
})
export class FaqItem {
  question = input.required<{ title: string; answer: string; value: string }>();
  isExpanded = input(false);
  toggle = output<void>();

  expandToggle() {
    this.toggle.emit();
  }
}
