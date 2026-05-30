import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ConfigService } from './config.service';
import { I18nService } from './i18n.service';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly config = inject(ConfigService).config;
  private readonly i18n = inject(I18nService);

  updateDefaultMeta(): void {
    const seo = this.config.seo;
    const title = seo.titleTemplate.replace('%s', this.i18n.localize(seo.defaultTitle));
    const description = this.i18n.localize(seo.defaultDescription);
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: seo.keywords.join(', ') });
    this.meta.updateTag({ name: 'author', content: seo.author });
    this.meta.updateTag({ name: 'robots', content: seo.robots });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: seo.ogImage });
    this.meta.updateTag({ property: 'og:url', content: seo.canonicalUrl });
    this.meta.updateTag({ name: 'twitter:card', content: seo.twitterCard });
    this.updateCanonical(seo.canonicalUrl);
    this.updateLocaleAlternates();
    this.updateStructuredData();
  }

  private updateLocaleAlternates(): void {
    Object.entries(this.config.seo.localeAlternatives).forEach(([language, href]) => {
      let link = this.document.querySelector<HTMLLinkElement>(`link[rel=\"alternate\"][hreflang=\"${language}\"]`);
      if (!link) {
        link = this.document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = language;
        this.document.head.appendChild(link);
      }
      link.href = href;
    });
  }

  private updateStructuredData(): void {
    const id = 'structured-data-person';
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: this.config.personalInfo.name,
      jobTitle: this.i18n.localize(this.config.personalInfo.role),
      url: this.config.global.baseUrl,
      email: this.config.personalInfo.email,
      knowsAbout: this.config.seo.keywords,
      address: { '@type': 'PostalAddress', addressCountry: this.config.personalInfo.country },
    });
  }

  private updateCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }
}
