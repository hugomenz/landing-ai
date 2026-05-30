import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({ selector: 'app-trust-signals', imports: [CardComponent, SectionHeaderComponent], template: `<section class="section"><div class="container"><app-section-header [eyebrow]="i18n.t('sections.trust.eyebrow')" [title]="i18n.t('sections.trust.title')" [description]="i18n.t('sections.trust.description')" /><div class="grid cards-4">@for (item of items; track item.id) {<app-card><span class="card-icon">{{ item.iconKey }}</span><h3>{{ i18n.localize(item.title) }}</h3><p>{{ i18n.localize(item.description) }}</p></app-card>}</div></div></section>` })
export class TrustSignalsComponent { readonly i18n = inject(I18nService); readonly items = siteConfig.trustSignals.filter((i) => i.visible).sort((a, b) => a.order - b.order); }
