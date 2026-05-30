import { Component, inject } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { I18nService } from '../../core/services/i18n.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({ selector: 'app-projects-grid', imports: [SectionHeaderComponent, ProjectCardComponent], template: `<section id="projects" class="section"><div class="container"><app-section-header [eyebrow]="i18n.t('sections.projects.eyebrow')" [title]="i18n.t('sections.projects.title')" [description]="i18n.t('sections.projects.description')" /><div class="grid cards-3">@for (project of projects; track project.id) {<app-project-card [project]="project" />}</div></div></section>` })
export class ProjectsGridComponent { readonly i18n = inject(I18nService); readonly projects = siteConfig.projects.filter((item) => item.visible).sort((a, b) => a.order - b.order); }
