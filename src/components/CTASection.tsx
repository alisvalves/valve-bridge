import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Tell us about your project and we'll send a structured sourcing plan within 48 hours.",
  subtitle = "Direct factory shortlists, compliance checks, and landed cost models. No obligation.",
  primary = { to: '/contact', label: 'Get a Sourcing Plan' },
  secondary = { to: '/case-studies', label: 'See Case Studies' },
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-hero-gradient p-10 md:p-16 text-white shadow-elegant">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-amber backdrop-blur mb-5">
              <ShieldCheck className="h-4 w-4" /> 100% Guaranteed Factory Witness
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={primary.to}
                className="inline-flex items-center gap-2 rounded-md bg-amber px-7 py-3.5 text-sm font-semibold text-navy hover:brightness-105 transition shadow-card"
              >
                {primary.label} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondary.to}
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                {secondary.label}
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
