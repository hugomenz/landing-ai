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
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly config = siteConfig;
  readonly i18n = inject(I18nService);
  readonly booking = inject(LinkService).getLink('booking');
  readonly nav = siteConfig.navigation.filter((item) => item.visible).sort((a, b) => a.order - b.order);
}
