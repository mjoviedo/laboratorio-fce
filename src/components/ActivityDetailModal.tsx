import React, { useState } from 'react';
import { Conference, Workshop } from '../types';
import { X, Calendar, Clock, MapPin, User, CheckCircle, ArrowRight, Laptop, Layers } from 'lucide-react';

interface ActivityDetailModalProps {
  activity: Conference | Workshop | null;
  type: 'conference' | 'workshop' | null;
  onClose: () => void;
}

export const ActivityDetailModal: React.FC<ActivityDetailModalProps> = ({
  activity,
  type,
  onClose
}) => {
  const [registered, setRegistered] = useState(false);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [attendeeRole, setAttendeeRole] = useState('Estudiante FCE');

  if (!activity || !type) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName.trim() || !attendeeEmail.trim()) return;
    setRegistered(true);
  };

  const handleClose = () => {
    setRegistered(false);
    setAttendeeName('');
    setAttendeeEmail('');
    onClose();
  };

  const isConf = type === 'conference';
  const conf = activity as Conference;
  const ws = activity as Workshop;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-200 bg-stone-50/80 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5121B]">
              {isConf ? 'Conferencia Abierta · Ciclo IDEA 2026' : 'Taller Práctico · Laboratorio IDEA'}
            </span>
            <h3 className="text-base font-heading font-bold text-stone-900 leading-snug">
              {activity.title}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors ml-4 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-stone-500 shrink-0" />
              <span><strong>Fecha:</strong> {activity.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-stone-500 shrink-0" />
              <span>
                <strong>{isConf ? 'Horario:' : 'Carga horaria:'}</strong>{' '}
                {isConf ? conf.time : ws.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
              <span>
                <strong>Lugar:</strong> {isConf ? conf.location : 'Laboratorio IDEA · Planta Baja FCE'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-stone-500 shrink-0" />
              <span>
                <strong>{isConf ? 'Disertante:' : 'Docente / Facilitador:'}</strong>{' '}
                {isConf ? conf.speaker : ws.instructor}
              </span>
            </div>
          </div>

          {/* Description / Abstract */}
          <div className="space-y-2 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              {isConf ? 'Resumen & Contexto' : 'Objetivos del Taller'}
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {isConf ? conf.abstract : ws.summary}
            </p>
          </div>

          {/* Topics / Syllabus */}
          <div className="space-y-2 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              {isConf ? 'Ejes Temáticos de la Charla' : 'Contenidos y Prácticas'}
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-600">
              {(isConf ? conf.topics : ws.syllabus).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools or Prerequisites */}
          <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs space-y-1 text-left">
            <div className="flex items-center gap-1.5 font-semibold text-stone-800">
              <Laptop className="w-3.5 h-3.5 text-stone-600" />
              {isConf ? 'Requisitos & Destinatarios' : 'Herramientas y Software Libre Utilizado'}
            </div>
            <p className="text-stone-600">
              {isConf
                ? conf.prerequisites
                : `Se trabajará con: ${ws.toolsUsed.join(', ')}. No arancelado para miembros de la UNC.`}
            </p>
          </div>

          {/* Registration Section */}
          <div className="border-t border-stone-200 pt-5 text-left">
            {registered ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-700 shrink-0" />
                <div className="space-y-0.5">
                  <h5 className="text-sm font-semibold text-emerald-950">
                    ¡Inscripción confirmada para {attendeeName}!
                  </h5>
                  <p className="text-xs text-emerald-800">
                    Te enviamos los datos de acceso y el material preparatorio a <strong>{attendeeEmail}</strong>. Nos encontramos en la FCE.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-800">
                  Inscripción Abierta y Gratuita
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nombre y Apellido"
                      value={attendeeName}
                      onChange={(e) => setAttendeeName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Correo electrónico"
                      value={attendeeEmail}
                      onChange={(e) => setAttendeeEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                    />
                  </div>
                  <div>
                    <select
                      value={attendeeRole}
                      onChange={(e) => setAttendeeRole(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
                    >
                      <option value="Estudiante FCE">Estudiante FCE</option>
                      <option value="Docente FCE / UNC">Docente FCE / UNC</option>
                      <option value="Graduado/a">Graduado/a</option>
                      <option value="No Docente FCE">No Docente FCE</option>
                      <option value="Público General">Público General</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#B5121B] hover:bg-[#670000] text-white rounded-lg text-xs font-heading font-bold transition-colors shadow-xs"
                  >
                    Confirmar mi lugar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
