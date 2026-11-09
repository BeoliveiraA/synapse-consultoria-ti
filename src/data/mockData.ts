import { PillarInfo, MonthlyMetric, DepartmentMetric, SprintDelivery, SecurityVulnerabilityStat, DiagnosticQuestion } from '../types';

export const CONSULTING_PILLARS: PillarInfo[] = [
  {
    id: 'itil',
    title: 'Implementação de ITIL v4',
    tagline: 'Padronização e excelência operacional no ciclo de vida de serviços',
    badge: 'ITIL 4 Specialist',
    description: 'Transformamos operações de TI reativas e desordenadas em centros de serviços estruturados, previsíveis e focados na entrega de valor contínuo para as áreas de negócio.',
    frameworks: ['ITIL 4 Foundation & Managing Professional', 'Service Value System (SVS)', 'Incident & Change Management (CAB)'],
    deliverables: [
      'Estruturação completa de Central de Serviços (Service Desk Tier 1, 2 e 3)',
      'Gestão de Incidentes críticos e análise de Causa Raiz (RCA - Root Cause Analysis)',
      'Implantação de Comitê de Mudanças (CAB) sem risco de indisponibilidade',
      'Elaboração de Catálogo de Serviços e Acordos de Nível de Serviço (SLA/OLA)',
      'Automação de workflows de requisição de serviços e autoatendimento'
    ],
    benefits: [
      'Redução de até 70% no tempo médio de resolução (MTTR)',
      'Previsibilidade e eliminação de falhas em atualizações de sistemas',
      'Visibilidade ponta a ponta dos serviços prestados para a organização'
    ],
    metricHighlight: {
      value: '99.4%',
      label: 'Cumprimento de SLA após estruturação'
    },
    certification: {
      badgeLabel: 'ESPECIALISTA CERTIFICADO',
      standardName: 'ITIL® 4 Managing Professional (MP)',
      acronym: 'ITIL 4 MP',
      issuingBody: 'PeopleCert / AXELOS Global',
      category: 'IT Service Management (ITSM)',
      yearValid: 'Vigência 2025 / 2026',
      certifiedRate: '100% Especialistas Certificados',
      verificationId: 'AXELOS-ITIL4-MP-VERIFIED',
      specificCertifications: [
        { name: 'ITIL® 4 Specialist: Create, Deliver & Support (CDS)', level: 'Expert', badge: 'PeopleCert' },
        { name: 'ITIL® 4 Specialist: Drive Stakeholder Value (DSV)', level: 'Advanced', badge: 'PeopleCert' },
        { name: 'ITIL® 4 Strategist: Direct, Plan & Improve (DPI)', level: 'Master', badge: 'AXELOS' },
        { name: 'ITIL® 4 Foundation in IT Service Management', level: 'Core', badge: 'PeopleCert' }
      ],
      whyItMatters: 'Garante que os fluxos do seu Service Desk e gerenciamento de incidentes seguem o padrão global de excelência britânico, sem amadorismo ou tentativa e erro.',
      colorTheme: {
        primary: 'from-blue-600 to-indigo-700',
        ribbonColor: 'bg-red-600 text-white',
        sealBorder: 'border-blue-500/40',
        glowColor: 'shadow-blue-500/20',
        badgeBg: 'bg-blue-50/80 text-blue-900 border-blue-200'
      }
    }
  },
  {
    id: 'scrum',
    title: 'Metodologias Ágeis (Scrum & Kanban)',
    tagline: 'Aceleração de entregas de TI e alinhamento direto aos objetivos do negócio',
    badge: 'Agile & DevOps',
    description: 'Capacitamos squads de tecnologia com métodos ágeis práticos, eliminando gargalos, reduzindo o Lead Time de desenvolvimento e garantindo entregas incrementais frequentes.',
    frameworks: ['Scrum Framework (Scrum Guide)', 'Kanban Maturity Model', 'OKRs (Objectives & Key Results)', 'SAFe (Scaled Agile)'],
    deliverables: [
      'Formação e mentoria de Product Owners (PO) e Scrum Masters dedicados',
      'Estruturação de cerimônias eficientes (Planning, Daily, Review e Retrospectiva)',
      'Gestão visual de fluxo de valor com métricas de vazão (Throughput, WIP e Lead Time)',
      'Refinamento e priorização técnica de Backlog com foco em ROI de negócio',
      'Integração contínua e cultura de colaboração entre operações e desenvolvimento (DevOps)'
    ],
    benefits: [
      'Aumento de 3x na velocidade de lançamento de novas funcionalidades',
      'Redução do desperdício de esforço com escopos mal definidos',
      'Times engajados com metas claras e visibilidade transparente'
    ],
    metricHighlight: {
      value: '+140%',
      label: 'Produtividade de entregas em 6 sprints'
    },
    certification: {
      badgeLabel: 'ESPECIALISTA CERTIFICADO',
      standardName: 'PSM™ II & PSPO™ (Scrum.org) + KMP',
      acronym: 'Scrum.org & KMP',
      issuingBody: 'Scrum.org & Kanban University',
      category: 'Agile Frameworks & Delivery',
      yearValid: 'Vigência 2025 / 2026',
      certifiedRate: '100% Especialistas Certificados',
      verificationId: 'SCRUM-ORG-PSM-PSPO-VERIFIED',
      specificCertifications: [
        { name: 'Professional Scrum Master II (PSM II) - Nível Avançado', level: 'Advanced', badge: 'Scrum.org' },
        { name: 'Professional Scrum Product Owner (PSPO I & II)', level: 'Expert', badge: 'Scrum.org' },
        { name: 'Kanban Management Professional (KMP I & KMP II)', level: 'Certified', badge: 'Kanban Univ.' },
        { name: 'Agile Certified Practitioner (PMI-ACP®)', level: 'Global', badge: 'PMI' }
      ],
      whyItMatters: 'Consultores com avaliações rigorosas da organização fundada por Ken Schwaber (co-criador do Scrum), aplicando métricas de fluxo reais e sem reuniões improdutivas.',
      colorTheme: {
        primary: 'from-emerald-600 to-teal-700',
        ribbonColor: 'bg-emerald-600 text-white',
        sealBorder: 'border-emerald-500/40',
        glowColor: 'shadow-emerald-500/20',
        badgeBg: 'bg-emerald-50/80 text-emerald-900 border-emerald-200'
      }
    }
  },
  {
    id: 'security',
    title: 'Segurança da Informação & LGPD',
    tagline: 'Blindagem cibernética, conformidade regulatória e proteção de dados críticos',
    badge: 'ISO 27001 & CyberSec',
    description: 'Construímos uma postura de segurança ativa e resiliente, protegendo os ativos digitais da sua empresa contra ameaças avançadas e garantindo total conformidade legal.',
    frameworks: ['ISO/IEC 27001 & 27002', 'NIST Cybersecurity Framework', 'LGPD (Lei Geral de Proteção de Dados)', 'Zero Trust Architecture'],
    deliverables: [
      'Diagnóstico de Vulnerabilidades e Testes de Intrusão (Vulnerability Assessment & PenTest)',
      'Programa de Adequação à LGPD com mapeamento de fluxo de dados (RoPA)',
      'Implementação de arquitetura Zero Trust e autenticação multifator (MFA/SSO)',
      'Elaboração de Política de Segurança da Informação (PSI) e treinamentos anti-phishing',
      'Plano de Resposta a Incidentes Cibernéticos e Continuidade de Negócios (BCP/DRP)'
    ],
    benefits: [
      'Zero vazamentos ou multas regulatórias com governança de dados',
      'Detecção e contenção proativa de vulnerabilidades em minutos',
      'Confiança inabalável de clientes, auditorias e investidores'
    ],
    metricHighlight: {
      value: 'Zero',
      label: 'Incidentes críticos pós-implantação'
    },
    certification: {
      badgeLabel: 'ESPECIALISTA CERTIFICADO',
      standardName: 'ISO/IEC 27001 Lead Implementer & DPO',
      acronym: 'ISO 27001 & DPO',
      issuingBody: 'PECB / EXIN / IAPP International',
      category: 'Information Security & Privacy',
      yearValid: 'Vigência 2025 / 2026',
      certifiedRate: '100% Especialistas Certificados',
      verificationId: 'PECB-ISO27001-LI-DPO-VERIFIED',
      specificCertifications: [
        { name: 'ISO/IEC 27001:2022 Lead Implementer Certified', level: 'Lead Auditor', badge: 'PECB' },
        { name: 'Data Protection Officer (DPO LGPD) - Privacy & Data Protection', level: 'Executive', badge: 'EXIN' },
        { name: 'CompTIA Security+ (SY0-701)', level: 'Certified', badge: 'CompTIA' },
        { name: 'Certified Information Privacy Professional (CIPP/E)', level: 'Global Law', badge: 'IAPP' }
      ],
      whyItMatters: 'Sua infraestrutura e dados de clientes auditados e blindados por profissionais habilitados por órgãos internacionais de auditoria e conformidade com a LGPD e GDPR.',
      colorTheme: {
        primary: 'from-rose-600 to-red-700',
        ribbonColor: 'bg-rose-600 text-white',
        sealBorder: 'border-rose-500/40',
        glowColor: 'shadow-rose-500/20',
        badgeBg: 'bg-rose-50/80 text-rose-900 border-rose-200'
      }
    }
  },
  {
    id: 'governance',
    title: 'Governança de TI & Gestão de Riscos',
    tagline: 'Alinhamento estratégico da TI às metas financeiras e corporativas',
    badge: 'COBIT 2019 & FinOps',
    description: 'Elevamos a TI do papel de centro de custos para habilitadora de crescimento empresarial através de comitês executivos, gestão de riscos, catálogo de ativos e otimização de gastos.',
    frameworks: ['COBIT 2019 Framework', 'ITIL Guiding Principles', 'FinOps Foundation', 'ISO 38500 (Corporate Governance of IT)'],
    deliverables: [
      'Plano Diretor de Tecnologia da Informação (PDTI) alinhado ao planejamento estratégico',
      'Matriz de Responsabilidades RACI e criação de Comitê Executivo de TI',
      'Auditoria e otimização de custos de nuvem e licenças de software (FinOps)',
      'Gestão do Ciclo de Vida de Ativos de TI (Hardware, Software e Infraestrutura - ITAM)',
      'Matriz de Riscos Operacionais de Tecnologia e planos de mitigação'
    ],
    benefits: [
      'Economia de até 32% em contratos de licenças e infraestrutura cloud',
      'Decisões de investimento aprovadas com base em ROI comprovado',
      'Processos auditáveis com 100% de rastreabilidade'
    ],
    metricHighlight: {
      value: '32%',
      label: 'Economia comprovada em custos de TI'
    },
    certification: {
      badgeLabel: 'ESPECIALISTA CERTIFICADO',
      standardName: 'COBIT® 2019 & CRISC / FinOps Certified',
      acronym: 'COBIT & CRISC',
      issuingBody: 'ISACA & FinOps Foundation',
      category: 'IT Governance & Risk Management',
      yearValid: 'Vigência 2025 / 2026',
      certifiedRate: '100% Especialistas Certificados',
      verificationId: 'ISACA-COBIT-CRISC-VERIFIED',
      specificCertifications: [
        { name: 'COBIT® 2019 Foundation & Design Implementation', level: 'Executive', badge: 'ISACA' },
        { name: 'CRISC - Certified in Risk and Information Systems Control', level: 'Risk Master', badge: 'ISACA' },
        { name: 'FinOps Certified Practitioner (FOCP) - Cloud Financial Mgmt', level: 'Certified', badge: 'FinOps Org' },
        { name: 'ISO 31000 Risk Management Specialist', level: 'Standard', badge: 'ISO Org' }
      ],
      whyItMatters: 'Comitês, orçamentos e riscos conduzidos com a metodologia de governança mais respeitada por Conselhos de Administração e CIOs multinacionais.',
      colorTheme: {
        primary: 'from-amber-600 to-orange-700',
        ribbonColor: 'bg-amber-600 text-white',
        sealBorder: 'border-amber-500/40',
        glowColor: 'shadow-amber-500/20',
        badgeBg: 'bg-amber-50/80 text-amber-900 border-amber-200'
      }
    }
  },
  {
    id: 'bi',
    title: 'Business Intelligence com Power BI',
    tagline: 'Visualização executiva e inteligência em tempo real para tomada de decisão',
    badge: 'Microsoft Certified Power BI',
    description: 'Transformamos dados brutos dispersos de chamados, infraestrutura, custos e projetos em dashboards executivos dinâmicos, interativos e automatizados no Microsoft Power BI.',
    frameworks: ['Microsoft Power BI Pro & Premium', 'Data Modeling (Star Schema)', 'Advanced DAX & Power Query (M)', 'Azure Data Fabric / Lakehouse'],
    deliverables: [
      'Painéis executivos para Diretoria, CIO e Gerentes com KPIs em tempo real',
      'Dashboards operacionais de Service Desk, SLAs, backlog e desempenho de squads',
      'Pipelines de dados automatizados integrando ERP, Jira, GLPI, ServiceNow e Zabbix',
      'Modelagem analítica com cálculo de projeções, custos e detecção de anomalias',
      'Treinamento e capacitação de gestores para cultura Data-Driven'
    ],
    benefits: [
      'Fim dos relatórios manuais em Excel e planilhas desatualizadas',
      'Acesso a indicadores em qualquer dispositivo (Web e Mobile) em segundos',
      'Identificação instantânea de gargalos operacionais antes que impactem o cliente'
    ],
    metricHighlight: {
      value: '100%',
      label: 'Relatórios automatizados sem retrabalho manual'
    },
    certification: {
      badgeLabel: 'ESPECIALISTA CERTIFICADO',
      standardName: 'Microsoft Certified: Power BI Data Analyst (PL-300)',
      acronym: 'Microsoft PL-300',
      issuingBody: 'Microsoft Official Credential',
      category: 'Enterprise Data & Analytics',
      yearValid: 'Vigência 2025 / 2026',
      certifiedRate: '100% Especialistas Certificados',
      verificationId: 'MS-PL300-FABRIC-ANALYTICS-VERIFIED',
      specificCertifications: [
        { name: 'Exam PL-300: Microsoft Power BI Data Analyst Associate', level: 'Associate', badge: 'Microsoft' },
        { name: 'Exam DP-600: Implementing Fabric Analytics Solutions', level: 'Fabric Pro', badge: 'Microsoft' },
        { name: 'Advanced DAX & Tabular Data Modeling Specialist', level: 'Specialist', badge: 'Enterprise DNA' },
        { name: 'Power Query M ETL & Data Warehousing Practitioner', level: 'Certified', badge: 'Microsoft' }
      ],
      whyItMatters: 'Construção de relatórios e DAX otimizados por analistas credenciados pela própria Microsoft, garantindo performance rápida, cálculos exatos e governança de dados.',
      colorTheme: {
        primary: 'from-amber-500 to-yellow-600',
        ribbonColor: 'bg-amber-600 text-white',
        sealBorder: 'border-amber-400/50',
        glowColor: 'shadow-amber-500/25',
        badgeBg: 'bg-amber-50/80 text-amber-900 border-amber-200'
      }
    }
  }
];

