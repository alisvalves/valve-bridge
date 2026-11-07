import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { productCategories, ProductItem } from '@/data/products';
import ActuatorModelShowcase from '@/components/products/ActuatorModelShowcase';
import ActuatorCategoryExperience from '@/components/products/ActuatorCategoryExperience';
import BallValvesCategoryExperience from '@/components/products/BallValvesCategoryExperience';
import ButterflyValvesCategoryExperience from '@/components/products/ButterflyValvesCategoryExperience';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Gauge,
  Factory,
  ChevronRight,
  Layers,
  Sparkles,
  ClipboardCheck,
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const base = productCategories.map((p) => ({
    slug: p.slug,
  }));
  return [...base, { slug: 'fork-type-pneumatic-actuator' }];
}

export async function generateMetadata({ params }: Props) {
  let product = productCategories.find((p) => p.slug === params.slug);
  let title = 'Product Not Found | Valve Bridge';
  let description = 'Direct mill pricing, international standards, and 100% pre-shipment inspection.';

  if (params.slug === 'fork-type-pneumatic-actuator') {
    product = productCategories.find((p) => p.slug === 'actuator');
    title = 'Fork Type Pneumatic Actuator Sourcing | Valve Bridge';
    description = 'Scotch Yoke heavy-duty pneumatic actuator for quarter-turn valves. Direct China mill pricing and 100% inspection.';
  } else if (params.slug === 'ball-valves') {
    title = 'Industrial Ball Valves | Manual & Pneumatic Actuated (12 Models) | Valve Bridge';
    description = 'Complete range of 12 industrial ball valves: 3-way, 3-piece, flanged, screwed, lined, sanitary TC end, and cryogenic ball valves with manual and pneumatic actuation.';
  } else if (params.slug === 'butterfly-valves') {
    title = 'Industrial Butterfly Valves | Concentric, Flanged, Lugged & Ceramic (12 Models) | Valve Bridge';
    description = 'Complete range of 12 industrial butterfly valves: concentric wafer, full lug, double flanged, UPVC, spherical powder disc, and extreme abrasion ceramic valves.';
  } else if (product) {
    title = `${product.name} Sourcing & Automation from China | Valve Bridge`;
    description = `${product.tagline}. Direct mill pricing, international standards, and 100% pre-shipment inspection for ${product.name}.`;
  }

  return { title, description };
}

