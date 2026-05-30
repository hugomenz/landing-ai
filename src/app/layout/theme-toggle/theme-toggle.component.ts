import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `@if (enabled) {<button type="button" class="theme-toggle" (click)="theme.toggleTheme()" aria-label="Toggle theme">{{ theme.currentTheme() }}</button>}`,
})
export class ThemeToggleComponent {
  readonly enabled = siteConfig.global.themeToggleEnabled;
  readonly theme = inject(ThemeService);
}
