import { LocalizedString } from './language.model';

export type ProjectStatus = 'planned' | 'in-progress' | 'completed';

export interface ProjectItem {
  id: string;
  title: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  tools: string[];
  businessValue: LocalizedString;
  targetClient: LocalizedString;
  status: ProjectStatus;
  complexity: string;
  estimatedImpact: LocalizedString;
  image: string;
  caseStudyLink: string;
  visible: boolean;
  featured: boolean;
  order: number;
}
