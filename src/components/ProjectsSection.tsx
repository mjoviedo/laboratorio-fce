import React, { useState } from 'react';
import { Project, Proposal, WorkAxis, WorkLine } from '../types';
import { LibraryChatbotDemo } from './LibraryChatbotDemo';
import { EconomicSimulatorDemo } from './EconomicSimulatorDemo';
import { ArrowRight, Bot, TrendingUp, Sparkles, Building2, ExternalLink, Lightbulb, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  proposals: Proposal[];
  onOpenProposal: (type: 'proyecto' | 'taller') => void;
  selectedAxis: WorkAxis | 'Todos';
  selectedLine: WorkLine | 'Todas';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  proposals,
  onOpenProposal,
  selectedAxis,
  selectedLine
}) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'chatbot_demo' | 'simulator_demo' | 'comunidad'>('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    const matchAxis = selectedAxis === 'Todos' || p.axis === selectedAxis;
    const matchLine = selectedLine === 'Todas' || p.line === selectedLine;
    return matchAxis && matchLine;
  });

  return (
    <section id="proyectos" className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5121B]">
              Desarrollos & Prototipos Rápidos
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-950 tracking-tight">
              Proyectos del Laboratorio IDEA
            </h2>
            <p className="text-sm text-stone-600">
              Iniciativas en curso que transforman la práctica docente, la investigación económica, la gestión institucional y el patrimonio tecnológico de la UNC.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex p-1 bg-stone-100 rounded-lg shrink-0 overflow-x-auto text-xs">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-3 py-1.5 font-heading font-bold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'todos' ? 'bg-[#B5121B] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Proyectos ({filteredProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('chatbot_demo')}
              className={`px-3 py-1.5 font-heading font-bold rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'chatbot_demo' ? 'bg-[#B5121B] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-[#00B7CE]" /> Probar Chatbot Biblioteca
            </button>
            <button
              onClick={() => setActiveTab('simulator_demo')}
              className={`px-3 py-1.5 font-heading font-bold rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'simulator_demo' ? 'bg-[#B5121B] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#F37321]" /> Simulador Vibecoded
            </button>
            <button
              onClick={() => setActiveTab('comunidad')}
              className={`px-3 py-1.5 font-heading font-bold rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'comunidad' ? 'bg-[#B5121B] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-[#FFD200]" /> Propuestas ({proposals.length})
            </button>
          </div>
        </div>

        {/* TAB: CHATBOT PROTOTYPE */}
        {activeTab === 'chatbot_demo' && (
          <div className="space-y-4">
            <div className="p-4 bg-amber-50/70 border border-[#B5121B]/30 rounded-xl text-left space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5121B]">
                Demostración Funcional en Vivo
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                Este es un prototipo interactivo del sistema RAG desarrollado para la <strong>Biblioteca Manuel Belgrano</strong>. Permite formular preguntas en lenguaje natural sobre textos de cátedra, signaturas topográficas, reglamentos de tesis y disponibilidad en sala física de la FCE.
              </p>
            </div>
            <LibraryChatbotDemo />
          </div>
        )}

        {/* TAB: SIMULATOR PROTOTYPE */}
        {activeTab === 'simulator_demo' && (
          <div className="space-y-4">
            <div className="p-4 bg-blue-50/60 border border-[#005360]/30 rounded-xl text-left space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#005360]">
                Resultado de Vibecoding Pedagógico
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                Desarrollado durante el ciclo de vibecoding con docentes de Microeconomía. Mueve los deslizadores de demanda, oferta o impuestos para visualizar la traslación de curvas y el cálculo matemático del excedente del consumidor y la pérdida irrecuperable de eficiencia.
              </p>
            </div>
            <EconomicSimulatorDemo />
          </div>
        )}

        {/* TAB: COMMUNITY PROPOSALS */}
        {activeTab === 'comunidad' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-stone-50 border border-stone-200 rounded-xl">
              <div className="text-left space-y-1">
                <h4 className="text-sm font-heading font-bold text-stone-900">
                  Banco de Ideas Abiertas de la Comunidad
                </h4>
                <p className="text-xs text-stone-600">
                  Cualquier persona puede proponer un proyecto o taller para ser incubado en el Laboratorio IDEA.
                </p>
              </div>
              <button
                onClick={() => onOpenProposal('proyecto')}
                className="px-4 py-2 bg-[#B5121B] hover:bg-[#670000] text-white rounded-lg text-xs font-heading font-bold transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                + Proponer un proyecto ahora
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {proposals.map((prop) => (
                <div
                  key={prop.id}
                  className="p-5 bg-white border border-stone-200 rounded-xl space-y-3 text-left shadow-2xs hover:border-[#B5121B] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-mono text-[#005360] font-bold">
                      Claustro: {prop.claustro}
                    </span>
                    <span className="font-mono">Fecha: {prop.createdAt}</span>
                  </div>

                  <h5 className="text-base font-heading font-bold text-stone-900">
                    {prop.title}
                  </h5>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {prop.description}
                  </p>

                  <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500">
                    <span>Propuesto por: <strong className="text-stone-800">{prop.proposerName}</strong></span>
                    <span className="font-mono text-[#B5121B]">Línea: {prop.line}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: ALL PROJECTS (CARD GRID) */}
        {activeTab === 'todos' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:border-[#B5121B] transition-all text-left flex flex-col justify-between shadow-2xs group"
                >
                  {/* Image banner */}
                  {project.image && (
                    <div className="h-44 bg-stone-100 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className={`absolute top-3 left-3 text-white text-[11px] font-mono font-bold px-2.5 py-0.5 rounded shadow-xs ${
                        project.status === 'en_curso' ? 'bg-[#B5121B]' : 'bg-[#005360]'
                      }`}>
                        {project.status === 'en_curso' ? 'En Curso' : 'En Incubación'}
                      </div>
                    </div>
                  )}

                  {/* Body */}
                  <div className="p-5 space-y-3 grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                        <span className="text-[#005360] font-bold">{project.line}</span>
                        <span aria-hidden="true">·</span>
                        <span>Eje: {project.axis}</span>
                      </div>

                      <h3 className="text-base font-heading font-bold text-stone-900 group-hover:text-[#B5121B] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-stone-100">
                      {/* Partners */}
                      <div className="text-[11px] text-stone-500">
                        <span className="font-semibold text-stone-700">Articulación:</span>{' '}
                        {project.partners.join(', ')}
                      </div>

                      {/* Interactive Triggers */}
                      <div className="flex items-center justify-between pt-1">
                        {project.interactiveType === 'chatbot' ? (
                          <button
                            onClick={() => setActiveTab('chatbot_demo')}
                            className="px-3 py-1.5 bg-[#00B7CE]/15 border border-[#00B7CE] text-[#005360] rounded-md text-xs font-heading font-bold hover:bg-[#00B7CE]/25 transition-colors flex items-center gap-1.5"
                          >
                            <Bot className="w-3.5 h-3.5 text-[#005360]" />
                            <span>Probar Chatbot</span>
                          </button>
                        ) : project.interactiveType === 'simulator' ? (
                          <button
                            onClick={() => setActiveTab('simulator_demo')}
                            className="px-3 py-1.5 bg-[#F37321]/15 border border-[#F37321] text-[#670000] rounded-md text-xs font-heading font-bold hover:bg-[#F37321]/25 transition-colors flex items-center gap-1.5"
                          >
                            <TrendingUp className="w-3.5 h-3.5 text-[#F37321]" />
                            <span>Abrir Simulador</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="text-xs font-heading font-bold text-stone-800 hover:text-[#B5121B] transition-colors flex items-center gap-1"
                          >
                            <span>Ficha completa</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs text-stone-500 hover:text-[#B5121B] underline font-medium"
                        >
                          Ver entregables
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Special CTA Card: Proponé un proyecto */}
              <div className="bg-stone-50 border-2 border-dashed border-[#B5121B]/40 rounded-xl p-6 text-left flex flex-col justify-between hover:border-[#B5121B] transition-colors shadow-2xs">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#B5121B] text-white flex items-center justify-center shadow-xs">
                    <Sparkles className="w-5 h-5 text-[#FFD200]" />
                  </div>
                  <h4 className="text-base font-heading font-bold text-stone-900">
                    Proponé un proyecto para el Laboratorio IDEA
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    ¿Identificaste un problema en el aula, en la biblioteca, en un trámite administrativo o querés testear una idea de investigación en economía digital?
                  </p>
                  <ul className="text-xs text-stone-600 space-y-1">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#005360] shrink-0" />
                      <span>Acceso a infraestructura y servidores</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#005360] shrink-0" />
                      <span>Mentoría ágil y transdisciplinar</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#005360] shrink-0" />
                      <span>Inclusión en el próximo Hackday</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <button
                    onClick={() => onOpenProposal('proyecto')}
                    className="w-full py-2 bg-[#B5121B] hover:bg-[#670000] text-white rounded-lg text-xs font-heading font-bold transition-colors shadow-xs"
                  >
                    Postular nueva propuesta
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col text-left">
              <div className="px-6 py-5 border-b border-stone-200 bg-stone-50/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-stone-500">
                    {selectedProject.line} · Eje: {selectedProject.axis}
                  </span>
                  <h3 className="text-base font-bold text-stone-900">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5">
                {selectedProject.image && (
                  <div className="rounded-xl overflow-hidden border border-stone-200 h-52">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Descripción Integral
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Entregables y Metas del Proyecto
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {selectedProject.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs space-y-1">
                  <span className="font-semibold text-stone-800">Instituciones y Áreas Participantes:</span>
                  <p className="text-stone-600">{selectedProject.partners.join(' · ')}</p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-stone-200 bg-stone-50 flex justify-between items-center">
                <span className="text-xs text-stone-500 font-mono">
                  Estado: {selectedProject.status === 'en_curso' ? 'En desarrollo activo' : 'En fase de incubación'}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
