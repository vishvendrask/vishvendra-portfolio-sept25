export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  bio: string;
  profileImage?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages' | 'frameworks';
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
  companyLogo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
  featured: boolean;
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string[];
    impact: string;
    timeline: string;
    teamSize?: string;
  };
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
  achievements?: string[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
