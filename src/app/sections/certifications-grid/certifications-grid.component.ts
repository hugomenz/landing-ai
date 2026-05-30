import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CertificationCardComponent } from '../certification-card/certification-card.component';

@Component({ selector: 'app-certifications-grid', imports: [SectionHeaderComponent, CertificationCardComponent], template: `<section id="certifications" class="section"><div class="container"><app-section-header [eyebrow]="i18n.t('sections.certifications.eyebrow')" [title]="i18n.t('sections.certifications.title')" [description]="i18n.t('sections.certifications.description')" /><div class="grid cards-3">@for (certification of certifications; track certification.id) {<app-certification-card [certification]="certification" />}</div></div></section>` })
export class CertificationsGridComponent { readonly i18n = inject(I18nService); readonly certifications = siteConfig.certifications.filter((item) => item.visible).sort((a, b) => a.order - b.order); }
