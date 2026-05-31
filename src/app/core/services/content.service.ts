import { computed, Injectable, signal } from '@angular/core';
import { defaultPortfolioPhotos, defaultReviews } from '../config/portfolio.config';
import { siteConfig } from '../config/site.config';
import { storageConfig } from '../config/storage.config';
import { LocalizedString } from '../models/language.model';
import { ProjectItem, ProjectStatus } from '../models/project.model';
import { PortfolioPhoto, ReviewItem } from '../models/review.model';

interface EditableContent {
  portfolioPhotos: PortfolioPhoto[];
  projects: ProjectItem[];
  reviews: ReviewItem[];
}

export interface ProjectDraft {
  title: string;
  problem: string;
  solution: string;
  tools: string;
  businessValue: string;
  targetClient: string;
  status: ProjectStatus;
  image: string;
}

export interface ReviewDraft {
  author: string;
  role: string;
  quote: string;
  avatar: string;
}

const emptyContent: EditableContent = { portfolioPhotos: [], projects: [], reviews: [] };

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly editable = signal<EditableContent>(this.load());

  readonly projects = computed(() => [...siteConfig.projects, ...this.editable().projects]
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order));
  readonly portfolioPhotos = computed(() => [...defaultPortfolioPhotos, ...this.editable().portfolioPhotos]
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order));
  readonly reviews = computed(() => [...defaultReviews, ...this.editable().reviews]
    .filter((item) => item.visible)
    .sort((a, b) => a.order - b.order));

  addProject(draft: ProjectDraft): void {
    const project: ProjectItem = {
      id: this.slug(draft.title),
      title: this.localized(draft.title),
      problem: this.localized(draft.problem),
      solution: this.localized(draft.solution),
      tools: draft.tools.split(',').map((tool) => tool.trim()).filter(Boolean),
      businessValue: this.localized(draft.businessValue),
      targetClient: this.localized(draft.targetClient),
      status: draft.status,
      complexity: 'Editable',
      estimatedImpact: this.localized(draft.businessValue),
      image: draft.image,
      caseStudyLink: '#',
      visible: true,
      featured: true,
      order: this.projects().length + 1,
    };
    this.update((content) => ({ ...content, projects: [...content.projects, project] }));
  }

  addReview(draft: ReviewDraft): void {
    const review: ReviewItem = {
      id: this.slug(`${draft.author}-${Date.now()}`),
      author: draft.author,
      role: draft.role,
      quote: this.localized(draft.quote),
      avatar: draft.avatar,
      visible: true,
      featured: true,
      order: this.reviews().length + 1,
    };
    this.update((content) => ({ ...content, reviews: [...content.reviews, review] }));
  }

  addPortfolioPhoto(title: string, src: string): void {
    const photo: PortfolioPhoto = {
      id: this.slug(`${title}-${Date.now()}`),
      title,
      src,
      alt: title,
      visible: true,
      order: this.portfolioPhotos().length + 1,
    };
    this.update((content) => ({ ...content, portfolioPhotos: [...content.portfolioPhotos, photo] }));
  }

  imageFromFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  resetLocalEdits(): void {
    this.editable.set(emptyContent);
    localStorage.removeItem(storageConfig.editableContentKey);
  }

  private load(): EditableContent {
    try {
      const raw = localStorage.getItem(storageConfig.editableContentKey);
      return raw ? { ...emptyContent, ...JSON.parse(raw) } : emptyContent;
    } catch {
      return emptyContent;
    }
  }

  private update(projector: (content: EditableContent) => EditableContent): void {
    const next = projector(this.editable());
    this.editable.set(next);
    localStorage.setItem(storageConfig.editableContentKey, JSON.stringify(next));
  }

  private localized(value: string): LocalizedString {
    return { de: value, en: value, es: value };
  }

  private slug(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `item-${Date.now()}`;
  }
}
