import { Injectable, inject } from '@angular/core';
import { ConfigService } from './config.service';

export interface TrackingEvent { id: string; label?: string; metadata?: Record<string, string>; }

@Injectable({ providedIn: 'root' })
export class TrackingService {
  private readonly config = inject(ConfigService).config;

  trackEvent(event: TrackingEvent): void {
    if (!this.config.global.analyticsEnabled) {
      return;
    }
    console.info('Tracking placeholder', event);
  }
}
