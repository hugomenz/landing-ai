import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { siteConfig } from '../../core/config/site.config';
import { LanguageCode } from '../../core/models/language.model';
import { ContactService } from '../../core/services/contact.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  readonly i18n = inject(I18nService);
  readonly fields = siteConfig.contact.formFields;
  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required], email: ['', [Validators.required, Validators.email]], company: [''], role: [''], message: [''], automationGoal: ['', Validators.required], preferredLanguage: ['de' as LanguageCode, Validators.required], consent: [false, Validators.requiredTrue],
  });

  label(id: string): string { return this.i18n.localize(this.fields.find((field) => field.id === id)?.label ?? { de: id, en: id, es: id }); }
  submit(): void { if (this.form.valid) void this.contactService.submitContactRequest(this.form.getRawValue()); }
}
