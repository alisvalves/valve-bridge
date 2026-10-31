import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { RFQForm } from '@/components/RFQForm';
import { company } from '@/data/company';
import { Phone, Mail, MessageSquare, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Valve Bridge — China Valve Sourcing & Industrial Valve Procurement',
  description: 'Contact Valve Bridge in Ahmedabad for China valve sourcing. Call +91 9409361460, email rfq@valvebridge.com or WhatsApp us — replies within 24 hours.',
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Get a Sourcing Plan"
        title="Tell us about your project"
        subtitle="Share your specifications, quantities and timeline. We'll respond within 24 hours and deliver a structured China sourcing plan within 48."
        crumbs={[{ to: '/contact', label: 'Get a Sourcing Plan' }]}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <a
            href={`tel:${company.phone.replace(/\s+/g, '')}`}
            className="group rounded-2xl border border-border bg-white p-6 shadow-card hover-lift"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-teal/10 text-teal">
              <Phone className="h-5 w-5" />
            </div>
            <div className="eyebrow mt-4">Direct Phone</div>
            <div className="mt-1 font-display text-lg font-bold text-navy group-hover:text-teal transition">
              {company.phone}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Mon–Sat, business hours IST</p>
          </a>

          <a
            href={`mailto:${company.email}`}
            className="group rounded-2xl border border-border bg-white p-6 shadow-card hover-lift"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-amber/15 text-navy">
              <Mail className="h-5 w-5 text-amber-dark" />
            </div>
            <div className="eyebrow mt-4">Email RFQs</div>
            <div className="mt-1 font-display text-lg font-bold text-navy group-hover:text-teal transition break-all">
              {company.email}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Prompt reply within 24 hours</p>
          </a>

          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-white p-6 shadow-card hover-lift"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md text-white" style={{ backgroundColor: '#25D366' }}>
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="eyebrow mt-4">WhatsApp Direct</div>
            <div className="mt-1 font-display text-lg font-bold text-navy group-hover:text-teal transition">
              Chat on WhatsApp
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Fastest way to reach our engineering lead</p>
          </a>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-card">
            <h2 className="font-display text-2xl font-bold text-navy">Send us an inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Confidential. No spam. Replied to by a qualified valve engineer within 24 hours.
            </p>
            <div className="mt-6 mb-8">
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-card hover:brightness-110 transition"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageSquare className="h-4 w-4" /> Prefer instant chat? Message on WhatsApp
              </a>
            </div>
            <RFQForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy text-white p-7 shadow-elegant">
              <h3 className="font-display text-xl font-bold">Valve Bridge Office</h3>
              <ul className="mt-5 space-y-4 text-sm text-white/80">
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-amber flex-none mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a href={`mailto:${company.email}`} className="hover:text-amber break-all">
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-amber flex-none mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Phone / WhatsApp</div>
                    <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="hover:text-amber">
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-amber flex-none mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Office Location</div>
                    <div className="text-xs leading-relaxed mt-0.5">{company.address}</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-amber flex-none mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Response Guarantee</div>
                    <div className="text-xs mt-0.5">Within 24 hours, IST business hours</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-amber/10 border border-amber/30 p-6">
              <h3 className="font-display text-lg font-bold text-navy">What happens next?</h3>
              <ol className="mt-3 space-y-2.5 text-sm text-ink list-decimal list-inside leading-relaxed">
                <li>We confirm receipt of your RFQ brief within 24 hours.</li>
                <li>A valve specialist evaluates standard compatibility and asks clarifying questions.</li>
                <li>You receive a structured China sourcing plan and verified manufacturer options within 48 hours.</li>
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
