import { Component, Input, inject } from '@angular/core';
import { TrackingService } from '../../../core/services/tracking.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ required: true }) href = '#';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() trackingId = '';
  @Input() external = false;
  private readonly tracking = inject(TrackingService);
  track(): void { if (this.trackingId) this.tracking.trackEvent({ id: this.trackingId }); }
}
