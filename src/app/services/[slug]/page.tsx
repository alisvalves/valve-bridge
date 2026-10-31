import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { RFQForm } from '@/components/RFQForm';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { CheckCircle2, AlertOctagon, ArrowRight, MessageSquare } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} — China Valve Sourcing Service | Valve Bridge`,
    description: service.short,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div>
      <PageHeader
        eyebrow="Service"
        title={`${service.title} — Done Right, From Start to Finish`}
        subtitle={service.description}
        crumbs={[
          { to: '/services', label: 'Services' },
          { to: `/services/${service.slug}`, label: service.title }
        ]}
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-navy hover:brightness-105 transition shadow-card"
          >
            Request a Sourcing Plan <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-white shadow-card hover:brightness-110 transition"
            style={{ backgroundColor: '#25D366' }}
          >
            <MessageSquare className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </PageHeader>

      <Section
        eyebrow="Why This Service"
        title="What you get with Valve Bridge"
        intro="Direct accountability, transparent communication, and engineering rigor at every stage."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="flex gap-4 rounded-xl border border-border bg-white p-6 shadow-card hover-lift">
              <CheckCircle2 className="h-6 w-6 flex-none text-teal mt-0.5" />
              <p className="text-ink leading-relaxed font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Process"
        title="Our structured approach"
        intro="Every stage has documented deliverables. Nothing is verbal, nothing is left to assumption."
      >
        <ol className="relative space-y-8 border-l-2 border-amber/40 pl-8 ml-4">
          {service.process.map((step, idx) => (
            <li key={step.step} className="relative">
              <span className="absolute -left-[2.85rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-amber font-display text-sm font-bold text-navy ring-4 ring-surface shadow">
                {idx + 1}
              </span>
              <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-bold text-navy">{step.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Risks Mitigated"
        title="Common pitfalls we eliminate for you"
        intro="Industrial valve procurement from overseas comes with recurring hazards. Here is what our process actively prevents:"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.risks.map((risk) => (
            <div key={risk} className="rounded-xl border border-red-200 bg-red-50/50 p-5 flex items-start gap-3.5">
              <AlertOctagon className="h-5 w-5 text-red-600 flex-none mt-0.5" />
              <span className="text-sm font-semibold text-navy">{risk}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Get Started"
        title={`Request a sourcing brief for ${service.title.toLowerCase()}`}
        intro="Tell us your technical parameters and delivery timeframe. We'll respond with a customized engagement plan."
      >
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-white p-8 md:p-10 shadow-card">
          <RFQForm />
        </div>
      </Section>

      <Section eyebrow="Explore" title="Other Valve Bridge Sourcing Pillars">
        <div className="grid gap-6 md:grid-cols-3">
          {otherServices.map((other) => (
            <Link
              key={other.slug}
              href={`/services/${other.slug}`}
              className="group rounded-xl border border-border bg-white p-6 hover-lift"
            >
              <h3 className="font-display text-lg font-bold text-navy group-hover:text-teal transition">
                {other.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {other.short}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal">
                View pillar <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
