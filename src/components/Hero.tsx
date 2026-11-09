import React from 'react';
import { ArrowRight, BarChart3, Zap, Trophy, Star, Award, Shield, Lock } from 'lucide-react';

interface HeroProps {
  onScrollToCase: () => void;
  onScrollToDiagnostic: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToCase,
  onScrollToDiagnostic,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200/80">
      {/* Background Subtle Geometric Pattern & Soft Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-blue-200/30 via-indigo-100/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl" />
        
        {/* Subtle geometric dot grid for light mode */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#2563eb 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <span>Consultoria Especializada em Governança & Eficiência de TI</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Estruture sua TI com{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              processos mundiais
            </span>{' '}
            e inteligência em tempo real
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            Ajudamos médias e grandes empresas a eliminarem a desorganização e o apagamento de incêndios. 
            Implementamos <strong className="text-slate-900 font-semibold">ITIL v4</strong>,{' '}
            <strong className="text-slate-900 font-semibold">Metodologias Ágeis (Scrum)</strong>,{' '}
            <strong className="text-slate-900 font-semibold">Segurança da Informação (ISO 27001 & LGPD)</strong>,{' '}
            <strong className="text-slate-900 font-semibold">Governança Corporativa</strong> e{' '}
            <strong className="text-blue-700 font-semibold">Business Intelligence com Power BI</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-btn-case-dashboard"
              onClick={onScrollToCase}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-md shadow-blue-600/25 hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <BarChart3 className="w-5 h-5 text-white" />
              <span>Ver Case de Sucesso & Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-btn-diagnostic"
              onClick={onScrollToDiagnostic}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-300 hover:border-slate-400 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-xs"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Fazer Diagnóstico de Maturidade</span>
            </button>
          </div>
        </div>

        {/* Corporate Awards & Industry Recognition (Baseado nos 5 tópicos da Synapse TI) */}
        <div className="mt-16 pt-10 border-t border-slate-200 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <Trophy className="w-3.5 h-3.5 text-blue-600" />
            <span>Reconhecimento & Prêmios do Setor</span>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
            Liderança e Excelência Comprovadas pelos Maiores Benchmarks de TI
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto mb-8">
            Premiações e reconhecimentos conquistados pela Synapse TI nas áreas de Governança de Serviços, Business Intelligence, Cibersegurança e Métodos Ágeis.
          </p>

          {/* 4 Cards Grid with Bottom Blue Accent Stripe */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
            
            {/* PRÊMIO 1: ITIL v4 & ITSM */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center justify-between min-h-[380px] border-b-[4px] border-b-blue-600 group">
              <div className="w-full flex flex-col items-center">
                {/* Circular Emblem */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#071326] via-[#0d2240] to-[#153460] p-1 shadow-md flex items-center justify-center relative overflow-hidden ring-2 ring-blue-400/40 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full border border-blue-400/30 flex flex-col items-center justify-center text-center p-3 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent">
                    <div className="flex items-center gap-1 mb-1 text-blue-300">
                      <Star className="w-3 h-3 fill-blue-300" />
                      <span className="text-[9px] font-mono tracking-widest text-blue-200 uppercase">ITSM</span>
                      <Star className="w-3 h-3 fill-blue-300" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none mb-1">
                      Líder
                    </div>
                    <div className="text-[10px] font-semibold text-blue-200 leading-tight mb-1">
                      ITIL® & Service Desk
                    </div>
                    <div className="text-xs font-bold text-blue-200">
                      2025
                    </div>
                    <div className="mt-2 pt-1 border-t border-blue-400/30 text-[9px] font-mono tracking-wider text-blue-300 uppercase flex items-center gap-1">
                      <Award className="w-2.5 h-2.5 text-blue-400" />
                      <span>ITSM Provider Lens</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-center text-xs sm:text-[13px] font-semibold text-blue-900 leading-snug mt-6 px-1">
                Líder no estudo de Excelência em Governança de Serviços e Service Desk ITIL v4 realizado pelo ITSM Provider Lens
              </p>
            </div>

            {/* PRÊMIO 2: Microsoft Partner of the Year (Power BI) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center justify-between min-h-[380px] border-b-[4px] border-b-blue-600 group">
              <div className="w-full flex flex-col items-center">
                {/* Circular Emblem */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white p-1 shadow-md flex items-center justify-center relative overflow-hidden ring-2 ring-purple-600/30 border border-slate-200 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full border-2 border-purple-200/80 flex flex-col items-center justify-center text-center p-3 relative bg-gradient-to-b from-purple-50/40 via-white to-purple-50/20">
                    {/* Microsoft 4-color squares */}
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-1.5 h-1.5 bg-[#f25022]" />
                        <div className="w-1.5 h-1.5 bg-[#7fba00]" />
                        <div className="w-1.5 h-1.5 bg-[#00a4ef]" />
                        <div className="w-1.5 h-1.5 bg-[#ffb900]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 tracking-tight">Microsoft</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#5c2d91] tracking-tight leading-none mb-1">
                      Vencedor
                    </div>
                    {/* Color swoosh */}
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-full my-1" />
                    <div className="text-[9px] font-semibold text-slate-700 leading-tight">
                      Latam Microsoft Partner
                    </div>
                    <div className="text-[10px] font-extrabold text-[#5c2d91] tracking-tight">
                      Power BI & Analytics 2024
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-center text-xs sm:text-[13px] font-semibold text-blue-900 leading-snug mt-6 px-1">
                Reconhecida como Partner of The Year LATAM pela Microsoft em Business Intelligence e Power BI Analytics
              </p>
            </div>

            {/* PRÊMIO 3: Cibersegurança & LGPD (ISO 27001) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center justify-between min-h-[380px] border-b-[4px] border-b-blue-600 group">
              <div className="w-full flex flex-col items-center">
                {/* Circular Emblem */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#022c22] via-[#043e38] to-[#084c61] p-1 shadow-md flex items-center justify-center relative overflow-hidden ring-2 ring-teal-400/40 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full border border-teal-400/30 flex flex-col items-center justify-center text-center p-3 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-800/40 via-transparent to-transparent">
                    <div className="flex items-center gap-1 mb-1 text-teal-300">
                      <Shield className="w-3 h-3 text-emerald-400" />
                      <span className="text-[9px] font-mono tracking-widest text-teal-200 uppercase">CYBERSEC</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none mb-1">
                      Líder
                    </div>
                    <div className="text-[10px] font-semibold text-teal-100 leading-tight mb-1">
                      Segurança & ISO 27001
                    </div>
                    <div className="text-xs font-bold text-emerald-300">
                      2025
                    </div>
                    <div className="mt-2 pt-1 border-t border-teal-400/30 text-[9px] font-mono tracking-wider text-teal-300 uppercase flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5 text-teal-300" />
                      <span>Privacy & LGPD Lens</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-center text-xs sm:text-[13px] font-semibold text-blue-900 leading-snug mt-6 px-1">
                Líder no estudo de Blindagem Cibernética, Adequação à LGPD e Conformidade ISO/IEC 27001 pela CyberSec Lens
              </p>
            </div>

            {/* PRÊMIO 4: Governança COBIT & Metodologias Ágeis */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center justify-between min-h-[380px] border-b-[4px] border-b-blue-600 group">
              <div className="w-full flex flex-col items-center">
                {/* Circular Emblem */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-black via-[#0b0f19] to-[#18181b] p-1 shadow-md flex items-center justify-center relative overflow-hidden ring-2 ring-slate-700/60 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full border border-slate-600/50 flex flex-col items-center justify-center text-center p-3 relative">
                    {/* Background wave lines SVG */}
                    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
                      <circle cx="50" cy="50" r="32" stroke="white" strokeWidth="0.5" />
                      <path d="M10 50 Q 50 15 90 50" stroke="#38bdf8" strokeWidth="0.75" />
                      <path d="M10 55 Q 50 20 90 55" stroke="#818cf8" strokeWidth="0.5" />
                    </svg>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none mb-1 z-10">
                      Líder Latam
                    </div>
                    <div className="text-[10px] font-semibold text-slate-300 leading-tight mb-1 z-10">
                      Governança de TI & Ágil
                    </div>
                    <div className="text-xs font-bold text-blue-300 z-10">
                      2025
                    </div>
                    <div className="mt-2 pt-1 border-t border-slate-700 text-[8px] font-serif tracking-widest text-slate-300 uppercase z-10 font-bold">
                      FROST & SULLIVAN
                    </div>
                    <div className="text-[8px] font-mono text-slate-400 tracking-wider z-10">
                      GOVERNANCE STUDY
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-center text-xs sm:text-[13px] font-semibold text-blue-900 leading-snug mt-6 px-1">
                Líder Latam em Governança Corporativa de TI e Eficiência de Squads Ágeis segundo a Frost & Sullivan
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
