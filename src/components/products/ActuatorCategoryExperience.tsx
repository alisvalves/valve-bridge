'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductItem, ProductModel } from '@/data/products';
import {
  Check,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Layers,
  Zap,
  Wind,
  Activity,
  Factory,
  FileText,
  ChevronRight,
  ChevronDown,
  SlidersHorizontal,
  Flame,
  Gauge,
  X,
  HelpCircle,
  Download,
  ExternalLink,
  Cog,
  Filter,
  Sparkles,
  CheckCheck,
  Info,
  Maximize2
} from 'lucide-react';

interface Props {
  product: ProductItem;
  initialModelId?: string;
}

type FilterCategory = 'all' | 'pneumatic' | 'electric' | 'scotch-yoke' | 'diaphragm' | 'stainless' | 'accessories';

interface AccessoryItem {
  name: string;
  category: string;
  tagline: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
}

const actuatorAccessories: AccessoryItem[] = [
  {
    name: 'NAMUR Solenoid Valve (5/2 & 3/2 Way)',
    category: 'Pneumatic Control',
    tagline: 'Direct mount solenoid valve for double acting and spring return pneumatic actuators',
    image: '/assets/products/accessories.png',
    features: [
      'Direct NAMUR VDI/VDE 3845 interface without external tubing',
      'Convertible 5/2 (Double Acting) and 3/2 (Spring Return) via simple adapter plate',
      'Manual lockable override button for plant commissioning and power outages',
      'Ex-proof ATEX / IECEx Ex d IIC T6 option for explosive gas environments',
    ],
    specs: [
      { label: 'Voltage Options', value: '24V DC, 110V AC, 230V AC (50/60 Hz)' },
      { label: 'Operating Pressure', value: '1.5 to 8.0 Bar' },
      { label: 'Body Material', value: 'Hard Anodized Aluminum / SS 316' },
      { label: 'Coil Enclosure', value: 'IP65 / IP67 & ATEX Ex d IIC' },
    ],
  },
  {
    name: 'Dome Limit Switch Box',
    category: 'Position Feedback',
    tagline: 'Visual beacon indicator and electrical feedback for quarter-turn valve positions',
    image: '/assets/products/accessories.png',
    features: [
      'High-visibility 360-degree yellow/red visual beacon indicator',
      'Dual mechanical microswitches (SPDT / DPDT) or inductive proximity sensors (P&F)',
      'Quick-set spring loaded splined cams (tool-free calibration)',
      'Dual 1/2" NPT or M20x1.5 conduit entries with internal grounding terminal',
    ],
    specs: [
      { label: 'Switch Types', value: '2x SPDT (16A 250V AC) / P&F Proximity' },
      { label: 'Enclosure Rating', value: 'IP67 Weatherproof / Ex d IIB+H2 T6' },
      { label: 'Housing Material', value: 'Die-cast Aluminum with Epoxy Coating' },
      { label: 'Mounting Bracket', value: 'NAMUR standard stainless steel bracket' },
    ],
  },
  {
    name: 'Smart Electro-Pneumatic Digital Positioner',
    category: 'Precision Modulation',
    tagline: 'Microprocessor-controlled positioner with 4-20mA, HART, auto-tuning and LCD display',
    image: '/assets/products/accessories.png',
    features: [
      'One-button auto-calibration and automatic zero/span self-tuning in under 60 seconds',
      'Continuous real-time valve position LCD screen with error diagnostics',
      'Low air consumption design (<0.06 kg/h at steady state)',
      'Tight shut-off cut-off function to prevent valve seat leakage at end positions',
    ],
    specs: [
      { label: 'Input Signal', value: '4–20 mA DC (2-wire loop powered) + HART' },
      { label: 'Air Supply', value: '1.4 to 7.0 Bar (20 to 100 psi)' },
      { label: 'Linearity & Hysteresis', value: '< ±0.4% F.S. / < 0.2% F.S.' },
      { label: 'Explosion Proof', value: 'ATEX / IECEx Ex ia IIC T6 / Ex d IIC T6' },
    ],
  },
  {
    name: 'Air Filter Regulator (AFR) with Gauge',
    category: 'Air Preparation',
    tagline: 'Filters moisture and stabilizes supply air pressure to pneumatic automation packages',
    image: '/assets/products/accessories.png',
    features: [
      '5-micron sintered bronze or brass particulate filtration element',
      'Integrated liquid-filled vibration-proof stainless steel pressure gauge',
      'Push-to-lock pressure adjustment knob to prevent accidental pressure drift',
      'Manual or semi-automatic condensate drain valve with transparent polycarbonate bowl',
    ],
    specs: [
      { label: 'Port Sizes', value: '1/4", 3/8", 1/2" NPT / BSP' },
      { label: 'Inlet Pressure Max', value: '10 Bar (145 psi)' },
      { label: 'Regulated Output', value: '0.5 to 8.5 Bar' },
      { label: 'Filtration Rating', value: '5 Micron Standard (40 Micron Optional)' },
    ],
  },
  {
    name: 'Declutchable Manual Gear Override Box',
    category: 'Emergency Operation',
    tagline: 'Manual worm-gear override installed between valve and pneumatic actuator for fail-safe backup',
    image: '/assets/products/accessories.png',
    features: [
      'Declutching lever locks actuator into manual handwheel or automatic pneumatic mode',
      'Self-locking worm gear mechanism prevents dangerous back-driving under process pressure',
      'Dual ISO 5211 top and bottom mounting pads for direct valve-to-actuator sandwich installation',
      'Fully sealed IP67 cast iron or ductile iron weatherproof enclosure packed with synthetic grease',
    ],
    specs: [
      { label: 'Output Torque Range', value: '300 Nm to 50,000 Nm' },
      { label: 'Mechanical Advantage', value: 'Ratio 30:1 up to 400:1' },
      { label: 'Mounting Pad', value: 'ISO 5211 F07 up to F40' },
      { label: 'Enclosure Rating', value: 'IP67 Weatherproof' },
    ],
  },
];

