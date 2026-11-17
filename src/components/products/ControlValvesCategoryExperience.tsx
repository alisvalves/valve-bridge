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

export type ControlValveFilter =
  | 'all'
  | 'pneumatic'
  | 'electric'
  | 'globe'
  | 'lined'
  | 'y-type'
  | 'angle'
  | 'high-pressure'
  | 'hydraulic';

export interface ControlValveModel {
  id: string;
  typeNumber: number;
  name: string;
  category: 'pneumatic' | 'electric' | 'hydraulic';
  subCategory: 'globe' | 'angle' | 'y-type' | 'multi-port' | 'high-pressure' | 'hydraulic' | 'lined';
  operationType: string;
  categoryLabel: string;
  tagline: string;
  image: string;
  sourceUrl: string;
  sizeRange: string;
  pressureClass: string;
  bodyMaterial: string;
  trimMaterial: string;
  seatLeakage: string;
  flowCharacteristic: string;
  actuation: string;
  tempRange: string;
  designStandard: string;
  endConnection: string;
  highlights: string[];
  keyBenefits: string[];
  overview: string;
  specsTable: { label: string; value: string }[];
  suitableMedia: string[];
  industries: string[];
}

export const controlValvesCatalog: ControlValveModel[] = [
  {
    id: 'angle-control-valve',
    typeNumber: 1,
    name: 'Angle Control Valve',
    category: 'pneumatic',
    subCategory: 'angle',
    operationType: 'Pneumatic Diaphragm / Piston',
    categoryLabel: 'Pneumatic Actuated / Angle Body',
    tagline: '90-degree self-draining angle pattern body engineered to mitigate flashing, cavitation, and erosion in high pressure drops',
    image: '/assets/products/alis-control-valves/control-valve-1-angle-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/angle-control-valve/',
    sizeRange: '1" to 12" (DN25 – DN300)',
    pressureClass: 'Class 150 to Class 1500 (PN16 – PN250)',
    bodyMaterial: 'Cast Carbon Steel WCB / WC6 / WC9 / CF8M Stainless',
    trimMaterial: 'Hardened 17-4PH / Stellite Faced SS316 / Tungsten Carbide',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear / Modified Linear',
    actuation: 'Multi-Spring Pneumatic Diaphragm or Piston Cylinder',
    tempRange: '-46°C to +450°C (up to 550°C with extended bonnet)',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA 75.01',
    endConnection: 'Flanged RF/RTJ ASME B16.5 / Butt Weld ASME B16.25',
    highlights: [
      'Right-angle flow direction allows smooth downstream expansion, minimizing impingement erosion',
      'Self-draining body design prevents particulate accumulation in slurry and boiling fluid service',
      'Engineered with heavy-duty top and seat guiding for anti-vibration stability',
      'Equipped with 4-20mA smart electro-pneumatic digital positioner with auto-calibration',
    ],
    keyBenefits: [
      'Eliminates pipe elbows and turbulent eddies at critical pump discharges',
      'Handles extreme pressure drops, outgassing media, and flashed steam without body damage',
      'Stellite or tungsten carbide trim resists high-velocity particle wear and cavitation pitting',
      'Fast response times under 1.5 seconds with tight throttling control resolution (<0.2%)',
    ],
    overview:
      'Valve Bridge is a premier Angle Control Valve Supplier. Specifically engineered for severe process conditions where high differential pressures cause severe flashing, cavitation, or erosive fluid velocities. The 90-degree angle body configuration guides fluid directly downward into downstream piping, keeping high-velocity fluid jets away from the valve pressure containment wall. Designed for boiler blowdown, refinery coker fractionator bottoms, high-pressure gas letdown, and mining slurry loops.',
    specsTable: [
      { label: 'Size Range', value: '1" to 12" (DN25 to DN300)' },
      { label: 'Pressure Ratings', value: 'ANSI Class 150, 300, 600, 900, 1500 / PN16–PN250' },
      { label: 'Body Style', value: '90° Angle Body (Self-Draining Flow Geometry)' },
      { label: 'End Connections', value: 'ASME B16.5 Flanged RF / RTJ, Butt Weld B16.25' },
      { label: 'Body Castings', value: 'ASTM A216 WCB / A217 WC6 / WC9 / A351 CF8M' },
      { label: 'Trim Types', value: 'Contoured Plug / Drilled Hole Anti-Cavitation Trim' },
      { label: 'Trim Hardening', value: 'Stellite Gr.6 Hardfacing / Colmonoy / Tungsten Carbide' },
      { label: 'Bonnet Types', value: 'Standard, Normalizing Fin Radiator, Cryogenic Extension' },
      { label: 'Positioner Protocol', value: 'Smart Digital 4-20mA with HART Protocol / Foundation Fieldbus' },
      { label: 'Testing Standard', value: 'IEC 60534-4 / FCI 70-2 Seat Leakage 100% Factory Certified' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Flashing Boiler Blowdown', 'Superheated Steam', 'Erosive Slurry', 'High-Pressure Condensate', 'Heavy Crude Oil'],
    industries: ['Thermal Power Plants', 'Petroleum Refineries', 'Chemical Process Plants', 'Mineral Ore Leaching', 'Fertilizer Units'],
  },
  {
    id: 'electric-remote-control-float-valve',
    typeNumber: 2,
    name: 'Electric Remote Control Float Valve',
    category: 'electric',
    subCategory: 'hydraulic',
    operationType: 'Electric Pilot Hydraulic',
    categoryLabel: 'Electric Pilot / Multi-Functional Hydraulic Float',
    tagline: 'Hydraulic diaphragm control valve with remote electric solenoid and pilot float for automated tank reservoir level management',
    image: '/assets/products/alis-control-valves/control-valve-2-electric-remote-control-float-valve.png',
    sourceUrl: 'https://alisvalves.com/product/electric-remote-control-float-valve/',
    sizeRange: '2" to 24" (DN50 – DN600)',
    pressureClass: 'PN10 / PN16 / PN25 / Class 150',
    bodyMaterial: 'Ductile Iron GGG40/50 / Cast Carbon Steel WCB / CF8M Stainless',
    trimMaterial: 'SS304 / SS316 Stainless Steel with Resilient NBR/EPDM Diaphragm',
    seatLeakage: 'Bubble-Tight Zero Leakage (Resilient Disc Seal)',
    flowCharacteristic: 'Quick Opening / Linear Level Regulating',
    actuation: 'Line-Pressure Driven Hydraulic Diaphragm with 24VDC/220VAC Pilot Solenoid',
    tempRange: '0°C to +80°C (Potable and industrial water temperatures)',
    designStandard: 'EN 1074-5 / AWWA C530 / BS 5163',
    endConnection: 'Flanged ASME B16.5 Class 150 / EN 1092-2 PN10/PN16',
    highlights: [
      'Utilizes pipeline fluid pressure for operation; no external mechanical compressor needed',
      'Dual control: electric remote control via PLC signal and mechanical float backup',
      'Smooth non-slam closing rate prevents destructive water hammer in supply lines',
      'Reinforced EPDM/Nylon composite diaphragm delivers over 500,000 trouble-free cycles',
    ],
    keyBenefits: [
      'Automated filling and shut-off for elevated water tanks and municipal reservoirs',
      'Can be remote-controlled from central SCADA room via solenoid pilot trigger',
      'Built-in stainless steel control tubing, pilot strainers, and micro-speed needle valves',
      'Full-port hydrodynamic flow passage minimizes pressure drop across the body',
    ],
    overview:
      'Valve Bridge is a premier Electric Remote Control Float Valve Supplier. This multi-functional pilot-operated hydraulic control valve is designed for municipal water distribution networks, fire water reservoirs, and commercial tank farms. It uses line fluid pressure acting upon a reinforced diaphragm to open, throttle, and close smoothly. The electric pilot solenoid allows automated supervisory level control from a PLC, while preventing pipeline surge and water hammer.',
    specsTable: [
      { label: 'Size Range', value: '2" to 24" (DN50 to DN600)' },
      { label: 'Pressure Rating', value: 'PN10, PN16, PN25 / ANSI Class 150' },
      { label: 'Body Style', value: 'Y-Pattern / Globe Hydrodynamic Hydraulic Body' },
      { label: 'Pilot Circuit', value: 'SS316 Tubing + Brass/SS Pilot Float + 2-Way Pilot Solenoid' },
      { label: 'Supply Voltage', value: '24V DC / 110V AC / 220V AC (IP68 Submersible Optional)' },
      { label: 'Body Metallurgy', value: 'Ductile Iron EN-GJS-500-7 / WCB / CF8M' },
      { label: 'Diaphragm Core', value: 'Nylon-Reinforced EPDM / Natural Rubber' },
      { label: 'Coating', value: 'Fusion Bonded Epoxy (FBE) 250µm Wetted & Exterior' },
      { label: 'Closing Characteristics', value: 'Adjustable Hydraulic Needle Cushion (Anti-Hammer)' },
      { label: 'Testing Standard', value: 'EN 12266-1 / ISO 5208 Zero Leakage Rate A' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Potable Drinking Water', 'Raw Municipal Water', 'Fire Protection Water', 'Treated Effluent', 'Irrigation Water'],
    industries: ['Municipal Water Authorities', 'Commercial Building High-Rises', 'Fire Water Pump Systems', 'Desalination Storage', 'Industrial Park Utilities'],
  },
  {
    id: 'piston-type-flow-regulator',
    typeNumber: 3,
    name: 'Piston Type Flow Regulator',
    category: 'hydraulic',
    subCategory: 'hydraulic',
    operationType: 'Plunger / Slotted Piston',
    categoryLabel: 'Linear Regulating / Piston Plunger Flow Regulator',
    tagline: 'High differential pressure plunge-piston valve with slotted anti-cavitation cage for precise water transmission regulation',
    image: '/assets/products/alis-control-valves/control-valve-3-piston-type-flow-regulator.png',
    sourceUrl: 'https://alisvalves.com/product/piston-type-flow-regulator/',
    sizeRange: '4" to 60" (DN100 – DN1500)',
    pressureClass: 'PN10 / PN16 / PN25 / PN40 (Class 150 / 300)',
    bodyMaterial: 'Ductile Iron GGG40/50 / Cast Carbon Steel WCB / SS316',
    trimMaterial: 'Stainless Steel AISI 316 / Monel with Multi-Orifice Slotted Cylinder',
    seatLeakage: 'EN 12266-1 Rate A (Bubble Tight Resilient Quad-Ring Seal)',
    flowCharacteristic: 'Linear / Precise Equal Percentage Flow Control',
    actuation: 'Electric Multi-Turn Actuator / Manual Bevel Gearbox / Hydraulic Cylinder',
    tempRange: '-10°C to +80°C',
    designStandard: 'EN 1074-5 / DIN 3202 / AWWA C512',
    endConnection: 'Double Flanged ASME B16.5 / EN 1092-2 (Long & Short Pattern)',
    highlights: [
      'Axial piston/plunger design directs high-velocity flow to the center axis, avoiding wall erosion',
      'Slotted cage trim breaks pressure drop into multiple harmless micro-jets to eliminate cavitation',
      'Linear flow rate regulation across 0% to 100% stroke without hunting or oscillation',
      'Low operating torque allows smaller, high-reliability electric or hydraulic actuators',
    ],
    keyBenefits: [
      'Specifically engineered for extreme pressure drops in dam bottom outlets and gravity conduits',
      'Resistant to cavitation damage even under high differential head (up to 40 bar delta-P)',
      'Quad-ring secondary soft seal guarantees zero drop tight shutoff when fully closed',
      'Internal bronze/PTFE guide rails ensure frictionless non-stick piston travel',
    ],
    overview:
      'Valve Bridge is a premier Piston Type Flow Regulator Supplier. In high-head water conduits, dam pipelines, and turbine bypass systems, standard butterfly and globe valves suffer catastrophic cavitation pitting and severe vibration. The piston flow regulator features an axial piston moving inside a radial slotted cylinder. As water flows through the radial slots toward the center axis, energy dissipation occurs through fluid collision in the center, keeping pipe walls completely free from cavitation attack.',
    specsTable: [
      { label: 'Size Range', value: '4" to 60" (DN100 to DN1500)' },
      { label: 'Pressure Class', value: 'PN10, PN16, PN25, PN40 / ANSI 150#, 300#' },
      { label: 'Internal Mechanism', value: 'Crank-Gear Driven Axial Piston with Stainless Cylinder' },
      { label: 'Cage Trims', value: 'Slotted Cylinder / Perforated Orifice / Anti-Cavitation Ring' },
      { label: 'Body Metallurgy', value: 'Ductile Iron GGG50 / Cast Steel WCB / CF8M' },
      { label: 'Trim Metallurgy', value: 'Stainless Steel AISI 304 / 316 / Duplex 2205' },
      { label: 'Sealing Design', value: 'Primary Metallic Cage + Secondary Profiled EPDM/FKM Seal' },
      { label: 'Actuation Type', value: 'Modulating Electric Actuator (4-20mA / Modbus RTU)' },
      { label: 'Flange Drilling', value: 'EN 1092-2 / ASME B16.5 Double Flanged' },
      { label: 'Testing Standard', value: 'EN 12266-1 Rate A / ISO 5208 100% Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Raw River Water', 'Dam Discharge Water', 'Potable Transmission Mains', 'Cooling Water Circulations', 'Turbine Bypass Streams'],
    industries: ['Hydroelectric Dam Facilities', 'Water Transmission Pipelines', 'Irrigation Canal Headworks', 'Municipal Pumping Hubs', 'District Water Networks'],
  },
  {
    id: 'y-type-flanged-control-valve',
    typeNumber: 4,
    name: 'Y Type Flanged Control Valve',
    category: 'hydraulic',
    subCategory: 'y-type',
    operationType: 'Hydraulic Diaphragm / Electric',
    categoryLabel: 'Hydraulic Diaphragm / Streamlined Y-Pattern',
    tagline: 'Streamlined 45-degree angled Y-pattern body delivering maximum flow coefficient (Cv), minimum head loss, and anti-turbulence throttling',
    image: '/assets/products/alis-control-valves/control-valve-4-y-type-flanged-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/y-type-flanged-control-valve/',
    sizeRange: '2" to 16" (DN50 – DN400)',
    pressureClass: 'PN10 / PN16 / PN25 / Class 150',
    bodyMaterial: 'Ductile Iron GGG40 / Cast Carbon Steel WCB / Stainless Steel CF8M',
    trimMaterial: 'Stainless Steel SS304 / SS316 with Resilient EPDM Disc Seat',
    seatLeakage: 'EN 12266-1 Rate A Zero Bubble Leakage',
    flowCharacteristic: 'Linear / Modified Equal Percentage',
    actuation: 'Line-Pressure Driven Hydraulic Actuator / Electric Solenoid / Motorized',
    tempRange: '-10°C to +90°C',
    designStandard: 'EN 1074 / AWWA C530 / ISO 5752',
    endConnection: 'Flanged ASME B16.5 / EN 1092-2 PN16/25',
    highlights: [
      '45° angled Y-pattern seat delivers up to 35% higher flow capacity than standard globe valves',
      'Straight-through internal waterway drastically reduces turbulence and pumping energy losses',
      'Single-chamber or dual-chamber hydraulic diaphragm control mechanism',
      'Fusible epoxy interior prevents biofilm buildup and corrosion scaling',
    ],
    keyBenefits: [
      'Cuts electrical pumping energy costs due to ultra-low hydraulic resistance',
      'Available with pressure reducing, pressure sustaining, and surge relief pilots',
      'In-line serviceable: top bonnet cover can be unbolted without removing valve from pipe',
      'Ideal for raw water filtration, irrigation manifolds, and cooling water systems',
    ],
    overview:
      'Valve Bridge is a premier Y Type Flanged Control Valve Supplier. Standard globe control valves impose high head loss due to tortuous 90-degree internal bends. This valve utilizes an engineered 45-degree Y-body profile that straightens the flow trajectory, achieving exceptionally high flow capacity (Cv) and minimal head loss. Adaptable with various hydraulic pilot circuits for pressure reduction, flow sustaining, and rapid pump surge relief.',
    specsTable: [
      { label: 'Size Range', value: '2" to 16" (DN50 to DN400)' },
      { label: 'Pressure Rating', value: 'PN10 / PN16 / PN25 / ANSI Class 150' },
      { label: 'Body Configuration', value: '45° Y-Pattern Hydrodynamic Low-Headloss Body' },
      { label: 'Flow Capacity', value: '30%–40% Higher Cv than Conventional Globe Bodies' },
      { label: 'Body Material', value: 'Ductile Iron EN-GJS-500-7 / WCB / CF8M' },
      { label: 'Internal Trim', value: 'Stainless Steel AISI 304 / 316 + Vulcanized Disc' },
      { label: 'Diaphragm Life', value: 'Over 1,000,000 Continuous Stroke Cycles' },
      { label: 'Flange Drilling', value: 'EN 1092-2 / ASME B16.5 Class 150' },
      { label: 'Epoxy Coating', value: 'WRAS / NSF-61 Approved Electrostatic Epoxy (300µm)' },
      { label: 'Testing Standard', value: 'API 598 / EN 12266-1 Zero Bubble Leakage' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Treated Potable Water', 'Raw Well Water', 'Cooling Loop Water', 'Agricultural Irrigation', 'Industrial Process Water'],
    industries: ['Municipal Water Utilities', 'Agricultural Irrigation Networks', 'HVAC Hydronic Plants', 'Industrial Wastewater Systems', 'Desalination Plants'],
  },
  {
    id: '3-way-diaphragm-type-control-valve',
    typeNumber: 5,
    name: '3 Way Diaphragm Type Control Valve',
    category: 'pneumatic',
    subCategory: 'multi-port',
    operationType: 'Pneumatic Diaphragm',
    categoryLabel: 'Pneumatic Diaphragm / 3-Way Diverting & Mixing',
    tagline: 'Multi-spring pneumatic diaphragm globe valve designed for continuous automated heat exchanger mixing and temperature bypass diversion',
    image: '/assets/products/alis-control-valves/control-valve-5-3-way-diaphragm-type-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/3-way-diaphragm-type-control-valve/',
    sizeRange: '1" to 12" (DN25 – DN300)',
    pressureClass: 'Class 150 / Class 300 / PN16 / PN40',
    bodyMaterial: 'Cast Carbon Steel WCB / CF8M Stainless / Cast Iron FC250',
    trimMaterial: 'SS316 / SS304 Dual-Port Guided Plugs (Hard Faced)',
    seatLeakage: 'ANSI FCI 70-2 Class IV (Metal) / Class VI (PTFE Insert)',
    flowCharacteristic: 'Linear / Modified Linear for Proportional Mixing',
    actuation: 'Multi-Spring Pneumatic Diaphragm Actuator with Smart Positioner',
    tempRange: '-20°C to +300°C (up to 400°C for Thermal Oil)',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA 75.01',
    endConnection: 'Flanged ASME B16.5 Class 150 / 300 / EN 1092-1',
    highlights: [
      'Two valve plugs mounted on a single stem ensure seamless reciprocal port opening and closing',
      'Available in Diverting configuration (1 inlet, 2 outlets) or Mixing configuration (2 inlets, 1 outlet)',
      'Multi-spring pneumatic diaphragm actuator offers compact height and fast proportional action',
      'Paired with high-accuracy digital positioner for 4-20mA temperature controller loops',
    ],
    keyBenefits: [
      'Replaces two independent control valves with a single compact, cost-saving 3-way package',
      'Provides constant total volumetric flow while precisely modulating branch temperatures',
      'Self-aligning dual cage guides prevent stem binding under high thermal gradients',
      'Guaranteed factory calibrated stroke linearity and hydro-tested pressure containment',
    ],
    overview:
      'Valve Bridge is a premier 3 Way Diaphragm Type Control Valve Supplier. Essential for thermal fluid heat transfer, HVAC chiller bypass loops, pasteurization skids, and jacketed reactor temperature regulation. Operating through a high-thrust pneumatic diaphragm actuator, the valve accurately blends two fluids of different temperatures into a single outlet, or diverts a hot fluid stream between a heat exchanger and its bypass conduit.',
    specsTable: [
      { label: 'Size Range', value: '1" to 12" (DN25 to DN300)' },
      { label: 'Pressure Ratings', value: 'Class 150, Class 300, PN16, PN25, PN40' },
      { label: 'Flow Functions', value: 'Flow Mixing (Converging) or Flow Diverting (Splitting)' },
      { label: 'Body Style', value: '3-Port Globe Cast Body with Rigid Guiding' },
      { label: 'Body Casting', value: 'ASTM A216 WCB / ASTM A351 CF8M / CF8' },
      { label: 'Internal Plugs', value: 'Dual-Seat Contoured Balanced Plugs SS316' },
      { label: 'Actuator Type', value: 'Multi-Spring Pneumatic Diaphragm (Direct/Reverse Action)' },
      { label: 'Instrumentation', value: 'Smart 4-20mA Electro-Pneumatic Positioner + Air Regulator' },
      { label: 'Stem Packing', value: 'Spring-Loaded PTFE V-Rings / Flexible Graphite Rings' },
      { label: 'Testing Standard', value: 'IEC 60534-4 / FCI 70-2 Class IV / VI Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Hot Water & Chilled Water', 'Thermal Heat Transfer Oil', 'Steam & Condensate', 'Industrial Solvents', 'Food Grade Syrups'],
    industries: ['Chemical Jacketed Reactors', 'District Heating & HVAC', 'Textile Dyeing Machinery', 'Food & Dairy Processing', 'Rubber & Plastic Vulcanization'],
  },
  {
    id: 'cage-guided-globe-control-valve',
    typeNumber: 6,
    name: 'Cage Guided Globe Control Valve',
    category: 'pneumatic',
    subCategory: 'globe',
    operationType: 'Pneumatic Diaphragm / Piston',
    categoryLabel: 'Pneumatic Actuated / Heavy Cage Guided Globe',
    tagline: 'Pressure-balanced plug moving inside a precision machined cage for severe-service high delta-P throttling and anti-vibration stability',
    image: '/assets/products/alis-control-valves/control-valve-6-cage-guided-globe-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/cage-guided-globe-control-valve/',
    sizeRange: '1.5" to 16" (DN40 – DN400)',
    pressureClass: 'Class 150 to Class 600 (PN16 – PN100)',
    bodyMaterial: 'Cast Carbon Steel WCB / Alloy Steel WC6 / WC9 / CF8M Stainless',
    trimMaterial: 'Hardened SS316 / 17-4PH / Stellite / Multi-Hole Anti-Cavitation Cage',
    seatLeakage: 'ANSI FCI 70-2 Class IV / Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear / Quick Opening',
    actuation: 'Pneumatic Diaphragm or High-Thrust Piston Actuator',
    tempRange: '-29°C to +425°C',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA 75.01',
    endConnection: 'Flanged ASME B16.5 RF / RTJ, Butt Weld B16.25',
    highlights: [
      'Pressure-balanced plug configuration reduces required actuator thrust by up to 70%',
      'Heavy cage guiding provides full 360° support, eliminating plug vibration and stem galling',
      'Interchangeable cages available: low noise, anti-cavitation, and standard characterized',
      'Wide dynamic control rangeability up to 50:1 with high throttling resolution',
    ],
    keyBenefits: [
      'Withstands extreme differential pressures without plug chatter or mechanical wear',
      'Multi-hole noise attenuating cage reduces aerodynamic sound levels by 15 to 25 dBA',
      'Quick-change trim: seat ring and cage clamp in place without threaded joints for easy maintenance',
      'Equipped with digital positioner with diagnostics for predictive asset maintenance',
    ],
    overview:
      'Valve Bridge is a premier Cage Guided Globe Control Valve Supplier. In demanding refinery steam headers, gas decompression skids, and boiler feedwater systems, standard top-guided valves suffer from turbulent side-loading forces that bend stems and chew up packing. This cage-guided valve features a pressure-balanced plug that moves inside a precision machined cylindrical cage, providing complete circumferential support, low operational torque, and extreme stability under high differential pressures.',
    specsTable: [
      { label: 'Size Range', value: '1.5" to 16" (DN40 to DN400)' },
      { label: 'Pressure Class', value: 'Class 150, Class 300, Class 600 / PN16–PN100' },
      { label: 'Body Construction', value: 'High Flow Capacity Cast Globe Body with Top Entry' },
      { label: 'Trim Design', value: 'Pressure-Balanced Cage-Guided Plug with Seal Ring' },
      { label: 'Anti-Noise Cages', value: 'Single & Multi-Stage Perforated Drilled Hole Cages' },
      { label: 'Body Casting', value: 'ASTM A216 WCB / A217 WC6 / WC9 / A351 CF8M' },
      { label: 'Trim Metallurgy', value: 'Hardened 17-4PH / SS316 Stellite Coated / Nitrided' },
      { label: 'Actuator', value: 'Multi-Spring Diaphragm (Direct/Reverse) / Cylinder Piston' },
      { label: 'End Connections', value: 'Flanged ASME B16.5 RF/RTJ, Butt Weld ASME B16.25' },
      { label: 'Testing Standard', value: 'IEC 60534-4 / FCI 70-2 Tested 100% Factory Certified' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['High-Pressure Steam', 'Natural Gas & Refinery Gases', 'Boiler Feedwater', 'Hydrocarbon Condensate', 'Chemical Process Fluids'],
    industries: ['Petrochemical Refineries', 'Combined Cycle Power Plants', 'Natural Gas Decompression Skids', 'Pulp & Paper Digesters', 'Chemical Synthesizers'],
  },
  {
    id: 'cage-guided-pneumatic-actuated-control-valve',
    typeNumber: 7,
    name: 'Cage Guided Pneumatic Actuated Control Valve',
    category: 'pneumatic',
    subCategory: 'globe',
    operationType: 'Pneumatic Diaphragm + Positioner',
    categoryLabel: 'Pneumatic Diaphragm / Automated Cage Guided',
    tagline: 'Automated cage-guided globe valve package pre-piped with smart electro-pneumatic positioner, air regulator, and limit switches for DCS integration',
    image: '/assets/products/alis-control-valves/control-valve-7-cage-guided-pneumatic-actuated-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/cage-guided-pneumatic-actuated-control-valve/',
    sizeRange: '1" to 16" (DN25 – DN400)',
    pressureClass: 'Class 150 / Class 300 / Class 600 (PN16 – PN100)',
    bodyMaterial: 'ASTM A216 WCB / A351 CF8M / Low Temp LCB / Alloy WC9',
    trimMaterial: 'Stainless Steel 316 / 17-4PH / Stellite Hardfaced Cage & Plug',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Heavy-Duty Pneumatic Diaphragm Actuator with NAMUR Yoke',
    tempRange: '-46°C to +400°C',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA 75.01',
    endConnection: 'Flanged ASME B16.5 RF / RTJ',
    highlights: [
      'Complete pre-engineered automation package ready for immediate field installation',
      'Smart digital positioner with real-time LCD screen and auto zero/span calibration in 60s',
      'Equipped with 5-micron Air Filter Regulator (AFR) and liquid-filled vibration-proof gauges',
      'Pressure-balanced plug enables fast modulation without actuator stalling',
    ],
    keyBenefits: [
      'Factory assembled, instrumented, piped, and 100% loop-tested before dispatch',
      'Tight throttling accuracy: linearity <0.4% F.S. and hysteresis <0.2% F.S.',
      'Partial Stroke Testing (PST) enabled to verify safety availability without interrupting process',
      'Explosion-proof ATEX / IECEx certified instrumentation for hazardous Zone 1 & 2 areas',
    ],
    overview:
      'Valve Bridge is a premier Cage Guided Pneumatic Actuated Control Valve Supplier. Delivered as a fully integrated, calibrated control package engineered to drop into automated plant DCS and PLC loops. Incorporating a robust cage-guided globe valve, heavy-duty pneumatic diaphragm actuator, and intelligent digital positioner with HART communication, it delivers microscopic throttling resolution and rapid response times for continuous plant optimization.',
    specsTable: [
      { label: 'Size Range', value: '1" to 16" (DN25 to DN400)' },
      { label: 'Pressure Rating', value: 'ANSI Class 150, 300, 600 / PN16–PN100' },
      { label: 'Valve Body', value: 'High Cv Heavy Wall Cast Globe Body with Top Bonnet' },
      { label: 'Internal Guiding', value: 'Full Height Balanced Cylindrical Cage' },
      { label: 'Actuator Model', value: 'Multi-Spring Diaphragm (Fail Closed FC / Fail Open FO)' },
      { label: 'Digital Positioner', value: 'Smart 4-20mA HART / Profibus with Graphic Display' },
      { label: 'Air Filter Regulator', value: 'Integrated Brass/SS Filter Regulator with Dual Gauges' },
      { label: 'Limit Switch Box', value: '2x SPDT Microswitches / Proximity Sensors (Optional)' },
      { label: 'Stem Packing', value: 'Live-Loaded PTFE Chevron / Inconel-Reinforced Graphite' },
      { label: 'Testing Standard', value: 'IEC 60534 Dynamic Calibration & Hydro 100% Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Process Steam', 'Fuel Gas & Syngas', 'Chemical Solvents', 'Cooling Water', 'Crude Oil & Distillates'],
    industries: ['Petrochemical Refineries', 'Power Generation Stations', 'Chemical Processing Facilities', 'Pharmaceutical Bulk Synthesis', 'Steel & Metallurgy'],
  },
  {
    id: 'electric-globe-control-valve',
    typeNumber: 8,
    name: 'Electric Globe Control Valve',
    category: 'electric',
    subCategory: 'globe',
    operationType: 'Linear Electric Actuator',
    categoryLabel: 'Electric Motorized / Linear Globe Control',
    tagline: 'High-precision motorized linear globe valve powered by 24VDC/220VAC electric actuator for plants without compressed air infrastructure',
    image: '/assets/products/alis-control-valves/control-valve-8-electric-globe-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/electric-globe-control-valve/',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'Class 150 / Class 300 / PN16 / PN40',
    bodyMaterial: 'Cast Carbon Steel WCB / Stainless Steel CF8M / Ductile Iron',
    trimMaterial: 'Stainless Steel AISI 316 / Hard Faced Stellite Contoured Plug',
    seatLeakage: 'ANSI FCI 70-2 Class IV / Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Intelligent Modulating Linear Electric Actuator with Servo Card',
    tempRange: '-20°C to +300°C (up to 450°C with radiator fins)',
    designStandard: 'IEC 60534 / ASME B16.34 / EN 1349',
    endConnection: 'Flanged ASME B16.5 RF / EN 1092-1',
    highlights: [
      'Operates directly on standard 220V/380VAC or 24VDC plant electrical power',
      'Built-in intelligent servo controller accepts 4-20mA DC or 0-10V control signals',
      'Continuous 4-20mA valve position feedback transmitter for remote monitoring',
      'Integrated handwheel for manual local emergency positioning during power loss',
    ],
    keyBenefits: [
      'Eliminates expensive compressed air piping, air dryers, and compressors',
      'Extremely high thrust output up to 25,000 N for tight shutoff against line pressure',
      'Non-intrusive setup with internal torque and travel limit micro-switches',
      'Fail-safe electronic battery backup available to drive valve to closed/open on power cut',
    ],
    overview:
      'Valve Bridge is a premier Electric Globe Control Valve Supplier. When compressed air is unavailable or impractical in remote pumping stations, HVAC central energy plants, and skid packages, electric motorized globe control valves provide the optimal solution. Featuring a high-torque brushless linear servo actuator paired with an aerodynamic globe valve body, this package delivers stable, non-hunting modulation via 4-20mA signals.',
    specsTable: [
      { label: 'Size Range', value: '1/2" to 12" (DN15 to DN300)' },
      { label: 'Pressure Ratings', value: 'ANSI Class 150, 300 / PN16, PN25, PN40' },
      { label: 'Body Casting', value: 'ASTM A216 WCB / ASTM A351 CF8M / DI GGG40' },
      { label: 'Internal Plug', value: 'Top-Guided Contoured Throttle Plug SS316' },
      { label: 'Electric Actuator', value: 'Linear Servo Actuator (Thrust 2,000 N to 25,000 N)' },
      { label: 'Power Supply', value: '220V AC 50/60Hz / 24V DC / 380V AC 3-Phase' },
      { label: 'Control Input', value: '4–20 mA DC / 0–10V DC Analog Modulating Signal' },
      { label: 'Position Feedback', value: '4–20 mA DC Active Output Signal' },
      { label: 'Enclosure Rating', value: 'IP67 Weatherproof / Ex d IIB T4 Explosion-Proof' },
      { label: 'Testing Standard', value: 'IEC 60534 / FCI 70-2 Seat Leakage Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['District Chilled & Hot Water', 'Low to Medium Pressure Steam', 'Industrial Glycol Loops', 'Refinery Heavy Fuels', 'Feed Chemicals'],
    industries: ['HVAC & District Cooling', 'Commercial Central Plants', 'Food & Beverage Processing', 'Textile Processing Plants', 'Water & Wastewater Skids'],
  },
  {
    id: 'electric-globe-type-control-valve',
    typeNumber: 9,
    name: 'Electric Globe Type Control Valve',
    category: 'electric',
    subCategory: 'globe',
    operationType: 'Smart Motorized Globe',
    categoryLabel: 'Electric Motorized / Industrial Process Globe',
    tagline: 'Heavy-duty industrial motorized globe valve with multi-turn micro-stepping gearbox and high-thrust non-intrusive smart actuator',
    image: '/assets/products/alis-control-valves/control-valve-9-electric-globe-type-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/electric-globe-type-control-valve/',
    sizeRange: '1" to 14" (DN25 – DN350)',
    pressureClass: 'Class 150 / Class 300 / Class 600 (PN16 – PN100)',
    bodyMaterial: 'Cast Carbon Steel WCB / Alloy Steel WC6 / WC9 / Stainless CF8M',
    trimMaterial: 'Hardened SS316 with Stellite Overlay / Precision Cage Guided',
    seatLeakage: 'ANSI FCI 70-2 Class IV / Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Intelligent Multi-Turn Motorized Actuator with Linear Thrust Unit',
    tempRange: '-20°C to +350°C (up to 450°C with cooling radiator)',
    designStandard: 'ASME B16.34 / IEC 60534 / EN 1349',
    endConnection: 'Flanged ASME B16.5 RF / RTJ',
    highlights: [
      'Heavy industrial cast construction engineered for continuous 24/7 process modulation',
      'Non-intrusive infrared or Bluetooth calibration without opening the electrical housing',
      'Equipped with mechanical position indicator and backlit multi-parameter LCD screen',
      'Dual limit switches and independent torque sensor prevent stem damage upon over-travel',
    ],
    keyBenefits: [
      'High mechanical holding torque prevents back-drive under high process vibrations',
      'Compatible with industrial fieldbus networks: Modbus RTU, Profibus DP, and Foundation Fieldbus',
      'Available with high-temperature extension bonnets for steam and thermal oil lines',
      'Full factory mechanical run-in and 100% hydrostatic pressure testing documentation',
    ],
    overview:
      'Valve Bridge is a premier Electric Globe Type Control Valve Supplier. Designed for heavy industrial applications requiring high stem thrust, digital automation, and continuous modulating precision. The robust cast steel body is coupled with an intelligent non-intrusive motorized actuator that monitors motor temperature, mechanical torque, and cycle counts, offering predictive diagnostic data to plant operators.',
    specsTable: [
      { label: 'Size Range', value: '1" to 14" (DN25 to DN350)' },
      { label: 'Pressure Ratings', value: 'Class 150, Class 300, Class 600 / PN16–PN100' },
      { label: 'Body Metallurgy', value: 'ASTM A216 WCB / A217 WC9 / A351 CF8M' },
      { label: 'Trim Style', value: 'Heavy Top Guided or Balanced Cage Trim' },
      { label: 'Actuator Design', value: 'Smart Micro-Processor Controlled Motorized Unit' },
      { label: 'Control Communication', value: '4-20mA / Modbus RTU / Profibus DP Protocols' },
      { label: 'Speed of Travel', value: 'Adjustable linear travel rate (15 mm/min to 60 mm/min)' },
      { label: 'Handwheel', value: 'Declutchable Manual Emergency Handwheel' },
      { label: 'Housing Protection', value: 'IP68 Watertight (Submersible 3m for 48h) / Ex d IIC T4' },
      { label: 'Testing Standard', value: 'IEC 60534 / API 598 Tested 100% Pre-Shipment' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Superheated Steam', 'Natural Gas', 'Refinery Hydrocarbons', 'Industrial Feedwater', 'Heavy Condensate'],
    industries: ['Petrochemical Refineries', 'Thermal Power Stations', 'Chemical Processing Skids', 'Pulp & Paper Plants', 'Mining Leach Systems'],
  },
  {
    id: 'electric-y-type-control-valve',
    typeNumber: 10,
    name: 'Electric Y Type Control Valve',
    category: 'electric',
    subCategory: 'y-type',
    operationType: 'Electric Motorized Y-Body',
    categoryLabel: 'Electric Motorized / High-Cv Streamlined Y-Pattern',
    tagline: 'High flow coefficient 45-degree Y-pattern body paired with high-thrust electric actuator for low-turbulence automated throttling',
    image: '/assets/products/alis-control-valves/control-valve-10-electric-y-type-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/electric-y-type-control-valve/',
    sizeRange: '2" to 14" (DN50 – DN350)',
    pressureClass: 'Class 150 / Class 300 / PN16 / PN25',
    bodyMaterial: 'Ductile Iron GGG40 / Cast Steel WCB / CF8M Stainless',
    trimMaterial: 'Stainless Steel 316 / 17-4PH / Resilient or Stellite Trim',
    seatLeakage: 'ANSI FCI 70-2 Class IV / Class VI (Bubble Tight)',
    flowCharacteristic: 'Linear / Modified Equal Percentage',
    actuation: 'Modulating Linear Electric Actuator (24VDC / 220VAC)',
    tempRange: '-20°C to +200°C',
    designStandard: 'IEC 60534 / ASME B16.34 / EN 1349',
    endConnection: 'Flanged ASME B16.5 RF / EN 1092-1',
    highlights: [
      'Angled 45° seat waterway achieves 30% higher Cv than conventional globe patterns',
      'Smooth straight-through flow reduces fluid cavitation and abrasive scouring',
      'Motorized linear actuator provides precise millimeter-level stem positioning',
      'Equipped with 4-20mA positioner card and digital valve travel display',
    ],
    keyBenefits: [
      'Significantly lowers pumping energy consumption across cooling and water networks',
      'Resistant to slurry accumulation and scaling common in right-angle bodies',
      'Built-in electronic torque limiter prevents valve seat crushing upon tight closure',
      'Provides emergency manual handwheel override for safe operator intervention',
    ],
    overview:
      'Valve Bridge is a premier Electric Y Type Control Valve Supplier. Combining the low hydraulic head loss of a 45-degree Y-pattern valve body with the precision positioning of an intelligent electric modulating actuator. Perfect for energy-efficient commercial chiller loops, municipal raw water treatment, and mineral slurry lines where high flow rates and low pressure drop are mandatory.',
    specsTable: [
      { label: 'Size Range', value: '2" to 14" (DN50 to DN350)' },
      { label: 'Pressure Ratings', value: 'ANSI Class 150, Class 300 / PN16, PN25' },
      { label: 'Body Style', value: '45° Inclined Y-Pattern Low-Resistance Body' },
      { label: 'Body Casting', value: 'Ductile Iron GGG50 / ASTM A216 WCB / SS316 CF8M' },
      { label: 'Plug Metallurgy', value: 'Stainless Steel CF8M / 17-4PH (Stellite Optional)' },
      { label: 'Actuator', value: 'Smart Electric Linear Actuator (Thrust up to 20,000 N)' },
      { label: 'Signal Range', value: '4-20mA DC / 0-10V DC Analog Modulation' },
      { label: 'Supply Voltage', value: '220VAC 50Hz / 24VDC / 380VAC 3-Phase' },
      { label: 'Flange Drilling', value: 'ASME B16.5 RF / EN 1092-1 PN16/25' },
      { label: 'Testing Standard', value: 'IEC 60534-4 / API 598 Tested 100% Hydrostatic' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Raw River Water', 'Cooling Water Circulations', 'Mild Slurries & Sediments', 'Irrigation Water', 'Industrial Effluents'],
    industries: ['Municipal Water Treatment', 'Chilled Water District Plants', 'Industrial Wastewater Facilities', 'Mining Tailings Treatment', 'Steel Mill Cooling'],
  },
  {
    id: 'high-pressure-globe-control-valve',
    typeNumber: 11,
    name: 'High Pressure Globe Control Valve',
    category: 'pneumatic',
    subCategory: 'high-pressure',
    operationType: 'Pneumatic Diaphragm / Piston Cylinder',
    categoryLabel: 'Severe Service / High Pressure Class 600# to 2500#',
    tagline: 'Forged and heavy-cast severe service globe valve with multi-stage anti-cavitation trim for high delta-P steam letdown and deep gas injection',
    image: '/assets/products/alis-control-valves/control-valve-11-high-pressure-globe-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/high-pressure-globe-control-valve/',
    sizeRange: '1" to 12" (DN25 – DN300)',
    pressureClass: 'Class 600 to Class 2500 (PN100 – PN420)',
    bodyMaterial: 'Forged Carbon Steel A105 / Cast WCB / Alloy WC9 / F91 / Inconel',
    trimMaterial: 'Full Stellite Gr.6 / Tungsten Carbide / Multi-Stage Drilled Cage',
    seatLeakage: 'ANSI/FCI 70-2 Class V (Tight Metal) / Class VI (Bubble Tight)',
    flowCharacteristic: 'Equal Percentage / Linear / Multi-Step Letdown',
    actuation: 'High-Thrust Pneumatic Piston Cylinder or Diaphragm with Volume Boosters',
    tempRange: '-46°C to +560°C (Superheated Steam Rating)',
    designStandard: 'ASME B16.34 / IEC 60534 / API 6A',
    endConnection: 'Flanged ASME B16.5 RTJ / RF, Butt Weld B16.25 (Heavy Schedule)',
    highlights: [
      'Multi-stage pressure letdown trim splits extreme pressure drops into harmless increments',
      'Completely eliminates cavitation, sonic shockwaves, and destructive vibration',
      'Thick forged or heavy cast pressure-containing boundary rated up to 420 bar',
      'Equipped with pneumatic volume boosters and high-speed pilot positioners',
    ],
    keyBenefits: [
      'Prevents catastrophic trim washout and pipe rupture in supercritical steam systems',
      'Acoustic noise reduction: suppresses aerodynamic throttling noise below 85 dBA',
      'Pressure-balanced plug design enables reliable shut-off with compact actuators',
      'Full material traceability with EN 10204 3.1 & 3.2 mill certificates and PMI testing',
    ],
    overview:
      'Valve Bridge is a premier High Pressure Globe Control Valve Supplier. In supercritical power generation, high-pressure gas injection, and steam turbine bypass stations, differential pressures can exceed 200 bar (3,000 psi). Standard valves undergo rapid cavitation erosion, severe noise (>110 dBA), and destructive pipe vibration. This severe-service valve features a multi-stage tortuous path trim that controls fluid velocity and prevents fluid pressure from dropping below vapor pressure, ensuring smooth, erosion-free control.',
    specsTable: [
      { label: 'Size Range', value: '1" to 12" (DN25 to DN300)' },
      { label: 'Pressure Ratings', value: 'ANSI Class 600, 900, 1500, 2500 / PN100–PN420' },
      { label: 'Body Style', value: 'Heavy Wall Globe / Angle Pattern Severe Service Body' },
      { label: 'Body Metallurgy', value: 'ASTM A216 WCB / A217 WC9 / A182 F22 / F91 / Inconel' },
      { label: 'Trim Architecture', value: 'Multi-Stage Tortuous Path / Multi-Hole Velocity Control Cage' },
      { label: 'Trim Materials', value: 'Solid Stellite 6 / Tungsten Carbide / Nitrided 17-4PH' },
      { label: 'End Connections', value: 'ASME B16.5 Ring Type Joint (RTJ) / Butt Weld B16.25' },
      { label: 'Actuator', value: 'High-Thrust Pneumatic Piston Cylinder (Thrust >50 kN)' },
      { label: 'Positioner Protocol', value: 'Smart Digital HART / Foundation Fieldbus with PST' },
      { label: 'Testing Standard', value: 'ASME B16.34 Hydrostatic & FCI 70-2 Class V 100% Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Supercritical Steam', 'High-Pressure Boiler Feedwater', 'Sour Natural Gas (H2S)', 'Superheated Hydrocarbon Vapor', 'CO2 Injection Streams'],
    industries: ['Supercritical Thermal Power Plants', 'Offshore Oil & Gas Platforms', 'High-Pressure Gas Pipelines', 'Refinery Hydrocrackers', 'Ammonia & Urea Synthesizers'],
  },
  {
    id: 'high-pressure-motorized-control-valve',
    typeNumber: 12,
    name: 'High Pressure Motorized Control Valve',
    category: 'electric',
    subCategory: 'high-pressure',
    operationType: 'Intelligent High-Thrust Motorized',
    categoryLabel: 'Severe Service / High Pressure Motorized Control',
    tagline: 'Smart high-thrust multi-turn electric actuator paired with Class 600#–2500# severe service globe body for automated high-pressure steam and gas lines',
    image: '/assets/products/alis-control-valves/control-valve-12-high-pressure-motorized-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/high-pressure-motorized-control-valve/',
    sizeRange: '1" to 14" (DN25 – DN350)',
    pressureClass: 'Class 600 / Class 900 / Class 1500 / Class 2500 (PN100 – PN420)',
    bodyMaterial: 'Forged / Cast Steel WCB / WC9 / F22 / F91 / Super Duplex SS',
    trimMaterial: 'Full Stellite Hardfaced / Multi-Stage Anti-Cavitation Cage',
    seatLeakage: 'ANSI/FCI 70-2 Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Intelligent Non-Intrusive Multi-Turn Electric Actuator with Linear Thrust Unit',
    tempRange: '-46°C to +540°C',
    designStandard: 'ASME B16.34 / IEC 60534 / ISA 75.01',
    endConnection: 'Flanged ASME B16.5 RTJ / RF, Butt Weld B16.25',
    highlights: [
      'Massive linear thrust output up to 100,000 N for reliable seating under severe pressure drops',
      'Multi-stage trim eliminates high-velocity wire-drawing and seat erosion',
      'Non-intrusive smart actuator with graphic display, data logger, and torque profiling',
      'Available with emergency fail-safe spring or supercapacitor pack for automatic closure on power failure',
    ],
    keyBenefits: [
      'Eliminates pneumatic compressors and air supply freezing in remote sub-zero pipeline stations',
      'Provides continuous real-time torque feedback to monitor internal valve scaling or deposits',
      'ATEX / IECEx certified flameproof enclosure for Class I Division 1 hazardous process environments',
      'Zero valve hunting with micro-stepping motor technology ensuring smooth control loop stability',
    ],
    overview:
      'Valve Bridge is a premier High Pressure Motorized Control Valve Supplier. Designed for critical high-pressure steam boiler headers, pipeline isolation skids, and severe service oil and gas processes where pneumatic air lines are unavailable or subject to freezing. Featuring an intelligent high-thrust motorized actuator coupled with a forged/cast severe-service globe valve body, this package guarantees bubble-tight shutoff and micro-fine throttling control.',
    specsTable: [
      { label: 'Size Range', value: '1" to 14" (DN25 to DN350)' },
      { label: 'Pressure Ratings', value: 'Class 600, 900, 1500, 2500 / PN100–PN420' },
      { label: 'Body Style', value: 'High Pressure Heavy Wall Globe / Angle Body' },
      { label: 'Actuator Model', value: 'Intelligent Non-Intrusive Multi-Turn Electric Unit' },
      { label: 'Stem Thrust Capacity', value: 'Up to 100,000 N Seating Thrust' },
      { label: 'Control Communication', value: '4–20 mA Analog / Modbus RTU / Profibus DP' },
      { label: 'Emergency Backup', value: 'Internal Supercapacitor / Battery Fail-Safe Return' },
      { label: 'Body Metallurgy', value: 'ASTM A216 WCB / A217 WC9 / A182 F91 / SS316' },
      { label: 'Trim Metallurgy', value: 'Multi-Stage Stellite Gr.6 / Tungsten Carbide' },
      { label: 'Testing Standard', value: 'ASME B16.34 Hydrostatic & FCI 70-2 Class V Tested' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['High-Pressure Superheated Steam', 'Natural Gas at Wellheads', 'Boiler Feedwater Injection', 'Superheated Hydrocarbons', 'Deep Hydrogen Gas'],
    industries: ['Fossil & Biomass Power Plants', 'High-Pressure Gas Stations', 'Refinery Hydrotreaters', 'Geothermal Power Plants', 'Chemical Synthesis Plants'],
  },
  {
    id: 'high-temperature-motorized-control-valve',
    typeNumber: 13,
    name: 'High Temperature Motorized Control Valve',
    category: 'electric',
    subCategory: 'high-pressure',
    operationType: 'Electric Motorized',
    categoryLabel: 'Electric Motorized / High Temperature (-29°C to +550°C)',
    tagline: 'Precision-engineered electrically actuated globe control valve with extended heat-dissipating bonnet and Stellite trim up to +550°C',
    image: '/assets/products/alis-control-valves/control-valve-13-high-temperature-motorized-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/high-temperature-motorized-control-valve/',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'PN16 – PN64 / ANSI Class 150, 300 & 600',
    bodyMaterial: 'Cast Steel WCB / WC6 / WC9 / SS304 / SS316 / SS316L',
    trimMaterial: 'Hardened Stainless Steel / Stellite Hardfaced Metal Trim',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Electric / Motorized Actuator (24V DC / 110V / 230V / 415V AC)',
    tempRange: '-29°C to +550°C (Extended Finned Bonnet Protection)',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA S75 / ISO 5211',
    endConnection: 'Flanged ASME B16.5 / Butt Weld / Socket Weld',
    highlights: [
      'Continuous operation rated from -29°C up to +550°C for superheated steam and thermal oil',
      'Heat-resistant Stellite trim and extended thermal isolation yoke protect actuator electronics',
      'Accepts 4–20 mA, 0–10 V, and optional Modbus RTU digital signals for PLC/DCS integration',
      'IP67 / IP68 weatherproof motorized enclosure with manual handwheel override',
    ],
    keyBenefits: [
      'Maintains stable stem positioning accuracy under extreme thermal expansion cycles',
      'Metal-to-metal hardened seating withstands hot steam wire-drawing and thermal shock',
      'Eliminates compressed air lines in high-temperature furnace and boiler zones',
      '100% factory pressure-tested and calibrated to IEC 60534 leakage standards',
    ],
    overview:
      'Valve Bridge offers High Temperature Motorized Control Valves engineered for industrial processes requiring accurate flow regulation under elevated thermal conditions up to +550°C. Featuring alloy steel WC6/WC9 or stainless castings paired with Stellite hardfaced trim and heat-dissipating extended bonnets, the heavy-duty electric actuator enables seamless PLC and DCS modulation for steam, thermal oil, furnaces, and power boilers.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN300 (1/2" to 12")' },
      { label: 'Pressure Rating', value: 'PN16, PN25, PN40, PN64 / ANSI Class 150, 300 & 600' },
      { label: 'Body Material', value: 'Cast Steel (WCB), WC6, WC9, SS304, SS316, SS316L' },
      { label: 'Trim Material', value: 'SS304, SS316, Hardened Stainless Steel, Stellite Trim' },
      { label: 'Seat Material', value: 'Metal Seat (Soft Seat Optional for Lower Temperatures)' },
      { label: 'End Connection', value: 'Flanged, Butt Weld, Socket Weld' },
      { label: 'Actuator Type', value: 'Electric / Motorized Actuator' },
      { label: 'Power Supply', value: '24V DC, 110V AC, 230V AC, 415V AC' },
      { label: 'Control Signal', value: '4–20 mA, 0–10 V, Modbus RTU (Optional)' },
      { label: 'Protection Class', value: 'IP67 / IP68 Weatherproof' },
      { label: 'Temperature Range', value: '-29°C to +550°C' },
      { label: 'Leakage Class', value: 'ANSI Class IV, V, VI (As Required)' },
      { label: 'Design Standards', value: 'IEC 60534, ASME B16.34, ISA S75, ISO 5211' },
    ],
    suitableMedia: ['Superheated Steam', 'Thermal Heat Transfer Oil', 'Boiler Feedwater', 'Hot Furnace Gas', 'High-Temp Hydrocarbons'],
    industries: ['Power Generation', 'Refineries & Petrochemicals', 'Thermal Oil Systems', 'Boilers & Furnaces', 'Chemical Processing'],
  },
  {
    id: 'ptfe-lined-control-valve',
    typeNumber: 14,
    name: 'PFA/PTFE Lined Control Valve',
    category: 'pneumatic',
    subCategory: 'lined',
    operationType: 'Pneumatic / Electric Lined',
    categoryLabel: 'Corrosive Service / Virgin PTFE & PFA Lined',
    tagline: 'Heavy fluoropolymer-lined globe control valve providing complete chemical immunity for strong acids, alkalis, and solvents',
    image: '/assets/products/alis-control-valves/control-valve-14-ptfe-lined-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/ptfe-lined-control-valve/',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'PN16, PN25, PN40 / ANSI Class 150 & 300',
    bodyMaterial: 'Cast Steel WCB / SS304 / SS316 with Virgin PTFE Lining',
    trimMaterial: 'PTFE / PFA Lined SS304 / SS316 Contoured Plug & Seat',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / V / VI (Bubble Tight)',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Pneumatic Diaphragm or Electric Modulating Actuator (4–20 mA / 0–10 V)',
    tempRange: '-20°C to +180°C',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA S75',
    endConnection: 'Flanged ASME B16.5 Class 150 / 300 / DIN PN16–40',
    highlights: [
      'Internal Virgin PTFE/PFA barrier completely isolates metal housing from corrosive media',
      'Zero permeation fluoropolymer bellows stem seal prevents hazardous chemical fugitive leaks',
      'Suitable for hydrochloric, sulfuric, nitric acids, alkalis, and chlorinated solvents',
      'Spark-tested lining integrity for continuous zero-pinhole chemical service',
    ],
    keyBenefits: [
      'Cost-effective alternative to exotic Hastelloy, Zirconium, and Titanium alloy valves',
      'Non-stick hydrophobic fluoropolymer surface prevents crystallization and scaling on trim',
      'Interchangeable pneumatic or electric actuation for 4–20 mA automatic dosing loops',
      'Achieves Class VI bubble-tight shutoff even after thousands of acid throttling cycles',
    ],
    overview:
      'Valve Bridge supplies PFA/PTFE Lined Control Valves engineered for highly corrosive and aggressive chemical process applications. Featuring a thick internal virgin PTFE or PFA lining locked into a rigid WCB or stainless outer pressure housing, these valves isolate wetted areas from strong acids, alkalis, and solvents while delivering precise 4–20 mA modulating control.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN300 (1/2" to 12")' },
      { label: 'Pressure Rating', value: 'PN16, PN25, PN40 / ANSI Class 150 & 300' },
      { label: 'Body Material', value: 'Cast Steel (WCB), SS304, SS316 with PTFE Lining' },
      { label: 'Lining Material', value: 'Virgin PTFE / PFA' },
      { label: 'Trim Material', value: 'PTFE Lined SS304 / SS316' },
      { label: 'Actuation', value: 'Pneumatic Diaphragm / Electric Actuator' },
      { label: 'Control Signal', value: '4–20 mA, 0–10 V' },
      { label: 'Temperature Range', value: '-20°C to +180°C' },
      { label: 'Leakage Class', value: 'ANSI Class IV, V, VI (As Required)' },
      { label: 'Design Standards', value: 'IEC 60534, ASME B16.34, ISA S75' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Sulfuric & Hydrochloric Acid', 'Sodium Hydroxide Alkalis', 'Chlorinated Solvents', 'Ammonia Solutions', 'Brine Electrolytes'],
    industries: ['Chemical Processing Plants', 'Pharmaceutical Synthesis', 'Fertilizer & Acid Units', 'Water Demineralization', 'Specialty Chemicals'],
  },
  {
    id: 'pneumatic-angle-seat-valve-3',
    typeNumber: 15,
    name: 'Pneumatic Angle Seat Valve (Piston Actuated)',
    category: 'pneumatic',
    subCategory: 'angle',
    operationType: 'Pneumatic Piston',
    categoryLabel: 'Pneumatic Piston / High-Cycle Angle Seat',
    tagline: 'Fast-acting stainless steel piston-operated angle seat valve with straight-through high-Cv flow path for steam, air, and water',
    image: '/assets/products/alis-control-valves/control-valve-15-pneumatic-angle-seat-valve-3.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-angle-seat-valve-3/',
    sizeRange: '1/2" to 3" (DN15 – DN80)',
    pressureClass: 'PN16 / PN25 (Up to 16–25 Bar)',
    bodyMaterial: 'Investment Cast SS304 / SS316 Stainless Steel',
    trimMaterial: 'SS316 Stem & Contoured Plug with Virgin PTFE Seat Seal',
    seatLeakage: 'ANSI/FCI 70-2 Class VI Bubble-Tight Shutoff',
    flowCharacteristic: 'High-Cv Fast Switching On-Off / Proportioning',
    actuation: 'Compact Pneumatic Piston Actuator (Single or Double Acting)',
    tempRange: '-10°C to +180°C (Steam Rated PTFE Packing)',
    designStandard: 'DIN / ISO 5211 / NAMUR Pilot Port',
    endConnection: 'Flanged / Butt Weld / Tri-Clamp / BSP-NPT',
    highlights: [
      'Angled Y-seat flow path delivers up to 30% higher flow rate than conventional globe valves',
      'Over 1,000,000+ trouble-free high-frequency switching cycles with self-adjusting PTFE gland',
      '360-degree rotatable pneumatic actuator head simplifies compact skid air piping',
      'Visual optical position indicator and dampened closing eliminate water hammer',
    ],
    keyBenefits: [
      'Fast pneumatic switching response ideal for batching, CIP sterilizers, and autoclaves',
      'Compact corrosion-resistant SS316 body withstands continuous saturated steam service',
      'Spring-return Normally Closed (NC) fail-safe operation on compressed air loss',
      'Maintenance-free stem packing guarantees long life in automated packaging lines',
    ],
    overview:
      'Valve Bridge Pneumatic Angle Seat Valve combines an investment-cast SS304/SS316 angled body with a fast-response pneumatic piston actuator. Designed for high-frequency switching and minimal pressure drop, its straight-through angled waterway prevents water hammer and excels in saturated steam, compressed air, food sterilization, and textile dyeing systems.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN80 (1/2" to 3")' },
      { label: 'Pressure Rating', value: '0 to 16 Bar / PN25 (Media Dependent)' },
      { label: 'Body Material', value: 'Investment Cast SS304 / SS316' },
      { label: 'Seat & Packing Seal', value: 'Virgin PTFE Self-Adjusting Chevron Rings' },
      { label: 'Actuator Body', value: 'Polyamide / Anodized Aluminum / Stainless Piston' },
      { label: 'Pilot Air Pressure', value: '3.0 to 8.0 Bar Dry Compressed Air' },
      { label: 'Action Type', value: 'Normally Closed (NC) / Normally Open (NO) / Double Acting' },
      { label: 'Media Temperature', value: '-10°C to +180°C' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Saturated Steam', 'Hot & Cold Water', 'Compressed Air', 'Inert Gases', 'Clean Chemical Media'],
    industries: ['Steam Sterilization & Autoclaves', 'Food & Beverage Packaging', 'Textile Dyeing Machines', 'Pharmaceutical Cleanrooms', 'Industrial Automation'],
  },
  {
    id: 'pneumatic-angle-seat-valve',
    typeNumber: 16,
    name: 'Pneumatic Angle Seat Valve (Threaded / Screwed)',
    category: 'pneumatic',
    subCategory: 'angle',
    operationType: 'Pneumatic Piston',
    categoryLabel: 'Pneumatic Piston / Screwed BSP-NPT Angle Seat',
    tagline: 'Compact BSP/NPT threaded stainless steel pneumatic angle seat valve with external Namur/pilot solenoid interface',
    image: '/assets/products/alis-control-valves/control-valve-16-pneumatic-angle-seat-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-angle-seat-valve/',
    sizeRange: '3/8" to 2-1/2" (DN10 – DN65)',
    pressureClass: 'PN16 (Max Working Pressure 16 Bar)',
    bodyMaterial: 'SS304 / SS316 / SS316L / Duplex Stainless Steel',
    trimMaterial: 'SS316 Plug with Reinforced PTFE Elastomer Disc',
    seatLeakage: 'Zero Bubble Leakage (IEC 60534-4 Class VI)',
    flowCharacteristic: 'Low-Resistance Angle Flow Path',
    actuation: 'Single-Acting Spring Return or Double-Acting Pneumatic Piston',
    tempRange: '-10°C to +180°C',
    designStandard: 'ISO 228 BSPP / ASME B1.20.1 NPT',
    endConnection: 'Female Screwed / Threaded BSP or NPT',
    highlights: [
      'Available in SS304, SS316, SS316L, and Duplex grades for corrosive utility lines',
      'Anti-water-hammer flow-under-seat option closes smoothly against line flow',
      'Easy threaded installation into compact OEM machinery manifolds and washdown skids',
      'High cycle endurance suited for rapid solenoid-piloted batch dosing',
    ],
    keyBenefits: [
      'Direct threaded body removes companion flange weight and saves manifold space',
      'Available in Normally Closed, Normally Open, or Double-Acting fail-safe designs',
      'Handles high viscosity liquids, steam, compressed air, and mild chemical streams',
      'Compatible with direct-mount 3/2 solenoid valves and mechanical limit switch feedback',
    ],
    overview:
      'Valve Bridge Screwed Pneumatic Angle Seat Valves provide compact, high-cycle automated flow shutoff for steam, washing systems, and chemical utility lines. With female BSP or NPT threaded ports and precision stainless steel metallurgy, the pneumatic piston actuator ensures crisp switching response and bubble-tight PTFE sealing.',
    specsTable: [
      { label: 'Size Range', value: 'DN10 to DN65 (3/8" to 2-1/2")' },
      { label: 'Body Material', value: 'SS304 / SS316 / SS316L / Duplex SS' },
      { label: 'End Connection', value: 'Female Threaded BSP / NPT' },
      { label: 'Working Pressure', value: 'Up to 16 Bar' },
      { label: 'Pilot Air Supply', value: '3 to 7 Bar' },
      { label: 'Seat Seal', value: 'Virgin PTFE / FKM Optional' },
      { label: 'Temperature Range', value: '-10°C to +180°C' },
      { label: 'Actuator Configuration', value: 'Normally Closed / Normally Open / Double Acting' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Process Steam', 'Washdown Water', 'Compressed Air', 'Mild Acids & Brine', 'Alcohol & Solvents'],
    industries: ['Industrial Washing Systems', 'OEM Machinery Skids', 'Food & Dairy Utilities', 'Chemical Dosing Lines', 'Water Treatment'],
  },
  {
    id: 'pneumatic-angle-seat-valve-2',
    typeNumber: 17,
    name: 'Pneumatic Angle Seat Valve (SS316 Stainless Actuator)',
    category: 'pneumatic',
    subCategory: 'angle',
    operationType: 'All-SS316 Pneumatic',
    categoryLabel: 'All Stainless Steel / Sanitary Washdown Angle Seat',
    tagline: 'Full SS316 stainless steel body and stainless piston actuator housing designed for washdown pharmaceutical and food environments',
    image: '/assets/products/alis-control-valves/control-valve-17-pneumatic-angle-seat-valve-2.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-angle-seat-valve-2/',
    sizeRange: '1/2" to 2-1/2" (DN15 – DN65)',
    pressureClass: 'PN16 / 16 Bar Max Working Pressure',
    bodyMaterial: 'Investment Cast SS316 / SS316L Hygienic Body',
    trimMaterial: 'Precision Machined SS316L Stem with FDA PTFE Seat',
    seatLeakage: 'Class VI Zero Leakage (Sanitary Bubble-Tight)',
    flowCharacteristic: 'Smooth Self-Draining Angled Geometry',
    actuation: 'All-Stainless Steel SS304/316 Pneumatic Piston Actuator',
    tempRange: '-10°C to +180°C (CIP / SIP Compatible)',
    designStandard: 'ISO / SMS / 3A Hygienic Material Grade',
    endConnection: 'Tri-Clamp (TC) / Butt Weld / Threaded / Flanged',
    highlights: [
      'Full stainless steel actuator cylinder resists external caustic CIP washdowns',
      'Clean-In-Place (CIP) and Steam-In-Place (SIP) sterilized up to +180°C',
      'High-visibility 360° stainless optical stem indicator on top of cylinder',
      'Polished crevice-free internals prevent bacterial entrapment in biotech lines',
    ],
    keyBenefits: [
      'Outlasts plastic-headed actuators in corrosive cleanrooms and aggressive caustic wash areas',
      'Zero leakage PTFE seal prevents cross-contamination across filling manifolds',
      'High cycle rating supports millions of sanitary filling and dosing cycles',
      'Selectable NC/NO spring return guarantees fail-safe hygienic line isolation',
    ],
    overview:
      'Valve Bridge All-Stainless Pneumatic Angle Seat Valve features both an SS316 body and an external stainless steel pneumatic actuator cylinder. Specifically tailored for pharmaceutical, biotech, food, beverage, and aggressive caustic washdown zones, it withstands continuous CIP/SIP steam cycles with zero external corrosion.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN65 (1/2" to 2-1/2")' },
      { label: 'Valve Body & Actuator', value: 'All Stainless Steel SS316 / SS316L' },
      { label: 'End Connections', value: 'Tri-Clamp / Threaded / Flanged / Weld End' },
      { label: 'Working Pressure', value: 'Up to 16 Bar' },
      { label: 'Pilot Air Pressure', value: '3.5 to 8 Bar' },
      { label: 'Seal Material', value: 'FDA Grade Virgin PTFE' },
      { label: 'Operating Temperature', value: '-10°C to +180°C' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Purified & WFI Water', 'Clean Steam (SIP)', 'CIP Caustic Solutions', 'Liquid Foods & Dairy', 'Biotech Media'],
    industries: ['Pharmaceutical Plants', 'Biotechnology Suites', 'Dairy & Beverage Bottling', 'Cosmetics Manufacturing', 'Sanitary Skid OEMs'],
  },
  {
    id: 'pneumatic-diaphragm-globe-control-valve',
    typeNumber: 18,
    name: 'Pneumatic Diaphragm Globe Control Valve',
    category: 'pneumatic',
    subCategory: 'globe',
    operationType: 'Pneumatic Diaphragm',
    categoryLabel: 'Pneumatic Diaphragm / Top-Guided Globe Control',
    tagline: 'Versatile multi-spring pneumatic diaphragm globe valve accepting 3–15 PSI or 4–20 mA signals for continuous flow, pressure, and temperature modulation',
    image: '/assets/products/alis-control-valves/control-valve-18-pneumatic-diaphragm-globe-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/pneumatic-diaphragm-globe-control-valve/',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'PN16 – PN40 / ANSI Class 150 & 300',
    bodyMaterial: 'WCB / CF8 / CF8M / SS304 / SS316 / Duplex',
    trimMaterial: 'SS304 / SS316 / Stellite Hardfaced Contoured Plug',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Multi-Spring Pneumatic Diaphragm Actuator (3–6 Bar Supply)',
    tempRange: '-20°C to +425°C',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA 75.01',
    endConnection: 'Flanged ASME B16.5 / EN 1092-1',
    highlights: [
      'Direct 3–15 PSI pneumatic or 4–20 mA control signal via electro-pneumatic positioner',
      'Multi-spring diaphragm design delivers smooth low-hysteresis stem modulation',
      'Available in Air-to-Open (Fail Close) or Air-to-Close (Fail Open) spring action',
      'Quick-exchangeable contoured plugs support Linear or Equal Percentage flow curves',
    ],
    keyBenefits: [
      'Reliable workhorse globe control valve for steam, water, oil, gas, and chemicals',
      'Low friction spring-loaded PTFE/graphite stem packing minimizes deadband',
      'Supports optional top-mounted handwheel for manual throttling during startup',
      '100% factory hydro-tested and loop-stroked to ANSI FCI 70-2 shutoff ratings',
    ],
    overview:
      'Valve Bridge offers Pneumatic Diaphragm Globe Control Valves designed for precise continuous flow, pressure, temperature, and level modulation. A multi-spring rolling diaphragm actuator converts 3–15 PSI or 4–20 mA control signals into smooth, accurate linear plug travel inside a rugged globe body.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN300 (1/2" to 12")' },
      { label: 'Body Material', value: 'WCB / CF8 / CF8M / SS304 / SS316' },
      { label: 'Trim Material', value: 'SS304 / SS316 / Stellite' },
      { label: 'Seat Material', value: 'Metal Seat / Soft Seat' },
      { label: 'Air Supply Pressure', value: '3 to 6 Bar' },
      { label: 'Input Signal', value: '3–15 PSI / 4–20 mA (With Electro-Pneumatic Positioner)' },
      { label: 'Leakage Class', value: 'ANSI/FCI 70-2 Class IV / V / VI' },
      { label: 'Design Standards', value: 'IEC 60534, ASME B16.34' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Water & Steam', 'Compressed Air & Gas', 'Thermal Oils', 'Industrial Chemicals', 'Fuel Oils'],
    industries: ['Chemical Processing', 'Power Generation', 'Water & Effluent Treatment', 'Oil & Gas Utilities', 'Steam Distribution'],
  },
  {
    id: 'ptfe-pfa-lined-pneumatic-control-valve',
    typeNumber: 19,
    name: 'PTFE/PFA Lined Pneumatic Control Valve',
    category: 'pneumatic',
    subCategory: 'lined',
    operationType: 'Pneumatic Lined',
    categoryLabel: 'Corrosive Chemical / PTFE-PFA Lined Pneumatic',
    tagline: 'Virgin PTFE/PFA fluoropolymer-lined body automated with pneumatic diaphragm/piston actuator and smart positioner for strong acids',
    image: '/assets/products/alis-control-valves/control-valve-19-ptfe-pfa-lined-pneumatic-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/ptfe-pfa-lined-pneumatic-control-valve/',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'PN16, PN25, PN40 / ANSI Class 150 & 300',
    bodyMaterial: 'Carbon Steel WCB / SS304 / SS316 with Virgin PTFE/PFA Lining',
    trimMaterial: 'Virgin PTFE / PFA Lined Plug & Bellows Sealed Stem',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / V / VI (Bubble Tight)',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Pneumatic Diaphragm or Piston Actuator with 4–20 mA Positioner',
    tempRange: '-20°C to +200°C (Lining Dependent)',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA S75 / ISO 5211',
    endConnection: 'Flanged ASME B16.5 Class 150 / 300 / DIN PN16–40',
    highlights: [
      'Complete Virgin PTFE/PFA wetted lining blocks strong acid and chlorinated solvent attack',
      'Dual PTFE bellows + secondary V-ring safety packing guarantees zero fugitive emissions',
      'Equipped with smart electro-pneumatic positioner, AFR, and optional limit switches',
      'Fast pneumatic fail-safe spring action protects acid reactors during air/power loss',
    ],
    keyBenefits: [
      'Eliminates stress-corrosion cracking and pitting in hydrochloric & nitric acid lines',
      'Pre-piped pneumatic instrumentation package ready for immediate chemical plant hookup',
      'Full-thickness bonded lining prevents collapse even under moderate vacuum conditions',
      'Dramatically lowers total ownership cost vs exotic alloy control valves',
    ],
    overview:
      'Valve Bridge PTFE/PFA Lined Pneumatic Control Valve pairs a heavy fluoropolymer-lined chemical globe body with a rapid-response pneumatic diaphragm actuator and 4–20 mA smart positioner. Engineered for lethal or ultra-corrosive acids, alkalis, and chlorinated solvents in chemical and pharmaceutical plants.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN300 (1/2" to 12")' },
      { label: 'Pressure Rating', value: 'PN16, PN25, PN40 / ANSI Class 150 & 300' },
      { label: 'Body Material', value: 'Carbon Steel (WCB), SS304, SS316 with PTFE/PFA Lining' },
      { label: 'Lining Material', value: 'Virgin PTFE / Virgin PFA' },
      { label: 'Seat Material', value: 'PTFE / PFA' },
      { label: 'Actuator Type', value: 'Pneumatic Diaphragm / Pneumatic Piston' },
      { label: 'Air Supply Pressure', value: '3 to 7 Bar' },
      { label: 'Control Signal', value: '4–20 mA with Electro-Pneumatic Positioner / 3–15 PSI' },
      { label: 'Accessories', value: 'Positioner, Air Filter Regulator (AFR), Solenoid, Limit Switch' },
      { label: 'Temperature Range', value: '-20°C to +200°C' },
      { label: 'Leakage Class', value: 'ANSI Class IV, V, VI' },
      { label: 'Design Standards', value: 'IEC 60534, ASME B16.34, ISA S75, ISO 5211' },
    ],
    suitableMedia: ['Hydrochloric Acid (HCl)', 'Concentrated Sulfuric Acid', 'Sodium Hypochlorite', 'Chlorinated Solvents', 'Corrosive Agrochemicals'],
    industries: ['Chemical Manufacturing', 'Pharmaceutical API Plants', 'Fertilizer Acid Units', 'Chlor-Alkali Electrolysis', 'Industrial Effluent Treatment'],
  },
  {
    id: 'single-seated-globe-control-valve',
    typeNumber: 20,
    name: 'Single Seated Globe Control Valve',
    category: 'pneumatic',
    subCategory: 'globe',
    operationType: 'Pneumatic / Electric Single-Seat',
    categoryLabel: 'Single Seated Globe / High Accuracy Throttling',
    tagline: 'Single-seat contoured plug globe control valve delivering tight Class IV–VI shutoff and precise low-flow modulation',
    image: '/assets/products/alis-control-valves/control-valve-20-single-seated-globe-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/single-seated-globe-control-valve/',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'PN16 – PN64 / ANSI Class 150, 300 & 600',
    bodyMaterial: 'Cast Iron / Cast Steel WCB / SS304 / SS316 / SS316L',
    trimMaterial: 'SS304 / SS316 / Hardened Stainless Steel Single Plug',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear / Quick Opening',
    actuation: 'Pneumatic Diaphragm or Electric Modulating Actuator',
    tempRange: '-20°C to +450°C (Seat Material Dependent)',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA S75',
    endConnection: 'Flanged / Threaded / Socket Weld / Butt Weld',
    highlights: [
      'Unbalanced single-seat orifice delivers far tighter shutoff than double-seated bodies',
      'Simple top-guided plug design simplifies disassembly, cleaning, and seat replacement',
      'Configurable with micro-trim plugs for very low Cv dosing and laboratory flow accuracy',
      'Compatible with both pneumatic (4–20 mA) and electric (0–10V / 4–20 mA) actuators',
    ],
    keyBenefits: [
      'Ensures minimal process fluid leakage when closed for batch isolation and safety',
      'High rangeability (>30:1) provides fine control across low and high flow setpoints',
      'Broad metallurgy options cover mild utilities up to 450°C superheated steam',
      'Compact valve envelope fits effortlessly into tight plant skids and headers',
    ],
    overview:
      'Valve Bridge Single Seated Globe Control Valves are engineered for applications demanding tight seat shutoff and accurate throttling response. Using a single movable plug against a single precision seat ring, they minimize bypass leakage while offering straightforward trim servicing across chemical, steam, and water control loops.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN300 (1/2" to 12")' },
      { label: 'Pressure Rating', value: 'PN16, PN25, PN40, PN64 / ANSI Class 150, 300 & 600' },
      { label: 'Body Material', value: 'Cast Iron, Cast Steel (WCB), SS304, SS316, SS316L' },
      { label: 'Trim Material', value: 'SS304, SS316, Hardened Stainless Steel' },
      { label: 'Seat Material', value: 'Metal Seat / Soft Seat (Application Dependent)' },
      { label: 'End Connection', value: 'Flanged, Threaded, Socket Weld, Butt Weld' },
      { label: 'Actuation', value: 'Pneumatic / Electric' },
      { label: 'Control Signal', value: '4–20 mA, 0–10 V' },
      { label: 'Temperature Range', value: '-20°C to +450°C' },
      { label: 'Leakage Class', value: 'ANSI Class IV, V, VI' },
      { label: 'Design Standards', value: 'IEC 60534, ASME B16.34, ISA S75' },
    ],
    suitableMedia: ['Saturated & Superheated Steam', 'Process Water', 'Light Hydrocarbons', 'Ammonia & Inert Gas', 'Process Solvents'],
    industries: ['Chemical Processing', 'Oil & Gas Refineries', 'Power Generation', 'Food & Pharmaceutical', 'Water Utilities'],
  },
  {
    id: 'single-seated-lined-control-valve-2',
    typeNumber: 21,
    name: 'Single Seated Lined Control Valve',
    category: 'pneumatic',
    subCategory: 'lined',
    operationType: 'Single-Seat PTFE/PFA Lined',
    categoryLabel: 'Single Seated / Acid-Proof PTFE-PFA Lined',
    tagline: 'Single-seat contoured plug control valve with integral Virgin PTFE/PFA internal lining for tight shutoff on aggressive acids',
    image: '/assets/products/alis-control-valves/control-valve-21-single-seated-lined-control-valve-2.png',
    sourceUrl: 'https://alisvalves.com/product/single-seated-lined-control-valve-2/',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'PN16, PN25, PN40 / ANSI Class 150 & 300',
    bodyMaterial: 'Carbon Steel WCB / SS304 / SS316 with PTFE/PFA Lining',
    trimMaterial: 'PTFE / PFA Lined SS304 / SS316 Single Plug & Seat',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / V / VI (Bubble Tight)',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Pneumatic Diaphragm or Electric Actuator (4–20 mA / 0–10 V)',
    tempRange: '-20°C to +200°C (Lining Dependent)',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA S75',
    endConnection: 'Flanged ASME B16.5 Class 150 / 300',
    highlights: [
      'Single-seat PTFE/PFA plug achieves bubble-tight Class VI acid isolation',
      'Full internal fluoropolymer lining prevents metal-acid contact everywhere in flow path',
      'PTFE bellows stem seal avoids hazardous vapor leakage into plant atmosphere',
      'Configurable with pneumatic or electric modulating actuators',
    ],
    keyBenefits: [
      'Accurate throttling and dependable zero-drop shutoff in lethal acid pipelines',
      'Non-wetting smooth fluoropolymer bore resists chemical crystal adhesion',
      'Simple replaceable lined trim cartridge speeds preventive plant turnarounds',
      'Certified spark-tested barrier provides years of leak-free corrosive operation',
    ],
    overview:
      'Valve Bridge Single Seated Lined Control Valve combines the tight single-seat closure geometry of a precision globe valve with a chemical-proof Virgin PTFE or PFA lining. Specifically designed for toxic acids, alkalis, and specialty chemical reactors requiring fine flow regulation and zero leakage.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN300 (1/2" to 12")' },
      { label: 'Pressure Rating', value: 'PN16, PN25, PN40 / ANSI Class 150 & 300' },
      { label: 'Body Material', value: 'Carbon Steel (WCB), SS304, SS316 with PTFE/PFA Lining' },
      { label: 'Lining Material', value: 'PTFE / PFA' },
      { label: 'Trim Material', value: 'PTFE/PFA Lined SS304 / SS316' },
      { label: 'Seat Material', value: 'PTFE / PFA' },
      { label: 'Actuation', value: 'Pneumatic / Electric' },
      { label: 'Control Signal', value: '4–20 mA, 0–10 V' },
      { label: 'Temperature Range', value: '-20°C to +200°C' },
      { label: 'Leakage Class', value: 'ANSI Class IV, V, VI' },
      { label: 'Design Standards', value: 'IEC 60534, ASME B16.34, ISA S75' },
    ],
    suitableMedia: ['Hydrofluoric & Nitric Acids', 'Ferric Chloride', 'Acidic Etchants', 'Corrosive Brines', 'Organic Solvents'],
    industries: ['Chemical & Acid Plants', 'Semiconductor & Electronics', 'Pharmaceutical API', 'Fertilizer Scrubbers', 'Effluent Neutralization'],
  },
  {
    id: 'single-seated-pneumatic-control-valve',
    typeNumber: 22,
    name: 'Single Seated Pneumatic Control Valve',
    category: 'pneumatic',
    subCategory: 'globe',
    operationType: 'Pneumatic Diaphragm / Piston',
    categoryLabel: 'Single Seated / Complete Pneumatic Control Package',
    tagline: 'Precision single-seated globe valve fitted with responsive pneumatic actuator, smart positioner, and AFR for tight loop modulation',
    image: '/assets/products/alis-control-valves/control-valve-22-single-seated-pneumatic-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/single-seated-pneumatic-control-valve/',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'PN16 – PN64 / ANSI Class 150, 300 & 600',
    bodyMaterial: 'Cast Iron / Carbon Steel WCB / SS304 / SS316 / SS316L',
    trimMaterial: 'SS304 / SS316 / Hardened Stainless Steel / Stellite',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / V / VI',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Pneumatic Diaphragm or Piston Actuator (3–7 Bar Air Supply)',
    tempRange: '-20°C to +450°C',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA S75 / ISO 5211',
    endConnection: 'Flanged / Threaded / Socket Weld / Butt Weld',
    highlights: [
      'Complete pre-calibrated package with electro-pneumatic positioner and Air Filter Regulator',
      'Fast pneumatic positioning response (<1 sec) for pressure, flow, and temperature loops',
      'Selectable Fail-Open, Fail-Closed, or Fail-In-Place safety action on air loss',
      'Available with Stellite hardfaced trim for erosive steam letdown conditions',
    ],
    keyBenefits: [
      'Single-seat trim minimizes seat bypass leakage in critical continuous processes',
      'Direct-mount NAMUR positioner, solenoid, and limit switches simplify field wiring',
      'Straightforward top-entry maintenance lowers plant downtime',
      '100% factory stroke-calibrated and hydrostatically tested prior to shipping',
    ],
    overview:
      'Valve Bridge Single Seated Pneumatic Control Valve integrates a high-accuracy single-seat globe valve body with a responsive pneumatic diaphragm or piston actuator and 4–20 mA smart positioner. Engineered for fast loop control, dependable fail-safe shutoff, and effortless field commissioning across oil & gas, chemical, and power utilities.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN300 (1/2" to 12")' },
      { label: 'Pressure Rating', value: 'PN16, PN25, PN40, PN64 / ANSI Class 150, 300 & 600' },
      { label: 'Body Material', value: 'Cast Iron, Carbon Steel (WCB), SS304, SS316, SS316L' },
      { label: 'Trim Material', value: 'SS304, SS316, Hardened SS, Stellite Trim (Optional)' },
      { label: 'Seat Material', value: 'Metal Seat / Soft Seat' },
      { label: 'End Connection', value: 'Flanged, Threaded, Socket Weld, Butt Weld' },
      { label: 'Actuator Type', value: 'Pneumatic Diaphragm / Pneumatic Piston' },
      { label: 'Air Supply Pressure', value: '3 to 7 Bar' },
      { label: 'Control Signal', value: '4–20 mA with Electro-Pneumatic Positioner / 3–15 PSI' },
      { label: 'Accessories', value: 'Positioner, AFR, Solenoid Valve, Limit Switch, Transmitter' },
      { label: 'Temperature Range', value: '-20°C to +450°C' },
      { label: 'Leakage Class', value: 'ANSI Class IV, V, VI' },
    ],
    suitableMedia: ['Industrial Steam', 'Fuel & Process Gas', 'Deionized & Utility Water', 'Refinery Distillates', 'Heat Transfer Fluids'],
    industries: ['Oil & Gas Facilities', 'Petrochemical Refineries', 'Power Plants', 'Chemical Manufacturing', 'Industrial Automation'],
  },
  {
    id: 'stainless-steel-globe-control-valve',
    typeNumber: 23,
    name: 'Stainless Steel Globe Control Valve',
    category: 'pneumatic',
    subCategory: 'globe',
    operationType: 'All-SS304/SS316 Globe',
    categoryLabel: 'Stainless Steel / Corrosion-Resistant Globe Control',
    tagline: 'Investment cast & forged SS304, SS316, and SS316L globe control valve for corrosive chemical, food, and pharmaceutical loops',
    image: '/assets/products/alis-control-valves/control-valve-23-stainless-steel-globe-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/stainless-steel-globe-control-valve/',
    sizeRange: '1/2" to 12" (DN15 – DN300)',
    pressureClass: 'PN16 – PN64 / ANSI Class 150, 300 & 600',
    bodyMaterial: 'SS304 / SS316 / SS316L / CF8 / CF8M Stainless Steel',
    trimMaterial: 'SS304 / SS316 / Hardened Stainless Steel / Stellite',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / Class V / Class VI',
    flowCharacteristic: 'Equal Percentage / Linear',
    actuation: 'Pneumatic Diaphragm / Electric Modulating Actuator (4–20 mA / 0–10 V)',
    tempRange: '-20°C to +450°C',
    designStandard: 'IEC 60534 / ASME B16.34 / ISA S75',
    endConnection: 'Flanged / Threaded / Socket Weld / Butt Weld',
    highlights: [
      '100% corrosion-resistant SS304, SS316, and low-carbon SS316L metallurgy',
      'Clean product-contact internals suited for food, pharma, and high-purity water',
      'Optional Stellite 6 hardfacing protects seat and plug in high-velocity steam service',
      'Configurable with pneumatic or motorized 4–20 mA precision actuators',
    ],
    keyBenefits: [
      'Eliminates iron contamination and rust scaling in ultra-pure and acidic processes',
      'Retains mechanical strength across cryogenic sub-zero and elevated steam temperatures',
      'Supports full EN 10204 3.1 PMI metallurgical traceability and heat numbers',
      'Long service life with low fugitive emission spring-loaded PTFE stem packing',
    ],
    overview:
      'Valve Bridge Stainless Steel Globe Control Valves are precision manufactured in SS304, SS316, and SS316L for corrosive, sanitary, and high-purity process regulation. Delivering tight Class IV–VI shutoff and smooth equal percentage or linear flow control, they integrate seamlessly with pneumatic and electric automation loops.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN300 (1/2" to 12")' },
      { label: 'Pressure Rating', value: 'PN16, PN25, PN40, PN64 / ANSI Class 150, 300 & 600' },
      { label: 'Body Material', value: 'SS304, SS316, SS316L, CF8, CF8M' },
      { label: 'Trim Material', value: 'SS304, SS316, Hardened Stainless Steel, Stellite Trim' },
      { label: 'Seat Material', value: 'Metal Seat / Soft Seat' },
      { label: 'End Connection', value: 'Flanged, Threaded, Socket Weld, Butt Weld' },
      { label: 'Actuation', value: 'Pneumatic / Electric' },
      { label: 'Control Signal', value: '4–20 mA, 0–10 V' },
      { label: 'Temperature Range', value: '-20°C to +450°C' },
      { label: 'Leakage Class', value: 'ANSI Class IV, V, VI' },
      { label: 'Design Standards', value: 'IEC 60534, ASME B16.34, ISA S75' },
    ],
    suitableMedia: ['Dilute Organic Acids', 'Deionized & Pure Water', 'Process Steam', 'Liquid Food & Beverage', 'Ammonia & Solvents'],
    industries: ['Chemical Processing', 'Pharmaceutical Plants', 'Food & Beverage Production', 'Desalination & RO Water', 'Oil & Gas Processing'],
  },
  {
    id: 'y-type-screwed-control-valve',
    typeNumber: 24,
    name: 'Y Type Screwed Control Valve',
    category: 'pneumatic',
    subCategory: 'y-type',
    operationType: 'Pneumatic / Electric Y-Body',
    categoryLabel: 'Compact Screwed / Streamlined Y-Pattern Control',
    tagline: 'Threaded BSP/NPT 45-degree Y-pattern control valve offering streamlined high-Cv flow and reduced head loss in compact piping',
    image: '/assets/products/alis-control-valves/control-valve-24-y-type-screwed-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/y-type-screwed-control-valve/',
    sizeRange: '1/2" to 4" (DN15 – DN100)',
    pressureClass: 'PN16 / PN25 / Class 150 (Up to 16–25 Bar)',
    bodyMaterial: 'WCB / CF8 (SS304) / CF8M (SS316) / SS316L / Duplex SS',
    trimMaterial: 'SS316 / PTFE / PEEK / Metal / Graphite Seated Plug',
    seatLeakage: 'ANSI/FCI 70-2 Class IV / V / VI',
    flowCharacteristic: 'Equal Percentage / Linear Streamlined Flow',
    actuation: 'Pneumatic Diaphragm, Piston, or Electric Actuator with Positioner',
    tempRange: '-20°C to +220°C (Soft Seat) / +400°C (Metal Seat)',
    designStandard: 'IEC 60534 / ISO 228 BSP / ASME NPT',
    endConnection: 'Female Screwed / Threaded (BSP / NPT)',
    highlights: [
      'Streamlined Y-pattern passage significantly reduces turbulence and pressure loss',
      'Compact threaded end connections install easily in tight utility and skid headers',
      'Multiple seat options (PTFE, PEEK, Graphite, Metal) handle liquid, gas, and steam',
      'Compatible with pneumatic diaphragm, piston, and electric 4–20 mA actuators',
    ],
    keyBenefits: [
      'Delivers higher Cv flow capacity per pipe size than standard 90° screwed globe bodies',
      'Self-draining angled geometry reduces particulate accumulation and wire-drawing',
      'Quick thread-in installation eliminates heavy flange bolting in DN15–DN100 lines',
      'Precision contoured plug ensures non-hunting modulating stability',
    ],
    overview:
      'Valve Bridge Y Type Screwed Control Valve pairs a low-resistance 45-degree Y-pattern body with compact threaded BSP/NPT connections. Built in WCB, SS304, SS316, or Duplex stainless steel, it provides high flow capacity and accurate modulation of liquids, compressed air, gases, and steam.',
    specsTable: [
      { label: 'Size Range', value: '1/2" to 4" (DN15 to DN100)' },
      { label: 'Pressure Rating', value: 'PN16 / PN25 / ANSI Class 150' },
      { label: 'Body Material', value: 'WCB, LCB, CF8 (SS304), CF8M (SS316), Duplex SS' },
      { label: 'Seat Options', value: 'PTFE, PEEK, Graphite, Metal, Soft Seat' },
      { label: 'End Connection', value: 'Screwed / Threaded (BSP / NPT)' },
      { label: 'Actuation', value: 'Pneumatic Diaphragm / Piston / Electric + Positioner' },
      { label: 'Control Signal', value: '4–20 mA / 3–15 PSI' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Compressed Air & Inert Gas', 'Process Water', 'Heating Steam', 'Chemical Additives', 'Light Thermal Oils'],
    industries: ['Industrial Utilities', 'Water Treatment Skids', 'Heating & HVAC Plants', 'Chemical Dosing Packages', 'Compressed Air Headers'],
  },
  {
    id: 'y-type-tc-end-control-valve',
    typeNumber: 25,
    name: 'Y Type TC End Control Valve',
    category: 'pneumatic',
    subCategory: 'y-type',
    operationType: 'Sanitary TC End Y-Control',
    categoryLabel: 'Hygienic Sanitary / Tri-Clamp Y-Pattern Control',
    tagline: 'Hygienic SS304/SS316L electropolished Y-pattern control valve with quick-release Tri-Clamp ends for food, dairy, and pharma',
    image: '/assets/products/alis-control-valves/control-valve-25-y-type-tc-end-control-valve.png',
    sourceUrl: 'https://alisvalves.com/product/y-type-tc-end-control-valve/',
    sizeRange: '1/2" to 4" (DN15 – DN100)',
    pressureClass: 'PN10 / PN16 (Sanitary Hygienic Rating)',
    bodyMaterial: 'Mirror-Polished SS304 / SS316 / SS316L (Ra ≤ 0.8 µm)',
    trimMaterial: 'SS316L Contoured Plug with FDA PTFE / PEEK / Metal Seat',
    seatLeakage: 'Class VI Sanitary Bubble-Tight Isolation',
    flowCharacteristic: 'Streamlined Hygienic Linear / Equal Percentage',
    actuation: 'Pneumatic Actuator (3–6 Bar) with 3–15 PSI / 4–20 mA Positioner',
    tempRange: '-10°C to +180°C (CIP / SIP Sterilization Ready)',
    designStandard: 'SMS / DIN 11850 / ISO 2852 / 3-A Sanitary',
    endConnection: 'Sanitary Tri-Clamp (TC) Quick-Release Ferrule',
    highlights: [
      'Mirror-polished internal surface (Ra ≤ 0.8 µm / electropolished) prevents bacterial growth',
      'Quick-release Tri-Clamp (TC) ferrules enable tool-free removal and sanitation inspection',
      'Streamlined Y-pattern flow path minimizes dead-legs and product shear',
      'Fully compatible with automated Clean-In-Place (CIP) and Steam-In-Place (SIP) cycles',
    ],
    keyBenefits: [
      'Protects taste, sterility, and purity in beverage, dairy, and WFI pharmaceutical lines',
      'Precision 4–20 mA modulating positioner holds tight bottling and reactor flow setpoints',
      'Zero-crevice FDA PTFE/PEEK seating ensures clean shutoff between sterile batches',
      'Meets strict 3-A, SMS, DIN, and ISO sanitary traceability requirements',
    ],
    overview:
      'Valve Bridge Y Type TC End Control Valve is engineered specifically for hygienic and aseptic process lines in pharmaceutical, biotechnology, dairy, and beverage facilities. Combining an electropolished SS316L Y-pattern body with tool-free Tri-Clamp end connections, it delivers pinpoint flow control with effortless CIP/SIP cleanability.',
    specsTable: [
      { label: 'Size Range', value: 'DN15 to DN100 (1/2" to 4")' },
      { label: 'Body Material', value: 'SS304 / SS316 / SS316L' },
      { label: 'Surface Finish', value: 'Mirror Polish Ra ≤ 0.8 µm / Electropolished (Optional)' },
      { label: 'End Connection', value: 'Sanitary Tri-Clamp (TC End)' },
      { label: 'Seat Material', value: 'PTFE / PEEK / Metal (FDA Grade)' },
      { label: 'Air Supply (Pneumatic)', value: '3 to 6 Bar' },
      { label: 'Control Signal', value: '3–15 PSI / 4–20 mA (With Positioner)' },
      { label: 'Design Standard', value: 'SMS / DIN / ISO / 3A' },
      { label: 'Technical Data Sheet', value: 'Valve Bridge Certified Mill Specification' },
    ],
    suitableMedia: ['Milk & Dairy Products', 'Beverages & Juices', 'Purified Water & WFI', 'Liquid Pharmaceuticals', 'Cosmetic Emulsions'],
    industries: ['Pharmaceutical & Biotech', 'Food & Dairy Processing', 'Breweries & Beverage', 'Cosmetics Manufacturing', 'Hygienic Skid Systems'],
  },
];

export default function ControlValvesCategoryExperience({
  product,
  initialModelId,
}: Props) {
  const [activeFilter, setActiveFilter] = useState<ControlValveFilter>('all');
  const [selectedModalModel, setSelectedModalModel] =
    useState<ControlValveModel | null>(null);

  // If initialModelId provided, open it on load
  useEffect(() => {
    if (initialModelId) {
      const match = controlValvesCatalog.find((m) => m.id === initialModelId);
      if (match) setSelectedModalModel(match);
    }
  }, [initialModelId]);

  // Filtered list
  const filteredModels = controlValvesCatalog.filter((m) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'pneumatic') return m.category === 'pneumatic';
    if (activeFilter === 'electric') return m.category === 'electric';
    if (activeFilter === 'globe') return m.subCategory === 'globe';
    if (activeFilter === 'lined') return m.subCategory === 'lined';
    if (activeFilter === 'angle') return m.subCategory === 'angle';
    if (activeFilter === 'y-type') return m.subCategory === 'y-type';
    if (activeFilter === 'high-pressure') return m.subCategory === 'high-pressure';
    if (activeFilter === 'hydraulic') return m.subCategory === 'hydraulic' || m.subCategory === 'multi-port';
    return true;
  });

  const filterTabs: { id: ControlValveFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All 25 Control Valves', count: controlValvesCatalog.length },
    { id: 'pneumatic', label: 'Pneumatic Actuated', count: controlValvesCatalog.filter((m) => m.category === 'pneumatic').length },
    { id: 'electric', label: 'Electric & Motorized', count: controlValvesCatalog.filter((m) => m.category === 'electric').length },
    { id: 'globe', label: 'Globe & Cage Control', count: controlValvesCatalog.filter((m) => m.subCategory === 'globe').length },
    { id: 'lined', label: 'PTFE / PFA Lined', count: controlValvesCatalog.filter((m) => m.subCategory === 'lined').length },
    { id: 'y-type', label: 'Y-Type Control', count: controlValvesCatalog.filter((m) => m.subCategory === 'y-type').length },
    { id: 'angle', label: 'Angle & Angle Seat', count: controlValvesCatalog.filter((m) => m.subCategory === 'angle').length },
    { id: 'high-pressure', label: 'High Pressure & Temp', count: controlValvesCatalog.filter((m) => m.subCategory === 'high-pressure').length },
    { id: 'hydraulic', label: '3-Way & Hydraulic', count: controlValvesCatalog.filter((m) => m.subCategory === 'hydraulic' || m.subCategory === 'multi-port').length },
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
          <span className="text-navy font-semibold">Control Valve</span>
        </div>
      </div>

      {/* 2. Category Hero Banner (Identical layout to Actuator, Ball Valve and Butterfly Valve) */}
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
                  Control Valves
                </h1>
                <p className="mt-2 text-base sm:text-lg font-medium text-teal">
                  Accurate flow, pressure, temperature, and level regulation across critical industrial processes
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                  Valve Bridge delivers certified, mill-tested control valve solutions engineered for high differential pressure modulation, anti-cavitation energy dissipation, low aerodynamic noise, and bubble-tight shutoff. From cage-guided pneumatic diaphragm globe valves and 3-way mixing/diverting valves to high-pressure severe-service Class 2500# motorized steam packages.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Size Range</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">1/2&quot; to 24&quot; (DN600)</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pressure Range</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">Class 150–2500# / PN420</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Leakage Class</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-0.5">FCI 70-2 Class IV/V/VI</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Testing</div>
                  <div className="text-xs sm:text-sm font-bold text-navy mt-0.5">100% Pre-Shipment</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#controlvalve-catalog"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy hover:bg-slate-800 text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-xs"
                >
                  <Layers className="w-4 h-4 text-amber" />
                  <span>Browse 25 Valve Bridge Models</span>
                </a>
                <Link
                  href="/contact?product=ControlValve"
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
                  src="/assets/products/alis-control-valves/control-valve-7-cage-guided-pneumatic-actuated-control-valve.png"
                  alt="Valve Bridge Control Valve"
                  className="max-h-[220px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-md"
                />
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-navy">Pneumatic &amp; Motorized Control Valves</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Direct mill pricing with pre-shipment dynamic testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs (Sticky Top, Identical to Actuator & Ball Valves) */}
      <section id="controlvalve-catalog" className="sticky top-20 lg:top-24 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs py-3.5">
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
              <span>Showing {filteredModels.length} of {controlValvesCatalog.length} Products</span>
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
                      {model.operationType.split('/')[0]}
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
                        <span className="font-medium">Trim / Leakage:</span>
                        <span className="font-bold text-emerald-600 truncate max-w-[150px]">{model.seatLeakage.split('/')[0]}</span>
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
                      href={`/contact?product=ControlValve&model=${encodeURIComponent(model.name)}`}
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
              Valve Bridge Control Valves Technical Comparison Table
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
              Compare key engineering parameters across all 25 Valve Bridge control valve models to select the optimal valve body geometry, actuation mechanism, and trim configuration for your process loop.
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
                  <th className="p-3.5 whitespace-nowrap">Trim Type</th>
                  <th className="p-3.5 whitespace-nowrap">Leakage Class</th>
                  <th className="p-3.5 whitespace-nowrap">Standard</th>
                  <th className="p-3.5 whitespace-nowrap text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {controlValvesCatalog.map((model) => (
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
                          model.category === 'pneumatic'
                            ? 'bg-emerald-50 text-emerald-700'
                            : model.category === 'electric'
                            ? 'bg-amber-50 text-amber-800'
                            : 'bg-blue-50 text-blue-800'
                        }`}
                      >
                        {model.operationType.split('/')[0]}
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
                      {model.trimMaterial.split('/')[0]}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-slate-600">
                      {model.seatLeakage.split('/')[0]}
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
              Control Valve Sizing &amp; Trim Selection Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Key engineering fundamentals to consider when calculating valve Cv, selecting trim styles, and sizing actuators.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal font-bold text-xs">
                01
              </div>
              <h3 className="font-bold text-navy text-sm">Flow Characteristics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equal Percentage (EQ%) is standard for pipelines where pressure drops vary significantly with flow rate. Linear trim is selected for liquid level control and boiler feedwater loops with constant delta-P.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center text-amber font-bold text-xs">
                02
              </div>
              <h3 className="font-bold text-navy text-sm">Anti-Cavitation &amp; Flashing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When liquid pressure drops below vapor pressure, cavitation pits plugs and cages. Multi-stage tortuous path and drilled-hole cages divide the pressure drop into discrete steps, preventing vapor bubble collapse.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-xs">
                03
              </div>
              <h3 className="font-bold text-navy text-sm">Cage vs. Top Guided</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Top-guided single seated valves offer simple maintenance and Class VI soft shutoff. Cage-guided balanced plugs eliminate massive fluid dynamic loads, cutting required actuator thrust by 70% and suppressing vibration.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center text-navy font-bold text-xs">
                04
              </div>
              <h3 className="font-bold text-navy text-sm">Smart Positioners &amp; PST</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern 4-20mA HART electro-pneumatic positioners ensure micro-stepping accuracy under 0.2% and enable automated Partial Stroke Testing (PST), ensuring safety loop reliability without tripping live continuous plants.
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
              Valve Bridge control valves regulate fluid flows in severe-service piping across global energy, chemical, and utility infrastructures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-3">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">Power &amp; Steam Letdown</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supercritical steam pressure reduction, turbine bypass stations, and high-pressure boiler feedwater regulation up to Class 2500#.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center text-amber mb-3">
                <Factory className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">Petrochemical &amp; Refining</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Distillation column reflux control, gas hydrocracker letdown, and crude preheat furnace fuel gas throttling.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
                <Droplets className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">Water Networks &amp; Dams</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-head plunger flow regulators, remote electric float valves, and streamlined Y-pattern pressure sustaining stations.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 mb-3">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-navy text-sm">Chemical &amp; Thermal Fluid</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                3-Way proportional mixing and diverting valves for reactor temperature jackets, thermal oil heating, and acid dosing.
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
                q: 'What is the operational difference between Equal Percentage and Linear trims?',
                a: 'An Equal Percentage (EQ%) trim produces equal percentage changes in flow rate for equal increments of valve travel (e.g., each 10% lift increases current flow by a fixed ratio). This is preferred when system pressure drop varies significantly. Linear trim provides a straight-line proportional relationship between lift and flow, ideal for liquid level loops with steady differential pressure.',
              },
              {
                q: 'How does a cage-guided balanced plug reduce required actuator size?',
                a: 'In an unbalanced valve, the actuator must overcome the full fluid pressure acting across the plug area. In a balanced cage trim, fluid pressure passes through balancing holes in the plug to equalize pressure on both top and bottom surfaces. This neutralizes net hydraulic thrust, cutting actuator sizing by up to 70%.',
              },
              {
                q: 'What are ANSI/FCI 70-2 Leakage Classes IV, V, and VI?',
                a: 'Class IV allows a maximum leakage of 0.01% of rated valve capacity (standard metal-to-metal commercial shutoff). Class V is severe-service water testing allowing 0.0005 ml/min per psi per inch of orifice (tight metal seats for boiler feeds). Class VI specifies bubble-tight shutoff using resilient soft seats (PTFE, PEEK, FKM) for air or gas.',
              },
              {
                q: 'Can Valve Bridge control valves be supplied with motorized electric actuators?',
                a: 'Yes. Valve Bridge provides both pneumatic multi-spring diaphragm packages and intelligent linear electric actuators (24VDC, 220VAC, 380VAC). Our electric actuators include built-in 4-20mA servo positioners, local LCD screens, manual override handwheels, and optional battery fail-safe packs.',
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
                Need Fast Mill Quotes for Custom Sized Control Valves?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Submit your Valve Data Sheet (VDS), Cv flow calculations, differential pressure specs, or piping schedule. Valve Bridge manages factory quality audits, dynamic trim sizing, seat leakage testing to FCI 70-2, and 100% pre-shipment inspection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/contact?product=ControlValve"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF8C00] hover:bg-[#e07b00] text-white px-6 py-3.5 text-xs font-bold transition-colors shadow-xs"
              >
                <span>Submit RFQ / Data Sheet</span>
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
                All models available with custom metallurgical trims, anti-cavitation cages, and smart digital positioners.
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setSelectedModalModel(null)}
                  className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href={`/contact?product=ControlValve&model=${encodeURIComponent(selectedModalModel.name)}`}
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
