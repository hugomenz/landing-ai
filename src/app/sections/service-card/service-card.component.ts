import { Component, Input, inject } from '@angular/core';
import { ServiceItem } from '../../core/models/service.model';
import { I18nService } from '../../core/services/i18n.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({ selector: 'app-service-card', imports: [BadgeComponent, ButtonComponent, CardComponent], template: `<app-card><div class="card-top">@if (service.featured) {<app-badge>{{ i18n.t('common.featured') }}</app-badge>}</div><h3>{{ i18n.localize(service.title) }}</h3><p>{{ i18n.localize(service.shortDescription) }}</p><p class="muted">{{ i18n.localize(service.businessValue) }}</p><div class="tag-row">@for (tool of service.tools; track tool) {<span>{{ tool }}</span>}</div><app-button [href]="service.cta.href" variant="secondary" [trackingId]="service.cta.trackingId">{{ i18n.localize(service.cta.label) }}</app-button></app-card>` })
export class ServiceCardComponent { @Input({ required: true }) service!: ServiceItem; readonly i18n = inject(I18nService); }
