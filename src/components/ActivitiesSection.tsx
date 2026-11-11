import React, { useState } from 'react';
import { CONFERENCES, NEXT_HACKDAY, WORKSHOPS, LAB_IMAGES } from '../data/labData';
import { Conference, Workshop, WorkAxis } from '../types';
import { Calendar, Clock, MapPin, User, ArrowRight, PlusCircle, CheckCircle2 } from 'lucide-react';

interface ActivitiesSectionProps {
  onSelectConference: (conf: Conference) => void;
  onSelectWorkshop: (ws: Workshop) => void;
  onOpenProposal: (type: 'proyecto' | 'taller') => void;
  selectedAxis: WorkAxis | 'Todos';
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  onSelectConference,
  onSelectWorkshop,
  onOpenProposal,
  selectedAxis
}) => {
  const [hackdaySignedUp, setHackdaySignedUp] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'todos' | 'conferencias' | 'talleres' | 'hackdays'>('todos');

  const filteredConferences = CONFERENCES.filter(
    (c) => selectedAxis === 'Todos' || c.axis === selectedAxis
  );

  const filteredWorkshops = WORKSHOPS.filter(
    (w) => selectedAxis === 'Todos' || w.axis === selectedAxis
  );

  const handleHackdaySignup = (projectId: string) => {
    setHackdaySignedUp(projectId);
    setTimeout(() => {
      // Keep confirmation visible
    }, 4000);
  };

  return (
    <section id="actividades" className="py-16 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading & Sub-filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5121B]">
              Agenda Abierta 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-950 tracking-tight">
              Actividades, Formación & Hackdays
            </h2>
            <p className="text-sm text-stone-600">
              Espacios de encuentro, conferencias con especialistas, talleres de habilidades prácticas y hackatones para construir prototipos en equipo.
            </p>
          </div>

          {/* Sub filter buttons */}
          <div className="flex p-1 bg-white border border-stone-200 rounded-lg shrink-0">
            <button
              onClick={() => setActiveFilter('todos')}
              className={`px-3 py-1.5 text-xs font-heading font-bold rounded-md transition-colors ${
                activeFilter === 'todos' ? 'bg-[#B5121B] text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ver Todo
            </button>
            <button
              onClick={() => setActiveFilter('conferencias')}
              className={`px-3 py-1.5 text-xs font-heading font-bold rounded-md transition-colors ${
                activeFilter === 'conferencias' ? 'bg-[#B5121B] text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Conferencias ({filteredConferences.length})
            </button>
            <button
              onClick={() => setActiveFilter('talleres')}
              className={`px-3 py-1.5 text-xs font-heading font-bold rounded-md transition-colors ${
                activeFilter === 'talleres' ? 'bg-[#B5121B] text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Talleres ({filteredWorkshops.length})
            </button>
            <button
              onClick={() => setActiveFilter('hackdays')}
              className={`px-3 py-1.5 text-xs font-heading font-bold rounded-md transition-colors ${
                activeFilter === 'hackdays' ? 'bg-[#B5121B] text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Próximo Hackday
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESTACADO PRINCIPAL: HACKDAY */}
        {/* ========================================================================= */}
        {(activeFilter === 'todos' || activeFilter === 'hackdays') && (
          <div id="hackday-destacado" className="border-2 border-[#B5121B]/30 rounded-2xl overflow-hidden bg-white shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Hackday info */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="font-heading font-extrabold text-[#670000] bg-[#FFD200] px-2.5 py-0.5 rounded shadow-2xs">
                      DESTACADO: JORNADA ABIERTA
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-700 font-bold">{NEXT_HACKDAY.edition}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-950 leading-snug">
                    Hackday IDEA: Jornada de trabajo sobre proyectos en curso
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {NEXT_HACKDAY.description}
                  </p>
                </div>

                {/* Key metadata points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#B5121B] shrink-0" />
                    <span><strong>Fecha:</strong> {NEXT_HACKDAY.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#005360] shrink-0" />
                    <span><strong>Horario:</strong> {NEXT_HACKDAY.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F37321] shrink-0" />
                    <span><strong>Sede:</strong> {NEXT_HACKDAY.location}</span>
                  </div>
                </div>

                {/* Working tables / projects */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600">
                    Mesas de Trabajo Simultáneas (Elegí dónde sumarte)
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {NEXT_HACKDAY.projects.map((proj) => {
                      const isChosen = hackdaySignedUp === proj.id;
                      return (
                        <div
                          key={proj.id}
                          className={`p-3.5 rounded-lg border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isChosen
                              ? 'bg-amber-50/60 border-[#B5121B]'
                              : 'bg-stone-50/60 border-stone-200 hover:border-stone-400'
                          }`}
                        >
                          <div className="space-y-1">
                            <span className="text-xs font-heading font-bold text-stone-900 block">
                              {proj.title}
                            </span>
                            <p className="text-xs text-stone-500">
                              Coordina: {proj.lead}
                            </p>
                            <p className="text-xs text-stone-600">
                              {proj.objective}
                            </p>
                          </div>
                          <div className="shrink-0">
                            {isChosen ? (
                              <span className="px-3 py-1.5 bg-[#B5121B] text-white text-xs font-heading font-bold rounded-md flex items-center gap-1.5 shadow-xs">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD200]" />
                                ¡Anotado en esta mesa!
                              </span>
                            ) : (
                              <button
                                onClick={() => handleHackdaySignup(proj.id)}
                                className="px-3 py-1.5 bg-white border border-stone-300 hover:border-[#B5121B] hover:text-[#B5121B] text-stone-700 text-xs font-heading font-bold rounded-md transition-colors"
                              >
                                Sumarme a esta mesa
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Photo & atmosphere */}
              <div className="lg:col-span-5 bg-stone-100 flex flex-col justify-end relative">
                <img
                  src={LAB_IMAGES.workshopHackday}
                  alt="Hackday de desarrollo colaborativo en la FCE"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="p-4 bg-linear-to-t from-stone-950/85 via-stone-950/40 to-transparent text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-300 block">
                    Metodología Abierta
                  </span>
                  <p className="text-xs text-stone-200">
                    Dinámicas horizontales sin jerarquías: docentes, estudiantes y no docentes programando y diseñando en la misma mesa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CONFERENCIAS PRÓXIMAS */}
        {/* ========================================================================= */}
        {(activeFilter === 'todos' || activeFilter === 'conferencias') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-xl font-heading font-extrabold text-stone-950">
                  Próximas Conferencias
                </h3>
                <p className="text-xs text-stone-500">
                  Debates abiertos sobre las nuevas fronteras de la economía digital y las plataformas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredConferences.map((conf) => (
                <div
                  key={conf.id}
                  onClick={() => onSelectConference(conf)}
                  className="p-6 bg-white border border-stone-200 rounded-xl hover:border-[#B5121B] transition-all text-left cursor-pointer flex flex-col justify-between space-y-4 group shadow-2xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-mono uppercase font-bold text-[#005360]">
                        Eje: {conf.axis}
                      </span>
                      <span className="font-mono">{conf.date}</span>
                    </div>

                    <h4 className="text-lg font-heading font-bold text-stone-900 group-hover:text-[#B5121B] transition-colors leading-snug">
                      {conf.title}
                    </h4>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {conf.summary}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                      <User className="w-3.5 h-3.5 text-[#B5121B]" />
                      <span className="truncate">{conf.speaker}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-stone-500">
                        {conf.location}
                      </span>
                      <span className="text-xs font-heading font-bold text-[#B5121B] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Ver detalles & Inscribirme <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TALLERES PRÓXIMOS + PROPONÉ UN TALLER */}
        {/* ========================================================================= */}
        {(activeFilter === 'todos' || activeFilter === 'talleres') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-xl font-heading font-extrabold text-stone-950">
                  Próximos Talleres Prácticos
                </h3>
                <p className="text-xs text-stone-500">
                  Formación técnica intensiva con herramientas libres y metodología hands-on.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkshops.map((ws) => (
                <div
                  key={ws.id}
                  onClick={() => onSelectWorkshop(ws)}
                  className="p-5 bg-white border border-stone-200 rounded-xl hover:border-[#B5121B] transition-all text-left cursor-pointer flex flex-col justify-between space-y-4 group shadow-2xs"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-mono text-[#005360] font-bold">
                        Eje: {ws.axis}
                      </span>
                      <span className="font-mono">{ws.duration}</span>
                    </div>

                    <h4 className="text-base font-heading font-bold text-stone-900 group-hover:text-[#B5121B] transition-colors leading-snug">
                      {ws.title}
                    </h4>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {ws.summary}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-stone-100">
                    <div className="text-[11px] text-stone-500 truncate">
                      Docente: <strong className="text-stone-800">{ws.instructor}</strong>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-stone-500 font-mono">
                        Cupo: {ws.capacity} asistentes
                      </span>
                      <span className="text-xs font-heading font-bold text-[#B5121B] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Programa completo <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Special Card: Proponé un taller */}
              <div
                onClick={() => onOpenProposal('taller')}
                className="p-6 border-2 border-dashed border-[#B5121B]/30 hover:border-[#B5121B] rounded-xl transition-all text-left cursor-pointer flex flex-col justify-between bg-white/80 hover:bg-amber-50/30 group shadow-2xs"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#B5121B] flex items-center justify-center group-hover:bg-[#B5121B] group-hover:text-white transition-colors">
                    <PlusCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-heading font-bold text-stone-900 pt-2 group-hover:text-[#B5121B] transition-colors">
                    ¿Tenés una propuesta para compartir?
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Si sos docente, estudiante, investigador o profesional y querés dictar un taller sobre software libre, herramientas para el aula o nuevas tecnologías, el laboratorio te brinda el espacio, difusión y soporte técnico.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs font-heading font-bold text-[#B5121B] group-hover:underline">
                    Proponer un taller nuevo
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#B5121B]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
