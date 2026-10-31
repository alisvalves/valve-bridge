export interface InsightItem {
  slug: string;
  category: string;
  title: string;
  read: string;
  excerpt: string;
}

export interface TocItem {
  id: string;
  label: string;
}

export interface SectionSub {
  heading: string;
  body: string[];
}

export interface ArticleSection {
  id: string;
  heading: string;
  body: string[];
  sub?: SectionSub[];
}

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface InternalLink {
  to: string;
  label: string;
}

export interface RichArticle {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  keyword: string;
  category: string;
  read: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  toc: TocItem[];
  sections: ArticleSection[];
  internalLinks?: InternalLink[];
  externalLinks?: { href: string; label: string }[];
  faqs?: ArticleFaq[];
}

export const insights: InsightItem[] = [
  {
    "slug": "industrial-valve-sourcing-china",
    "category": "China Sourcing",
    "title": "How to Source Industrial Valves from China Without Supplier Risk",
    "read": "11 min",
    "excerpt": "A field-tested playbook for procurement managers and EPC contractors on running industrial valve sourcing from China without supplier, quality or logistics risk."
  },
  {
    "slug": "valve-supplier-verification-checklist",
    "category": "Supplier Verification",
    "title": "Complete China Valve Supplier Verification Checklist for Industrial Buyers",
    "read": "12 min",
    "excerpt": "The complete five-layer valve supplier verification process used to qualify Chinese valve manufacturers for EPC, OEM and project buyers."
  },
  {
    "slug": "china-sourcing-101",
    "category": "China Sourcing",
    "title": "China Sourcing 101: A Buyer's Playbook for Industrial Valves",
    "read": "8 min",
    "excerpt": "What every industrial buyer should know before placing their first order in China — from supplier maps to payment terms."
  },
  {
    "slug": "trading-vs-manufacturer",
    "category": "Supplier Verification",
    "title": "How to Tell a Trading Company From a Real Manufacturer",
    "read": "6 min",
    "excerpt": "Six concrete tests you can run before signing a PO — and what to ask for in writing."
  },
  {
    "slug": "api-598-explained",
    "category": "Quality Inspection",
    "title": "API 598 Explained: What Buyers Should Actually Verify",
    "read": "7 min",
    "excerpt": "A practical walkthrough of pressure testing acceptance criteria — and where suppliers commonly cut corners."
  },
  {
    "slug": "valve-material-traceability",
    "category": "Industrial Valves",
    "title": "Material Traceability: Why MTCs Alone Are Not Enough",
    "read": "5 min",
    "excerpt": "Mill certificates, heat numbers, PMI testing — and how to build a defensible traceability chain."
  },
  {
    "slug": "incoterms-china-india",
    "category": "Import & Logistics",
    "title": "Incoterms for China–India Valve Shipments: FOB vs CIF vs DAP",
    "read": "9 min",
    "excerpt": "Which Incoterm protects your project — and which one quietly transfers risk back to you."
  },
  {
    "slug": "factory-audit-checklist",
    "category": "Supplier Verification",
    "title": "The 40-Point Factory Audit Checklist We Actually Use",
    "read": "10 min",
    "excerpt": "The exact checklist our auditors take into Chinese valve factories — yours to download."
  },
  {
    "slug": "knife-gate-valve-cement",
    "category": "Industrial Valves",
    "title": "Selecting Knife Gate Valves for Cement Plants",
    "read": "6 min",
    "excerpt": "Service-specific selection notes for raw mill, clinker, fly-ash and slurry lines."
  },
  {
    "slug": "duplex-valves-chemical",
    "category": "Industrial Valves",
    "title": "Duplex and Super-Duplex Valves: Sourcing Notes from China",
    "read": "7 min",
    "excerpt": "Material verification, welding controls and the suppliers that actually deliver on duplex."
  },
  {
    "slug": "soncap-pvoc-explained",
    "category": "Import & Logistics",
    "title": "SONCAP, PVoC and COC: Pre-Inspection Regimes for Africa",
    "read": "8 min",
    "excerpt": "What African importers need to prepare — and how to avoid port-side surprises."
  },
  {
    "slug": "lead-time-reality",
    "category": "China Sourcing",
    "title": "Why Your China Valve Lead Time Is Always Wrong (And How to Fix It)",
    "read": "5 min",
    "excerpt": "The hidden buffers, holidays and bottlenecks that derail valve delivery — and how to plan around them."
  }
];

