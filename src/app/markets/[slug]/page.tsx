import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { RFQForm } from '@/components/RFQForm';
import { markets } from '@/data/markets';
import { CheckCircle2, AlertTriangle, Ship } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const market = markets.find((m) => m.slug === params.slug);
  if (!market) return { title: 'Market Not Found' };
  return {
    title: `China Valve Sourcing for ${market.title} | Valve Bridge`,
    description: market.intro,
  };
}

export default function MarketDetailPage({ params }: Props) {
  const market = markets.find((m) => m.slug === params.slug);
  if (!market) notFound();

  const destinationRisks = [
    "Documentation rejected at destination port",
    "Wrong HS code leading to customs duty disputes",
    "Currency exposure and forex volatility on long lead orders",
    "Mandatory pre-inspection regimes (SONCAP/PVoC) missed in China",
    "Last-mile transit damage from non-compliant export packaging",
    "Local certification and standard gaps discovered after arrival"
  ];

  const shippingSteps = [
    {
      title: "Incoterm planning",
      desc: "FOB, CIF, CFR, DAP or DDP — chosen precisely to balance commercial risk and destination tariff management."
    },
    {
      title: "Document pack",
      desc: "Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, MTC 3.1, and photo inspection reports — destination-ready."
    },
    {
      title: "Pre-inspection regimes",
      desc: "Where mandatory by local government authorities, we coordinate witness testing with SGS, Intertek, or Bureau Veritas."
    },
    {
      title: "Last-mile delivery",
      desc: "Seamless port-to-site coordination working alongside your designated local custom house agents (CHAs) and haulers."
    }
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Market"
        title={`China Valve Sourcing for ${market.title}`}
        subtitle={market.intro}
        crumbs={[
          { to: '/markets', label: 'Markets' },
          { to: `/markets/${market.slug}`, label: market.title }
        ]}
      />

      <Section
        eyebrow="What's Different Here"
        title={`Sourcing into ${market.title} — what matters`}
        intro="Local regulations, customs tariffs, testing regimes, and port practices require dedicated attention on the China side."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {market.points.map((pt) => (
            <div key={pt} className="flex gap-4 rounded-xl border border-border bg-white p-6 shadow-card hover-lift">
              <CheckCircle2 className="h-6 w-6 flex-none text-teal mt-0.5" />
              <p className="text-ink leading-relaxed font-medium">{pt}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Procurement Risks"
        title={`Risks specific to ${market.title} buyers`}
        intro="Costly delays and penalties that occur when suppliers fail to anticipate destination import compliance:"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {destinationRisks.map((risk) => (
            <div key={risk} className="rounded-xl border border-amber/30 bg-amber/5 p-6 text-sm font-semibold text-navy shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-amber-dark">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider">Critical Checkpoint</span>
              </div>
              <p className="leading-snug">{risk}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Logistics"
        title={`How we ship to ${market.title}`}
        intro="Door-to-port and door-to-site supply chain management connecting Chinese manufacturing hubs to your target terminals."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {shippingSteps.map((step) => (
            <div key={step.title} className="rounded-xl border border-border bg-white p-6 shadow-card hover-lift">
              <Ship className="h-6 w-6 text-teal" />
              <h3 className="mt-4 font-display font-semibold text-navy text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Get Started"
        title={`Plan a shipment to ${market.title}`}
        intro="Let us know your destination port and required valve line items. We will calculate a landed cost comparison and logistics timeline."
      >
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-white p-8 md:p-10 shadow-card">
          <RFQForm />
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
