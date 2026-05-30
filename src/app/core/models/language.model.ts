export type LanguageCode = 'de' | 'en' | 'es';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  locale: string;
}

export type LocalizedString = Record<LanguageCode, string>;

export interface LocalizedCta {
  label: LocalizedString;
  href: string;
  trackingId: string;
  style: 'primary' | 'secondary' | 'tertiary';
}
