import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({ selector: 'app-final-cta', imports: [ButtonComponent], templateUrl: './final-cta.component.html' })
export class FinalCTAComponent { readonly i18n = inject(I18nService); readonly config = siteConfig; }