export const SUCCESS_CASE_STUDY = {
  clientName: 'Ticket Flow • Central de Chamados TI',
  industry: 'Operação Corporativa Multidepartamental de TI & Service Desk',
  teamSize: '8 Analistas de TI (Júnior, Pleno e Sênior) • 8 Departamentos Atendidos',
  consultingPeriod: 'Análise de ciclo anual (2025: 02/01 a 29/12) e consultoria de reestruturação Synapse TI',
  challenge: 'A Central de Chamados registrou 400 tickets no período com índice de cumprimento de SLA crítico de 65,5%, gerando um déficit (SLA Gap) de -19,5% em relação à meta corporativa de 85,0%. O MTTR médio era de 28,9 horas (com pico alarmante de 52,5 horas em Dezembro). Os dados revelaram que 213 chamados (53,2%) foram abertos nos turnos da noite e madrugada, e 114 chamados em finais de semana (28,5%) sem escala de suporte estruturada. Além disso, a categoria E-mail operava com apenas 54,2% de SLA, o backlog acumulava 77 chamados (19,3%) e 25 chamados eram reabertos por falta de resolução definitiva.',
  solution: 'A Synapse TI aplicou seu diagnóstico estratégico em 4 frentes: 1) Implantação de ITIL v4 com catálogo padronizado e triagem inteligente N1/N2/N3; 2) Criação de escalas ágeis de plantão para cobrir os 213 chamados noturnos e finais de semana; 3) Gestão de Problemas (RCA) na infraestrutura de E-mail e Backup para sanar a reabertura de chamados; 4) Modelagem e homologação do Dashboard Executivo no Microsoft Power BI (Ticket Flow Analytics) com 4 visões integradas (Visão Geral, Análise Executiva, Operacional e Temporal).',
  impactMetrics: [
    { label: 'Índice de SLA Global', before: '65.5%', after: '96.8%', change: '+31.3%', positive: true },
    { label: 'Tempo Médio de Resolução (MTTR)', before: '28.9 horas', after: '3.4 horas', change: '-88.2%', positive: true },
    { label: 'Chamados em Backlog Represados', before: '77 tickets', after: '6 tickets', change: '-92.2%', positive: true },
    { label: 'Taxa de Chamados Reabertos', before: '6.3% (25 chamados)', after: '0.6%', change: '-90.5%', positive: true },
    { label: 'SLA em E-mail (Gargalo Crítico)', before: '54.2%', after: '95.0%', change: '+40.8%', positive: true },
    { label: 'SLA em Horários Noturnos e FDS', before: '38.0%', after: '94.5%', change: '+56.5%', positive: true }
  ],
  testimonial: {
    quote: 'Quando a Synapse TI extraiu e modelou nossos 400 chamados no dashboard do Power BI, percebemos que o problema não era falta de pessoas, mas sim um descompasso de horários (mais de 50% dos chamados entravam à noite ou aos finais de semana sem ninguém no plantão) e a ausência de triagem ITIL. Em 90 dias com os novos fluxos e o painel em tempo real, superamos a meta de 85% e atingimos quase 97% de SLA.',
    author: 'Gestão de TI & Operações',
    role: 'Coordenação de Service Desk & Infraestrutura',
    company: 'Ticket Flow Analytics'
  }
};

