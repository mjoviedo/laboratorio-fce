export type WorkLine = 
  | 'Formación'
  | 'Investigación y Diseño'
  | 'Extensión universitaria'
  | 'Gestión universitaria'
  | 'Innovación';

export type WorkAxis = 
  | 'Economía'
  | 'Tecnología'
  | 'Educación'
  | 'Trabajo'
  | 'Artes mediales';

export interface Conference {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  speaker: string;
  speakerRole: string;
  axis: WorkAxis;
  summary: string;
  abstract: string;
  topics: string[];
  prerequisites: string;
}

export interface Workshop {
  id: string;
  title: string;
  duration: string;
  date: string;
  instructor: string;
  instructorRole: string;
  axis: WorkAxis;
  summary: string;
  syllabus: string[];
  toolsUsed: string[];
  targetAudience: string;
  capacity: number;
}

export interface HackdayInfo {
  date: string;
  time: string;
  location: string;
  edition: string;
  description: string;
  projects: {
    id: string;
    title: string;
    lead: string;
    objective: string;
    skillsNeeded: string[];
  }[];
}

export interface Project {
  id: string;
  title: string;
  status: 'en_curso' | 'incubacion' | 'comunidad';
  line: WorkLine;
  axis: WorkAxis;
  shortDescription: string;
  fullDescription: string;
  partners: string[];
  deliverables: string[];
  image?: string;
  interactiveType?: 'chatbot' | 'simulator' | 'gallery';
  githubUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  date: string;
  readTime: string;
  axis: WorkAxis;
  line: WorkLine;
  abstract: string;
  content: string[];
  keyFindings: string[];
  citations: string[];
  image?: string;
}

export interface Proposal {
  id: string;
  title: string;
  type: 'proyecto' | 'taller';
  proposerName: string;
  claustro: 'Docente' | 'Estudiante' | 'Graduado/a' | 'No Docente' | 'Externo/Comunidad';
  email: string;
  line: WorkLine;
  axis: WorkAxis;
  description: string;
  expectedTools: string;
  createdAt: string;
}
