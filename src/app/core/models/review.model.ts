import { LocalizedString } from './language.model';

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  quote: LocalizedString;
  avatar: string;
  visible: boolean;
  featured: boolean;
  order: number;
}

export interface PortfolioPhoto {
  id: string;
  title: string;
  src: string;
  alt: string;
  visible: boolean;
  order: number;
}
