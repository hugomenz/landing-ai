import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { siteConfig } from '../config/site.config';
import { ThemeName } from '../models/theme.model';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'landing-ai-theme';
  readonly currentTheme = signal<ThemeName>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      localStorage.setItem(this.storageKey, theme);
      this.document.documentElement.dataset['theme'] = theme;
      this.document.body.dataset['theme'] = theme;
    });
  }

  toggleTheme(): void {
    if (!siteConfig.global.themeToggleEnabled) return;
    this.currentTheme.set(this.currentTheme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: ThemeName): void {
    if (siteConfig.global.availableThemes.includes(theme)) this.currentTheme.set(theme);
  }

  private getInitialTheme(): ThemeName {
    const stored = localStorage.getItem(this.storageKey) as ThemeName | null;
    return stored && siteConfig.global.availableThemes.includes(stored) ? stored : siteConfig.global.defaultTheme;
  }
}
