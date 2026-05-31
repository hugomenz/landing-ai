import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({ selector: 'app-process-steps', imports: [CardComponent, SectionHeaderComponent], templateUrl: './process-steps.component.html' })
export class ProcessStepsComponent { readonly i18n = inject(I18nService); readonly steps = siteConfig.processSteps.sort((a, b) => a.order - b.order); }
