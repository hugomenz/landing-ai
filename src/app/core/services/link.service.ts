import { Injectable, inject } from '@angular/core';
import { SiteLink, LinkType } from '../models/link.model';
import { ConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class LinkService {
  private readonly config = inject(ConfigService).config;

  visibleLinks(): SiteLink[] { return this.config.links.filter((link) => link.visible); }
  byType(type: LinkType): SiteLink[] { return this.visibleLinks().filter((link) => link.type === type); }
  socialLinks(): SiteLink[] { return this.byType('social'); }
  legalLinks(): SiteLink[] { return this.byType('legal'); }
  documentLinks(): SiteLink[] { return this.byType('document'); }
  bookingLinks(): SiteLink[] { return this.byType('booking'); }
  certificationLinks(): SiteLink[] { return this.byType('certification'); }
  getLink(id: string): SiteLink | undefined { return this.config.links.find((link) => link.id === id && link.visible); }
  rel(link: SiteLink): string | null { return link.openInNewTab ? 'noopener noreferrer' : null; }
  target(link: SiteLink): string | null { return link.openInNewTab ? '_blank' : null; }
}
