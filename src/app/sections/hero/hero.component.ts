import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-hero',
  imports: [BadgeComponent, ButtonComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent { readonly hero = siteConfig.hero; readonly i18n = inject(I18nService); }
