import { CertificationItem } from './certification.model';
import { ContactFormField } from './contact.model';
import { LanguageCode, LanguageOption, LocalizedCta, LocalizedString } from './language.model';
import { SiteLink } from './link.model';
import { NavigationItem } from './navigation.model';
import { ProjectItem } from './project.model';
import { SeoConfig } from './seo.model';
import { ServiceItem } from './service.model';
import { ThemeName } from './theme.model';

export interface GlobalConfig {
  defaultLanguage: LanguageCode;
  availableLanguages: LanguageOption[];
  siteName: string;
  baseUrl: string;
  logoText: string;
  faviconPath: string;
  defaultTheme: ThemeName;
  availableThemes: ThemeName[];
  themeToggleEnabled: boolean;
  featureFlags: Record<string, boolean>;
  analyticsEnabled: boolean;
  environmentLabel: string;
}

export interface PersonalInfoConfig {
  name: string;
  role: LocalizedString;
  shortRole: LocalizedString;
  location: string;
  country: string;
  email: string;
  phone: string;
  timezone: string;
  languagesSpoken: string[];
  shortBio: LocalizedString;
  longBio: LocalizedString;
  profileImagePath: string;
  cvDownloadLink: string;
  publicProfilePdfLink: string;
  availabilityStatus: LocalizedString;
  preferredClientType: LocalizedString;
}

export interface HeroConfig {
  eyebrow: LocalizedString;
  headline: LocalizedString;
  highlightedWords: LocalizedString[];
  subheadline: LocalizedString;
  trustStatement: LocalizedString;
  primaryCta: LocalizedCta;
  secondaryCta: LocalizedCta;
  tertiaryCta: LocalizedCta;
  smallNote: LocalizedString;
  heroBadges: LocalizedString[];
  availabilityBadge: LocalizedString;
  clientSegmentText: LocalizedString;
}

export interface LandingConversionConfig {
  primaryConversionGoal: string;
  secondaryConversionGoal: string;
  leadMagnetTitle: LocalizedString;
  leadMagnetDescription: LocalizedString;
  leadMagnetDownloadLink: string;
  contactFormEnabled: boolean;
  bookingEnabled: boolean;
  showAvailability: boolean;
  showTrustBadges: boolean;
  showProofSection: boolean;
  showFAQ: boolean;
  showFinalCTA: boolean;
  leadQualificationQuestions: LocalizedString[];
}

export interface TrustSignalItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  iconKey: string;
  visible: boolean;
  order: number;
}

export interface ProcessStepItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  deliverable: LocalizedString;
  order: number;
}

export interface AudienceItem {
  id: string;
  title: LocalizedString;
  typicalProblem: LocalizedString;
  howICanHelp: LocalizedString;
  relevantServices: string[];
  visible: boolean;
  order: number;
}

export interface AboutConfig {
  eyebrow: LocalizedString;
  title: LocalizedString;
  paragraphs: LocalizedString[];
  strengths: LocalizedString[];
}

export interface ContactConfig {
  headline: LocalizedString;
  explanation: LocalizedString;
  expectedResponseTime: LocalizedString;
  preferredProjectTypes: LocalizedString[];
  languagesAvailable: string[];
  formFields: ContactFormField[];
}

export interface FaqItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  visible: boolean;
  order: number;
}

export interface LegalConfig {
  impressum: LocalizedString;
  datenschutz: LocalizedString;
  cookieNotice: LocalizedString;
  consentText: LocalizedString;
  dataProcessingDisclaimer: LocalizedString;
  externalLinksDisclaimer: LocalizedString;
}

export interface TrackingConfig {
  googleAnalyticsId: string;
  plausibleDomain: string;
  postHogKey: string;
  ctaEventIds: Record<string, string>;
  downloadEventIds: Record<string, string>;
  externalLinkEventIds: Record<string, string>;
  languageSwitchEventIds: Record<LanguageCode, string>;
}

export interface SiteConfig {
  global: GlobalConfig;
  personalInfo: PersonalInfoConfig;
  links: SiteLink[];
  seo: SeoConfig;
  navigation: NavigationItem[];
  hero: HeroConfig;
  landingConversion: LandingConversionConfig;
  trustSignals: TrustSignalItem[];
  services: ServiceItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  processSteps: ProcessStepItem[];
  audience: AudienceItem[];
  about: AboutConfig;
  contact: ContactConfig;
  faq: FaqItem[];
  legal: LegalConfig;
  tracking: TrackingConfig;
}