export default function ProductDetailPage({ params }: Props) {
  let product = productCategories.find((p) => p.slug === params.slug);
  let initialModelId: string | undefined = undefined;

  if (params.slug === 'fork-type-pneumatic-actuator') {
    product = productCategories.find((p) => p.slug === 'actuator');
    initialModelId = 'fork-type-pneumatic-actuator';
  }

  if (!product) {
    notFound();
  }

  // When accessing Actuators category, render the dedicated category experience
  if (product.slug === 'actuator') {
    return <ActuatorCategoryExperience product={product} initialModelId={initialModelId} />;
  }

  // When accessing Ball Valves category, render the dedicated 12-model category experience
  if (product.slug === 'ball-valves') {
    return <BallValvesCategoryExperience product={product} initialModelId={initialModelId} />;
  }

  // When accessing Butterfly Valves category, render the dedicated 12-model category experience
  if (product.slug === 'butterfly-valves') {
    return <ButterflyValvesCategoryExperience product={product} initialModelId={initialModelId} />;
  }

  const hasDetailedModels = Boolean(product.models && product.models.length > 0);

  return (
    <div className="bg-white min-h-screen">
      {/* Clean Minimal Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50/50 py-3">
        <div className="container-px mx-auto max-w-7xl flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-teal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <Link href="/products" className="hover:text-teal transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-navy font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Hero Section - Clean, High Whitespace, Uncluttered */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-50/80 via-white to-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-teal-dark text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span>DIRECT FACTORY MILL SOURCING</span>
                {hasDetailedModels && (
                  <span className="text-slate-400">• 6 Standard Models</span>
                )}
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
                  {product.name}
                </h1>
                <p className="mt-2 text-base sm:text-lg font-medium text-teal">
                  {product.tagline}
                </p>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  {product.description}
                </p>
              </div>

              {/* 3 Clean Quick Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Output Range
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-1 truncate">
                    {product.sizeRange}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Standard
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-1 truncate">
                    {product.standards[0] || 'ISO / DIN / ASME'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Inspection
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-1 truncate">
                    100% Pre-Shipment
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {hasDetailedModels && (
                  <a
                    href="#models-section"
                    className="inline-flex items-center gap-2 rounded-lg bg-navy hover:bg-slate-800 text-white px-5 py-3 text-xs font-bold transition-colors shadow-xs"
                  >
                    <Layers className="h-4 w-4 text-amber" />
                    <span>Explore 6 Models</span>
                  </a>
                )}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber hover:bg-amber-dark text-white px-6 py-3 text-xs font-bold transition-colors shadow-xs group"
                >
                  <span>Request Factory Quote</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-navy px-4 py-3 text-xs font-semibold transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>All Products</span>
                </Link>
              </div>
            </div>

            {/* Right Product Image Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center p-8 group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[280px] w-auto max-w-full object-contain select-none transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 lg:py-16">
        <div className="container-px mx-auto max-w-7xl space-y-16">
          {/* Detailed Models Spotlight (When models exist, e.g. Actuator) */}
          {hasDetailedModels ? (
            <ActuatorModelShowcase models={product.models!} initialModelId={initialModelId} />
          ) : (
            /* Fallback Clean Grid for Other Standard Products */
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Configurations
                </span>
                <h2 className="text-2xl font-bold text-navy mt-1">
                  Available Models &amp; Valve Types
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.subTypes.map((sub) => (
                  <div
                    key={sub.title}
                    className="p-5 rounded-xl border border-slate-200 bg-white hover:border-teal/50 hover:shadow-xs transition-all"
                  >
                    <h3 className="font-semibold text-navy text-sm">
                      {sub.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clean 3-Column Engineering & Standards Overview */}
          <div className="pt-10 border-t border-slate-200/80">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                Manufacturing Standards
              </span>
              <h2 className="text-2xl font-bold text-navy mt-1">
                Engineering Compliance &amp; Assurance
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Every unit is manufactured to international standards and verified by third-party inspection before dispatch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1: Testing & Design Standards */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy">
                  Design &amp; Testing Standards
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Compliant with global petrochemical, water, and power specifications:
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  {product.standards.map((std) => (
                    <li key={std} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Operating Classes & Pressure */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center text-amber mb-4">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy">
                  Supply &amp; Pressure Ranges
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Rated for severe process conditions and automated loops:
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  {product.pressureClasses.map((pc) => (
                    <li key={pc} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                      <span>{pc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Certified Metallurgy */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy">
                  Certified Metallurgy
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  EN 10204 3.1 mill test certification for all pressure-containing parts:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.materials.map((mat) => (
                    <span
                      key={mat}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Clean Sourcing & Mill Quote Banner */}
          <div className="rounded-2xl bg-navy text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>China Valve &amp; Actuator Sourcing</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Need Custom Sizing or an Automated Valve Package?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Send your Valve Data Sheet (VDS) or technical project specifications. We manage factory audit, mill price negotiation, torque verification, and 100% pre-shipment inspection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber hover:bg-amber-dark text-white px-6 py-3 text-xs font-bold transition-colors shadow-xs"
              >
                <span>Submit RFQ / Data Sheet</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 text-xs font-semibold transition-colors"
              >
                <span>Our Quality Process</span>
              </Link>
            </div>
          </div>

          {/* Other Products Minimal Navigation */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div className="font-semibold text-navy">
              Explore other categories:
            </div>
            <div className="flex flex-wrap gap-2">
              {productCategories
                .filter((p) => p.slug !== product.slug)
                .map((other) => (
                  <Link
                    key={other.id}
                    href={`/products/${other.slug}`}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-teal font-medium transition-colors border border-slate-200/60"
                  >
                    {other.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
