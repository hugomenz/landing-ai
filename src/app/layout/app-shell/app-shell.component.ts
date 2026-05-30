import { Component, effect, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { ThemeService } from '../../core/services/theme.service';
import { I18nService } from '../../core/services/i18n.service';
import { AboutSectionComponent } from '../../sections/about-section/about-section.component';
import { AudienceSectionComponent } from '../../sections/audience-section/audience-section.component';
import { CertificationsGridComponent } from '../../sections/certifications-grid/certifications-grid.component';
import { ContactSectionComponent } from '../../sections/contact-section/contact-section.component';
import { FAQComponent } from '../../sections/faq/faq.component';
import { FinalCTAComponent } from '../../sections/final-cta/final-cta.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { ProcessStepsComponent } from '../../sections/process-steps/process-steps.component';
import { ProjectsGridComponent } from '../../sections/projects-grid/projects-grid.component';
import { ServicesGridComponent } from '../../sections/services-grid/services-grid.component';
import { TrustSignalsComponent } from '../../sections/trust-signals/trust-signals.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-shell',
  imports: [HeaderComponent, HeroComponent, TrustSignalsComponent, ServicesGridComponent, ProjectsGridComponent, CertificationsGridComponent, ProcessStepsComponent, AudienceSectionComponent, AboutSectionComponent, FAQComponent, ContactSectionComponent, FinalCTAComponent, FooterComponent],
  template: `<app-header /><main><app-hero /><app-trust-signals /><app-services-grid /><app-projects-grid /><app-certifications-grid /><app-process-steps /><app-audience-section /><app-about-section /><app-faq /><app-contact-section /><app-final-cta /></main><app-footer />`,
})
export class AppShellComponent {
  private readonly seo = inject(SeoService);
  private readonly theme = inject(ThemeService);
  private readonly i18n = inject(I18nService);
  constructor() { this.theme.currentTheme(); effect(() => { this.i18n.currentLanguage(); this.seo.updateDefaultMeta(); }); }
}
