'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductItem } from '@/data/products';
import {
  Check,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Layers,
  Zap,
  Wind,
  Activity,
  Factory,
  FileText,
  ChevronRight,
  ChevronDown,
  SlidersHorizontal,
  Flame,
  Gauge,
  X,
  HelpCircle,
  Download,
  ExternalLink,
  Cog,
  Filter,
  Sparkles,
  CheckCheck,
  Info,
  Maximize2,
  Droplets,
  Thermometer,
  ShieldAlert,
} from 'lucide-react';

interface Props {
  product: ProductItem;
  initialModelId?: string;
}

export type ButterflyValveFilter =
  | 'all'
  | 'manual'
  | 'pneumatic'
  | 'wafer'
  | 'lug'
  | 'flanged'
  | 'upvc'
  | 'powder'
  | 'ceramic';

export interface ButterflyValveModel {
  id: string;
  typeNumber: number;
  name: string;
  category: 'manual' | 'pneumatic';
  subCategory: 'wafer' | 'lug' | 'flanged' | 'upvc' | 'powder' | 'ceramic';
  operationType: string;
  categoryLabel: string;
  tagline: string;
  image: string;
  sourceUrl: string;
  sizeRange: string;
  pressureClass: string;
  bodyMaterial: string;
  discMaterial: string;
  seatMaterial: string;
  endConnection: string;
  actuation: string;
  tempRange: string;
  designStandard: string;
  faceToFace: string;
  leakageClass: string;
  highlights: string[];
  keyBenefits: string[];
  overview: string;
  specsTable: { label: string; value: string }[];
  suitableMedia: string[];
  industries: string[];
}

