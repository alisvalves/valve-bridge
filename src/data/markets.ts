export interface Market {
  slug: string;
  title: string;
  short: string;
  intro: string;
  points: string[];
}

export const markets: Market[] = [
  {
    "slug": "india",
    "title": "India",
    "short": "China sourcing for Indian EPCs, project consultants and OEMs.",
    "intro": "We support Indian buyers across cement, chemical, water, refining and OEM segments with end-to-end China sourcing — including BIS-aware specification, INR-denominated landed cost models and Indian-port logistics.",
    "points": [
      "Landed cost modelling in INR including duty, GST and clearance",
      "BIS, IBR and project-specific compliance awareness",
      "Logistics into JNPT, Mundra, Chennai, Kolkata and ICDs",
      "On-ground inspection support across Maharashtra, Gujarat and South India"
    ]
  },
  {
    "slug": "uae",
    "title": "UAE",
    "short": "Procurement support for UAE contractors, traders and project houses.",
    "intro": "We help UAE-based EPC contractors, distributors and project buyers source industrial valves from China with documentation aligned to Jebel Ali, Khalifa Port and Hamriyah free zone operations.",
    "points": [
      "Documentation aligned to ADNOC, Aramco-style vendor lists",
      "Certificate of Origin, legalisation and chamber attestation guidance",
      "Free zone vs. mainland clearance scenarios",
      "Logistics into Jebel Ali, Khalifa Port and Hamriyah"
    ]
  },
  {
    "slug": "africa",
    "title": "Africa",
    "short": "Sourcing partner for projects across East, West and Southern Africa.",
    "intro": "From mining and cement to water and power projects, we support African buyers with robust supplier vetting, full documentation packs and logistics into the continent's major ports.",
    "points": [
      "Port coverage: Mombasa, Dar es Salaam, Durban, Lagos, Tema, Djibouti",
      "Pre-inspection mandatory regimes (SONCAP, PVoC, COC) supported",
      "USD-denominated commercial terms and LC handling",
      "Long-lead spares planning for remote project sites"
    ]
  }
];