// =========================================================================
// REAL DATA EXTRACTED FROM THE USER'S 4 POWER BI DASHBOARD SCREENSHOTS
// =========================================================================

export const TICKET_FLOW_KPIS = {
  totalTickets: 400,
  resolvedTickets: 284,
  resolvedPercent: 71.0,
  backlogTickets: 77,
  backlogPercent: 19.3,
  canceledTickets: 39,
  canceledPercent: 9.75,
  inAttendanceTickets: 37,
  inAttendancePercent: 9.25,
  pendingTickets: 24,
  pendingPercent: 6.0,
  openTickets: 16,
  openPercent: 4.0,
  reopenedTickets: 25,
  reopenedPercent: 6.3,
  slaPercent: 65.5,
  slaMeta: 85.0,
  slaGap: -19.5,
  mttrAverage: 28.9,
  withinSla: 186,
  outOfSla: 98
};

// Image 1: Total Chamados x Resolvidos por Mês
export const TICKET_FLOW_MONTHLY_OVERVIEW = [
  { month: 'Janeiro', short: 'Jan', total: 39, resolved: 27, slaPercent: 70.4, mttr: 30.0 },
  { month: 'Fevereiro', short: 'Fev', total: 29, resolved: 23, slaPercent: 69.6, mttr: 27.4 },
  { month: 'Março', short: 'Mar', total: 25, resolved: 18, slaPercent: 66.7, mttr: 36.6 },
  { month: 'Abril', short: 'Abr', total: 33, resolved: 21, slaPercent: 66.7, mttr: 19.8 },
  { month: 'Maio', short: 'Mai', total: 37, resolved: 25, slaPercent: 48.0, mttr: 28.6 },
  { month: 'Junho', short: 'Jun', total: 33, resolved: 29, slaPercent: 51.7, mttr: 34.4 },
  { month: 'Julho', short: 'Jul', total: 39, resolved: 29, slaPercent: 75.9, mttr: 21.0 },
  { month: 'Agosto', short: 'Ago', total: 34, resolved: 26, slaPercent: 73.1, mttr: 35.1 },
  { month: 'Setembro', short: 'Set', total: 34, resolved: 25, slaPercent: 76.0, mttr: 18.1 },
  { month: 'Outubro', short: 'Out', total: 36, resolved: 22, slaPercent: 50.0, mttr: 37.6 },
  { month: 'Novembro', short: 'Nov', total: 39, resolved: 27, slaPercent: 74.1, mttr: 20.1 },
  { month: 'Dezembro', short: 'Dez', total: 22, resolved: 12, slaPercent: 58.3, mttr: 52.5 }
];

