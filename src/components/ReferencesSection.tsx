import React from 'react';
import { REFERENCE_SPACES } from '../data/labData';
import { ExternalLink, Globe, Landmark } from 'lucide-react';

export const ReferencesSection: React.FC = () => {
  return (
    <section id="referencias" className="py-16 border-b border-stone-200 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5121B]">
            Red de Inspiración & Precedentes Universitarios
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-950 tracking-tight">
            Medialabs & Hackerspaces Académicos de Referencia
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            El Laboratorio IDEA se inscribe en la tradición global de laboratorios de innovación abierta radicados en universidades públicas y centros de investigación.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REFERENCE_SPACES.map((ref, idx) => (
            <a
              key={idx}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white border border-stone-200 rounded-xl hover:border-[#B5121B] transition-all text-left group flex flex-col justify-between space-y-3 shadow-2xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1 font-mono uppercase font-bold text-[#005360]">
                    <Landmark className="w-3.5 h-3.5 text-[#005360]" />
                    Espacio Académico
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#B5121B] transition-colors" />
                </div>

                <h3 className="text-base font-heading font-bold text-stone-900 group-hover:text-[#B5121B] transition-colors">
                  {ref.name}
                </h3>

                <p className="text-xs font-medium text-stone-500">
                  {ref.institution}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  {ref.notes}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-400 group-hover:text-[#B5121B] flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span className="truncate">{ref.url.replace('https://', '')}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
