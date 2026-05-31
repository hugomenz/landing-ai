import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { LinkService } from '../../core/services/link.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({ selector: 'app-contact-section', imports: [BadgeComponent, ButtonComponent, ContactFormComponent], templateUrl: './contact-section.component.html' })
export class ContactSectionComponent { readonly config = siteConfig; readonly contact = siteConfig.contact; readonly i18n = inject(I18nService); private readonly links = inject(LinkService); readonly booking = this.links.getLink('booking'); readonly email = this.links.getLink('email'); }
