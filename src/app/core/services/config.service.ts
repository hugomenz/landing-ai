import { Injectable } from '@angular/core';
import { siteConfig } from '../config/site.config';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  readonly config = siteConfig;
}
