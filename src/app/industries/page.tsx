import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { industries } from '@/data/industries';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries — Industrial Valve Sourcing for Cement, Chemical, Water & OEM | Valve Bridge',
  description: 'Sector-specific valve sourcing from China for cement, chemical, water treatment and OEM machinery — the right spec, supplier and inspector for every industry.',
};

export default function IndustriesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Industries"
        title="Sector-specific sourcing expertise"
        subtitle="Different industries demand different valves, suppliers and standards. We bring the right specialists, references and supplier shortlists to each sector."
        crumbs={[{ to: '/industries', label: 'Industries' }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group rounded-2xl border border-border bg-white overflow-hidden hover-lift flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="font-display text-2xl font-bold text-white group-hover:text-amber transition">
                    {ind.title}
                  </h2>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    {ind.short}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border/70 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy">
                      Core Sector Challenges:
                    </span>
                    <ul className="space-y-1.5 text-sm text-ink/80">
                      {ind.challenges.slice(0, 2).map((ch) => (
                        <li key={ch} className="flex items-start gap-2">
                          <span className="text-amber font-bold">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal group-hover:text-teal-dark">
                  Explore {ind.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
