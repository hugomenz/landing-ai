import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { siteConfig } from '../../core/config/site.config';
import { LanguageCode } from '../../core/models/language.model';
import { ContactService } from '../../core/services/contact.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  template: `<form class="contact-form" [formGroup]="form" (ngSubmit)="submit()"><div class="form-grid"><label>{{ label('name') }}<input formControlName="name" /></label><label>{{ label('email') }}<input type="email" formControlName="email" /></label><label>{{ label('company') }}<input formControlName="company" /></label><label>{{ label('role') }}<input formControlName="role" /></label><label class="full">{{ label('automationGoal') }}<textarea formControlName="automationGoal"></textarea></label><label>{{ label('preferredLanguage') }}<select formControlName="preferredLanguage"><option value="de">Deutsch</option><option value="en">English</option><option value="es">Español</option></select></label><label class="full">{{ label('message') }}<textarea formControlName="message"></textarea></label><label class="checkbox full"><input type="checkbox" formControlName="consent" /> {{ label('consent') }}</label></div><button class="btn" type="submit" [disabled]="form.invalid">{{ i18n.t('common.send') }}</button><p class="muted">{{ i18n.t('common.formNotice') }}</p></form>`,
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
