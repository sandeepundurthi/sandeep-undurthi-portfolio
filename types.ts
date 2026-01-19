
export interface Project {
  title: string;
  technologies: string[];
  description: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  platform: string;
  name: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  coursework: string[];
}
