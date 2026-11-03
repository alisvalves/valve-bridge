import React from 'react';
import Link from 'next/link';
import { productCategories } from '@/data/products';
import { ArrowRight, ShieldCheck, CheckCircle2, Layers, Award, Cog } from 'lucide-react';

export const metadata = {
  title: 'Industrial Valve Products & Automation | Valve Bridge China Sourcing',
  description:
    'Explore our complete portfolio of Chinese industrial valves: Actuator, Ball Valves, Butterfly Valves, Control Valve, GGC Valves, Pressure Reducing Valve, Special Valve, and Accessories.',
};

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 py-16 lg:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-teal-dark text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-teal" />
              Direct Ex-Mill China Sourcing
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight">
              Industrial Valves & Automation Portfolio
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore the complete range of industrial valves and automation packages sourced directly from verified tier-1 Chinese manufacturers with comprehensive quality assurance and mill testing.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {productCategories.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-xl border border-slate-200/90 hover:border-teal/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Stage */}
                <div className="relative h-60 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6 border-b border-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-48 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none"
                  />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-slate-600 border border-slate-200/80">
                    {product.subTypes.length} Models
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-navy group-hover:text-teal transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-xs font-medium text-teal mt-1 line-clamp-1">
                      {product.tagline}
                    </p>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Sizing & Standards preview */}
                    <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                      <div className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Layers className="w-3.5 h-3.5 text-teal" />
                        <span>Size: {product.sizeRange}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber" />
                        <span className="truncate">{product.standards.slice(0, 3).join(' • ')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex w-full items-center justify-between rounded-lg bg-slate-50 hover:bg-navy hover:text-white px-4 py-2.5 text-sm font-semibold text-navy transition-all duration-200 border border-slate-200/80 group-hover:border-navy"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Guarantee Strip */}
          <div className="mt-16 rounded-2xl bg-navy text-white p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">100% Pre-Shipment Inspection</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    API 598 hydrostatic, pneumatic, wall thickness, PMI chemistry and dimension verification before release.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10 text-amber shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Certified Mill Test EN 10204 3.1</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    Complete material traceability with heat numbers, NDT reports, and foundry audit records.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10 text-teal-light shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Direct Mill Pricing</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    30% to 50% savings over European and domestic stockists without sacrificing API/ASME standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
