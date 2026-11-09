export type PillarId = 'itil' | 'scrum' | 'security' | 'governance' | 'bi';

export interface CertificationToken {
  badgeLabel: string; // e.g. "CERTIFICADO OFICIAL"
  standardName: string; // e.g. "ITIL® 4 Managing Professional"
  acronym: string; // e.g. "ITIL 4 MP"
  issuingBody: string; // e.g. "PeopleCert / AXELOS"
  category: string; // e.g. "Service Management"
  yearValid: string; // e.g. "2025 / 2026"
  certifiedRate: string; // e.g. "100% Especialistas Certificados"
  verificationId: string; // e.g. "VERIFIED-AXELOS-ITIL4-MP"
  specificCertifications: {
    name: string;
    level: string;
    badge: string;
  }[];
  whyItMatters: string;
  colorTheme: {
    primary: string;
    ribbonColor: string;
    sealBorder: string;
    glowColor: string;
    badgeBg: string;
  };
}

export interface PillarInfo {
  id: PillarId;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  frameworks: string[];
  deliverables: string[];
  benefits: string[];
  metricHighlight: {
    value: string;
    label: string;
  };
  certification: CertificationToken;
}

export interface DashboardFilter {
  quarter: string;
  department: string;
  slaStatus: string;
}

export interface MonthlyMetric {
  month: string;
  ticketsTotal: number;
  ticketsResolved: number;
  slaPercent: number;
  mttrHours: number;
  sprintVelocity: number;
  securityScore: number;
}

export interface DepartmentMetric {
  name: string;
  tickets: number;
  sla: number;
  satisfaction: number;
  budgetAllocated: string;
}

export interface SprintDelivery {
  sprint: string;
  committedStoryPoints: number;
  completedStoryPoints: number;
  leadTimeDays: number;
  bugsEscaped: number;
}

export interface SecurityVulnerabilityStat {
  category: string;
  resolved: number;
  inProgress: number;
  riskLevel: 'Baixo' | 'Médio' | 'Alto' | 'Crítico';
}

export interface DiagnosticQuestion {
  id: number;
  pillar: PillarId;
  question: string;
  options: {
    text: string;
    score: number; // 1 to 4
    explanation: string;
  }[];
}

export interface CustomDashboardData {
  title?: string;
  companyName?: string;
  imageUrl?: string;
  embedUrl?: string;
  description?: string;
  isCustom: boolean;
}
