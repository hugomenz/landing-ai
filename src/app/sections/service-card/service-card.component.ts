import { Component, Input, inject } from '@angular/core';
import { ServiceItem } from '../../core/models/service.model';
import { I18nService } from '../../core/services/i18n.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({ selector: 'app-service-card', imports: [BadgeComponent, ButtonComponent, CardComponent], templateUrl: './service-card.component.html' })
export class ServiceCardComponent { @Input({ required: true }) service!: ServiceItem; readonly i18n = inject(I18nService); }
