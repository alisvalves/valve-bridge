import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { RFQForm } from '@/components/RFQForm';
import { Users, Repeat, Briefcase, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partner With Valve Bridge — Supplier Onboarding | China Valves',
  description: 'Are you a Chinese valve manufacturer? Apply to join Valve Bridge vetted supplier network and reach serious EPC, OEM and project buyers across India, UAE and Africa.',
};

export default function PartnerPage() {
  const valueProps = [
    {
      icon: Users,
      title: "Serious project buyers only",
      desc: "We work directly with vetted EPC contractors, industrial plant owners, and machinery OEMs — no sample hunters, brokers, or dead-end inquiries."
    },
    {
      icon: Repeat,
      title: "Long-term repeat orders",
      desc: "Our project buyers return for scheduled shutdown spares, plant expansions, and multi-year maintenance agreements."
    },
    {
      icon: Briefcase,
      title: "Structured, professional process",
      desc: "Clear engineering specifications, verified milestone decisions, and reliable payment terms. We protect both buyer and manufacturer."
    }
  ];

  const requirements = [
    "Genuine manufacturing capability (own casting foundry, CNC machining, or assembly facilities)",
    "ISO 9001 certification minimum; API 6D, API 600, CE/PED, WRAS or ATEX where applicable",
    "Verifiable export track record with documented references (3+ years)",
    "Audit-ready Quality Management System (QMS) with material heat traceability",
    "Willingness to host unannounced on-site audits and independent test witnessing",
    "English-speaking technical and commercial point of contact"
  ];

  const onboardingSteps = [
    {
      title: "Application",
      desc: "Submit your factory application detailing production capacity, test rig limits, and certification credentials."
    },
    {
      title: "Document Screening",
      desc: "Business license, export quotas, test reports, and certifications cross-checked against Chinese regulatory registries."
    },
    {
      title: "On-Site Factory Audit",
      desc: "Our senior auditor visits your facility to verify machining equipment, calibration records, and casting quality."
    },
    {
      title: "Qualification & Listing",
      desc: "Successfully verified factories are placed onto Valve Bridge approved manufacturer panel for active client projects."
    }
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Partner With Us"
        title="Are you a serious Chinese valve manufacturer?"
        subtitle="Valve Bridge vetted supplier panel is small, deliberate and demanding. If you build genuinely high-integrity valves and want long-term project buyers, we'd like to qualify you."
        crumbs={[{ to: '/partner', label: 'Partner With Us' }]}
      />

      <Section
        eyebrow="Why Partner With Valve Bridge"
        title="The kind of buyers — and the relationship — you actually want"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-white p-7 shadow-card hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/15 text-amber-dark">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Requirements"
        title="What we look for in a partner factory"
        intro="We only represent factories capable of meeting international inspection criteria."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {requirements.map((req) => (
            <div key={req} className="flex gap-3.5 rounded-xl bg-white p-5 shadow-card border border-border">
              <CheckCircle2 className="h-5 w-5 flex-none text-teal mt-0.5" />
              <p className="text-ink text-sm font-medium leading-relaxed">{req}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Qualification Process"
        title="How partner onboarding works"
      >
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {onboardingSteps.map((step, idx) => (
            <li key={step.title} className="relative rounded-xl border border-border bg-white p-6 shadow-card hover-lift">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white mb-3">
                {idx + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        muted
        eyebrow="Apply"
        title="Supplier application form"
        intro="Introduce your factory, manufacturing lines, and certifications to our vendor qualification team."
      >
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-white p-8 md:p-10 shadow-card">
          <RFQForm />
        </div>
      </Section>

      <CTASection
        title="Ready to join Valve Bridge vetted supplier panel?"
        primary={{ to: '/partner', label: 'Start Application' }}
        secondary={{ to: '/about', label: 'About Valve Bridge' }}
      />
    </div>
  );
}