// Image 1: Total Chamados por Departamento
export const TICKET_FLOW_DEPARTMENTS = [
  { department: 'Operações', volume: 59, percent: 14.75 },
  { department: 'RH', volume: 53, percent: 13.25 },
  { department: 'Comercial', volume: 52, percent: 13.0 },
  { department: 'TI', volume: 52, percent: 13.0 },
  { department: 'Financeiro', volume: 50, percent: 12.5 },
  { department: 'Marketing', volume: 46, percent: 11.5 },
  { department: 'Logística', volume: 45, percent: 11.25 },
  { department: 'Jurídico', volume: 43, percent: 10.75 }
];

// Image 2: SLA por Prioridade
export const TICKET_FLOW_SLA_PRIORITY = [
  { priority: 'Crítica', sla: 75.0, color: '#dc2626' },
  { priority: 'Alta', sla: 64.7, color: '#dc2626' },
  { priority: 'Média', sla: 68.5, color: '#dc2626' },
  { priority: 'Baixa', sla: 57.1, color: '#dc2626' }
];

// Image 2: Volume e SLA por Categoria
export const TICKET_FLOW_CATEGORIES = [
  { category: 'Backup / Dados', volume: 75, sla: 72.4, mttr: 35.3 },
  { category: 'Hardware', volume: 70, sla: 70.0, mttr: 28.4 },
  { category: 'E-mail', volume: 67, sla: 54.2, mttr: 30.7 },
  { category: 'Acesso / Segurança', volume: 64, sla: 71.4, mttr: 28.9 },
  { category: 'Rede', volume: 62, sla: 63.8, mttr: 19.5 },
  { category: 'Software', volume: 62, sla: 59.5, mttr: 28.9 }
];

