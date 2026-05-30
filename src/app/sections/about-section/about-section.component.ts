import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({ selector: 'app-about-section', imports: [BadgeComponent], template: `<section id="about" class="section about"><div class="container split"><div><p class="eyebrow">{{ i18n.localize(about.eyebrow) }}</p><h2>{{ i18n.localize(about.title) }}</h2></div><div>@for (paragraph of about.paragraphs; track $index) {<p>{{ i18n.localize(paragraph) }}</p>}<div class="badge-list">@for (strength of about.strengths; track $index) {<app-badge>{{ i18n.localize(strength) }}</app-badge>}</div></div></div></section>` })
export class AboutSectionComponent { readonly i18n = inject(I18nService); readonly about = siteConfig.about; }
