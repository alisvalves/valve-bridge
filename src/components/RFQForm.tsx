'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface RFQFormProps {
  compact?: boolean;
}

export const RFQForm: React.FC<RFQFormProps> = ({ compact = false }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email) {
      setError('Please provide your name and email address.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const inputClass = "w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition";
  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5";

  if (submitted) {
    return (
      <div className="rounded-xl border border-teal/30 bg-teal/5 p-8 text-center animate-fade-in">
        <CheckCircle2 className="mx-auto h-12 w-12 text-teal" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy">
          Thank you! Sourcing Brief Received.
        </h3>
        <p className="mt-2 text-sm text-ink leading-relaxed max-w-md mx-auto">
          Our senior valve sourcing lead will review your specifications and contact you within 24 hours with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
        <div>
          <label className={labelClass} htmlFor="rfq-name">Name *</label>
          <input id="rfq-name" name="name" required className={inputClass} placeholder="John Smith" />
        </div>
        <div>
          <label className={labelClass} htmlFor="rfq-company">Company *</label>
          <input id="rfq-company" name="company" required className={inputClass} placeholder="EPC / Manufacturing Corp" />
        </div>
        <div>
          <label className={labelClass} htmlFor="rfq-country">Country *</label>
          <input id="rfq-country" name="country" required className={inputClass} placeholder="India / UAE / Saudi Arabia / Nigeria..." />
        </div>
        <div>
          <label className={labelClass} htmlFor="rfq-email">Business Email *</label>
          <input id="rfq-email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="rfq-requirement">Requirement</label>
          <select id="rfq-requirement" name="requirement" className={inputClass} defaultValue="">
            <option value="" disabled>Select engagement...</option>
            <option value="New project sourcing">New project sourcing</option>
            <option value="Supplier verification">Supplier verification</option>
            <option value="Quality inspection">Quality inspection</option>
            <option value="Logistics support">Logistics support</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="rfq-valveType">Valve Type</label>
          <input id="rfq-valveType" name="valveType" className={inputClass} placeholder="Gate / Ball / Butterfly / Knife Gate..." />
        </div>
        <div>
          <label className={labelClass} htmlFor="rfq-quantity">Quantity</label>
          <input id="rfq-quantity" name="quantity" className={inputClass} placeholder="e.g. 150 units" />
        </div>
        <div>
          <label className={labelClass} htmlFor="rfq-budget">Budget (USD)</label>
          <input id="rfq-budget" name="budget" className={inputClass} placeholder="e.g. $75,000" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="rfq-project">Project Scope & Standards</label>
        <textarea
          id="rfq-project"
          name="project"
          rows={compact ? 3 : 4}
          className={inputClass}
          placeholder="Share your required standards (API 6D, API 600, ASME B16.34), media conditions, pressure class, delivery timeline, or target port..."
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" /> {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-navy hover:brightness-105 transition shadow-card disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting Request...
          </>
        ) : (
          'Get a Sourcing Plan'
        )}
      </button>
    </form>
  );
};
