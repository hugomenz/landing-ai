import { Component, inject, signal } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({ selector: 'app-faq', imports: [SectionHeaderComponent], templateUrl: './faq.component.html' })
export class FAQComponent {
  readonly i18n = inject(I18nService);
  readonly faq = siteConfig.faq.filter((item) => item.visible).sort((a, b) => a.order - b.order);
  readonly openItem = signal<string | null>(this.faq[0]?.id ?? null);

  toggle(id: string): void { this.openItem.update((current) => current === id ? null : id); }
}
