// Type definitions for the Portfolio Application

export interface Keyword {
  id: string;
  title: string;
  englishTitle: string;
  desc: string;
  highlight: string;
  details: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  school: string;
  major: string;
  degree: '本科' | '硕士';
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  logoColor: string;
  role: string;
  department?: string;
  type: '正式工作' | '实习经历';
  description?: string;
}

export interface ProjectItem {
  id: string;
  category: 'event' | 'seeding';
  title: string;
  subtitle?: string;
  typeLabel?: string; // e.g. "正式工作经历", "实习经历"
  metrics: { label: string; value: string; trend?: string }[];
  target: string;
  strategy: string;
  detailsTitle?: string;
  contributionsTitle?: string;
  galleryLiveTitle?: string;
  details: {
    title?: string;
    content: string;
    items?: string[];
  }[];
  channels?: string[];
  contributions: string[];
  links?: { label: string; url: string }[];
  accentColor?: string;
  galleryUncropped?: boolean;
  galleryAspect?: string;
  galleryMergedDouble?: boolean;
  galleryDoubleImages?: string[];
  galleryDoubleLinks?: string[];
  gallery?: {
    type: 'live' | 'xhs';
    src: string;
    caption?: string;
    cols?: number;
    center?: boolean;
    link?: string;
    doubleImages?: string[];
    doubleLinks?: string[];
  }[];
}
