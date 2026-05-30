import { Component, Input, inject } from '@angular/core';
import { ProjectItem } from '../../core/models/project.model';
import { I18nService } from '../../core/services/i18n.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({ selector: 'app-project-card', imports: [BadgeComponent, CardComponent], template: `<app-card><div class="card-top"><app-badge>{{ project.status }}</app-badge>@if (project.featured) {<app-badge>{{ i18n.t('common.featured') }}</app-badge>}</div><h3>{{ i18n.localize(project.title) }}</h3><p><strong>Problem:</strong> {{ i18n.localize(project.problem) }}</p><p><strong>Solution:</strong> {{ i18n.localize(project.solution) }}</p><p class="muted">{{ i18n.localize(project.businessValue) }}</p><div class="tag-row">@for (tool of project.tools; track tool) {<span>{{ tool }}</span>}</div></app-card>` })
export class ProjectCardComponent { @Input({ required: true }) project!: ProjectItem; readonly i18n = inject(I18nService); }
