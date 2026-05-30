import { Component, Input, inject } from '@angular/core';
import { TrackingService } from '../../../core/services/tracking.service';

@Component({
  selector: 'app-button',
  template: `<a class="btn" [class.btn-secondary]="variant === 'secondary'" [class.btn-tertiary]="variant === 'tertiary'" [href]="href" [attr.target]="external ? '_blank' : null" [attr.rel]="external ? 'noopener noreferrer' : null" (click)="track()"><ng-content /></a>`,
})
export class ButtonComponent {
  @Input({ required: true }) href = '#';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() trackingId = '';
  @Input() external = false;
  private readonly tracking = inject(TrackingService);
  track(): void { if (this.trackingId) this.tracking.trackEvent({ id: this.trackingId }); }
}
