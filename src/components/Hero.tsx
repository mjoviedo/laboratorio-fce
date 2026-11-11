import React from 'react';
import { LAB_IMAGES } from '../data/labData';
import { ArrowRight, Compass, Sparkles, BookMarked } from 'lucide-react';

interface HeroProps {
  onOpenProposal: (type: 'proyecto' | 'taller') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProposal }) => {
  return (
    <section className="relative pt-8 pb-16 border-b border-stone-200 bg-linear-to-b from-stone-100/60 to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Institutional Kicker & Badges without pill enclosures (§1.A Zero-Pill) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4 text-stone-600">
          <span className="font-heading font-bold text-[#B5121B]">FACULTAD DE CIENCIAS ECONÓMICAS</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="font-heading font-semibold text-stone-800">UNIVERSIDAD NACIONAL DE CÓRDOBA</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-[#005360] font-bold">ESPACIO DE EXPERIMENTACIÓN PÚBLICA</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Text & Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-950 tracking-tight leading-[1.12] text-balance">
                Laboratorio <span className="text-[#B5121B]">I.D.E.A.</span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-700 font-heading font-medium leading-relaxed">
                Espacio de articulación y encuentro para la Investigación, Docencia, Extensión y el Ámbito profesional
              </p>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl text-justify">
                Aportar a la mejora e intercambio de y desde la Universidad Pública en todas sus funciones, a partir de la reflexión, experimentación y desarrollo a través del uso de herramientas tecnológicas, inteligencia artificial e instrumentos de vanguardia académica, pedagógica y profesional.
              </p>
            </div>

            {/* Specific Objectives Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white border border-stone-200 rounded-xl space-y-1 shadow-2xs hover:border-[#005360] transition-colors">
                <span className="text-xs font-heading font-bold text-stone-900 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#005360]" />
                  Cruce Transdisciplinar
                </span>
                <p className="text-xs text-stone-600 leading-snug">
                  Experimentación y desarrollo en la intersección de Ciencias Económicas, tecnologías mediales y otras disciplinas.
                </p>
              </div>

              <div className="p-3.5 bg-white border border-stone-200 rounded-xl space-y-1 shadow-2xs hover:border-[#B5121B] transition-colors">
                <span className="text-xs font-heading font-bold text-stone-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B5121B]" />
                  Sinergias Interclaustro
                </span>
                <p className="text-xs text-stone-600 leading-snug">
                  Dinámicas colaborativas horizontales entre docentes, estudiantes, no docentes y graduados en sintonía con la UNC.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#proyectos"
                className="px-5 py-2.5 bg-[#B5121B] hover:bg-[#670000] text-white rounded-lg text-xs font-heading font-bold transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>Ver Proyectos & Prototipos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#hackday-destacado"
                className="px-4 py-2.5 bg-white border border-stone-300 text-stone-800 rounded-lg text-xs font-heading font-bold hover:border-[#B5121B] hover:text-[#B5121B] transition-colors flex items-center gap-1.5"
              >
                <span>Próximo Hackday (18 Nov)</span>
              </a>

              <button
                onClick={() => onOpenProposal('proyecto')}
                className="px-4 py-2.5 text-stone-700 hover:text-[#B5121B] text-xs font-heading font-bold hover:underline transition-colors"
              >
                + Proponer un proyecto
              </button>
            </div>
          </div>

          {/* Right: Editorial Image & Curatorial Caption */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-200 shadow-sm relative grow flex flex-col justify-end">
              <img
                src={LAB_IMAGES.workspace}
                alt="Laboratorio IDEA en la Facultad de Ciencias Económicas UNC"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-96 lg:h-full object-cover"
              />
              <div className="p-4 bg-linear-to-t from-stone-950/90 via-stone-950/60 to-transparent text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-300 block mb-0.5">
                  Espacio Físico & Comunidad Activa
                </span>
                <p className="text-xs text-stone-200 leading-snug">
                  Cultura libre, software abierto y prototipado rápido en las instalaciones de la FCE Ciudad Universitaria, Córdoba.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Ribbon below Hero */}
        <div className="mt-10 pt-6 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-600">
          <div>
            <span className="block font-mono text-[11px] text-stone-400 uppercase">Ubicación</span>
            <span className="font-medium text-stone-800">Planta Baja FCE, Ciudad Universitaria</span>
          </div>
          <div>
            <span className="block font-mono text-[11px] text-stone-400 uppercase">Filosofía</span>
            <span className="font-medium text-stone-800">Cultura libre & Software abierto</span>
          </div>
          <div>
            <span className="block font-mono text-[11px] text-stone-400 uppercase">Articulaciones</span>
            <span className="font-medium text-stone-800">Biblioteca, FyPE, Sistemas, Artes & IDECOR</span>
          </div>
          <div>
            <span className="block font-mono text-[11px] text-stone-400 uppercase">Inspiración</span>
            <span className="font-medium text-stone-800 flex items-center gap-1">
              <BookMarked className="w-3.5 h-3.5 text-stone-400" /> Medialabs & Hackerspaces mundiales
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
