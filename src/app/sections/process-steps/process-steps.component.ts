import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({ selector: 'app-process-steps', imports: [CardComponent, SectionHeaderComponent], template: `<section id="process" class="section"><div class="container"><app-section-header [eyebrow]="i18n.t('sections.process.eyebrow')" [title]="i18n.t('sections.process.title')" [description]="i18n.t('sections.process.description')" /><div class="timeline">@for (step of steps; track step.id) {<app-card><span class="step-number">{{ step.order }}</span><h3>{{ i18n.localize(step.title) }}</h3><p>{{ i18n.localize(step.description) }}</p><p class="muted">{{ i18n.t('common.deliverable') }}: {{ i18n.localize(step.deliverable) }}</p></app-card>}</div></div></section>` })
export class ProcessStepsComponent { readonly i18n = inject(I18nService); readonly steps = siteConfig.processSteps.sort((a, b) => a.order - b.order); }
