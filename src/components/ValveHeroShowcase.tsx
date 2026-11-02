'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Sliders,
  PhoneCall,
  Sparkles,
  Award
} from 'lucide-react';

interface ValveProduct {
  id: string;
  category: string;
  title: string;
  highlight: string;
  highlightColor: string;
  badgeBg: string;
  subtitle: string;
  price: string;
  priceSubtitle: string;
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
  savingsTag: string;
}

const valveCatalog: ValveProduct[] = [
  {
    id: 'pneumatic-butterfly',
    category: 'Rotary Quarter-Turn Series',
    title: 'Pneumatic Butterfly',
    highlight: 'Wafer Style',
    highlightColor: 'text-blue-600',
    badgeBg: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    subtitle: 'ALIS pneumatic actuator wafer butterfly valve with CF8 disc and resilient seat.',
    price: '$ 180 – $ 1,450',
    priceSubtitle: 'Direct ex-mill price (vs $ 380+ EU stockist)',
    savingsTag: '42% Cost Advantage',
    image: '/assets/aistudio/17_38e28135.png',
    specs: [
      { label: 'Rating', value: 'PN 16 / Class 150' },
      { label: 'Disc', value: 'CF8 Stainless Steel' },
      { label: 'Sizes', value: 'DN40 to DN600' },
      { label: 'Testing', value: 'ISO 5208 Rate A' }
    ]
  },
  {
    id: 'pneumatic-3pc-ball',
    category: 'High Pressure Series',
    title: 'Pneumatic 3-Pc Ball',
    highlight: '2000 WOG',
    highlightColor: 'text-amber-600',
    badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    subtitle: '3-Piece stainless steel CF8 ball valve with direct-mount ALIS pneumatic actuator.',
    price: '$ 120 – $ 890',
    priceSubtitle: 'Direct ex-mill price (vs $ 290+ EU stockist)',
    savingsTag: '48% Cost Advantage',
    image: '/assets/aistudio/12_509d0009.png',
    specs: [
      { label: 'Rating', value: '2000 WOG / 1000 WOG' },
      { label: 'Body', value: 'Investment Cast CF8' },
      { label: 'Sizes', value: '1/2" to 4" (DN15-100)' },
      { label: 'Seal', value: 'Reinforced PTFE / RPTFE' }
    ]
  },
  {
    id: 'pneumatic-upvc-ball',
    category: 'Chemical & Water Series',
    title: 'Pneumatic UPVC Ball',
    highlight: 'Anti-Corrosion',
    highlightColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    subtitle: 'True union UPVC ball valve with pneumatic actuator for acid, alkaline and brine lines.',
    price: '$ 95 – $ 620',
    priceSubtitle: 'Direct ex-mill price (vs $ 220+ EU stockist)',
    savingsTag: '50% Cost Advantage',
    image: '/assets/aistudio/9_7adeaebf.png',
    specs: [
      { label: 'Rating', value: '235 PSI / PN 16' },
      { label: 'Body', value: 'Virgin U-PVC Resin' },
      { label: 'Sizes', value: 'DN15 to DN100 (1/2" - 4")' },
      { label: 'Connection', value: 'Socket / Threaded Union' }
    ]
  },
  {
    id: 'electric-globe-control',
    category: 'Precision Control Series',
    title: 'Electric Globe Control',
    highlight: 'Smart Actuator',
    highlightColor: 'text-indigo-600',
    badgeBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    subtitle: 'Intelligent electric modulating globe control valve with LCD digital positioner.',
    price: '$ 750 – $ 4,800',
    priceSubtitle: 'Direct ex-mill price (vs $ 1,650+ EU stockist)',
    savingsTag: '39% Cost Advantage',
    image: '/assets/aistudio/25_3bdc4503.png',
    specs: [
      { label: 'Rating', value: 'DN250 • PN 25 / Class 150' },
      { label: 'Actuator', value: 'Intelligent Electric 4-20mA' },
      { label: 'Body', value: 'WCB Cast Carbon Steel' },
      { label: 'Characteristic', value: 'Equal % / Linear' }
    ]
  }
];

