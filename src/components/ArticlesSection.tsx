import React from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/labData';
import { Calendar, Clock, ArrowRight, BookOpen, Quote } from 'lucide-react';

interface ArticlesSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectArticle }) => {
  const leadArticle = ARTICLES[0];
  const secondaryArticles = ARTICLES.slice(1);

  return (
    <section id="articulos" className="py-16 border-b border-stone-200 bg-stone-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5121B]">
              Divulgación, Hallazgos & Cuadernos de Laboratorio
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-950 tracking-tight">
              Artículos & Publicaciones Abiertas
            </h2>
            <p className="text-sm text-stone-600">
              Sistematización de aprendizajes, evaluaciones de impacto pedagógico y reflexiones tecnológicas generadas en los proyectos del Laboratorio IDEA.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-mono font-bold">
            Licencia Abierta CC BY 4.0
          </div>
        </div>

        {/* 3-Tier Curatorial Layout (§3.C Institutional Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Lead Article (Tier 1: Dominant Visual & Narrative) */}
          <div
            onClick={() => onSelectArticle(leadArticle)}
            className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-[#B5121B] transition-all text-left cursor-pointer group shadow-2xs flex flex-col justify-between"
          >
            {leadArticle.image && (
              <div className="h-64 sm:h-72 bg-stone-100 overflow-hidden relative">
                <img
                  src={leadArticle.image}
                  alt={leadArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#B5121B] text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded shadow-xs">
                  Artículo Destacado
                </div>
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
                <span className="font-bold text-[#005360]">{leadArticle.line}</span>
                <span aria-hidden="true">·</span>
                <span>Eje: {leadArticle.axis}</span>
                <span aria-hidden="true">·</span>
                <span>{leadArticle.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 group-hover:text-[#B5121B] transition-colors leading-snug">
                {leadArticle.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                {leadArticle.abstract}
              </p>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500">
                  Por: <strong className="text-stone-700">{leadArticle.authors}</strong>
                </span>
                <span className="font-heading font-bold text-[#B5121B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Leer artículo completo <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Features (Tier 2: Structured Cards) */}
          <div className="lg:col-span-5 space-y-6">
            {secondaryArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="p-6 bg-white border border-stone-200 rounded-2xl hover:border-[#B5121B] transition-all text-left cursor-pointer group shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span className="font-bold text-[#005360]">{article.line}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B5121B]" /> {article.readTime}
                  </span>
                </div>

                <h4 className="text-lg font-heading font-bold text-stone-900 group-hover:text-[#B5121B] transition-colors leading-snug">
                  {article.title}
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {article.abstract}
                </p>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-stone-500 truncate">
                    {article.authors}
                  </span>
                  <span className="font-heading font-bold text-[#B5121B] flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                    Leer <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}

            {/* Editorial pull quote */}
            <div className="p-5 bg-stone-50 border-2 border-dashed border-[#FFD200] rounded-2xl text-left space-y-2">
              <Quote className="w-5 h-5 text-[#B5121B]" />
              <p className="text-xs font-heading font-semibold italic text-stone-800 leading-relaxed">
                "En la universidad pública, innovar no es comprar la última licencia privada: es apropiarse críticamente de la técnica para construir autonomía pedagógica y social."
              </p>
              <div className="text-[11px] font-mono text-[#005360] font-bold">
                — Manifiesto Fundacional del Laboratorio IDEA FCE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