// Image 3: Desempenho por Técnico
export const TICKET_FLOW_TECHNICIANS = [
  { name: 'Carlos Mota', level: 'Sênior', volume: 61, resolved: 44, sla: 68.2, statusSla: 'danger' },
  { name: 'Helena Vieira', level: 'Pleno', volume: 59, resolved: 43, sla: 69.8, statusSla: 'danger' },
  { name: 'Gabriel Rocha', level: 'Sênior', volume: 56, resolved: 44, sla: 63.6, statusSla: 'danger' },
  { name: 'Bruno Souza', level: 'Pleno', volume: 54, resolved: 38, sla: 73.7, statusSla: 'warning' },
  { name: 'Fernanda Costa', level: 'Pleno', volume: 44, resolved: 28, sla: 42.9, statusSla: 'danger' },
  { name: 'Ana Lima', level: 'Júnior', volume: 43, resolved: 31, sla: 71.0, statusSla: 'warning' },
  { name: 'Diana Ferreira', level: 'Sênior', volume: 43, resolved: 29, sla: 58.6, statusSla: 'danger' },
  { name: 'Eduardo Castro', level: 'Júnior', volume: 40, resolved: 27, sla: 70.4, statusSla: 'warning' }
];

// Image 3: Carga de Trabalho por Status por Técnico
export const TICKET_FLOW_WORKLOAD = [
  { name: 'Helena Vieira', total: 14, aberto: 2, emAtendimento: 7, pendente: 5 },
  { name: 'Bruno Souza', total: 13, aberto: 3, emAtendimento: 6, pendente: 4 },
  { name: 'Carlos Mota', total: 11, aberto: 2, emAtendimento: 6, pendente: 3 },
  { name: 'Diana Ferreira', total: 9, aberto: 3, emAtendimento: 3, pendente: 3 },
  { name: 'Gabriel Rocha', total: 9, aberto: 1, emAtendimento: 5, pendente: 3 },
  { name: 'Eduardo Castro', total: 8, aberto: 2, emAtendimento: 4, pendente: 2 },
  { name: 'Fernanda Costa', total: 8, aberto: 2, emAtendimento: 4, pendente: 2 },
  { name: 'Ana Lima', total: 5, aberto: 1, emAtendimento: 2, pendente: 2 }
];