export function ValveHeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const current = valveCatalog[currentIndex];
  const prevIndex = (currentIndex - 1 + valveCatalog.length) % valveCatalog.length;
  const nextIndex = (currentIndex + 1) % valveCatalog.length;

  const prev = valveCatalog[prevIndex];
  const next = valveCatalog[nextIndex];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prevIndex);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(nextIndex);
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  return (
    <section className="relative overflow-hidden bg-[#f4f5f8] text-slate-900 border-b border-slate-200">
      {/* Studio Radial Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_45%,#ffffff_0%,#f0f2f5_60%,#e5e8ed_100%)] pointer-events-none" />
      
      {/* Subtle Studio Floor Grid Perspective Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      {/* Top Floating Pill Menu Bar (Matching the Ducati Bike Design) */}
      <div className="container-px mx-auto max-w-7xl relative pt-6 pb-2">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left Mini Brand Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>200+ Audited Foundries</span>
          </div>

          {/* Center Floating Navigation Pills (Direct adaptation of [Models] [Services] [Experience] pills) */}
          <div className="flex items-center gap-1.5 sm:gap-2 mx-auto bg-white/60 p-1.5 rounded-full border border-slate-200/90 shadow-sm backdrop-blur-md">
            <button
              onClick={() => setCurrentIndex(0)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                currentIndex === 0
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              Ball Valves
            </button>
            <button
              onClick={() => setCurrentIndex(1)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                currentIndex === 1
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              Knife Gate
            </button>
            <button
              onClick={() => setCurrentIndex(2)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                currentIndex === 2
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              Control Globe
            </button>
            <Link
              href="/services/china-valve-sourcing"
              className="hidden md:inline-flex px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              All Services
            </Link>
          </div>

          {/* Right Action Quick Pill */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-2 text-xs sm:text-sm font-semibold hover:bg-slate-800 transition shadow-sm"
            >
              <span>Get RFQ</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Studio Showcase Stage */}
      <div className="container-px mx-auto max-w-7xl relative pt-6 pb-16 lg:pb-24">
        
        {/* Top Header Row: Left Title + Right Price/Metric */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pt-2">
          
          {/* Top-Left: Model Name & Description */}
          <div className="max-w-xl transition-all duration-300">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${current.badgeBg}`}>
                {current.category}
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                • Verified China Mill Direct
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-display">
              {current.title} <span className={current.highlightColor}>{current.highlight}</span>
            </h1>

            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              {current.subtitle}
            </p>
          </div>

          {/* Top-Right: Price & Cost Advantage Metric */}
          <div className="md:text-right flex-none transition-all duration-300">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700 mb-1.5">
              <Sparkles className="h-3 w-3" />
              <span>{current.savingsTag}</span>
            </div>

            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
              {current.price}
            </div>

            <p className="mt-1 text-xs text-slate-500 font-medium">
              {current.priceSubtitle}
            </p>
          </div>
        </div>

        {/* Center Stage & Carousel Carousel */}
        <div className="relative mt-4 sm:mt-8 flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
          
          {/* 3D Turntable Platform Base (Matching the circular pedestal in bike design) */}
          <div className="absolute bottom-6 sm:bottom-10 w-[320px] sm:w-[620px] lg:w-[860px] h-[70px] sm:h-[130px] lg:h-[160px] rounded-[50%] border-2 border-slate-300/80 bg-gradient-to-b from-white/95 via-slate-100/60 to-slate-200/50 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.18)] pointer-events-none">
            {/* Concentric turntable ring */}
            <div className="absolute inset-3 sm:inset-5 rounded-[50%] border border-slate-300/60 border-dashed" />
            <div className="absolute inset-8 sm:inset-12 rounded-[50%] border border-slate-300/40" />
            {/* Soft turntable contact shadow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-slate-900/15 blur-2xl rounded-[50%]" />
          </div>

          {/* Left Preview Product (Flanking bike on the left) */}
          <div
            onClick={handlePrev}
            className="absolute -left-12 sm:left-0 lg:left-4 z-10 w-44 sm:w-64 lg:w-80 cursor-pointer opacity-40 hover:opacity-75 transition-all duration-500 transform -translate-y-4 hover:scale-105 select-none"
            title={`View ${prev.title}`}
          >
            <div className="text-center mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden sm:block">
              ← {prev.title}
            </div>
            <img
              src={prev.image}
              alt={prev.title}
              className="w-full h-auto object-contain drop-shadow-lg filter grayscale-[30%] hover:grayscale-0 transition"
            />
          </div>

          {/* Center Stage Product (The Star of the show) */}
          <div className="relative z-20 w-[290px] sm:w-[480px] lg:w-[620px] transform transition-all duration-500 ease-out">
            <img
              src={current.image}
              alt={`${current.title} ${current.highlight}`}
              className="w-full h-auto max-h-[380px] sm:max-h-[460px] object-contain drop-shadow-[0_25px_35px_rgba(15,23,42,0.22)] mx-auto transition-transform duration-500 hover:scale-[1.02]"
            />
            {/* Direct contact shadow under valve */}
            <div className="w-3/4 h-8 bg-slate-950/30 blur-xl rounded-[50%] mx-auto -mt-4 pointer-events-none" />
          </div>

          {/* Right Preview Product (Flanking bike on the right) */}
          <div
            onClick={handleNext}
            className="absolute -right-12 sm:right-0 lg:right-4 z-10 w-44 sm:w-64 lg:w-80 cursor-pointer opacity-40 hover:opacity-75 transition-all duration-500 transform -translate-y-4 hover:scale-105 select-none"
            title={`View ${next.title}`}
          >
            <div className="text-center mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden sm:block">
              {next.title} →
            </div>
            <img
              src={next.image}
              alt={next.title}
              className="w-full h-auto object-contain drop-shadow-lg filter grayscale-[30%] hover:grayscale-0 transition"
            />
          </div>
        </div>

        {/* Carousel Navigation Pill Controls [ ←  → ] (Matching exactly under the turntable) */}
        <div className="flex flex-col items-center justify-center gap-4 relative z-30 -mt-2 sm:-mt-4">
          
          {/* Arrow Pill Controller */}
          <div className="inline-flex items-center gap-4 bg-white/95 px-5 py-2.5 rounded-full border border-slate-300 shadow-md backdrop-blur-md">
            <button
              onClick={handlePrev}
              aria-label="Previous Valve Model"
              className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-700 transition active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Model Indicator Dots */}
            <div className="flex items-center gap-2">
              {valveCatalog.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-6 bg-slate-900'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Select ${item.title}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Valve Model"
              className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-700 transition active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            Use arrow keys or click to rotate through direct mill valve series
          </p>
        </div>

        {/* Technical Specs Pill Cards (Bottom tabs corresponding to the selected valve) */}
        <div className="mt-8 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {current.specs.map((spec, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white/90 p-3.5 shadow-sm hover:border-slate-300 transition backdrop-blur-sm"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {spec.label}
              </div>
              <div className="mt-1 text-sm sm:text-base font-bold text-slate-900 font-display">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Dual Primary Call-to-Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 transition shadow-lg shadow-slate-900/15 active:scale-[0.98]"
          >
            <span>Request Mill Sourcing Plan</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services/supplier-verification"
            className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition shadow-sm"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Verify Factory Audit Protocol</span>
          </Link>
        </div>

      </div>

      {/* Trust Strip Directly Grounding the Hero */}
      <div className="bg-slate-900 text-white py-6 border-t border-slate-800">
        <div className="container-px mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-amber-400 flex-none" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              <strong className="text-white">Zero Trading Markups:</strong> We connect EPC buyers & plant consultants directly to audited Chinese foundries.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <span>• 100% On-Site ITP</span>
            <span>• API 598 Witnessed</span>
            <span>• EN 10204 3.1 MTC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
