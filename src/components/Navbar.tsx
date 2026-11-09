import React, { useState, useEffect } from 'react';
import { Layers, Activity, ShieldCheck, BarChart3, Menu, X, ArrowUpRight, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDiagnostic: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnostic, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          id="nav-brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center p-0.5 shadow-md shadow-blue-600/20 group-hover:shadow-blue-600/30 transition-all">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Layers className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-1.5">
              SYNAPSE <span className="text-blue-600 font-extrabold">TI</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">
              Consultoria & Governança
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          <button
            onClick={() => scrollTo('pilares')}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer py-1"
          >
            Soluções & Pilares
          </button>

          <button
            onClick={() => scrollTo('case-dashboard')}
            className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center gap-1.5 bg-blue-50/90 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200/80 cursor-pointer shadow-2xs"
          >
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span>Case & Resultados</span>
          </button>
          
          <button
            onClick={() => scrollTo('metodologia')}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer py-1"
          >
            Metodologia
          </button>

          <button
            onClick={() => scrollTo('diagnostico')}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1.5 py-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Diagnóstico</span>
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="nav-btn-diagnostic-quick"
            onClick={onOpenDiagnostic}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3.5 py-2 rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
          >
            Testar Maturidade
          </button>
          <button
            id="nav-btn-contact-primary"
            onClick={onOpenContact}
            className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm shadow-blue-600/20 hover:shadow-blue-600/30 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Fale com Especialista</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            id="nav-btn-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-white border border-slate-200 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollTo('pilares')}
              className="text-left py-2 text-slate-700 hover:text-blue-600 font-medium text-base border-b border-slate-100"
            >
              Soluções & Pilares
            </button>
            <button
              onClick={() => scrollTo('case-dashboard')}
              className="text-left py-2 text-blue-700 font-semibold text-base flex items-center gap-2 border-b border-slate-100"
            >
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span>Case & Resultados</span>
            </button>
            <button
              onClick={() => scrollTo('metodologia')}
              className="text-left py-2 text-slate-700 hover:text-blue-600 font-medium text-base border-b border-slate-100"
            >
              Metodologia de Implantação
            </button>
            <button
              onClick={() => scrollTo('diagnostico')}
              className="text-left py-2 text-slate-700 hover:text-blue-600 font-medium text-base border-b border-slate-100 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Diagnóstico de Maturidade de TI
            </button>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiagnostic();
                }}
                className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm text-center bg-slate-50"
              >
                Fazer Diagnóstico Rápido
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm text-center shadow-md shadow-blue-600/20"
              >
                Agendar Reunião com Consultor
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
