export interface MachineModel {
  id: string;
  name: string;
  griddleCount: string;
  throughputPieces: number;
  throughputKg: number;
  dimensions: string;
  priceRange: string;
  useCase: string;
  power: string;
  targetMarket: string;
}

export interface TechSpec {
  feature: string;
  specification: string;
  benefit: string;
}

export interface TimelineItem {
  year: string;
  quarter?: string;
  milestone: string;
  status: 'completed' | 'current' | 'planned';
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  organization: string;
  role: string;
  inquiryType: 'investor' | 'franchise' | 'demo' | 'partnership' | 'media';
  investmentRange?: string;
  message: string;
  preferredMeeting: string;
}