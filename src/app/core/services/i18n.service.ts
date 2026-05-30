import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { siteConfig } from '../config/site.config';
import { LanguageCode, LocalizedString } from '../models/language.model';
import { translations } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'landing-ai-language';
  readonly currentLanguage = signal<LanguageCode>(this.getInitialLanguage());
  readonly languageOption = computed(() => siteConfig.global.availableLanguages.find((language) => language.code === this.currentLanguage()) ?? siteConfig.global.availableLanguages[0]);

  constructor() {
    effect(() => {
      const language = this.currentLanguage();
      localStorage.setItem(this.storageKey, language);
      this.document.documentElement.lang = language;
    });
  }

  switchLanguage(language: LanguageCode): void {
    if (siteConfig.global.availableLanguages.some((item) => item.code === language)) {
      this.currentLanguage.set(language);
    }
  }

  localize(value: LocalizedString): string {
    return value[this.currentLanguage()] || value.de;
  }

  t(path: string): string {
    const value = this.readPath(translations[this.currentLanguage()], path) ?? this.readPath(translations.de, path);
    return typeof value === 'string' ? value : path;
  }

  private getInitialLanguage(): LanguageCode {
    const stored = localStorage.getItem(this.storageKey) as LanguageCode | null;
    return stored && siteConfig.global.availableLanguages.some((language) => language.code === stored) ? stored : siteConfig.global.defaultLanguage;
  }

  private readPath(source: unknown, path: string): unknown {
    return path.split('.').reduce<unknown>((current, key) => (current && typeof current === 'object' && key in current ? (current as Record<string, unknown>)[key] : undefined), source);
  }
}
