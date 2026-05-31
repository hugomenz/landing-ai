import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
