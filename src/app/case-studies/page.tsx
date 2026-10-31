import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { caseStudies } from '@/data/caseStudies';
import { ArrowRight, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies — China Valve Sourcing & Industrial Valve Procurement Wins | Valve Bridge',
  description: 'China valve sourcing case studies — 32% cost savings, a $480K supplier fraud caught and a water-project batch saved by pre-shipment inspection.',
};

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Case Studies"
        title="Real outcomes. Real numbers. Real factories."
        subtitle="The most honest measure of a sourcing partner is what happens after the PO is signed. Here are three engagements where our process made the difference."
        crumbs={[{ to: '/case-studies', label: 'Case Studies' }]}
      />

      <Section>
        <div className="grid gap-8">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group grid gap-8 rounded-2xl border border-border bg-white p-8 md:p-10 hover-lift md:grid-cols-[auto_1fr] items-start shadow-card"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber font-display text-2xl font-bold text-navy flex-none">
                0{i + 1}
              </div>

              <div>
                <Quote className="h-6 w-6 text-teal" />
                <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-navy group-hover:text-teal transition">
                  {cs.title}
                </h2>
                <p className="mt-3 text-muted-foreground text-base leading-relaxed">
                  {cs.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.results.slice(0, 2).map((res) => (
                    <span
                      key={res}
                      className="rounded-full bg-teal/10 px-3.5 py-1 text-xs font-semibold text-teal"
                    >
                      {res}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal group-hover:text-teal-dark">
                  Read the complete case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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
