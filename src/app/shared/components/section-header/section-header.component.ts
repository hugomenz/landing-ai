import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-section-header',
  template: `<div class="section-header"><p class="eyebrow">{{ eyebrow }}</p><h2>{{ title }}</h2><p>{{ description }}</p></div>`,
})
export class SectionHeaderComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
