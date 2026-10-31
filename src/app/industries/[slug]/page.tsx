import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { RFQForm } from '@/components/RFQForm';
import { industries } from '@/data/industries';
import { AlertTriangle, Boxes, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = industries.find((ind) => ind.slug === params.slug);
  if (!industry) return { title: 'Industry Not Found' };
  return {
    title: `${industry.title} — China Valve Sourcing & Industrial Valve Procurement | Valve Bridge`,
    description: industry.short,
  };
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = industries.find((ind) => ind.slug === params.slug);
  if (!industry) notFound();

  const otherIndustries = industries.filter((ind) => ind.slug !== industry.slug);

  const approaches = [
    {
      title: "Specification clarity",
      desc: `We translate harsh site operating conditions into a watertight ${industry.title.toLowerCase()}-grade valve datasheet.`
    },
    {
      title: "Right-fit suppliers",
      desc: "Pre-audited manufacturers proven in this exact sector — not generic catalogue trading intermediaries."
    },
    {
      title: "Sector-aware QC",
      desc: "Inspection test plans calibrated to the exact pressure, temperature, and media acceptance criteria of this industry."
    },
    {
      title: "Long-term spares",
      desc: "Revision-controlled drawing sets and direct foundry ties to guarantee spares continuity for upcoming shutdowns."
    }
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Industry"
        title={`China Valve Sourcing for the ${industry.title}`}
        subtitle={industry.short}
        crumbs={[
          { to: '/industries', label: 'Industries' },
          { to: `/industries/${industry.slug}`, label: industry.title }
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={industry.image}
              alt={industry.title}
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>

          <div>
            <div className="eyebrow mb-3">Industry Challenges</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">
              What makes valve sourcing demanding in {industry.title.toLowerCase()}
            </h2>
            <ul className="mt-6 space-y-4">
              {industry.challenges.map((ch) => (
                <li key={ch} className="flex gap-3.5 items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber/20 text-amber-dark flex-none mt-0.5">
                    <AlertTriangle className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-ink leading-relaxed font-medium">{ch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        muted
        eyebrow="Applications"
        title="Valve applications we source for this sector"
        intro="Tailored valves engineered for specific process lines, media, and design lifetimes."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {industry.applications.map((app) => (
            <div key={app} className="flex gap-4 rounded-xl bg-white p-6 shadow-card border border-border hover-lift">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-teal/10 text-teal">
                <Boxes className="h-5 w-5" />
              </div>
              <p className="text-ink font-medium leading-relaxed self-center">{app}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The Valve Bridge Approach"
        title={`How we source for ${industry.title.toLowerCase()} projects`}
        intro="Bridging the gap between international engineering standards and China manufacturing clusters."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approaches.map((app) => (
            <div key={app.title} className="rounded-xl border border-border bg-white p-6 hover-lift shadow-card">
              <CheckCircle2 className="h-6 w-6 text-teal" />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{app.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Get a Sourcing Plan"
        title={`Tell us about your ${industry.title.toLowerCase()} project`}
        intro="Upload your project specs or list your valve quantities. We will prepare an end-to-end China procurement blueprint within 48 hours."
      >
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-white p-8 md:p-10 shadow-card">
          <RFQForm />
        </div>
      </Section>

      <Section eyebrow="Related" title="Other Industry Sectors">
        <div className="grid gap-6 md:grid-cols-3">
          {otherIndustries.map((other) => (
            <Link
              key={other.slug}
              href={`/industries/${other.slug}`}
              className="group rounded-xl border border-border bg-white p-6 hover-lift"
            >
              <h3 className="font-display text-lg font-bold text-navy group-hover:text-teal transition">
                {other.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {other.short}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal">
                View sector <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
