'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { markets } from '../data/markets';
import { company } from '../data/company';
import { productCategories } from '../data/products';
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';

interface MegaItem {
  to: string;
  label: string;
  desc: string;
}

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<'products' | 'services' | 'industries' | 'markets' | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMega(null);
  }, [pathname]);

  const megaData: Record<'products' | 'services' | 'industries' | 'markets', MegaItem[]> = {
    products: productCategories.map((p) => ({
      to: `/products/${p.slug}`,
      label: p.name,
      desc: p.tagline,
    })),
    services: services.map((s) => ({
      to: `/services/${s.slug}`,
      label: s.title,
      desc: s.short,
    })),
    industries: industries.map((ind) => ({
      to: `/industries/${ind.slug}`,
      label: ind.title,
      desc: ind.short,
    })),
    markets: markets.map((m) => ({
      to: `/markets/${m.slug}`,
      label: m.title,
      desc: m.short,
    })),
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products', mega: 'products' as const },
    { to: '/services', label: 'Services', mega: 'services' as const },
    { to: '/industries', label: 'Industries', mega: 'industries' as const },
    { to: '/markets', label: 'Markets', mega: 'markets' as const },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/insights', label: 'Insights' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#E2E6EB]/98 backdrop-blur-md shadow-card border-b border-slate-300'
          : 'bg-[#EAEEF3]/95 backdrop-blur-sm border-b border-slate-300/80'
      }`}
      onMouseLeave={() => setActiveMega(null)}
    >
      <div className="container-px mx-auto flex h-20 lg:h-24 max-w-7xl items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const isMegaActive = activeMega === item.mega;
            const isRouteActive =
              pathname === item.to || (item.mega && pathname.startsWith(item.to));

            return (
              <div
                key={item.to}
                className="relative py-2"
                onMouseEnter={() => {
                  if (item.mega) setActiveMega(item.mega);
                  else setActiveMega(null);
                }}
              >
                <Link
                  href={item.to}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                    isRouteActive || isMegaActive
                      ? 'text-teal font-semibold'
                      : 'text-ink hover:text-teal'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.mega && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isMegaActive ? 'rotate-180 opacity-100' : 'opacity-60'
                      }`}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#FF8C00] px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-[#e07b00] transition"
          >
            Get a Sourcing Plan
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop Mega Menu Dropdown (Services, Products, Industries, Markets) */}
      {activeMega && (
        <div
          className="absolute left-0 right-0 top-full hidden border-t border-border bg-white shadow-elegant lg:block animate-fade-in"
          onMouseEnter={() => setActiveMega(activeMega)}
          onMouseLeave={() => setActiveMega(null)}
        >
          <div className="container-px mx-auto max-w-7xl py-8">
            <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
              <span className="eyebrow">
                {activeMega === 'products' && 'Core Valve & Automation Portfolio'}
                {activeMega === 'services' && 'Core Sourcing Pillars'}
                {activeMega === 'industries' && 'Target Industry Verticals'}
                {activeMega === 'markets' && 'Destination Port Logistics'}
              </span>
              <Link
                href={`/${activeMega}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-teal hover:underline"
                onClick={() => setActiveMega(null)}
              >
                View all {activeMega} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {megaData[activeMega].map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  className="group rounded-xl p-4 hover:bg-surface border border-transparent hover:border-border transition"
                  onClick={() => setActiveMega(null)}
                >
                  <div className="font-display font-semibold text-navy group-hover:text-teal transition">
                    {item.label}
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="container-px mx-auto max-w-7xl py-4 flex flex-col">
            {navLinks.map((item) => (
              <div key={item.to} className="border-b border-border/50 py-2">
                <Link
                  href={item.to}
                  className="block py-2 text-base font-medium text-navy hover:text-teal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.mega && (
                  <div className="pl-4 pb-2 space-y-1">
                    {megaData[item.mega].map((sub) => (
                      <Link
                        key={sub.to}
                        href={sub.to}
                        className="block py-1 text-sm text-muted-foreground hover:text-teal"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        → {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center rounded-md bg-[#FF8C00] px-5 py-3 text-sm font-semibold text-white shadow-card"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Sourcing Plan
              </Link>
              <div className="pt-2 text-xs space-y-2 text-muted-foreground">
                <a
                  href={`tel:${company.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-navy"
                >
                  <Phone className="h-4 w-4 text-teal" /> {company.phone}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-navy"
                >
                  <Mail className="h-4 w-4 text-teal" /> {company.email}
                </a>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-emerald-600"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp Us Direct
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
