import { Component, computed, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { I18nService } from '../../core/services/i18n.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({ selector: 'app-projects-grid', imports: [SectionHeaderComponent, ProjectCardComponent], templateUrl: './projects-grid.component.html' })
export class ProjectsGridComponent { readonly i18n = inject(I18nService); readonly projects = computed(() => inject(ContentService).projects().slice(0, 3)); }
