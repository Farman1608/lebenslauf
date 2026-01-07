export interface Education {
  period: string;
  institution: string;
  description: string;
}

export interface Experience {
  period: string;
  title: string;
  company?: string;
  tasks: string[];
}
