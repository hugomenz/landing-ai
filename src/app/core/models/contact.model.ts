import { LanguageCode, LocalizedString } from './language.model';

export interface ContactFormField {
  id: string;
  label: LocalizedString;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox';
  required: boolean;
  options?: LocalizedString[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  automationGoal: string;
  preferredLanguage: LanguageCode;
  consent: boolean;
}
