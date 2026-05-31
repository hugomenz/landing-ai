import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
  readonly enabled = siteConfig.global.themeToggleEnabled;
  readonly theme = inject(ThemeService);
}
