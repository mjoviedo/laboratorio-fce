import React from 'react';
import { METHODOLOGY_STEPS } from '../data/labData';
import { GitBranch, RefreshCw, Users, CheckCircle, Terminal } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section id="metodologia" className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5121B]">
            Forma de Trabajo & Cultura Ágil
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-950 tracking-tight">
            Metodología de Desarrollo en 4 Pasos
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Frente a los plazos dilatados y la rigidez de los proyectos burocráticos tradicionales, el Laboratorio IDEA implementa un ciclo de iteración rápida inspirado en metodologías ágiles y los principios de la cultura hacker universitaria.
          </p>
        </div>

        {/* 4 Agile Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-stone-50 border border-stone-200 rounded-xl space-y-4 text-left flex flex-col justify-between hover:border-[#B5121B] transition-colors shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-extrabold text-[#B5121B] font-mono">
                    {step.step}
                  </span>
                  <span className="text-xs font-mono text-[#005360] bg-white px-2 py-0.5 rounded border border-stone-200 font-bold">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-base font-heading font-bold text-stone-900">
                  {step.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200 text-xs">
                <span className="font-heading font-bold text-stone-800 block text-[11px] uppercase tracking-wider mb-1">
                  Entregable Clave:
                </span>
                <span className="text-stone-600 text-xs">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Agile Core Pillars Strip */}
        <div className="p-6 bg-[#005360] text-white rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left shadow-xs">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#FFD200] font-heading font-bold text-xs">
              <RefreshCw className="w-4 h-4" />
              <span>Sprints de 2 a 4 semanas</span>
            </div>
            <p className="text-xs text-stone-200 leading-relaxed">
              Objetivos acotados y entregables tangibles para evaluar rápidamente la viabilidad técnica.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#FFD200] font-heading font-bold text-xs">
              <Users className="w-4 h-4" />
              <span>Equipos Interclaustro</span>
            </div>
            <p className="text-xs text-stone-200 leading-relaxed">
              Estudiantes, no docentes, profesores e investigadores cooperando horizontalmente sin jerarquías rígidas.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#FFD200] font-heading font-bold text-xs">
              <Terminal className="w-4 h-4" />
              <span>Cultura Libre y Abierta</span>
            </div>
            <p className="text-xs text-stone-200 leading-relaxed">
              Repositorios públicos bajo licencias GNU/GPL y MIT; el software público debe permanecer público.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#FFD200] font-heading font-bold text-xs">
              <GitBranch className="w-4 h-4" />
              <span>Control de Versiones Git</span>
            </div>
            <p className="text-xs text-stone-200 leading-relaxed">
              Documentación reproducible, seguimiento de cambios y colaboración asíncrona permanente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
