import { PortfolioPhoto, ReviewItem } from '../models/review.model';

export const defaultPortfolioPhotos: PortfolioPhoto[] = [
  { id: 'workspace', title: 'Automation workspace', src: '/assets/portfolio/workspace.svg', alt: 'AI automation workspace placeholder', visible: true, order: 1 },
  { id: 'dashboard-preview', title: 'Dashboard preview', src: '/assets/portfolio/dashboard.svg', alt: 'Angular dashboard placeholder', visible: true, order: 2 },
  { id: 'workflow-map', title: 'Workflow map', src: '/assets/portfolio/workflow.svg', alt: 'Workflow map placeholder', visible: true, order: 3 },
];

export const defaultReviews: ReviewItem[] = [
  {
    id: 'ops-lead',
    author: 'Operations lead',
    role: 'B2B team',
    quote: {
      de: 'Klare Struktur für unsere Automationsideen und sehr pragmatische nächste Schritte.',
      en: 'Clear structure for our automation ideas and very pragmatic next steps.',
      es: 'Estructura clara para nuestras ideas de automatización y próximos pasos pragmáticos.',
    },
    avatar: '',
    visible: true,
    featured: true,
    order: 1,
  },
];