export default function ActuatorCategoryExperience({ product, initialModelId }: Props) {
  const models = product.models || [];
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedModalModel, setSelectedModalModel] = useState<ProductModel | null>(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sizingTab, setSizingTab] = useState<'pneumatic' | 'electric' | 'scotch'>('pneumatic');

  // If initialModelId was specified in query, open it in modal
  useEffect(() => {
    if (initialModelId) {
      const match = models.find((m) => m.id === initialModelId);
      if (match) {
        setSelectedModalModel(match);
      }
    }
  }, [initialModelId, models]);

  // Filter models based on selection
  const filteredModels = models.filter((m) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'pneumatic') return m.id === 'pneumatic-actuator' || m.id === 'stainless-steel-pneumatic-actuator';
    if (activeFilter === 'electric') return m.id === 'electric-actuator' || m.id === 'multi-turn-electric-actuator';
    if (activeFilter === 'scotch-yoke') return m.id === 'fork-type-pneumatic-actuator';
    if (activeFilter === 'diaphragm') return m.id === 'diaphragm-actuator';
    if (activeFilter === 'stainless') return m.id === 'stainless-steel-pneumatic-actuator';
    return true;
  });

  const filterTabs: { id: FilterCategory; label: string; count?: number }[] = [
    { id: 'all', label: 'All Actuators', count: models.length },
    { id: 'pneumatic', label: 'Pneumatic (Rack & Pinion)', count: 2 },
    { id: 'electric', label: 'Electric Actuators', count: 2 },
    { id: 'scotch-yoke', label: 'Scotch Yoke (Fork Type)', count: 1 },
    { id: 'diaphragm', label: 'Linear Diaphragm', count: 1 },
    { id: 'stainless', label: 'Stainless Steel 316', count: 1 },
    { id: 'accessories', label: 'Accessories & Control', count: actuatorAccessories.length },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumbs Strip */}
      <div className="border-b border-slate-200/80 bg-slate-50/70 py-3">
        <div className="container-px mx-auto max-w-7xl flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-teal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <Link href="/products" className="hover:text-teal transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-navy font-semibold">Actuator</span>
        </div>
      </div>

      {/* 2. Category Hero Banner (Reference: alisvalves.com/product-category/actuator/) */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span>VALVE BRIDGE AUTOMATION PORTFOLIO • SOURCING & AUTOMATION</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy">
                  Actuator
                </h1>
                <p className="mt-2 text-base sm:text-lg font-medium text-teal">
                  High-performance actuators for reliable, precise valve automation across industrial applications
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  Our comprehensive actuator solutions include heavy-duty Scotch Yoke fork-type actuators, dual-piston rack &amp; pinion pneumatic actuators, intelligent quarter-turn &amp; multi-turn electric actuators, and multi-spring diaphragm actuators. Engineered for seamless ISO 5211 direct mounting onto ball, butterfly, plug, globe, and gate valves.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mounting</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">ISO 5211 Direct</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Torque Range</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">Up to 100,000 Nm</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Enclosure</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-0.5">IP67 / IP68 Rated</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Testing</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">100% Factory Cycled</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#actuator-catalog"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy hover:bg-slate-800 text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-xs"
                >
                  <Layers className="w-4 h-4 text-amber" />
                  <span>Browse 6 Actuator Series</span>
                </a>
                <Link
                  href="/contact?product=Actuator"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Request Factory Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#comparison-matrix"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-navy px-4 py-2.5 text-xs font-semibold transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-teal" />
                  <span>Technical Comparison</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-2xl bg-white border border-slate-200/90 shadow-lg p-6 flex flex-col items-center justify-center group overflow-hidden">
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  Automated Valve Package
                </div>
                <img
                  src={product.image}
                  alt="Actuator Automation"
                  className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-md"
                />
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-navy">Pneumatic &amp; Electric Control Systems</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Direct mill pricing with pre-shipment hydro testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section id="actuator-catalog" className="sticky top-20 lg:top-24 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs py-3.5">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-navy text-white shadow-xs font-bold'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-navy'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {tab.count !== undefined && (
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                          isActive ? 'bg-amber text-navy' : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center text-xs text-slate-500 font-medium shrink-0">
              <span>Showing {activeFilter === 'accessories' ? actuatorAccessories.length : filteredModels.length} Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Catalog Grid (Similar to alisvalves.com/product-category/actuator/) */}
      <section className="py-12 lg:py-16 bg-slate-50/50">
        <div className="container-px mx-auto max-w-7xl space-y-12">
          {activeFilter !== 'accessories' ? (
            /* Actuator Models Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredModels.map((model) => (
                <div
                  key={model.id}
                  className="flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-teal/40 transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Canvas with Category Badge */}
                  <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-50/80 via-white to-slate-50/30 p-6 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 border border-slate-200/80 text-[10px] font-extrabold uppercase tracking-wider text-navy shadow-2xs">
                        {model.mechanism}
                      </span>
                    </div>

                    <img
                      src={model.image}
                      alt={model.name}
                      className="max-h-[170px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-md"
                      loading="lazy"
                    />

                    {/* Quick view prompt */}
                    <button
                      onClick={() => {
                        setSelectedModalModel(model);
                        setActiveGalleryIdx(0);
                      }}
                      className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      title="Quick Specs Preview"
                    >
                      <span className="px-3.5 py-1.5 rounded-lg bg-navy/90 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5 text-amber" />
                        <span>Quick Technical Specs</span>
                      </span>
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Highlights */}
                      {model.highlights && model.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {model.highlights.slice(0, 2).map((h) => (
                            <span
                              key={h}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}

                      <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors leading-snug">
                        {model.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {model.tagline}
                      </p>

                      {/* Technical Specs Key Values */}
                      <div className="mt-4 space-y-1.5 text-xs bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center text-slate-500">
                          <span className="font-medium">Output Output:</span>
                          <span className="font-bold text-navy truncate max-w-[150px]">{model.torqueOrThrust}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-500">
                          <span className="font-medium">Supply:</span>
                          <span className="font-bold text-navy truncate max-w-[150px]">{model.supply}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-500">
                          <span className="font-medium">Action:</span>
                          <span className="font-semibold text-slate-800 truncate max-w-[150px]">{model.action}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-500">
                          <span className="font-medium">Enclosure:</span>
                          <span className="font-bold text-emerald-600">{model.enclosure}</span>
                        </div>
                      </div>

                      {/* Recommended Valve Types */}
                      <div className="mt-3 text-[11px] text-slate-500 line-clamp-1">
                        <span className="font-semibold text-slate-700">Suitable For: </span>
                        {model.suitableValves.slice(0, 3).join(', ')}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedModalModel(model);
                          setActiveGalleryIdx(0);
                        }}
                        className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 hover:border-navy bg-white hover:bg-slate-50 text-navy text-xs font-bold text-center transition-colors shadow-2xs flex items-center justify-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5 text-teal" />
                        <span>Specifications</span>
                      </button>

                      <Link
                        href={`/contact?product=Actuator&model=${encodeURIComponent(model.name)}`}
                        className="flex-1 py-2.5 px-3 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-bold text-center transition-colors shadow-2xs flex items-center justify-center gap-1"
                      >
                        <span>RFQ Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Accessories Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {actuatorAccessories.map((acc) => (
                <div
                  key={acc.name}
                  className="flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-50/80 to-white p-6 flex items-center justify-center border-b border-slate-100">
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase">
                      {acc.category}
                    </span>
                    <img
                      src={acc.image}
                      alt={acc.name}
                      className="max-h-[160px] w-auto max-w-full object-contain"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy">{acc.name}</h3>
                      <p className="mt-1 text-xs text-slate-600">{acc.tagline}</p>

                      <div className="mt-3 space-y-1.5">
                        {acc.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
                        {acc.specs.map((sp) => (
                          <div key={sp.label} className="bg-slate-50 p-2 rounded border border-slate-100">
                            <div className="text-slate-400 font-medium">{sp.label}</div>
                            <div className="font-bold text-navy truncate mt-0.5">{sp.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <Link
                        href={`/contact?product=ActuatorAccessories&model=${encodeURIComponent(acc.name)}`}
                        className="w-full py-2.5 rounded-lg bg-navy hover:bg-slate-800 text-white text-xs font-bold text-center block transition-colors"
                      >
                        Inquire Accessory Package
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Comprehensive Technical Comparison Matrix (Reference: alisvalves.com) */}
      <section id="comparison-matrix" className="py-16 bg-white border-y border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Engineering Selection Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Actuator Technical Comparison Table
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Compare key engineering parameters across all actuator drive mechanisms to select the optimal model for your plant automation requirements.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B1F3A] text-white">
                <tr>
                  <th className="p-4 font-bold uppercase tracking-wider">Actuator Model</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Drive Mechanism</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Action Type</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Torque / Thrust</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Input Supply</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Enclosure</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Typical Valve Fit</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {models.map((model) => (
                  <tr key={model.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-bold text-navy flex items-center gap-2">
                      <img src={model.image} alt="" className="w-8 h-8 object-contain shrink-0" />
                      <span>{model.name}</span>
                    </td>
                    <td className="p-4 text-slate-600 font-medium">{model.mechanism}</td>
                    <td className="p-4 text-slate-700">{model.action}</td>
                    <td className="p-4 font-bold text-navy">{model.torqueOrThrust}</td>
                    <td className="p-4 text-slate-600">{model.supply}</td>
                    <td className="p-4 font-semibold text-emerald-600">{model.enclosure}</td>
                    <td className="p-4 text-slate-600 max-w-[200px] truncate" title={model.suitableValves.join(', ')}>
                      {model.suitableValves.join(', ')}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => {
                          setSelectedModalModel(model);
                          setActiveGalleryIdx(0);
                        }}
                        className="px-3 py-1.5 rounded bg-slate-100 hover:bg-navy hover:text-white text-navy font-bold text-[11px] transition-colors"
                      >
                        View Specs
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Actuator Sizing & Engineering Calculation Guide */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Engineering Sizing Criteria
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              How to Size an Actuator for Your Valve
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Proper actuator sizing prevents premature valve stem failure and guarantees positive shutoff under maximum line differential pressure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal font-bold text-base">
                1
              </div>
              <h3 className="text-base font-bold text-navy">Valve Torque &amp; Safety Factor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Determine the maximum breakaway (unseating) torque of the valve at peak operating differential pressure. Always apply a design safety margin:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>Clean liquids / water: <strong>+20% safety factor</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>Dry gas, steam, dirty water: <strong>+30% safety factor</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>Abrasive slurries, viscid chemicals: <strong>+50% safety factor</strong></span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center text-amber font-bold text-base">
                2
              </div>
              <h3 className="text-base font-bold text-navy">Air Supply or Voltage Rating</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Size pneumatic actuators based on minimum plant air pressure (typically 4.0 or 5.0 bar, not nominal 7 bar) to prevent stalling during air supply dips.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                  <span>Double Acting: Sized at minimum guaranteed air pressure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                  <span>Spring Return: Spring end-torque must exceed valve torque</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                  <span>Electric: Verify duty cycle (S2 30min vs S4 modulating)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center text-navy font-bold text-base">
                3
              </div>
              <h3 className="text-base font-bold text-navy">Fail-Safe Philosophy &amp; Cycle Speed</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select between fail-closed (FC), fail-open (FO), or fail-in-place (FIP). For emergency shutdown (ESD), ensure spring return stroke speed meets process limits:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                  <span>Quick Exhaust Valves for sub-second emergency trips</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                  <span>Speed control silencers to prevent hydraulic water hammer</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                  <span>Backup battery or supercapacitor for electric fail-safe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Target Industries & Critical Applications */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Operating Domains
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Industrial Applications &amp; Environments
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Valve Bridge automated packages operate in demanding severe-service environments across global process infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Oil & Gas Refineries',
                desc: 'Tank farm isolation, ESD valves, hydrocarbon manifold control, and pipeline custody transfer.',
              },
              {
                title: 'Chemical & Fertilizer Plants',
                desc: 'Corrosive acid dosing, ammonia synthesis, autoclave feeding, and toxic gas emergency shutoff.',
              },
              {
                title: 'Water & Wastewater Utilities',
                desc: 'Pump station discharge butterfly automation, filter backwash sequences, and chlorination throttling.',
              },
              {
                title: 'Thermal & Captive Power',
                desc: 'Boiler feed water modulation, cooling water intake isolation, and steam bypass control loops.',
              },
            ].map((app) => (
              <div key={app.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h4 className="font-bold text-navy text-sm">{app.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technical FAQs (alisvalves.com content) */}
      <section className="py-16 bg-slate-50">
        <div className="container-px mx-auto max-w-4xl space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Actuator Engineering &amp; Sourcing FAQs
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Common technical questions regarding selection, sizing, and third-party inspection.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'What is the key difference between a Rack & Pinion and Scotch Yoke actuator?',
                a: 'Rack and pinion actuators generate constant torque throughout the 90° rotation, making them ideal for standard ball and butterfly valves. Scotch Yoke (fork-type) actuators generate an inclined torque curve with maximum torque at 0° and 90° (breakaway and seating), making them superior for high-pressure, large-bore valves where seat breakout torque is 2 to 3 times running torque.',
              },
              {
                q: 'How does Valve Bridge inspect actuators before shipment from China?',
                a: 'Every actuator batch undergoes 100% pneumatic/hydraulic shell pressure testing, internal leak detection under API 598 / ISO 5208, stroke time verification, torque output verification against calibrated torque transducers, dimensional verification of ISO 5211 pads and NAMUR interfaces, and EN 10204 3.1 material traceability review.',
              },
              {
                q: 'Can actuators be delivered pre-mounted and tested on valves?',
                a: 'Yes. Valve Bridge provides fully integrated automated valve packages. We mount the actuator, solenoid valve, limit switch box, and positioner onto the valve with high-strength stainless steel brackets and drive couplings, calibrate the assembly, and run dynamic cycling with hydrostatic seat leak testing before export.',
              },
              {
                q: 'What power supply options are available for electric actuators?',
                a: 'Electric actuators support 24V DC, 24V AC, 110V AC, 220V/230V AC single phase, and 380V / 415V / 440V 3-phase 50/60 Hz power supplies. Modulating versions include built-in servo amplifiers accepting 4-20mA or 0-10V control signals with HART or Modbus communication.',
              },
              {
                q: 'What is the standard mounting standard for valves and actuators?',
                a: 'All our actuators adhere strictly to ISO 5211 / DIN 3337 flange standards (F03 through F40) with double-square or star female drives, enabling direct mounting onto compliant valves without custom brackets.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-bold text-navy hover:text-teal transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-teal' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Direct RFQ Banner */}
      <section className="bg-gradient-to-r from-[#071329] via-[#0B1F3A] to-[#071329] text-white py-14">
        <div className="container-px mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber">
              Engineering Sizing &amp; Bulk Ex-Mill Quotes
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Need Actuator Sizing or Automated Packages?
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Send your valve torque parameters, available air/electrical supply, and fail-safe criteria. Our automation team provides detailed sizing sheets and direct mill quotations within 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact?product=Actuator"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF8C00] hover:bg-[#e07b00] text-white px-6 py-3.5 text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <span>Request Sourcing Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Interactive Detailed Specification Modal (When clicking "Specifications" or "Quick View") */}
      {selectedModalModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded bg-teal text-white text-[10px] font-bold uppercase">
                  {selectedModalModel.mechanism}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy truncate">
                  {selectedModalModel.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModalModel(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-200/60 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Top Details & Visual */}
              <div className="grid md:grid-cols-12 gap-6 items-center">
                {/* Visual */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className="relative w-full aspect-square max-w-[280px] rounded-xl bg-slate-50 border border-slate-200 p-6 flex items-center justify-center">
                    <img
                      src={
                        selectedModalModel.gallery && selectedModalModel.gallery[activeGalleryIdx]
                          ? selectedModalModel.gallery[activeGalleryIdx]
                          : selectedModalModel.image
                      }
                      alt={selectedModalModel.name}
                      className="max-h-[200px] w-auto max-w-full object-contain drop-shadow"
                    />
                  </div>

                  {selectedModalModel.gallery && selectedModalModel.gallery.length > 1 && (
                    <div className="flex gap-2 mt-2">
                      {selectedModalModel.gallery.map((g, idx) => (
                        <button
                          key={g}
                          onClick={() => setActiveGalleryIdx(idx)}
                          className={`w-10 h-10 rounded border p-1 bg-white ${
                            activeGalleryIdx === idx ? 'border-teal ring-2 ring-teal/20' : 'border-slate-200'
                          }`}
                        >
                          <img src={g} alt="" className="w-full h-full object-contain" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="md:col-span-7 space-y-3">
                  <h4 className="text-xl font-bold text-navy">{selectedModalModel.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedModalModel.overview}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Torque / Thrust</span>
                      <div className="font-bold text-navy mt-0.5">{selectedModalModel.torqueOrThrust}</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Supply</span>
                      <div className="font-bold text-navy mt-0.5">{selectedModalModel.supply}</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Action</span>
                      <div className="font-bold text-navy mt-0.5">{selectedModalModel.action}</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Enclosure</span>
                      <div className="font-bold text-emerald-600 mt-0.5">{selectedModalModel.enclosure}</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Capabilities:
                    </span>
                    <div className="space-y-1">
                      {selectedModalModel.keyBenefits.slice(0, 3).map((b) => (
                        <div key={b} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Specs Table */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal" />
                  <span>Engineering Specifications Matrix</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {selectedModalModel.specsTable.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between gap-3"
                    >
                      <span className="text-slate-500 font-medium">{spec.label}</span>
                      <span className="text-navy font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable Valves Fit */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <span className="font-bold text-navy">Recommended Valve Types: </span>
                <span className="text-slate-600">{selectedModalModel.suitableValves.join(', ')}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-4 shrink-0">
              <button
                onClick={() => setSelectedModalModel(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-navy hover:bg-slate-200/60 transition-colors"
              >
                Close
              </button>

              <Link
                href={`/contact?product=Actuator&model=${encodeURIComponent(selectedModalModel.name)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-bold shadow-xs transition-colors"
                onClick={() => setSelectedModalModel(null)}
              >
                <span>Request Mill Quotation for this Actuator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
