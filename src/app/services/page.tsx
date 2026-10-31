import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';
import { generalFaqs } from '@/data/company';
import { ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industrial Valve Sourcing Services — China Sourcing, Verification, Inspection | Valve Bridge',
  description: 'Four-pillar industrial valve sourcing from China — sourcing, supplier verification, third-party inspection and import logistics under one accountable engineering team.',
};

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Four pillars. One accountable sourcing team."
        subtitle="From the first RFQ to the last container, our four services cover every stage of sourcing industrial valves from China — with the same engineers, the same standards and the same accountability throughout."
        crumbs={[{ to: '/services', label: 'Services' }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-border bg-white p-8 hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber font-display font-bold text-navy">
                  0{index + 1}
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-navy group-hover:text-teal transition">
                  {service.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-ink">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-teal flex-none mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 inline-flex items-center gap-2 text-sm font-semibold text-teal group-hover:text-teal-dark">
                Explore {service.title} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Common Questions"
        title="Frequently asked questions about our sourcing services"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {generalFaqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-border bg-white p-6 shadow-card">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-amber flex-none mt-0.5" />
                <div>
                  <h3 className="font-display font-semibold text-navy text-lg">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
