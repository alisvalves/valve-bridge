import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { markets } from '../data/markets';
import { company } from '../data/company';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white/80 mt-24 border-t border-navy-deep">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" />
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Valve Bridge is an engineer-led China valve sourcing consultancy. We audit factories,
              witness inspections, and coordinate door-to-port import logistics for EPC contractors,
              OEMs, and industrial plants worldwide.
            </p>
            <div className="pt-2 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber flex-none mt-0.5" />
                <span className="text-xs leading-relaxed">{company.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber flex-none" />
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="hover:text-amber transition text-xs">
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber flex-none" />
                <a href={`mailto:${company.email}`} className="hover:text-amber transition text-xs">
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Sourcing Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider">
              Sourcing Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-amber transition">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div>
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider">
              Industries Served
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="hover:text-amber transition">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Markets */}
          <div>
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber transition">About Valve Bridge</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-amber transition">Case Studies</Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-amber transition">Partner With Us</Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-amber transition">Insights & Guides</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber transition font-semibold text-amber">Get a Sourcing Plan</Link>
              </li>
            </ul>

            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-wider mt-6">
              Target Markets
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {markets.map((m) => (
                <li key={m.slug}>
                  <Link href={`/markets/${m.slug}`} className="hover:text-amber transition">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Valve Bridge Global Sourcing. All rights reserved.</p>
          <p>Valve Bridge is an independent sourcing consultancy. We are not a manufacturer or marketplace.</p>
        </div>
      </div>
    </footer>
  );
};
