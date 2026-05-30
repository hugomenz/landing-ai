import { LocalizedString } from './language.model';

export interface NavigationItem {
  id: string;
  label: LocalizedString;
  route?: string;
  anchor?: string;
  visible: boolean;
  order: number;
  trackingId: string;
}
