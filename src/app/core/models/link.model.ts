export type LinkType = 'social' | 'booking' | 'document' | 'legal' | 'certification' | 'profile' | 'external';

export interface SiteLink {
  id: string;
  label: string;
  url: string;
  type: LinkType;
  iconKey: string;
  openInNewTab: boolean;
  visible: boolean;
  ariaLabel: string;
  trackingId: string;
}
