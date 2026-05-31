import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { LanguageCode } from '../../core/models/language.model';
import { I18nService } from '../../core/services/i18n.service';
import { TrackingService } from '../../core/services/tracking.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  readonly languages = siteConfig.global.availableLanguages;
  readonly i18n = inject(I18nService);
  private readonly tracking = inject(TrackingService);
  switch(language: LanguageCode): void {
    this.i18n.switchLanguage(language);
    this.tracking.trackEvent({ id: siteConfig.tracking.languageSwitchEventIds[language] });
  }
}