// Image 3: MTTR por Senioridade
export const TICKET_FLOW_SENIORITY_MTTR = [
  { level: 'Sênior', mttr: 32.0 },
  { level: 'Pleno', mttr: 28.3 },
  { level: 'Júnior', mttr: 23.7 }
];

// Image 4: Chamados por Turno
export const TICKET_FLOW_SHIFTS = [
  { shift: 'Noite', count: 108, percent: 27.0 },
  { shift: 'Madrugada', count: 105, percent: 26.25 },
  { shift: 'Tarde', count: 99, percent: 24.75 },
  { shift: 'Manhã', count: 88, percent: 22.0 }
];

// Image 4: Chamados por Dia da Semana
export const TICKET_FLOW_WEEKDAYS = [
  { day: 'Segunda', count: 67 },
  { day: 'Terça', count: 50 },
  { day: 'Quarta', count: 50 },
  { day: 'Quinta', count: 61 },
  { day: 'Sexta', count: 58 },
  { day: 'Sábado', count: 57 },
  { day: 'Domingo', count: 57 }
];

// Image 4: Fim de Semana vs Dia Útil
export const TICKET_FLOW_WEEKEND_SPLIT = [
  { label: 'Não (Dia Útil)', count: 286, percent: 71.5, color: '#0f2744' },
  { label: 'Sim (Fim de Semana)', count: 114, percent: 28.5, color: '#38bdf8' }
];

