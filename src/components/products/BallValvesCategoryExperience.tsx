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

export type BallValveFilter =
  | 'all'
  | 'manual'
  | 'pneumatic'
  | 'multi-port'
  | 'flanged'
  | 'screwed'
  | 'lined'
  | 'sanitary'
  | 'cryogenic';

export interface ValveBridgeBallValveProduct {
  id: string;
  typeNumber: number;
  name: string;
  category: 'manual' | 'pneumatic';
  subCategory: 'multi-port' | 'flanged' | 'screwed' | 'lined' | 'sanitary' | 'cryogenic';
  categoryLabel: string;
  tagline: string;
  image: string;
  sourceUrl: string;
  operationType: 'Manual Lever' | 'Pneumatic Actuated';
  mechanism: string;
  sizeRange: string;
  pressureClass: string;
  bodyMaterial: string;
  seatMaterial: string;
  tempRange: string;
  endConnections: string;
  designStandard: string;
  testingStandard: string;
  fireSafe: string;
  overview: string;
  highlights: string[];
  keyBenefits: string[];
  specsTable: { label: string; value: string }[];
  suitableMedia: string[];
  industries: string[];
}

export const ballValvesCatalog: ValveBridgeBallValveProduct[] = [
  {
    id: 'manual-3-way-flanged-ball-valve',
    typeNumber: 1,
    name: 'Manual 3 Way Flanged Ball Valve',
    category: 'manual',
    subCategory: 'multi-port',
    categoryLabel: 'Manual Multi-Port (Flanged)',
    tagline: 'Industrial 3-way flanged multi-port ball valve with manual lever for fluid diverting, mixing, and circuit switching',
    image: '/assets/products/alis-ball-valves/ball-valve-1-manual-3-way-flanged-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/manual-3-way-flanged-ball-valve/',
    operationType: 'Manual Lever',
    mechanism: '3-Way Multi-Port (L-Port Diverting / T-Port Mixing & Distribution)',
    sizeRange: '1/2" to 6" (DN15 – DN150)',
    pressureClass: 'ASME Class 150, Class 300 / DIN PN16, PN40',
    bodyMaterial: 'ASTM A351 CF8M (SS316), CF8 (SS304), WCB Cast Steel',
    seatMaterial: 'Virgin PTFE, 15% Glass-Filled RPTFE, PEEK',
    tempRange: '-20°C to +180°C (-4°F to +356°F) Standard / Up to +250°C with PEEK',
    endConnections: 'Flanged ASME B16.5 RF (Raised Face) / EN 1092-1',
    designStandard: 'ASME B16.34 / BS 5351 / API 6D Multi-Port',
    testingStandard: 'API 598 / EN 12266-1 (100% Shell & Seat Tested)',
    fireSafe: 'API 607 / API 6FA Certified Design',
    overview:
      'Valve Bridge is a leading Manual 3 Way Flanged Ball Valve Supplier. This multi-port valve is engineered to divert, mix, or select fluid flow across three pipeline connections using a manual hand lever. Featuring three flanged ports and a specialized L-port or T-port ball configuration, it eliminates the need for multiple isolation valves, pipe tees, and excess fittings. Built with a 4-seated ball cavity design that ensures positive shut-off across all ports, zero cross-leakage, and low operating torque.',
    highlights: [
      'Type 01: Valve Bridge',
      'L-Port & T-Port Flow Paths',
      'ASME B16.5 Flanged Ends',
      'Lockable Safety Hand Lever',
    ],
    keyBenefits: [
      'Piping & Space Optimization: Replaces multiple 2-way valves and tee joints, drastically cutting installation footprint.',
      'L-Port Flow Diverting: Directs media from a common inlet to either of two delivery pipes with a simple 90° lever turn.',
      'T-Port Mixing & Straight-Through: Enables mixing of two incoming fluids or simultaneous distribution across three branch lines.',
      'Blow-Out Proof Stem & Anti-Static: Internal shoulder blowout-proof stem with live-loaded Belleville washers.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Manual 3 Way Flanged Ball Valve' },
      { label: 'Port Configuration', value: 'L-Port (Diverting) or T-Port (Mixing/Distribution)' },
      { label: 'Size Range', value: '1/2" to 6" (DN15 to DN150)' },
      { label: 'Pressure Class', value: 'ASME Class 150, Class 300 / PN16, PN40' },
      { label: 'Body Material (MOC)', value: 'ASTM A351 CF8M (SS316) / CF8 (SS304) / WCB Steel' },
      { label: 'Ball & Stem Material', value: 'Stainless Steel AISI 316 / CF8M (Mirror Polished)' },
      { label: 'Seat Materials', value: 'Virgin PTFE, 15% Glass-Filled RPTFE, PEEK' },
      { label: 'End Connections', value: 'ASME B16.5 Flanged RF (Class 150 / 300) / EN 1092-1' },
      { label: 'Design Standard', value: 'ASME B16.34 / BS 5351 / API 6D' },
      { label: 'Inspection & Testing', value: 'API 598 / EN 12266-1 (100% Tested)' },
      { label: 'Actuator Mounting', value: 'ISO 5211 Direct Top Flange' },
      { label: 'Operation', value: 'Manual Lever with Lockable Latch Device' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Process Chemicals & Solvents', 'Water & Wastewater', 'Steam & Thermal Fluids', 'Petrochemical Hydrocarbons', 'Acids & Alkalis'],
    industries: ['Chemical Plants', 'Water Treatment', 'Petroleum Refineries', 'Pharmaceutical Units', 'Skid Manufacturing'],
  },
  {
    id: 'manual-3-way-screwed-ball-valve',
    typeNumber: 2,
    name: 'Manual 3 Way Screwed Ball Valve',
    category: 'manual',
    subCategory: 'multi-port',
    categoryLabel: 'Manual Multi-Port (Threaded)',
    tagline: 'Compact 3-way threaded multi-port ball valve for fluid switching, bypass loops, and instrument manifolds',
    image: '/assets/products/alis-ball-valves/ball-valve-2-manual-3-way-screwed-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/manual-3-way-screwed-ball-valve/',
    operationType: 'Manual Lever',
    mechanism: '3-Way Screwed Body with L-Port or T-Port Ball Flow Routing',
    sizeRange: '1/4" to 3" (DN8 – DN80)',
    pressureClass: '1000 WOG (69 Bar) / Class 800',
    bodyMaterial: 'Investment Cast CF8M (SS 316), CF8 (SS 304), WCB Steel',
    seatMaterial: 'Reinforced PTFE (RPTFE)',
    tempRange: '-20°C to +180°C (-4°F to +356°F)',
    endConnections: 'Screwed BSP / BSPT / NPT Female Ends',
    designStandard: 'ASME B16.34 / BS 5351 / ISO 5211',
    testingStandard: 'API 598 / EN 12266-1 Hydrostatic & Air Leak Test',
    fireSafe: 'Fire-Safe Compliant Design with Secondary Metal Seating',
    overview:
      'Valve Bridge is a Manual 3 Way Screwed Ball Valve Supplier. Built for compact industrial piping systems, chemical dosing, and skid manifolds, this valve offers 3-way flow direction switching via threaded connections. The investment cast body provides high structural strength and pressure integrity up to 1000 WOG. Equipped with a lockable lever and ISO 5211 mounting pad.',
    highlights: [
      'Type 02: Valve Bridge',
      'Threaded BSP / NPT Ends',
      '1000 WOG High Pressure',
      'L-Port & T-Port Options',
    ],
    keyBenefits: [
      'Compact Threaded Installation: Direct screw-in mounting reduces piping weight and fitting complexity.',
      '1000 WOG Pressure Capability: Handles rigorous industrial pressures and hydraulic surges.',
      'Smooth Lever Action: Precision ground ball and self-lubricating PTFE seats ensure low operational torque.',
      'Locking Handle: Prevents unauthorized handle movement on critical chemical distribution lines.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Manual 3 Way Screwed Ball Valve' },
      { label: 'Port Flow', value: 'L-Port (90° Diverting) / T-Port (Mixing/Straight)' },
      { label: 'Size Range', value: '1/4" to 3" (DN8 to DN80)' },
      { label: 'Pressure Rating', value: '1000 WOG (PN63 / 69 Bar)' },
      { label: 'Body Material', value: 'Investment Cast SS 316 (CF8M) / SS 304 (CF8)' },
      { label: 'Thread Standards', value: 'ASME B1.20.1 NPT / BS 21 BSPT / ISO 7-1 BSP' },
      { label: 'Seat Material', value: 'PTFE / 15% Glass-Filled RPTFE' },
      { label: 'Operation', value: 'Quarter-Turn Lever with Safety Lock' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Compressed Air & Gas', 'Chemical Dosing Lines', 'Cooling Water', 'Lubricants & Fuel Oils', 'Solvents'],
    industries: ['OEM Machinery', 'Chemical Synthesis', 'Water Treatment Skids', 'Compressed Air Systems', 'Manufacturing'],
  },
  {
    id: 'manual-3-pc-flanged-ball-valve',
    typeNumber: 3,
    name: 'Manual 3 Pc Flanged Ball Valve',
    category: 'manual',
    subCategory: 'flanged',
    categoryLabel: 'Manual 3-Piece (Flanged)',
    tagline: 'Heavy-duty 3-piece bolted flanged ball valve with swing-out center section for rapid in-line maintenance',
    image: '/assets/products/alis-ball-valves/ball-valve-3-manual-3-pc-flanged-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/manual-3-pc-flanged-ball-valve/',
    operationType: 'Manual Lever',
    mechanism: '3-Piece Bolted Body with Full Port Floating Ball',
    sizeRange: '1/2" to 8" (DN15 – DN200)',
    pressureClass: 'ASME Class 150, Class 300 / PN16 to PN40',
    bodyMaterial: 'ASTM A216 WCB, ASTM A351 CF8M, CF8, Duplex 2205',
    seatMaterial: 'Virgin PTFE, RPTFE, PEEK',
    tempRange: '-29°C to +200°C (-20°F to +392°F)',
    endConnections: 'Flanged ASME B16.5 RF (Raised Face)',
    designStandard: 'API 608 / ASME B16.34 / BS 5351',
    testingStandard: 'API 598 / ISO 5208 100% Tested',
    fireSafe: 'API 607 7th Edition Fire-Safe Certified',
    overview:
      'Valve Bridge is a leading Manual 3 Pc Flanged Ball Valve Supplier. The three-piece split body design is held together by high-tensile body bolts. During maintenance, removing a bolt allows the center body section containing the ball and seats to swing out cleanly, allowing swift seat replacement without unbolting or re-aligning the companion piping flanges.',
    highlights: [
      'Type 03: Valve Bridge',
      'Swing-Out In-Line Maintenance',
      'Full Bore High Flow Cv',
      'API 607 Fire-Safe Tested',
    ],
    keyBenefits: [
      'In-Line Serviceability: Overhaul seats, ball, and seals on the pipeline without disturbing pipe alignment.',
      'Full Port Construction: Unrestricted flow path eliminates pressure drops and allows pipeline cleaning.',
      'Dual Body Seals: PTFE primary seal with secondary flexible graphite seal guarantees fire-safe reliability.',
      'ISO 5211 Direct Mounting: Top pad allows direct installation of pneumatic or electric actuators.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Manual 3 Pc Flanged Ball Valve' },
      { label: 'Construction', value: '3-Piece Bolted Split Body' },
      { label: 'Size Range', value: '1/2" to 8" (DN15 to DN200)' },
      { label: 'Pressure Class', value: 'ASME Class 150 & 300 / PN16–PN40' },
      { label: 'Body Material', value: 'Cast Steel WCB / Stainless Steel CF8M' },
      { label: 'Stem Design', value: 'Blowout Proof with Anti-Static Grounding' },
      { label: 'Seat Material', value: 'Virgin PTFE, RPTFE, PEEK' },
      { label: 'Testing Code', value: 'API 598 / ISO 5208 Zero Leakage' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Hydrocarbons', 'Steam & Condensate', 'Chemical Lines', 'Water Utilities', 'Process Gas'],
    industries: ['Petrochemical Refineries', 'Chemical Processing', 'Power Plants', 'Pulp & Paper', 'General Manufacturing'],
  },
  {
    id: 'manual-3-pc-screwed-ball-valve',
    typeNumber: 4,
    name: 'Manual 3 PC Screwed Ball Valve',
    category: 'manual',
    subCategory: 'screwed',
    categoryLabel: 'Manual 3-Piece (Threaded)',
    tagline: 'High-pressure 1000 WOG 3-piece threaded ball valve with swing-away body for quick seal overhaul',
    image: '/assets/products/alis-ball-valves/ball-valve-4-manual-3-pc-screwed-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/manual-3-pc-screwed-ball-valve/',
    operationType: 'Manual Lever',
    mechanism: '3-Piece Full Port Bolted Body (Swing-Away Design)',
    sizeRange: '1/4" to 4" (DN8 – DN100)',
    pressureClass: '1000 WOG / 2000 WOG (PN63 / PN140)',
    bodyMaterial: 'Investment Cast CF8M (316 SS), CF8 (304 SS), WCB Steel',
    seatMaterial: 'Virgin PTFE, 15% Glass-Filled RPTFE, PEEK',
    tempRange: '-20°C to +200°C (-4°F to +392°F)',
    endConnections: 'Screwed NPT / BSP / Socket Weld (SW) / Butt Weld (BW)',
    designStandard: 'ASME B16.34 / BS 5351 / MSS SP-110',
    testingStandard: 'API 598 100% Tested',
    fireSafe: 'Fire-Safe Design Option Available',
    overview:
      'Valve Bridge is a trusted Manual 3 PC Screwed Ball Valve Supplier. Features a precision investment-cast three-piece body that enables full swing-away disassembly directly in the line. Designed for high-pressure plant utility, steam, and chemical isolation up to 1000 WOG / 2000 WOG.',
    highlights: [
      'Type 04: Valve Bridge',
      '1000 WOG / 2000 WOG Rated',
      'Swing-Away Center Section',
      'ISO 5211 Actuator Pad',
    ],
    keyBenefits: [
      'High-Pressure Rating: Robust wall thickness resists thermal shocks, pressure surges, and pipe vibration.',
      'Swing-Away Body: Fast seat inspection without unscrewing pipe ends from threaded or welded lines.',
      'Live-Loaded Stem Packing: Belleville spring washers automatically compensate for thermal cycling and wear.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Manual 3 PC Screwed Ball Valve' },
      { label: 'Pressure Rating', value: '1000 WOG (PN63) / Optional 2000 WOG' },
      { label: 'Size Range', value: '1/4" to 4" (DN8 to DN100)' },
      { label: 'End Connections', value: 'NPT / BSPT / BSP / Socket Weld' },
      { label: 'Body Material', value: 'Investment Cast SS316 / SS304 / WCB' },
      { label: 'Ball & Stem', value: 'Stainless Steel AISI 316 (CF8M)' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Industrial Steam', 'Chemical Solutions', 'Hydraulic Oils', 'Compressed Air', 'Cooling Water'],
    industries: ['Chemical Plants', 'Pharmaceutical Lines', 'Boiler Utilities', 'Food & Dairy', 'Hydraulic Systems'],
  },
  {
    id: 'manual-ptfe-pfa-fep-lined-ball-valve',
    typeNumber: 5,
    name: 'Manual PTFE/PFA/FEP Lined Ball Valve',
    category: 'manual',
    subCategory: 'lined',
    categoryLabel: 'Manual Fluoropolymer Lined',
    tagline: 'Seamless virgin PFA/FEP lined ball valve providing 100% corrosion immunity to concentrated acids and alkalis',
    image: '/assets/products/alis-ball-valves/ball-valve-5-manual-ptfe-pfa-fep-lined-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/manual-ptfe-pfa-fep-lined-ball-valve/',
    operationType: 'Manual Lever',
    mechanism: 'Seamless PFA/FEP Locked Dovetail Lining with Integral Ball-Stem',
    sizeRange: '1/2" to 8" (DN15 – DN200)',
    pressureClass: 'ASME Class 150 / DIN PN10, PN16',
    bodyMaterial: 'Ductile Iron GGG40.3 / WCB Carbon Steel lined with Virgin PFA / FEP',
    seatMaterial: 'Virgin PTFE / Chemically Inert PFA',
    tempRange: '-30°C to +200°C (-22°F to +392°F)',
    endConnections: 'Flanged ASME B16.5 RF / EN 1092-1 PN16',
    designStandard: 'ISO 5752 / ASME B16.42 / EN 558 Series 1',
    testingStandard: '20kV High Voltage Spark Testing + API 598 Hydro Test',
    fireSafe: 'Chemical Safety Design',
    overview:
      'Valve Bridge is a leading Manual PTFE PFA FEP Lined Ball Valve Supplier. For aggressive media such as concentrated hydrochloric, sulfuric, and hydrofluoric acids where stainless steel and exotic nickel alloys fail, this valve provides an impenetrable barrier. The high-density virgin PFA lining (3mm to 5mm thick) is locked into dovetail anchor grooves, preventing liner collapse under full vacuum distillation.',
    highlights: [
      'Type 05: Valve Bridge',
      'Virgin PFA / FEP Liner',
      '20kV Spark Tested Pin-Hole Free',
      'Full Vacuum Rated Dovetail',
    ],
    keyBenefits: [
      'Total Chemical Immunity: Resists hot sulfuric acid, chlorine gas, aqua regia, and caustic soda.',
      'Full Vacuum Stability: Dovetail anchoring prevents liner detachment under high vacuum service.',
      'Integral Ball-Stem: Eliminates mechanical hysteresis and dead-space play between stem and ball.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Manual PTFE/PFA/FEP Lined Ball Valve' },
      { label: 'Liner Material', value: 'Virgin PFA / FEP / PTFE (3.0–5.0 mm thick)' },
      { label: 'Body Metal', value: 'Ductile Iron GGG40.3 / WCB Steel' },
      { label: 'Spark Test Voltage', value: '100% Tested at 20,000 Volts (20 kV)' },
      { label: 'Pressure Class', value: 'ASME Class 150 / PN16' },
      { label: 'Size Range', value: '1/2" to 8" (DN15 to DN200)' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Concentrated Sulfuric Acid', 'Hydrochloric Acid (HCl)', 'Hydrofluoric Acid', 'Wet Chlorine', 'Nitric Acid'],
    industries: ['Chlor-Alkali Plants', 'Specialty Chemicals', 'Steel Pickling', 'Pesticide & Fertilizer', 'Mining Leaching'],
  },
  {
    id: 'pneumatic-2-piece-flanged-ball-valve',
    typeNumber: 6,
    name: 'Pneumatic 2 Piece Flanged Ball Valve',
    category: 'pneumatic',
    subCategory: 'flanged',
    categoryLabel: 'Pneumatic 2-Piece (Flanged)',
    tagline: 'Automated 2-piece split body flanged ball valve with high-cycle pneumatic rack & pinion actuator',
    image: '/assets/products/alis-ball-valves/ball-valve-6-pneumatic-2-piece-flanged-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-2-piece-flanged-ball-valve/',
    operationType: 'Pneumatic Actuated',
    mechanism: 'Pneumatic Dual-Piston Rack & Pinion Actuator on 2-Piece Flanged Ball Valve',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'ASME Class 150, Class 300 / DIN PN16 to PN40',
    bodyMaterial: 'ASTM A216 WCB Cast Steel, ASTM A351 CF8M Stainless Steel',
    seatMaterial: 'Virgin PTFE, RPTFE, PEEK',
    tempRange: '-29°C to +200°C (-20°F to +392°F)',
    endConnections: 'Flanged ASME B16.5 RF (Raised Face)',
    designStandard: 'API 608 / ASME B16.34 / ISO 5211',
    testingStandard: 'API 598 / ISO 5208 Zero Leakage Rate A',
    fireSafe: 'API 607 / API 6FA Certified',
    overview:
      'Valve Bridge is a leading Pneumatic 2 Piece Flanged Ball Valve Supplier. This automated package pairs a rugged two-piece split body flanged ball valve with a hard-anodized aluminum dual-piston pneumatic actuator. Ideal for high-cycle plant automation, emergency shutdown (ESD), and process on-off control. Comes ready with NAMUR solenoid interfaces and limit switch box.',
    highlights: [
      'Type 06: Valve Bridge',
      'Rack & Pinion Actuation',
      'Double Acting & Spring Return',
      'API 607 Fire-Safe Tested',
    ],
    keyBenefits: [
      'Rapid Quarter-Turn Cycling: Sub-second opening and closing speeds for fast emergency process isolation.',
      'Fail-Safe Spring Return: Automatically returns valve to fail-closed (FC) or fail-open (FO) on air failure.',
      'ISO 5211 Direct Coupling: Mounts without external brackets, eliminating stem side-load and hysteresis.',
      'NAMUR Standard Interfaces: Directly bolts to 3/2 or 5/2 way solenoid valves and limit switch boxes.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Pneumatic 2 Piece Flanged Ball Valve' },
      { label: 'Actuator Type', value: 'Pneumatic Rack & Pinion (Hard Anodized Aluminum)' },
      { label: 'Air Supply Pressure', value: '3.0 to 8.0 Bar (Air / Inert Gas)' },
      { label: 'Action Mode', value: 'Double Acting (DA) / Single Acting Spring Return (SR)' },
      { label: 'Size Range', value: '1/2" to 12" (DN15 to DN300)' },
      { label: 'Pressure Class', value: 'ASME Class 150 & 300 / PN16–PN40' },
      { label: 'Body Material', value: 'WCB Carbon Steel / CF8M Stainless Steel' },
      { label: 'Accessories', value: 'Solenoid Valve, Limit Switch Box, Filter Regulator' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Hydrocarbon Gases', 'Chemical Feeds', 'Cooling Water', 'Industrial Steam', 'Compressed Air'],
    industries: ['Oil & Gas', 'Chemical Manufacturing', 'Refineries', 'Water Treatment', 'Automated Tank Farms'],
  },
  {
    id: 'pneumatic-3-piece-flanged-ball-valve',
    typeNumber: 7,
    name: 'Pneumatic 3 Piece Flanged Ball Valve',
    category: 'pneumatic',
    subCategory: 'flanged',
    categoryLabel: 'Pneumatic 3-Piece (Flanged)',
    tagline: 'Automated 3-piece bolted flanged ball valve with swing-out center section and pneumatic automation package',
    image: '/assets/products/alis-ball-valves/ball-valve-7-pneumatic-3-piece-flanged-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-3-piece-flanged-ball-valve/',
    operationType: 'Pneumatic Actuated',
    mechanism: 'Automated 3-Piece Bolted Body with Direct Mount Rotary Pneumatic Actuator',
    sizeRange: '1/2" to 8" (DN15 – DN200)',
    pressureClass: 'ASME Class 150, Class 300 / PN16 to PN40',
    bodyMaterial: 'ASTM A216 WCB, ASTM A351 CF8M, CF8, Duplex SS',
    seatMaterial: 'Virgin PTFE, 15% Glass-Filled RPTFE, PEEK',
    tempRange: '-29°C to +200°C (-20°F to +392°F)',
    endConnections: 'Flanged ASME B16.5 RF (Raised Face)',
    designStandard: 'API 608 / ASME B16.34 / ISO 5211',
    testingStandard: 'API 598 / ISO 5208 100% Tested',
    fireSafe: 'API 607 7th Edition Fire-Safe Certified',
    overview:
      'Valve Bridge is a Pneumatic 3 Piece Flanged Ball Valve Supplier. Combines the full swing-out in-line serviceability of a 3-piece body with high-reliability pneumatic actuation. Allows fast internal overhaul while maintaining full automated supervisory control in hazardous and continuous process pipelines.',
    highlights: [
      'Type 07: Valve Bridge',
      'Swing-Out Serviceability',
      'Pneumatic High-Torque Drive',
      'Fire-Safe Dual Sealing',
    ],
    keyBenefits: [
      'Effortless On-Site Overhaul: Swing-out center section allows seat changes without disconnecting flanges.',
      'High-Cycle Longevity: Hard-anodized cylinder and dual O-ring stem seals exceed 1 million operational cycles.',
      'Emergency Fail-Safe Protection: Heavy-duty spring cartridges guarantee rapid closure during plant power outages.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Pneumatic 3 Piece Flanged Ball Valve' },
      { label: 'Body Style', value: '3-Piece Bolted Split Body' },
      { label: 'Actuator', value: 'Pneumatic Rotary Dual Piston' },
      { label: 'Size Range', value: '1/2" to 8" (DN15 to DN200)' },
      { label: 'Pressure Class', value: 'ASME Class 150 / 300' },
      { label: 'Testing Standard', value: 'API 598 Zero Leakage' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Petrochemicals', 'Solvents & Hydrocarbons', 'Industrial Gases', 'Steam & Condensate', 'Water'],
    industries: ['Petroleum Refineries', 'Chemical Processing', 'Power Generation', 'Process Utilities', 'Skid Systems'],
  },
  {
    id: 'pneumatic-3-pc-screwed-ball-valve',
    typeNumber: 8,
    name: 'Pneumatic 3 PC Screwed Ball Valve',
    category: 'pneumatic',
    subCategory: 'screwed',
    categoryLabel: 'Pneumatic 3-Piece (Threaded)',
    tagline: 'Automated 1000 WOG 3-piece threaded ball valve package for automated skids and process pipelines',
    image: '/assets/products/alis-ball-valves/ball-valve-8-pneumatic-3-pc-screwed-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-3-pc-screwed-ball-valve/',
    operationType: 'Pneumatic Actuated',
    mechanism: 'Pneumatic Actuator Directly Coupled to 3-Piece Screwed Full Bore Valve',
    sizeRange: '1/4" to 4" (DN8 – DN100)',
    pressureClass: '1000 WOG (PN63 / 69 Bar)',
    bodyMaterial: 'Investment Cast SS 316 (CF8M), SS 304 (CF8), WCB Steel',
    seatMaterial: 'Virgin PTFE, RPTFE, PEEK',
    tempRange: '-20°C to +200°C (-4°F to +392°F)',
    endConnections: 'Threaded NPT / BSP / Socket Weld (SW)',
    designStandard: 'ASME B16.34 / BS 5351 / ISO 5211',
    testingStandard: 'API 598 100% Tested',
    fireSafe: 'Fire-Safe Design Option Available',
    overview:
      'Valve Bridge is a leading Pneumatic 3 Piece Threaded Ball Valve Supplier. Engineered for high-speed automated isolation in compact pipe systems, skid assemblies, and processing plants. Features direct-mount ISO 5211 pad, double acting or spring return pneumatic cylinder, and 1000 WOG pressure containment.',
    highlights: [
      'Type 08: Valve Bridge',
      'Threaded & Socket Weld Ends',
      '1000 WOG Pressure Rating',
      'Compact Automated Package',
    ],
    keyBenefits: [
      'Compact Automation Footprint: Ideal for tightly spaced piping on modular process skids and test rigs.',
      'High-Speed Operation: Actuates in 0.5 to 1.5 seconds for instant line shut-off and safety trips.',
      'Direct ISO 5211 Mount: No external mounting bracket eliminates backlash and ensures accurate alignment.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Pneumatic 3 PC Screwed Ball Valve' },
      { label: 'Pressure Rating', value: '1000 WOG (PN63 / 69 Bar)' },
      { label: 'Size Range', value: '1/4" to 4" (DN8 to DN100)' },
      { label: 'Actuator Supply', value: 'Air / Gas 3.0 to 8.0 Bar' },
      { label: 'Body Material', value: 'Investment Cast SS316 / SS304 / WCB' },
      { label: 'End Connections', value: 'NPT / BSP Female Threads / Socket Weld' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Air & Technical Gases', 'Hydraulic Oils', 'Chemical Reagents', 'Industrial Water', 'Steam'],
    industries: ['Modular Skid Builders', 'Chemical Dosing', 'Pharmaceutical Utilities', 'Factory Automation', 'Textile'],
  },
  {
    id: 'pneumatic-3-way-flanged-ball-valve',
    typeNumber: 9,
    name: 'Pneumatic 3 Way Flanged Ball Valve',
    category: 'pneumatic',
    subCategory: 'multi-port',
    categoryLabel: 'Pneumatic Multi-Port (Flanged)',
    tagline: 'Automated 3-way flanged multi-port ball valve with pneumatic actuator for automated flow diverting & mixing',
    image: '/assets/products/alis-ball-valves/ball-valve-9-pneumatic-3-way-flanged-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-3-way-flanged-ball-valve/',
    operationType: 'Pneumatic Actuated',
    mechanism: 'Pneumatic Rotary Actuator Driving 3-Way L-Port or T-Port Ball Mechanism',
    sizeRange: '1/2" to 8" (DN15 – DN200)',
    pressureClass: 'ASME Class 150, Class 300 / DIN PN16, PN40',
    bodyMaterial: 'ASTM A351 CF8M (SS316), CF8 (SS304), WCB Cast Steel',
    seatMaterial: 'Virgin PTFE, 15% Glass-Filled RPTFE, PEEK',
    tempRange: '-20°C to +180°C (-4°F to +356°F) Standard / Up to +250°C with PEEK',
    endConnections: 'Flanged ASME B16.5 RF (Raised Face) / EN 1092-1',
    designStandard: 'ASME B16.34 / BS 5351 / API 6D',
    testingStandard: 'API 598 / EN 12266-1 (100% Tested)',
    fireSafe: 'API 607 / API 6FA Certified Design',
    overview:
      'Valve Bridge is a leading Pneumatic 3 Way Flanged Ball Valve Supplier. Delivers automated multi-directional fluid routing for blending tanks, heat exchanger bypass loops, and dual delivery pipelines. Equipped with an ISO 5211 direct-mounted pneumatic actuator that executes precision 90° or 180° rotation on demand via digital 4-20mA positioner or solenoid signal.',
    highlights: [
      'Type 09: Valve Bridge',
      'Automated Diverting & Mixing',
      'L-Port & T-Port Geometries',
      'ASME B16.5 Flanged Ends',
    ],
    keyBenefits: [
      'Automated Process Routing: Replaces complex multi-valve automation loops with a single actuated multi-port package.',
      'Balanced 4-Seat Sealing: Guarantees zero cross-leakage between ports during active switching cycles.',
      'Modulating Capability: Optional electro-pneumatic positioner allows proportional flow mixing between pipelines.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Pneumatic 3 Way Flanged Ball Valve' },
      { label: 'Flow Geometry', value: 'L-Port (Diverting) or T-Port (Mixing/Straight)' },
      { label: 'Size Range', value: '1/2" to 8" (DN15 to DN200)' },
      { label: 'Pressure Class', value: 'ASME Class 150, Class 300 / PN16, PN40' },
      { label: 'Actuation', value: 'Pneumatic Rack & Pinion / Scotch Yoke' },
      { label: 'Body Material', value: 'CF8M Stainless Steel / WCB Cast Steel' },
      { label: 'End Connections', value: 'ASME B16.5 Flanged RF' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Solvents & Chemicals', 'Hydrocarbons', 'Cooling Water Loops', 'Steam Bypass', 'Petrochemicals'],
    industries: ['Chemical Plants', 'Refineries & Tank Farms', 'Water Utilities', 'District Heating', 'Manufacturing'],
  },
  {
    id: 'pneumatic-3-way-tc-end-ball-valve',
    typeNumber: 10,
    name: 'Pneumatic 3 Way TC End Ball Valve',
    category: 'pneumatic',
    subCategory: 'sanitary',
    categoryLabel: 'Pneumatic Sanitary Tri-Clamp (3-Way)',
    tagline: 'Mirror-polished sanitary 316L stainless steel 3-way ball valve with cavity-filled seats for food & biopharma',
    image: '/assets/products/alis-ball-valves/ball-valve-10-pneumatic-3-way-tc-end-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-3-way-tc-end-ball-valve/',
    operationType: 'Pneumatic Actuated',
    mechanism: 'Sanitary 3-Way Tri-Clamp Multi-Port with Cavity Filler Seats & Pneumatic Actuator',
    sizeRange: '1/2" to 4" (DN15 – DN100 / OD Tube Sizes)',
    pressureClass: '1000 WOG / 10 to 16 Bar',
    bodyMaterial: 'Forged / Cast ASTM A351 CF3M (AISI 316L Stainless Steel)',
    seatMaterial: 'FDA Approved Pure Virgin PTFE / Cavity Filled TFM-1600',
    tempRange: '-20°C to +150°C (Steam CIP/SIP at 135°C for 30 min)',
    endConnections: 'Tri-Clamp (TC) Quick Release Ferrule Ends',
    designStandard: '3-A Sanitary Standards / ASME BPE / DIN 11850',
    testingStandard: '100% Surface Roughness & Hydrostatic Testing',
    fireSafe: 'Sanitary Cleanroom Certified Design',
    overview:
      'Valve Bridge is a trusted Pneumatic 3 Way TC End Ball Valve Supplier. Engineered specifically for food, beverage, brewery, and pharmaceutical processing where bacterial entrapment cannot be tolerated. The interior wetted surfaces are mirror electropolished to Ra < 0.4µm, and the seats feature full cavity filler geometries that eliminate stagnant liquid dead-legs. Directly actuated by a pneumatic cylinder for automated batch routing.',
    highlights: [
      'Type 10: Valve Bridge',
      'Sanitary Tri-Clamp Connections',
      'Cavity-Filled Zero Dead Space',
      'Ra < 0.4µm Mirror Electropolish',
    ],
    keyBenefits: [
      'Zero Bacterial Pockets: Full cavity filler envelops the ball, preventing fluid entrapment and stagnation.',
      'CIP / SIP Rated: Fully rated for Clean-in-Place automated washing and high-temperature steam sterilization.',
      'Quick Tri-Clamp Clamping: Fast pipeline disassembly without hand tools for visual hygiene inspection.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Pneumatic 3 Way TC End Ball Valve' },
      { label: 'Surface Roughness', value: 'Ra < 0.4 µm (15 µin) Mirror Electropolished' },
      { label: 'Seating Design', value: 'Full Cavity Filler TFM-1600 (Zero Dead Leg)' },
      { label: 'Size Range', value: '1/2" to 4" (DN15 to DN100)' },
      { label: 'Standards', value: '3-A Sanitary / FDA 21 CFR 177.1550 / ASME BPE' },
      { label: 'Body Material', value: 'AISI 316L Stainless Steel (CF3M)' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Purified Water (WFI)', 'Beer & Soft Drinks', 'Dairy Products', 'Pharma Vaccines & Syrups', 'Cosmetics'],
    industries: ['Pharmaceutical Bioprocessing', 'Breweries & Beverage', 'Dairy Plants', 'Food Processing', 'Biotechnology'],
  },
  {
    id: 'pneumatic-3-way-screwed-end-ball-valve',
    typeNumber: 11,
    name: 'Pneumatic 3 Way Screwed End Ball Valve',
    category: 'pneumatic',
    subCategory: 'screwed',
    categoryLabel: 'Pneumatic Multi-Port (Threaded)',
    tagline: 'Automated 3-way threaded multi-port ball valve for compact routing in chemical skids and test equipment',
    image: '/assets/products/alis-ball-valves/ball-valve-11-pneumatic-3-way-screwed-end-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/3-way-screwed-end-pneumatic-ball-valve/',
    operationType: 'Pneumatic Actuated',
    mechanism: 'Pneumatic Actuator Directly Coupled to 3-Way Screwed Body',
    sizeRange: '1/4" to 3" (DN8 – DN80)',
    pressureClass: '1000 WOG (69 Bar)',
    bodyMaterial: 'Investment Cast CF8M (316 SS), CF8 (304 SS)',
    seatMaterial: 'Reinforced PTFE (RPTFE)',
    tempRange: '-20°C to +180°C (-4°F to +356°F)',
    endConnections: 'Threaded NPT / BSP Female Ends',
    designStandard: 'ASME B16.34 / BS 5351 / ISO 5211',
    testingStandard: 'API 598 / EN 12266-1 Hydrostatic & Air Test',
    fireSafe: 'Fire-Safe Compliant Design',
    overview:
      'Valve Bridge is a Pneumatic 3 Way Screwed End Ball Valve Supplier. This automated package combines an investment cast 3-way threaded ball valve with an aluminum pneumatic actuator for fast, automated fluid switching. Features L-port or T-port internal ball design and robust 1000 WOG pressure containment.',
    highlights: [
      'Type 11: Valve Bridge',
      'Threaded NPT / BSP Ends',
      '1000 WOG High Pressure',
      'Automated L/T Port Switching',
    ],
    keyBenefits: [
      'Compact Automated Footprint: Perfect for tightly packaged OEM skids, testing rigs, and utility lines.',
      'High-Speed Switching: Actuator shifts flow in milliseconds for precision dosing and safety relief.',
      'Low Maintenance: Stainless steel internals and self-compensating stem packing ensure long service life.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Pneumatic 3 Way Screwed End Ball Valve' },
      { label: 'Port Flow', value: 'L-Port (Diverting) or T-Port (Mixing/Straight)' },
      { label: 'Size Range', value: '1/4" to 3" (DN8 to DN80)' },
      { label: 'Pressure Rating', value: '1000 WOG (69 Bar)' },
      { label: 'Body Material', value: 'SS 316 (CF8M) / SS 304 (CF8)' },
      { label: 'End Connections', value: 'NPT / BSP Female Threads' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Air & Gases', 'Chemical Dosing Streams', 'Cooling Loops', 'Fuel Oil', 'Water'],
    industries: ['OEM Equipment', 'Chemical Synthesis', 'Water Treatment Skids', 'Laboratories', 'Factory Automation'],
  },
  {
    id: 'pneumatic-cryogenic-ball-valve',
    typeNumber: 12,
    name: 'Pneumatic Cryogenic Ball Valve',
    category: 'pneumatic',
    subCategory: 'cryogenic',
    categoryLabel: 'Pneumatic Cryogenic LNG (-196°C)',
    tagline: 'Automated extended bonnet ball valve for liquefied natural gas (LNG), liquid nitrogen, and liquid oxygen down to -196°C',
    image: '/assets/products/alis-ball-valves/ball-valve-12-pneumatic-cryogenic-ball-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-actuated-cryogenic-ball-valve/',
    operationType: 'Pneumatic Actuated',
    mechanism: 'Pneumatic Actuator on BS 6364 Extended Vapor Bonnet with Cavity Pressure Relief Ball',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'ASME Class 150, Class 300, Class 600 / PN16 to PN100',
    bodyMaterial: 'ASTM A351 CF8M (316 SS), CF3M (316L SS) Austenitic Stainless Steel',
    seatMaterial: 'Modified PCTFE (Kel-F), Virgin TFM 1600, Devlon',
    tempRange: '-196°C to +120°C (-320°F to +248°F)',
    endConnections: 'Flanged ASME B16.5 RF / Butt Weld with Extended Nipples',
    designStandard: 'BS 6364 / ASME B16.34 / API 6D',
    testingStandard: 'BS 6364 Cryogenic Helium Leak Testing at -196°C',
    fireSafe: 'API 607 Certified Fire Safe',
    overview:
      'Valve Bridge is a leading Pneumatic Cryogenic Ball Valve Supplier. Engineered for automated emergency shut-off and control on deep cryogenic fluids including LNG, liquid oxygen, liquid argon, and liquid nitrogen. Features an engineered extended bonnet that maintains a gaseous vapor column isolating stem packing from sub-zero fluid. An internal cavity relief hole prevents explosive overpressurization from trapped boiling liquid.',
    highlights: [
      'Type 12: Valve Bridge',
      'Down to -196°C Liquid Temp',
      'BS 6364 Extended Vapor Column',
      'Cavity Auto-Pressure Relief Ball',
    ],
    keyBenefits: [
      'Stem Packing Freeze Protection: Tall bonnet column creates insulating vapor pocket keeping stem seals resilient.',
      'Explosive Cavity Overpressure Protection: Drilled upstream vent releases vaporizing cryogenic gas safely.',
      '100% Cryogenic Testing: Every unit is immersed in liquid nitrogen at -196°C and helium leak tested.',
    ],
    specsTable: [
      { label: 'Model Name', value: 'Pneumatic Cryogenic Ball Valve' },
      { label: 'Minimum Temp', value: '-196°C (-320°F)' },
      { label: 'Design Code', value: 'BS 6364 / ASME B16.34' },
      { label: 'Bonnet Style', value: 'Calculated BS 6364 Gas Extension Column' },
      { label: 'Body Material', value: 'ASTM A351 CF8M / CF3M (316 / 316L SS)' },
      { label: 'Seat Material', value: 'Modified PCTFE (Kel-F) / TFM-1600' },
      { label: 'Pressure Class', value: 'Class 150, 300, 600' },
      { label: 'Testing Standard', value: 'BS 6364 Cryogenic Helium Tested at -196°C' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Liquefied Natural Gas (LNG)', 'Liquid Nitrogen (LN2)', 'Liquid Oxygen (LOX)', 'Liquid Ethylene', 'Liquid Argon'],
    industries: ['LNG Receiving Terminals', 'Cryogenic Air Separation Plants', 'Aerospace Fueling', 'Gas Liquefaction Trains', 'Refrigeration'],
  },
];

export default function BallValvesCategoryExperience({ product, initialModelId }: Props) {
  const [activeFilter, setActiveFilter] = useState<BallValveFilter>('all');
  const [selectedModalModel, setSelectedModalModel] = useState<ValveBridgeBallValveProduct | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (initialModelId) {
      const match = ballValvesCatalog.find((m) => m.id === initialModelId);
      if (match) {
        setSelectedModalModel(match);
      }
    }
  }, [initialModelId]);

  const filteredModels = ballValvesCatalog.filter((m) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'manual') return m.category === 'manual';
    if (activeFilter === 'pneumatic') return m.category === 'pneumatic';
    if (activeFilter === 'multi-port') return m.subCategory === 'multi-port';
    if (activeFilter === 'flanged') return m.subCategory === 'flanged';
    if (activeFilter === 'screwed') return m.subCategory === 'screwed';
    if (activeFilter === 'lined') return m.subCategory === 'lined';
    if (activeFilter === 'sanitary') return m.subCategory === 'sanitary';
    if (activeFilter === 'cryogenic') return m.subCategory === 'cryogenic';
    return true;
  });

  const filterTabs: { id: BallValveFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All 12 Ball Valves', count: ballValvesCatalog.length },
    { id: 'manual', label: 'Manual Ball Valves', count: ballValvesCatalog.filter((m) => m.category === 'manual').length },
    { id: 'pneumatic', label: 'Pneumatic Actuated', count: ballValvesCatalog.filter((m) => m.category === 'pneumatic').length },
    { id: 'multi-port', label: '3-Way Multi-Port', count: ballValvesCatalog.filter((m) => m.subCategory === 'multi-port').length },
    { id: 'flanged', label: 'Flanged Body', count: ballValvesCatalog.filter((m) => m.subCategory === 'flanged').length },
    { id: 'screwed', label: 'Screwed / Threaded', count: ballValvesCatalog.filter((m) => m.subCategory === 'screwed').length },
    { id: 'lined', label: 'PTFE/PFA Lined', count: ballValvesCatalog.filter((m) => m.subCategory === 'lined').length },
    { id: 'sanitary', label: 'Sanitary Tri-Clamp', count: ballValvesCatalog.filter((m) => m.subCategory === 'sanitary').length },
    { id: 'cryogenic', label: 'Cryogenic LNG', count: ballValvesCatalog.filter((m) => m.subCategory === 'cryogenic').length },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumbs Strip */}
      <div className="border-b border-slate-200/80 bg-slate-50/70 py-3">
        <div className="container-px mx-auto max-w-7xl flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-teal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <Link href="/products" className="hover:text-teal transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-navy font-semibold">Ball Valves</span>
        </div>
      </div>

      {/* 2. Category Hero Banner (Reference: alisvalves.com/product-category/ball-valves/) */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white py-12 lg:py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span>VALVE BRIDGE INDUSTRIAL PORTFOLIO • SOURCING & AUTOMATION</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy">
                  Ball Valves
                </h1>
                <p className="mt-2 text-base sm:text-lg font-medium text-teal">
                  Smooth operation, dependable shut-off, and zero-leakage isolation across industrial processes
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  Designed around your process needs, our Ball Valves deliver smooth operation, reliable shut-off, and the confidence you need for every flow application. From manual flanged &amp; screwed multi-port valves to high-cycle pneumatic automated ball valves, PTFE/PFA lined corrosion-proof designs, and deep cryogenic LNG service.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Size Range</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">1/4&quot; to 12&quot; (DN300)</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pressure Range</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">Class 150–600 / 1000 WOG</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Standards</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-0.5">API 6D • API 608 • 607</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Testing</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">100% Pre-Shipment</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#ballvalve-catalog"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy hover:bg-slate-800 text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-xs"
                >
                  <Layers className="w-4 h-4 text-amber" />
                  <span>Browse 12 Valve Bridge Ball Valve Models</span>
                </a>
                <Link
                  href="/contact?product=BallValves"
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
                  src="/assets/products/alis-ball-valves/ball-valve-1-manual-3-way-flanged-ball-valve.png"
                  alt="Valve Bridge Ball Valve"
                  className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-md"
                />
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-navy">Manual &amp; Pneumatic Ball Valves</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Direct mill pricing with 100% pre-shipment hydro testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section id="ballvalve-catalog" className="sticky top-20 lg:top-24 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs py-3.5">
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

      {/* 4. Products Catalog Grid (Exact pneumatic actuator card layout) */}
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
                    className="absolute inset-0 bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
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
                        <span className="font-semibold text-slate-800 truncate max-w-[150px]">{model.bodyMaterial}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-500">
                        <span className="font-medium">Seat / Seal:</span>
                        <span className="font-bold text-emerald-600 truncate max-w-[150px]">{model.seatMaterial}</span>
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
                      className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 hover:border-navy bg-white hover:bg-slate-50 text-navy text-xs font-bold text-center transition-colors shadow-2xs flex items-center justify-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5 text-teal" />
                      <span>Specifications</span>
                    </button>

                    <Link
                      href={`/contact?product=BallValves&model=${encodeURIComponent(model.name)}`}
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
              Engineering Selection Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Valve Bridge Ball Valves Technical Comparison Table
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Compare key engineering parameters across all 12 Valve Bridge ball valve models to select the optimal valve for your piping application.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0B1F3A] text-white">
                <tr>
                  <th className="p-4 font-bold uppercase tracking-wider">Ball Valve Model</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Operation</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Pressure Rating</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Size Range</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Temperature Range</th>
                  <th className="p-4 font-bold uppercase tracking-wider">End Connection</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Key Media Fit</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {ballValvesCatalog.map((model) => (
                  <tr key={model.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-bold text-navy flex items-center gap-2">
                      <img src={model.image} alt="" className="w-8 h-8 object-contain shrink-0" />
                      <span>{model.name}</span>
                    </td>
                    <td className="p-4 text-slate-600 font-medium">{model.operationType}</td>
                    <td className="p-4 font-bold text-navy">{model.pressureClass}</td>
                    <td className="p-4 text-slate-700">{model.sizeRange}</td>
                    <td className="p-4 text-slate-600">{model.tempRange}</td>
                    <td className="p-4 font-semibold text-emerald-600">{model.endConnections}</td>
                    <td className="p-4 text-slate-600 max-w-[200px] truncate" title={model.suitableMedia.join(', ')}>
                      {model.suitableMedia.join(', ')}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => setSelectedModalModel(model)}
                        className="px-3 py-1.5 rounded bg-slate-100 hover:bg-navy hover:text-white text-navy font-bold text-[11px] transition-colors"
                      >
                        View Specs
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Ball Valve Sizing & Engineering Calculation Guide */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Engineering Sizing Criteria
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              How to Select &amp; Size Ball Valves
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Proper ball valve design selection prevents cavity overpressure, seat degradation, and ensures long-term bubble-tight isolation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal font-bold text-base">
                1
              </div>
              <h3 className="text-base font-bold text-navy">Manual vs. Pneumatic Automation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose based on cycling frequency, safety interlocks, and pipeline accessibility:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>Manual Lockable Lever: Infrequent utility line isolation and manual manifolds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>Pneumatic Rack &amp; Pinion: High-cycle automated batching, ESD trips, remote PLC control</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>Spring Return (Single Acting): Failsafe closure during air or electrical power failure</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center text-amber font-bold text-base">
                2
              </div>
              <h3 className="text-base font-bold text-navy">Flow Geometry: 2-Way vs. 3-Way</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Select port geometry depending on whether your process requires simple on-off or stream distribution:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                  <span>2-Way (2-Pc / 3-Pc): Straight-through flow with zero pressure restriction</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                  <span>3-Way L-Port: Diverts common flow between two alternate delivery routes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                  <span>3-Way T-Port: Mixes two fluids or distributes one flow across two lines simultaneously</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center text-navy font-bold text-base">
                3
              </div>
              <h3 className="text-base font-bold text-navy">Specialized Lining &amp; Cryogenic Trim</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For extreme operating temperatures or corrosive chemical acids:
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                  <span>Virgin PFA/FEP Lined: 100% spark tested for aggressive boiling acids and chlorine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                  <span>Extended Bonnet Cryogenic: BS 6364 compliant for liquid nitrogen &amp; LNG down to -196°C</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                  <span>Sanitary Tri-Clamp: Cavity-filled zero dead leg seats for food, dairy, and biopharma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Target Industries & Critical Applications */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="container-px mx-auto max-w-7xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Operating Domains
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Industrial Applications &amp; Environments
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Valve Bridge ball valves operate in severe-service piping across global energy, chemical, and utility infrastructures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Chemical & Petrochemical',
                desc: 'Acid handling, chlor-alkali, refinery distillation towers, hydrocarbon manifold switching, and tank farms.',
              },
              {
                title: 'Cryogenic LNG Infrastructure',
                desc: 'LNG liquefaction trains, cryogenic storage tanks, re-gasification terminals, and liquid nitrogen transport.',
              },
              {
                title: 'Food, Dairy & Pharma',
                desc: 'Sanitary tri-clamp automation, CIP/SIP wash loops, purified water (WFI), and active ingredient batching.',
              },
              {
                title: 'Water Treatment & Skids',
                desc: 'Modular chemical dosing skids, filtration backwash manifolds, compressed air systems, and cooling utilities.',
              },
            ].map((app) => (
              <div key={app.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h4 className="font-bold text-navy text-sm">{app.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technical FAQs (alisvalves.com content) */}
      <section className="py-16 bg-slate-50">
        <div className="container-px mx-auto max-w-4xl space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Ball Valve Engineering &amp; Sourcing FAQs
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Common technical questions regarding selection, testing standards, and mill sourcing.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'What is the operational difference between L-Port and T-Port in Valve Bridge 3-way ball valves?',
                a: 'An L-port valve has a 90° passage through the ball, used primarily for diverting flow from a common inlet to either of two outlets (or switching between two inlet sources). A T-port valve has a T-shaped passage, allowing straight-through flow between two opposite ports with or without side branching, or mixing two fluids into a common discharge line.',
              },
              {
                q: 'What are the advantages of a 3-piece ball valve over a 2-piece design?',
                a: 'A 3-piece ball valve consists of two end caps and a center body section held together by bolts. During plant maintenance, removing a bolt allows the center body containing the ball and seats to swing out cleanly, allowing swift seat replacement without unbolting or re-aligning the companion piping flanges.',
              },
              {
                q: 'How does Valve Bridge verify ball valves before shipment from China foundries?',
                a: 'Valve Bridge performs 100% pre-shipment inspection: hydrostatic shell test at 1.5x rating, high-pressure hydrostatic seat test, low-pressure pneumatic air seat test (zero allowable leakage under API 598 / ISO 5208 Rate A), PMI material verification, dimensional flange checks against ASME B16.5, and review of EN 10204 3.1 mill certs.',
              },
              {
                q: 'Why choose a PFA/PTFE lined ball valve over exotic nickel alloys for corrosive chemicals?',
                a: 'PFA (Perfluoroalkoxy) and PTFE fluoropolymers provide universal chemical resistance against highly aggressive acids (like boiling hydrochloric, hydrofluoric, and sulfuric acid) where Hastelloy or Titanium either fail or are prohibitively expensive. Every Valve Bridge lined valve is 100% spark tested at 20,000 Volts (20kV) to ensure zero pinholes.',
              },
              {
                q: 'Can these manual ball valves be retrofitted with pneumatic or electric actuators later?',
                a: 'Yes. All Valve Bridge industrial ball valves feature integrated ISO 5211 direct mounting pads with standardized double-square stem drives. They can be operated by hand lever today and converted to pneumatic or electric actuator automation in the future without custom brackets.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-bold text-navy hover:text-teal transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-teal' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Direct RFQ Banner */}
      <section className="bg-gradient-to-r from-[#071329] via-[#0B1F3A] to-[#071329] text-white py-14">
        <div className="container-px mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber">
              Engineering Sizing &amp; Bulk Ex-Mill Quotes
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Need Direct Factory Mill Quotes for Ball Valves?
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Send your valve sizes, pressure ratings, media specifications, and required quantities. Our engineering team provides detailed dimensional drawings and direct mill quotations within 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact?product=BallValves"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF8C00] hover:bg-[#e07b00] text-white px-6 py-3.5 text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <span>Request Sourcing Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Interactive Detailed Specification Modal (When clicking "Specifications" or "Quick View") */}
      {selectedModalModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded bg-teal text-white text-[10px] font-bold uppercase">
                  {selectedModalModel.operationType}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Type {selectedModalModel.typeNumber < 10 ? `0${selectedModalModel.typeNumber}` : selectedModalModel.typeNumber} of 12
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy truncate">
                  {selectedModalModel.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedModalModel(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-200/60 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Top Details & Visual */}
              <div className="grid md:grid-cols-12 gap-6 items-center">
                {/* Visual */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className="relative w-full aspect-square max-w-[280px] rounded-xl bg-slate-50 border border-slate-200 p-6 flex items-center justify-center">
                    <img
                      src={selectedModalModel.image}
                      alt={selectedModalModel.name}
                      className="max-h-[200px] w-auto max-w-full object-contain drop-shadow"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-7 space-y-3">
                  <span className="text-xs font-semibold text-teal uppercase tracking-wider block">
                    {selectedModalModel.categoryLabel}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-navy leading-snug">
                    {selectedModalModel.tagline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedModalModel.overview}
                  </p>

                  {/* Official Catalog Link */}
                  {selectedModalModel.sourceUrl && (
                    <div className="pt-1">
                      <a
                        href="#rfq-section" onClick={() => setSelectedModalModel(null)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy text-xs font-semibold transition-colors"
                      >
                        <span>Valve Bridge Technical Specifications</span>
                        <ExternalLink className="w-3.5 h-3.5 text-teal" />
                      </a>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-navy block mb-1.5">Design Highlights:</span>
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
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal block">
                  Key Engineering Advantages
                </span>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {selectedModalModel.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
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
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50 shrink-0">
              <button
                onClick={() => setSelectedModalModel(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-navy hover:bg-slate-200/60 transition-colors"
              >
                Close
              </button>

              <Link
                href={`/contact?product=BallValves&model=${encodeURIComponent(selectedModalModel.name)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white text-xs font-bold shadow-xs transition-colors"
                onClick={() => setSelectedModalModel(null)}
              >
                <span>Request Factory Quotation for this Valve</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
