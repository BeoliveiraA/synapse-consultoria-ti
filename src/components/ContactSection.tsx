import React, { useState } from 'react';
import { PillarId } from '../types';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Building2, 
  Calendar,
  Sparkles,
  Paperclip
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  selectedPillar?: PillarId | null;
  diagnosticResult?: {
    score: number;
    level: string;
    summary: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPillar,
  diagnosticResult
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [companySize, setCompanySize] = useState('50-200');
  const [message, setMessage] = useState('');
  const [selectedPillars, setSelectedPillars] = useState<string[]>(
    selectedPillar ? [selectedPillar] : ['itil', 'bi']
  );
  const [submitted, setSubmitted] = useState(false);
  const [hasDashboardFile, setHasDashboardFile] = useState(false);

  const togglePillar = (id: string) => {
    if (selectedPillars.includes(id)) {
      setSelectedPillars(selectedPillars.filter((p) => p !== id));
    } else {
      setSelectedPillars([...selectedPillars, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  return (
    <section id="contato" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>Fale com Nossos Especialistas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Agende um Diagnóstico Inicial e Conecte sua TI aos Melhores Resultados
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Conte-nos sobre o momento da sua empresa. Se você já tem um dashboard ou dados do Power BI, 
            podemos avaliá-los juntos na reunião técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Institutional Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Por que agendar com a Synapse TI?
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Atendimento por Consultor Sênior</strong>
                    <span>Sem reuniões com intermediários ou vendedores não-técnicos. Você conversa direto com especialistas em ITIL, Scrum e Power BI.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Análise de Dados do seu Dashboard</strong>
                    <span>Pode trazer os dados do seu sistema de chamados ou Power BI existente para refinarmos.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Sigilo e Termo de Confidencialidade (NDA)</strong>
                    <span>Garantia legal de proteção integral aos dados e à arquitetura de TI da sua empresa.</span>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>contato@synapseti.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>+55 (11) 4003-8890 | WhatsApp Corporativo</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>SLA de resposta comercial: em até 2 horas úteis</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Av. Paulista, 1842 - Bela Vista, São Paulo - SP (Atendimento Nacional)</span>
                </div>
              </div>
            </div>

            {/* Diagnostic Result Banner if user took the quiz */}
            {diagnosticResult && (
              <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-200 shadow-xs">
                <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase mb-1">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Diagnóstico Acoplado à Proposta</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Maturidade Avaliada: {diagnosticResult.score}% ({diagnosticResult.level})
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Seus dados de teste serão incluídos na reunião para desenharmos uma proposta cirúrgica.
                </p>
              </div>
            )}

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Solicitar Diagnóstico & Proposta Técnica
                  </h3>
                  <p className="text-xs text-slate-500">
                    Preencha os dados da sua empresa para alinharmos um horário.
                  </p>
                </div>

                {/* Pillar Selection Pills */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-2 flex items-center justify-between">
                    <span>Quais áreas de TI precisam de estruturação prioritária?</span>
                    <span className="text-[11px] text-blue-600 font-normal hidden sm:inline">Supervisão por Consultores Certificados</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'itil', label: 'ITIL v4 & Service Desk', token: 'ITIL® 4 MP' },
                      { id: 'scrum', label: 'Metodologias Ágeis (Scrum)', token: 'PSM™ III' },
                      { id: 'security', label: 'Segurança & LGPD', token: 'ISO 27001' },
                      { id: 'governance', label: 'Governança & Riscos', token: 'COBIT® 2019' },
                      { id: 'bi', label: 'Power BI & Analytics', token: 'PL-300' }
                    ].map((p) => {
                      const isSelected = selectedPillars.includes(p.id);
                      return (
                        <button
                          type="button"
                          key={p.id}
                          id={`form-pillar-${p.id}`}
                          onClick={() => togglePillar(p.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-blue-600 text-white font-bold shadow-xs'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                          }`}
                        >
                          <span>{isSelected ? '✓' : '+'}</span>
                          <span>{p.label}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                            isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-200 text-slate-600'
                          }`}>
                            {p.token}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Corporate Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo Silveira"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@suaempresa.com.br"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 98765-4321"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Nome da Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: TechCorp Logística"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Company Size */}
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Número de Colaboradores / Usuários de TI
                  </label>
                  <select
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                  >
                    <option value="10-50">Até 50 colaboradores</option>
                    <option value="50-200">50 a 200 colaboradores</option>
                    <option value="200-1000">200 a 1.000 colaboradores</option>
                    <option value="1000+">Mais de 1.000 colaboradores (Enterprise)</option>
                  </select>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Descreva os principais desafios atuais ou objetivos de TI
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Precisamos estruturar nosso Service Desk para reduzir chamados parados, organizar sprints com os desenvolvedores e montar painéis no Power BI para a diretoria."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Checkbox for user dashboard */}
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <input
                    type="checkbox"
                    id="chk-dashboard"
                    checked={hasDashboardFile}
                    onChange={(e) => setHasDashboardFile(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500 focus:ring-offset-white cursor-pointer"
                  />
                  <label htmlFor="chk-dashboard" className="text-xs text-slate-700 cursor-pointer">
                    Já possuo um dashboard ou print do Power BI que gostaria de apresentar/integrar na consultoria
                  </label>
                </div>

                <button
                  type="submit"
                  id="btn-form-submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Contato & Proposta Técnica</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 Seus dados estão 100% protegidos em conformidade com a LGPD. Resposta em até 2 horas.
                </p>
              </form>
            ) : (
              /* Success State */
              <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Obrigado, <strong className="text-slate-900">{name}</strong>. Nossa equipe técnica da{' '}
                  <strong className="text-blue-600">Synapse TI</strong> entrará em contato com você pelo e-mail{' '}
                  <span className="text-slate-900 font-mono">{email}</span> e telefone informado.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1">
                  <div>🏢 <strong>Empresa:</strong> {company}</div>
                  <div>🎯 <strong>Pilares Selecionados:</strong> {selectedPillars.join(', ').toUpperCase()}</div>
                  {hasDashboardFile && (
                    <div className="text-blue-700">📊 <strong>Anotado:</strong> Agendaremos tempo específico para analisar seu Dashboard do Power BI.</div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium underline cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
