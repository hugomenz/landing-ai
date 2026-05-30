import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({ selector: 'app-services-grid', imports: [SectionHeaderComponent, ServiceCardComponent], template: `<section id="services" class="section"><div class="container"><app-section-header [eyebrow]="i18n.t('sections.services.eyebrow')" [title]="i18n.t('sections.services.title')" [description]="i18n.t('sections.services.description')" /><div class="grid cards-3">@for (service of services; track service.id) {<app-service-card [service]="service" />}</div></div></section>` })
export class ServicesGridComponent { readonly i18n = inject(I18nService); readonly services = siteConfig.services.filter((item) => item.visible).sort((a, b) => a.order - b.order); }
