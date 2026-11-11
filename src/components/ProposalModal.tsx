import React, { useState } from 'react';
import { Proposal, WorkAxis, WorkLine } from '../types';
import { WORK_LINES, WORK_AXES } from '../data/labData';
import { X, CheckCircle, Lightbulb, Sparkles } from 'lucide-react';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'proyecto' | 'taller';
  onAddProposal: (proposal: Proposal) => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  initialType = 'proyecto',
  onAddProposal
}) => {
  const [type, setType] = useState<'proyecto' | 'taller'>(initialType);
  const [title, setTitle] = useState('');
  const [proposerName, setProposerName] = useState('');
  const [claustro, setClaustro] = useState<Proposal['claustro']>('Docente');
  const [email, setEmail] = useState('');
  const [line, setLine] = useState<WorkLine>('Innovación');
  const [axis, setAxis] = useState<WorkAxis>('Educación');
  const [description, setDescription] = useState('');
  const [expectedTools, setExpectedTools] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !proposerName.trim() || !email.trim() || !description.trim()) {
      return;
    }

    const newProposal: Proposal = {
      id: `prop-${Date.now()}`,
      title,
      type,
      proposerName,
      claustro,
      email,
      line,
      axis,
      description,
      expectedTools: expectedTools || 'Herramientas abiertas a definir en el laboratorio',
      createdAt: new Date().toLocaleDateString('es-AR')
    };

    onAddProposal(newProposal);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setTitle('');
    setProposerName('');
    setEmail('');
    setDescription('');
    setExpectedTools('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B5121B] text-white flex items-center justify-center shadow-xs">
              <Lightbulb className="w-5 h-5 text-[#FFD200]" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-stone-900">
                {type === 'proyecto' ? 'Proponer un Proyecto a Laboratorio IDEA' : 'Proponer un Taller o Actividad'}
              </h3>
              <p className="text-xs text-stone-500 font-mono">
                Facultad de Ciencias Económicas · UNC
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-[#005360] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-heading font-bold text-stone-900">
                  ¡Propuesta registrada con éxito!
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Tu postulación para <strong>"{title}"</strong> fue incorporada al banco de ideas del laboratorio. Será evaluada en la próxima reunión de coordinación para ser incluida en el siguiente Hackday o ciclo de talleres.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 bg-[#B5121B] hover:bg-[#670000] text-white rounded-lg text-sm font-heading font-bold transition-colors shadow-xs"
                >
                  Entendido, volver al sitio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Type Switcher */}
              <div className="flex p-1 bg-stone-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setType('proyecto')}
                  className={`flex-1 py-1.5 text-xs font-heading font-bold rounded-md transition-colors ${
                    type === 'proyecto'
                      ? 'bg-[#B5121B] text-white shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Proponer Proyecto
                </button>
                <button
                  type="button"
                  onClick={() => setType('taller')}
                  className={`flex-1 py-1.5 text-xs font-heading font-bold rounded-md transition-colors ${
                    type === 'taller'
                      ? 'bg-[#B5121B] text-white shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Proponer Taller
                </button>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Título de la propuesta *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={
                    type === 'proyecto'
                      ? 'Ej: Visualizador geoespacial de PyMEs cordobesas en base a datos abiertos'
                      : 'Ej: Taller práctico de análisis macroeconómico con R y Quarto'
                  }
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                />
              </div>

              {/* Proposer Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Tu nombre y apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={proposerName}
                    onChange={(e) => setProposerName(e.target.value)}
                    placeholder="Nombre completo"
                    className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Claustro o pertenencia *
                  </label>
                  <select
                    value={claustro}
                    onChange={(e) => setClaustro(e.target.value as Proposal['claustro'])}
                    className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
                  >
                    <option value="Docente">Docente</option>
                    <option value="Estudiante">Estudiante</option>
                    <option value="Graduado/a">Graduado/a</option>
                    <option value="No Docente">No Docente</option>
                    <option value="Externo/Comunidad">Externo / Comunidad</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Correo electrónico institucional o de contacto *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@unc.edu.ar / correo@ejemplo.com"
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                />
              </div>

              {/* Line and Axis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Línea de trabajo
                  </label>
                  <select
                    value={line}
                    onChange={(e) => setLine(e.target.value as WorkLine)}
                    className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
                  >
                    {WORK_LINES.map((l) => (
                      <option key={l.name} value={l.name}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Eje principal
                  </label>
                  <select
                    value={axis}
                    onChange={(e) => setAxis(e.target.value as WorkAxis)}
                    className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
                  >
                    {WORK_AXES.map((a) => (
                      <option key={a.name} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Descripción del desafío o propuesta *
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="¿Qué problema aborda? ¿Qué impacto tendría en la facultad, las cátedras o la comunidad? No hace falta que esté 100% definido: valoramos la experimentación temprana."
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                />
              </div>

              {/* Expected Tools / Requirements */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Herramientas tecnológicas o equipamiento que estimás necesario
                </label>
                <input
                  type="text"
                  value={expectedTools}
                  onChange={(e) => setExpectedTools(e.target.value)}
                  placeholder="Ej: Python, R, estudio de video, Arduino, modelos locales de IA, OpenBoard..."
                  className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                />
              </div>

              {/* Principles notice */}
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Principios de IDEA:</strong> Reconocemos el valor del prototipo rápido y la cultura libre. Si tu idea tiene valor pedagógico, extensionista o investigativo, el laboratorio aportará mentoría, equipamiento y articulación transdisciplinar.
                </p>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-heading font-bold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#B5121B] hover:bg-[#670000] text-white rounded-lg text-xs font-heading font-bold transition-colors shadow-xs"
                >
                  Enviar propuesta al laboratorio
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
