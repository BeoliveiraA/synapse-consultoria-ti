import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../data/mockData';
import { PillarId } from '../types';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  ShieldAlert, 
  Award, 
  BarChart, 
  Send,
  HelpCircle
} from 'lucide-react';

interface DiagnosticQuizProps {
  onApplyDiagnosticToContact: (score: number, level: string, summary: string) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ onApplyDiagnosticToContact }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, { score: number; text: string }>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentStep];

  const handleSelectOption = (questionId: number, score: number, text: string) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: { score, text }
    };
    setAnswers(updatedAnswers);

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      // Trigger festive celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback if confetti isn't supported
      }
    }
  };

  // Calculate final score
  const totalQuestions = DIAGNOSTIC_QUESTIONS.length;
  const answeredScores = Object.values(answers).map((a) => a.score);
  const sumScores = answeredScores.reduce((acc, curr) => acc + curr, 0);
  // Max possible score is totalQuestions * 4
  const maxScore = totalQuestions * 4;
  const percentage = Math.round((sumScores / maxScore) * 100);

  let maturityLevel = 'Nível 1: Inicial / Caótico';
  let levelColor = 'text-red-400';
  let levelDescription = 'A TI opera de forma reativa, sem processos documentados e com apagamento constante de incêndios. Grande risco operacional e de segurança.';
  
  if (percentage >= 85) {
    maturityLevel = 'Nível 5: Otimizado & Data-Driven';
    levelColor = 'text-emerald-400';
    levelDescription = 'Operação madura, com ITIL 4, Scrum, governança sólida e decisões baseadas em Power BI em tempo real. Foco em inovação contínua.';
  } else if (percentage >= 65) {
    maturityLevel = 'Nível 4: Gerenciado & Quantitativo';
    levelColor = 'text-cyan-400';
    levelDescription = 'Processos estruturados e com boa governança. Oportunidade imediata de aprofundar métricas analíticas e automações em Power BI.';
  } else if (percentage >= 45) {
    maturityLevel = 'Nível 3: Definido / Intermediário';
    levelColor = 'text-blue-400';
    levelDescription = 'Existem iniciativas de organização, mas falta integração entre ITIL, squads ágeis e blindagem de segurança (ISO 27001).';
  } else if (percentage >= 25) {
    maturityLevel = 'Nível 2: Emergente / Fragmentado';
    levelColor = 'text-amber-400';
    levelDescription = 'Controles isolados e manuais. As áreas de negócio sofrem com demora no atendimento e a diretoria não tem visibilidade.';
  }

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const handleSendToContact = () => {
    onApplyDiagnosticToContact(percentage, maturityLevel, levelDescription);
  };

  return (
    <section id="diagnostico" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Avaliação Rápida em 2 Minutos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Qual é o grau de maturidade da TI da sua empresa?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Responda 5 perguntas práticas sobre ITIL, Scrum, Segurança, Governança e BI para 
            receber uma análise instantânea dos seus gargalos operacionais.
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <div className="bg-slate-50/90 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {!isCompleted ? (
            <div>
              {/* Progress Bar & Header */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                <span>Pergunta {currentStep + 1} de {totalQuestions}</span>
                <span className="font-semibold text-blue-600 uppercase tracking-wider">
                  Pilar: {currentQuestion.pillar.toUpperCase()}
                </span>
              </div>

              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-8">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Options Grid */}
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    id={`opt-diag-${currentQuestion.id}-${idx}`}
                    onClick={() => handleSelectOption(currentQuestion.id, opt.score, opt.text)}
                    className="w-full p-4 rounded-2xl bg-white hover:bg-blue-50/40 border border-slate-200 hover:border-blue-400 text-left transition-all group flex items-start gap-4 cursor-pointer shadow-xs"
                  >
                    <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-slate-900 leading-relaxed">
                        {opt.text}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {opt.explanation}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Footer */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-200">
                <span>Passo {currentStep + 1} de {totalQuestions}</span>
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-blue-600 hover:text-blue-700 font-medium underline cursor-pointer"
                  >
                    ← Voltar pergunta anterior
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Result Panel */
            <div className="space-y-6 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 mx-auto flex items-center justify-center shadow-md">
                <Award className="w-8 h-8 text-white" />
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">
                  Diagnóstico de Maturidade Concluído
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                  Pontuação: <span className="text-blue-600">{percentage}%</span>
                </h3>
                <div className="text-lg font-bold text-slate-900 mb-3">
                  {maturityLevel}
                </div>
                <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                  {levelDescription}
                </p>
              </div>

              {/* Action Plan Suggestions */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 text-left space-y-3 max-w-xl mx-auto shadow-xs">
                <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Recomendações Imediatas da Consultoria Synapse TI:
                </h4>
                <div className="text-xs text-slate-700 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Implantar catálogo unificado e SLAs no Service Desk (ITIL v4) para acabar com atendimentos informais.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Adequar a infraestrutura aos controles da ISO 27001 e MFA contra vazamento de dados.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Conectar dados de chamados, custos e servidores em um Dashboard Executivo no Microsoft Power BI.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  id="btn-diagnostic-send-contact"
                  onClick={handleSendToContact}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Diagnóstico e Falar com Consultor</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Refazer Teste</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