export const richArticles: RichArticle[] = [
  {
    "slug": "industrial-valve-sourcing-china",
    "title": "How to Source Industrial Valves from China Without Supplier Risk",
    "seoTitle": "How to Source Industrial Valves from China Without Supplier Risk",
    "metaDescription": "Learn how industrial buyers can safely source industrial valves from China through supplier verification, factory audits, quality inspection and procurement best practices.",
    "excerpt": "A field-tested playbook for procurement managers, EPC contractors and OEMs on how to run industrial valve sourcing from China without exposing the project to supplier, quality or logistics risk.",
    "keyword": "Industrial Valve Sourcing from China",
    "category": "China Sourcing",
    "read": "11 min",
    "publishedAt": "2026-06-03",
    "image": "/assets/article-china-sourcing-dMm_a_s6.jpg",
    "imageAlt": "Chinese industrial valve manufacturing factory with gate and ball valves on production line",
    "ctaLabel": "Get a Sourcing Plan",
    "ctaHref": "/contact",
    "toc": [
      {
        "id": "why-china",
        "label": "Why China still dominates industrial valve manufacturing"
      },
      {
        "id": "real-risks",
        "label": "The real risks in industrial valve sourcing from China"
      },
      {
        "id": "specification",
        "label": "Step 1 — Build a sourcing-ready specification"
      },
      {
        "id": "supplier-mapping",
        "label": "Step 2 — Supplier mapping and shortlisting"
      },
      {
        "id": "verification",
        "label": "Step 3 — Supplier verification and factory audit"
      },
      {
        "id": "commercial",
        "label": "Step 4 — Structured commercial evaluation"
      },
      {
        "id": "quality",
        "label": "Step 5 — Quality inspection at every milestone"
      },
      {
        "id": "logistics",
        "label": "Step 6 — Import logistics and documentation"
      },
      {
        "id": "scenario",
        "label": "Real-world procurement scenario"
      },
      {
        "id": "faq",
        "label": "Frequently asked questions"
      }
    ],
    "sections": [
      {
        "id": "why-china",
        "heading": "Why China still dominates industrial valve manufacturing",
        "body": [
          "Industrial valve sourcing from China remains the single largest procurement lever available to EPC contractors, OEMs and project buyers worldwide. According to the International Trade Centre, China is the world's largest exporter of industrial valves by volume, supplying everything from API 6D ball valves to large diameter resilient seated gate valves to virtually every major project market — India, the GCC, Africa, Southeast Asia and Latin America.",
          "The pricing advantage is well understood: a like-for-like cast steel gate valve sourced from a qualified Chinese manufacturer typically lands 25–40% below a comparable European OEM, even after freight, duty and inspection costs. What is less well understood is that the same supply base also produces failed shipments, rejected materials and project delays — and the difference between the two outcomes is almost never the supplier. It is the buyer's process.",
          "This article is written for procurement managers, purchase engineers and project buyers who want a defensible, repeatable process for industrial valve sourcing from China — one that captures the price advantage without inheriting the risk."
        ]
      },
      {
        "id": "real-risks",
        "heading": "The real risks in industrial valve sourcing from China",
        "body": [
          "Before we get to the process, it is worth being precise about what actually goes wrong. In our engagements with industrial buyers, failed China sourcing projects almost always trace back to one of six root causes:"
        ],
        "sub": [
          {
            "heading": "1. Trading companies posing as manufacturers",
            "body": [
              "Roughly 60% of suppliers presenting themselves as valve manufacturers on global B2B platforms are trading companies that subcontract production. There is nothing inherently wrong with a trader — but the buyer is paying manufacturer margins for trader accountability, and quality control is one step removed from the actual factory."
            ]
          },
          {
            "heading": "2. Material substitution",
            "body": [
              "Substitution of WCB for higher alloys, or use of unverified Chinese-origin material in place of the specified ASTM grade, is the single most common technical failure. Mill certificates can be forged or recycled; only PMI testing on the actual casting confirms what was supplied."
            ]
          },
          {
            "heading": "3. Cosmetic defects shipped as Grade A",
            "body": [
              "Surface porosity, weld repairs hidden under paint and dimensional drift on flange faces are routinely shipped when no independent inspection is involved. The supplier's internal QC is structurally incentivised to release product, not to reject it."
            ]
          },
          {
            "heading": "4. Hydrotest and seat leakage manipulation",
            "body": [
              "Test rigs that are out of calibration, hydrotest durations cut short, and seat leakage thresholds quietly relaxed are common when no independent witness is present. API 598 and EN 12266 acceptance criteria are clear — the failure is in enforcement."
            ]
          },
          {
            "heading": "5. Documentation and Incoterm errors",
            "body": [
              "Wrong HS codes, missing Certificate of Origin, incorrect consignee details and ambiguous Incoterm scope cause more delays at destination ports than any quality issue. These are paperwork problems, but they cost real demurrage."
            ]
          },
          {
            "heading": "6. Capacity overstatement",
            "body": [
              "Suppliers routinely confirm lead times they cannot meet, especially during peak season or around Chinese New Year. The buyer discovers the slip only when the production milestone is missed — by which time the project schedule is already exposed."
            ]
          }
        ]
      },
      {
        "id": "specification",
        "heading": "Step 1 — Build a sourcing-ready specification",
        "body": [
          "The single highest-leverage activity in industrial valve sourcing from China happens before any supplier is contacted. A sourcing-ready specification is the document that prevents 80% of downstream disputes.",
          "At a minimum, your RFQ package should define: design standard (API 6D, API 600, BS 1873, etc.), face-to-face dimension standard (ASME B16.10), end connection and rating (ASME B16.5 / B16.47), body and trim material with specific ASTM/ASME grades, pressure-temperature class, fire-safe requirement (API 607 / API 6FA), fugitive emission requirement (ISO 15848), operator type, and any project-specific Inspection and Test Plan (ITP).",
          "Equally important is what the specification refuses to leave open. 'Equivalent' is not a specification — it is an invitation for substitution. Every material, every standard and every acceptance criterion should be named explicitly."
        ]
      },
      {
        "id": "supplier-mapping",
        "heading": "Step 2 — Supplier mapping and shortlisting",
        "body": [
          "Chinese valve manufacturing is geographically clustered. Wenzhou (Zhejiang) dominates stainless and sanitary valves; Suzhou (Jiangsu) is strong in API 6D ball valves and forged steel; Tianjin and Dalian lead in large bore cast steel and pipeline valves; Chongqing supplies high-pressure and severe-service applications. Understanding the cluster matched to your scope is the first filter.",
          "From there, a defensible shortlist of three to five manufacturers should be built against four criteria: technical capability for your specific scope, certification scope that covers your standards (API monogram, CE/PED, ISO 9001, plus product-specific approvals), export track record into your destination market, and project size compatibility — a factory geared for large EPC orders will deprioritise a 50-line spares package, and vice versa.",
          "Resist the temptation to invite ten suppliers to quote. A wider field dilutes engagement, reduces engineering attention from the supplier and makes comparison harder. Three serious quotations from genuinely matched suppliers produce a better outcome than ten quotations from a mixed field."
        ]
      },
      {
        "id": "verification",
        "heading": "Step 3 — Supplier verification and factory audit",
        "body": [
          "Once the shortlist is built, every supplier on it must be verified before any commercial commitment is made. This is the step that catches trading companies, expired certifications and overstated capacity — and it is the step most commonly skipped under time pressure.",
          "A complete supplier verification covers three layers: documentary (business license, export rights, certifications cross-checked against issuing bodies), physical (on-site audit of machining, foundry or forging partner, assembly, testing and warehouse), and operational (QMS procedures, calibration records, NCR handling and traceability walk-through on a live order).",
          "The output is a structured supplier scorecard — not a narrative report — with a clear go / no-go recommendation. If you cannot fail a supplier on the basis of your audit, the audit is not rigorous enough."
        ]
      },
      {
        "id": "commercial",
        "heading": "Step 4 — Structured commercial evaluation",
        "body": [
          "Commercial comparison is where buyers most often lose value they already earned in earlier steps. A raw price comparison across three quotations is almost always misleading because the quotations do not share the same scope, lead time, payment terms, warranty period or Incoterm.",
          "A structured commercial evaluation normalises every quote to the same scope and the same landed-cost basis. Payment terms (LC at sight vs 30/70 T/T vs open account) carry real financing cost. Warranty periods of 12 vs 24 months change reserve requirements. Lead time differences of 4–6 weeks change site mobilisation cost. All of these belong in the comparison.",
          "Done correctly, the structured commercial evaluation often surfaces the surprising result that the lowest unit-price quotation is not the lowest landed cost — and that the right supplier is not the cheapest."
        ]
      },
      {
        "id": "quality",
        "heading": "Step 5 — Quality inspection at every milestone",
        "body": [
          "Quality inspection should not be an event at the end of production — it should be a series of independent checkpoints embedded in the Inspection and Test Plan from order release. At minimum, a credible inspection regime for industrial valve sourcing from China includes raw material inspection (with PMI on castings), in-process checks at machining and assembly, NDT witnessing where specified, final inspection covering dimensional, visual, hydrotest, seat leakage and marking, and a structured pre-shipment report with photographic evidence.",
          "Critically, the inspector must be independent of the manufacturer and must have explicit authority to hold shipment until non-conformities are closed. Inspection without hold authority is documentation, not control."
        ]
      },
      {
        "id": "logistics",
        "heading": "Step 6 — Import logistics and documentation",
        "body": [
          "The last and most underrated step is import logistics. Even a perfectly manufactured, perfectly inspected valve package can be stranded at destination port by an incorrect HS code, a missing Certificate of Origin or an Incoterm misunderstanding.",
          "The right Incoterm is project-specific. FOB transfers risk early and is cheapest on paper but leaves the buyer exposed on ocean freight. CIF gives cost certainty but reduces visibility. DAP and DDP push risk and clearance back to the supplier or sourcing partner — appropriate when destination clearance is complex or unfamiliar.",
          "Documentation must be prepared for the destination country, not for China. India, UAE, Nigeria, Kenya and Saudi Arabia each have specific pre-inspection or document legalisation requirements that, if missed, generate demurrage measured in thousands of dollars per day."
        ]
      },
      {
        "id": "scenario",
        "heading": "Real-world procurement scenario",
        "body": [
          "An Indian cement major recently engaged us for a 180-line knife gate and butterfly valve package across two new grinding units. The incumbent European supplier was quoting a 24-week lead time at premium pricing. We re-engineered the specification with the project's mechanical team, ran a structured RFQ with three pre-verified Chinese manufacturers, conducted on-site audits across all three shortlisted factories and witnessed first-article inspections plus 100% pre-shipment inspection on high-criticality items.",
          "The outcome: 32% landed-cost reduction, a 14-week production cycle, zero non-conformities reported from site in the first six months of operation, and a three-year fixed-price spares package. The price advantage was real — but it was only capturable because the process around it was disciplined."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is industrial valve sourcing from China still worth it in 2026?",
        "a": "Yes — landed-cost savings of 25–40% against European OEM pricing remain achievable for technically equivalent product, provided the buyer runs structured supplier verification, independent quality inspection and proper import logistics. The savings disappear quickly if any of those three are skipped."
      },
      {
        "q": "How do I know whether a Chinese supplier is a real manufacturer?",
        "a": "Three quick tests: cross-check the business license scope against actual manufacturing activity, ask for the names of machining and foundry partners and verify them independently, and request a live factory video walk-through covering machining, assembly and test rigs. A genuine manufacturer answers all three within 48 hours."
      },
      {
        "q": "What certifications should I require?",
        "a": "ISO 9001 is the baseline. For oil and gas, require API monogram (API 6D, 600, 602 as applicable) and API Q1. For Europe-bound product, require CE/PED. For potable water service, require WRAS, NSF or ACS. Fire-safe applications require API 607 or API 6FA. Verify each certification with the issuing body, not just the PDF."
      },
      {
        "q": "How long does a typical China valve sourcing project take end-to-end?",
        "a": "From RFQ release to ex-works delivery, expect 10–16 weeks for standard product and 16–22 weeks for engineered or large-bore items. Add 4–8 weeks for ocean freight and destination clearance. Compressing this timeline is possible but usually trades against inspection rigour."
      },
      {
        "q": "What is the most common reason China valve sourcing projects fail?",
        "a": "Skipping or under-resourcing the supplier verification step. Every other failure mode — material substitution, hydrotest manipulation, capacity overstatement — is a downstream symptom of placing an order with a supplier who was never qualified to take it."
      }
    ],
    "internalLinks": [
      {
        "to": "/services/china-valve-sourcing",
        "label": "China Valve Sourcing service"
      },
      {
        "to": "/services/supplier-verification",
        "label": "Supplier Verification"
      },
      {
        "to": "/services/quality-inspection",
        "label": "Quality Inspection"
      },
      {
        "to": "/services/import-logistics",
        "label": "Import & Logistics"
      }
    ],
    "externalLinks": [
      {
        "href": "https://www.api.org/products-and-services/standards",
        "label": "API Standards (American Petroleum Institute)"
      },
      {
        "href": "https://www.iso.org/standard/62085.html",
        "label": "ISO 15848 — Industrial valves, fugitive emission measurement"
      }
    ]
  },
  {
    "slug": "valve-supplier-verification-checklist",
    "title": "Complete China Valve Supplier Verification Checklist for Industrial Buyers",
    "seoTitle": "Complete China Valve Supplier Verification Checklist for Industrial Buyers",
    "metaDescription": "Discover the essential supplier verification process for selecting reliable Chinese valve manufacturers and reducing procurement risk.",
    "excerpt": "A complete, field-tested valve supplier verification checklist covering documentation, factory audit, QMS review, capacity validation and reference checks — built for industrial buyers who refuse to gamble on Chinese suppliers.",
    "keyword": "Valve Supplier Verification",
    "category": "Supplier Verification",
    "read": "12 min",
    "publishedAt": "2026-06-03",
    "image": "/assets/article-supplier-verification-ZXe6iHsC.jpg",
    "imageAlt": "Quality control inspector auditing a Chinese valve manufacturing facility with industrial valves on test rigs",
    "ctaLabel": "Talk to an Expert",
    "ctaHref": "/contact",
    "toc": [
      {
        "id": "why-verify",
        "label": "Why valve supplier verification is non-negotiable"
      },
      {
        "id": "documents",
        "label": "Layer 1 — Document verification"
      },
      {
        "id": "factory",
        "label": "Layer 2 — On-site factory audit"
      },
      {
        "id": "qms",
        "label": "Layer 3 — Quality management system review"
      },
      {
        "id": "capacity",
        "label": "Layer 4 — Capacity and capability validation"
      },
      {
        "id": "references",
        "label": "Layer 5 — Reference and export history checks"
      },
      {
        "id": "scorecard",
        "label": "Building the supplier scorecard"
      },
      {
        "id": "red-flags",
        "label": "Top red flags that disqualify a supplier"
      },
      {
        "id": "scenario",
        "label": "Real-world scenario — the $480,000 save"
      },
      {
        "id": "faq",
        "label": "Frequently asked questions"
      }
    ],
    "sections": [
      {
        "id": "why-verify",
        "heading": "Why valve supplier verification is non-negotiable",
        "body": [
          "Valve supplier verification is the single procurement activity with the highest return on time invested. A two-week verification engagement routinely prevents six-figure losses on advance payments, rejected shipments and project delays. And yet it is the step most commonly compressed or skipped — usually under deadline pressure, sometimes because the buyer already 'feels good' about the supplier from email exchanges.",
          "The uncomfortable truth is that supplier feel is not supplier fact. A responsive English-speaking sales contact, a polished website and a thick PDF capability deck tell you almost nothing about whether the factory exists, whether the certifications are valid, or whether the supplier has ever shipped your product class to your destination market. Valve supplier verification is the structured process that replaces feel with evidence.",
          "This article lays out the complete five-layer verification process our auditors apply to Chinese valve manufacturers before any client commits capital. It is the same process used to qualify suppliers for EPC contractors, OEMs and project buyers across India, the GCC and Africa."
        ]
      },
      {
        "id": "documents",
        "heading": "Layer 1 — Document verification",
        "body": [
          "Document verification establishes whether the legal entity exists, what it is licensed to do and whether its certifications are real and current. It is the cheapest layer and the one that filters out the most suppliers."
        ],
        "sub": [
          {
            "heading": "Business license and scope",
            "body": [
              "Request the supplier's business license and verify it on the Chinese National Enterprise Credit Information Publicity System (gsxt.gov.cn). Confirm the company name in Chinese characters, registered capital, date of establishment and — critically — the registered business scope. A 'manufacturer' whose scope reads 'wholesale trade' is a trading company."
            ]
          },
          {
            "heading": "Export rights",
            "body": [
              "Verify that the entity holds export rights independently. Many small manufacturers export through a third-party trading agent — which is legal but introduces an additional layer in your supply chain that must be documented."
            ]
          },
          {
            "heading": "Certifications",
            "body": [
              "ISO 9001, API 6D / API 600 monogram, CE/PED, fire-safe (API 607 / API 6FA), fugitive emission (ISO 15848), and product-specific approvals should each be verified with the issuing body. Certification numbers, scope, validity and certified site address must all match. A common fraud is using a valid certificate issued to a sister company or to a previous corporate name."
            ]
          },
          {
            "heading": "Tax and customs records",
            "body": [
              "VAT registration, export tax rebate eligibility and customs filing history give a clear picture of whether the supplier is a real exporter at the volume claimed."
            ]
          }
        ]
      },
      {
        "id": "factory",
        "heading": "Layer 2 — On-site factory audit",
        "body": [
          "Document verification establishes existence; factory audit establishes capability. There is no remote substitute. A live video walk-through is useful as a pre-screen, but it does not replace an auditor on the factory floor with a checklist and a camera.",
          "A complete factory audit covers six zones: incoming material yard and warehouse, machining shop (with equipment list and observed utilisation), foundry or forging partner (visited separately if subcontracted), assembly area, test bay (hydrostatic and seat leakage rigs with current calibration tags) and outgoing warehouse with packing area. Photographs are taken at each station and time-stamped.",
          "The auditor records equipment make, model and quantity; estimated capacity utilisation on the day of visit; and any evidence of subcontracting that was not disclosed in writing. A factory that refuses access to any of these zones is failing the audit by definition."
        ]
      },
      {
        "id": "qms",
        "heading": "Layer 3 — Quality management system review",
        "body": [
          "An ISO 9001 certificate proves only that the supplier paid for and passed a third-party audit at a point in time. The QMS review tests whether the system is actually used.",
          "Auditors walk through a live order from PO acknowledgement through to dispatch, examining: incoming material inspection records, in-process inspection records at defined hold points, calibration records for all measurement and test equipment, non-conformance reports (NCRs) and their closure evidence, customer complaint log, and corrective and preventive action history.",
          "The single most diagnostic question is: 'Show me the last NCR you raised internally on a customer order.' A QMS that has never produced an NCR is not a QMS — it is a stack of paper."
        ]
      },
      {
        "id": "capacity",
        "heading": "Layer 4 — Capacity and capability validation",
        "body": [
          "Capacity overstatement is endemic. Suppliers confirm lead times they cannot meet because they are competing for the order, and the consequences fall on the buyer's project schedule.",
          "Capacity validation cross-references three data points: stated monthly output by product class, observed machining capacity (machines × shifts × cycle time), and recent export volume from customs records. When the three numbers are inconsistent — for example, claimed output of 500 large-bore ball valves per month from a shop with two CNC lathes — the supplier is either subcontracting heavily or overstating capacity.",
          "Capability validation is a separate question: can the supplier produce your specific product to your specific standard? A factory that makes WCB cast steel ball valves at scale may have no experience with duplex or super-duplex, even if the certificates technically cover the material grade. Ask for prior project references at the same material, size and pressure class as your scope."
        ]
      },
      {
        "id": "references",
        "heading": "Layer 5 — Reference and export history checks",
        "body": [
          "The final layer is independent reference checks. Ask for three customer references in your destination market or in a comparable market, and contact them directly. A supplier that cannot provide three reachable references for your product class has not shipped your product class.",
          "In parallel, request the last 12 months of bill of lading data summarised by destination and consignee. Chinese customs filings are routinely cross-referenced through commercial trade-data providers; a supplier whose stated export volume does not appear in customs data is exporting under another entity's name — which the buyer needs to understand before contracting."
        ]
      },
      {
        "id": "scorecard",
        "heading": "Building the supplier scorecard",
        "body": [
          "Verification output should always be a structured scorecard, not a narrative report. Each of the five layers receives a weighted score, with explicit pass/fail thresholds on critical items (forged certifications, undisclosed subcontracting, refused factory access). The scorecard ends with a single go / no-go recommendation supported by evidence.",
          "Across three or four shortlisted suppliers, the scorecards become directly comparable — which is the only way a procurement committee can make an evidence-based selection rather than a sales-led one."
        ]
      },
      {
        "id": "red-flags",
        "heading": "Top red flags that disqualify a supplier",
        "body": [
          "From hundreds of audits, the following red flags are individually sufficient to disqualify a supplier from a serious project:",
          "1. Business license scope does not include manufacturing of the product class.",
          "2. Certifications cannot be verified with the issuing body, or are issued to a different entity name.",
          "3. Factory address on documents does not match the visited site.",
          "4. Refused access to foundry, machining, test bay or any production zone during audit.",
          "5. No NCRs in the QMS log over the last 12 months.",
          "6. Test rigs without current calibration tags.",
          "7. No traceable export history at the claimed volume.",
          "8. Inability to provide three reachable customer references for the relevant product class."
        ]
      },
      {
        "id": "scenario",
        "heading": "Real-world scenario — the $480,000 save",
        "body": [
          "A Middle East EPC contractor engaged us for a final-stage verification on a $480,000 valve order, with 30% advance payment due in seven days. The supplier had presented itself as a major Chinese manufacturer with full API and CE certifications.",
          "Our auditor reached the listed factory address in Wenzhou within 72 hours. The site contained a small office and a warehouse — no machining lines, no foundry, no test rigs. The business license scope read 'wholesale and import-export of mechanical equipment' — not manufacturing. Two of the three certifications presented had been issued to a different legal entity at a different address. The third had expired six months earlier.",
          "The $144,000 advance was blocked. The client re-sourced to a genuine manufacturer within four weeks, and the project was delivered on time at original budget. Valve supplier verification is now a mandatory gate in the client's sourcing policy."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How long does a complete valve supplier verification take?",
        "a": "A full five-layer verification, including on-site audit and independent reference checks, typically takes 7–10 business days from engagement to scorecard delivery. Document-only pre-screens can be turned around in 48 hours."
      },
      {
        "q": "Can valve supplier verification be done remotely?",
        "a": "Layers 1, 4 and 5 can be done remotely. Layers 2 and 3 — factory audit and QMS review — require an auditor on site. Remote-only verification consistently fails to catch trading-company fronts and undisclosed subcontracting."
      },
      {
        "q": "What is the difference between a factory audit and a quality inspection?",
        "a": "A factory audit qualifies the supplier before any order is placed. A quality inspection verifies a specific shipment against the Inspection and Test Plan. The audit prevents the wrong supplier from being engaged; the inspection prevents the wrong product from being shipped. Both are required."
      },
      {
        "q": "How much does valve supplier verification typically cost?",
        "a": "A full five-layer verification for one supplier in China typically costs USD 1,200–2,500 depending on factory location and audit scope. On an order of meaningful size, this is a fraction of one percent of contract value and routinely prevents losses two to three orders of magnitude larger."
      },
      {
        "q": "How often should an approved supplier be re-verified?",
        "a": "Annually at minimum, and immediately after any change in ownership, factory relocation, certification scope change, or quality incident on a shipment. Supplier status is a current condition, not a permanent attribute."
      }
    ],
    "internalLinks": [
      {
        "to": "/services/supplier-verification",
        "label": "Supplier Verification service"
      },
      {
        "to": "/services/china-valve-sourcing",
        "label": "China Valve Sourcing"
      },
      {
        "to": "/services/quality-inspection",
        "label": "Quality Inspection"
      },
      {
        "to": "/services/import-logistics",
        "label": "Import & Logistics"
      }
    ],
    "externalLinks": [
      {
        "href": "https://www.gsxt.gov.cn/",
        "label": "China National Enterprise Credit Information Publicity System"
      },
      {
        "href": "https://www.iso.org/iso-9001-quality-management.html",
        "label": "ISO 9001 — Quality Management Systems"
      }
    ]
  }
];
