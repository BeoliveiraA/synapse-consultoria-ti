import React, { useState } from 'react';
import { 
  SUCCESS_CASE_STUDY,
  TICKET_FLOW_KPIS,
  TICKET_FLOW_MONTHLY_OVERVIEW,
  TICKET_FLOW_DEPARTMENTS,
  TICKET_FLOW_SLA_PRIORITY,
  TICKET_FLOW_CATEGORIES,
  TICKET_FLOW_TECHNICIANS,
  TICKET_FLOW_WORKLOAD,
  TICKET_FLOW_SENIORITY_MTTR,
  TICKET_FLOW_SHIFTS,
  TICKET_FLOW_WEEKDAYS,
  TICKET_FLOW_WEEKEND_SPLIT
} from '../data/mockData';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  CheckCircle2, 
  AlertTriangle,
  ArrowUpRight, 
  ArrowDownRight, 
  Sliders, 
  Building, 
  Clock, 
  Calendar,
  Users,
  LayoutDashboard,
  Upload,
  RefreshCw,
  Check,
  ChevronRight,
  ShieldCheck,
  Zap,
  Info,
  Layers,
  PieChart
} from 'lucide-react';

export const CaseStudyDashboard: React.FC = () => {
  // Navigation tabs matching the user's Power BI menu
  const [activePanel, setActivePanel] = useState<'geral' | 'executiva' | 'operacional' | 'temporal'>('geral');
  
  // Interactive Slicers / Filters
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTechnician, setSelectedTechnician] = useState<string>('all');
  const [selectedShift, setSelectedShift] = useState<string>('all');

  // Custom user dashboard upload / embed state
  const [customDashboardImage, setCustomDashboardImage] = useState<string | null>(null);
  const [customEmbedUrl, setCustomEmbedUrl] = useState<string>('');
  const [isUploadingCustom, setIsUploadingCustom] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'ticketflow' | 'custom'>('ticketflow');
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string>('');

  // Handle image upload from user
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomDashboardImage(event.target.result as string);
          setViewMode('custom');
          setUploadSuccessMessage(`Dashboard "${file.name}" carregado com sucesso!`);
          setTimeout(() => setUploadSuccessMessage(''), 4000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetFilters = () => {
    setSelectedMonth('all');
    setSelectedPriority('all');
    setSelectedStatus('all');
    setSelectedCategory('all');
    setSelectedTechnician('all');
    setSelectedShift('all');
  };

  const hasActiveFilters = 
    selectedMonth !== 'all' || 
    selectedPriority !== 'all' || 
    selectedStatus !== 'all' || 
    selectedCategory !== 'all' ||
    selectedTechnician !== 'all' ||
    selectedShift !== 'all';

  return (
    <section id="case-dashboard" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span>Case Real & Central de BI Interativa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Case Real: Ticket Flow Analytics & Reestruturação da TI
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Análise detalhada do ciclo anual de 2025 da Central de Chamados de TI. Veja os dados auditados dos 400 chamados,
            o diagnóstico dos gargalos operacionais e explore as 4 telas interativas desenvolvidas no Microsoft Power BI.
          </p>
        </div>

        {/* Case Narrative Summary Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold flex items-center gap-1.5">
                  <LayoutDashboard className="w-3.5 h-3.5 text-blue-600" />
                  {SUCCESS_CASE_STUDY.clientName}
                </span>
                <span className="text-xs text-slate-600 flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-slate-500" />
                  {SUCCESS_CASE_STUDY.industry}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  • {SUCCESS_CASE_STUDY.teamSize}
                </span>
              </div>

              {/* 2 Focused Problem vs Solution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                
                {/* 1. O Problema */}
                <div className="bg-rose-50/70 p-5 rounded-2xl border border-rose-200/90 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                        O Problema (Cenário Inicial)
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                        SLA Crítico: 65,5%
                      </span>
                    </div>
                    
                    <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                        <span><strong className="text-slate-900 font-semibold">Lentidão & Filas:</strong> MTTR de 28,9h e 77 chamados represados no backlog.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                        <span><strong className="text-slate-900 font-semibold">Gargalo de Horários:</strong> 53% dos chamados abertos à noite e fins de semana sem equipe.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                        <span><strong className="text-slate-900 font-semibold">Retrabalho:</strong> Falta de triagem técnica N1/N2/N3 gerando 25 chamados reabertos.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-rose-200/80 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-white/80 p-2 rounded-lg border border-rose-200 shadow-2xs">
                      <span className="text-slate-500 block text-[10px] font-medium">MTTR Inicial</span>
                      <strong className="text-rose-700 text-xs font-black">28,9 horas</strong>
                    </div>
                    <div className="bg-white/80 p-2 rounded-lg border border-rose-200 shadow-2xs">
                      <span className="text-slate-500 block text-[10px] font-medium">Noite & FDS</span>
                      <strong className="text-rose-700 text-xs font-black">53% (213)</strong>
                    </div>
                    <div className="bg-white/80 p-2 rounded-lg border border-rose-200 shadow-2xs">
                      <span className="text-slate-500 block text-[10px] font-medium">Backlog Represado</span>
                      <strong className="text-rose-700 text-xs font-black">77 tickets</strong>
                    </div>
                  </div>
                </div>

                {/* 2. A Solução */}
                <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200/90 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        A Solução (Atuação Synapse TI)
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                        ITIL v4 + Power BI
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span><strong className="text-slate-900 font-semibold">Estruturação ITIL 4:</strong> Catálogo de serviços, triagem inteligente e eliminação de causas raiz.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span><strong className="text-slate-900 font-semibold">Plantão Estratégico:</strong> Readequação de escalas ágeis cobrindo noites e fins de semana.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span><strong className="text-slate-900 font-semibold">Painéis Power BI:</strong> Torre de controle em tempo real para tomada de decisão executiva.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-emerald-200/80 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-white/80 p-2 rounded-lg border border-emerald-200 shadow-2xs">
                      <span className="text-slate-500 block text-[10px] font-medium">SLA Final</span>
                      <strong className="text-emerald-700 text-xs font-black">96,8% (+31%)</strong>
                    </div>
                    <div className="bg-white/80 p-2 rounded-lg border border-emerald-200 shadow-2xs">
                      <span className="text-slate-500 block text-[10px] font-medium">MTTR Otimizado</span>
                      <strong className="text-emerald-700 text-xs font-black">3,4h (-88%)</strong>
                    </div>
                    <div className="bg-white/80 p-2 rounded-lg border border-emerald-200 shadow-2xs">
                      <span className="text-slate-500 block text-[10px] font-medium">Backlog Zerado</span>
                      <strong className="text-emerald-700 text-xs font-black">6 tickets (-92%)</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Quote Box */}
            <div className="lg:w-96 bg-slate-50 p-5 rounded-2xl border border-slate-200 shrink-0 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {'★'.repeat(5)}
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  Depoimento do Cliente
                </span>
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "{SUCCESS_CASE_STUDY.testimonial.quote}"
              </p>
              <div className="border-t border-slate-200 pt-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  TF
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {SUCCESS_CASE_STUDY.testimonial.author}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {SUCCESS_CASE_STUDY.testimonial.role} • {SUCCESS_CASE_STUDY.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Before vs After Comparison Grid */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Resultados Auditados: Antes vs. Depois da Consultoria Synapse TI
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {SUCCESS_CASE_STUDY.impactMetrics.map((metric, idx) => (
                <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-[11px] font-medium text-slate-500 truncate mb-1">
                    {metric.label}
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-extrabold text-slate-900">
                      {metric.after}
                    </span>
                    <span className="text-xs font-bold text-emerald-600">
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Anterior: <span className="line-through text-rose-500 font-semibold">{metric.before}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TICKET FLOW ANALYTICS - EXACT REPLICATION OF THE USER'S POWER BI REPORT   */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-slate-300 bg-white shadow-xl overflow-hidden mb-12">
          
          {/* Top Power BI Window Chrome / Title Bar */}
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-xs">
                BI
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-white">
                    Ticket Flow Analytics • Central de Chamados TI (Power BI)
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                    Período 2025 Auditado
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  Painel Oficial • 4 Visões: Geral, Executiva, Operacional e Temporal
                </span>
              </div>
            </div>

            {/* Actions: Reset / Upload Custom */}
            <div className="flex items-center gap-2">
              <div className="bg-slate-800 p-1 rounded-lg border border-slate-700 flex items-center text-xs">
                <button
                  onClick={() => setViewMode('ticketflow')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    viewMode === 'ticketflow'
                      ? 'bg-blue-600 text-white font-bold shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Dashboard Interativo
                </button>
                <button
                  onClick={() => {
                    setViewMode('custom');
                    if (!customDashboardImage && !customEmbedUrl) {
                      setIsUploadingCustom(true);
                    }
                  }}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'custom'
                      ? 'bg-amber-500 text-white font-bold shadow-xs'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Upload className="w-3 h-3" />
                  <span>Subir Outro Print / Link</span>
                </button>
              </div>

              <button
                onClick={() => setIsUploadingCustom(!isUploadingCustom)}
                className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                title="Configurar Arquivo Próprio"
              >
                <Upload className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">Carregar Novo Dashboard</span>
              </button>
            </div>
          </div>

          {/* User Custom Upload Section (Collapsible) */}
          {isUploadingCustom && (
            <div className="bg-slate-50 border-b border-slate-200 p-6 animate-in slide-in-from-top-2 duration-200">
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Upload className="w-5 h-5 text-amber-500" />
                    <h4 className="text-sm font-bold text-slate-900">
                      Adicionar ou Substituir por Outro Print ou Link do Power BI
                    </h4>
                  </div>
                  <button
                    onClick={() => setIsUploadingCustom(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 cursor-pointer"
                  >
                    Fechar ✕
                  </button>
                </div>
                <p className="text-xs text-slate-600">
                  Você pode carregar uma nova imagem (.png, .jpg) ou inserir a URL do Power BI (Publish to Web):
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                        Opção 1: Upload de Print (.png, .jpg)
                      </span>
                      <p className="text-xs text-slate-600 mb-3">
                        Carregue uma imagem do seu computador para exibir como relatório.
                      </p>
                    </div>
                    <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl cursor-pointer bg-slate-50 hover:bg-blue-50/50 transition-colors">
                      <Upload className="w-6 h-6 text-slate-400 mb-2" />
                      <span className="text-xs font-semibold text-slate-700">Clique para selecionar imagem</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                        Opção 2: Link do Power BI (Embed)
                      </span>
                      <p className="text-xs text-slate-600 mb-3">
                        Cole o link público de incorporação do Power BI (`app.powerbi.com/view?r=...`).
                      </p>
                    </div>
                    <div className="space-y-2">
                      <input
                        type="url"
                        placeholder="https://app.powerbi.com/view?r=..."
                        value={customEmbedUrl}
                        onChange={(e) => setCustomEmbedUrl(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
                      />
                      <button
                        onClick={() => {
                          if (customEmbedUrl.trim()) {
                            setViewMode('custom');
                            setIsUploadingCustom(false);
                          }
                        }}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        Carregar Relatório Embutido
                      </button>
                    </div>
                  </div>
                </div>

                {uploadSuccessMessage && (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{uploadSuccessMessage}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* MAIN REPORT LAYOUT: TICKET FLOW SIDEBAR + ACTIVE CANVAS                   */}
          {/* ========================================================================= */}
          {viewMode === 'custom' && customDashboardImage ? (
            <div className="p-6 bg-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold">
                  Visualizando Arquivo Enviado
                </span>
                <button
                  onClick={() => setViewMode('ticketflow')}
                  className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  Voltar ao Dashboard Interativo
                </button>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-sm">
                <img
                  src={customDashboardImage}
                  alt="Dashboard Carregado"
                  className="w-full h-auto rounded-xl max-h-[800px] object-contain mx-auto"
                />
              </div>
            </div>
          ) : viewMode === 'custom' && customEmbedUrl ? (
            <div className="p-6 bg-slate-100">
              <div className="w-full h-[700px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <iframe
                  title="Power BI Report"
                  src={customEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row min-h-[720px] bg-slate-50">
              
              {/* ===================================================================== */}
              {/* 1. LEFT SIDEBAR MENU: "Ticket Flow ANALYTICS"                         */}
              {/* ===================================================================== */}
              <aside className="w-full lg:w-56 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 p-4 shrink-0 flex flex-col justify-between">
                <div>
                  {/* Brand Header */}
                  <div className="flex items-center gap-2.5 pb-6 border-b border-slate-100 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#0c2340] text-white flex items-center justify-center font-black text-sm shadow-xs">
                      ≡
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-[#0c2340] tracking-tight leading-none">
                        Ticket Flow
                      </div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                        ANALYTICS
                      </div>
                    </div>
                  </div>

                  {/* Menu Label */}
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">
                    MENU
                  </div>

                  {/* 4 Page Navigation Buttons */}
                  <nav className="space-y-1">
                    <button
                      onClick={() => setActivePanel('geral')}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activePanel === 'geral'
                          ? 'bg-[#0c2340] text-white shadow-sm'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      <span>Visão Geral</span>
                    </button>

                    <button
                      onClick={() => setActivePanel('executiva')}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activePanel === 'executiva'
                          ? 'bg-[#0c2340] text-white shadow-sm'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <BarChart3 className="w-4 h-4" />
                      <span>Análise Executiva</span>
                    </button>

                    <button
                      onClick={() => setActivePanel('operacional')}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activePanel === 'operacional'
                          ? 'bg-[#0c2340] text-white shadow-sm'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <Users className="w-4 h-4" />
                      <span>Análise Operacional</span>
                    </button>

                    <button
                      onClick={() => setActivePanel('temporal')}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activePanel === 'temporal'
                          ? 'bg-[#0c2340] text-white shadow-sm'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      <span>Análise Temporal</span>
                    </button>
                  </nav>
                </div>

                {/* Sidebar Footer Info */}
                <div className="pt-4 mt-6 border-t border-slate-100 hidden lg:block">
                  <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-[11px] text-blue-900">
                    <div className="font-bold flex items-center gap-1 mb-1">
                      <Zap className="w-3 h-3 text-blue-600" />
                      Power BI Direct
                    </div>
                    <span>400 chamados consolidados no modelo analítico.</span>
                  </div>
                </div>
              </aside>

              {/* ===================================================================== */}
              {/* 2. MAIN REPORT CANVAS                                                 */}
              {/* ===================================================================== */}
              <main className="flex-1 p-4 sm:p-6 space-y-5 bg-[#f4f7fb] overflow-y-auto">
                
                {/* Visual Header Banner matching user's Image 1 */}
                <div className="rounded-2xl bg-gradient-to-r from-[#185a9d] to-[#2575fc] text-white p-5 sm:p-6 shadow-sm relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      Central de Chamados TI
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100 font-medium">
                      Visão geral do período referente ao ano de 2025, selecione um painel para explorar
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-xs text-white text-xs font-mono font-bold border border-white/20">
                      02/01/2025 – 29/12/2025
                    </span>
                  </div>
                  {/* Decorative bar */}
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/5 skew-x-12 pointer-events-none" />
                </div>

                {/* =================================================================== */}
                {/* INTERACTIVE SLICERS BAR (DATA, MÊS, PRIORIDADE, STATUS, CATEGORIA)  */}
                {/* =================================================================== */}
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 font-bold text-slate-700">
                      <Sliders className="w-3.5 h-3.5 text-blue-600" />
                      <span>Filtros do Painel:</span>
                    </div>

                    {/* Slicer: Mês */}
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                      <span className="text-[11px] text-slate-500 font-medium">Mês:</span>
                      <select 
                        value={selectedMonth} 
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="bg-transparent text-slate-800 font-bold focus:outline-none cursor-pointer"
                      >
                        <option value="all">Todos</option>
                        {TICKET_FLOW_MONTHLY_OVERVIEW.map(m => (
                          <option key={m.short} value={m.short}>{m.month}</option>
                        ))}
                      </select>
                    </div>

                    {/* Slicer: Prioridade */}
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                      <span className="text-[11px] text-slate-500 font-medium">Prioridade:</span>
                      <select 
                        value={selectedPriority} 
                        onChange={(e) => setSelectedPriority(e.target.value)}
                        className="bg-transparent text-slate-800 font-bold focus:outline-none cursor-pointer"
                      >
                        <option value="all">Todos</option>
                        <option value="Crítica">Crítica</option>
                        <option value="Alta">Alta</option>
                        <option value="Média">Média</option>
                        <option value="Baixa">Baixa</option>
                      </select>
                    </div>

                    {/* Slicer: Status */}
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                      <span className="text-[11px] text-slate-500 font-medium">Status:</span>
                      <select 
                        value={selectedStatus} 
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="bg-transparent text-slate-800 font-bold focus:outline-none cursor-pointer"
                      >
                        <option value="all">Todos</option>
                        <option value="Resolvido">Resolvido</option>
                        <option value="Em Atendimento">Em Atendimento</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Aberto">Aberto</option>
                        <option value="Cancelado">Cancelado</option>
                      </select>
                    </div>

                    {/* Slicer: Categoria */}
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                      <span className="text-[11px] text-slate-500 font-medium">Categoria:</span>
                      <select 
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-transparent text-slate-800 font-bold focus:outline-none cursor-pointer"
                      >
                        <option value="all">Todas</option>
                        {TICKET_FLOW_CATEGORIES.map(c => (
                          <option key={c.category} value={c.category}>{c.category}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={resetFilters}
                      className="text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Limpar Filtros</span>
                    </button>
                  )}
                </div>

                {/* =================================================================== */}
                {/* VIEW 1: VISÃO GERAL (IMAGE 1)                                       */}
                {/* =================================================================== */}
                {activePanel === 'geral' && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    
                    {/* The 6 KPI Scorecards matching Image 1 */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                      {/* Total Chamados */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-[#0c2340]">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">
                          {TICKET_FLOW_KPIS.totalTickets}
                        </div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">
                          Total Chamados
                        </div>
                      </div>

                      {/* Chamados Resolvidos */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-emerald-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">
                          {TICKET_FLOW_KPIS.resolvedTickets}
                        </div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">
                          Chamados Resolvidos
                        </div>
                      </div>

                      {/* Chamados Backlog */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-amber-500">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">
                          {TICKET_FLOW_KPIS.backlogTickets}
                        </div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">
                          Chamados Backlog
                        </div>
                      </div>

                      {/* Chamados Cancelados */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-slate-400">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">
                          {TICKET_FLOW_KPIS.canceledTickets}
                        </div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">
                          Chamados Cancelados
                        </div>
                      </div>

                      {/* % SLA */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-blue-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">
                          65,5%
                        </div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">
                          % SLA
                        </div>
                      </div>

                      {/* MTTR Médio */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-amber-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">
                          28,9 h
                        </div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">
                          MTTR Médio
                        </div>
                      </div>
                    </div>

                    {/* Visuals Grid of Image 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                      
                      {/* Visual 1: Total Chamados x Resolvidos por Mês (Dual Line Chart) */}
                      <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 text-center mb-1">
                            Total Chamados x Resolvidos por Mês
                          </h4>
                          {/* Legend */}
                          <div className="flex items-center justify-center gap-4 text-[11px] mb-4">
                            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#0c2340] inline-block" /> Total Chamados
                            </span>
                            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" /> Chamados Resolvidos
                            </span>
                          </div>

                          {/* Chart Container */}
                          <div className="h-56 relative w-full pt-4">
                            {/* Grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 border-b border-slate-300">
                              <div className="border-b border-slate-400 w-full" />
                              <div className="border-b border-slate-400 w-full" />
                              <div className="border-b border-slate-400 w-full" />
                              <div className="border-b border-slate-400 w-full" />
                            </div>

                            {/* Dual Line SVG */}
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 550 160">
                              {/* Total line points: Jan:39, Fev:29, Mar:25, Abr:33, Mai:37, Jun:33, Jul:39, Ago:34, Set:34, Out:36, Nov:39, Dez:22 */}
                              {/* Scale: max 40 -> y=10, min 10 -> y=150 */}
                              <polyline
                                fill="none"
                                stroke="#0c2340"
                                strokeWidth="2.5"
                                points="
                                  20,15 65,55 110,70 155,38 200,23 245,38 290,15 335,34 380,34 425,27 470,15 515,85
                                "
                              />
                              {/* Resolved line points: Jan:27, Fev:23, Mar:18, Abr:21, Mai:25, Jun:29, Jul:29, Ago:26, Set:25, Out:22, Nov:27, Dez:12 */}
                              <polyline
                                fill="none"
                                stroke="#16a34a"
                                strokeWidth="2.5"
                                points="
                                  20,63 65,79 110,98 155,87 200,71 245,55 290,55 335,67 380,71 425,83 470,63 515,122
                                "
                              />

                              {/* Total Dots & Value Labels */}
                              {[
                                { x: 20, y: 15, val: 39 },
                                { x: 65, y: 55, val: 29 },
                                { x: 110, y: 70, val: 25 },
                                { x: 155, y: 38, val: 33 },
                                { x: 200, y: 23, val: 37 },
                                { x: 245, y: 38, val: 33 },
                                { x: 290, y: 15, val: 39 },
                                { x: 335, y: 34, val: 34 },
                                { x: 380, y: 34, val: 34 },
                                { x: 425, y: 27, val: 36 },
                                { x: 470, y: 15, val: 39 },
                                { x: 515, y: 85, val: 22 }
                              ].map((pt, i) => (
                                <g key={`tot-${i}`}>
                                  <circle cx={pt.x} cy={pt.y} r="3.5" fill="#0c2340" />
                                  <text x={pt.x} y={pt.y - 6} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0c2340">
                                    {pt.val}
                                  </text>
                                </g>
                              ))}

                              {/* Resolved Dots & Value Labels */}
                              {[
                                { x: 20, y: 63, val: 27 },
                                { x: 65, y: 79, val: 23 },
                                { x: 110, y: 98, val: 18 },
                                { x: 155, y: 87, val: 21 },
                                { x: 200, y: 71, val: 25 },
                                { x: 245, y: 55, val: 29 },
                                { x: 290, y: 55, val: 29 },
                                { x: 335, y: 67, val: 26 },
                                { x: 380, y: 71, val: 25 },
                                { x: 425, y: 83, val: 22 },
                                { x: 470, y: 63, val: 27 },
                                { x: 515, y: 122, val: 12 }
                              ].map((pt, i) => (
                                <g key={`res-${i}`}>
                                  <circle cx={pt.x} cy={pt.y} r="3.5" fill="#16a34a" />
                                  <text x={pt.x} y={pt.y + 12} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#16a34a">
                                    {pt.val}
                                  </text>
                                </g>
                              ))}
                            </svg>
                          </div>

                          {/* Month Axis Labels */}
                          <div className="flex justify-between text-[10px] text-slate-500 font-medium px-2 mt-2">
                            {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map(m => (
                              <span key={m}>{m}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Visual 2: Status SLA dos Chamados (Donut Chart matching Image 1) */}
                      <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 text-center mb-1">
                            Status SLA dos Chamados
                          </h4>
                          <div className="flex items-center justify-center gap-3 text-[10px] mb-4">
                            <span className="flex items-center gap-1 text-slate-700 font-medium">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Dentro SLA
                            </span>
                            <span className="flex items-center gap-1 text-slate-700 font-medium">
                              <span className="w-2 h-2 rounded-full bg-red-600 inline-block" /> Fora SLA
                            </span>
                          </div>

                          {/* Donut graphic */}
                          <div className="relative w-40 h-40 mx-auto my-3 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                              {/* 186 dentro (65.5%), 98 fora (34.5%) */}
                              <circle
                                cx="50" cy="50" r="35"
                                fill="transparent"
                                stroke="#16a34a"
                                strokeWidth="18"
                                strokeDasharray="220"
                                strokeDashoffset="0"
                              />
                              <circle
                                cx="50" cy="50" r="35"
                                fill="transparent"
                                stroke="#ef4444"
                                strokeWidth="18"
                                strokeDasharray="220"
                                strokeDashoffset="144"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <span className="text-xs font-semibold text-slate-400">Total</span>
                              <span className="text-base font-extrabold text-slate-900">284</span>
                            </div>
                          </div>

                          {/* Data callouts matching Image 1 */}
                          <div className="flex justify-around text-center pt-2">
                            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs">
                              <span className="block text-[10px] text-emerald-800 font-semibold">Dentro SLA</span>
                              <strong className="text-emerald-700 text-base">186</strong>
                            </div>
                            <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-xs">
                              <span className="block text-[10px] text-rose-800 font-semibold">Fora SLA</span>
                              <strong className="text-rose-700 text-base">98</strong>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Visual 3: Total Chamados por Departamento (Horizontal Bars) */}
                      <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 text-center mb-3">
                            Total Chamados por Departamento
                          </h4>

                          <div className="space-y-2 pt-1">
                            {TICKET_FLOW_DEPARTMENTS.map((dept) => {
                              const pct = (dept.volume / 60) * 100;
                              return (
                                <div key={dept.department} className="space-y-0.5">
                                  <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                                    <span>{dept.department}</span>
                                    <span className="text-[#185a9d] font-bold">{dept.volume}</span>
                                  </div>
                                  <div className="h-3.5 bg-slate-100 rounded-md overflow-hidden">
                                    <div 
                                      className="h-full bg-[#205493] rounded-md transition-all duration-500"
                                      style={{ width: `${pct}%` }}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* =================================================================== */}
                {/* VIEW 2: ANÁLISE EXECUTIVA (IMAGE 2)                                 */}
                {/* =================================================================== */}
                {activePanel === 'executiva' && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    
                    {/* The 6 KPI Scorecards of Image 2 */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-[#0c2340]">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">400</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">Total Chamados</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-emerald-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">71,0%</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">% Resolvidos</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-rose-500">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">6,3%</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">% Reabertos</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-blue-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">65,5%</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">% SLA</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-red-600">
                        <div className="text-2xl sm:text-3xl font-black text-red-600 text-center">-19,5%</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">SLA Gap (Meta 85%)</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-amber-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">28,9 h</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">MTTR Médio</div>
                      </div>
                    </div>

                    {/* Executive Charts 2x2 Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      
                      {/* Visual 1: Tendência de SLA vs Meta */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xs font-bold text-slate-900">Tendência de SLA vs Meta (85,0%)</h4>
                          <span className="text-[10px] font-mono text-slate-500">Linha pontilhada = Meta 85%</span>
                        </div>
                        <div className="h-48 relative pt-4">
                          {/* 85% Meta Dotted line */}
                          <div className="absolute top-[20%] left-0 right-0 border-b-2 border-dashed border-slate-900 flex justify-end pr-2">
                            <span className="text-[10px] font-bold text-slate-800 bg-white px-1">Meta 85,0%</span>
                          </div>
                          
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 500 130">
                            {/* Points: Jan 70.4, Fev 69.6, Mar 66.7, Abr 66.7, Mai 48.0, Jun 51.7, Jul 75.9, Ago 73.1, Set 76.0, Out 50.0, Nov 74.1, Dez 58.3 */}
                            <polyline
                              fill="none"
                              stroke="#0080ff"
                              strokeWidth="2.5"
                              points="
                                20,40 60,42 100,50 140,50 180,95 220,86 260,26 300,34 340,25 380,90 420,31 460,70
                              "
                            />
                            {[
                              { x: 20, y: 40, val: '70,4%' },
                              { x: 60, y: 42, val: '69,6%' },
                              { x: 100, y: 50, val: '66,7%' },
                              { x: 140, y: 50, val: '66,7%' },
                              { x: 180, y: 95, val: '48,0%' },
                              { x: 220, y: 86, val: '51,7%' },
                              { x: 260, y: 26, val: '75,9%' },
                              { x: 300, y: 34, val: '73,1%' },
                              { x: 340, y: 25, val: '76,0%' },
                              { x: 380, y: 90, val: '50,0%' },
                              { x: 420, y: 31, val: '74,1%' },
                              { x: 460, y: 70, val: '58,3%' }
                            ].map((p, i) => (
                              <g key={i}>
                                <circle cx={p.x} cy={p.y} r="3" fill="#0080ff" />
                                <text x={p.x} y={p.y - 5} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0080ff">
                                  {p.val}
                                </text>
                              </g>
                            ))}
                          </svg>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 font-medium px-2 mt-2">
                          {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map(m => (
                            <span key={m}>{m}</span>
                          ))}
                        </div>
                      </div>

                      {/* Visual 2: Conformidade SLA por Prioridade */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xs font-bold text-slate-900">Conformidade SLA por Prioridade</h4>
                          <span className="text-[10px] font-bold text-slate-600">Meta: 85,0%</span>
                        </div>
                        <div className="h-48 flex items-end justify-around gap-4 pb-4 border-b border-slate-200 relative">
                          {/* 85% meta guide */}
                          <div className="absolute top-[20%] left-0 right-0 border-b-2 border-dashed border-slate-800" />
                          
                          {TICKET_FLOW_SLA_PRIORITY.map((pri) => (
                            <div key={pri.priority} className="flex flex-col items-center gap-1.5 z-10">
                              <span className="text-xs font-black text-rose-700">{pri.sla}%</span>
                              <div 
                                className="w-16 bg-[#d32f2f] rounded-t-md transition-all duration-500"
                                style={{ height: `${(pri.sla / 100) * 140}px` }}
                              />
                              <span className="text-xs font-bold text-slate-800">{pri.priority}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Visual 3: Distribuição por Status (Donut Chart) */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                        <h4 className="text-xs font-bold text-slate-900 mb-3 text-center">
                          Distribuição por Status (400 chamados)
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                          <div className="relative w-36 h-36 mx-auto">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                              {/* 71% Resolvidos, 9.75% Cancelados, 9.25% Em Atendimento, 6% Pendentes, 4% Abertos */}
                              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#16a34a" strokeWidth="18" strokeDasharray="220" strokeDashoffset="0" />
                              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#64748b" strokeWidth="18" strokeDasharray="220" strokeDashoffset="156" />
                              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#eab308" strokeWidth="18" strokeDasharray="220" strokeDashoffset="177" />
                              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f97316" strokeWidth="18" strokeDasharray="220" strokeDashoffset="198" />
                              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#3b82f6" strokeWidth="18" strokeDasharray="220" strokeDashoffset="211" />
                            </svg>
                          </div>
                          <div className="space-y-1.5 text-xs">
                            <div className="flex items-center justify-between text-slate-700">
                              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-emerald-600" /> Resolvidos</span>
                              <strong className="font-mono">284 (71%)</strong>
                            </div>
                            <div className="flex items-center justify-between text-slate-700">
                              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-slate-500" /> Cancelados</span>
                              <strong className="font-mono">39 (9,75%)</strong>
                            </div>
                            <div className="flex items-center justify-between text-slate-700">
                              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-amber-500" /> Em Atendimento</span>
                              <strong className="font-mono">37 (9,25%)</strong>
                            </div>
                            <div className="flex items-center justify-between text-slate-700">
                              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-orange-500" /> Pendentes</span>
                              <strong className="font-mono">24 (6%)</strong>
                            </div>
                            <div className="flex items-center justify-between text-slate-700">
                              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-blue-500" /> Abertos</span>
                              <strong className="font-mono">16 (4%)</strong>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Visual 4: Volume e SLA por Categoria (Table matching Image 2) */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                        <h4 className="text-xs font-bold text-slate-900 mb-3">Volume e SLA por Categoria</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs text-left">
                            <thead className="bg-[#185a9d] text-white">
                              <tr>
                                <th className="py-2 px-3 font-semibold rounded-l-lg">Categoria</th>
                                <th className="py-2 px-3 font-semibold text-center">Volume</th>
                                <th className="py-2 px-3 font-semibold text-center">SLA</th>
                                <th className="py-2 px-3 font-semibold text-right rounded-r-lg">MTTR (h)</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {TICKET_FLOW_CATEGORIES.map((cat) => (
                                <tr key={cat.category} className="hover:bg-slate-50">
                                  <td className="py-2 px-3 font-medium text-slate-800">{cat.category}</td>
                                  <td className="py-2 px-3 text-center font-bold text-slate-900">{cat.volume}</td>
                                  <td className="py-2 px-3 text-center">
                                    <span className={`px-2 py-0.5 rounded font-bold ${
                                      cat.sla < 60 ? 'bg-red-100 text-red-700' : 'bg-blue-50 text-blue-700'
                                    }`}>
                                      {cat.sla}%
                                    </span>
                                  </td>
                                  <td className="py-2 px-3 text-right font-mono text-slate-700">{cat.mttr} h</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* =================================================================== */}
                {/* VIEW 3: ANÁLISE OPERACIONAL (IMAGE 3)                               */}
                {/* =================================================================== */}
                {activePanel === 'operacional' && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    
                    {/* The 5 Operational KPI Cards with Subtitles matching Image 3 */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-[#0c2340]">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">400</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">Total Chamados</div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-emerald-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">284</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-0.5">Chamados Resolvidos</div>
                        <div className="text-[10px] text-emerald-700 text-center font-mono mt-1 bg-emerald-50 rounded py-0.5">
                          Encerrado • 71,0% do total
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-amber-500">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">77</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-0.5">Chamados Backlog</div>
                        <div className="text-[10px] text-amber-700 text-center font-mono mt-1 bg-amber-50 rounded py-0.5">
                          Em andamento • 19,3% do total
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-rose-500">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">25</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-0.5">Chamados Reabertos</div>
                        <div className="text-[10px] text-rose-700 text-center font-mono mt-1 bg-rose-50 rounded py-0.5">
                          Atenção • 6,3% do total
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-amber-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">28,9 h</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-0.5">MTTR Médio</div>
                        <div className="text-[10px] text-amber-800 text-center font-mono mt-1 bg-amber-50 rounded py-0.5">
                          Horas • Tempo de resolução
                        </div>
                      </div>
                    </div>

                    {/* Operational Visuals Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                      
                      {/* Visual 1: Desempenho por Técnico Table (Matching Image 3) */}
                      <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 mb-3">Desempenho por Técnico</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left">
                              <thead className="bg-[#185a9d] text-white">
                                <tr>
                                  <th className="py-2 px-3 font-semibold rounded-l-lg">Nome Técnico</th>
                                  <th className="py-2 px-2 font-semibold">Nível</th>
                                  <th className="py-2 px-2 font-semibold text-center">Volume</th>
                                  <th className="py-2 px-2 font-semibold text-center">Resolvidos</th>
                                  <th className="py-2 px-3 font-semibold text-right rounded-r-lg">SLA</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {TICKET_FLOW_TECHNICIANS.map((tech) => (
                                  <tr key={tech.name} className="hover:bg-slate-50">
                                    <td className="py-2 px-3 font-semibold text-slate-800">{tech.name}</td>
                                    <td className="py-2 px-2 text-slate-600 font-mono text-[11px]">{tech.level}</td>
                                    <td className="py-2 px-2 text-center font-bold text-slate-900">{tech.volume}</td>
                                    <td className="py-2 px-2 text-center text-slate-700">{tech.resolved}</td>
                                    <td className="py-2 px-3 text-right">
                                      <span className={`inline-flex items-center gap-1 font-bold ${
                                        tech.statusSla === 'danger' ? 'text-rose-600' : 'text-amber-600'
                                      }`}>
                                        <TrendingDown className="w-3 h-3" />
                                        {tech.sla}%
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Visual 3: MTTR por Senioridade (bottom) */}
                        <div className="mt-6 pt-4 border-t border-slate-200">
                          <h5 className="text-xs font-bold text-slate-700 mb-2">MTTR (h) por Nível / Senioridade</h5>
                          <div className="grid grid-cols-3 gap-3 text-center">
                            {TICKET_FLOW_SENIORITY_MTTR.map(s => (
                              <div key={s.level} className="bg-slate-50 p-2 rounded-xl border border-slate-200">
                                <span className="text-[11px] font-semibold text-slate-500 block">{s.level}</span>
                                <strong className="text-base font-black text-blue-600">{s.mttr} h</strong>
                              </div>
                            ))}
                          </div>
                          <p className="text-[10px] text-slate-500 mt-2">
                            *Seniores com maior MTTR por absorverem incidentes críticos de dados sem triagem prévia.
                          </p>
                        </div>
                      </div>

                      {/* Visual 2: Visão de Carga de Trabalho por Status (Stacked Columns matching Image 3) */}
                      <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xs font-bold text-slate-900">Visão de Carga de Trabalho por Status</h4>
                            <div className="flex items-center gap-2 text-[10px]">
                              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Aberto</span>
                              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-700" /> Em Atend</span>
                              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> Pendente</span>
                            </div>
                          </div>

                          {/* Stacked Bars by Tech */}
                          <div className="h-64 flex items-end justify-between gap-2 pt-6 px-2 border-b border-slate-200">
                            {TICKET_FLOW_WORKLOAD.map((w) => {
                              const maxH = 14;
                              const hAberto = (w.aberto / maxH) * 100;
                              const hAtend = (w.emAtendimento / maxH) * 100;
                              const hPendente = (w.pendente / maxH) * 100;

                              return (
                                <div key={w.name} className="flex flex-col items-center flex-1 h-full justify-end">
                                  <span className="text-[10px] font-bold text-slate-900 mb-1">{w.total}</span>
                                  <div className="w-full max-w-[32px] rounded-t flex flex-col-reverse overflow-hidden">
                                    <div style={{ height: `${hAberto * 1.6}px` }} className="bg-emerald-500 w-full" />
                                    <div style={{ height: `${hAtend * 1.6}px` }} className="bg-[#185a9d] w-full" />
                                    <div style={{ height: `${hPendente * 1.6}px` }} className="bg-amber-400 w-full" />
                                  </div>
                                  <span className="text-[9px] font-semibold text-slate-600 truncate w-full text-center mt-2">
                                    {w.name.split(' ')[0]}
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900">
                            <strong>Gargalo Identificado:</strong> Helena Vieira e Bruno Souza acumulam a maior carga de chamados simultâneos (14 e 13 tickets), necessitando de rebalanceamento via ITIL.
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* =================================================================== */}
                {/* VIEW 4: ANÁLISE TEMPORAL (IMAGE 4)                                  */}
                {/* =================================================================== */}
                {activePanel === 'temporal' && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    
                    {/* The 4 Temporal KPI Cards of Image 4 */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-[#0c2340]">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">400</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">Total Chamados</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-blue-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">65,5%</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">% SLA</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-amber-600">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">28,9 h</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">MTTR Médio</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs border-l-4 border-l-amber-500">
                        <div className="text-2xl sm:text-3xl font-black text-slate-900 text-center">77</div>
                        <div className="text-xs font-semibold text-slate-600 text-center mt-1">Chamados Backlog</div>
                      </div>
                    </div>

                    {/* Temporal Charts 2x2 Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      
                      {/* Visual 1: Chamados por Turno */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xs font-bold text-slate-900">Chamados por Turno</h4>
                          <span className="text-[10px] text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                            53% Noite + Madrugada
                          </span>
                        </div>
                        <div className="space-y-3 pt-2">
                          {TICKET_FLOW_SHIFTS.map((shift) => (
                            <div key={shift.shift} className="space-y-1">
                              <div className="flex justify-between text-xs font-bold text-slate-700">
                                <span>{shift.shift}</span>
                                <span className="text-blue-600 font-black">{shift.count} ({shift.percent}%)</span>
                              </div>
                              <div className="h-5 bg-slate-100 rounded-md overflow-hidden">
                                <div 
                                  className="h-full bg-[#1880ff] rounded-md transition-all duration-500"
                                  style={{ width: `${(shift.count / 115) * 100}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Visual 2: Chamados por Dia da Semana */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                        <h4 className="text-xs font-bold text-slate-900 mb-3">Chamados por Dia da Semana</h4>
                        <div className="h-44 flex items-end justify-around gap-2 pb-2 border-b border-slate-200">
                          {TICKET_FLOW_WEEKDAYS.map((d) => (
                            <div key={d.day} className="flex flex-col items-center flex-1">
                              <span className="text-[11px] font-bold text-slate-900 mb-1">{d.count}</span>
                              <div 
                                className="w-full max-w-[36px] bg-[#1880ff] rounded-t-md transition-all duration-500"
                                style={{ height: `${(d.count / 70) * 120}px` }}
                              />
                              <span className="text-[10px] font-semibold text-slate-600 mt-2 truncate w-full text-center">
                                {d.day}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Visual 3: MTTR (h) por Mês */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xs font-bold text-slate-900">MTTR (h) por Mês (Pico Crítico em Dezembro)</h4>
                          <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                            Pico: 52,5 h
                          </span>
                        </div>
                        <div className="h-40 relative pt-2">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120">
                            {/* Points: Jan 30.0, Fev 27.4, Mar 36.6, Abr 19.8, Mai 28.6, Jun 34.4, Jul 21.0, Ago 35.1, Set 18.1, Out 37.6, Nov 20.1, Dez 52.5 */}
                            <polyline
                              fill="none"
                              stroke="#0080ff"
                              strokeWidth="2.5"
                              points="
                                20,60 60,67 100,43 140,88 180,63 220,48 260,84 300,47 340,92 380,41 420,86 460,10
                              "
                            />
                            {[
                              { x: 20, y: 60, val: '30,0h' },
                              { x: 60, y: 67, val: '27,4h' },
                              { x: 100, y: 43, val: '36,6h' },
                              { x: 140, y: 88, val: '19,8h' },
                              { x: 180, y: 63, val: '28,6h' },
                              { x: 220, y: 48, val: '34,4h' },
                              { x: 260, y: 84, val: '21,0h' },
                              { x: 300, y: 47, val: '35,1h' },
                              { x: 340, y: 92, val: '18,1h' },
                              { x: 380, y: 41, val: '37,6h' },
                              { x: 420, y: 86, val: '20,1h' },
                              { x: 460, y: 10, val: '52,5h' }
                            ].map((p, i) => (
                              <g key={i}>
                                <circle cx={p.x} cy={p.y} r="3" fill="#0080ff" />
                                <text x={p.x} y={p.y - 5} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0080ff">
                                  {p.val}
                                </text>
                              </g>
                            ))}
                          </svg>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 font-medium px-2 mt-2">
                          {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map(m => (
                            <span key={m}>{m}</span>
                          ))}
                        </div>
                      </div>

                      {/* Visual 4: Chamados por Fim de Semana vs Dia Útil */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                        <h4 className="text-xs font-bold text-slate-900 mb-3 text-center">
                          Chamados por Fim de Semana vs Dia Útil
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                          <div className="relative w-36 h-36 mx-auto">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                              {/* 71.5% Dia Útil (dark navy), 28.5% Fim de semana (light blue) */}
                              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#0f2744" strokeWidth="18" strokeDasharray="220" strokeDashoffset="0" />
                              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#38bdf8" strokeWidth="18" strokeDasharray="220" strokeDashoffset="157" />
                            </svg>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                              <div className="flex items-center justify-between text-slate-700">
                                <span className="flex items-center gap-1.5 font-bold">
                                  <span className="w-2.5 h-2.5 rounded bg-[#0f2744]" /> Não (Dia Útil)
                                </span>
                                <strong className="font-mono text-[#0f2744]">286 (71,5%)</strong>
                              </div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                              <div className="flex items-center justify-between text-blue-950">
                                <span className="flex items-center gap-1.5 font-bold">
                                  <span className="w-2.5 h-2.5 rounded bg-[#38bdf8]" /> Sim (Fim de Semana)
                                </span>
                                <strong className="font-mono text-blue-700">114 (28,5%)</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </main>
            </div>
          )}

          {/* Bottom Consultation CTA Bar inside the dashboard container */}
          <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-700">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <strong className="text-slate-900 block">Deseja implementar uma Torre de Controle como essa na sua empresa?</strong>
                <span className="text-slate-500">Desenvolvemos o Star Schema, DAX e pipelines de dados no Microsoft Power BI com governança ITIL.</span>
              </div>
            </div>
            <a
              href="#contato"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs shrink-0 text-center"
            >
              Solicitar Consultoria para Meu Dashboard
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
