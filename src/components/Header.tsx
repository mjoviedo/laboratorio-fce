import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenProposal: (type: 'proyecto' | 'taller') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProposal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 nav links) — Zone 3 (1 primary action) */}
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand title wordmark */}
          <a
            href="#"
            className="text-lg tracking-tight text-stone-900 whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="font-heading font-bold text-xl tracking-tight text-stone-950">Laboratorio</span>
            <span className="font-heading font-extrabold text-xs px-2 py-0.5 bg-[#B5121B] text-white rounded tracking-widest shadow-2xs">
              I.D.E.A.
            </span>
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-600">
            <a
              href="#lineas-ejes"
              className="hover:text-[#B5121B] transition-colors whitespace-nowrap shrink-0"
            >
              Líneas & Ejes
            </a>
            <a
              href="#actividades"
              className="hover:text-[#B5121B] transition-colors whitespace-nowrap shrink-0"
            >
              Actividades
            </a>
            <a
              href="#proyectos"
              className="hover:text-[#B5121B] transition-colors whitespace-nowrap shrink-0"
            >
              Proyectos
            </a>
            <a
              href="#articulos"
              className="hover:text-[#B5121B] transition-colors whitespace-nowrap shrink-0"
            >
              Artículos
            </a>
            <a
              href="#metodologia"
              className="hover:text-[#B5121B] transition-colors whitespace-nowrap shrink-0"
            >
              Metodología
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenProposal('proyecto')}
              className="px-4 py-2 text-xs font-bold text-white bg-[#B5121B] hover:bg-[#670000] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              Proponer Proyecto
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenProposal('proyecto')}
              className="px-3 py-1.5 text-xs font-medium text-white bg-stone-900 rounded-md"
            >
              Proponer
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 rounded-lg"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3">
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-stone-700">
            <a
              href="#lineas-ejes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Líneas & Ejes de Trabajo
            </a>
            <a
              href="#actividades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Actividades (Conferencias, Talleres, Hackdays)
            </a>
            <a
              href="#proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Proyectos en Curso & Prototipos
            </a>
            <a
              href="#articulos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Artículos & Publicaciones
            </a>
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Metodología Ágil
            </a>
            <a
              href="#referencias"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Referencias Internacionales
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
