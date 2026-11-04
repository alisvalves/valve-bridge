'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Play, Pause, Volume2, VolumeX, Sparkles, SlidersHorizontal, Award, Factory } from 'lucide-react';

export function MinimalValveHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const keyHighlights = [
    '100% Factory Hydro & Shell Testing',
    'ISO 5211 Direct Actuator Mounting',
    'EN 10204 3.1 Material Traceability',
    'Pre-Shipment Third-Party Inspection',
  ];

  const quickStats = [
    { value: '500+', label: 'Inspected Batches', icon: Factory },
    { value: 'API 598', label: 'Zero Leakage Standard', icon: ShieldCheck },
    { value: '100%', label: 'Tested Before Dispatch', icon: Award },
    { value: '15+ Yrs', label: 'Engineering Experience', icon: SlidersHorizontal },
  ];

  return (
    <section className="relative w-full min-h-[660px] lg:min-h-[740px] xl:min-h-[780px] flex flex-col justify-between overflow-hidden bg-[#071329] text-white">
      {/* 1. Background Video Layer - Highlighted & Crystal Clear */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          key="/assets/aistudio/10854679-hd_1920_1080_30fps_7e3f9fb3.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.01] transform"
        >
          <source src="/assets/aistudio/10854679-hd_1920_1080_30fps_7e3f9fb3.mp4" type="video/mp4" />
        </video>

        {/* Dark Blue Overlay with 40% decreased transparency (70% opacity) */}
        <div className="absolute inset-0 bg-[#0B1F3A]/70 pointer-events-none" />
      </div>

      {/* 2. Main Hero Content (Positioned over the Video with Expanded Width) */}
      <div className="relative z-10 container-px mx-auto max-w-7xl pt-16 sm:pt-20 lg:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-4xl xl:max-w-5xl lg:-translate-x-16 xl:-translate-x-24">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 shadow-md mb-6 sm:mb-8 text-xs font-semibold tracking-[0.16em] uppercase text-white">
            <span className="w-2 h-2 rounded-full bg-[#FF8C00] shadow-[0_0_10px_#FF8C00] animate-pulse" />
            <span>VALVE BRIDGE • CHINA SOURCING CONSULTANCY</span>
          </div>

          {/* Main Headline - Wide, Bold & High Contrast */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Source Industrial Valves from China
            <span className="block mt-2 sm:mt-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA337] via-[#FF8C00] to-[#FFBA6B]">
                Without Risk.
              </span>{' '}
              <span className="text-white">Without Guesswork.</span>
            </span>
          </h1>

          {/* Subtitle / Description - Expanded width */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed font-normal max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            We bridge industrial buyers, EPC contractors and consultants directly with verified valve manufacturers. Complete factory inspection, hydro leak testing, and technical compliance before dispatch.
          </p>

          {/* Value Highlights Chips */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-medium text-white">
            {keyHighlights.map((point) => (
              <div
                key={point}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 text-slate-100 hover:border-[#FF8C00]/60 transition-colors duration-150 shadow-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8C00] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-9 sm:mt-11 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#FF8C00] hover:bg-[#ff9a1f] text-white px-8 py-4 text-base font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/45 transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Get a Sourcing Plan</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black/40 hover:bg-black/60 border border-white/30 hover:border-white/50 text-white backdrop-blur-md px-7 py-4 text-base font-semibold transition-all duration-200 active:scale-[0.98] shadow-md"
            >
              <span>Browse Valve Catalog</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-200 hover:text-white transition-colors duration-150 px-3 py-2 drop-shadow-sm"
            >
              <span>How our inspection works →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar: Metrics Grid + Discreet Video Player Status Controls */}
      <div className="relative z-10 w-full border-t border-white/15 bg-[#0B1F3A]/70 backdrop-blur-md">
        <div className="container-px mx-auto max-w-7xl py-5 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 flex-1">
              {quickStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF8C00]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Video Live Badge and Control Buttons */}
            <div className="flex items-center justify-between lg:justify-end gap-3 pt-3 lg:pt-0 border-t border-white/10 lg:border-t-0 shrink-0">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono tracking-wide text-white/90">INDUSTRIAL PLANT & INFRASTRUCTURE</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  title={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  title={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
