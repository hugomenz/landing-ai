import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { I18nService } from '../../core/services/i18n.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-portfolio-section',
  imports: [CardComponent, SectionHeaderComponent],
  templateUrl: './portfolio-section.component.html',
})
export class PortfolioSectionComponent {
  readonly content = inject(ContentService);
  readonly i18n = inject(I18nService);
}
