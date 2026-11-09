import React, { useState } from 'react';
import { CertificationToken, PillarId } from '../types';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Star, 
  X, 
  Sparkles,
  FileCheck,
  Building2,
  CalendarCheck
} from 'lucide-react';

interface CertificationMedalTokenProps {
  certification: CertificationToken;
  pillarId: PillarId;
  pillarTitle: string;
  variant?: 'badge-card' | 'token-card' | 'mini-badge';
  interactive?: boolean;
  className?: string;
}

export const CertificationMedalToken: React.FC<CertificationMedalTokenProps> = ({
  certification,
  pillarId: _pillarId,
  pillarTitle,
  variant = 'badge-card',
  interactive = true,
  className = '',
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // SVG Ribbon tails for the Great Place to Work / Medal aesthetic
  const RibbonTails = () => (
    <div className="relative flex justify-center -mt-1.5 z-0">
      <svg width="42" height="20" viewBox="0 0 42 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xs">
        {/* Left ribbon tail */}
        <path d="M7 0L14 0L17 18L10 14L3 18L7 0Z" fill="currentColor" className="text-blue-600" />
        {/* Right ribbon tail */}
        <path d="M28 0L35 0L39 18L32 14L25 18L28 0Z" fill="currentColor" className="text-blue-500" />
      </svg>
    </div>
  );

  if (variant === 'mini-badge') {
    return (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-600/30 text-blue-950 text-[11px] font-semibold shadow-xs">
        <Award className="w-3.5 h-3.5 text-blue-600 fill-blue-300" />
        <span>Especialista Certificado</span>
      </div>
    );
  }

  // Token Card: Great Place to Work inspired Medal Token Plaque
  return (
    <>
      <div 
        className={`group relative bg-white rounded-2xl border-2 border-blue-600/50 shadow-md shadow-blue-950/10 hover:shadow-2xl hover:shadow-blue-950/20 hover:border-blue-600 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
          interactive ? 'cursor-pointer hover:-translate-y-1' : ''
        } ${className}`}
        onClick={() => interactive && setIsDetailsOpen(true)}
      >
        {/* Top Header Ribbon: GPTW Style (Bold Brand Banner) */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white px-4 py-2 text-center flex items-center justify-between relative shadow-xs">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-blue-300 text-blue-300" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">
              {certification.badgeLabel}
            </span>
          </div>
          <span className="text-[9px] font-semibold bg-blue-950/80 px-2 py-0.5 rounded text-blue-200 uppercase tracking-wider">
            {certification.yearValid}
          </span>
        </div>

        {/* Medal Badge Center Piece */}
        <div className="p-5 flex flex-col items-center text-center">
          
          {/* Physical Medallion Representation */}
          <div className="relative mb-2 flex flex-col items-center">
            {/* Medallion Circle in Blue Tones */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-700 p-[3px] shadow-lg shadow-blue-500/25 flex items-center justify-center relative z-10 ring-2 ring-blue-100">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-50 to-blue-100 border-2 border-dashed border-blue-400 flex flex-col items-center justify-center text-blue-950">
                <Award className="w-7 h-7 text-blue-700 fill-blue-300" />
                <span className="text-[8px] font-black uppercase tracking-tighter text-blue-900 leading-none mt-0.5">
                  100% OK
                </span>
              </div>
            </div>

            {/* Ribbon Tails hanging underneath */}
            <RibbonTails />
          </div>

          {/* Medallion Subtitle & Title */}
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">
            Selo de Especialistas Certificados
          </div>

          <h4 className="text-base font-black text-slate-900 leading-snug tracking-tight mb-1 group-hover:text-blue-700 transition-colors">
            {certification.standardName}
          </h4>

          {/* Issuing Authority Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold my-2">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Homologação: {certification.issuingBody}</span>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
            {certification.whyItMatters}
          </p>

          {/* Verification Badge */}
          <div className="w-full mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
              {certification.certifiedRate}
            </span>
            {interactive && (
              <span className="text-blue-600 font-semibold group-hover:underline inline-flex items-center gap-1 text-[11px]">
                Ver Certificados
                <ExternalLink className="w-3 h-3" />
              </span>
            )}
          </div>
        </div>

        {/* Micro ID Footer */}
        <div className="bg-slate-50 px-3 py-1.5 border-t border-slate-100 text-center">
          <span className="text-[9px] font-mono text-slate-600 tracking-wider">
            TOKEN ID: {certification.verificationId}
          </span>
        </div>
      </div>

      {/* Certification Details Modal */}
      {isDetailsOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsDetailsOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsDetailsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-900/25 flex items-center justify-center text-blue-900 shadow-md shadow-blue-950/10 shrink-0">
                <Award className="w-8 h-8 fill-blue-800 text-blue-900" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  <Star className="w-3 h-3 fill-red-600 text-red-600" />
                  Selo Oficial de Competência Técnica
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {certification.standardName}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {pillarTitle} • {certification.issuingBody}
                </p>
              </div>
            </div>

            {/* Credibility Pitch */}
            <div className="bg-blue-50/70 border border-blue-900/20 rounded-2xl p-4 mb-6 shadow-xs">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
                  {certification.whyItMatters}
                </p>
              </div>
            </div>

            {/* List of Specific Verified Certifications */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-blue-600" />
                Certificações Oficiais dos Nossos Especialistas:
              </h4>

              <div className="space-y-2.5">
                {certification.specificCertifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3 hover:bg-slate-100/60 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {cert.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          Nível: <span className="font-semibold text-slate-700">{cert.level}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-[11px] font-bold text-slate-700 shadow-2xs whitespace-nowrap">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Validation & Guarantee Seal */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Garantia de Qualidade Synapse TI
                  </div>
                  <div className="text-xs text-slate-400">
                    {certification.certifiedRate} na equipe de consultores alocados.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-blue-300 font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>{certification.yearValid}</span>
              </div>
            </div>

            {/* Close action */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsDetailsOpen(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs cursor-pointer transition-colors"
              >
                Fechar Detalhes
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
