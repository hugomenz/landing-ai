import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { LinkService } from '../../core/services/link.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({ selector: 'app-contact-section', imports: [BadgeComponent, ButtonComponent, ContactFormComponent], template: `<section id="contact" class="section contact"><div class="container split"><div><p class="eyebrow">Contact</p><h2>{{ i18n.localize(contact.headline) }}</h2><p>{{ i18n.localize(contact.explanation) }}</p><p class="muted">{{ i18n.localize(contact.expectedResponseTime) }}</p><div class="actions"><app-button [href]="booking?.url || '#'" [external]="true">{{ i18n.localize(config.hero.primaryCta.label) }}</app-button><app-button [href]="email?.url || '#'" variant="secondary">Email</app-button></div><div class="badge-list">@for (type of contact.preferredProjectTypes; track $index) {<app-badge>{{ i18n.localize(type) }}</app-badge>}</div></div><app-contact-form /></div></section>` })
export class ContactSectionComponent { readonly config = siteConfig; readonly contact = siteConfig.contact; readonly i18n = inject(I18nService); private readonly links = inject(LinkService); readonly booking = this.links.getLink('booking'); readonly email = this.links.getLink('email'); }
