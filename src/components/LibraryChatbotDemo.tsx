import React, { useState } from 'react';
import { LIBRARY_FAQ_DATABASE } from '../data/labData';
import { Send, BookOpen, Bot, User, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  source?: string;
  timestamp: string;
}

export const LibraryChatbotDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-init',
      sender: 'bot',
      text: '¡Hola! Soy el asistente bibliográfico de la Biblioteca Manuel Belgrano (FCE - UNC). Puedo indicarte la ubicación en sala, disponibilidad de ejemplares o buscar bibliografía según tu cátedra. ¿Qué material estás buscando hoy?',
      timestamp: '14:20',
      source: 'Catálogo Central FCE & Repositorio Digital UNC'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Realistic query response
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      let foundMatch = LIBRARY_FAQ_DATABASE.find((item) =>
        item.keywords.some((kw) => normalizedQuery.includes(kw))
      );

      let botResponse = '';
      let sourceTag = 'Biblioteca Manuel Belgrano - Servidor Local FCE';

      if (foundMatch) {
        botResponse = foundMatch.answer;
      } else if (normalizedQuery.includes('examen') || normalizedQuery.includes('programa')) {
        botResponse = 'Los programas analíticos de las asignaturas están digitalizados y se corresponden con las últimas resoluciones de Consejo Directivo. Si buscás bibliografía para rendir libre o regular, te recomendamos revisar el apartado de la cátedra en el Moodle o solicitar la carpeta de fotocopiadora digital.';
      } else {
        botResponse = `Hemos consultado el catálogo para "${query}". Encontramos registros en la sección general de Ciencias Económicas y Administración. Te sugerimos consultar la signatura central en Sala de Préstamos o acercarte a los puestos de atención de 07:30 a 20:00 hs. ¿Deseás afinar la búsqueda por autor o año de publicación?`;
      }

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: botResponse,
        source: sourceTag,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const samplePrompts = [
    '¿Tienen el libro Microeconomía de Pindyck?',
    '¿Dónde consigo Macroeconomía de Blanchard?',
    '¿Bibliografía para Estadística y Métodos Cuantitativos?',
    '¿Cuáles son los horarios de atención y salas?'
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
      {/* Header bar */}
      <div className="px-5 py-4 border-b border-stone-200 bg-stone-50/70 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#B5121B] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <BookOpen className="w-5 h-5 text-[#FFD200]" />
          </div>
          <div>
            <h4 className="text-sm font-heading font-bold text-stone-900 flex items-center gap-2">
              Prototipo Interactivo: Chatbot Biblioteca Manuel Belgrano
            </h4>
            <p className="text-xs text-stone-500 font-mono">
              Facultad de Ciencias Económicas · UNC · Motor RAG soberano
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-stone-600">
          <span className="flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#005360]" /> Servidor local FCE
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>Privacidad 100%</span>
        </div>
      </div>

      {/* Quick Prompts */}
      <div className="px-5 py-3 border-b border-stone-100 bg-stone-50/40 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-stone-500 font-heading font-bold whitespace-nowrap shrink-0 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#B5121B]" /> Consultas rápidas:
        </span>
        {samplePrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1 rounded-md bg-white border border-stone-200 text-stone-700 hover:border-[#B5121B] hover:text-[#B5121B] whitespace-nowrap transition-colors font-medium"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="p-5 space-y-4 max-h-[380px] min-h-[280px] overflow-y-auto bg-stone-50/20">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'bot' && (
              <div className="w-7 h-7 rounded-md bg-stone-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4 text-amber-300" />
              </div>
            )}
            <div
              className={`max-w-xl rounded-lg p-3 text-sm leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-stone-900 text-white'
                  : 'bg-white border border-stone-200 text-stone-800 shadow-2xs'
              }`}
            >
              <p>{m.text}</p>
              {m.source && (
                <div className="mt-2 pt-2 border-t border-stone-100 text-[11px] text-stone-500 flex items-center justify-between">
                  <span>Fuente: {m.source}</span>
                  <span className="font-mono">{m.timestamp}</span>
                </div>
              )}
            </div>
            {m.sender === 'user' && (
              <div className="w-7 h-7 rounded-md bg-stone-200 text-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 items-center text-xs text-stone-500">
            <div className="w-7 h-7 rounded-md bg-stone-800 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-amber-300" />
            </div>
            <div className="bg-white border border-stone-200 rounded-lg px-3 py-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce [animation-delay:0.4s]" />
              <span className="ml-1 text-[11px] text-stone-400">Consultando índice de catálogo FCE...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input controls */}
      <div className="p-4 border-t border-stone-200 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Preguntá por un autor, libro de cátedra, reglamento o signatura..."
            className="flex-1 px-3.5 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#B5121B] focus:ring-1 focus:ring-[#B5121B]"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="px-4 py-2 bg-[#B5121B] hover:bg-[#670000] text-white rounded-lg text-sm font-heading font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>Consultar</span>
            <Send className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => {
              setMessages([
                {
                  id: 'm-reset',
                  sender: 'bot',
                  text: 'Chat reiniciado. Consultá cualquier texto o tema de cátedra.',
                  timestamp: '14:20',
                  source: 'Catálogo Central FCE'
                }
              ]);
            }}
            title="Reiniciar conversación"
            className="p-2 border border-stone-200 text-stone-500 rounded-lg hover:text-stone-900 hover:border-stone-300 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
