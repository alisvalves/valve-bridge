'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ValveSlide {
  id: string;
  name: string;
  type: string;
  category: string;
  image: string;
  highlights: string[];
}

const valveSlides: ValveSlide[] = [
  {
    id: 'pneumatic-butterfly',
    name: 'Pneumatic Actuated Butterfly Valve',
    type: 'Wafer Style • PN16 / Class 150 • CF8 Disc',
    category: 'Rotary Quarter-Turn',
    image: '/assets/aistudio/17_38e28135.png',
    highlights: ['ALIS Pneumatic Actuator', 'Resilient EPDM / PTFE Seated', 'Zero Leakage Tight Shutoff'],
  },
  {
    id: 'pneumatic-3pc-ball',
    name: 'Pneumatic 3-Piece Stainless Ball Valve',
    type: '1" CF8 Stainless Steel • 2000 WOG High Pressure',
    category: 'Isolation & Shut-off',
    image: '/assets/aistudio/12_509d0009.png',
    highlights: ['3-Piece Full Bore Design', '2000 WOG Working Pressure', 'Direct ISO 5211 Mount'],
  },
  {
    id: 'pneumatic-upvc-ball',
    name: 'Pneumatic UPVC True Union Ball Valve',
    category: 'Corrosive & Water Treatment',
    type: 'DN25 (1") • 235 PSI • U-PVC Body',
    image: '/assets/aistudio/9_7adeaebf.png',
    highlights: ['Corrosion & Chemical Resistant', 'True Union Double Socket', 'High Flow Efficiency'],
  },
  {
    id: 'electric-globe-control',
    name: 'Electric Intelligent Globe Control Valve',
    category: 'Precision Modulating Flow',
    type: 'Flanged WCB Cast Body • DN250 • PN25',
    image: '/assets/aistudio/25_3bdc4503.png',
    highlights: ['Smart Digital Microprocessor Actuator', 'Accurate 4-20mA / Modbus Control', 'Heavy Industrial Flanged DN250'],
  },
];

export function MinimalValveHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = valveSlides[currentIndex];

  const changeSlide = useCallback((newIndex: number) => {
    if (fadeState === 'out') return;
    setFadeState('out');
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeState('in');
    }, 180);
  }, [fadeState]);

  const handlePrev = useCallback(() => {
    const nextIdx = (currentIndex - 1 + valveSlides.length) % valveSlides.length;
    changeSlide(nextIdx);
  }, [currentIndex, changeSlide]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % valveSlides.length;
    changeSlide(nextIdx);
  }, [currentIndex, changeSlide]);

  // Autoplay with hover pause
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleNext, isHovered]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const slideNumber = String(currentIndex + 1).padStart(2, '0');
  const totalSlides = String(valveSlides.length).padStart(2, '0');

  return (
    <section className="relative bg-white overflow-hidden border-b border-slate-100">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px] lg:min-h-[660px] py-14 lg:py-20">
          
          {/* Left Column — Hero Content */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Text */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FF8C00] animate-pulse" />
              <span>CHINA SOURCING CONSULTANCY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold tracking-tight text-[#0F214A] leading-[1.12] max-w-xl">
              Source Industrial Valves from China
              <span className="block mt-2">
                <span className="text-[#FF8C00]">Without Risk.</span> Without Guesswork.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              We help industrial companies, EPC contractors and consultants source the right valves
              from China with verified suppliers, strict quality control and complete import support.
            </p>

            {/* Active Valve Spec Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-600">
              {current.highlights.map((feat) => (
                <div key={feat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C00]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white px-7 py-3.5 text-sm font-semibold transition-colors duration-200 shadow-sm group"
              >
                <span>Get a Sourcing Plan</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-[#0F214A] px-7 py-3.5 text-sm font-semibold transition-colors duration-200"
              >
                <span>Talk to an Expert</span>
              </Link>
            </div>
          </div>

          {/* Right Side — High-Definition Valve Showcase Slider */}
          <div 
            className="lg:col-span-6 xl:col-span-5 relative flex flex-col items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background ambient radial glow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-amber-100/40 via-blue-50/50 to-transparent blur-3xl" />
            </div>

            {/* Valve Image Stage Container (Strict fixed height to prevent any layout jump) */}
            <div className="relative w-full max-w-[460px] lg:max-w-[480px] flex flex-col items-center justify-center">
              
              {/* Product Visual Container with Smooth Transition */}
              <div className="w-full h-[360px] sm:h-[420px] flex flex-col items-center justify-center relative">
                <div
                  className={`w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-out transform ${
                    fadeState === 'in'
                      ? 'opacity-100 translate-x-0 scale-100'
                      : 'opacity-0 translate-x-3 scale-[0.98]'
                  }`}
                >
                  <img
                    src={current.image}
                    alt={current.name}
                    className="max-h-[340px] sm:max-h-[390px] w-auto max-w-full object-contain select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(15,33,74,0.08)] filter"
                  />

                  {/* Soft realistic floor shadow */}
                  <div className="w-2/3 h-4 bg-slate-900/[0.08] blur-xl rounded-[50%] mt-2 pointer-events-none" />
                </div>
              </div>

              {/* Slider Navigation Bar */}
              <div className="w-full mt-4 pt-4 flex items-center justify-between border-t border-slate-100">
                {/* Active Valve Details */}
                <div className="text-left pr-4">
                  <div className="text-xs font-semibold text-[#0F214A] leading-tight">
                    {current.name}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {current.type}
                  </div>
                </div>

                {/* Right Side: Quick Thumbnail / Dot Indicators + Thin Navigation Arrows */}
                <div className="flex items-center gap-3 shrink-0">
                  {/* Interactive Dot Selectors */}
                  <div className="hidden sm:flex items-center gap-1.5">
                    {valveSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => changeSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentIndex === idx
                            ? 'w-6 bg-[#FF8C00]'
                            : 'w-2 bg-slate-200 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Slide Counter */}
                  <span className="text-xs font-mono font-medium text-slate-400 tracking-wider">
                    {slideNumber} / {totalSlides}
                  </span>

                  {/* Arrow Controls */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Valve"
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-colors duration-200 active:scale-95 shadow-2xs"
                    >
                      <ChevronLeft className="h-4 w-4 stroke-[1.75]" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Valve"
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-colors duration-200 active:scale-95 shadow-2xs"
                    >
                      <ChevronRight className="h-4 w-4 stroke-[1.75]" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
