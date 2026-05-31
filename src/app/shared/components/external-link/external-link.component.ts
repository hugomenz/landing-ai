import { Component, Input, inject } from '@angular/core';
import { SiteLink } from '../../../core/models/link.model';
import { LinkService } from '../../../core/services/link.service';
import { TrackingService } from '../../../core/services/tracking.service';

@Component({
  selector: 'app-external-link',
  templateUrl: './external-link.component.html',
})
export class ExternalLinkComponent {
  @Input({ required: true }) link!: SiteLink;
  readonly linkService = inject(LinkService);
  private readonly tracking = inject(TrackingService);
  track(): void { this.tracking.trackEvent({ id: this.link.trackingId, label: this.link.label }); }
}
