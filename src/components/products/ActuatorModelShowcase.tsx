'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProductModel } from '@/data/products';
import {
  CheckCircle2,
  Gauge,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  FileText,
  SlidersHorizontal,
  ChevronRight,
  ChevronDown,
  Layers,
  Zap,
  Wind,
  Activity,
  Check,
  HelpCircle,
  Factory,
  Flame,
  Maximize2,
} from 'lucide-react';

interface Props {
  models: ProductModel[];
  initialModelId?: string;
}

export default function ActuatorModelShowcase({ models, initialModelId }: Props) {
  const [selectedId, setSelectedId] = useState<string>(initialModelId || models[0]?.id || '');
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('spotlight');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentModel = models.find((m) => m.id === selectedId) || models[0];

  const getCategoryIcon = (id: string) => {
    if (id.includes('electric')) return <Zap className="w-3.5 h-3.5 text-amber" />;
    if (id.includes('diaphragm')) return <Activity className="w-3.5 h-3.5 text-sky-500" />;
    return <Wind className="w-3.5 h-3.5 text-teal" />;
  };

  const currentGallery = currentModel.gallery && currentModel.gallery.length > 0
    ? currentModel.gallery
    : [currentModel.image];

  const activeImage = currentGallery[activeImageIndex] || currentModel.image;

  return (
    <div id="models-section" className="scroll-mt-24 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Product Series &amp; Models
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mt-1">
            Actuator Models &amp; Specifications
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-xl">
            Verified technical data from direct manufacturer source. Select any model below to view complete engineering parameters.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 text-xs font-semibold shrink-0">
          <button
            onClick={() => setViewMode('spotlight')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              viewMode === 'spotlight'
                ? 'bg-white text-navy shadow-xs font-bold'
                : 'text-slate-600 hover:text-navy'
            }`}
          >
            Interactive Spotlight
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-navy shadow-xs font-bold'
                : 'text-slate-600 hover:text-navy'
            }`}
          >
            All 6 Models
          </button>
        </div>
      </div>

      {viewMode === 'spotlight' ? (
        /* ================= SPOTLIGHT VIEW ================= */
        <div className="space-y-6">
          {/* Clean Model Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {models.map((model) => {
              const isSelected = model.id === currentModel.id;
              return (
                <button
                  key={model.id}
                  onClick={() => {
                    setSelectedId(model.id);
                    setActiveImageIndex(0);
                    setOpenFaq(null);
                  }}
                  className={`group relative text-left p-3 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-teal shadow-md ring-2 ring-teal/20'
                      : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="p-1 rounded-md bg-white border border-slate-200/80 shadow-2xs">
                      {getCategoryIcon(model.id)}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                    )}
                  </div>
                  <div>
                    <div
                      className={`text-xs font-bold line-clamp-2 leading-snug ${
                        isSelected ? 'text-teal-dark' : 'text-navy group-hover:text-teal'
                      }`}
                    >
                      {model.name}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 truncate">
                      {model.mechanism}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Model Spotlight Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Product Visual & Gallery Selector */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[380px] aspect-square rounded-2xl bg-gradient-to-b from-slate-50 via-slate-50/50 to-white border border-slate-200/80 p-8 flex items-center justify-center group overflow-hidden">
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 border border-slate-200 text-[11px] font-bold text-navy shadow-2xs">
                      {currentModel.mechanism}
                    </span>
                  </div>
                  <img
                    src={activeImage}
                    alt={currentModel.name}
                    className="max-h-[260px] w-auto max-w-full object-contain select-none transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                  />
                </div>

                {/* Multiple Gallery Renders */}
                {currentGallery.length > 1 && (
                  <div className="mt-3 flex items-center gap-2">
                    {currentGallery.map((img, idx) => (
                      <button
                        key={img}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-12 h-12 rounded-lg border p-1 bg-white transition-all overflow-hidden ${
                          activeImageIndex === idx
                            ? 'border-teal ring-2 ring-teal/20 shadow-2xs'
                            : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                        }`}
                        title={`View image ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ))}
                    <span className="text-[11px] text-slate-400 font-medium ml-1">
                      {currentGallery.length} Product Renders
                    </span>
                  </div>
                )}

                <div className="mt-3 text-center">
                  <span className="text-[11px] font-semibold text-slate-400">
                    Mounting Standard: {currentModel.mounting}
                  </span>
                </div>
              </div>

              {/* Product Key Details */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                {/* 4 Core Highlights from alisvalves.com */}
                {currentModel.highlights && currentModel.highlights.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    {currentModel.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-[11px] font-semibold flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy">
                    {currentModel.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {currentModel.overview}
                  </p>
                </div>

                {/* 4 Clean Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Torque / Thrust
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-navy mt-1 truncate">
                      {currentModel.torqueOrThrust}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Input Supply
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-navy mt-1 truncate">
                      {currentModel.supply}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Rotation / Motion
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-navy mt-1 truncate">
                      {currentModel.rotationOrMotion}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Enclosure Rating
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-1 truncate">
                      {currentModel.enclosure}
                    </div>
                  </div>
                </div>

                {/* Key Benefits Bullets */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Engineering Capabilities:
                  </div>
                  {currentModel.keyBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Valves Tag & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-navy">Recommended Valve Fit: </span>
                    {currentModel.suitableValves.join(', ')}
                  </div>

                  <Link
                    href={`/contact?product=Actuator&model=${encodeURIComponent(currentModel.name)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber hover:bg-amber-dark text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-xs shrink-0"
                  >
                    <span>Request Mill RFQ for this Model</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Specifications Grid from alisvalves.com */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal" />
                <span>Technical Specifications &amp; Overview ({currentModel.name})</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                {currentModel.specsTable.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-3 rounded-lg bg-slate-50/70 border border-slate-100 flex items-center justify-between gap-2"
                  >
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="text-navy font-semibold text-right truncate">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Industries & Critical Applications (if available) */}
            {currentModel.industries && currentModel.applicationsList && (
              <div className="pt-6 border-t border-slate-200/80 grid md:grid-cols-2 gap-6 text-xs">
                {/* Industries */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-navy uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2">
                    <Factory className="w-4 h-4 text-teal" />
                    <span>Industries Served</span>
                  </div>
                  <div className="space-y-2">
                    {currentModel.industries.map((ind) => (
                      <div key={ind.name} className="flex flex-col">
                        <span className="font-bold text-navy">{ind.name}</span>
                        <span className="text-slate-500 text-[11px]">{ind.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-navy uppercase tracking-wider text-[11px] mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber" />
                    <span>Critical Applications</span>
                  </div>
                  <div className="space-y-2">
                    {currentModel.applicationsList.map((app) => (
                      <div key={app.name} className="flex flex-col">
                        <span className="font-bold text-navy">{app.name}</span>
                        <span className="text-slate-500 text-[11px]">{app.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Technical FAQs from alisvalves.com */}
            {currentModel.faqs && currentModel.faqs.length > 0 && (
              <div className="pt-6 border-t border-slate-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-teal" />
                  <span>Frequently Asked Questions ({currentModel.name})</span>
                </div>
                <div className="space-y-2">
                  {currentModel.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={faq.q}
                        className="rounded-xl border border-slate-200/80 bg-slate-50/50 overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs font-bold text-navy hover:text-teal transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${
                              isOpen ? 'rotate-180 text-teal' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2 bg-white">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ================= GRID VIEW ================= */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white hover:border-teal/50 hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100">
                <img
                  src={model.image}
                  alt={model.name}
                  className="max-h-[160px] w-auto max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-teal">
                    {model.mechanism}
                  </div>
                  <h3 className="text-base font-bold text-navy mt-1">
                    {model.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 line-clamp-2">
                    {model.tagline}
                  </p>
                  <div className="mt-4 space-y-1 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-100 text-slate-500">
                      <span>Torque Range</span>
                      <span className="font-semibold text-navy truncate max-w-[140px]">
                        {model.torqueOrThrust}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100 text-slate-500">
                      <span>Supply</span>
                      <span className="font-semibold text-navy truncate max-w-[140px]">
                        {model.supply}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-500">
                      <span>Enclosure</span>
                      <span className="font-semibold text-emerald-600">
                        {model.enclosure}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedId(model.id);
                      setViewMode('spotlight');
                    }}
                    className="flex-1 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy text-xs font-semibold text-center transition-colors"
                  >
                    View Details
                  </button>
                  <Link
                    href={`/contact?product=Actuator&model=${encodeURIComponent(model.name)}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-amber hover:bg-amber-dark text-white text-xs font-bold text-center transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
