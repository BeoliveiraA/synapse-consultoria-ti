import React, { useState } from 'react';
import { CONSULTING_PILLARS } from '../data/mockData';
import { PillarId } from '../types';
import { CertificationMedalToken } from './CertificationMedalToken';
import { 
  Server, 
  Workflow, 
  ShieldCheck, 
  Briefcase, 
  BarChart2, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Layers,
  Award,
  Star,
  CheckCircle2
} from 'lucide-react';

interface PillarsSectionProps {
  onSelectPillarForContact: (pillarId: PillarId) => void;
}

const PILLAR_ICONS: Record<PillarId, React.ReactNode> = {
  itil: <Server className="w-5 h-5 text-blue-600" />,
  scrum: <Workflow className="w-5 h-5 text-indigo-600" />,
  security: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
  governance: <Briefcase className="w-5 h-5 text-blue-700" />,
  bi: <BarChart2 className="w-5 h-5 text-amber-500" />
};

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onSelectPillarForContact }) => {
  const [activePillarId, setActivePillarId] = useState<PillarId>('itil');

  const activePillar = CONSULTING_PILLARS.find((p) => p.id === activePillarId) || CONSULTING_PILLARS[0];

  return (
    <section id="pilares" className="py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Nossos 5 Pilares Estratégicos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Soluções completas para transformar a maturidade da sua TI
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Não entregamos apenas relatórios teóricos. Implementamos processos práticos conduzidos por
            <strong className="text-slate-900 font-semibold"> consultores 100% certificados internacionalmente</strong>, 
            garantindo as melhores práticas globais de mercado.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* CERTIFICATION TOKENS SHOWCASE (ESTILO GREAT PLACE TO WORK / MEDALHAS) */}
        {/* ---------------------------------------------------- */}
        <div className="mb-14 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6 sm:p-8 rounded-3xl border-2 border-blue-950/20 shadow-xl shadow-blue-950/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Banner Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-blue-900/15 relative z-10">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-950 text-white flex items-center justify-center shadow-lg shadow-blue-950/30 shrink-0 border border-blue-900/40">
                <Award className="w-6 h-6 fill-white" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-blue-950 font-bold text-xs uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-blue-900 text-blue-900" />
                  Selo de Excelência & Homologação Oficial
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Especialistas 100% Certificados nos 5 Pilares de TI
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-blue-900/25 text-blue-950 text-xs font-bold shadow-md shadow-blue-950/5 self-start sm:self-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Garantia de Qualidade & Rigor Técnico</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-2xl relative z-10">
            Selecione uma especialidade abaixo para auditar os certificados e o escopo técnico da equipe:
          </p>

          {/* 5 Certification Medal Tokens Grid (GPTW / Medallion Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {CONSULTING_PILLARS.map((pillar) => {
              const isSelected = pillar.id === activePillarId;
              const cert = pillar.certification;

              return (
                <button
                  key={pillar.id}
                  id={`token-pillar-${pillar.id}`}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`group relative bg-white rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between text-left cursor-pointer ${
                    isSelected 
                      ? 'border-2 border-blue-900 shadow-xl shadow-blue-950/25 -translate-y-1.5 ring-4 ring-blue-900/15 bg-gradient-to-b from-blue-50/60 via-white to-white' 
                      : 'border border-slate-200/90 shadow-sm shadow-blue-950/5 hover:border-blue-900/40 hover:shadow-lg hover:shadow-blue-950/15 hover:-translate-y-0.5'
                  }`}
                >
                  {/* Blue Corporate Ribbon Tag */}
                  <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white rounded-t-lg -mx-4 -mt-4 px-3 py-1.5 text-center flex items-center justify-between mb-3 shadow-2xs">
                    <span className="text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-blue-300 text-blue-300" />
                      CERTIFICADO
                    </span>
                    <span className="text-[9px] font-bold text-blue-200">
                      2025/2026
                    </span>
                  </div>

                  {/* Medallion with Ribbon Tails */}
                  <div className="flex flex-col items-center text-center my-1">
                    <div className="relative">
                      {/* Round Blue Medallion Ring */}
                      <div className="w-13 h-13 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 p-0.5 shadow-md shadow-blue-500/20 flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-50 to-blue-100 border border-dashed border-blue-400 flex flex-col items-center justify-center text-blue-950">
                          <Award className="w-6 h-6 text-blue-700 fill-blue-300" />
                        </div>
                      </div>
                      {/* Ribbon streamers at bottom */}
                      <div className="relative flex justify-center -mt-1 z-0">
                        <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 0L10 0L12 12L7 9.5L2 12L5 0Z" fill="#2563EB" />
                          <path d="M22 0L27 0L30 12L25 9.5L20 12L22 0Z" fill="#3B82F6" />
                        </svg>
                      </div>
                    </div>

                    {/* Pillar Icon & Title */}
                    <div className="flex items-center gap-1.5 mt-2 mb-1 justify-center">
                      <span className="p-1 rounded-md bg-slate-100">
                        {PILLAR_ICONS[pillar.id]}
                      </span>
                      <span className="text-[11px] font-bold text-slate-900 leading-tight">
                        {pillar.title.split(' (')[0]}
                      </span>
                    </div>

                    <h4 className="text-xs font-black text-slate-800 mt-0.5 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {cert.standardName}
                    </h4>

                    <span className="text-[10px] text-slate-500 font-medium mt-1">
                      {cert.issuingBody}
                    </span>
                  </div>

                  {/* Footer Badge inside token */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] w-full">
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      100% Válido
                    </span>
                    <span className={`font-bold flex items-center gap-0.5 ${isSelected ? 'text-blue-900 font-extrabold' : 'text-blue-600 group-hover:underline'}`}>
                      {isSelected ? '★ Visualizando' : 'Ver Detalhes'}
                      <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pillar Showcase Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Overview, Frameworks & Deliverables */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                    {activePillar.badge}
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-950 border border-blue-900/20 shadow-xs shadow-blue-950/5">
                    Homologação: {activePillar.certification.issuingBody}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1.5 tracking-tight">
                  {activePillar.title}
                </h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">
                  {activePillar.tagline}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-5">
                  {activePillar.description}
                </p>

                {/* Frameworks Applied */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Frameworks & Metodologias:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activePillar.frameworks.map((fw, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables List (3 Principais Entregáveis) */}
              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Principais Entregáveis da Consultoria:
                </h4>
                <ul className="space-y-2">
                  {activePillar.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Medal Token Card & Action (Equal Height) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-5">
              
              {/* Full Medal Token (GPTW Style Plaque) */}
              <CertificationMedalToken
                certification={activePillar.certification}
                pillarId={activePillar.id}
                pillarTitle={activePillar.title}
                interactive={true}
                className="h-full"
              />

              {/* Action Button to talk about this pillar */}
              <button
                id={`btn-pillar-cta-${activePillar.id}`}
                onClick={() => onSelectPillarForContact(activePillar.id)}
                className="w-full py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group cursor-pointer shrink-0"
              >
                <span>Solicitar Consultores Certificados em {activePillar.title.split(' (')[0]}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
