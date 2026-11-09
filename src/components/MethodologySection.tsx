import React from 'react';
import { Search, Compass, Cpu, BarChart2, Repeat, CheckCircle } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico 360° & Avaliação de Maturidade',
      desc: 'Mapeamento aprofundado dos processos atuais de TI, volume de chamados, infraestrutura, conformidade de segurança e levantamento das dores da diretoria.',
      icon: <Search className="w-5 h-5 text-blue-600" />,
      tag: 'Semana 1 a 2'
    },
    {
      num: '02',
      title: 'Blueprint Estratégico & Plano de Ação',
      desc: 'Definição do Catálogo de Serviços, metas de SLA, arquitetura de segurança (ISO 27001) e cronograma de transição ágil fatiado em Sprints.',
      icon: <Compass className="w-5 h-5 text-indigo-600" />,
      tag: 'Semana 3 a 4'
    },
    {
      num: '03',
      title: 'Implantação Prática & Mentoria de Equipes',
      desc: 'Mão na massa: estruturação do Service Desk ITIL 4, formação dos Product Owners e Scrum Masters, implantação de MFA e políticas de acesso.',
      icon: <Cpu className="w-5 h-5 text-emerald-600" />,
      tag: 'Mês 2'
    },
    {
      num: '04',
      title: 'Torre de Controle no Microsoft Power BI',
      desc: 'Criação de dashboards automatizados para CIO, gestores e diretoria com dados em tempo real sobre SLAs, custos de nuvem e produtividade de squads.',
      icon: <BarChart2 className="w-5 h-5 text-amber-500" />,
      tag: 'Mês 3'
    },
    {
      num: '05',
      title: 'Governança Contínua & Evolução dos Indicadores',
      desc: 'Acompanhamento periódico por comitê consultivo, auditorias de conformidade e sustentação da cultura Data-Driven de alta performance.',
      icon: <Repeat className="w-5 h-5 text-blue-700" />,
      tag: 'Contínuo'
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-slate-50 relative border-y border-slate-200/80 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Nossa Metodologia Comprovada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Como conduzimos a transformação de TI na sua empresa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Um método estruturado, progressivo e sem risco de paralisação da sua operação. 
            Garantimos adoção real das equipes e métricas visíveis desde o primeiro mês.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 hover:border-blue-500 rounded-2xl p-5 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-slate-400 group-hover:text-blue-600 transition-colors">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    {step.icon}
                  </div>
                </div>

                <span className="text-[11px] font-mono text-blue-700 font-bold uppercase block mb-1.5">
                  {step.tag}
                </span>

                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Entregável auditável</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