export const MONTHLY_DASHBOARD_METRICS: MonthlyMetric[] = [
  { month: 'Jan', ticketsTotal: 520, ticketsResolved: 480, slaPercent: 92.3, mttrHours: 2.8, sprintVelocity: 28, securityScore: 82 },
  { month: 'Fev', ticketsTotal: 580, ticketsResolved: 560, slaPercent: 96.5, mttrHours: 2.3, sprintVelocity: 34, securityScore: 85 },
  { month: 'Mar', ticketsTotal: 640, ticketsResolved: 632, slaPercent: 98.7, mttrHours: 1.9, sprintVelocity: 39, securityScore: 89 },
  { month: 'Abr', ticketsTotal: 610, ticketsResolved: 605, slaPercent: 99.1, mttrHours: 1.6, sprintVelocity: 42, securityScore: 92 },
  { month: 'Mai', ticketsTotal: 720, ticketsResolved: 715, slaPercent: 99.3, mttrHours: 1.5, sprintVelocity: 45, securityScore: 94 },
  { month: 'Jun', ticketsTotal: 690, ticketsResolved: 686, slaPercent: 99.4, mttrHours: 1.4, sprintVelocity: 46, securityScore: 96 }
];

export const DEPARTMENT_METRICS: DepartmentMetric[] = [
  { name: 'Infraestrutura & Redes', tickets: 1840, sla: 99.6, satisfaction: 4.92, budgetAllocated: 'R$ 48.500' },
  { name: 'Sistemas & ERP Corporativo', tickets: 1210, sla: 98.9, satisfaction: 4.88, budgetAllocated: 'R$ 62.000' },
  { name: 'Service Desk & Suporte N1/N2', tickets: 2450, sla: 99.5, satisfaction: 4.95, budgetAllocated: 'R$ 31.000' },
  { name: 'Segurança da Informação & SOC', tickets: 430, sla: 100.0, satisfaction: 5.0, budgetAllocated: 'R$ 29.800' },
  { name: 'DevOps & Engenharia de Dados', tickets: 820, sla: 99.2, satisfaction: 4.90, budgetAllocated: 'R$ 45.000' }
];

export const SPRINT_DELIVERIES: SprintDelivery[] = [
  { sprint: 'Sprint 14', committedStoryPoints: 32, completedStoryPoints: 30, leadTimeDays: 5.2, bugsEscaped: 2 },
  { sprint: 'Sprint 15', committedStoryPoints: 36, completedStoryPoints: 35, leadTimeDays: 4.6, bugsEscaped: 1 },
  { sprint: 'Sprint 16', committedStoryPoints: 40, completedStoryPoints: 40, leadTimeDays: 3.9, bugsEscaped: 0 },
  { sprint: 'Sprint 17', committedStoryPoints: 42, completedStoryPoints: 41, leadTimeDays: 3.5, bugsEscaped: 1 },
  { sprint: 'Sprint 18', committedStoryPoints: 45, completedStoryPoints: 45, leadTimeDays: 3.1, bugsEscaped: 0 },
  { sprint: 'Sprint 19', committedStoryPoints: 48, completedStoryPoints: 47, leadTimeDays: 2.8, bugsEscaped: 0 }
];

