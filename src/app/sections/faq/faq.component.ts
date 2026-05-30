import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({ selector: 'app-faq', imports: [SectionHeaderComponent], template: `<section class="section"><div class="container narrow"><app-section-header [eyebrow]="i18n.t('sections.faq.eyebrow')" [title]="i18n.t('sections.faq.title')" [description]="i18n.t('sections.faq.description')" />@for (item of faq; track item.id) {<details class="faq-item"><summary>{{ i18n.localize(item.question) }}</summary><p>{{ i18n.localize(item.answer) }}</p></details>}</div></section>` })
export class FAQComponent { readonly i18n = inject(I18nService); readonly faq = siteConfig.faq.filter((item) => item.visible).sort((a, b) => a.order - b.order); }
