import React, { useState } from 'react';
import { Article } from '../types';
import { X, Calendar, Clock, BookOpen, Quote, Share2, Check, Download } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-2xl shadow-xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top bar */}
        <div className="px-6 py-4 border-b border-stone-200 bg-stone-50/90 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
            <span>PUBLICACIONES · LABORATORIO IDEA FCE</span>
            <span aria-hidden="true">·</span>
            <span>UNC</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 rounded-md bg-white hover:border-stone-400 transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Enlace copiado</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Compartir</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Metadata Header */}
          <div className="space-y-3 border-b border-stone-200 pb-6 text-left">
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-mono">
              <span className="font-bold text-[#005360]">{article.line}</span>
              <span aria-hidden="true">·</span>
              <span>Eje: {article.axis}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#B5121B]" /> {article.date}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#005360]" /> {article.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-950 tracking-tight leading-snug">
              {article.title}
            </h2>

            <p className="text-sm text-stone-600 font-heading font-medium leading-relaxed">
              {article.subtitle}
            </p>

            <div className="pt-2 text-xs text-stone-500">
              Por: <strong className="text-stone-800">{article.authors}</strong>
            </div>
          </div>

          {/* Featured Image if present */}
          {article.image && (
            <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
              <img
                src={article.image}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="px-4 py-2 text-[11px] text-stone-500 italic bg-stone-50 border-t border-stone-100">
                Registro documental del proyecto en la Facultad de Ciencias Económicas · UNC.
              </div>
            </div>
          )}

          {/* Abstract callout */}
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2 text-left">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-stone-900" />
              Resumen Ejecutivo
            </div>
            <p className="text-xs text-stone-700 leading-relaxed italic">
              {article.abstract}
            </p>
          </div>

          {/* Full content paragraphs */}
          <div className="space-y-4 text-stone-800 leading-relaxed text-sm text-left max-w-prose">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Findings */}
          <div className="p-4 bg-amber-50/40 border border-amber-200 rounded-xl space-y-2 text-left">
            <h4 className="text-xs font-semibold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5 text-amber-700" />
              Hallazgos Clave del Laboratorio
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {article.keyFindings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Citations */}
          <div className="border-t border-stone-200 pt-5 text-left space-y-2">
            <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500">
              Referencias Bibliográficas
            </h5>
            <ul className="space-y-1 text-xs text-stone-500 font-mono">
              {article.citations.map((cite, i) => (
                <li key={i}>[{i + 1}] {cite}</li>
              ))}
            </ul>
          </div>

          {/* Footer note */}
          <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-500 flex items-center justify-between">
            <span>Licencia Creative Commons Atribución 4.0 Internacional (CC BY 4.0)</span>
            <button
              onClick={() => window.print()}
              className="hover:text-stone-900 flex items-center gap-1 font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
