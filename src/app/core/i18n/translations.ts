import { de } from './de';
import { en } from './en';
import { es } from './es';
import { LanguageCode } from '../models/language.model';

type TranslationShape = {
  sections: Record<string, Record<string, string>>;
  common: Record<string, string>;
};

export const translations: Record<LanguageCode, TranslationShape> = { de, en, es };
