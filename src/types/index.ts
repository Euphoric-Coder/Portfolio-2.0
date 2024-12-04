export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  video: string;
  date: string;
  role: string;
  features: string[];
  live: boolean;
}

export interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: {
    name: string;
    expertise: string; // Changed from percentage to expertise level
  }[];
}