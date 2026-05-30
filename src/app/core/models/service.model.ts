import { LocalizedCta, LocalizedString } from './language.model';

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  painPoints: LocalizedString[];
  deliverables: LocalizedString[];
  tools: string[];
  businessValue: LocalizedString;
  idealFor: LocalizedString;
  startingPoint: LocalizedString;
  cta: LocalizedCta;
  visible: boolean;
  featured: boolean;
  order: number;
}
