import { LanguageCode, LocalizedString } from './language.model';

export interface SeoConfig {
  defaultTitle: LocalizedString;
  titleTemplate: string;
  defaultDescription: LocalizedString;
  keywords: string[];
  author: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image';
  canonicalUrl: string;
  robots: string;
  localeAlternatives: Record<LanguageCode, string>;
}
