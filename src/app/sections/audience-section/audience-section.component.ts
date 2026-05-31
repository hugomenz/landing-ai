import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({ selector: 'app-audience-section', imports: [CardComponent, SectionHeaderComponent], templateUrl: './audience-section.component.html' })
export class AudienceSectionComponent { readonly i18n = inject(I18nService); readonly audience = siteConfig.audience.filter((item) => item.visible).sort((a, b) => a.order - b.order); }
