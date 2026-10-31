import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { InsightsFilter } from '@/components/InsightsFilter';
import { insights } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Insights — China Valve Sourcing, Supplier Verification & Inspection Blog | Valve Bridge',
  description: 'Practical guides on China valve sourcing, supplier verification, API 598 inspection and import logistics — written for procurement managers, EPCs and OEM buyers.',
};

export default function InsightsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Insights"
        title="Practical writing for industrial buyers"
        subtitle="Field-tested notes from our sourcing, audit and inspection work in China — written for procurement managers, project engineers and EPC contractors."
        crumbs={[{ to: '/insights', label: 'Insights' }]}
      />

      <Section>
        <InsightsFilter insights={insights} />
      </Section>

      <CTASection />
    </div>
  );
}
