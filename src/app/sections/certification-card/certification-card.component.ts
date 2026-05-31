import { Component, Input, inject } from '@angular/core';
import { CertificationItem } from '../../core/models/certification.model';
import { I18nService } from '../../core/services/i18n.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({ selector: 'app-certification-card', imports: [BadgeComponent, CardComponent], templateUrl: './certification-card.component.html' })
export class CertificationCardComponent { @Input({ required: true }) certification!: CertificationItem; readonly i18n = inject(I18nService); }
