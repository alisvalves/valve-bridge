import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTASection } from '@/components/CTASection';
import { RFQForm } from '@/components/RFQForm';
import { insights, richArticles } from '@/data/insights';
import { company } from '@/data/company';
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Bookmark
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const richArticle = richArticles.find((a) => a.slug === params.slug);
  const standardArticle = insights.find((a) => a.slug === params.slug);

  if (richArticle) {
    return {
      title: `${richArticle.seoTitle} | Valve Bridge`,
      description: richArticle.metaDescription,
    };
  }

  if (standardArticle) {
    return {
      title: `${standardArticle.title} | Valve Bridge Insights`,
      description: standardArticle.excerpt,
    };
  }

  return { title: 'Article Not Found' };
}

export default function InsightDetailPage({ params }: Props) {
  const richArticle = richArticles.find((a) => a.slug === params.slug);
  const standardArticle = insights.find((a) => a.slug === params.slug);

  if (!richArticle && !standardArticle) {
    notFound();
  }

  // Cornerstone Long-Form Article
  if (richArticle) {
    const related = insights.filter((i) => i.slug !== richArticle.slug).slice(0, 3);

    return (
      <div>
        <PageHeader
          eyebrow={richArticle.category}
          title={richArticle.title}
          subtitle={richArticle.excerpt}
          crumbs={[
            { to: '/insights', label: 'Insights' },
            { to: `/insights/${richArticle.slug}`, label: richArticle.category }
          ]}
        >
          <div className="inline-flex items-center gap-2 text-sm text-white/80">
            <Clock className="h-4 w-4" /> {richArticle.read} read · Published {richArticle.publishedAt}
          </div>
        </PageHeader>

        <Section>
          <div className="mx-auto max-w-4xl">
            <figure className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={richArticle.image}
                alt={richArticle.imageAlt}
                className="w-full h-auto object-cover max-h-[520px]"
              />
            </figure>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px] mx-auto max-w-6xl">
            <article className="min-w-0">
              <nav aria-label="Table of contents" className="mb-12 rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h2 className="font-display text-lg font-bold text-navy flex items-center gap-2">
                  <Bookmark className="h-5 w-5 text-amber" /> Table of Contents
                </h2>
                <ol className="mt-4 space-y-2.5 text-sm">
                  {richArticle.toc.map((toc, i) => (
                    <li key={toc.id}>
                      <a
                        href={`#${toc.id}`}
                        className="text-ink hover:text-teal transition inline-flex gap-3 leading-relaxed"
                      >
                        <span className="text-muted-foreground font-mono text-xs mt-0.5">
                          {String(i + 1).padStart(2, '0')}.
                        </span>
                        <span>{toc.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="space-y-12">
                {richArticle.sections.map((sec) => (
                  <section key={sec.id} id={sec.id} className="scroll-mt-28">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-navy tracking-tight border-b border-border/60 pb-3">
                      {sec.heading}
                    </h2>
                    <div className="space-y-4 mt-4 text-base text-ink leading-relaxed">
                      {sec.body.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {sec.sub && (
                      <div className="mt-6 space-y-6 pl-4 border-l-2 border-teal/30">
                        {sec.sub.map((sub, sIdx) => (
                          <div key={sIdx}>
                            <h3 className="font-display text-xl font-bold text-navy">
                              {sub.heading}
                            </h3>
                            <div className="space-y-3 mt-2 text-ink text-sm leading-relaxed">
                              {sub.body.map((subP, pIdx) => (
                                <p key={pIdx}>{subP}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {richArticle.faqs && richArticle.faqs.length > 0 && (
                <div id="faq" className="mt-16 scroll-mt-28">
                  <h2 className="font-display text-2xl font-bold text-navy mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {richArticle.faqs.map((faq) => (
                      <div key={faq.q} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="h-5 w-5 text-amber flex-none mt-0.5" />
                          <div>
                            <h3 className="font-display font-semibold text-navy text-base">{faq.q}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 rounded-2xl border border-border bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-bold text-navy">
                  Related Valve Bridge Services
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/services/china-valve-sourcing" className="inline-flex items-center gap-2 text-teal font-semibold hover:underline">
                      <ArrowRight className="h-4 w-4" /> End-to-End China Valve Sourcing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/supplier-verification" className="inline-flex items-center gap-2 text-teal font-semibold hover:underline">
                      <ArrowRight className="h-4 w-4" /> On-the-Ground Supplier Verification & Audits
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/quality-inspection" className="inline-flex items-center gap-2 text-teal font-semibold hover:underline">
                      <ArrowRight className="h-4 w-4" /> Third-Party Valve Quality Inspection (API 598)
                    </Link>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl bg-navy text-white p-7 shadow-elegant">
                  <div className="eyebrow !text-amber mb-2">Direct Action</div>
                  <h3 className="font-display text-xl font-bold">
                    Need a sourcing plan for this scope?
                  </h3>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    Send us your valve datasheets or project scope. We deliver a verified China supply plan in 48 hours.
                  </p>
                  <div className="mt-6 space-y-3">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-navy hover:brightness-105 transition"
                    >
                      Get a Sourcing Plan <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={company.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white transition"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <MessageSquare className="h-4 w-4" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                  <h4 className="font-display font-semibold text-navy text-base mb-4">
                    Quick Project Inquiry
                  </h4>
                  <RFQForm compact />
                </div>
              </div>
            </aside>
          </div>
        </Section>

        <Section muted eyebrow="Related Articles" title="Keep reading">
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="rounded-xl border border-border bg-white p-6 hover-lift shadow-card"
              >
                <div className="text-xs uppercase tracking-wider text-teal font-semibold">
                  {item.category}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Section>

        <CTASection />
      </div>
    );
  }

  // Standard Technical Article
  const article = standardArticle!;
  const related = insights.filter((i) => i.slug !== article.slug).slice(0, 3);

  return (
    <div>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        subtitle={article.excerpt}
        crumbs={[
          { to: '/insights', label: 'Insights' },
          { to: `/insights/${article.slug}`, label: article.category }
        ]}
      >
        <div className="inline-flex items-center gap-2 text-sm text-white/80">
          <Clock className="h-4 w-4" /> {article.read} read
        </div>
      </PageHeader>

      <Section>
        <article className="prose prose-lg mx-auto max-w-3xl">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {article.excerpt}
          </p>

          <h2 className="font-display text-2xl font-bold text-navy mt-10">
            Why this matters
          </h2>
          <p className="text-ink leading-relaxed mt-4">
            Industrial buyers sourcing from China rarely fail because of bad intent — they fail
            because of an information gap. This article translates field experience from real China
            sourcing engagements into actionable checks and questions you can use on your next project.
          </p>

          <h2 className="font-display text-2xl font-bold text-navy mt-10">
            What to look for
          </h2>
          <ul className="mt-4 space-y-3 text-ink">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-teal flex-none mt-0.5" />
              <span>Always verify the supplier's actual manufacturing footprint before commercial discussions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-teal flex-none mt-0.5" />
              <span>Insist on raw material traceability and heat numbers — not just an MTC PDF.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-teal flex-none mt-0.5" />
              <span>Define hold and witness points (ITP) before the production purchase order is released.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-teal flex-none mt-0.5" />
              <span>Get pre-shipment inspection by an independent engineering party, not the supplier's own internal QC.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-teal flex-none mt-0.5" />
              <span>Plan documentation and HS codes for the destination country, not just the China export customs side.</span>
            </li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-navy mt-10">
            Closing thoughts
          </h2>
          <p className="text-ink leading-relaxed mt-4">
            China sourcing rewards structure and punishes shortcuts. If you take only one thing from
            this article, make it this: turn every assumption into a written checkpoint, and verify
            the checkpoint independently.
          </p>
        </article>
      </Section>

      <Section muted eyebrow="Related Articles" title="Keep reading">
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="rounded-xl border border-border bg-white p-6 hover-lift shadow-card"
            >
              <div className="text-xs uppercase tracking-wider text-teal font-semibold">
                {item.category}
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {item.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
