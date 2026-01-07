import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-about-company-info-card',
  imports: [DividerModule, TranslatePipe],
  templateUrl: './about-company-info-card.html',
  styleUrl: './about-company-info-card.scss',
})
export class AboutCompanyInfoCard {
  info = input.required<{ title: string; number: string; description: string }>();
}
