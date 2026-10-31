'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ValveSlide {
  id: string;
  name: string;
  type: string;
  image: string;
}

const valveSlides: ValveSlide[] = [
  {
    id: 'trunnion-ball',
    name: 'Forged Trunnion Ball Valve',
    type: 'API 6D • Class 150 – 2500',
    image: '/assets/valve-trunnion-ball.png',
  },
  {
    id: 'knife-gate',
    name: 'Slurry Knife Gate Valve',
    type: 'Bi-Directional • PN 10 – 25',
    image: '/assets/valve-knife-gate.png',
  },
  {
    id: 'butterfly',
    name: 'Triple Offset Butterfly Valve',
    type: 'Metal Seated • Class 150 – 600',
    image: '/assets/valve-butterfly.png',
  },
  {
    id: 'control-globe',
    name: 'Precision Globe Control Valve',
    type: 'Pneumatic Actuator • Class 150 – 600',
    image: '/assets/valve-control-globe.png',
  },
];

export function MinimalValveHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  const current = valveSlides[currentIndex];

  const changeSlide = (newIndex: number) => {
    if (fadeState === 'out') return;
    setFadeState('out');
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeState('in');
    }, 180);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + valveSlides.length) % valveSlides.length;
    changeSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % valveSlides.length;
    changeSlide(nextIdx);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, fadeState]);

  const slideNumber = String(currentIndex + 1).padStart(2, '0');
  const totalSlides = String(valveSlides.length).padStart(2, '0');

  return (
    <section className="relative bg-white overflow-hidden border-b border-slate-100">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px] lg:min-h-[660px] py-16 lg:py-24">
          
          {/* Left Column — Hero Content */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Text */}
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-5">
              CHINA SOURCING CONSULTANCY
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-bold tracking-tight text-[#14263D] leading-[1.12] max-w-xl">
              Source Industrial Valves from China
              <span className="block mt-2">
                <span className="text-[#F59E0B]">Without Risk.</span> Without Guesswork.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              We help industrial companies, EPC contractors and consultants source the right valves
              from China with verified suppliers, strict quality control and complete import support.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] hover:bg-[#d97706] text-white px-7 py-3.5 text-sm font-semibold transition-colors duration-200 shadow-sm group"
              >
                <span>Get a Sourcing Plan</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-[#14263D] px-7 py-3.5 text-sm font-semibold transition-colors duration-200"
              >
                <span>Talk to an Expert</span>
              </Link>
            </div>
          </div>

          {/* Right Side — Single Valve Product Visual & Minimalist Slider */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Single Valve Image Container */}
            <div className="relative w-full max-w-[460px] lg:max-w-[500px] flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px]">
              
              {/* Product Visual with Clean Fade/Slide Transition */}
              <div
                className={`w-full flex flex-col items-center justify-center transition-all duration-300 ease-out transform ${
                  fadeState === 'in'
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-3 scale-[0.98]'
                }`}
              >
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-auto max-h-[360px] sm:max-h-[420px] object-contain select-none pointer-events-none"
                />

                {/* Very subtle, soft natural contact shadow beneath the valve */}
                <div className="w-3/5 h-4 bg-slate-900/[0.08] blur-xl rounded-[50%] -mt-2 pointer-events-none" />
              </div>

              {/* Minimal Slider Controls (Placed on the right / bottom-right) */}
              <div className="w-full mt-6 pt-4 flex items-center justify-between border-t border-slate-100">
                {/* Active Valve Label */}
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#14263D]">
                    {current.name}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {current.type}
                  </div>
                </div>

                {/* Right Side Controls: Slide Counter + Thin Arrows */}
                <div className="flex items-center gap-4">
                  {/* Understated Slide Counter */}
                  <span className="text-xs font-mono font-medium text-slate-400 tracking-wider">
                    {slideNumber} / {totalSlides}
                  </span>

                  {/* Thin-line Minimal Arrow Controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Valve"
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-colors duration-200 active:scale-95"
                    >
                      <ChevronLeft className="h-4 w-4 stroke-[1.5]" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Valve"
                      className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-colors duration-200 active:scale-95"
                    >
                      <ChevronRight className="h-4 w-4 stroke-[1.5]" />
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
