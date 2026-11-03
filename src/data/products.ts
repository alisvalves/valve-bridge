export interface ProductSpecPair {
  label: string;
  value: string;
}

export interface ProductModel {
  id: string;
  name: string;
  tagline: string;
  image: string;
  gallery?: string[];
  mechanism: string;
  action: string;
  torqueOrThrust: string;
  supply: string;
  temperature: string;
  enclosure: string;
  bodyMaterial: string;
  mounting: string;
  rotationOrMotion: string;
  controlSignal: string;
  overview: string;
  highlights?: string[];
  keyBenefits: string[];
  specsTable: ProductSpecPair[];
  suitableValves: string[];
  industries?: { name: string; desc: string }[];
  applicationsList?: { name: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  sourceUrl: string;
  standards: string[];
  materials: string[];
  pressureClasses: string[];
  sizeRange: string;
  applications: string[];
  subTypes: {
    title: string;
    desc: string;
  }[];
  features: string[];
  models?: ProductModel[];
}

export const productCategories: ProductItem[] = [
  {
    id: 'actuator',
    name: 'Actuator',
    slug: 'actuator',
    tagline: 'High-performance actuators for reliable, precise valve automation',
    description:
      'High-performance actuators designed for reliable and precise valve automation across various industrial applications. Our portfolio includes pneumatic actuators, electric actuators, scotch yoke systems, and heavy-duty multi-turn actuators built for seamless integration with quarter-turn and multi-turn valves.',
    image: '/assets/products/actuator.png',
    sourceUrl: 'https://alisvalves.com/product-category/actuator/',
    standards: ['ISO 5211 Direct Mount', 'NAMUR VDI/VDE 3845', 'ATEX / IECEx Ex d IIC', 'SIL 3 Capable', 'IP67 / IP68 Weatherproof'],
    materials: ['Extruded Hard Anodized Aluminum', 'Ductile Iron GGG40/50', 'CF8M Stainless Steel', 'Epoxy Coated Carbon Steel'],
    pressureClasses: ['Air Supply: 2.5 bar to 8.0 bar', 'Voltage: 24V DC, 110V AC, 220V AC, 380V / 415V 3-Phase'],
    sizeRange: 'Torque: 5 Nm to 100,000 Nm output',
    applications: ['Oil & Gas Refineries', 'Chemical Processing Plants', 'Thermal Power Stations', 'Water & Wastewater Utilities', 'Automated Tank Farms'],
    features: [
      'Scotch yoke mechanism delivering up to 100,000 Nm breakout and seating torque',
      'Dual-piston rack & pinion actuators with hard-anodized body and NAMUR interfaces',
      'Intelligent digital modulation with 4-20mA, HART, Modbus and Profibus feedback',
      'Fail-safe spring return (single-acting) and double-acting configurations',
    ],
    subTypes: [
      {
        title: 'Fork Type Pneumatic Actuator',
        desc: 'Heavy-duty Scotch Yoke pneumatic actuator engineered for high breakaway-torque on large bore quarter-turn valves (up to 100,000 Nm).',
      },
      {
        title: 'Pneumatic Actuator',
        desc: 'Compact rack and pinion pneumatic actuators with hard anodized aluminum cylinder and ISO 5211 mounting pad (8 to 5,000 Nm).',
      },
      {
        title: 'Diaphragm Actuator',
        desc: 'Multi-spring pneumatic diaphragm actuators engineered for high-precision throttling on linear globe and angle control valves.',
      },
      {
        title: 'Electric Actuator',
        desc: 'Quarter-turn electric actuators with visual beacon, manual handwheel override, torque switches, and IP67/IP68 enclosures (30 to 10,000 Nm).',
      },
      {
        title: 'Multi Turn Electric Actuator',
        desc: 'Non-intrusive intelligent multi-turn actuators for gate, globe, and weir valves with continuous LCD display and fieldbus communication.',
      },
      {
        title: 'Stainless Steel Pneumatic Actuator',
        desc: 'Corrosion-resistant 316/304 stainless steel pneumatic actuator for marine, offshore, pharmaceutical cleanrooms, and food processing.',
      },
    ],
    models: [
      {
        id: 'fork-type-pneumatic-actuator',
        name: 'Fork Type Pneumatic Actuator',
        tagline: 'High-torque Scotch Yoke actuator engineered for critical large-bore valve automation',
        image: '/assets/products/actuators/fork-type-pneumatic-actuator.png',
        gallery: [
          '/assets/products/actuators/fork-type-pneumatic-actuator.png',
          '/assets/products/actuators/fork-type-render-2.png',
        ],
        mechanism: 'Scotch Yoke (Fork-Type Drive Mechanism)',
        action: 'Double Acting & Spring Return (Fail-Safe Open / Fail-Safe Close)',
        torqueOrThrust: 'Approx. 300 to 100,000 Nm',
        supply: '2.5 to 8.0 Bar (Supports up to 12 Bar on severe service models)',
        temperature: '-20°C to +80°C Standard (High Temp up to +150°C, Low Temp -60°C)',
        enclosure: 'IP66 / IP67 Weatherproof',
        bodyMaterial: 'Ductile Iron GGG40 / Carbon Steel / Hard Chrome Plated Cylinder',
        mounting: 'ISO 5211 Direct Flange Mounting',
        rotationOrMotion: 'Rotary 90° ± 5° Adjustable at both ends',
        controlSignal: 'On-Off / 4–20 mA Modulating (Electro-pneumatic Positioner)',
        overview:
          'Alis Valves Fork Type Pneumatic Actuator is a high-torque pneumatic actuator designed to operate quarter-turn valves such as ball, butterfly, and plug valves. Its Scotch Yoke mechanism converts pneumatic piston movement into high rotary torque, making it suitable for high breakaway-torque and critical valve automation applications.',
        highlights: [
          'Corrosion Resistant',
          'Leak-Tight Sealing',
          'Automated Operation',
          'Low Maintenance & Long Life',
        ],
        keyBenefits: [
          'High Breakaway Torque: Scotch yoke mechanism matches natural valve torque curves, delivering peak torque at seating & unseating.',
          'Safety Critical ESD & HIPPS: Spring-return configuration guarantees sub-second fail-safe operation on loss of pneumatic supply.',
          'Heavy-Duty Modular Construction: Pneumatic cylinder, spring cartridge, and center yoke housing can be serviced independently.',
          'NAMUR Accessory Interface: Seamless direct mounting for solenoid valves, limit switch boxes, and smart digital positioners.',
        ],
        specsTable: [
          { label: 'Drive Mechanism', value: 'Fork-Type Scotch Yoke Mechanism' },
          { label: 'Rotation Angle', value: '90° ± 5° Adjustable' },
          { label: 'Output Torque Range', value: 'Approx. 300 to 100,000 Nm' },
          { label: 'Operating Pressure', value: '2.5 to 8 bar (up to 12 bar available)' },
          { label: 'Supply Medium', value: 'Dry Compressed Air / Inert Gas' },
          { label: 'Standard Temp Range', value: '-20°C to +80°C Standard' },
          { label: 'High Temperature Version', value: 'Up to +125°C / +150°C (Fluorocarbon)' },
          { label: 'Low Temperature Version', value: 'Down to -45°C / -60°C (Arctic Silicone)' },
          { label: 'Accessory Interface', value: 'NAMUR VDI/VDE 3845 Standard' },
          { label: 'Enclosure Protection', value: 'IP66 / IP67 Weatherproof & Dust-Tight' },
          { label: 'Control Modes', value: 'On-Off / Modulating (4–20 mA, HART, Modbus)' },
          { label: 'Fail-Safe Operation', value: 'Spring Return (Fail Open or Fail Close)' },
          { label: 'Mounting Standard', value: 'ISO 5211 Direct Valve Mounting' },
        ],
        suitableValves: [
          'Large-Bore Ball Valves',
          'Triple Offset Butterfly Valves',
          'Heavy Plug Valves',
          'Emergency Shutdown (ESD) Valves',
        ],
        industries: [
          { name: 'Chemical', desc: 'Engineered valve solutions tailored for critical Chemical operating processes.' },
          { name: 'Fertilizer', desc: 'Engineered valve solutions tailored for critical Fertilizer operating processes.' },
          { name: 'Oil & Gas', desc: 'Engineered valve solutions tailored for critical Oil & Gas operating processes.' },
          { name: 'Power Generation', desc: 'Engineered valve solutions tailored for critical Power Generation operating processes.' },
        ],
        applicationsList: [
          { name: 'Emergency Shut-Off', desc: 'High-performance flow automation engineered for Emergency Shut-Off operations (ESD).' },
          { name: 'High Pressure', desc: 'High-performance flow automation engineered for High Pressure operations.' },
          { name: 'HIPPS', desc: 'High-performance flow automation engineered for High-Integrity Pressure Protection Systems.' },
          { name: 'Vacuum', desc: 'High-performance flow automation engineered for Vacuum operations.' },
        ],
        faqs: [
          {
            q: 'What is a Fork Type Pneumatic Actuator?',
            a: 'It is a Scotch Yoke pneumatic actuator that converts linear piston movement into rotary torque for operating quarter-turn valves such as ball, butterfly, and plug valves.',
          },
          {
            q: 'Why is it called a Fork Type Actuator?',
            a: 'The actuator uses a fork-shaped Scotch Yoke mechanism to convert the linear movement of the piston into rotary movement of the output shaft, delivering maximum torque at the open and close positions.',
          },
          {
            q: 'How is actuator torque selected?',
            a: 'Actuator torque must be selected based on the valve’s required breakaway, running, and seating torque at the actual differential pressure and operating conditions.',
          },
          {
            q: 'What is the normal operating pressure?',
            a: 'Depending on the model, Scotch Yoke actuators commonly operate around 2.5–8 bar, while heavy-duty pipeline designs support pressures up to 12 bar.',
          },
          {
            q: 'Can a Fork Type Actuator be used for ESD valves?',
            a: 'Yes. Spring-return Scotch Yoke actuators are standard in the oil and gas industry for Emergency Shutdown (ESD) and safety-critical HIPPS valve applications.',
          },
          {
            q: 'Is it suitable for high-temperature applications?',
            a: 'Yes, with appropriate high-temperature fluorocarbon (Viton) seals, specialized lubricants, and heat-resistant coatings, versions are rated up to +150°C.',
          },
        ],
      },
      {
        id: 'pneumatic-actuator',
        name: 'Pneumatic Actuator (Rack & Pinion)',
        tagline: 'Compact, rapid-response rack and pinion automation for quarter-turn valves',
        image: '/assets/products/actuators/pneumatic-actuator.png',
        mechanism: 'Dual-Piston Rack & Pinion',
        action: 'Double Acting & Spring Return (Single Acting)',
        torqueOrThrust: '8 Nm to 5,000 Nm',
        supply: '3 to 8 Bar (Normal Supply: 4 kg/cm², Max: 8 kg/cm²)',
        temperature: '-20°C to +90°C (High temp -15°C to +150°C, Low temp -40°C to +80°C)',
        enclosure: 'IP67 Weatherproof',
        bodyMaterial: 'Extruded Hard Anodized Aluminum Alloy (ASTM 6063-T6)',
        mounting: 'ISO 5211 / DIN 3337 Direct Mount',
        rotationOrMotion: 'Rotary 90° ± 5° Bidirectional Adjustment',
        controlSignal: 'NAMUR Direct Solenoid Mount / 4–20 mA Smart Positioner',
        overview:
          'Engineered to automate industrial valves using clean compressed air. These actuators convert pneumatic energy into rapid mechanical rotary motion, enabling remote opening, closing, or precision throttling of ball, butterfly, and plug valves. Features dual-opposed rack and pinion pistons with integrated preloaded spring cartridges for guaranteed fail-safe operation.',
        keyBenefits: [
          'Extruded Hard Anodized Body: Internal and external corrosion resistance and low friction',
          'Dual Piston Symmetry: Delivers uniform torque throughout full 90-degree travel',
          'Direct NAMUR Interface: Standardized top and side pads for switch boxes and solenoid valves',
          'Encapsulated Springs: Preloaded modular spring sets ensure safe maintenance and assembly',
        ],
        specsTable: [
          { label: 'Drive Mechanism', value: 'Dual Piston Rack & Pinion' },
          { label: 'Torque Range', value: '8 Nm to 5,000 Nm (Model dependent)' },
          { label: 'Working Pressure', value: '3 to 8 Bar (40 to 115 psi)' },
          { label: 'Air Supply Normal', value: '4 kg/cm² (Max 8 kg/cm²)' },
          { label: 'Rotation Angle', value: '90° ± 5° Adjustable at 0° and 90°' },
          { label: 'Seal Material', value: 'NBR (Standard), Viton / FKM (High temp), Silicone (Low temp)' },
          { label: 'Air Connection', value: 'NAMUR standard G1/4" or G1/2"' },
          { label: 'Mounting Standard', value: 'ISO 5211 / DIN 3337 with female double square drive' },
          { label: 'Top Drive Shaft', value: 'NAMUR VDI/VDE 3845 for limit switch & positioner' },
          { label: 'Service Life', value: 'Up to 1,000,000 continuous test cycles' },
        ],
        suitableValves: ['2-Piece & 3-Piece Ball Valves', 'Wafer & Lug Butterfly Valves', 'Lubricated Plug Valves'],
      },
      {
        id: 'diaphragm-actuator',
        name: 'Diaphragm Actuator',
        tagline: 'Multi-spring pneumatic linear actuator for precise throttling control valves',
        image: '/assets/products/actuators/diaphragm-actuator.png',
        mechanism: 'Multi-Spring Pneumatic Diaphragm',
        action: 'Air to Open (Reverse Acting) / Air to Close (Direct Acting)',
        torqueOrThrust: 'High Linear Thrust (up to 45 kN)',
        supply: '3 to 6 Bar (0.14 - 0.40 MPa pneumatic signal)',
        temperature: '-20°C to +120°C',
        enclosure: 'IP65 Weatherproof',
        bodyMaterial: 'Pressed Carbon Steel Dome / Cast Aluminum / Ductile Iron Yoke',
        mounting: 'Direct Yoke Clamp on Control Valve Bonnet (NAMUR IEC 60534-6)',
        rotationOrMotion: 'Linear Stroke (15 mm to 100 mm)',
        controlSignal: '4–20 mA via Electro-Pneumatic or Smart Digital Positioner',
        overview:
          'High-performance diaphragm actuators designed for continuous modulating control valves requiring high positioning accuracy and minimum hysteresis. Operates using a reinforced elastomeric diaphragm acting against multiple calibrated springs. In case of air loss, internal spring packs immediately drive the valve plug to its engineered fail-safe position (Fail Open or Fail Closed).',
        keyBenefits: [
          'Low Hysteresis: Multi-spring architecture ensures high linear responsiveness',
          'Fabric Reinforced Diaphragm: Molded rolling diaphragm ensures constant effective area throughout stroke',
          'Direct Positioner Feedback: Standard NAMUR rib for linear positioners and displacement transmitters',
          'Fail-Safe Reliability: Immediate return to safe state on electrical or pneumatic supply failure',
        ],
        specsTable: [
          { label: 'Operation', value: 'Pneumatic Linear (Air Operated)' },
          { label: 'Motion', value: 'Linear Precision Throttling' },
          { label: 'Action Type', value: 'Air-to-Open (Reverse) / Air-to-Close (Direct)' },
          { label: 'Fail Safe', value: 'Multi-Spring Return (Fail Open / Fail Close)' },
          { label: 'Air Supply', value: '3 to 6 Bar (0.14 to 0.40 MPa)' },
          { label: 'Body Material', value: 'Carbon Steel / Cast Aluminum / Ductile Iron' },
          { label: 'Diaphragm Material', value: 'Nitrile (NBR) / EPDM with Nylon Fabric Insert' },
          { label: 'Stroke Range', value: '15 mm, 25 mm, 40 mm, 60 mm, up to 100 mm' },
          { label: 'Mounting Standard', value: 'IEC 60534-6 / Direct Yoke Mount' },
          { label: 'Control Signal', value: '4–20 mA (With Smart Digital Positioner)' },
          { label: 'Max Operating Temp', value: 'Up to 120°C continuous' },
        ],
        suitableValves: ['Single-Seated Globe Control Valves', 'Cage Guided Control Valves', 'Angle Control Valves', 'Cryogenic Control Valves'],
      },
      {
        id: 'electric-actuator',
        name: 'Electric Actuator (Quarter-Turn)',
        tagline: 'Intelligent motorized quarter-turn automation with local & remote control',
        image: '/assets/products/actuators/electric-actuator.png',
        mechanism: 'Electric Motor with Precision Worm Gearbox',
        action: 'On-Off / Continuous Modulating Control',
        torqueOrThrust: '30 Nm to 10,000 Nm',
        supply: '24V DC, 24V AC, 110V AC, 230V AC, 415V AC (3-Phase, 50/60 Hz)',
        temperature: '-20°C to +70°C',
        enclosure: 'IP67 / IP68 Submersible & Ex d IIC Flameproof Optional',
        bodyMaterial: 'Die-Cast Aluminum Alloy with Epoxy Polyester Powder Coating',
        mounting: 'ISO 5211 Direct Flange Mounting Pad',
        rotationOrMotion: 'Rotary 90° ± 5° with Mechanical Travel Limit Stops',
        controlSignal: '4–20 mA, 0–10 V DC, Modbus RTU / Profibus DP',
        overview:
          'Quarter-turn electric actuators engineered for automated remote control and accurate positioning of ball valves, butterfly valves, and dampers. Powered by heavy-duty squirrel cage or DC motors with internal thermal overload protection, mechanical torque switches, continuous position potentiometer feedback, and a declutchable manual handwheel for emergency operation.',
        keyBenefits: [
          'Self-Locking Worm Gearing: Prevents backdriving under fluid turbulence or pressure surges',
          'Integrated Manual Override: Declutchable handwheel allows safe manual operation during outages',
          'Smart Modulating Card: On-board intelligent positioner with 4-20mA input/output and self-calibration',
          'Dual Limit & Torque Switches: Protects valve seats and stem from over-torque damage',
        ],
        specsTable: [
          { label: 'Actuator Type', value: 'Quarter-Turn (90°)' },
          { label: 'Torque Range', value: '30 Nm to 10,000 Nm' },
          { label: 'Power Supply', value: '24V DC, 110V AC, 230V AC, 415V 3-Phase AC' },
          { label: 'Control Mode', value: 'On-Off / Continuous Modulating' },
          { label: 'Control Signal', value: '4–20 mA, 0–10 V, Modbus RTU, Dry Contacts' },
          { label: 'Enclosure Protection', value: 'IP67 / IP68 Weatherproof & Ex d IIC T4 Flameproof' },
          { label: 'Housing Material', value: 'Die Cast Aluminium / Cast Iron' },
          { label: 'Operating Temperature', value: '-20°C to +70°C' },
          { label: 'Duty Cycle', value: 'S2 (30 min) / S4 (up to 70% duty rating)' },
          { label: 'Mounting Standard', value: 'ISO 5211 Direct Mounting Flange' },
          { label: 'Emergency Override', value: 'Declutchable Manual Handwheel' },
        ],
        suitableValves: ['Ball Valves', 'Butterfly Valves', 'Plug Valves', 'HVAC Dampers', 'Water Intake Gates'],
      },
      {
        id: 'multi-turn-electric-actuator',
        name: 'Multi Turn Electric Actuator',
        tagline: 'Intelligent non-intrusive multi-turn automation for gate and globe valves',
        image: '/assets/products/actuators/multi-turn-electric-actuator.png',
        mechanism: 'Non-Intrusive Intelligent Electric Multi-Turn Drive',
        action: 'Multi-Turn Rotary with Linear Thrust Base Option',
        torqueOrThrust: '50 Nm to 3,000+ Nm (Thrust up to 300 kN with thrust base)',
        supply: '24V DC / 110V AC / 230V AC / 380V-415V AC 3-Phase, 50/60 Hz',
        temperature: '-20°C to +60°C (Extended -40°C to +70°C)',
        enclosure: 'IP65 / IP67 / IP68 Submersible (15m for 72 hrs) & ATEX / IECEx',
        bodyMaterial: 'High-Strength Ductile Iron & Aluminum Alloy Enclosure',
        mounting: 'ISO 5210 Multi-Turn Flange (A, B1, B2, C drive bushes)',
        rotationOrMotion: 'Multi-Turn Continuous Rotary (1 to 1000+ turns)',
        controlSignal: 'Open/Close, Inching, 4–20 mA Modulating, Modbus RTU, Profibus DP',
        overview:
          'Intelligent non-intrusive multi-turn electric actuator engineered for severe isolation and regulating services on gate valves, globe valves, knife gates, and penstocks. Features local graphical LCD interface, magnetic non-intrusive configuration knobs (no enclosure opening needed), non-contact absolute encoder position sensing, torque measurement in both directions, and remote telemetry integration.',
        keyBenefits: [
          'Non-Intrusive Commissioning: Infrared / magnetic setting without opening electrical cover in hazardous areas',
          'Absolute Encoder Sensing: Never loses position even during power outages or manual handwheel rotation',
          'Comprehensive Diagnostics: Logs torque profiles, operational cycles, alarms, and motor run-time',
          'Submersible Double-Sealed Enclosure: IP68 protection safeguards internal electronics during conduit flooding',
        ],
        specsTable: [
          { label: 'Output Type', value: 'Multi-Turn Rotary / Linear Thrust' },
          { label: 'Torque Range', value: '50 Nm to 3,000+ Nm (Model & stem dependent)' },
          { label: 'Power Supply', value: '24V DC / 110V AC / 230V AC / 380V-415V AC (3-Phase)' },
          { label: 'Frequency', value: '50 / 60 Hz' },
          { label: 'Duty Type', value: 'S2 / S4 (Model dependent)' },
          { label: 'Protection Class', value: 'IP65 / IP67 / IP68 Submersible' },
          { label: 'Insulation Class', value: 'Class F (Class H optional)' },
          { label: 'Ambient Temperature', value: 'Typically -20°C to +60°C' },
          { label: 'Control Interface', value: 'Local Control Station / LCD Display / 4–20 mA / Modbus / Profibus' },
          { label: 'Accessories', value: 'Torque Switches, Position Transmitter, Auto-declutch Handwheel' },
          { label: 'Mounting Standard', value: 'ISO 5210 Flange' },
        ],
        suitableValves: ['Wedge Gate Valves', 'Parallel Slide Gate Valves', 'Globe Valves', 'Knife Gate Valves', 'Sluice Gates & Penstocks'],
      },
      {
        id: 'stainless-steel-pneumatic-actuator',
        name: 'Stainless Steel Pneumatic Actuator',
        tagline: '100% AISI 316 stainless steel rack & pinion actuator for extreme corrosive environments',
        image: '/assets/products/actuators/stainless-steel-pneumatic-actuator.png',
        mechanism: 'Full 316 Stainless Steel Rack & Pinion',
        action: 'Double Acting & Spring Return (Fail Safe)',
        torqueOrThrust: '15 Nm to 4,500 Nm',
        supply: '3 to 8 Bar (Air / Inert Gas)',
        temperature: '-20°C to +80°C Standard (High Temp up to +150°C Viton, Low Temp -40°C)',
        enclosure: 'IP67 / IP68 Marine Submersible & Chemical Washdown',
        bodyMaterial: 'Investment Cast Stainless Steel AISI 316 / CF8M (Electropolished)',
        mounting: 'ISO 5211 / DIN 3337 Direct Mount',
        rotationOrMotion: 'Rotary 90° (±5° adjustable travel stops)',
        controlSignal: 'Direct NAMUR Solenoid / 4–20 mA Smart Positioner',
        overview:
          'Manufactured from solid investment cast AISI 316 stainless steel, this pneumatic actuator is engineered for offshore marine platforms, pharmaceutical cleanrooms, chemical washdown facilities, and food & beverage processing where aluminum actuators fail due to corrosion. The mirror-smooth electropolished surface prevents chemical buildup, bacterial accumulation, and pitting corrosion.',
        keyBenefits: [
          'Total Corrosion Immunity: Solid 316 SS body, end caps, drive shaft, and external fasteners',
          'Sanitary & Washdown Proof: Smooth electropolished surface withstands aggressive CIP/SIP washdowns',
          'Extreme Offshore Durability: Immune to salt spray, sulfuric acids, chlorine, and marine atmospheric corrosion',
          'NAMUR Standard Interfaces: Fully compatible with standard 316 stainless steel solenoid valves and switchboxes',
        ],
        specsTable: [
          { label: 'Operation', value: 'Pneumatic (Air / Gas Operated)' },
          { label: 'Mechanism', value: 'Dual-Piston Rack & Pinion' },
          { label: 'Action', value: 'Double Acting / Spring Return (Fail Safe)' },
          { label: 'Output Motion', value: 'Rotary 90° (±5° Adjustable)' },
          { label: 'Body Material', value: 'AISI 316 / CF8M Stainless Steel' },
          { label: 'End Cap Material', value: 'AISI 316 Stainless Steel' },
          { label: 'Piston & Shaft Material', value: 'Stainless Steel AISI 316' },
          { label: 'Air Supply Pressure', value: 'Typically 3–8 Bar (40 to 115 psi)' },
          { label: 'Temperature Range', value: 'Typically -20°C to +80°C (Extended -40°C to +150°C)' },
          { label: 'Torque Range', value: '15 Nm to 4,500 Nm' },
          { label: 'Control Accessories', value: 'Solenoid Valve / Limit Switch / Smart Positioner / AFR' },
          { label: 'Mounting Standard', value: 'ISO 5211 Direct Mounting' },
        ],
        suitableValves: ['Sanitary Tri-Clamp Ball Valves', '316 SS Butterfly Valves', 'Corrosive Chemical Valves', 'Offshore Fire Water Valves'],
      },
    ],
  },
  {
    id: 'ball-valves',
    name: 'Ball Valves',
    slug: 'ball-valves',
    tagline: 'Smooth operation, dependable shut-off, and zero-leakage isolation',
    description:
      'Designed around your needs, our Ball Valves deliver smooth operation, reliable shut-off, and the confidence you need for every flow application. From floating ball valves to heavy-duty forged trunnion mounted valves, ceramic lined options, and multi-port configurations.',
    image: '/assets/products/ball-valves.png',
    sourceUrl: 'https://alisvalves.com/product-category/ball-valves/',
    standards: ['API 6D', 'API 608', 'ASME B16.34', 'API 607 / API 6FA Fire Safe', 'BS 5351', 'NACE MR0175'],
    materials: ['ASTM A105', 'ASTM A216 WCB', 'ASTM A350 LF2', 'ASTM A182 F316 / CF8M', 'Duplex 2205 / Super Duplex 2507', 'Alloy 20', 'Hastelloy C'],
    pressureClasses: ['Class 150', 'Class 300', 'Class 600', 'Class 900', 'Class 1500', 'Class 2500 / PN10 to PN420'],
    sizeRange: '1/2" to 48" (DN15 – DN1200)',
    applications: ['Hydrocarbon Pipelines', 'Gas Transmission Lines', 'Petrochemical & Fertilizer Units', 'Cryogenic LNG Terminals', 'Offshore Oil Platforms'],
    features: [
      'Precision machined, mirror-polished micro-finish ball with zero-leakage sealing',
      'Blow-out proof stem design with anti-static grounding springs',
      'Dual block and bleed (DBB) capabilities with cavity relief in trunnion designs',
      'Fire-safe certified graphite secondary seal under API 607 7th edition',
    ],
    subTypes: [
      {
        title: 'Trunnion Mounted Ball Valve',
        desc: 'Forged 2-piece and 3-piece split body trunnion ball valves engineered for high pressure pipeline isolation with DBB cavity relief.',
      },
      {
        title: 'Floating Ball Valve',
        desc: 'Versatile 1-piece, 2-piece, and 3-piece floating ball valves with soft PTFE/RPTFE/PEEK seats for industrial process lines.',
      },
      {
        title: 'Metal Seated Ball Valve',
        desc: 'Stellite / Tungsten Carbide coated metal seats for high temperature service up to 550°C and severe abrasive slurry.',
      },
      {
        title: 'Cryogenic Ball Valve',
        desc: 'Extended bonnet design with drip collar for cryogenic LNG, liquid nitrogen and liquid oxygen service down to -196°C.',
      },
      {
        title: 'Ceramic Ball Valve',
        desc: 'Ultra-hard structural ceramic (Zirconia / Silicon Carbide) ball and seats for extreme erosion, catalyst and ash slurry.',
      },
      {
        title: 'PFA / PTFE Lined Ball Valve',
        desc: 'Virgin PFA fluoropolymer lined body and ball providing total corrosion resistance to strong acids, chlorine, and bromine.',
      },
      {
        title: 'Multi-Port Ball Valve (3-Way / 4-Way)',
        desc: 'L-port and T-port multi-way ball valves for streamlined flow diversion, blending, and bypass routing.',
      },
      {
        title: 'V-Notch Ball Valve',
        desc: 'Contoured 30°, 60°, or 90° V-port ball providing equal percentage flow control and shearing action for fibrous slurry.',
      },
      {
        title: 'Wafer & Welded Ball Valves',
        desc: 'Short face-to-face wafer patterns and fully welded pipeline ball valves for buried underground gas distribution.',
      },
    ],
  },
  {
    id: 'butterfly-valves',
    name: 'Butterfly Valves',
    slug: 'butterfly-valves',
    tagline: 'Effortless flow control, dependable shut-off, and durable performance',
    description:
      'Designed for effortless flow control, our Butterfly Valves combine easy operation, dependable shut-off, and durable performance to keep your processes running smoothly. Offering concentric wafer/lug valves, high-performance double offset, and triple offset metal-seated zero-leakage models.',
    image: '/assets/products/butterfly-valves.png',
    sourceUrl: 'https://alisvalves.com/product-category/butterfly-valves/',
    standards: ['API 609 Category A & B', 'ASME B16.34', 'ISO 5752', 'EN 593', 'AWWA C504', 'API 607 Fire Safe'],
    materials: ['Ductile Iron GGG40/50', 'Cast Steel WCB', 'CF8 / CF8M Stainless Steel', 'Al-Bronze C95800', 'Super Duplex 2507', 'Titanium'],
    pressureClasses: ['PN 10', 'PN 16', 'PN 25', 'Class 150', 'Class 300', 'Class 600'],
    sizeRange: '2" to 96" (DN50 – DN2400)',
    applications: ['Water Intake & Distribution', 'Cooling Water Systems', 'Desalination Plants', 'Flue Gas Desulfurization (FGD)', 'District Heating & HVAC'],
    features: [
      'Low torque aerodynamic disc profile ensuring minimal pressure drop and maximum flow capacity',
      'Replaceable and bonded resilient liner options in EPDM, NBR, Viton, and PTFE',
      'Triple offset non-rubbing geometry eliminates seat wear and allows bi-directional tight shutoff',
      'ISO 5211 top flange allows direct mounting of pneumatic and electric actuators without bracket',
    ],
    subTypes: [
      {
        title: 'Concentric Resilient-Seated Butterfly Valve',
        desc: 'Wafer and lug type butterfly valves with vulcanized or replaceable EPDM/NBR/Viton liners for clean water and utilities.',
      },
      {
        title: 'Double Offset High Performance Butterfly Valve',
        desc: 'Cam-action eccentric disc geometry reducing seal friction, with PTFE, RPTFE or fire-safe metal seats for chemical lines.',
      },
      {
        title: 'Triple Offset Metal Seated Butterfly Valve',
        desc: 'Zero-leakage bi-directional metal-to-metal sealing for extreme temperatures (-60°C to +450°C) and steam isolation.',
      },
      {
        title: 'Lined Butterfly Valve',
        desc: 'Fully PTFE/PFA lined disc and body for hazardous, aggressive acid, and ultrapure pharmaceutical processes.',
      },
      {
        title: 'Damper Butterfly Valve',
        desc: 'Lightweight fabricated large diameter damper butterfly valves for hot air, furnace exhaust, and ventilation ducts.',
      },
      {
        title: 'Sanitary Butterfly Valve',
        desc: 'Mirror polished 316L stainless steel butterfly valves with quick-clamp tri-clamp connections for food, beverage, and dairy.',
      },
      {
        title: 'Ceramic Butterfly Valve',
        desc: 'Solid structural ceramic lining and disc engineered for high-velocity abrasive pneumatically conveyed powders and slag.',
      },
    ],
  },
  {
    id: 'control-valve',
    name: 'Control Valve',
    slug: 'control-valve',
    tagline: 'Accurate flow, pressure, temperature, and level regulation',
    description:
      'ALIS Valves is a trusted manufacturer and supplier of high-performance control valves designed for accurate flow, pressure, temperature, and level regulation in critical industrial processes. Available in globe, angle, 3-way, and lined configurations paired with smart digital positioners.',
    image: '/assets/products/control-valve.png',
    sourceUrl: 'https://alisvalves.com/product-category/control-valve/',
    standards: ['IEC 60534', 'ASME B16.34', 'ISA 75.01', 'FCI 70-2 Leakage Class IV / V / VI', 'EN 1349'],
    materials: ['ASTM A216 WCB', 'ASTM A217 WC6 / WC9', 'ASTM A351 CF8M', 'Monel 400', 'Inconel 625', 'Hastelloy C'],
    pressureClasses: ['Class 150', 'Class 300', 'Class 600', 'Class 900', 'Class 1500 / PN 16 – PN 160'],
    sizeRange: '1/2" to 24" (DN15 – DN600)',
    applications: ['Steam Pressure Letdown Stations', 'Boiler Feedwater Regulation', 'Chemical Dosing & Blending', 'Refinery Distillation Towers', 'Oil Separator Units'],
    features: [
      'Top-guided single seated and cage-guided balanced plug configurations for stable modulation',
      'Multi-stage anti-cavitation and low-noise trims for high differential pressure gas and liquid services',
      'Smart electro-pneumatic digital positioners with 4-20mA HART, auto-calibration, and partial stroke testing (PST)',
      'Tight shut-off capabilities meeting ANSI FCI 70-2 Class IV, Class V, and bubble-tight Class VI soft seated',
    ],
    subTypes: [
      {
        title: 'Pneumatic Control Valve',
        desc: 'Diaphragm-actuated globe control valves with integrated smart positioner, air filter regulator, and dual pressure gauges.',
      },
      {
        title: 'Globe Type Control Valve',
        desc: 'Single-seated and cage-guided globe body control valves with interchangeable linear, equal percentage, and quick-opening trims.',
      },
      {
        title: 'Motorized Electric Control Valve',
        desc: 'Precision modulating electric actuator with 4-20mA positioning servo for continuous unmanned process loops.',
      },
      {
        title: '3-Way Mixing & Diverting Control Valve',
        desc: 'Specialized 3-way body for heat exchanger temperature bypass, thermal blending, and fluid distribution.',
      },
      {
        title: 'Angle Body Control Valve',
        desc: 'Self-draining angle pattern designed for erosive fluids, flashing services, and high differential pressure drops.',
      },
      {
        title: 'Lined Control Valve',
        desc: 'PFA/PTFE lined control valves with bellows seal for highly corrosive hydrochloric, hydrofluoric, and sulfuric acids.',
      },
      {
        title: 'Y-Type Flow Control Valve',
        desc: 'High flow coefficient Y-globe design reducing turbulence and head loss in slurry and chemical dosing lines.',
      },
    ],
  },
  {
    id: 'ggc-valves',
    name: 'GGC Valves',
    slug: 'ggc-valves',
    tagline: 'Dependable shut-off, precise regulation, and non-return protection',
    description:
      'GGC Valves designed to deliver dependable shut-off, precise flow control, and effective non-return protection in demanding industrial process applications. Covering Gate Valves (API 600/602), Globe Valves (BS 1873), Check Valves (BS 1868), and Knife Edge Gate Valves.',
    image: '/assets/products/ggc-valves.png',
    sourceUrl: 'https://alisvalves.com/product-category/ggc-valves/',
    standards: ['API 600', 'API 602', 'API 603', 'API 594', 'BS 1873', 'BS 1868', 'ASME B16.34', 'MSS SP-81'],
    materials: ['A216 WCB', 'A105N', 'A352 LCB/LCC', 'A217 WC9 / C5 / C12', 'A351 CF8M', 'Forged F11 / F22 / F91', 'Alloy 20'],
    pressureClasses: ['Class 150', 'Class 300', 'Class 600', 'Class 900', 'Class 1500', 'Class 2500 / PN 16 to PN 420'],
    sizeRange: '1/2" to 48" (DN15 – DN1200)',
    applications: ['Thermal Power Plants', 'Petroleum Refining Lines', 'High Pressure Steam Manifolds', 'Water Pipeline Infrastructure', 'Cement & Mining Slurry'],
    features: [
      'Flexible wedge and solid wedge gate options with hardfaced Stellite 6 seating faces',
      'Precision machined plug and needle discs in globe valves for fine throttling without wire-drawing',
      'Dual plate wafer and swing check valves engineered for rapid slam-free backflow prevention',
      'Pressure seal bonnet designs for high-pressure high-temperature steam and supercritical boiler service',
    ],
    subTypes: [
      {
        title: 'Gate Valve (API 600 / API 602)',
        desc: 'Cast and forged steel OS&Y rising stem wedge gate valves for low pressure drop, bi-directional full open/close isolation.',
      },
      {
        title: 'Globe Valve (BS 1873 / API 602)',
        desc: 'Straight-way and Y-pattern globe valves with guided plug discs designed for positive shut-off and throttling service.',
      },
      {
        title: 'Check Valve (Swing & Dual Plate)',
        desc: 'Non-return swing check, dual-plate wafer check, and piston lift check valves for automatic backflow prevention.',
      },
      {
        title: 'Knife Edge Gate Valve',
        desc: 'Unidirectional and bi-directional knife gate valves with beveled stainless blade for pulp, ash slurry, and solid slurries.',
      },
      {
        title: 'Resilient Seated Gate Valve',
        desc: 'EPDM encapsulated ductile iron wedge gate valves meeting AWWA C509/C515 for municipal clean water distribution.',
      },
      {
        title: 'Industrial Strainers (Y & Basket)',
        desc: 'Y-strainers and basket strainers with perforated stainless steel mesh screens for pipeline pump and meter protection.',
      },
    ],
  },
  {
    id: 'pressure-reducing-valve',
    name: 'Pressure Reducing Valve',
    slug: 'pressure-reducing-valve',
    tagline: 'Maintain constant outlet pressure and protect downstream equipment',
    description:
      'Pressure Reducing Valves engineered to maintain constant outlet pressure while protecting pipelines and equipment from excessive pressure. Ideal for steam distribution, water supply networks, compressed air lines, and municipal infrastructure.',
    image: '/assets/products/pressure-reducing-valve.png',
    sourceUrl: 'https://alisvalves.com/product-category/pressure-reducing-valve/',
    standards: ['ASME B16.34', 'DIN EN 12516', 'API 598', 'MSS-SP-85', 'BS 5154'],
    materials: ['Ductile Iron GGG40', 'Cast Carbon Steel WCB', 'Forged Steel A105', 'Stainless Steel CF8 / CF8M', 'Bronze B62'],
    pressureClasses: ['PN 16', 'PN 25', 'PN 40', 'Class 150', 'Class 300 / Max inlet 40 bar, outlet 0.5 to 20 bar'],
    sizeRange: '1/2" to 16" (DN15 – DN400)',
    applications: ['Steam Boiler Distribution Networks', 'Commercial Building HVAC Systems', 'Municipal Water Grid Zones', 'Compressed Industrial Air Lines', 'Fire Sprinkler Feed Lines'],
    features: [
      'Self-acting design requires no external power or compressed air supply to operate',
      'Pilot-operated diaphragm mechanism ensuring exceptionally stable pressure control under changing flow rates',
      'Built-in internal pilot strainer preventing particulate fouling of pilot orifices',
      'Interchangeable adjustment springs covering multiple pressure reduction ranges',
    ],
    subTypes: [
      {
        title: 'Pilot-Operated Diaphragm Steam PRV',
        desc: 'High-accuracy pressure reduction for steam service with phosphor bronze or stainless steel diaphragms.',
      },
      {
        title: 'Direct-Acting Spring-Loaded PRV',
        desc: 'Compact pressure regulator for compressed air, inert gases, water lines, and light utility fluids.',
      },
      {
        title: 'Hydraulic Water Pressure Reducing Valve',
        desc: 'Diaphragm-actuated pilot valve regulating municipal drinking water and district water mains.',
      },
      {
        title: 'Self-Actuated Gas Pressure Regulator',
        desc: 'High-sensitivity pressure regulator for natural gas, LPG, nitrogen blanket, and industrial gas distribution.',
      },
    ],
  },
  {
    id: 'special-valve',
    name: 'Special Valve',
    slug: 'special-valve',
    tagline: 'Custom engineering for extreme temperatures, slurry, and corrosive media',
    description:
      'Special Valves engineered to meet unique process requirements, including high pressure, extreme low or high temperature, corrosive media, and abrasive service. Built for severe industrial challenges that standard off-the-shelf valves cannot handle.',
    image: '/assets/products/special-valve.png',
    sourceUrl: 'https://alisvalves.com/product-category/special-valve/',
    standards: ['BS 6364 (Cryogenic)', 'MSS SP-81', 'EIGA / CGA (Oxygen Service)', 'API 6D (DBB)', 'ASME B16.34'],
    materials: ['Inconel 625 / 718', 'Monel 400', 'Hastelloy C276', 'Titanium Gr.2 / Gr.5', 'Duplex 2205', 'Cryogenic 316L'],
    pressureClasses: ['Class 150 to Class 2500 / PN 10 to PN 420'],
    sizeRange: '1/2" to 60" (DN15 – DN1500)',
    applications: ['Cryogenic LNG Tankers & Terminals', 'Mining Tailings & Mineral Extraction', 'High-Purity Oxygen Production', 'Chemical Slurry Pipelines', 'Emergency Offshore Depressurization'],
    features: [
      'Extended gas column bonnets keeping stem packings above freezing in cryogenic conditions',
      'Double block and bleed (DBB) design reducing piping weight, leak paths, and installation space',
      'Zero-cavity self-cleaning designs preventing slurry entrapment and seat binding',
      'Ultrasonically degreased and hydrocarbon-free packaging for pure oxygen service',
    ],
    subTypes: [
      {
        title: 'Cryogenic Valve (-196°C)',
        desc: 'Extended bonnet gate, globe, and ball valves engineered for liquid nitrogen, LNG, and cryogenic gases.',
      },
      {
        title: 'Double Block and Bleed (DBB) Valve',
        desc: 'Integrated dual isolation ball/needle manifold replacing bulky traditional 3-valve assemblies.',
      },
      {
        title: 'Emergency Shut Down (ESD) Valve',
        desc: 'Fast-acting SIL 3 certified shutdown valves with partial stroke testing and fireproof actuator blankets.',
      },
      {
        title: 'Slurry Valve & Abrasive Knife Gate',
        desc: 'Heavy slurry valves with polyurethane or hardened alloy wear liners for mining pulp and tailings.',
      },
      {
        title: 'Pinch & Diaphragm Valve',
        desc: 'Full bore elastomer sleeve pinch valves delivering 100% obstruction-free flow for viscous slurries.',
      },
      {
        title: 'Plug Valve (Sleeved & Lubricated)',
        desc: 'Non-lubricated PTFE sleeved and pressure-balanced lubricated plug valves for difficult chemical streams.',
      },
      {
        title: 'Pressure Vacuum Relief Valve (Breather)',
        desc: 'Atmospheric storage tank breather valves preventing overpressure explosion or vacuum implosion.',
      },
      {
        title: 'Deluge Alarm & Deluge Control Valve',
        desc: 'Rapid opening hydraulic diaphragm valves for industrial fire deluge and water spray systems.',
      },
      {
        title: 'Goggle & Monoflange Manifold Valve',
        desc: 'Positive line blind goggle valves and instrument monoflange isolation for pressure transmitters.',
      },
    ],
  },
  {
    id: 'accessories',
    name: 'Accesories',
    slug: 'accessories',
    tagline: 'Positioners, solenoid valves, air filter regulators, and limit switches',
    description:
      'Explore Premium Valve Accessories Including Positioners, Solenoid Valves, Air Filter Regulators (AFR), Limit Switch Boxes, Gear Operators and More. Engineered for seamless interoperability with pneumatic and electric valve actuators.',
    image: '/assets/products/accessories.png',
    sourceUrl: 'https://alisvalves.com/product-category/accesories/',
    standards: ['NAMUR VDI/VDE 3845', 'IEC 61508 (SIL 2/3)', 'ATEX Ex d / Ex ia IIC T6', 'NEMA 4, 4X, IP66 / IP67'],
    materials: ['Die-Cast Aluminum with Powder Epoxy Coating', 'Stainless Steel 316 Enclosures', 'Engineering Polycarbonate Beacons'],
    pressureClasses: ['Air Supply: Up to 10 bar (145 psi)', 'Electrical: 24V DC, 110V AC, 220V AC, 4-20mA Loop Powered'],
    sizeRange: 'Universal ISO 5211 / NAMUR direct interface',
    applications: ['Automated Valve Monitoring', 'Control Room DCS Feedback', 'Emergency Shutdown Systems', 'Pneumatic Header Distribution', 'Hazardous Area Instrumentation'],
    features: [
      'Smart microprocessor electro-pneumatic positioners with auto-tuning and diagnostics',
      'High-flow NAMUR solenoid valves with low power consumption and manual overrides',
      'Dual-display 3D visual position indicators visible from 30 meters distance',
      'Heavy-duty declutchable worm gearboxes for smooth manual emergency override',
    ],
    subTypes: [
      {
        title: 'Smart Electro-Pneumatic Positioner',
        desc: 'Digital smart positioners with 4-20mA HART, Profibus, auto-calibration, and LCD diagnostic readout.',
      },
      {
        title: 'Limit Switch Box (Weatherproof & Explosion-Proof)',
        desc: 'Dual mechanical micro-switches or inductive proximity sensors with high-visibility 3D position beacon.',
      },
      {
        title: 'NAMUR Solenoid Valve',
        desc: 'Direct-mount 5/2-way and 3/2-way convertible pilot solenoid valves in standard and explosion-proof coils.',
      },
      {
        title: 'Air Filter Regulator with Pressure Gauge (AFR)',
        desc: '5-micron particulate filtration with precision pressure regulation and manual/auto condensation drain.',
      },
      {
        title: 'Declutchable Manual Override Gearbox',
        desc: 'Sandwiched declutchable worm gear operator between valve and pneumatic actuator for manual emergency control.',
      },
      {
        title: 'Quick Exhaust Valves & Volume Boosters',
        desc: 'Pneumatic flow boosters and quick exhaust valves accelerating valve stroke opening and closing times.',
      },
    ],
  },
];
