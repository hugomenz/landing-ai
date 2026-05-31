import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { LinkService } from '../../core/services/link.service';
import { ExternalLinkComponent } from '../../shared/components/external-link/external-link.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-footer',
  imports: [ExternalLinkComponent, LanguageSwitcherComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly config = siteConfig;
  readonly i18n = inject(I18nService);
  readonly linkService = inject(LinkService);
  readonly year = new Date().getFullYear();
}
