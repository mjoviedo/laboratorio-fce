import React, { useState } from 'react';
import { Sliders, RotateCcw, TrendingUp } from 'lucide-react';

export const EconomicSimulatorDemo: React.FC = () => {
  // Demand: Qd = a - b*P
  // Supply: Qs = c + d*P
  const [a, setA] = useState<number>(120); // autonomous demand
  const [b, setB] = useState<number>(1.2); // price sensitivity of demand
  const [c, setC] = useState<number>(15);  // autonomous supply
  const [d, setD] = useState<number>(0.9); // price sensitivity of supply
  const [tax, setTax] = useState<number>(10); // unit tax

  // Base Equilibrium without tax
  const pBase = (a - c) / (b + d);
  const qBase = a - b * pBase;

  // Equilibrium with tax t
  // Pc = (a - c + d*t) / (b + d)
  // Pp = Pc - t
  const pc = (a - c + d * tax) / (b + d);
  const pp = pc - tax;
  const qTax = Math.max(0, a - b * pc);

  // Maximum price where Qd = 0 -> P_max = a / b
  const pMax = a / b;
  // Minimum price where Qs = 0 -> P_min = -c / d
  const pMin = Math.max(0, -c / d);

  // Surpluses
  const consumerSurplus = 0.5 * Math.max(0, pMax - pc) * qTax;
  const producerSurplus = 0.5 * Math.max(0, pp - pMin) * qTax;
  const taxRevenue = tax * qTax;
  const deadweightLoss = 0.5 * tax * Math.max(0, qBase - qTax);

  const resetValues = () => {
    setA(120);
    setB(1.2);
    setC(15);
    setD(0.9);
    setTax(10);
  };

  // SVG dimensions for chart
  const svgWidth = 420;
  const svgHeight = 280;
  const padding = { top: 20, right: 25, bottom: 35, left: 45 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;

  const maxQ = Math.max(140, a + 10);
  const maxP = Math.max(120, pMax + 10);

  const scaleX = (q: number) => padding.left + (Math.max(0, q) / maxQ) * graphWidth;
  const scaleY = (p: number) => padding.top + graphHeight - (Math.max(0, p) / maxP) * graphHeight;

  // Demand line endpoints: from (0, pMax) to (a, 0)
  const dStart = { x: scaleX(0), y: scaleY(pMax) };
  const dEnd = { x: scaleX(a), y: scaleY(0) };

  // Supply line base endpoints: from (c, 0) or (0, pMin) to (c + d*maxP, maxP)
  const sStart = { x: scaleX(c), y: scaleY(0) };
  const sEnd = { x: scaleX(c + d * maxP), y: scaleY(maxP) };

  // Supply with tax: Qs = c + d*(P - tax) -> when P = tax + pMin, Q = 0
  const stStart = { x: scaleX(Math.max(0, c - d * tax)), y: scaleY(Math.max(0, ( -c + d * tax ) / d)) };
  const stEnd = { x: scaleX(c + d * (maxP - tax)), y: scaleY(maxP) };

  // Coordinates of key equilibrium points
  const pBaseCoord = { x: scaleX(qBase), y: scaleY(pBase) };
  const pcCoord = { x: scaleX(qTax), y: scaleY(pc) };
  const ppCoord = { x: scaleX(qTax), y: scaleY(pp) };

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
      {/* Header */}
      <div className="px-5 py-4 border-b border-stone-200 bg-stone-50/70 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#005360] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <TrendingUp className="w-5 h-5 text-[#FFD200]" />
          </div>
          <div>
            <h4 className="text-sm font-heading font-bold text-stone-900">
              Simulador Educativo: Equilibrio de Mercado e Incidencia Impositiva
            </h4>
            <p className="text-xs text-stone-500 font-mono">
              Prototipo vibecoded en React + SVG para cátedras de Microeconomía FCE
            </p>
          </div>
        </div>
        <button
          onClick={resetValues}
          className="px-3 py-1.5 text-xs font-heading font-bold text-stone-700 bg-white border border-stone-200 rounded-md hover:text-[#B5121B] hover:border-[#B5121B] transition-colors flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restablecer</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
        {/* Controls Column */}
        <div className="lg:col-span-5 p-5 space-y-4 bg-stone-50/30">
          <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-stone-800 uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-[#B5121B]" /> Parámetros Dinámicos
          </div>

          {/* Tax Slider */}
          <div className="p-3 bg-amber-50/70 border border-[#FFD200] rounded-lg space-y-1.5 shadow-2xs">
            <div className="flex justify-between items-center text-xs">
              <span className="font-heading font-bold text-[#670000]">Impuesto por unidad ($t$):</span>
              <span className="font-mono font-bold text-[#B5121B]">${tax.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="35"
              step="1"
              value={tax}
              onChange={(e) => setTax(parseFloat(e.target.value))}
              className="w-full accent-[#B5121B] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#670000] font-mono">
              <span>$0 (Sin distorsión)</span>
              <span>$35 (Impuesto alto)</span>
            </div>
          </div>

          {/* Autonomous Demand a */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs text-stone-700">
              <span>Demanda autónoma ($A$):</span>
              <span className="font-mono font-medium">{a}</span>
            </div>
            <input
              type="range"
              min="80"
              max="160"
              step="5"
              value={a}
              onChange={(e) => setA(parseFloat(e.target.value))}
              className="w-full accent-stone-800 cursor-pointer"
            />
          </div>

          {/* Price Sensitivity b */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs text-stone-700">
              <span>Sensibilidad precio demanda ($b$):</span>
              <span className="font-mono font-medium">{b.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.1"
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
              className="w-full accent-stone-800 cursor-pointer"
            />
          </div>

          {/* Autonomous Supply c */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs text-stone-700">
              <span>Oferta base ($C$):</span>
              <span className="font-mono font-medium">{c}</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              step="5"
              value={c}
              onChange={(e) => setC(parseFloat(e.target.value))}
              className="w-full accent-stone-800 cursor-pointer"
            />
          </div>

          {/* Price Sensitivity d */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs text-stone-700">
              <span>Pendiente de oferta ($d$):</span>
              <span className="font-mono font-medium">{d.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.4"
              max="2.0"
              step="0.1"
              value={d}
              onChange={(e) => setD(parseFloat(e.target.value))}
              className="w-full accent-stone-800 cursor-pointer"
            />
          </div>

          {/* Didactic tip */}
          <div className="text-[12px] text-stone-500 bg-white p-3 border border-stone-200 rounded-lg">
            <strong className="text-stone-800">Nota didáctica:</strong> Observá cómo la recaudación fiscal y la pérdida irrecuperable cambian según la elasticidad relativa de ambas curvas.
          </div>
        </div>

        {/* Chart and Results Column */}
        <div className="lg:col-span-7 p-5 flex flex-col justify-between space-y-4">
          {/* SVG Visualizer */}
          <div className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 flex flex-col items-center">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full max-w-[440px] h-auto overflow-visible select-none"
            >
              {/* Axes */}
              <line
                x1={padding.left}
                y1={padding.top + graphHeight}
                x2={padding.left + graphWidth}
                y2={padding.top + graphHeight}
                stroke="#78716c"
                strokeWidth="1.5"
              />
              <line
                x1={padding.left}
                y1={padding.top}
                x2={padding.left}
                y2={padding.top + graphHeight}
                stroke="#78716c"
                strokeWidth="1.5"
              />

              {/* Axis labels */}
              <text
                x={padding.left + graphWidth}
                y={padding.top + graphHeight + 22}
                fontSize="11"
                fill="#44403c"
                textAnchor="end"
                fontFamily="sans-serif"
                fontWeight="600"
              >
                Cantidad (Q)
              </text>
              <text
                x={padding.left - 10}
                y={padding.top - 5}
                fontSize="11"
                fill="#44403c"
                textAnchor="end"
                fontFamily="sans-serif"
                fontWeight="600"
              >
                Precio (P)
              </text>

              {/* Deadweight loss polygon (if tax > 0) */}
              {tax > 0 && (
                <polygon
                  points={`${pcCoord.x},${pcCoord.y} ${ppCoord.x},${ppCoord.y} ${pBaseCoord.x},${pBaseCoord.y}`}
                  fill="#F37321"
                  opacity="0.45"
                />
              )}

              {/* Tax Revenue rectangle */}
              {tax > 0 && (
                <polygon
                  points={`${scaleX(0)},${pcCoord.y} ${pcCoord.x},${pcCoord.y} ${ppCoord.x},${ppCoord.y} ${scaleX(0)},${ppCoord.y}`}
                  fill="#FFD200"
                  opacity="0.45"
                />
              )}

              {/* Demand curve line */}
              <line
                x1={dStart.x}
                y1={dStart.y}
                x2={dEnd.x}
                y2={dEnd.y}
                stroke="#005360"
                strokeWidth="2.5"
              />
              <text
                x={scaleX(a * 0.85)}
                y={scaleY(pMax * 0.15)}
                fill="#005360"
                fontSize="11"
                fontWeight="700"
              >
                Demanda (D)
              </text>

              {/* Base supply curve line */}
              <line
                x1={sStart.x}
                y1={sStart.y}
                x2={sEnd.x}
                y2={sEnd.y}
                stroke="#00B7CE"
                strokeWidth="2.5"
              />
              <text
                x={scaleX(qBase * 1.05)}
                y={scaleY(pBase * 1.15)}
                fill="#008394"
                fontSize="10"
                fontWeight="600"
              >
                Oferta (S₀)
              </text>

              {/* Supply with tax curve line */}
              {tax > 0 && (
                <line
                  x1={stStart.x}
                  y1={stStart.y}
                  x2={stEnd.x}
                  y2={stEnd.y}
                  stroke="#B5121B"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                />
              )}

              {/* Dotted lines for equilibrium prices & quantities */}
              {tax > 0 ? (
                <>
                  {/* Pc */}
                  <line
                    x1={scaleX(0)}
                    y1={pcCoord.y}
                    x2={pcCoord.x}
                    y2={pcCoord.y}
                    stroke="#ea580c"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <text x={scaleX(0) - 6} y={pcCoord.y + 4} fontSize="10" fill="#c2410c" textAnchor="end" fontWeight="600">
                    Pc ${pc.toFixed(1)}
                  </text>

                  {/* Pp */}
                  <line
                    x1={scaleX(0)}
                    y1={ppCoord.y}
                    x2={ppCoord.x}
                    y2={ppCoord.y}
                    stroke="#047857"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <text x={scaleX(0) - 6} y={ppCoord.y + 4} fontSize="10" fill="#047857" textAnchor="end" fontWeight="600">
                    Pp ${pp.toFixed(1)}
                  </text>

                  {/* Qt */}
                  <line
                    x1={pcCoord.x}
                    y1={scaleY(0)}
                    x2={pcCoord.x}
                    y2={pcCoord.y}
                    stroke="#44403c"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <text x={pcCoord.x} y={scaleY(0) + 16} fontSize="10" fill="#44403c" textAnchor="middle" fontWeight="600">
                    Q₁: {qTax.toFixed(1)}
                  </text>

                  {/* Point circles */}
                  <circle cx={pcCoord.x} cy={pcCoord.y} r="4" fill="#ea580c" />
                  <circle cx={ppCoord.x} cy={ppCoord.y} r="4" fill="#047857" />
                </>
              ) : (
                <>
                  {/* P* and Q* base */}
                  <line
                    x1={scaleX(0)}
                    y1={pBaseCoord.y}
                    x2={pBaseCoord.x}
                    y2={pBaseCoord.y}
                    stroke="#44403c"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <text x={scaleX(0) - 6} y={pBaseCoord.y + 4} fontSize="10" fill="#44403c" textAnchor="end" fontWeight="600">
                    P* ${pBase.toFixed(1)}
                  </text>

                  <line
                    x1={pBaseCoord.x}
                    y1={scaleY(0)}
                    x2={pBaseCoord.x}
                    y2={pBaseCoord.y}
                    stroke="#44403c"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <text x={pBaseCoord.x} y={scaleY(0) + 16} fontSize="10" fill="#44403c" textAnchor="middle" fontWeight="600">
                    Q* {qBase.toFixed(1)}
                  </text>
                  <circle cx={pBaseCoord.x} cy={pBaseCoord.y} r="4.5" fill="#1c1917" />
                </>
              )}
            </svg>
          </div>

          {/* Metric Outputs in Tabular Figures */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
              <span className="block text-[11px] text-stone-500 font-medium">Precio Consumidor</span>
              <span className="text-sm font-semibold font-mono tabular-nums text-stone-900">
                ${pc.toFixed(2)}
              </span>
            </div>
            <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
              <span className="block text-[11px] text-stone-500 font-medium">Precio Productor</span>
              <span className="text-sm font-semibold font-mono tabular-nums text-stone-900">
                ${pp.toFixed(2)}
              </span>
            </div>
            <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
              <span className="block text-[11px] text-stone-500 font-medium">Recaudación Fiscal</span>
              <span className="text-sm font-semibold font-mono tabular-nums text-amber-800">
                ${taxRevenue.toFixed(1)}
              </span>
            </div>
            <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
              <span className="block text-[11px] text-stone-500 font-medium">Pérdida Eficiencia</span>
              <span className="text-sm font-semibold font-mono tabular-nums text-rose-700">
                ${deadweightLoss.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Surplus summary */}
          <div className="text-xs text-stone-600 flex flex-wrap items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-100 border border-blue-400" />
              <span>Excedente Consumidor: <strong className="font-mono tabular-nums text-stone-900">${consumerSurplus.toFixed(1)}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-100 border border-emerald-400" />
              <span>Excedente Productor: <strong className="font-mono tabular-nums text-stone-900">${producerSurplus.toFixed(1)}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
