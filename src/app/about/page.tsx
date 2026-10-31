import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { Target, Compass, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Valve Bridge — China Valve Sourcing & Industrial Valve Experts',
  description: 'Valve Bridge is an engineer-led China valve sourcing consultancy auditing factories, witnessing tests and protecting industrial projects for EPCs, OEMs and consultants.',
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "Make China sourcing safe, verified and controlled for industrial buyers worldwide through technical qualification, on-site presence, and uncompromising quality inspection."
    },
    {
      icon: Compass,
      title: "Our Vision",
      desc: "Become the most trusted independent sourcing consultancy for industrial valves connecting China's manufacturing base to emerging and international project markets."
    },
    {
      icon: Clock,
      title: "China Experience",
      desc: "Over 10 years on the ground across Zhejiang (Wenzhou, Ningbo), Jiangsu (Suzhou, Yancheng), Tianjin and Shandong valve manufacturing clusters."
    }
  ];

  const gallery = [
    { src: '/assets/hero-factory-CE2Be8TK.jpg', label: 'Wenzhou valve cluster audits' },
    { src: '/assets/inspection-D-THaamM.jpg', label: 'Hydrotest witnessing (API 598)' },
    { src: '/assets/supplier-meeting-CVus36-i.jpg', label: 'Supplier commercial alignment' },
    { src: '/assets/valves-D_sQx3Hy.jpg', label: 'Pre-shipment dimensional inspection' },
    { src: '/assets/chemical-Dv0m35FQ.jpg', label: 'Chemical plant valve packages' },
    { src: '/assets/logistics-CbzrmpqR.jpg', label: 'Ningbo & Shanghai port loading' }
  ];

  const leadership = [
    {
      name: "Sourcing Leadership",
      role: "Procurement Director",
      bio: "15+ years leading high-stakes industrial valve procurement across Indian EPC contractors and Middle East project houses."
    },
    {
      name: "Engineering Leadership",
      role: "Chief Valve Engineer",
      bio: "20+ years in valve design, metallurgy, and international standards. Hands-on experience with API 6D, API 600, ASME B16.34, and EN specifications."
    },
    {
      name: "China Operations",
      role: "Director, China Network",
      bio: "Native Mandarin speaker, based in Ningbo. 12+ years auditing Chinese valve foundries, testing rigs, and automated machining lines."
    }
  ];

  return (
    <div>
      <PageHeader
        eyebrow="About Valve Bridge"
        title="A sourcing consultancy built by valve engineers, not generalists"
        subtitle="We started Valve Bridge after years of seeing well-funded projects burned by avoidable China sourcing failures — fake suppliers, failed inspections, missed shipping windows. Our entire team exists to prevent that."
        crumbs={[{ to: '/about', label: 'About' }]}
      />

      <Section eyebrow="Our Story" title="From procurement floor to your sourcing partner">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-5 text-base md:text-lg text-ink leading-relaxed">
            <p>
              Valve Bridge was founded by industrial procurement and valve engineering specialists who spent
              over a decade working inside EPC contractors, OEMs and project houses across India, the Middle
              East and Africa.
            </p>
            <p>
              We saw the same story play out repeatedly: a promising Chinese supplier, an aggressive price,
              a signed PO — and then everything would unravel during production or at destination port due to
              misunderstandings, unverified subcontractors, or absent quality witness checks.
            </p>
            <p>
              We built Valve Bridge as the partner we wished we'd had — boots-on-the-ground in China,
              engineering-led on the buyer side, structured at every stage of the process. Today we run
              sourcing programs for industrial clients across four continents.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img
              src="/assets/hero-factory-CE2Be8TK.jpg"
              alt="Valve Bridge China factory visit"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-8 shadow-card border border-border hover-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Inside the Work"
        title="Factory Visit Gallery"
        intro="Authentic documentation from our regular audits, test witnessing, and container loading inspections across China:"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.label} className="group relative overflow-hidden rounded-xl shadow-card">
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 to-transparent p-4 text-sm font-semibold text-white">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        muted
        eyebrow="Leadership"
        title="Engineers, auditors and procurement specialists"
        intro="A cross-border leadership team combining engineering depth with boots-on-the-ground China execution."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {leadership.map((leader) => (
            <div key={leader.name} className="rounded-2xl bg-white p-8 shadow-card border border-border">
              <div className="h-16 w-16 rounded-full bg-amber/20 flex items-center justify-center text-amber-dark font-display text-2xl font-bold">
                {leader.name[0]}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{leader.name}</h3>
              <div className="text-xs uppercase tracking-wider text-teal font-semibold mt-1">
                {leader.role}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
