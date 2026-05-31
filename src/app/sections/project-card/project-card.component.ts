import { Component, Input, inject } from '@angular/core';
import { ProjectItem } from '../../core/models/project.model';
import { I18nService } from '../../core/services/i18n.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({ selector: 'app-project-card', imports: [BadgeComponent, CardComponent], templateUrl: './project-card.component.html' })
export class ProjectCardComponent { @Input({ required: true }) project!: ProjectItem; readonly i18n = inject(I18nService); }
