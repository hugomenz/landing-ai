import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { adminTexts } from '../../core/config/texts.config';
import { AuthService } from '../../core/services/auth.service';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-admin-panel',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './admin-panel.component.html',
})
export class AdminPanelComponent {
  private readonly fb = inject(FormBuilder);
  readonly auth = inject(AuthService);
  readonly content = inject(ContentService);
  readonly texts = adminTexts;

  readonly projectForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    problem: ['', Validators.required],
    solution: ['', Validators.required],
    tools: ['Angular, AI', Validators.required],
    businessValue: ['', Validators.required],
    targetClient: ['B2B team', Validators.required],
    status: ['planned' as const, Validators.required],
    image: [''],
  });
  readonly reviewForm = this.fb.nonNullable.group({
    author: ['', Validators.required],
    role: ['', Validators.required],
    quote: ['', Validators.required],
    avatar: [''],
  });
  photoTitle = '';

  async login(): Promise<void> { await this.auth.loginWithGoogle(); }
  async logout(): Promise<void> { await this.auth.logout(); }

  addProject(): void {
    if (this.projectForm.invalid || !this.auth.isAdmin) return;
    this.content.addProject(this.projectForm.getRawValue());
    this.projectForm.reset({ title: '', problem: '', solution: '', tools: 'Angular, AI', businessValue: '', targetClient: 'B2B team', status: 'planned', image: '' });
  }

  addReview(): void {
    if (this.reviewForm.invalid || !this.auth.isAdmin) return;
    this.content.addReview(this.reviewForm.getRawValue());
    this.reviewForm.reset({ author: '', role: '', quote: '', avatar: '' });
  }

  async uploadPhoto(event: Event): Promise<void> {
    if (!this.auth.isAdmin) return;
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const src = await this.content.imageFromFile(file);
    this.content.addPortfolioPhoto(this.photoTitle || file.name, src);
    this.photoTitle = '';
    input.value = '';
  }
}
