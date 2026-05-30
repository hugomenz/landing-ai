import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { LinkService } from '../../core/services/link.service';
import { ExternalLinkComponent } from '../../shared/components/external-link/external-link.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-footer',
  imports: [ExternalLinkComponent, LanguageSwitcherComponent],
  template: `<footer class="site-footer"><div class="container footer-grid"><div><strong>{{ config.personalInfo.name }}</strong><p>{{ i18n.localize(config.personalInfo.shortBio) }}</p><app-language-switcher /></div><div><h3>Social</h3>@for (link of linkService.socialLinks(); track link.id) {<app-external-link [link]="link" />}</div><div><h3>Legal</h3>@for (link of linkService.legalLinks(); track link.id) {<app-external-link [link]="link" />}</div></div><div class="container footer-bottom">© {{ year }} {{ config.personalInfo.name }} · {{ i18n.localize(config.legal.dataProcessingDisclaimer) }}</div></footer>`,
})
export class FooterComponent {
  readonly config = siteConfig;
  readonly i18n = inject(I18nService);
  readonly linkService = inject(LinkService);
  readonly year = new Date().getFullYear();
}
