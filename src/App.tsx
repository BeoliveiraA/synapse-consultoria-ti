/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { MethodologySection } from './components/MethodologySection';
import { CaseStudyDashboard } from './components/CaseStudyDashboard';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PillarId } from './types';

export default function App() {
  const [selectedPillarForContact, setSelectedPillarForContact] = useState<PillarId | null>(null);
  const [diagnosticResult, setDiagnosticResult] = useState<{
    score: number;
    level: string;
    summary: string;
  } | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPillarForContact = (pillarId: PillarId) => {
    setSelectedPillarForContact(pillarId);
    scrollTo('contato');
  };

  const handleApplyDiagnosticToContact = (score: number, level: string, summary: string) => {
    setDiagnosticResult({ score, level, summary });
    scrollTo('contato');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenDiagnostic={() => scrollTo('diagnostico')}
        onOpenContact={() => scrollTo('contato')}
      />

      {/* Main Content Sections - Estrutura Padrão Ouro de Consultoria B2B */}
      <main className="flex-1">
        {/* 1. Hero: Posicionamento Estratégico, CTAs e Prêmios de Mercado */}
        <Hero
          onScrollToCase={() => scrollTo('case-dashboard')}
          onScrollToDiagnostic={() => scrollTo('diagnostico')}
          onScrollToContact={() => scrollTo('contato')}
        />

        {/* 2. Soluções & Especialistas: Os 5 Pilares de Atuação com Certificações Oficiais */}
        <PillarsSection
          onSelectPillarForContact={handleSelectPillarForContact}
        />

        {/* 3. Prova Real & Resultados: Case de Sucesso & Dashboard Power BI Interativo */}
        <CaseStudyDashboard />

        {/* 4. Como Trabalhamos: Metodologia Comprovada em 5 Fases Sem Risco de Parada */}
        <MethodologySection />

        {/* 5. Autoavaliação do Cliente: Diagnóstico de Maturidade de TI em 2 Minutos */}
        <DiagnosticQuiz
          onApplyDiagnosticToContact={handleApplyDiagnosticToContact}
        />

        {/* 6. Fechamento & Conversão: Contato Direto com Consultores Sêniores */}
        <ContactSection
          selectedPillar={selectedPillarForContact}
          diagnosticResult={diagnosticResult}
        />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

