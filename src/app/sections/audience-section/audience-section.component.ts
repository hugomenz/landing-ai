import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({ selector: 'app-audience-section', imports: [CardComponent, SectionHeaderComponent], template: `<section class="section"><div class="container"><app-section-header [eyebrow]="i18n.t('sections.audience.eyebrow')" [title]="i18n.t('sections.audience.title')" [description]="i18n.t('sections.audience.description')" /><div class="grid cards-3">@for (item of audience; track item.id) {<app-card><h3>{{ i18n.localize(item.title) }}</h3><p>{{ i18n.localize(item.typicalProblem) }}</p><p class="muted">{{ i18n.localize(item.howICanHelp) }}</p></app-card>}</div></div></section>` })
export class AudienceSectionComponent { readonly i18n = inject(I18nService); readonly audience = siteConfig.audience.filter((item) => item.visible).sort((a, b) => a.order - b.order); }
