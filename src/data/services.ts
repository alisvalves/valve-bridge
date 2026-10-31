export interface ServiceProcess {
  step: string;
  text: string;
}

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  process: ServiceProcess[];
  risks: string[];
  metaDescription?: string;
}

export const services: Service[] = [
  {
    "slug": "china-valve-sourcing",
    "title": "China Valve Sourcing",
    "short": "End-to-end sourcing of industrial valves from verified Chinese manufacturers.",
    "description": "From RFQ to delivery — we identify, qualify and manage the right Chinese suppliers for your valve requirements, with full technical, commercial and quality control.",
    "benefits": [
      "Access to 200+ pre-verified Chinese valve manufacturers",
      "Up to 35% cost saving vs. western OEM pricing",
      "Full technical conformance to API, ANSI, DIN, EN, BS standards",
      "Single point of accountability across the entire supply chain"
    ],
    "process": [
      {
        "step": "Requirement Analysis",
        "text": "Specifications, standards, materials, pressure class, end connections and project context captured in a structured brief."
      },
      {
        "step": "Supplier Identification",
        "text": "Shortlist of 3–5 manufacturers matched to your scope, certifications and project size."
      },
      {
        "step": "Technical Evaluation",
        "text": "Datasheet review, material traceability and prior project references audited by our valve engineers."
      },
      {
        "step": "Quotation Comparison",
        "text": "Like-for-like commercial comparison normalised across price, lead time, payment terms and warranty."
      },
      {
        "step": "Production Monitoring",
        "text": "In-process checks, weld inspection, NDT witnessing and milestone reporting from the factory floor."
      },
      {
        "step": "Inspection & Dispatch",
        "text": "Pre-shipment inspection, hydro/pneumatic testing, marking, packing and dispatch clearance."
      },
      {
        "step": "Delivery Support",
        "text": "Documentation, FOB/CIF coordination and port-to-site logistics oversight."
      }
    ],
    "risks": [
      "Wrong specifications shipped",
      "Trading companies posing as manufacturers",
      "Substandard castings and material substitution",
      "Failed pre-shipment inspections",
      "Unexpected lead time slippage"
    ]
  },
  {
    "slug": "supplier-verification",
    "title": "Supplier Verification",
    "short": "On-the-ground factory audits and supplier qualification in China.",
    "description": "We physically visit factories, verify registration, capacity, certifications and prior shipments — so you only deal with real manufacturers that match your project scale.",
    "benefits": [
      "On-site factory audits across China's valve clusters",
      "Verification of business license, ISO, API, CE, PED certifications",
      "Capacity, manpower and equipment validation",
      "Independent supplier scorecards delivered in 7–10 days"
    ],
    "process": [
      {
        "step": "Document Verification",
        "text": "Business license, export rights, tax records and certifications cross-checked with Chinese registries."
      },
      {
        "step": "Factory Audit",
        "text": "On-site visit covering machining, foundry, assembly, testing and warehouse capacity."
      },
      {
        "step": "QMS Review",
        "text": "ISO 9001 / API Q1 procedures, calibration records, NCR handling and traceability examined."
      },
      {
        "step": "Reference Checks",
        "text": "Past export shipments, client references and project history independently validated."
      },
      {
        "step": "Scorecard & Report",
        "text": "A structured supplier scorecard with photographs, audit findings and a clear go / no-go recommendation."
      }
    ],
    "risks": [
      "Trading companies misrepresenting themselves as factories",
      "Fake or expired certifications",
      "Subcontracting to unknown third parties",
      "Capacity overstatement on small orders"
    ]
  },
  {
    "slug": "quality-inspection",
    "title": "Quality Inspection",
    "short": "Independent third-party inspection at every critical stage.",
    "description": "Our valve inspectors witness materials, dimensions, NDT, hydro testing and final pre-shipment checks — with structured photographic reports and clear acceptance criteria.",
    "benefits": [
      "Material, dimensional, NDT and hydrotest witnessing",
      "Inspectors qualified to API 598, EN 12266 and project specs",
      "Detailed photographic reports within 48 hours",
      "Authority to hold shipment until non-conformities are closed"
    ],
    "process": [
      {
        "step": "Inspection & Test Plan",
        "text": "ITP agreed with you and the manufacturer, defining hold and witness points."
      },
      {
        "step": "Raw Material Inspection",
        "text": "Mill certificates verified against actual heat numbers and PMI testing where required."
      },
      {
        "step": "In-Process Checks",
        "text": "Casting, machining and assembly checks at defined production milestones."
      },
      {
        "step": "Final Inspection",
        "text": "Dimensional, visual, hydrotest, seat leakage and marking verification before packing."
      },
      {
        "step": "Pre-Shipment Report",
        "text": "Full photographic report with NCRs, closure evidence and shipping clearance."
      }
    ],
    "risks": [
      "Material substitution undetected",
      "Hydrotest results manipulated",
      "Cosmetic defects shipped as Grade A",
      "Wrong tagging, marking or packing"
    ]
  },
  {
    "slug": "import-logistics",
    "title": "Import & Logistics",
    "short": "Door-to-port and door-to-site logistics coordinated end-to-end.",
    "description": "We coordinate freight forwarders, documentation, customs clearance and last-mile delivery — so your valves arrive on time, with complete and correct paperwork.",
    "benefits": [
      "Sea, air and multimodal freight options",
      "FOB, CIF, CFR, DAP and DDP terms supported",
      "Documentation prepared for India, UAE, Africa and global markets",
      "Customs clearance support and HS code guidance"
    ],
    "process": [
      {
        "step": "Incoterm Planning",
        "text": "We help you choose the right Incoterm based on risk, cost and destination country."
      },
      {
        "step": "Freight Booking",
        "text": "Pre-negotiated rates with leading forwarders ex-Shanghai, Ningbo, Tianjin and Shenzhen."
      },
      {
        "step": "Documentation",
        "text": "Commercial invoice, packing list, BL, COO, MTC and inspection reports prepared and reviewed."
      },
      {
        "step": "Customs Support",
        "text": "HS codes, duty estimates and destination clearance coordination with your CHA."
      },
      {
        "step": "Last-Mile Delivery",
        "text": "Port-to-site transportation, unloading and proof-of-delivery support."
      }
    ],
    "risks": [
      "Wrong HS codes leading to duty disputes",
      "Missing or incorrect Certificate of Origin",
      "Demurrage from delayed clearance",
      "Damage from poor packing and handling"
    ]
  }
];
