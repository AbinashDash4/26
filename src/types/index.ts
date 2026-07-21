export interface ServiceItem {
  id: string;
  title: string;
  category: 'sap' | 'web' | 'mobile' | 'software' | 'upskilling' | 'placement';
  iconName: string;
  description: string;
  items: string[];
  gradient: string;
}

export interface ProductItem {
  id: string;
  code: 'ERP' | 'CRM' | 'HRMS' | 'CMS' | 'SMS' | 'LMS';
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  tag: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  techStack: string[];
  metric: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  type: 'client' | 'student' | 'corporate';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'sap' | 'training' | 'placement';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}
