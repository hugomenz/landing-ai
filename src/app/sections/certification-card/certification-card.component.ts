import { Component, Input, inject } from '@angular/core';
import { CertificationItem } from '../../core/models/certification.model';
import { I18nService } from '../../core/services/i18n.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({ selector: 'app-certification-card', imports: [BadgeComponent, CardComponent], template: `<app-card><div class="card-top"><app-badge>{{ certification.status }}</app-badge>@if (certification.featured) {<app-badge>{{ i18n.t('common.featured') }}</app-badge>}</div><h3>{{ certification.name }}</h3><p class="muted">{{ certification.provider }} · {{ certification.category }}</p><p>{{ i18n.localize(certification.description) }}</p></app-card>` })
export class CertificationCardComponent { @Input({ required: true }) certification!: CertificationItem; readonly i18n = inject(I18nService); }
