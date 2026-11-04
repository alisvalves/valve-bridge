'use client';

import React from 'react';
import Link from 'next/link';

interface SubnavGroup {
  label: string;
  items: { name: string; href: string }[];
}

const subnavGroups: SubnavGroup[] = [
  {
    label: 'Industries',
    items: [
      { name: 'Oil & Gas', href: '/industries/oil-gas' },
      { name: 'Cement', href: '/industries/cement' },
      { name: 'Fertilizer', href: '/industries/fertilizer' },
      { name: 'Chemical', href: '/industries/chemical' },
      { name: 'View All', href: '/industries' },
    ],
  },
  {
    label: 'Automation Solutions',
    items: [
      { name: 'Pneumatic', href: '/products' },
      { name: 'Electric', href: '/products' },
      { name: 'Control', href: '/products' },
      { name: 'Accessories', href: '/products' },
    ],
  },
  {
    label: 'Applications',
    items: [
      { name: 'Water', href: '/industries/water-treatment' },
      { name: 'Steam', href: '/industries' },
      { name: 'Slurry', href: '/industries' },
      { name: 'Cryogenic', href: '/industries' },
      { name: 'View All', href: '/industries' },
    ],
  },
];

function SubnavContent() {
  return (
    <div className="flex items-center shrink-0">
      {subnavGroups.map((group, groupIdx) => (
        <React.Fragment key={group.label}>
          <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-10 shrink-0">
            {/* Category Header Label */}
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 tracking-wide mb-0.5 select-none">
              {group.label}
            </span>

            {/* Category Sub-items */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-7 text-xs sm:text-[13px] font-semibold text-slate-800">
              {group.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-[#FF8C00] transition-colors duration-150 whitespace-nowrap active:scale-95"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Vertical separator line between sections */}
          <div className="h-8 w-px bg-slate-200 self-center shrink-0" />
        </React.Fragment>
      ))}
    </div>
  );
}

export function HeroSubnavMarquee() {
  return (
    <section className="relative w-full bg-white border-b border-slate-200/90 shadow-2xs py-3 sm:py-3.5 overflow-hidden z-20">
      {/* Soft gradient fades on left & right edges for seamless entry/exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Infinite Scrolling Marquee Track */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee-scroll flex items-center">
          <SubnavContent />
          <SubnavContent />
        </div>
      </div>
    </section>
  );
}
