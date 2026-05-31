import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({ selector: 'app-services-grid', imports: [SectionHeaderComponent, ServiceCardComponent], templateUrl: './services-grid.component.html' })
export class ServicesGridComponent { readonly i18n = inject(I18nService); readonly services = siteConfig.services.filter((item) => item.visible).sort((a, b) => a.order - b.order); }
