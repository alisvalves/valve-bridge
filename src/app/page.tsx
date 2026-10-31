import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { MinimalValveHero } from '@/components/MinimalValveHero';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { failureModes, processStages, whyValveBridgePoints, valveApplications, whyUsePoints } from '@/data/homeData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Search,
  Ship,
  Quote,
  Boxes
} from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* 1. Minimalist Enterprise Hero Section */}
      <MinimalValveHero />

      {/* 2. Trust Strip */}
      <section className="border-y border-border bg-white">
        <div className="container-px mx-auto max-w-7xl py-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Trusted by industrial buyers, project consultants and EPC companies
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center">
            {["EPC Contractors", "Project Consultants", "OEM Buyers", "Water Utilities", "Cement Majors"].map((cat) => (
              <div key={cat} className="font-display text-sm md:text-base font-semibold text-navy/65 tracking-wide">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Problem Section */}
      <Section
        eyebrow="The Problem"
        title="Sourcing from China Sounds Easy — Until It Goes Wrong"
        intro="Most buyers don't fail at finding suppliers. They fail at verifying them, controlling production and managing logistics. Each of these failure modes alone can sink a project budget."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {failureModes.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-border bg-white p-6 hover-lift"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. The Valve Bridge Process */}
      <Section
        muted
        eyebrow="The Valve Bridge Process"
        title="We Make China Sourcing Safe, Verified and Controlled"
        intro="A four-stage, documented process that takes you from RFQ to delivered goods — with hold points, evidence and clear accountability at every stage."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processStages.map((stage, i) => (
            <div
              key={stage.title}
              className="relative rounded-2xl bg-white p-7 shadow-card hover-lift"
            >
              <div className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber font-display text-sm font-bold text-navy shadow">
                {i + 1}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal">
                {i === 0 && <Search className="h-6 w-6" />}
                {i === 1 && <FileCheck className="h-6 w-6" />}
                {i === 2 && <ShieldCheck className="h-6 w-6" />}
                {i === 3 && <Ship className="h-6 w-6" />}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {stage.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Services Grid */}
      <Section
        eyebrow="Services"
        title="Everything you need to source from China — in one place"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 hover-lift"
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/3 translate-x-1/3 rounded-full bg-teal/5 group-hover:bg-teal/10 transition" />
              <h3 className="font-display text-2xl font-bold text-navy">
                {s.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {s.short}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 6. Industries Served */}
      <Section
        muted
        eyebrow="Industries Served"
        title="Sector-specific sourcing expertise"
        intro="Each industry has its own standards, materials, suppliers and risks. We bring the right specialists to each project."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group relative overflow-hidden rounded-xl bg-navy text-white hover-lift block"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-75 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/80 line-clamp-2">
                    {ind.short}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-amber">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 7. Proof, Not Promises Gallery */}
      <Section
        eyebrow="Proof, Not Promises"
        title="We're physically in China — every week"
        intro="Our team visits factories, witnesses tests, captures evidence and reports back. Photographs and inspection records on every project."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { src: '/assets/hero-factory-CE2Be8TK.jpg', label: 'China factory visits' },
            { src: '/assets/supplier-meeting-CVus36-i.jpg', label: 'Supplier meetings' },
            { src: '/assets/inspection-D-THaamM.jpg', label: 'Inspection records' },
            { src: '/assets/valves-D_sQx3Hy.jpg', label: 'Quality verification' }
          ].map((item) => (
            <figure key={item.label} className="group relative overflow-hidden rounded-xl">
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 to-transparent p-4 text-sm font-semibold text-white">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 8. Why Valve Bridge */}
      <Section
        muted
        eyebrow="Why Valve Bridge"
        title="Built for buyers who can't afford to get it wrong"
      >
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src="/assets/logistics-CbzrmpqR.jpg"
              alt="China port and global logistics"
              loading="lazy"
              className="rounded-2xl shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-amber p-6 text-navy shadow-elegant max-w-[220px] hidden md:block">
              <div className="font-display text-4xl font-bold">200+</div>
              <div className="text-xs uppercase tracking-wider font-semibold mt-1">
                Pre-verified Chinese valve manufacturers
              </div>
            </div>
          </div>

          <ul className="space-y-5">
            {whyValveBridgePoints.map((item) => (
              <li key={item.title} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-teal" />
                <div>
                  <div className="font-display text-lg font-semibold text-navy">
                    {item.title}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 9. Testimonial Quote */}
      <section className="py-20 bg-white">
        <div className="container-px mx-auto max-w-4xl text-center">
          <Quote className="mx-auto h-12 w-12 text-amber rotate-180" />
          <blockquote className="mt-6 font-display text-2xl md:text-3xl font-semibold text-navy text-balance leading-snug">
            "Valve Bridge didn't just find us a supplier — they ran the entire production cycle with us. Every milestone had a report. Every shipment had evidence. That's what made us trust them with our next three projects."
          </blockquote>
          <div className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-navy">Procurement Director</span> — Indian Cement Major
          </div>
        </div>
      </section>

      {/* 10. Industrial Valve Applications Matrix */}
      <Section
        muted
        eyebrow="Industrial Valve Applications"
        title="Helping Industrial Buyers Find the Right Valve for Every Application"
        intro="ValveBridge helps engineers, procurement teams, EPC contractors, consultants, and plant operators discover, compare, and select the most suitable industrial valves based on industry requirements, pressure ratings, temperature conditions, media compatibility, and automation needs."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valveApplications.map((app) => (
            <div key={app.title} className="group rounded-xl border border-border bg-white p-6 hover-lift">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <Boxes className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{app.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
              <div className="mt-4 pt-3 border-t border-border/50">
                <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                  Recommended valves:
                </span>
                <p className="mt-1 text-sm text-teal font-medium">{app.valves}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-white p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-navy mb-8">Why Use ValveBridge?</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyUsePoints.map((pt) => (
              <div key={pt} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal" />
                <span className="text-sm text-muted-foreground">{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-navy/70 max-w-4xl mx-auto leading-relaxed italic">
            "Supporting Industrial Buyers Across Oil & Gas, Chemical, Petrochemical, Water Treatment, Power Generation, Steel, Mining, Marine, HVAC, Food Processing, and Pharmaceutical Industries."
          </p>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-navy">
            Need Help Selecting the Right Valve?
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Explore industrial valve applications, compare solutions, and discover the best industrial
            process valves and flow control solutions for your industry. Use ValveBridge as your valve
            selection guide and sourcing platform to connect with verified manufacturers.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber px-8 py-4 text-sm font-semibold text-navy hover:brightness-105 transition shadow-elegant"
          >
            Explore Valves & Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* 11. Final CTA */}
      <CTASection />
    </div>
  );
}
