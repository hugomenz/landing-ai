import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CertificationCardComponent } from '../certification-card/certification-card.component';

@Component({ selector: 'app-certifications-grid', imports: [SectionHeaderComponent, CertificationCardComponent], templateUrl: './certifications-grid.component.html' })
export class CertificationsGridComponent { readonly i18n = inject(I18nService); readonly certifications = siteConfig.certifications.filter((item) => item.visible).sort((a, b) => a.order - b.order).slice(0, 4); }
