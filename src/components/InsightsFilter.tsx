'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { InsightItem } from '../data/insights';
import { Clock, ArrowRight } from 'lucide-react';

interface InsightsFilterProps {
  insights: InsightItem[];
}

export const InsightsFilter: React.FC<InsightsFilterProps> = ({ insights }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'China Sourcing',
    'Supplier Verification',
    'Quality Inspection',
    'Industrial Valves',
    'Import & Logistics'
  ];

  const filtered = selectedCategory === 'All'
    ? insights
    : insights.filter(item => item.category === selectedCategory);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
              selectedCategory === cat
                ? 'bg-navy text-white shadow-card'
                : 'border border-border bg-white text-navy hover:bg-surface'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <Link
            key={item.slug}
            href={`/insights/${item.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-white overflow-hidden hover-lift shadow-card"
          >
            <div className="aspect-[16/9] bg-hero-gradient relative overflow-hidden flex items-end p-6">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="relative z-10">
                <span className="inline-block rounded-md bg-amber/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber backdrop-blur">
                  {item.category}
                </span>
              </div>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-lg font-bold text-navy group-hover:text-teal transition leading-snug">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {item.read} read
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-teal group-hover:text-teal-dark">
                  Read article <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