export const butterflyValvesCatalog: ButterflyValveModel[] = [
  {
    id: 'gear-op-double-flanged-butterfly-valve',
    typeNumber: 1,
    name: 'Gear Op Double Flanged Butterfly Valve',
    category: 'manual',
    subCategory: 'flanged',
    operationType: 'Manual Gearbox',
    categoryLabel: 'Manual Gear Operated / Double Flanged',
    tagline: 'Heavy-duty double flanged body with high-ratio enclosed weatherproof worm gearbox for high torque pipeline service',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-1-gear-op-double-flanged-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/gear-op-double-flanged-butterfly-valve/',
    sizeRange: '2" to 48" (DN50 – DN1200)',
    pressureClass: 'PN10 / PN16 / Class 150',
    bodyMaterial: 'Ductile Iron GGG40 / Cast Carbon Steel WCB / CF8M',
    discMaterial: 'Ductile Iron (Epoxy Coated) / CF8M Stainless Steel / Al-Bronze',
    seatMaterial: 'EPDM / NBR / Viton (Molded or Bonded Liner)',
    endConnection: 'Double Flanged ASME B16.5 / EN 1092-2 (PN10/16)',
    actuation: 'Heavy-Duty Weatherproof Worm Gearbox with Handwheel',
    tempRange: '-20°C to +120°C (up to 180°C with Viton)',
    designStandard: 'BS EN 593 / AWWA C504 / API 609 Cat B',
    faceToFace: 'EN 558 Series 13 / 14 (Short / Long pattern)',
    leakageClass: 'EN 12266-1 Rate A (Zero bubble leakage)',
    highlights: [
      'Double flanged configuration allows rigid independent bolting to pipe flanges',
      'High mechanical reduction gear operator ensures smooth, low-effort operation',
      'Ideal for pump stations, municipal water treatment, and intake mains',
      'Replaceable or vulcanized heavy elastomer body liner prevents body contact',
    ],
    keyBenefits: [
      'Easy pipeline alignment without bolt through-tensioning stress',
      'Self-locking gear mechanism prevents disc flutter or flow back-spin',
      'Full bi-directional dead-end isolation capability',
      '100% factory hydrostatic test to API 598 standards',
    ],
    overview:
      'Valve Bridge is a premier Gear Op Double Flanged Butterfly Valve Supplier. This heavy-duty valve operates via an internal 90° rotating disc supported by sturdy integral flange rings on both sides. Connected through a weather-sealed enclosed worm gearbox, the high mechanical gear ratio provides effortless handwheel operation even on high-pressure large-diameter pipelines. Designed for water supply networks, power station cooling conduits, and wastewater intake systems.',
    specsTable: [
      { label: 'Nominal Size Range', value: '2" to 48" (DN50 to DN1200)' },
      { label: 'Pressure Ratings', value: 'PN10, PN16, ANSI Class 150' },
      { label: 'Body Type', value: 'Double Flanged Full Lugged Ring Body' },
      { label: 'Flange Drilling', value: 'ASME B16.5 Class 150 / EN 1092-2 PN10 & PN16' },
      { label: 'Body Metallurgy', value: 'Ductile Iron GGG40 / ASTM A216 WCB / SS316 CF8M' },
      { label: 'Disc Profile', value: 'Aerodynamic Streamlined CF8M / DI with Nylon / Epoxy' },
      { label: 'Seat Elastomer', value: 'High Resilience EPDM / Food-Grade NBR / FKM' },
      { label: 'Stem / Shaft', value: 'High-Tensile Stainless Steel SS410 / SS316 Two-Piece Stem' },
      { label: 'Actuation Operator', value: 'IP67 Weatherproof Worm Gearbox with Dial Indicator' },
      { label: 'Testing Standard', value: 'API 598 / ISO 5208 Rate A Zero Leakage' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Raw & Potable Water', 'Municipal Sewage', 'Cooling Tower Water', 'Industrial Effluents', 'Sea Water & Brine'],
    industries: ['Water Infrastructure', 'Power Generation Plants', 'Desalination Plants', 'District Cooling', 'Heavy Manufacturing'],
  },
  {
    id: 'manual-upvc-butterfly-valve',
    typeNumber: 2,
    name: 'Manual UPVC Butterfly Valve',
    category: 'manual',
    subCategory: 'upvc',
    operationType: 'Manual Lever',
    categoryLabel: 'Manual Hand Lever / Thermoplastic UPVC',
    tagline: '100% rustproof unplasticized PVC body for corrosive chemical dosing, acid etching, and saline aquaculture piping',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-2-manual-upvc-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/manual-upvc-butterfly-valve/',
    sizeRange: '2" to 12" (DN50 – DN300)',
    pressureClass: 'PN10 (150 PSI at 20°C)',
    bodyMaterial: 'Industrial Virgin UPVC (Unplasticized Polyvinyl Chloride)',
    discMaterial: 'High-Strength UPVC / CPVC with 316SS Stem Insert',
    seatMaterial: 'Virgin EPDM / FKM (Viton) Full Boot Seal',
    endConnection: 'Wafer Pattern (Universal Multi-Standard ANSI/DIN/JIS)',
    actuation: 'Heavy-Duty Ergonomic Lockable Hand Lever / Worm Gear (8"+)',
    tempRange: '0°C to +60°C (UPVC rating)',
    designStandard: 'ISO 16136 / ASTM F1970 / DIN EN 1452',
    faceToFace: 'ISO 5752 Short Series',
    leakageClass: 'Class VI Bubble Tight (100% Non-Metallic Wetted)',
    highlights: [
      'Complete chemical immunity to acid vapors, brine, seawater, and rust',
      'Ultra-lightweight design eliminates heavy pipe hangers and scaffolding',
      'Full boot seat completely isolates valve body and stem from process fluids',
      'Multi-standard bolt circle fits ANSI Class 150, DIN PN10, and JIS 10K flanges',
    ],
    keyBenefits: [
      'Eliminates pitting and galvanic corrosion common in metallic valves',
      'Ergonomic notched throttle lever allows quick 10-position flow regulation',
      'Ideal for chlor-alkali, aquaculture, water parks, and chemical distribution',
      'Zero maintenance required with long service life in harsh environments',
    ],
    overview:
      'Valve Bridge is a premier Manual UPVC Butterfly Valve Supplier. Constructed from high-purity virgin unplasticized PVC, this valve offers zero corrosion in highly acidic, saline, and caustic process environments. The integral resilient EPDM or FKM boot liner forms both the disc seal and the mating flange face gaskets, removing the need for separate gaskets. Features a robust lever with multi-position latch plate for precise manual throttling.',
    specsTable: [
      { label: 'Size Range', value: '2" to 12" (DN50 to DN300)' },
      { label: 'Working Pressure', value: 'PN10 / 150 PSI @ ambient 23°C' },
      { label: 'Body Material', value: 'Virgin Rigid UPVC' },
      { label: 'Disc Material', value: 'Molded UPVC with fully enclosed 316SS shaft' },
      { label: 'Seat & Gasket', value: 'Full Boot EPDM / Viton (FKM)' },
      { label: 'Flange Compatibility', value: 'Universal Wafer for ANSI 150 / DIN PN10 / JIS 10K' },
      { label: 'Lever Operator', value: 'Impact-Resistant ABS Handle with 10-Stop Notched Plate' },
      { label: 'Actuator Pad', value: 'ISO 5211 Standard Top Mounting Platform' },
      { label: 'Temperature Limit', value: '0°C to +60°C' },
      { label: 'Testing Standard', value: 'ISO 9393 Hydrostatic Test 100% Checked' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Hydrochloric Acid', 'Dilute Sulfuric Acid', 'Sodium Hypochlorite', 'Seawater & Brine', 'Electroplating Solutions'],
    industries: ['Chemical Dosing Facilities', 'Aquaculture & Aquariums', 'Water Parks & Pools', 'PCB & Semiconductor Etching', 'Desalination Skids'],
  },
  {
    id: 'pneumatic-spherical-disc-butterfly-valve',
    typeNumber: 3,
    name: 'Pneumatic Spherical Disc Butterfly Valve',
    category: 'pneumatic',
    subCategory: 'powder',
    operationType: 'Pneumatic Rotary',
    categoryLabel: 'Pneumatic Actuated / Spherical Disc',
    tagline: 'Anti-jamming spherical contoured disc design for dry powders, granules, pellets, and dense abrasive bulk solid flows',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-3-pneumatic-spherical-disc-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-spherical-disc-butterfly-valve/',
    sizeRange: '2" to 16" (DN50 – DN400)',
    pressureClass: 'PN6 / PN10 / Class 150',
    bodyMaterial: 'Ductile Iron GGG40 / Cast Carbon Steel / Stainless Steel CF8M',
    discMaterial: 'Spherical Geometry SS304 / SS316 Mirror Polished (Ra < 0.4µm)',
    seatMaterial: 'High-Elasticity Food-Grade EPDM / White Silicone / Viton',
    endConnection: 'Wafer or Lug Type (Universal Flange Clamping)',
    actuation: 'Direct-Mounted Hard-Anodized Pneumatic Rotary Actuator',
    tempRange: '-25°C to +150°C',
    designStandard: 'ISO 5752 / BS 5155 / API 609',
    faceToFace: 'Short Wafer Standard ISO 5752 Series 20',
    leakageClass: 'Class VI (Bubble tight on air and zero powder bypass)',
    highlights: [
      'Patented convex spherical disc profile eliminates shear jamming on bulk solids',
      'Extremely low opening breakaway torque compared to standard flat discs',
      'Smooth disc sweep prevents crushing and attrition of fragile pellets',
      'Direct-mount ISO 5211 rack-and-pinion pneumatic cylinder for fast cycle times',
    ],
    keyBenefits: [
      'Prevents material packing and seal ring tearing in dry powder service',
      'Provides tight bubble-shutoff against pneumatically conveyed gas/solids',
      'Equipped with Namur solenoid and limit switch indicator for PLC integration',
      'Long seal service life in cement, plastic polymer, flour, and starch lines',
    ],
    overview:
      'Valve Bridge is a premier Pneumatic Spherical Disc Butterfly Valve Supplier. Standard butterfly valves frequently suffer from particle compaction and seal tearing when closing through solid powder columns. This valve utilizes an engineered spherical contoured disc that glides effortlessly against the resilient seal without shearing granular media. Coupled with a high-torque pneumatic actuator, it provides ultra-fast, jam-free automated isolation for silos, hoppers, and pneumatic conveying lines.',
    specsTable: [
      { label: 'Size Range', value: '2" to 16" (DN50 to DN400)' },
      { label: 'Pressure Rating', value: 'PN6 / PN10 / ANSI 150#' },
      { label: 'Disc Shape', value: 'Precision Spherical Radiused Geometry (Non-Jamming)' },
      { label: 'Disc Finish', value: 'Mirror Polished Ra < 0.4µm / Electropolished' },
      { label: 'Body Casting', value: 'Ductile Iron EN-GJS-400-15 / CF8 / CF8M' },
      { label: 'Liner Seal', value: 'Abrasion Resistant EPDM / FDA White Silicone' },
      { label: 'Actuator', value: 'Pneumatic Rack & Pinion (Double Acting / Spring Return)' },
      { label: 'Control Accessories', value: 'Namur Solenoid Valve + IP67 Micro-Switch Box' },
      { label: 'Air Supply Range', value: '3.0 to 8.0 bar (Standard 5.5 bar plant air)' },
      { label: 'Testing Standard', value: 'API 598 Bubble Tight & Powder Cycling Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Plastic Pellets & Resin', 'Flour, Sugar & Starch', 'Cement & Fly Ash', 'Carbon Black', 'Pharmaceutical Powders'],
    industries: ['Bulk Material Handling', 'Plastics Compounding', 'Food & Grain Processing', 'Pneumatic Conveying Systems', 'Chemical Dry Plants'],
  },
  {
    id: 'ss-pneumatic-actuated-butterfly-valve',
    typeNumber: 4,
    name: 'SS Pneumatic Actuated Butterfly Valve',
    category: 'pneumatic',
    subCategory: 'wafer',
    operationType: 'Pneumatic Rotary',
    categoryLabel: 'Pneumatic Actuated / All Stainless Steel',
    tagline: 'High-purity CF8/CF8M stainless steel body & disc with direct-mount rotary pneumatic actuator for sterile & harsh chemical loops',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-4-ss-pneumatic-actuated-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/ss-pneumatic-actuated-butterfly-valve/',
    sizeRange: '1.5" to 24" (DN40 – DN600)',
    pressureClass: 'Class 150 / PN16 / PN25',
    bodyMaterial: 'Investment Cast ASTM A351 CF8 (304) / CF8M (316)',
    discMaterial: 'CF8M Stainless Steel (Mirror Surface Electropolished)',
    seatMaterial: 'Virgin PTFE / RPTFE / Food-Grade Silicone / Viton',
    endConnection: 'Wafer or Lugged Body (ISO 5752)',
    actuation: 'Direct-Mounted Aluminum or SS316 Pneumatic Rotary Actuator',
    tempRange: '-30°C to +200°C',
    designStandard: 'API 609 / ASME B16.34 / EN 593',
    faceToFace: 'API 609 Table 1 / ISO 5752 Series 20',
    leakageClass: 'API 598 Rate A Zero Leakage',
    highlights: [
      'Full investment-cast stainless steel body eliminates rust and exterior corrosion',
      'PTFE or high-purity elastomeric seat ring for sterile chemical inertness',
      'Direct ISO 5211 actuator mounting platform eliminates bracket hysteresis',
      'Fast 1 to 2 second open/close stroke speed for automated safety interlocks',
    ],
    keyBenefits: [
      'Suitable for wash-down, marine splash zones, and pharmaceutical cleanrooms',
      'Resistant to aggressive solvents, alcohols, CIP cleaning acids, and steam',
      'Available with 4-20mA smart electro-pneumatic positioner for modulating flow',
      'Certified EN 10204 3.1 mill metallurgy test reports provided on every batch',
    ],
    overview:
      'Valve Bridge is a premier SS Pneumatic Actuated Butterfly Valve Supplier. Featuring an investment-cast austenitic stainless steel CF8M (316) body and precision electropolished disc, this automated package is engineered for cleanroom wash-downs, chemical transfer lines, and offshore atmospheres where carbon steel or cast iron deteriorates rapidly. Directly actuated by a pneumatic rotary actuator with ATEX / IECEx certified instrumentation.',
    specsTable: [
      { label: 'Nominal Size Range', value: '1.5" to 24" (DN40 to DN600)' },
      { label: 'Pressure Class', value: 'Class 150 / PN10 / PN16' },
      { label: 'Body Metallurgy', value: 'Cast Stainless Steel ASTM A351 CF8M / CF8' },
      { label: 'Disc Metallurgy', value: 'CF8M (SS316) Precision Machined' },
      { label: 'Seat Material', value: 'Pure Virgin PTFE / Viton / Food Grade Silicone' },
      { label: 'Shaft Material', value: '17-4PH / AISI 316 Stainless Steel (Blowout Proof)' },
      { label: 'Actuator Type', value: 'Pneumatic Rack & Pinion DA / SR' },
      { label: 'Mounting Pad', value: 'Direct Mount ISO 5211 with Square Drive' },
      { label: 'Operational Speed', value: '1 to 3 Seconds Full Quarter-Turn' },
      { label: 'Testing Standard', value: 'API 598 / ISO 5208 Leakage Rate A' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Organic Solvents', 'Clean Steam & Condensate', 'Beverages & Dairy', 'Bio-Pharma Media', 'Marine Brine & Seawater'],
    industries: ['Pharmaceutical Manufacturing', 'Brewery & Food Processing', 'Specialty Chemical Skids', 'Offshore Oil & Gas', 'Clean Utilities'],
  },
  {
    id: 'manual-lug-type-butterfly-valve',
    typeNumber: 5,
    name: 'Manual Lug Type Butterfly Valve',
    category: 'manual',
    subCategory: 'lug',
    operationType: 'Manual Lever / Gear',
    categoryLabel: 'Manual Hand Lever / Threaded Lugged Body',
    tagline: 'Full threaded tapped lug body enabling downstream pipe maintenance under full line pressure without line drainage',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-5-manual-lug-type-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/manual-lug-type-butterfly-valve/',
    sizeRange: '2" to 24" (DN50 – DN600)',
    pressureClass: 'Class 150 / PN16 / PN20',
    bodyMaterial: 'Ductile Iron GGG40 / Cast Steel WCB / CF8M',
    discMaterial: 'CF8M Stainless Steel / Aluminium Bronze / Ductile Iron (Nylon)',
    seatMaterial: 'EPDM / NBR / Viton / PTFE Backed',
    endConnection: 'Threaded Full Lug ASME B16.5 / EN 1092-2 (UNC / Metric)',
    actuation: '10-Position Lockable Lever (2"–8") / Weatherproof Gearbox (10"+)',
    tempRange: '-20°C to +120°C (EPDM) / +180°C (Viton)',
    designStandard: 'API 609 Category A / BS EN 593',
    faceToFace: 'API 609 Table 1 Short / ISO 5752 Series 20',
    leakageClass: 'API 598 Rate A Zero Leakage',
    highlights: [
      'Drilled and tapped lugs accommodate individual bolts from each side',
      'Enables dead-end service: downstream pipe can be removed with valve shut',
      'Provides reliable bi-directional sealing up to full rated line pressure',
      'Heavy-duty latching lever with notch throttle quadrant prevents drift',
    ],
    keyBenefits: [
      'Allows pump and meter servicing without emptying the upstream header',
      'No through-bolts required; ideal for tight space terminations',
      'Tongue-and-groove seat design anchors elastomer firmly in body bore',
      'Direct mount ISO 5211 top platform ready for automation upgrade',
    ],
    overview:
      'Valve Bridge is a premier Manual Lug Type Butterfly Valve Supplier. Engineered with tapped threaded lugs conforming to ASME B16.5 and EN 1092 flange standards, this valve can be installed between flanges or bolted to the end of a pipeline for terminal dead-end service. This feature allows plant operators to dismantle downstream pipe sections, pumps, or filters while keeping the upstream system fully pressurized.',
    specsTable: [
      { label: 'Size Range', value: '2" to 24" (DN50 to DN600)' },
      { label: 'Pressure Rating', value: 'Class 150 / PN10 / PN16 / PN20' },
      { label: 'Body Style', value: 'Full Lugged Body with Threaded Metric or UNC Holes' },
      { label: 'Dead-End Rating', value: 'Full Rated Pressure (Bi-Directional Dead-End)' },
      { label: 'Body Casting', value: 'Ductile Iron GGG40 / ASTM A216 WCB / SS316' },
      { label: 'Disc Casting', value: 'CF8M SS316 / Al-Bronze C95800 / Coated DI' },
      { label: 'Seat Liner', value: 'EPDM / Buna-N (NBR) / Viton (FKM) / PTFE' },
      { label: 'Stem Shaft', value: 'SS410 / SS316 Double D or Keyed Drive' },
      { label: 'Manual Control', value: 'Notched Lever Handle or Handwheel Enclosed Gear' },
      { label: 'Testing Standard', value: 'API 598 Shell & Seat Leakage Zero Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Chilled & Condenser Water', 'Potable Water Networks', 'HVAC Hydronics', 'Hydrocarbon Fuels', 'Industrial Effluents'],
    industries: ['HVAC & Building Automation', 'District Cooling Systems', 'Pumping Stations', 'Chemical Storage Terminals', 'Fire Protection Loops'],
  },
  {
    id: 'spherical-disc-butterfly-valve',
    typeNumber: 6,
    name: 'Spherical Disc Butterfly Valve',
    category: 'manual',
    subCategory: 'powder',
    operationType: 'Manual Lever / Gear',
    categoryLabel: 'Manual Lever or Gear / Spherical Disc',
    tagline: 'Smooth non-rubbing spherical contoured disc delivering 30% lower operating torque and extreme seat longevity in abrasive flows',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-6-spherical-disc-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/spherical-disc-butterfly-valve/',
    sizeRange: '2" to 20" (DN50 – DN500)',
    pressureClass: 'PN10 / PN16 / Class 150',
    bodyMaterial: 'Cast Iron FG260 / Ductile Iron GGG50 / Cast Steel WCB',
    discMaterial: 'Spherical Geometry SS304 / SS316 / Hard Chrome Plated DI',
    seatMaterial: 'High-Elasticity Resilient EPDM / Nitrile (NBR) / Neoprene',
    endConnection: 'Wafer Pattern with Centering Lugs',
    actuation: 'Heavy-Duty Hand Lever (up to 8") / Enclosed Worm Gearbox',
    tempRange: '-20°C to +130°C',
    designStandard: 'ISO 5752 / BS 5155 / API 609 Cat A',
    faceToFace: 'ISO 5752 Series 20 / BS EN 558',
    leakageClass: 'API 598 Rate A Zero Bubble Leakage',
    highlights: [
      'Spherical radius machining ensures progressive, non-shearing seal engagement',
      'Significantly lowers operating friction and manual handwheel effort',
      'Prevents disc-edge pinching and elastomer wear in viscous suspensions',
      'Precision machined heavy shaft with anti-blowout retention collar',
    ],
    keyBenefits: [
      'Extended seat seal lifetime 2 to 3 times longer than standard disc valves',
      'Lower torque requirement permits smaller gearboxes and actuators',
      'Excellent throttling precision across intermediate opening angles (20°–70°)',
      'Universal wafer mounting fits ANSI 150, BS Table D/E, and DIN PN16 flanges',
    ],
    overview:
      'Valve Bridge is a premier Spherical Disc Butterfly Valve Supplier. Unlike traditional planar butterfly discs that rely on heavy radial interference, this model incorporates a spherical radius contoured disc edge. As the disc rotates into the closed position, it seals with uniform, smooth compression rather than harsh dragging friction. This dramatically minimizes seat elastomer wear and handwheel operational torque.',
    specsTable: [
      { label: 'Size Range', value: '2" to 20" (DN50 to DN500)' },
      { label: 'Pressure Rating', value: 'PN10 / PN16 / Class 150' },
      { label: 'Disc Engineering', value: 'Spherical Contoured Radiused Sealing Edge' },
      { label: 'Body Metallurgy', value: 'Ductile Iron GGG40 / Cast Iron / WCB' },
      { label: 'Disc Material', value: 'SS316 CF8M / SS304 / Hard Chrome Coated DI' },
      { label: 'Seat Liner', value: 'Heavy Duty Resilient EPDM / Nitrile / Silicone' },
      { label: 'Torque Reduction', value: 'Approx. 25% to 35% Lower than Flat Discs' },
      { label: 'Operator', value: 'Lockable Lever with Position Notch / Worm Gear' },
      { label: 'End Connection', value: 'Universal Wafer with Bolt Guide Lugs' },
      { label: 'Testing Standard', value: 'API 598 / ISO 5208 Rate A 100% Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Viscous Chemical Slurries', 'Paper Pulp & Stock', 'Lime Milk & Sludge', 'Wastewater Sediment', 'Cooling Water'],
    industries: ['Pulp & Paper Mills', 'Wastewater Treatment', 'Mining Slurry Circuits', 'Sugar Mills', 'Cement & Aggregate Plants'],
  },
  {
    id: 'aluminium-cement-butterfly-valve',
    typeNumber: 7,
    name: 'Aluminium Cement Butterfly Valve',
    category: 'manual',
    subCategory: 'powder',
    operationType: 'Manual Lever / Pneumatic',
    categoryLabel: 'Manual or Pneumatic / Dry Bulk Cement Silo',
    tagline: 'Lightweight gravity die-cast aluminium body engineered for dry cement, fly ash, lime powder, and concrete batching silo discharge',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-7-aluminium-cement-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/aluminium-cement-butterfly-valve/',
    sizeRange: '4" to 16" (DN100 – DN400)',
    pressureClass: 'Low Pressure Pneumatic / Gravity (0.2–2.5 bar)',
    bodyMaterial: 'High-Strength Gravity Die-Cast Aluminium Alloy',
    discMaterial: 'Carbon Steel / Ductile Iron with SINT Polymer Over-Mold / SS304',
    seatMaterial: 'Highly Wear-Resistant SINT Engineering Elastomer / EPDM',
    endConnection: 'Single Flange (Top Hopper Flange) / Double Flange (Sleeve Clamp)',
    actuation: 'Manual Hand Lever / Pneumatic Cylinder with Position Switches',
    tempRange: '-20°C to +100°C',
    designStandard: 'WAM / Bulk Handling Industrial Silo Standard',
    faceToFace: 'Compact Silo Discharge Standard',
    leakageClass: 'Dust-Tight & Low Pressure Gas-Tight',
    highlights: [
      'Aluminium die-cast body reduces weight by 60% compared to cast iron',
      'Specially engineered for powder silos, batching plants, and hopper discharge',
      'Patented wear-resistant SINT polymer disc covering resists fine dust abrasion',
      'Few moving parts ensure jam-free performance even with caked powder',
    ],
    keyBenefits: [
      'Eliminates silo discharge bottlenecks and powder bridging',
      'Quick manual or pneumatic quarter-turn operation for batch dosing',
      'Simple bolt-on installation beneath screw feeders and baghouse filters',
      'Significantly lowers freight and handling costs due to lightweight aluminium',
    ],
    overview:
      'Valve Bridge is a premier Aluminium Cement Butterfly Valve Supplier. Designed specifically for powdery and granular dry bulk materials such as cement, fly ash, bentonite, flour, and sand. The valve body consists of two high-pressure aluminium alloy die-cast half-bodies, a steel disc coated with a proprietary anti-abrasion polymer compound, and a high-elasticity wear sleeve. Provides completely dust-tight shut-off beneath silos, hoppers, and pneumatic bins.',
    specsTable: [
      { label: 'Size Range', value: '4" to 16" (DN100, DN150, DN200, DN250, DN300, DN400)' },
      { label: 'Operating Pressure', value: 'Max 0.2 bar (Gravity) up to 2.5 bar (Pneumatic)' },
      { label: 'Body Casting', value: 'High-Density Gravity Die-Cast Aluminium Alloy' },
      { label: 'Disc Construction', value: 'High Tensile Steel Core with SINT Anti-Wear Polymer' },
      { label: 'Seal Ring', value: 'Abrasion Resistant SINT / EPDM / White Food Silicone' },
      { label: 'Top Connection', value: 'Round Flange to Fit Standard Silo Flanges' },
      { label: 'Bottom Connection', value: 'Beaded Sleeve for Flexible Sock or Counter-Flange' },
      { label: 'Operator Options', value: 'Manual Hand Lever or Pneumatic Actuator Cylinder' },
      { label: 'Dust Tightness', value: '100% Dust-Tight Zero Powders Emission' },
      { label: 'Testing Standard', value: 'Silo Cyclic Pressure & Abrasion Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Dry Cement & Clinker Dust', 'Fly Ash & Bottom Ash', 'Hydrated Lime & Gypsum', 'Foundry Sand & Silica', 'Animal Feed Pellets'],
    industries: ['Concrete Batching Plants', 'Cement Terminals & Silos', 'Asphalt Plants', 'Thermal Power Coal Handling', 'Glass & Ceramic Batching'],
  },
  {
    id: 'pneumatic-double-flanged-butterfly-valve',
    typeNumber: 8,
    name: 'Pneumatic Double Flanged Butterfly Valve',
    category: 'pneumatic',
    subCategory: 'flanged',
    operationType: 'Pneumatic Rotary',
    categoryLabel: 'Pneumatic Actuated / Heavy Double Flanged',
    tagline: 'Automated double flanged valve with direct-mount pneumatic actuator for high-flow cooling, waterworks, and industrial plant mains',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-8-pneumatic-double-flanged-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-double-flanged-butterfly-valve/',
    sizeRange: '2" to 48" (DN50 – DN1200)',
    pressureClass: 'Class 150 / PN10 / PN16 / PN25',
    bodyMaterial: 'Ductile Iron GGG40 / Cast Carbon Steel WCB / CF8M Stainless',
    discMaterial: 'CF8M Stainless Steel / Ductile Iron (Epoxy Coated) / Al-Bronze',
    seatMaterial: 'High-Resilience EPDM / NBR / Viton (Molded or Replaceable)',
    endConnection: 'Double Flanged ASME B16.5 / EN 1092-2 (PN10/16/25)',
    actuation: 'Rack & Pinion / Scotch Yoke Pneumatic Actuator (DA / SR)',
    tempRange: '-20°C to +130°C',
    designStandard: 'BS EN 593 / AWWA C504 / API 609 Cat B',
    faceToFace: 'EN 558 Series 13 / 14 / ISO 5752',
    leakageClass: 'API 598 Rate A Zero Bubble Leakage',
    highlights: [
      'Dual integral flanges provide maximum piping rigidity and structural stability',
      'Automated with heavy-duty pneumatic actuator for fast ESD and modulating control',
      'Equipped with Namur pilot solenoid, limit switch box, and air filter regulator',
      'Accommodates large thermal pipe expansion forces without disc binding',
    ],
    keyBenefits: [
      'Ideal for underground buried installation or large water transmission tunnels',
      'Provides independent pipe side disassembly with no downstream leakage',
      'Optional Scotch Yoke actuator available for sizes 14" to 48" high breakaway torque',
      'Factory assembled, piped, and calibrated with 100% pneumatic cycle validation',
    ],
    overview:
      'Valve Bridge is a premier Pneumatic Double Flanged Butterfly Valve Supplier. Built with twin full-face flanges conforming to ASME B16.5 or EN 1092 standards, this automated valve provides outstanding mechanical integrity in high-vibration and large-diameter piping runs. Powered by a high-cycle pneumatic actuator, it ensures rapid emergency closure, pump trip isolation, or precise modulating flow regulation via digital positioner.',
    specsTable: [
      { label: 'Size Range', value: '2" to 48" (DN50 to DN1200)' },
      { label: 'Pressure Ratings', value: 'PN10, PN16, PN25, Class 150' },
      { label: 'Body Style', value: 'Double Flanged Full Heavy Duty Cast Body' },
      { label: 'Actuator Mechanism', value: 'Hard-Anodized Aluminum Pneumatic Rotary Actuator' },
      { label: 'Control Modes', value: 'On-Off (Solenoid) or Modulating (4-20mA Positioner)' },
      { label: 'Body Material', value: 'Ductile Iron GGG40 / WCB / CF8M' },
      { label: 'Disc Material', value: 'CF8M Stainless / Al-Bronze / Epoxy Coated DI' },
      { label: 'Seat Liner', value: 'Resilient Heavy Duty EPDM / NBR / Viton' },
      { label: 'Instrument Air', value: '4.0 to 8.0 bar Compressed Clean Air' },
      { label: 'Testing Standard', value: 'API 598 / ISO 5208 Rate A 100% Hydrostatic' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Raw & Potable Water', 'Sea Water Cooling', 'Effluent Discharge', 'HVAC Condenser Loops', 'Process Wastewater'],
    industries: ['Municipal Water Authorities', 'Desalination Megaprojects', 'Thermal & Nuclear Power', 'Refinery Utilities', 'Steel Manufacturing'],
  },
  {
    id: 'pneumatic-lug-type-butterfly-valve',
    typeNumber: 9,
    name: 'Pneumatic Lug Type Butterfly Valve',
    category: 'pneumatic',
    subCategory: 'lug',
    operationType: 'Pneumatic Rotary',
    categoryLabel: 'Pneumatic Actuated / Threaded Lugged Body',
    tagline: 'High-speed automated quarter-turn valve with threaded tapped lugs for dead-end and terminal process isolation',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-9-pneumatic-lug-type-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-lug-type-butterfly-valve/',
    sizeRange: '2" to 24" (DN50 – DN600)',
    pressureClass: 'Class 150 / PN16 / PN20',
    bodyMaterial: 'Ductile Iron GGG40 / Cast Steel WCB / CF8M',
    discMaterial: 'CF8M Stainless Steel / Al-Bronze / Ductile Iron (Nylon)',
    seatMaterial: 'EPDM / NBR / Viton / PTFE Backed',
    endConnection: 'Threaded Full Lug ASME B16.5 / EN 1092-2',
    actuation: 'Direct-Mounted Pneumatic Rotary Actuator (DA / SR)',
    tempRange: '-20°C to +120°C (up to 180°C with Viton)',
    designStandard: 'API 609 Category A / BS EN 593',
    faceToFace: 'API 609 Table 1 Short / ISO 5752 Series 20',
    leakageClass: 'API 598 Rate A Zero Leakage',
    highlights: [
      'Threaded lugs allow secure automated shut-off even when downstream pipe is open',
      'Direct-mount ISO 5211 platform ensures zero stem play and precision control',
      'Fitted with dual-coil Namur solenoid and visual dome indicator switchbox',
      'Compact footprint with rapid 1 to 2 second valve travel speed',
    ],
    keyBenefits: [
      'Automated plant ESD (Emergency Shutdown) and batch sequencing control',
      'Provides bidirectional bubble-tight sealing across full pressure differential',
      'Spring-return option delivers fail-safe closed or fail-safe open on air failure',
      'Eliminates manual operator errors in automated tank farms and skid systems',
    ],
    overview:
      'Valve Bridge is a premier Pneumatic Lug Type Butterfly Valve Supplier. Featuring threaded tapped lugs compatible with ASME B16.5 and EN 1092 flanges, this automated package allows bi-directional dead-end isolation. The heavy-duty rack-and-pinion pneumatic cylinder provides rapid response times and long cycle life, making it the ideal selection for automated skid systems, tank manifolds, and process distribution plants.',
    specsTable: [
      { label: 'Size Range', value: '2" to 24" (DN50 to DN600)' },
      { label: 'Pressure Rating', value: 'Class 150 / PN10 / PN16' },
      { label: 'Body Style', value: 'Full Lugged Body with Threaded Holes' },
      { label: 'Actuation', value: 'Pneumatic Double Acting or Spring Return (Fail Safe)' },
      { label: 'Stroke Time', value: '1.0 to 2.5 seconds (Fast Quarter Turn)' },
      { label: 'Body Casting', value: 'Ductile Iron GGG40 / WCB / CF8M' },
      { label: 'Disc Casting', value: 'CF8M (SS316) / Aluminium Bronze / Nylon Coated DI' },
      { label: 'Seat Material', value: 'Resilient EPDM / Buna-N / Viton / PTFE' },
      { label: 'Accessories', value: '5/2 or 3/2 Solenoid + Micro-Switch Feedback Box' },
      { label: 'Testing Standard', value: 'API 598 / ISO 5208 Rate A 100% Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Cooling Water & Chilled Water', 'Hydrocarbon Distillates', 'Industrial Chemicals', 'Oils & Fuels', 'Air & Nitrogen'],
    industries: ['Chemical Processing Plants', 'Skid & Modular Manufacturers', 'Petrochemical Terminals', 'Central Chiller Plants', 'Water Filtration'],
  },
  {
    id: 'pneumatic-upvc-butterfly-valve',
    typeNumber: 10,
    name: 'Pneumatic UPVC Butterfly Valve',
    category: 'pneumatic',
    subCategory: 'upvc',
    operationType: 'Pneumatic Rotary',
    categoryLabel: 'Pneumatic Actuated / Corrosion-Proof UPVC',
    tagline: 'Automated 100% non-metallic wetted butterfly valve for aggressive acids, chlorine, brine, and high-purity water systems',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-10-pneumatic-upvc-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-upvc-butterfly-valve/',
    sizeRange: '2" to 12" (DN50 – DN300)',
    pressureClass: 'PN10 (150 PSI at 20°C)',
    bodyMaterial: 'Industrial Virgin UPVC Body with ISO 5211 Direct Top Flange',
    discMaterial: 'Virgin UPVC / CPVC Disc with SS316 Internal Core',
    seatMaterial: 'High-Purity EPDM / FKM (Viton) Boot Seal',
    endConnection: 'Universal Wafer (ANSI Class 150 / DIN PN10 / JIS 10K)',
    actuation: 'Corrosion-Resistant Hard Anodized Pneumatic Rotary Actuator',
    tempRange: '0°C to +60°C (Thermoplastic limit)',
    designStandard: 'ISO 16136 / ASTM F1970 / DIN EN 1452',
    faceToFace: 'ISO 5752 Short Series',
    leakageClass: 'Class VI Bubble Tight (100% Zero Leakage)',
    highlights: [
      'Total chemical resistance against sulfuric, hydrochloric, and nitric acids',
      'Complete thermoplastic body prevents corrosion from caustic plant wash-downs',
      'Factory assembled with stainless steel mounting hardware and brackets',
      'Available with compact composite actuator for 100% non-metallic exterior',
    ],
    keyBenefits: [
      'Eliminates metal ion contamination in semiconductor and ultrapure water lines',
      'Fast automated cycling for chemical dosing, CIP neutralization, and RO rejects',
      'Equipped with Namur solenoid and position feedback box for PLC control',
      'Ultra-lightweight structure reduces pipe stress and installation costs',
    ],
    overview:
      'Valve Bridge is a premier Pneumatic UPVC Butterfly Valve Supplier. Designed for aggressive corrosive fluids where all metallic alloys fail or cause metal leaching. The virgin UPVC body is paired with a heavy-duty pneumatic actuator to provide seamless automated process control. Featuring a continuous boot seat of high-grade EPDM or FKM, the media never touches the metal stem or valve exterior.',
    specsTable: [
      { label: 'Size Range', value: '2" to 12" (DN50 to DN300)' },
      { label: 'Pressure Rating', value: 'PN10 / 150 PSI @ 20°C' },
      { label: 'Body Material', value: 'Injection Molded Industrial Virgin UPVC' },
      { label: 'Disc Material', value: 'Molded UPVC / CPVC' },
      { label: 'Liner Seal', value: 'Virgin EPDM / Viton (FKM) Full Boot' },
      { label: 'Actuator', value: 'Hard Anodized Aluminum / Polypropylene Pneumatic Actuator' },
      { label: 'Control Signal', value: '24VDC / 110VAC / 220VAC Solenoid or 4-20mA' },
      { label: 'Flange Drilling', value: 'Universal Wafer ANSI 150# / DIN PN10 / JIS 10K' },
      { label: 'Temperature Range', value: '0°C to +60°C' },
      { label: 'Testing Standard', value: 'ISO 9393 Hydrostatic & Bubble Tight 100% Checked' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Concentrated Acids (HCl, H2SO4)', 'Caustic Soda (NaOH)', 'Sodium Hypochlorite Bleach', 'Electroplating Acids', 'Seawater RO Reject'],
    industries: ['Chemical Processing Plants', 'Semiconductor & Electronics', 'Water Desalination & RO', 'Industrial Wastewater Treatment', 'Battery Manufacturing'],
  },
  {
    id: 'pneumatic-wafer-type-butterfly-valve',
    typeNumber: 11,
    name: 'Pneumatic Wafer Type Butterfly Valve',
    category: 'pneumatic',
    subCategory: 'wafer',
    operationType: 'Pneumatic Rotary',
    categoryLabel: 'Pneumatic Actuated / Universal Wafer Body',
    tagline: 'High-reliability automated concentric butterfly valve with universal wafer body for rapid HVAC, water, and plant skid automation',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-11-pneumatic-wafer-type-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-wafer-type-butterfly-valve/',
    sizeRange: '1.5" to 24" (DN40 – DN600)',
    pressureClass: 'PN10 / PN16 / Class 150',
    bodyMaterial: 'Ductile Iron GGG40 / Cast Carbon Steel WCB / CF8M',
    discMaterial: '316 Stainless Steel (CF8M) / Epoxy-Coated Ductile Iron',
    seatMaterial: 'High-Elasticity EPDM / Buna-N (NBR) / Viton / PTFE',
    endConnection: 'Universal Wafer Body with Centering Bolt Guides',
    actuation: 'Direct-Mounted Rack & Pinion Pneumatic Actuator (DA / SR)',
    tempRange: '-20°C to +130°C (up to 180°C with Viton)',
    designStandard: 'API 609 Category A / EN 593 / ISO 5752',
    faceToFace: 'API 609 Table 1 Short / ISO 5752 Series 20',
    leakageClass: 'API 598 Rate A Zero Leakage',
    highlights: [
      'Universal wafer body clamps seamlessly between ANSI, DIN, BS, and JIS flanges',
      'Direct-mount ISO 5211 platform eliminates bracket hysteresis and backlash',
      'Dual O-ring stem seals ensure zero atmospheric fugitive emissions',
      'Fast 1 to 2 second open/close stroke speed for automated safety interlocks',
    ],
    keyBenefits: [
      'Most cost-effective automated valve solution for utilities and process plants',
      'Compact face-to-face dimensions reduce weight and space in tight skid packages',
      'Low torque aerodynamic disc reduces air consumption and actuator sizing',
      'Comes pre-wired with Namur pilot solenoid and position feedback switchbox',
    ],
    overview:
      'Valve Bridge is a premier Pneumatic Wafer Type Butterfly Valve Supplier. This concentric resilient-seated valve is the global industry standard for automated utility and process lines. The ultra-compact wafer body fits between mating flanges, held rigidly by through-bolts. Paired with a high-performance pneumatic rack-and-pinion actuator, it delivers millions of trouble-free cycles for water treatment, HVAC hydronics, air systems, and light chemical lines.',
    specsTable: [
      { label: 'Size Range', value: '1.5" to 24" (DN40 to DN600)' },
      { label: 'Pressure Class', value: 'PN10 / PN16 / ANSI Class 150' },
      { label: 'Body Style', value: 'Universal Wafer Pattern with Alignment Lugs' },
      { label: 'Flange Standards', value: 'ASME B16.5 Class 150 / EN 1092-2 PN10 & PN16 / JIS 10K' },
      { label: 'Body Metallurgy', value: 'Ductile Iron GGG40 / ASTM A216 WCB / SS316' },
      { label: 'Disc Metallurgy', value: 'CF8M Stainless Steel / Nylon-Coated Ductile Iron' },
      { label: 'Seat Liner', value: 'EPDM / NBR / Viton (Molded or Replaceable)' },
      { label: 'Actuator', value: 'Direct Mount Hard Anodized Pneumatic Rotary Cylinder' },
      { label: 'Cycle Life', value: 'Over 1,000,000 Continuous Automated Cycles' },
      { label: 'Testing Standard', value: 'API 598 / ISO 5208 Rate A 100% Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Chilled & Cooling Water', 'Compressed Air & Inert Gases', 'Wastewater & Effluent', 'Mild Acids & Chemicals', 'Lubricating Oils'],
    industries: ['HVAC & Building Automation', 'Water & Wastewater Plants', 'Industrial Skid Packaging', 'Brewery & Beverage Skids', 'Fire Water Piping'],
  },
  {
    id: 'pneumatic-ceramic-butterfly-valve',
    typeNumber: 12,
    name: 'Pneumatic Ceramic Butterfly Valve',
    category: 'pneumatic',
    subCategory: 'ceramic',
    operationType: 'Pneumatic Rotary',
    categoryLabel: 'Pneumatic Actuated / Structural Ceramic Lining',
    tagline: 'Extreme abrasion and severe erosion resistance with structural Alumina ceramic (Al2O3 99%) disc and seat for fly ash and mining slurry',
    image: '/assets/products/alis-butterfly-valves/butterfly-valve-12-pneumatic-ceramic-butterfly-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-ceramic-butterfly-valve/',
    sizeRange: '2" to 12" (DN50 – DN300)',
    pressureClass: 'Class 150 / Class 300 / PN16 / PN25',
    bodyMaterial: 'Cast Carbon Steel WCB / CF8M Stainless with High-Alumina Ceramic Lining',
    discMaterial: 'Solid Alumina Ceramic (Al2O3 99%) / Zirconia Toughened Ceramic (ZTA)',
    seatMaterial: 'Precision Ground Self-Lapping Structural Ceramic Ring (HRA 88+)',
    endConnection: 'Wafer or Lugged Body (Heavy Wall ASME B16.5 / DIN)',
    actuation: 'Heavy-Duty Pneumatic Rotary Actuator with Fail-Safe Springs',
    tempRange: '-20°C to +350°C (High Temp Ceramic Seal)',
    designStandard: 'ASME B16.34 / API 609 / Manufacturer Severe Service Spec',
    faceToFace: 'ASME B16.10 / ISO 5752',
    leakageClass: 'ANSI/FCI 70-2 Class V / Class VI',
    highlights: [
      'Structural 99% Al2O3 ceramic disc and liner withstand severe particulate erosion',
      'Ceramic hardness exceeds HRA 88 (second only to diamond in abrasive wear resistance)',
      'Outlasts metallic and Stellite-trimmed valves by 5x to 10x in fly ash service',
      'High-thrust pneumatic actuator effortlessly cuts through settling solids and scale',
    ],
    keyBenefits: [
      'Eliminates valve body blowout in high-velocity pneumatic fly ash pipelines',
      'Immune to cavitation, slurry scour, and combined chemical/abrasive attack',
      'Drastically slashes plant unscheduled downtime and maintenance replacement costs',
      'Equipped with heavy-duty positioner and proximity switches for automated DCS loops',
    ],
    overview:
      'Valve Bridge is a premier Pneumatic Ceramic Butterfly Valve Supplier. In thermal coal power plants, mining flotation, and flue gas desulfurization (FGD) systems, high-velocity abrasive particles destroy standard metal-seated or rubber-lined butterfly valves within weeks. This severe-service valve features solid structural ceramic wetted components (Al2O3 / ZrO2) with extreme diamond-like hardness (HRA 88+). Powered by a heavy-duty pneumatic actuator, it ensures dependable, erosion-proof isolation in the world’s most punishing slurry lines.',
    specsTable: [
      { label: 'Size Range', value: '2" to 12" (DN50 to DN300)' },
      { label: 'Pressure Rating', value: 'Class 150, Class 300, PN16, PN25' },
      { label: 'Wetted Lining', value: 'High-Purity Structural Alumina Ceramic (Al2O3 ≥ 99%)' },
      { label: 'Ceramic Hardness', value: 'HRA 88+ (Mohs Hardness 9.0)' },
      { label: 'Body Shell', value: 'ASTM A216 WCB / SS316 CF8M (Pressure Retaining Armor)' },
      { label: 'Disc Metallurgy', value: 'Solid High-Alumina Ceramic or Zirconia (ZrO2)' },
      { label: 'Seat Construction', value: 'Floating Resiliently Backed Precision Ceramic Ring' },
      { label: 'Actuator', value: 'Heavy-Duty Pneumatic Cylinder (High Breakaway Safety Factor)' },
      { label: 'Operating Temp', value: '-20°C up to +350°C' },
      { label: 'Testing Standard', value: 'API 598 High Pressure Liquid & Air Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Dry & Wet Fly Ash', 'FGD Limestone Slurry', 'Mining Iron Ore & Copper Slurry', 'Pulverized Coal Dust', 'Sand Blasting Lines'],
    industries: ['Coal-Fired Power Plants', 'Mining & Ore Processing', 'Flue Gas Desulfurization (FGD)', 'Alumina Refineries', 'Cement Kiln Exhausts'],
  },
];

export default function ButterflyValvesCategoryExperience({
  product,
  initialModelId,
}: Props) {
  const [activeFilter, setActiveFilter] = useState<ButterflyValveFilter>('all');
  const [selectedModalModel, setSelectedModalModel] =
    useState<ButterflyValveModel | null>(null);

  // If initialModelId provided, open it on load
  useEffect(() => {
    if (initialModelId) {
      const match = butterflyValvesCatalog.find((m) => m.id === initialModelId);
      if (match) setSelectedModalModel(match);
    }
  }, [initialModelId]);

  // Filtered list
  const filteredModels = butterflyValvesCatalog.filter((m) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'manual') return m.category === 'manual';
    if (activeFilter === 'pneumatic') return m.category === 'pneumatic';
    if (activeFilter === 'wafer') return m.subCategory === 'wafer';
    if (activeFilter === 'lug') return m.subCategory === 'lug';
    if (activeFilter === 'flanged') return m.subCategory === 'flanged';
    if (activeFilter === 'upvc') return m.subCategory === 'upvc';
    if (activeFilter === 'powder') return m.subCategory === 'powder';
    if (activeFilter === 'ceramic') return m.subCategory === 'ceramic';
    return true;
  });

  const filterTabs: { id: ButterflyValveFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All 12 Butterfly Valves', count: butterflyValvesCatalog.length },
    { id: 'manual', label: 'Manual & Gear (4)', count: butterflyValvesCatalog.filter((m) => m.category === 'manual').length },
    { id: 'pneumatic', label: 'Pneumatic Actuated (8)', count: butterflyValvesCatalog.filter((m) => m.category === 'pneumatic').length },
    { id: 'wafer', label: 'Wafer Type', count: butterflyValvesCatalog.filter((m) => m.subCategory === 'wafer').length },
    { id: 'lug', label: 'Lugged Body', count: butterflyValvesCatalog.filter((m) => m.subCategory === 'lug').length },
    { id: 'flanged', label: 'Double Flanged', count: butterflyValvesCatalog.filter((m) => m.subCategory === 'flanged').length },
    { id: 'upvc', label: 'UPVC Corrosion-Proof', count: butterflyValvesCatalog.filter((m) => m.subCategory === 'upvc').length },
    { id: 'powder', label: 'Powder & Silo', count: butterflyValvesCatalog.filter((m) => m.subCategory === 'powder').length },
    { id: 'ceramic', label: 'Ceramic Severe Service', count: butterflyValvesCatalog.filter((m) => m.subCategory === 'ceramic').length },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. Clean Minimal Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50/50 py-3">
        <div className="container-px mx-auto max-w-7xl flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-teal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <Link href="/products" className="hover:text-teal transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-navy font-semibold">Butterfly Valves</span>
        </div>
      </div>

      {/* 2. Category Hero Banner (Identical layout to Actuator and Ball Valves) */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span>VALVE BRIDGE INDUSTRIAL PORTFOLIO • SOURCING &amp; AUTOMATION</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy">
                  Butterfly Valves
                </h1>
                <p className="mt-2 text-base sm:text-lg font-medium text-teal">
                  Effortless flow control, dependable shut-off, and durable performance across industrial pipelines
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  Designed around demanding industrial flow applications, our Butterfly Valves combine easy quarter-turn operation, dependable bi-directional shut-off, and heavy-duty longevity. From universal concentric wafer and tapped lug designs to large-diameter double flanged waterworks valves, corrosion-proof UPVC, dry cement powder spherical discs, and extreme erosion-proof structural ceramic packages.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Size Range</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">1.5&quot; to 48&quot; (DN1200)</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pressure Range</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">PN6–PN25 / Class 150#</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Standards</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-0.5">API 609 • EN 593 • ISO</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Testing</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">100% Pre-Shipment</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#butterfly-catalog"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy hover:bg-slate-800 text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-xs"
                >
                  <Layers className="w-4 h-4 text-amber" />
                  <span>Browse 12 Valve Bridge Models</span>
                </a>
                <Link
                  href="/contact?product=ButterflyValves"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Request Factory Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#comparison-matrix"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-navy px-4 py-2.5 text-xs font-semibold transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-teal" />
                  <span>Technical Comparison</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-2xl bg-white border border-slate-200/90 shadow-lg p-6 flex flex-col items-center justify-center group overflow-hidden">
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  Valve Bridge Technical Catalog
                </div>
                <img
                  src="/assets/products/alis-butterfly-valves/butterfly-valve-1-gear-op-double-flanged-butterfly-valve.png"
                  alt="Valve Bridge Butterfly Valve"
                  className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-md"
                />
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-navy">Manual &amp; Pneumatic Butterfly Valves</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Direct mill pricing with 100% pre-shipment hydro testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs (Sticky Top, Identical to Actuator & Ball Valves) */}
      <section id="butterfly-catalog" className="sticky top-20 lg:top-24 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs py-3.5">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-navy text-white shadow-xs font-bold'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-navy'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-amber text-navy' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center text-xs text-slate-500 font-medium shrink-0">
              <span>Showing {filteredModels.length} of 12 Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Catalog Grid (Exact Pneumatic Actuator & Ball Valve Card Layout) */}
      <section className="py-12 lg:py-16 bg-slate-50/50">
        <div className="container-px mx-auto max-w-7xl space-y-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                className="flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-teal/40 transition-all duration-300 overflow-hidden group"
              >
                {/* Image Canvas with Category Badge */}
                <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-50/80 via-white to-slate-50/30 p-6 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 border border-slate-200/80 text-[10px] font-extrabold uppercase tracking-wider text-navy shadow-2xs">
                      {model.operationType}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-600">
                      Type {model.typeNumber < 10 ? `0${model.typeNumber}` : model.typeNumber}
                    </span>
                  </div>

                  <img
                    src={model.image}
                    alt={model.name}
                    className="max-h-[170px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-md"
                    loading="lazy"
                  />

                  {/* Quick view button */}
                  <button
                    onClick={() => setSelectedModalModel(model)}
                    className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    title="Quick Specs Preview"
                  >
                    <span className="px-3.5 py-1.5 rounded-lg bg-navy/90 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-amber" />
                      <span>Quick Technical Specs</span>
                    </span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Highlights */}
                    {model.highlights && model.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {model.highlights.slice(0, 2).map((h) => (
                          <span
                            key={h}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors leading-snug">
                      {model.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {model.tagline}
                    </p>

                    {/* Technical Specs Key Values Box */}
                    <div className="mt-4 space-y-1.5 text-xs bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="font-medium">Size Range:</span>
                        <span className="font-bold text-navy truncate max-w-[150px]">{model.sizeRange}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="font-medium">Pressure Class:</span>
                        <span className="font-bold text-navy truncate max-w-[150px]">{model.pressureClass}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="font-medium">Body Material:</span>
                        <span className="font-semibold text-slate-800 truncate max-w-[150px]">{model.bodyMaterial.split('/')[0]}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="font-medium">Seat / Seal:</span>
                        <span className="font-bold text-emerald-600 truncate max-w-[150px]">{model.seatMaterial.split('/')[0]}</span>
                      </div>
                    </div>

                    {/* Recommended Media */}
                    <div className="mt-3 text-[11px] text-slate-500 line-clamp-1">
                      <span className="font-semibold text-slate-700">Suitable Media: </span>
                      {model.suitableMedia.slice(0, 3).join(', ')}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedModalModel(model)}
                      className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 hover:border-navy bg-white hover:bg-slate-50 text-navy text-xs font-bold text-center transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-teal" />
                      <span>Specifications</span>
                    </button>

                    <Link
                      href={`/contact?product=ButterflyValves&model=${encodeURIComponent(model.name)}`}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-bold text-center transition-colors shadow-2xs flex items-center justify-center gap-1"
                    >
                      <span>RFQ Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Technical Comparison Matrix */}
      <section id="comparison-matrix" className="py-16 bg-white border-y border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Technical Comparison Matrix
            </span>
            <h2 className="text-2xl font-bold text-navy mt-1">
              Valve Bridge Butterfly Valves Technical Comparison Table
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
              Compare key engineering parameters across all 12 Valve Bridge butterfly valve models to select the optimal valve body, disc geometry, and actuation type for your piping installation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-navy font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5 whitespace-nowrap">Model Name</th>
                  <th className="p-3.5 whitespace-nowrap">Operation</th>
                  <th className="p-3.5 whitespace-nowrap">Size Range</th>
                  <th className="p-3.5 whitespace-nowrap">Pressure Rating</th>
                  <th className="p-3.5 whitespace-nowrap">Body Material</th>
                  <th className="p-3.5 whitespace-nowrap">Seat / Liner</th>
                  <th className="p-3.5 whitespace-nowrap">End Connection</th>
                  <th className="p-3.5 whitespace-nowrap">Standard</th>
                  <th className="p-3.5 whitespace-nowrap text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {butterflyValvesCatalog.map((model) => (
                  <tr
                    key={model.id}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-navy whitespace-nowrap flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {model.typeNumber}
                      </span>
                      <span>{model.name}</span>
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          model.category === 'manual'
                            ? 'bg-slate-100 text-slate-700'
                            : 'bg-emerald-50 text-emerald-700'
                        }`}
                      >
                        {model.operationType}
                      </span>
                    </td>
                    <td className="p-3.5 whitespace-nowrap font-medium text-slate-700">
                      {model.sizeRange}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.pressureClass}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.bodyMaterial.split('/')[0]}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.seatMaterial.split('/')[0]}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.endConnection.split('(')[0]}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.designStandard.split('/')[0]}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-right">
                      <button
                        onClick={() => setSelectedModalModel(model)}
                        className="text-xs font-bold text-teal hover:text-navy transition-colors cursor-pointer"
                      >
                        View &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Sizing & Engineering Selection Guide */}
      <section className="py-16 bg-slate-50/50">
        <div className="container-px mx-auto max-w-7xl space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Technical Guide
            </span>
            <h2 className="text-2xl font-bold text-navy mt-1">
              Butterfly Valve Selection &amp; Sizing Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Key engineering factors to verify when sizing butterfly valves for liquid, gas, dry powder, or slurry pipelines.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal font-bold text-xs">
                01
              </div>
              <h3 className="font-bold text-navy text-sm">Wafer vs. Lug vs. Flanged</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wafer valves are cost-effective and light, fitting between flanges. Lugged bodies feature tapped holes allowing downstream pipe removal under pressure (dead-end service). Double flanged bodies offer the highest rigidity for large underground waterworks.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center text-amber font-bold text-xs">
                02
              </div>
              <h3 className="font-bold text-navy text-sm">Elastomer vs. Metal vs. Ceramic</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                EPDM covers water up to 120°C; Viton provides solvent resistance up to 180°C; UPVC boot seats resist acids; and structural 99% Alumina Ceramic provides extreme hardness (HRA 88+) for abrasive fly ash and limestone slurries.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-xs">
                03
              </div>
              <h3 className="font-bold text-navy text-sm">Actuator Safety Factor (SF)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unlike ball valves, butterfly valve dynamic torque depends heavily on fluid velocity and seat interference. We size pneumatic actuators with a minimum 25% to 30% safety margin above published breakaway torque for clean liquids, and 40% for dry powders.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center text-navy font-bold text-xs">
                04
              </div>
              <h3 className="font-bold text-navy text-sm">Dry Bulk &amp; Powder Contours</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In cement, lime, and bulk silo feeds, standard flat discs cause material packing and seal damage. Our spherical disc and aluminium silo valves eliminate jamming, reducing operating torque by up to 35% and extending seal life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Target Operating Domains & Applications */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Operating Domains
            </span>
            <h2 className="text-2xl font-bold text-navy mt-1">
              Global Application Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Valve Bridge butterfly valves operate in severe-service piping across global energy, chemical, and utility infrastructures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-3">
                <Droplets className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">Water &amp; Desalination</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Large diameter double flanged and wafer valves for raw water pumping, RO membranes, and municipal distribution networks.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center text-amber mb-3">
                <Factory className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">Cement &amp; Dry Silos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aluminium body and spherical disc valves designed for jam-free powder discharge beneath silo hoppers and batching systems.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">Power &amp; FGD Slurry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Solid ceramic (Al2O3 99%) lined butterfly valves engineered for abrasive coal fly ash and limestone scrubber recirculation.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 mb-3">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">Chemical &amp; Semiconductor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Virgin UPVC and all-stainless steel CF8M valves for aggressive acids, brine electrolysis, and high-purity water circuits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Technical FAQs */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Technical Answers
            </span>
            <h2 className="text-2xl font-bold text-navy mt-1">
              Frequently Asked Engineering Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'What is the operational difference between Wafer and Lug type butterfly valves?',
                a: 'A Wafer butterfly valve is clamped between companion pipe flanges using long continuous threaded through-studs. A Lugged valve has individual drilled and tapped threaded lugs that match the flange bolt holes. This allows a Lug valve to provide dead-end service where downstream piping can be removed while maintaining full upstream line pressure.',
              },
              {
                q: 'Why choose a Spherical Disc butterfly valve over a standard planar disc?',
                a: 'Standard flat discs generate intense shear friction and material jamming when closing against dry powder columns, granules, or viscous media. A spherical disc features a smoothly radiused contoured sealing edge that glides progressively into the seat without pinching, cutting torque by 25%–35% and extending seat life.',
              },
              {
                q: 'When should a Ceramic butterfly valve be specified instead of metal seated?',
                a: 'When handling high-velocity particulate erosion such as pneumatic fly ash conveying, flue gas desulfurization (FGD) limestone slurry, or mining tailings. Structural Alumina Ceramic (Al2O3 99%) has a hardness of HRA 88+ (Mohs 9), outlasting Stellite, hard chrome, and Tungsten Carbide coatings by 5x to 10x.',
              },
              {
                q: 'Can all Valve Bridge butterfly valves be fitted with pneumatic actuators?',
                a: 'Yes. All Valve Bridge industrial butterfly valves come with standardized ISO 5211 direct-mounting top flanges and double-D or keyed drive shafts. They can be operated via hand lever today and upgraded to pneumatic or electric automation at any time without costly custom brackets.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-navy">
                  <HelpCircle className="w-4 h-4 text-teal shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Direct Sourcing & RFQ Banner */}
      <section id="rfq-section" className="py-16 bg-white border-t border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl">
          <div className="rounded-2xl bg-navy text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-md">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified China Mill Sourcing &amp; Valve Automation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Need Fast Mill Quotes for Automated Butterfly Valve Packages?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Submit your Valve Data Sheet (VDS), piping schedule, or actuator instrumentation specifications. Valve Bridge manages factory quality audits, dimensional verification, hydro testing to API 598, and 100% pre-shipment inspection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/contact?product=ButterflyValves"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white px-6 py-3.5 text-xs font-bold transition-colors shadow-xs"
              >
                <span>Submit RFQ / Piping Schedule</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 text-xs font-semibold transition-colors"
              >
                <span>Inspection Protocol</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Interactive Technical Specifications Modal */}
      {selectedModalModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                  {selectedModalModel.typeNumber}
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">
                    {selectedModalModel.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-teal">
                    {selectedModalModel.categoryLabel}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedModalModel(null)}
                className="w-8 h-8 rounded-lg bg-slate-200/60 hover:bg-slate-200 text-slate-500 hover:text-navy flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
              {/* Product Visual & Overview */}
              <div className="grid sm:grid-cols-12 gap-6 items-center bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                <div className="sm:col-span-4 flex justify-center">
                  <div className="w-36 h-36 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center shadow-2xs">
                    <img
                      src={selectedModalModel.image}
                      alt={selectedModalModel.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:col-span-8 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Product Architecture &amp; Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedModalModel.overview}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-navy block mb-1.5">
                      Design Highlights:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-xs">
                      {selectedModalModel.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-navy block">
                  Key Engineering Advantages
                </span>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {selectedModalModel.keyBenefits.map((b, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-emerald-950 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-navy block flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal" />
                  <span>Technical Specifications Matrix</span>
                </span>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-left text-xs">
                    <tbody className="divide-y divide-slate-100">
                      {selectedModalModel.specsTable.map((spec) => (
                        <tr key={spec.label} className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-500 bg-slate-50/70 w-1/3">
                            {spec.label}
                          </td>
                          <td className="p-3 font-bold text-navy">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Suitable Media & Target Industries */}
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-bold text-navy block mb-1">Suitable Process Media:</span>
                  <span className="text-slate-600">{selectedModalModel.suitableMedia.join(', ')}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-bold text-navy block mb-1">Target Operating Industries:</span>
                  <span className="text-slate-600">{selectedModalModel.industries.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <div className="text-xs text-slate-500 hidden sm:block">
                All models available with custom metallurgical trims and pneumatic accessories.
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setSelectedModalModel(null)}
                  className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href={`/contact?product=ButterflyValves&model=${encodeURIComponent(selectedModalModel.name)}`}
                  className="px-5 py-2 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Request Quote for this Model</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
