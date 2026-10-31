export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  execution: string;
  results: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    "slug": "cost-saving",
    "title": "32% Cost Saving on a Cement Plant Valve Package",
    "summary": "How we re-sourced a 180-line knife gate and butterfly valve package for an Indian cement major.",
    "challenge": "A leading Indian cement producer was paying premium European OEM pricing for a 180-line knife gate and butterfly valve package across two new grinding units. Lead times were stretched to 24 weeks and on-site spares cost was unsustainable.",
    "approach": "Valve Bridge re-engineered the specification with the project's mechanical team, normalised it across three pre-qualified Chinese manufacturers and ran a structured RFQ with weighted technical scoring.",
    "execution": "We conducted on-site audits at all three shortlisted factories, witnessed first-article inspections and ran in-process quality control across the 14-week production window. Pre-shipment inspection covered 100% of high-criticality items.",
    "results": [
      "32% reduction in landed cost vs. original European OEM",
      "14-week production cycle — 10 weeks faster than incumbent",
      "Zero NCRs at site within first 6 months of operation",
      "Spares package secured at a fixed price for 3 years"
    ]
  },
  {
    "slug": "supplier-verification",
    "title": "Catching a Trading Company Before a $480,000 Order",
    "summary": "An EPC contractor was about to place a large order — our audit revealed the 'manufacturer' did not exist.",
    "challenge": "A Middle East EPC contractor had completed commercial negotiations with a supplier presenting itself as a major Chinese valve manufacturer. The order value was $480,000 with 30% advance payment due.",
    "approach": "Valve Bridge was engaged for a final-stage supplier verification before payment release. We sent a senior auditor to the listed factory address in Wenzhou within 72 hours.",
    "execution": "On-site visit revealed only a small office and warehouse — no machining, no foundry, no test rigs. Document checks showed the business license did not cover manufacturing. Certifications were verified as expired or belonging to other entities.",
    "results": [
      "$480,000 advance payment blocked before release",
      "Client re-sourced to a genuine manufacturer within 4 weeks",
      "Subsequent project delivered on time at original budget",
      "Supplier verification now mandatory in client's sourcing policy"
    ]
  },
  {
    "slug": "quality-inspection",
    "title": "Pre-Shipment Inspection That Saved a Water Treatment Project",
    "summary": "Hydrotest witnessing on a 240-valve order uncovered systemic seat leakage before shipment.",
    "challenge": "A water utility project required 240 large-diameter resilient seated gate valves with strict zero-leakage acceptance. The manufacturer's internal test reports showed full conformance.",
    "approach": "Valve Bridge deployed two inspectors for a full pre-shipment witness against EN 12266 and project-specific criteria — including independent hydrotest re-runs on a 10% sample.",
    "execution": "Re-witnessed hydrotests revealed seat leakage on 18 of 24 sampled valves due to a calibration issue on the factory's test rig. Inspection was halted and a 100% retest was enforced before any shipment.",
    "results": [
      "Defective batch caught before any unit left the factory",
      "Manufacturer recalibrated rig and re-tested entire order",
      "Project commissioned on time with zero in-service leakage",
      "Saved an estimated $1.2M in retrofit and downtime cost"
    ]
  }
];
