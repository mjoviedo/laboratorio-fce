import React from 'react';
import { ArrowUp, BookOpen, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <span className="font-heading font-bold text-xl tracking-tight">Laboratorio</span>
              <span className="font-heading font-extrabold text-xs px-2 py-0.5 bg-[#B5121B] text-white rounded tracking-widest shadow-2xs">
                I.D.E.A.
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Espacio de articulación y encuentro para la Investigación, Docencia, Extensión y el Ámbito profesional. Radicado en la Facultad de Ciencias Económicas, Universidad Nacional de Córdoba.
            </p>
            <div className="text-xs text-stone-400 space-y-0.5 pt-1 font-mono">
              <p>Bv. Enrique Barros s/n, Ciudad Universitaria</p>
              <p>X5000 Córdoba, República Argentina</p>
            </div>
          </div>

          {/* Col 2: Articulaciones Institucionales */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD200]">
              Articulaciones FCE & UNC
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <span className="hover:text-[#FFD200] transition-colors cursor-pointer">
                  Biblioteca Manuel Belgrano (FCE)
                </span>
              </li>
              <li>
                <span className="hover:text-[#FFD200] transition-colors cursor-pointer">
                  Área de Formación y Perfeccionamiento Docente (FyPE)
                </span>
              </li>
              <li>
                <span className="hover:text-[#FFD200] transition-colors cursor-pointer">
                  Red de Galerías y Patrimonio FCE
                </span>
              </li>
              <li>
                <span className="hover:text-[#FFD200] transition-colors cursor-pointer">
                  Medialab Facultad de Artes UNC
                </span>
              </li>
              <li>
                <span className="hover:text-[#FFD200] transition-colors cursor-pointer">
                  Oficina de Conocimiento Abierto UNC & IDECOR
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Secciones & Acceso Rápido */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD200]">
              Secciones
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <a href="#lineas-ejes" className="hover:text-[#FFD200] transition-colors">
                  Líneas & Ejes Estratégicos
                </a>
              </li>
              <li>
                <a href="#actividades" className="hover:text-[#FFD200] transition-colors">
                  Conferencias, Talleres & Hackdays
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-[#FFD200] transition-colors">
                  Proyectos & Prototipos Interactivos
                </a>
              </li>
              <li>
                <a href="#articulos" className="hover:text-[#FFD200] transition-colors">
                  Cuadernos y Artículos Abiertos
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#FFD200] transition-colors">
                  Metodología Ágil
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span>Universidad Pública, Gratuita e Irrestricta · UNC</span>
            <span aria-hidden="true">·</span>
            <span>Cultura Libre y Software Abierto</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
