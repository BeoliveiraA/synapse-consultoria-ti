import React from 'react';
import { Layers, ShieldCheck, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight">
                  SYNAPSE <span className="text-blue-400">TI</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                  Consultoria & Governança de TI
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Especialistas em transformar operações corporativas através da implementação 
              prática de ITIL v4, Metodologias Ágeis (Scrum), Segurança da Informação (ISO 27001), 
              Governança Estratégica (COBIT) e Business Intelligence no Microsoft Power BI.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-300 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ambiente e Dados protegidos sob as diretrizes da LGPD (Lei 13.709/2018)</span>
            </div>
          </div>

          {/* Col 2: Serviços & Pilares */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Pilares de Atuação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#pilares" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Implementação de ITIL v4
                </a>
              </li>
              <li>
                <a href="#pilares" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Metodologias Ágeis (Scrum & Kanban)
                </a>
              </li>
              <li>
                <a href="#pilares" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Segurança da Informação & PenTest
                </a>
              </li>
              <li>
                <a href="#pilares" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Governança de TI & COBIT
                </a>
              </li>
              <li>
                <a href="#pilares" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Business Intelligence (Power BI)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Soluções & Casos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Recursos & Case
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#case-dashboard" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Case de Sucesso: Grupo Logix
                </a>
              </li>
              <li>
                <a href="#case-dashboard" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Dashboard Executivo Power BI
                </a>
              </li>
              <li>
                <a href="#case-dashboard" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Enviar / Integrar Meu Dashboard
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Diagnóstico de Maturidade de TI
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Metodologia de 5 Fases
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Matriz */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Atendimento Corporativo
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>contato@synapseti.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+55 (11) 4003-8890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>São Paulo, SP • Atendimento presencial e remoto para todo o Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Synapse TI Consultoria & Transformação Digital Ltda. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-slate-300 cursor-pointer">Termos de Uso</span>
            <span className="hover:text-slate-300 cursor-pointer">Acordo de Confidencialidade (NDA)</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
