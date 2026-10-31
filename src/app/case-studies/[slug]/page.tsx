import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { caseStudies } from '@/data/caseStudies';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  if (!caseStudy) return { title: 'Case Study Not Found' };
  return {
    title: `${caseStudy.title} — China Valve Sourcing Case Study | Valve Bridge`,
    description: caseStudy.summary,
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  if (!caseStudy) notFound();

  const steps = [
    { title: "The Challenge", desc: caseStudy.challenge },
    { title: "Our Approach", desc: caseStudy.approach },
    { title: "Execution", desc: caseStudy.execution }
  ];

  const related = caseStudies.filter((cs) => cs.slug !== caseStudy.slug);

  return (
    <div>
      <PageHeader
        eyebrow="Case Study"
        title={caseStudy.title}
        subtitle={caseStudy.summary}
        crumbs={[
          { to: '/case-studies', label: 'Case Studies' },
          { to: `/case-studies/${caseStudy.slug}`, label: 'Detail' }
        ]}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((st, idx) => (
            <article key={st.title} className="rounded-2xl border border-border bg-white p-7 shadow-card">
              <div className="text-xs font-bold uppercase tracking-wider text-amber">
                Phase 0{idx + 1}
              </div>
              <h2 className="mt-2 font-display text-xl font-bold text-navy">{st.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{st.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Results"
        title="Measurable Client Benefits"
        intro="Audited outcomes delivered directly to the project bottom line:"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {caseStudy.results.map((res) => (
            <div key={res} className="flex gap-3.5 rounded-xl bg-white p-6 shadow-card border border-border">
              <CheckCircle2 className="h-6 w-6 flex-none text-teal mt-0.5" />
              <p className="font-semibold text-navy leading-relaxed">{res}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="More Case Studies" title="Related Project Outcomes">
        <div className="grid gap-6 md:grid-cols-2">
          {related.map((rel) => (
            <Link
              key={rel.slug}
              href={`/case-studies/${rel.slug}`}
              className="group rounded-xl border border-border bg-white p-6 hover-lift shadow-card"
            >
              <h3 className="font-display text-lg font-bold text-navy group-hover:text-teal transition">
                {rel.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {rel.summary}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal">
                Read case study <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
