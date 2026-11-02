'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100);
        setScrollProgress(progress);
        // Show only when scrolled down 70% or more
        setIsVisible(progress >= 70);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circular progress ring calculation
  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  // Progress normalized from 70% to 100% for the visual ring
  const normalizedProgress = Math.max(0, (scrollProgress - 70) / 30);
  const strokeDashoffset = circumference - normalizedProgress * circumference;

  return (
    <div
      className={`fixed bottom-[86px] right-7 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#0F214A] text-white shadow-lg hover:shadow-xl hover:bg-[#152a5c] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:ring-offset-2"
      >
        {/* SVG Circular Scroll Progress Ring */}
        <svg
          className="absolute inset-0 -rotate-90 pointer-events-none"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          {/* Background track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-white/10"
            strokeWidth="2.5"
            fill="transparent"
          />
          {/* Active orange progress bar */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-[#FF8C00] transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Arrow Icon with Hover Elevation */}
        <ArrowUp className="h-5 w-5 text-white group-hover:text-[#FF8C00] transition-all duration-200 transform group-hover:-translate-y-0.5" />

        {/* Minimal Tooltip for Desktop */}
        <span className="pointer-events-none absolute right-full mr-3 hidden lg:block whitespace-nowrap rounded-md bg-[#0F214A] px-2.5 py-1 text-xs font-medium text-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Back to top
        </span>
      </button>
    </div>
  );
};