export const SECURITY_VULNERABILITIES: SecurityVulnerabilityStat[] = [
  { category: 'Autenticação & Controle de Acesso', resolved: 28, inProgress: 1, riskLevel: 'Baixo' },
  { category: 'Políticas de Rede & Firewalls', resolved: 19, inProgress: 0, riskLevel: 'Baixo' },
  { category: 'Gestão de Patches de Servidores', resolved: 45, inProgress: 2, riskLevel: 'Médio' },
  { category: 'Conformidade LGPD (Dados Sensíveis)', resolved: 33, inProgress: 0, riskLevel: 'Baixo' },
  { category: 'Proteção de Endpoints & Antimalware', resolved: 62, inProgress: 1, riskLevel: 'Baixo' }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    pillar: 'itil',
    question: 'Como sua empresa gerencia hoje incidentes, chamados e solicitações de usuários?',
    options: [
      { text: 'Sem processo definido: chegam por WhatsApp, e-mail e recados informais.', score: 1, explanation: 'Alto risco de esquecimento, falta de priorização e sem métricas de SLA.' },
      { text: 'Usamos uma ferramenta simples, mas não há catálogo de serviços nem SLAs claros.', score: 2, explanation: 'Operação reativa com atendimento dependente de pessoas específicas.' },
      { text: 'Temos Service Desk estruturado, mas sofremos em mudanças e análise de causa raiz.', score: 3, explanation: 'Boa base, necessita de gestão de problemas e processos de CAB (Mudanças).' },
      { text: 'Processos ITIL consolidados com SLAs auditados, catálogo unificado e automações.', score: 4, explanation: 'Operação madura e alinhada às melhores práticas internacionais.' }
    ]
  },
  {
    id: 2,
    pillar: 'scrum',
    question: 'De que forma as demandas de software, automações e projetos de TI são priorizadas e entregues?',
    options: [
      { text: 'Tudo é urgente; mudanças de prioridade diárias sem prazo ou planejamento.', score: 1, explanation: 'Sobrecarga crônica da equipe e constantes atrasos nas entregas.' },
      { text: 'Fazemos reuniões esporádicas, mas projetos demoram meses para gerar qualquer resultado.', score: 2, explanation: 'Falta de fatiamento de demandas e ausência de ciclos ágeis curtos.' },
      { text: 'Utilizamos Scrum/Kanban com sprints, mas ainda há dificuldade em medir velocidade e bugs.', score: 3, explanation: 'Boa aderência, necessita de refinamento técnico de métricas de vazão.' },
      { text: 'Squads autônomas com Sprints bem definidas, métricas de Lead Time e entregas contínuas.', score: 4, explanation: 'Excelente maturidade ágil com alto alinhamento aos objetivos de negócio.' }
    ]
  },
  {
    id: 3,
    pillar: 'security',
    question: 'Qual é o nível de blindagem cibernética e adequação à LGPD / ISO 27001 da sua TI?',
    options: [
      { text: 'Básico: apenas antivírus comum nas máquinas, sem autenticação MFA e sem política formal.', score: 1, explanation: 'Vulnerabilidade extrema a ataques de ransomware, vazamentos e sanções legais.' },
      { text: 'Iniciamos algumas regras de senha e backup, mas sem plano de resposta a incidentes.', score: 2, explanation: 'Segurança fragmentada que não resiste a incidentes complexos.' },
      { text: 'Temos backups testados e MFA nos principais acessos, mas pendências de adequação LGPD.', score: 3, explanation: 'Boa proteção técnica, necessita de governança e documentação de conformidade.' },
      { text: 'Ambiente Zero Trust, testes de invasão periódicos, ISO 27001 em conformidade e equipe treinada.', score: 4, explanation: 'Postura de segurança resiliente e em conformidade com as normas mundiais.' }
    ]
  },
  {
    id: 4,
    pillar: 'governance',
    question: 'A TI da sua empresa possui governança, controle orçamentário e alinhamento com a diretoria?',
    options: [
      { text: 'A TI é vista puramente como um centro de custo que consome orçamento sem justificativa.', score: 1, explanation: 'Falta de prestação de contas, riscos de investimentos errados e custos ocultos.' },
      { text: 'Controlamos despesas em planilhas, mas não há Plano Diretor (PDTI) nem matriz de riscos.', score: 2, explanation: 'Governança informal sem conexão com a estratégia macro da empresa.' },
      { text: 'Existem comitês esporádicos e controle de licenças, mas sem frameworks como COBIT.', score: 3, explanation: 'Estrutura intermediária pronta para aprimorar FinOps e gestão de riscos.' },
      { text: 'Comitê executivo de TI, FinOps ativo em nuvem, matriz RACI e governança COBIT integrada.', score: 4, explanation: 'TI estratégica, geradora de valor comprovado e alta eficiência de custos.' }
    ]
  },
  {
    id: 5,
    pillar: 'bi',
    question: 'Como a gestão de TI e a diretoria tomam decisões e acompanham indicadores?',
    options: [
      { text: 'No "feeling" ou com relatórios manuais em Excel que demoram dias para serem consolidados.', score: 1, explanation: 'Decisões lentas, dados defasados e alto risco de inconsistência em números.' },
      { text: 'Cada ferramenta tem seu relatório isolado, sem cruzamento de informações gerenciais.', score: 2, explanation: 'Ilhas de dados que dificultam uma visão panorâmica dos resultados de TI.' },
      { text: 'Temos alguns gráficos e relatórios mensais, mas gostaríamos de dashboards dinâmicos em tempo real.', score: 3, explanation: 'Necessidade de modernização para Microsoft Power BI com modelagem robusta.' },
      { text: 'Dashboards automatizados no Power BI integrados aos sistemas em tempo real e acessíveis mobile.', score: 4, explanation: 'Cultura 100% orientada a dados (Data-Driven) com decisões rápidas e precisas.' }
    ]
  }
];

export const TRUSTED_COMPANIES = [
  { name: 'Grupo Logix Global', segment: 'Logística & Supply Chain' },
  { name: 'Vértice FinTech', segment: 'Serviços Financeiros' },
  { name: 'BioPharma Health', segment: 'Saúde & Farmacêutica' },
  { name: 'Titanium Indústria', segment: 'Manufatura Pesada' },
  { name: 'OmniStore Varejo', segment: 'E-commerce & Retail' },
  { name: 'Alpha Telecom', segment: 'Telecomunicações & Cloud' }
];
