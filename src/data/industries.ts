export interface Industry {
  slug: string;
  title: string;
  short: string;
  image: string;
  challenges: string[];
  applications: string[];
}

export const industries: Industry[] = [
  {
    "slug": "cement",
    "title": "Cement Industry",
    "short": "Sourcing valves for cement plants — abrasion, dust and high-temperature service.",
    "image": "/assets/cement-DigsuALo.jpg",
    "challenges": [
      "Highly abrasive media and continuous-duty service",
      "High temperature lines around kilns and pre-heaters",
      "Dust ingress and aggressive site conditions",
      "Long shutdown windows that demand reliable spares"
    ],
    "applications": [
      "Knife gate and slurry valves on raw mill and clinker lines",
      "Dome valves and rotary feeders on pneumatic conveying",
      "Butterfly valves on ducting and process air",
      "Ball and globe valves on cooling water and utilities"
    ]
  },
  {
    "slug": "chemical",
    "title": "Chemical Industry",
    "short": "Corrosion-resistant valves for chemical, petrochemical and specialty plants.",
    "image": "/assets/chemical-Dv0m35FQ.jpg",
    "challenges": [
      "Aggressive and corrosive media",
      "Fugitive emission and low-leakage requirements",
      "Strict standards: ASME, API, PED, ATEX",
      "Traceability and material certification scrutiny"
    ],
    "applications": [
      "Stainless, duplex and alloy ball valves on process lines",
      "Bellows-sealed globe valves for fugitive emission service",
      "Lined diaphragm and butterfly valves for corrosive duties",
      "Control valves and on-off automated packages"
    ]
  },
  {
    "slug": "water-treatment",
    "title": "Water Treatment",
    "short": "Reliable valves for water, wastewater and desalination projects.",
    "image": "/assets/water-CYNXvR2R.jpg",
    "challenges": [
      "Large diameter, low-pressure, high-cycle service",
      "Drinking water approvals: WRAS, NSF, ACS",
      "Long design life with minimal maintenance",
      "Buried, submerged and outdoor service"
    ],
    "applications": [
      "Resilient seated and metal seated gate valves",
      "Rubber-lined butterfly valves for clarifier and filter lines",
      "Air valves, check valves and pressure reducing valves",
      "Actuated knife gates for sludge and screenings"
    ]
  },
  {
    "slug": "oem-machinery",
    "title": "OEM & Machinery",
    "short": "OEM-grade valves and engineered components for machinery builders.",
    "image": "/assets/valves-D_sQx3Hy.jpg",
    "challenges": [
      "Custom dimensions, branding and packaging",
      "Strict cost targets at OEM volumes",
      "Repeatable quality across recurring orders",
      "Long-term supply continuity and revision control"
    ],
    "applications": [
      "OEM-private-label ball, gate, globe and check valves",
      "Mini ball valves and instrumentation valves",
      "Cast and forged bodies machined to OEM drawings",
      "Sub-assemblies and skid-mounted valve packages"
    ]
  }
];
