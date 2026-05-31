import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({ selector: 'app-about-section', imports: [BadgeComponent], templateUrl: './about-section.component.html' })
export class AboutSectionComponent { readonly i18n = inject(I18nService); readonly about = siteConfig.about; }
