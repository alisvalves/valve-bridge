'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductItem } from '@/data/products';
import {
  ggcValvesCatalog,
  GgcValveModel,
  GgcValveFilter,
} from '@/data/ggcValvesCatalog';
import {
  Check,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Layers,
  Activity,
  Factory,
  FileText,
  ChevronRight,
  SlidersHorizontal,
  Flame,
  X,
  HelpCircle,
  Maximize2,
  Droplets,
} from 'lucide-react';

interface Props {
  product: ProductItem;
  initialModelId?: string;
}

export default function GgcValvesCategoryExperience({
  product: _product,
  initialModelId,
}: Props) {
  const [activeFilter, setActiveFilter] = useState<GgcValveFilter>('all');
  const [selectedModalModel, setSelectedModalModel] =
    useState<GgcValveModel | null>(null);

  useEffect(() => {
    if (initialModelId) {
      const match = ggcValvesCatalog.find((m) => m.id === initialModelId);
      if (match) setSelectedModalModel(match);
    }
  }, [initialModelId]);

  const filteredModels = ggcValvesCatalog.filter((m) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'automated') return m.operationMode === 'automated';
    return m.family === activeFilter;
  });

  const filterTabs: { id: GgcValveFilter; label: string; count: number }[] = [
    {
      id: 'all',
      label: 'All 30 GGC Valves',
      count: ggcValvesCatalog.length,
    },
    {
      id: 'gate',
      label: 'Gate Valves',
      count: ggcValvesCatalog.filter((m) => m.family === 'gate').length,
    },
    {
      id: 'knife-gate',
      label: 'Knife Gate',
      count: ggcValvesCatalog.filter((m) => m.family === 'knife-gate').length,
    },
    {
      id: 'globe',
      label: 'Globe Valves',
      count: ggcValvesCatalog.filter((m) => m.family === 'globe').length,
    },
    {
      id: 'check',
      label: 'Check Valves',
      count: ggcValvesCatalog.filter((m) => m.family === 'check').length,
    },
    {
      id: 'strainer',
      label: 'Pipeline Strainers',
      count: ggcValvesCatalog.filter((m) => m.family === 'strainer').length,
    },
    {
      id: 'automated',
      label: 'Electric / Pneumatic',
      count: ggcValvesCatalog.filter((m) => m.operationMode === 'automated').length,
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. Clean Minimal Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50/50 py-3">
        <div className="container-px mx-auto max-w-7xl flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-teal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <Link href="/products" className="hover:text-teal transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-navy font-semibold">GGC Valves</span>
        </div>
      </div>

      {/* 2. Category Hero Banner */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span>VALVE BRIDGE INDUSTRIAL PORTFOLIO • GATE, GLOBE, CHECK &amp; STRAINERS</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy">
                  GGC Valves
                </h1>
                <p className="mt-2 text-base sm:text-lg font-medium text-teal">
                  Dependable isolation, zero-hammer backflow protection, and precision throttling across industrial piping
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  Engineered for severe refineries, thermal steam manifolds, chemical lines, and municipal pumping stations, Valve Bridge delivers 30 comprehensive GGC Valve configurations: Rising/Non-Rising &amp; Forged Gate Valves, Slurry &amp; Actuated Knife Gate Valves, Bellows-Sealed &amp; Y-Pattern Globe Valves, Non-Slam/Silent/Slow-Closing Check Valves, and Continuous Filtration Strainers.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Size Range
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">
                    1/2&quot; to 48&quot; (DN1200)
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Pressure Range
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">
                    PN6–PN160 / Class 1500#
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Standards
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-0.5">
                    API 600 • 602 • BS 1873
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Testing
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">
                    100% Pre-Shipment
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#ggc-catalog"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy hover:bg-slate-800 text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-xs"
                >
                  <Layers className="w-4 h-4 text-amber" />
                  <span>Browse 30 Valve Bridge Models</span>
                </a>
                <Link
                  href="/contact?product=GGCValves"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Request Factory Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#comparison-matrix"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-navy px-4 py-2.5 text-xs font-semibold transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-teal" />
                  <span>Technical Comparison</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-2xl bg-white border border-slate-200/90 shadow-lg p-6 flex flex-col items-center justify-center group overflow-hidden">
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  Valve Bridge Technical Catalog
                </div>
                <img
                  src="/assets/products/alis-ggc-valves/ggc-valve-25-rising-stem-gate-valve.png"
                  alt="Valve Bridge GGC Valve"
                  className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-md"
                />
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-navy">
                    Gate • Globe • Check • Knife Gate • Strainers
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Direct mill pricing with 100% API 598 hydro testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs (Sticky Top) */}
      <section
        id="ggc-catalog"
        className="sticky top-20 lg:top-24 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs py-3.5"
      >
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-navy text-white shadow-xs font-bold'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-navy'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-amber text-navy' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center text-xs text-slate-500 font-medium shrink-0">
              <span>
                Showing {filteredModels.length} of {ggcValvesCatalog.length} Products
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Catalog Grid */}
      <section className="py-12 lg:py-16 bg-slate-50/50">
        <div className="container-px mx-auto max-w-7xl space-y-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                className="flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-teal/40 transition-all duration-300 overflow-hidden group"
              >
                {/* Image Canvas with Category Badge */}
                <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-50/80 via-white to-slate-50/30 p-6 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 border border-slate-200/80 text-[10px] font-extrabold uppercase tracking-wider text-navy shadow-2xs">
                      {model.operationType}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-600">
                      Type {model.typeNumber < 10 ? `0${model.typeNumber}` : model.typeNumber}
                    </span>
                  </div>

                  <img
                    src={model.image}
                    alt={model.name}
                    className="max-h-[170px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-md"
                    loading="lazy"
                  />

                  <button
                    onClick={() => setSelectedModalModel(model)}
                    className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    title="Quick Specs Preview"
                  >
                    <span className="px-3.5 py-1.5 rounded-lg bg-navy/90 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-amber" />
                      <span>Quick Technical Specs</span>
                    </span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {model.highlights && model.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {model.highlights.slice(0, 2).map((h) => (
                          <span
                            key={h}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors leading-snug">
                      {model.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {model.tagline}
                    </p>

                    <div className="mt-4 space-y-1.5 text-xs bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="font-medium">Size Range:</span>
                        <span className="font-bold text-navy truncate max-w-[160px]">
                          {model.sizeRange}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="font-medium">Pressure Class:</span>
                        <span className="font-bold text-navy truncate max-w-[160px]">
                          {model.pressureClass}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="font-medium">Body Material:</span>
                        <span className="font-semibold text-slate-800 truncate max-w-[160px]">
                          {model.bodyMaterial.split('/')[0]}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="font-medium">Seat / Screen:</span>
                        <span className="font-bold text-emerald-600 truncate max-w-[160px]">
                          {model.seatMaterial.split('/')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 text-[11px] text-slate-500 line-clamp-1">
                      <span className="font-semibold text-slate-700">Suitable Media: </span>
                      {model.suitableMedia.slice(0, 3).join(', ')}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedModalModel(model)}
                      className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 hover:border-navy bg-white hover:bg-slate-50 text-navy text-xs font-bold text-center transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-teal" />
                      <span>Specifications</span>
                    </button>

                    <Link
                      href={`/contact?product=GGCValves&model=${encodeURIComponent(model.name)}`}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-bold text-center transition-colors shadow-2xs flex items-center justify-center gap-1"
                    >
                      <span>RFQ Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Technical Comparison Matrix */}
      <section id="comparison-matrix" className="py-16 bg-white border-y border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Technical Comparison Matrix
            </span>
            <h2 className="text-2xl font-bold text-navy mt-1">
              Valve Bridge GGC Valves Complete Engineering Table (30 Models)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
              Compare valve families, size capacities, pressure ratings, body metallurgy, and standards across all 30 Valve Bridge Gate, Knife Gate, Globe, Check, and Pipeline Strainer models.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-navy font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5 whitespace-nowrap">Model Name</th>
                  <th className="p-3.5 whitespace-nowrap">Configuration</th>
                  <th className="p-3.5 whitespace-nowrap">Size Range</th>
                  <th className="p-3.5 whitespace-nowrap">Pressure Rating</th>
                  <th className="p-3.5 whitespace-nowrap">Body Material</th>
                  <th className="p-3.5 whitespace-nowrap">Seat / Trim</th>
                  <th className="p-3.5 whitespace-nowrap">End Connection</th>
                  <th className="p-3.5 whitespace-nowrap">Standard</th>
                  <th className="p-3.5 whitespace-nowrap text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {ggcValvesCatalog.map((model) => (
                  <tr
                    key={model.id}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-navy whitespace-nowrap flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {model.typeNumber}
                      </span>
                      <span>{model.name}</span>
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          model.operationMode === 'automated'
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {model.operationType}
                      </span>
                    </td>
                    <td className="p-3.5 whitespace-nowrap font-medium text-slate-700">
                      {model.sizeRange}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.pressureClass}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.bodyMaterial.split('/')[0]}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.seatMaterial.split('/')[0]}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.endConnection.split('(')[0]}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.designStandard.split('/')[0]}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-right">
                      <button
                        onClick={() => setSelectedModalModel(model)}
                        className="text-xs font-bold text-teal hover:text-navy transition-colors cursor-pointer"
                      >
                        View &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Engineering Selection Principles */}
      <section className="py-16 bg-slate-50/50">
        <div className="container-px mx-auto max-w-7xl space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Technical Guide
            </span>
            <h2 className="text-2xl font-bold text-navy mt-1">
              GGC Valve &amp; Strainer Engineering Selection Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Critical hydraulic and metallurgy decisions when specifying gate, globe, check, knife gate, or strainer packages for plant piping.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal font-bold text-xs">
                01
              </div>
              <h3 className="font-bold text-navy text-sm">
                Isolation (Gate) vs. Throttling (Globe)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gate valves deliver unobstructed full-bore shutoff with minimal head loss and should operate strictly open or closed. Specify Straight, Y-Type, Angle, or Bellows-Sealed Globe valves whenever throttling, pressure reduction, or frequent modulation is required.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center text-amber font-bold text-xs">
                02
              </div>
              <h3 className="font-bold text-navy text-sm">
                Water Hammer &amp; Non-Slam Check Sizing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                On high-head vertical risers and multi-pump headers, sluggish swing checks slam loudly upon reverse flow. Select Spring-Assisted Silent/Non-Slam Check Valves, Dual Plate API 594 checks, or Slow-Closing Hydraulic Check Valves to eliminate destructive pressure surges.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-xs">
                03
              </div>
              <h3 className="font-bold text-navy text-sm">
                Bellows-Sealed Zero Stem Leakage
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For hot thermic transfer oil, hydrogen, toxic vapors, or high-pressure clean steam where conventional gland packing deteriorates, hydroformed double-ply SS316L/Ti Bellows-Sealed Globe Valves guarantee TA-LUFT ISO 15848 fugitive-emission containment.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center text-navy font-bold text-xs">
                04
              </div>
              <h3 className="font-bold text-navy text-sm">
                Continuous Downstream Protection
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protect precision control valves, PRVs, and pump impellers from weld slag and pipe rust using Y-Type Strainers up to DN300, high-capacity T-Type Strainers up to DN1200, or Duplex Basket Strainers for zero-downtime live basket cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Target Operating Domains */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Operating Domains
            </span>
            <h2 className="text-2xl font-bold text-navy mt-1">
              Global Application Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Valve Bridge GGC valves power mission-critical oil &amp; gas terminals, steam boilers, mining slurry plants, and municipal water utilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center text-amber mb-3">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">
                Power &amp; Superheated Steam
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                API 602 Class 800–1500# Forged Gate/Globe, Y-Pattern 600°C Globe Valves, and Pneumatic Turbine Check Valves for boiler headers.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-3">
                <Droplets className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">
                Waterworks &amp; Pumping Stations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                FBE-coated Resilient Seated Gate Valves, Electric Actuated Gate Valves, and Hydraulic Slow-Closing Butterfly Check Valves up to DN1200.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
                <Factory className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">
                Mining, Ash &amp; Pulp Slurry
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hardened Stainless Slurry Knife Gate Valves (Wafer, Lug, Electric &amp; Pneumatic) and Clog-Free Ball Check Valves built for solids handling.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 mb-3">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">
                Chemical, Marine &amp; Lube Skids
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-emission Bellows-Sealed Globe Valves, Co-Axial Check Valves, and Duplex Basket Strainers ensuring continuous 24/7 process integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Technical FAQs */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Technical Answers
            </span>
            <h2 className="text-2xl font-bold text-navy mt-1">
              Frequently Asked Engineering Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'When should I choose a Rising Stem (OS&Y) Gate Valve vs. a Non-Rising Stem (NRS) Gate Valve?',
                a: 'Specify an OS&Y Rising Stem Gate Valve where visual open/closed confirmation is mandatory and stem threads should stay outside corrosive process media (refineries, steam lines, fire mains). Choose an NRS Gate Valve in cramped mechanical vaults, underground utility chambers, or overhead racks lacking vertical stem travel clearance.',
              },
              {
                q: 'What is the advantage of a Y-Type Globe Valve over a Straight Pattern Globe Valve?',
                a: 'A conventional Straight Pattern Globe Valve forces fluid through two 90-degree turns, creating higher pressure drop. A Y-Type Globe Valve angles the stem at 45 degrees along a straighter flow path, significantly reducing turbulence and head loss while retaining high-pressure (PN160) & high-temperature (600°C) throttling accuracy.',
              },
              {
                q: 'Which Check Valve prevents water hammer best on tall pump discharge lines?',
                a: 'For medium-to-small vertical risers, Spring-Assisted Silent / Non-Slam Disc Check Valves and API 594 Dual Plate Check Valves close near zero forward velocity before reverse flow starts. For large-diameter DN300–DN1000 waterworks mains, choose Resistance Slow-Closing or Butterfly Hydraulic Check Valves with adjustable cushion closure.',
              },
              {
                q: 'Why install a Duplex Basket Strainer instead of a standard Y-Strainer?',
                a: 'A Y-Strainer or T-Strainer requires shutting down and depressurizing the pipeline to clean the basket. A Duplex Basket Strainer features two parallel vessels linked by a synchronized changeover valve, allowing operators to isolate and clean a clogged basket live online while uninterrupted flow continues through the standby chamber.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-navy">
                  <HelpCircle className="w-4 h-4 text-teal shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Direct Sourcing & RFQ Banner */}
      <section id="rfq-section" className="py-16 bg-white border-t border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl">
          <div className="rounded-2xl bg-navy text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-md">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified China Mill Sourcing &amp; Inspection</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Need Project Pricing for Gate, Globe, Check, Knife Gate or Strainer Bills?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Send your Valve Data Sheet (VDS), line list, or EPC tender BOQ. Valve Bridge manages direct mill sourcing, EN 10204 3.1 metallurgy verification, API 598 hydrostatic &amp; air seat testing, and 100% pre-shipment inspection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/contact?product=GGCValves"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white px-6 py-3.5 text-xs font-bold transition-colors shadow-xs"
              >
                <span>Submit RFQ / Valve Schedule</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 text-xs font-semibold transition-colors"
              >
                <span>Inspection Protocol</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Interactive Technical Specifications Modal */}
      {selectedModalModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                  {selectedModalModel.typeNumber}
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">
                    {selectedModalModel.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-teal">
                    {selectedModalModel.categoryLabel}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedModalModel(null)}
                className="w-8 h-8 rounded-lg bg-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-navy flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
              <div className="grid sm:grid-cols-12 gap-6 items-center bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                <div className="sm:col-span-4 flex justify-center">
                  <div className="w-36 h-36 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center shadow-2xs">
                    <img
                      src={selectedModalModel.image}
                      alt={selectedModalModel.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:col-span-8 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Product Architecture &amp; Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedModalModel.overview}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-navy block mb-1.5">
                      Design Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                      {selectedModalModel.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-navy block">
                  Key Engineering Advantages
                </span>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {selectedModalModel.keyBenefits.map((b, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-emerald-950 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal" />
                  <span>Technical Specifications Matrix</span>
                </span>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs">
                    <tbody className="divide-y divide-slate-100">
                      {selectedModalModel.specsTable.map((spec) => (
                        <tr key={spec.label} className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-500 bg-slate-50/70 w-1/3">
                            {spec.label}
                          </td>
                          <td className="p-3 font-bold text-navy">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Suitable Media & Target Industries */}
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-bold text-navy block mb-1">
                    Suitable Process Media:
                  </span>
                  <span className="text-slate-600">
                    {selectedModalModel.suitableMedia.join(', ')}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-bold text-navy block mb-1">
                    Target Operating Industries:
                  </span>
                  <span className="text-slate-600">
                    {selectedModalModel.industries.join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <div className="text-xs text-slate-500 hidden sm:block">
                Available with EN 10204 3.1 mill certification &amp; third-party inspection.
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setSelectedModalModel(null)}
                  className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href={`/contact?product=GGCValves&model=${encodeURIComponent(selectedModalModel.name)}`}
                  className="px-5 py-2 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Request Quote for this Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
