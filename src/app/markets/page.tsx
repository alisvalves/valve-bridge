import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { markets } from '@/data/markets';
import { ArrowRight, Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Markets Served — China Valve Sourcing for India, UAE & Africa | Valve Bridge',
  description: 'Industrial Valve Sourcing China for buyers in India, UAE and Africa — landed cost modelling, port-specific documentation and on-ground inspection in destination markets.',
};

export default function MarketsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Markets"
        title="Built around the markets we ship to"
        subtitle="Sourcing in China is only half the work. Documentation, duty, port clearance and last-mile delivery are all local to the destination — and we've built local depth where it matters."
        crumbs={[{ to: '/markets', label: 'Markets' }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {markets.map((m) => (
            <Link
              key={m.slug}
              href={`/markets/${m.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-navy text-white hover-lift p-8 min-h-[300px] flex flex-col justify-between"
            >
              <div>
                <Globe2 className="h-10 w-10 text-amber" />
                <h2 className="mt-6 font-display text-3xl font-bold text-white group-hover:text-amber transition">
                  {m.title}
                </h2>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  {m.short}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 inline-flex items-center gap-2 text-sm font-semibold text-amber group-hover:text-amber-light">
                Explore destination <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
