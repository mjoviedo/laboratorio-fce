import React, { useState } from 'react';
import { WORK_LINES, WORK_AXES } from '../data/labData';
import { WorkAxis, WorkLine } from '../types';
import { Layers, Compass, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface LinesAndAxesProps {
  selectedAxis: WorkAxis | 'Todos';
  onSelectAxis: (axis: WorkAxis | 'Todos') => void;
  selectedLine: WorkLine | 'Todas';
  onSelectLine: (line: WorkLine | 'Todas') => void;
}

export const LinesAndAxes: React.FC<LinesAndAxesProps> = ({
  selectedAxis,
  onSelectAxis,
  selectedLine,
  onSelectLine
}) => {
  const [activeTab, setActiveTab] = useState<'lineas' | 'ejes' | 'principios'>('lineas');

  const principles = [
    {
      title: 'Prototipos rápidos vs. estructuras rígidas',
      desc: 'Centra la actividad en proyectos concretos y dinámicos, valorando iteraciones de mejora continua frente a burocracias sobrediseñadas.'
    },
    {
      title: 'Valor experimental',
      desc: 'Los objetivos o beneficios de las propuestas no necesariamente deben estar claros desde el inicio ni fijarse en el corto plazo; la incertidumbre es motor del aprendizaje.'
    },
    {
      title: 'Transdisciplina radical',
      desc: 'Cruce entre tecnologías mediales, ciencias económicas, pedagogía, artes, ingeniería, comunicación, bibliotecología y ciencias sociales.'
    },
    {
      title: 'Creatividad frente al imperativo de novedad',
      desc: 'En tiempos de consumo acrítico de "última tecnología", el laboratorio rescata la reutilización creativa de hardware y software ya existente.'
    },
    {
      title: 'Cultura libre & soberanía pública',
      desc: 'Defensa activa del software libre, hardware abierto, documentación transparente y licenciamiento que impida la privatización del conocimiento universitario.'
    },
    {
      title: 'Metodologías ágiles & Hackdays',
      desc: 'Dinámicas horizontales, tableros visuales abiertos y convocatorias periódicas a jornadas intensivas interclaustro.'
    }
  ];

  return (
    <section id="lineas-ejes" className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5121B]">
              Marco de Acción Estratégico
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-950 tracking-tight">
              Líneas, Ejes & Principios Fundacionales
            </h2>
            <p className="text-sm text-stone-600">
              El laboratorio articula las cuatro funciones históricas de la Universidad Pública mediante 5 líneas de acción y 5 ejes temáticos transversales.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex p-1 bg-stone-100 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab('lineas')}
              className={`px-3 py-1.5 text-xs font-heading font-bold rounded-md transition-colors ${
                activeTab === 'lineas'
                  ? 'bg-[#B5121B] text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Líneas de Trabajo (5)
            </button>
            <button
              onClick={() => setActiveTab('ejes')}
              className={`px-3 py-1.5 text-xs font-heading font-bold rounded-md transition-colors ${
                activeTab === 'ejes'
                  ? 'bg-[#B5121B] text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ejes Temáticos (5)
            </button>
            <button
              onClick={() => setActiveTab('principios')}
              className={`px-3 py-1.5 text-xs font-heading font-bold rounded-md transition-colors ${
                activeTab === 'principios'
                  ? 'bg-[#B5121B] text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Principios Guía
            </button>
          </div>
        </div>

        {/* TAB 1: Líneas de Trabajo */}
        {activeTab === 'lineas' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WORK_LINES.map((l, index) => {
                const isSelected = selectedLine === l.name;
                return (
                  <div
                    key={l.name}
                    onClick={() => onSelectLine(isSelected ? 'Todas' : (l.name as WorkLine))}
                    className={`p-5 rounded-xl border transition-all text-left cursor-pointer flex flex-col justify-between space-y-4 ${
                      isSelected
                        ? 'border-[#B5121B] bg-stone-900 text-white shadow-sm'
                        : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 hover:border-[#B5121B]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-mono uppercase tracking-wider ${isSelected ? 'text-[#FFD200]' : 'text-stone-400'}`}>
                          Línea 0{index + 1}
                        </span>
                        {isSelected && (
                          <span className="text-[11px] font-heading font-bold flex items-center gap-1 text-[#FFD200]">
                            <Check className="w-3.5 h-3.5" /> Filtro activo
                          </span>
                        )}
                      </div>
                      <h3 className={`text-base font-heading font-bold ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                        {l.name}
                      </h3>
                      <p className={`text-xs leading-relaxed ${isSelected ? 'text-stone-200' : 'text-stone-600'}`}>
                        {l.description}
                      </p>
                    </div>

                    <div className={`pt-3 border-t text-[11px] ${isSelected ? 'border-stone-800 text-stone-300' : 'border-stone-200 text-stone-500'}`}>
                      <strong>Foco:</strong> {l.focus}
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedLine !== 'Todas' && (
              <div className="flex items-center justify-between p-3 bg-stone-100 rounded-lg text-xs text-stone-700">
                <span>Filtrando proyectos y actividades por la línea: <strong className="text-[#B5121B]">{selectedLine}</strong></span>
                <button
                  onClick={() => onSelectLine('Todas')}
                  className="text-[#B5121B] underline font-bold hover:text-[#670000]"
                >
                  Quitar filtro
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Ejes Temáticos */}
        {activeTab === 'ejes' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {WORK_AXES.map((axis) => {
                const isSelected = selectedAxis === axis.name;
                // Palette mapping for the 5 axes:
                const axisColorMap: Record<string, { bg: string; border: string; accent: string }> = {
                  'Economía': { bg: 'bg-[#005360]', border: 'border-[#005360]', accent: 'text-[#005360]' },
                  'Tecnología': { bg: 'bg-[#00B7CE]', border: 'border-[#00B7CE]', accent: 'text-[#00B7CE]' },
                  'Educación': { bg: 'bg-[#B5121B]', border: 'border-[#B5121B]', accent: 'text-[#B5121B]' },
                  'Trabajo': { bg: 'bg-[#F37321]', border: 'border-[#F37321]', accent: 'text-[#F37321]' },
                  'Artes mediales': { bg: 'bg-[#551E41]', border: 'border-[#551E41]', accent: 'text-[#551E41]' }
                };
                const colorConfig = axisColorMap[axis.name] || { bg: 'bg-[#B5121B]', border: 'border-[#B5121B]', accent: 'text-[#B5121B]' };

                return (
                  <div
                    key={axis.name}
                    onClick={() => onSelectAxis(isSelected ? 'Todos' : (axis.name as WorkAxis))}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? `${colorConfig.bg} text-white shadow-xs ${colorConfig.border}`
                        : 'border-stone-200 bg-stone-50/50 hover:border-stone-400 hover:bg-stone-50'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-mono uppercase ${isSelected ? 'text-[#FFD200]' : colorConfig.accent}`}>
                          Eje Temático
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#FFD200]" />}
                      </div>
                      <h4 className={`text-base font-heading font-extrabold ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                        {axis.name}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isSelected ? 'text-stone-100' : 'text-stone-600'}`}>
                        {axis.tagline}
                      </p>
                    </div>

                    <div className={`mt-4 pt-2 border-t text-[11px] font-medium flex items-center gap-1 ${isSelected ? 'border-white/20 text-stone-100' : 'border-stone-200 text-stone-700'}`}>
                      <span>Ver proyectos</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedAxis !== 'Todos' && (
              <div className="flex items-center justify-between p-3 bg-stone-100 rounded-lg text-xs text-stone-700">
                <span>Filtrando contenidos por el eje temático: <strong className="text-[#B5121B]">{selectedAxis}</strong></span>
                <button
                  onClick={() => onSelectAxis('Todos')}
                  className="text-[#B5121B] underline font-bold hover:text-[#670000]"
                >
                  Quitar filtro
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Principios Guía */}
        {activeTab === 'principios' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-2 text-left"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-stone-800 shrink-0" />
                  <h4 className="text-sm font-semibold text-stone-900">
                    {pr.title}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
