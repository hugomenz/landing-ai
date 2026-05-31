import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({ selector: 'app-trust-signals', imports: [CardComponent, SectionHeaderComponent], templateUrl: './trust-signals.component.html' })
export class TrustSignalsComponent { readonly i18n = inject(I18nService); readonly items = siteConfig.trustSignals.filter((i) => i.visible).sort((a, b) => a.order - b.order); }
