import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { LinkService } from '../../core/services/link.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, LanguageSwitcherComponent, ThemeToggleComponent],
  template: `<header class="site-header"><div class="container header-inner"><a class="logo" href="#home" aria-label="Home">{{ config.global.logoText }}</a><nav aria-label="Main navigation">@for (item of nav; track item.id) {<a [href]="'#' + item.anchor">{{ i18n.localize(item.label) }}</a>}</nav><div class="header-actions"><app-language-switcher /><app-theme-toggle /><app-button [href]="booking?.url || '#contact'" [external]="true" trackingId="cta_header_booking">{{ i18n.localize(config.hero.primaryCta.label) }}</app-button></div></div></header>`,
})
export class HeaderComponent {
  readonly config = siteConfig;
  readonly i18n = inject(I18nService);
  readonly booking = inject(LinkService).getLink('booking');
  readonly nav = siteConfig.navigation.filter((item) => item.visible).sort((a, b) => a.order - b.order);
}
