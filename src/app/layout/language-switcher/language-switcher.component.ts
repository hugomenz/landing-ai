import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { LanguageCode } from '../../core/models/language.model';
import { I18nService } from '../../core/services/i18n.service';
import { TrackingService } from '../../core/services/tracking.service';

@Component({
  selector: 'app-language-switcher',
  template: `<div class="language-switcher" aria-label="Language switcher">@for (language of languages; track language.code) {<button type="button" [class.active]="language.code === i18n.currentLanguage()" (click)="switch(language.code)">{{ language.code.toUpperCase() }}</button>}</div>`,
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
