import { LocalizedString } from './language.model';

export type CertificationStatus = 'planned' | 'in-progress' | 'completed';

export interface CertificationItem {
  id: string;
  name: string;
  provider: string;
  status: CertificationStatus;
  category: string;
  description: LocalizedString;
  link: string;
  badgeImage: string;
  issueDate: string;
  expiryDate: string;
  visible: boolean;
  featured: boolean;
  order: number;
}
