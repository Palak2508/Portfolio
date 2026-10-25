export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'frontend';
  categoryLabel: string;
  tagline: string;
  summary: string;
  image: string;
  tags: string[];
  features: string[];
  architecture?: string;
  impact?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  score: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}
