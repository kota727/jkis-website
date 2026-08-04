// ============================================================
//  JKIS — Site Data
//  Companies sorted alphabetically, services structured
// ============================================================

export const SERVICES = [
  {
    id: 'access-control',
    // icon: 'ACB',
    title: 'Access Control & Biometrics',
    subtitle: 'Fingerprint · RFID · Face Recognition · Flap Barriers · Turnstiles',
    image: '/AC.png',
    shortDesc: 'Secure your premises with smart, multi-factor authentication systems.',
    longDesc: `Access Control Systems range from single-door solutions to highly sophisticated
    software-based computer systems controlling single or multiple sites. Our systems provide
    granular control over time and attendance of personnel, remote door management, and
    comprehensive audit trails. Technologies include magnetic cards, proximity, fingerprint
    recognition, facial recognition, and retina scanning units.`,
    features: [
      'Seamless attendance capture & MIS reports',
      'Remote door management via mobile app',
      'Multi-site centralized control dashboard',
      'Flap barriers & turnstile integration',
      'Metal detector & walk-through systems',
      'Daily / weekly / monthly analytics',
    ],
  },
  {
    id: 'fire-alarm',
    // icon: 'FA',
    title: 'Fire Alarm Systems',
    subtitle: 'Conventional · Addressable · Monitoring · Testing · Inspection',
    image: 'https://www.ftechenterprises.com/wp-content/uploads/2021/01/fire-alarms-1.jpg',
    shortDesc: 'Customized fire alarm solutions designed, installed, and maintained by certified professionals for businesses of all sizes.',
    longDesc: `JKIS specializes in providing customized fire alarm solutions that cater to diverse industries, ensuring optimal safety and compliance. Our comprehensive approach encompasses expert design, precision installation, and ongoing maintenance to ensure your facility is equipped with reliable and compliant fire detection and notification solutions. We evaluate the needs of each client and design a Service Plan based on facility and budgetary requirements — no two buildings are alike. From structural requirements to tenant type, our knowledgeable staff delivers code-compliant services to ensure the very best fire alarm monitoring coverage.`,
    features: [
      'Customized fire alarm system design',
      'Professional installation by certified technicians',
      'Smoke, heat & multi-sensor detectors',
      'Conventional & addressable fire alarm panels',
      '24/7 monitoring & rapid response',
      'Annual testing, inspection & ongoing maintenance',
    ],
    howWeHelp: [
      { title: 'Compliance', desc: 'Our team specializes in navigating local, state, and national standards to ensure your systems meet all requirements without compromise.' },
      { title: 'Safety', desc: 'We adopt a comprehensive approach to designing and implementing reliable systems that protect lives and property through meticulous inspections and testing.' },
      { title: 'Installation', desc: 'NICET-certified technicians ensure the protection of life, property, and business — designing, installing, and maintaining systems for businesses large and small.' },
      { title: 'Maintenance', desc: 'Regular inspections, testing, and preventive maintenance minimize downtime, extend system lifespan, and ensure continuous safety regulation compliance.' },
    ],
  },
  {
    id: 'sprinkler',
    // icon: 'SP',
    title: 'Fire Sprinkler Systems',
    subtitle: 'Wet Pipe · Dry Pipe · Pre-Action · Deluge · Foam · NFPA 25',
    image: 'https://img.magnific.com/premium-photo/photo-fire-sprinkler-system-there-are-red-sprinkler-heads-ceiling_1243994-7573.jpg?semt=ais_hybrid&w=740&q=80',
    shortDesc: 'Complete installation, inspection, repair, and maintenance for all commercial fire sprinkler system types.',
    longDesc: `Well-maintained commercial fire sprinkler systems are not only mandatory in commercial structures but also increase the chance of saving property and lives. JKIS provides complete sprinkler services — wet, dry, pre-action, deluge, and foam — handled from start to finish. Our knowledgeable team assesses unique requirements for every phase of your sprinkler system's life, whether in the initial design phase, seeking installation, or requiring repair. We ensure NFPA 25, NFPA 13, IS 15105, and NBC compliance throughout.`,
    features: [
      'Wet, dry, pre-action & deluge systems',
      'Foam-water sprinkler & foam systems',
      'Annual & quarterly sprinkler testing',
      'Test & inspect backflow preventers & fire pumps',
      'NFPA 25 / IS 15105 / NBC compliant',
      'Deficiency corrections & 5th-year full inspections',
    ],
    howWeHelp: [
      { title: 'Tailored Solutions', desc: "Custom design services ensure fire and life safety systems are optimized for effectiveness and efficiency, minimizing risks and maximizing protection unique to your facility." },
      { title: 'Compliance', desc: 'By custom-designing sprinkler systems, JKIS ensures compliance with relevant codes and standards while enhancing the overall reliability of the systems.' },
      { title: 'Comprehensive Support', desc: 'End-to-end support from initial consultation and design through installation, testing, and ongoing maintenance — alleviating worries about system performance.' },
      { title: 'Innovative Technology', desc: 'Integration of advanced technologies tailored to each client\'s needs, providing state-of-the-art solutions that surpass expectations and address evolving safety challenges.' },
    ],
    brands: ['Tyco', 'Viking', 'Minimax', 'Reliable Automatic Sprinkler', 'Johnson Controls'],
  },
  {
    id: 'hydrant',
    // icon: 'HY',
    title: 'Hydrant ',
    subtitle: 'Internal Hydrant · External Hydrant · Landing Valves · Jockey Pumps',
    image: '/Hydrant.png',
    shortDesc: 'Engineered fire hydrant networks designed and installed for rapid manual fire-fighting response at every facility type across India.',
    longDesc: `Fire hydrant systems form the backbone of active fire protection in any building. JKIS designs and installs internal and external hydrant networks, landing valves, pump sets, and underground storage tanks in compliance with TAC, NBC, and local fire authority norms. Our pump room design and commissioning ensures the entire system delivers rated pressure and flow on demand — every time. We provide comprehensive testing and inspection services with full AHJ-compliant reports and 24/7 monitoring integration.`,
    features: [
      'Internal & external hydrant networks',
      'Single & double-headed landing valves',
      'Main, jockey & diesel standby pump sets',
      'Underground & terrace-level storage tanks',
      'Hydrant flow testing & pressure verification',
      'TAC / NBC / local fire authority compliant',
    ],
    howWeHelp: [
      { title: 'Design', desc: 'Custom hydraulic design and engineering calculations for every facility type — from high-rise commercial to industrial warehousing and data centres.' },
      { title: 'Installation', desc: 'Skilled certified technicians ensure precise installation of every component, from pump rooms and risers to landing valves and hose reels.' },
      { title: 'Inspection', desc: 'Comprehensive testing and inspection covering pump performance, backflow preventers, hydrant flows, and hose pressure — with full AHJ-ready reports.' },
      { title: 'Maintenance', desc: 'Scheduled maintenance and 24/7 rapid response ensure your hydrant system is operationally ready every time it is needed.' },
    ],
    brands: ['Kirloskar', 'Grundfos', 'Wilo', 'Minimax', 'HD Fire'],
  },
  {
    id: 'surveillance',
    // icon: 'CC',
    title: 'Security Surveillance (CCTV)',
    subtitle: 'IP Cameras · AI Analytics · Remote Monitoring · DVR/NVR',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
    shortDesc: 'Customized surveillance solutions powered by 10+ years of industry expertise.',
    longDesc: `JKIS is differentiated in the marketplace by focusing on the creation of real value.
    We provide readily customized surveillance solutions through new product developments. With
    10 years of industry experience, we have the essential processes and systems in place to
    meet the most demanding requirements. We work closely with leading MNC brands to deliver
    the latest technology security products.`,
    features: [
      'IP & HD-TVI CCTV cameras',
      'AI-powered video analytics',
      'Remote monitoring via mobile/web',
      'DVR / NVR / cloud storage',
      'Bosch, HikVision, Panasonic, Pelco',
      'Pan-tilt-zoom & thermal cameras',
    ],
    brands: ['Bosch', 'HikVision', 'HoneyWell', 'Panasonic', 'Pelco'],
  },
  {
    id: 'smart-automation',
    // icon: 'SA',
    title: 'Smart Office Automation',
    subtitle: 'IoT · Smart Lighting · HVAC Control · Energy Management',
    image: '/smart_office_automation.png',
    shortDesc: 'Transform workplaces with intelligent automation that boosts efficiency and comfort.',
    longDesc: `Smart office automation from JKIS enables organizations to optimize energy consumption,
    enhance employee comfort, and streamline facility management. Our IoT-enabled solutions
    integrate seamlessly with existing infrastructure to automate lighting, HVAC, access,
    and security — all controllable from a single intuitive dashboard.`,
    features: [
      'Smart lighting & climate control',
      'IoT sensor integration',
      'Energy consumption monitoring',
      'Automated security lock-down',
      'Centralized facility dashboard',
      'Mobile-first control interface',
    ],
  },
];

// ============================================================
//  Featured Projects (case studies)
// ============================================================
export const PROJECTS = [
  {
    id: 'flipkart-warehouse',
    // category: 'Industrial Warehouse',
    // categoryTag: 'IW',
    title: 'Flipkart Fulfilment Centre ',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    desc: 'End-to-end fire sprinkler, hydrant, and CCTV surveillance deployment across a 4-lakh sq ft high-piled storage warehouse facility. Systems designed and commissioned to NBC and NFPA 13 standards with full AHJ sign-off.',
    services: ['Sprinkler Systems', 'Hydrant & Hose Reel', 'CCTV Surveillance'],
    client: 'Flipkart',
  },
  {
    id: 'manipal-Ayurvedic pharmacy',
    // category: 'Healthcare',
    // categoryTag: 'HC',
    title: 'Manipal Hospitals — Fire System Upgrade',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    desc: 'Mission-critical fire alarm system upgrade across a live 350-bed hospital campus — executed with zero disruption to patient care operations.',
    services: ['Fire Alarm Systems'],
    client: 'Manipal Hospitals',
  },
  // {
  //   id: 'metro-rail-stations',
  //   category: 'Transportation',
  //   categoryTag: 'TR',
  //   title: 'Hyderabad Metro Rail — Three Stations',
  //   image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
  //   desc: 'Structured cabling, addressable fire alarm, and IP surveillance systems across three metro stations, completed on schedule. Impeccable structured cabling and top-quality materials for critical public infrastructure.',
  //   services: ['Network Infrastructure', 'Fire Alarm Systems', 'CCTV Surveillance'],
  //   client: 'Metro Rail',
  // },
  {
    id: 'tata-zudio',
    // category: 'Commercial',
    // categoryTag: 'CO',
    title: 'Tata Zudio — Biometric Access Rollout',
    image:'/zudio.jpeg',
    desc: 'Comprehensive addressable fire alarm system deployed across a live multi-floor facility with zero disruption to daily operations. Smoke detectors, heat sensors, and manual call points integrated into a single panel with 24/7 monitoring — fully compliant with NBC and local fire authority norms from day one.',
    services: ['Fire Alaram And Access Control'],
    client: 'Tata Group',
  },
  {
    id: 'yazaki-suppression',
    // category: 'Manufacturing',
    // categoryTag: 'MF',
    title: 'Yazaki India — Fire Suppression System',
    image:'/yazaki1.jpeg',
    desc: 'Custom-designed fire suppression and gas detection systems for an automotive manufacturing plant, meeting international standards. Passed all regulatory audits without a single remark — from site survey to final handover.',
    services: ['Fire Alarm Systems', 'Sprinkler Systems'],
    client: 'Yazaki India',
  },
  {
    id: 'cars24-branches',
    // category: 'Commercial',
    // categoryTag: 'CO',
    title: 'Cars24 — Multi-Branch Security Rollout',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    desc: 'Comprehensive addressable fire alarm system deployed across a live multi-floor facility with zero disruption to daily operations. Smoke detectors, heat sensors, and manual call points integrated into a single panel with 24/7 monitoring — fully compliant with NBC and local fire authority norms from day one.',
    services: ['CCTV Surveillance', 'Access Control & Biometrics'],
    client: 'Cars24',
  },
];

// Clients sorted alphabetically
export const CLIENTS = [
  { name: 'ABB', logo: '/abblogo.png' },
  { name: 'Alshaya', logo: '/alshaya.png' },
  { name: 'Apollo powersystems' , logo:'./apollopowersystems.png'},
  { name:'Avery Dennison' , logo:'/averydennison.png'},
  { name: 'Biocon', logo: '/Biocon.png' },
  { name: 'Bosch', logo: '/boschlogo.png' },
  { name: 'Cars24', logo: '/cars24.png' },
  {name:'Difacto ' , logo:'/difactologo.png'},
  { name: 'Energy Corp', logo: '/energycorp.png' },
  { name: 'Flipkart', logo: '/flipkart.png' },
  {name:'Ferrohub Mall ' , logo:'/ferrohubmall.png'},
  {name:'Fluiconnecto',logo:'./fluiconnecto.png'},
  { name: 'Government of India', logo: '/artofliving.png' },
  { name: 'Herman Miller', logo: '/hermanlogo.png' },
  {name:'Hafele',logo:'./hafelelogo.png'},
  {name:'IAC',logo:'./IAClogo.png'},
  {name:'Koliwad',logo:'./koliwadlogo.png'},
  {name:'Leroy Grand',logo:'./leroygrand.png'},
  { name: 'Manipal Hospitals', logo: '/manipallogo.png' },
  { name: 'Metro Rail', logo: '/metrologo.png' },
  { name: 'NVent', logo: '/nventlogo.png' },
  {name:'Napno',logo:'./napino.png'},
  {name:'Nash energy',logo:'./Nashenergy.png'},
  {name:'Nippon paints',logo:'./nipponpaint.png'},
  {name:'Notre dame school',logo:'./notredame.png'},
  {name:'Nuggy technologies',logo:'./nugy.png'},
  {name:'Onepoint',logo:'./onepoint.png'},
  { name: 'Siemens', logo: '/siemenslogo.png' },
  {name:'Rayagar',logo:'./rayagar.png'},
  {name:'Shahi garmets',logo:'./shahi.png'},
  {name:'Sun pharma',logo:'./sunpharma.png'},
  { name: 'Tata', logo: '/tata.png' },
  {name:'tejas international school',logo:'./tejas.png'},
  {name:' Toll',logo:'./toll.png'},
  {name:'tower industries ' , logo:'./tower.png'},
  {name:'ullas agarbathi' , logo:'./ullas.png'},
  {name:'vegas ' , logo:'./vegas.png'},
  { name: 'Yazaki', logo: './yazaki.png' },
  { name: 'Zudio', logo: './zudiologo.png' },
  
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 16, suffix: '+', label: 'Prestigious Clients' },
  { value: 8, suffix: '', label: 'Core Service Verticals' },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Hussain',
    role: 'Maintainance Head, NDR Auto',
    rating: 5,
    text: 'JKIS delivered a comprehensive Fire alaram and public address system and hydrant   for our Factory within the committed timeline. Their team is professional, responsive, and their post-installation support is excellent. Highly recommend them for any security infrastructure project.',
    avatar: 'HN',
  },
  {
    id: 2,
    name: 'Chandra Shekar ',
    role: ' Project Lead, nVent',
    rating: 5,
    text: 'We engaged JKIS for our  fire alarm upgrade and Access controll system. They handled the complexity of a environment with zero disruption. The IBMS integration is seamless and has significantly improved our energy efficiency.',
    avatar: 'CS',
  },
  {
    id: 3,
    name: 'Prabhu',
    role: 'manager, Biocon',
    rating: 5,
    text: 'JKIS executed the Fire alarm system  on schedule. Their structured cabling work is impeccable and the quality of materials used is top-notch. A reliable partner for critical infrastructure.',
    avatar: 'PU',
  },
  {
    id: 4,
    name: 'Ananta Padnabha',
    role: 'Admin Head, Alshaya',
    rating: 5,
    text: 'The biometric access control system and Fire alaram  system  installed by JKIS transformed our attendance and Fire  management. The system is robust, the software is user-friendly, and their team trained our HR staff thoroughly. Zero issues in over two years of operation.',
    avatar: 'AP',
  },
  {
    id: 5,
    name: 'Avinash',
    role: 'Safety officer, Yazaki India',
    rating: 5,
    text: 'From the initial site survey to final handover, JKIS maintained exceptional professionalism. Their fire suppression and gas detection systems meet international standards and passed all regulatory audits without a single remark. Outstanding team.',
    avatar: 'MF',
  },
  {
    id: 6,
    name: 'pavan',
    role: 'Safety Officer, Hermanmiller',
    rating: 5,
    text: 'We needed a quick deployment of fire alarm  and public address system  across multiple branches. JKIS managed it all centrally and delivered ahead of schedule. Their remote monitoring setup gives us complete visibility across all locations.',
    avatar: 'PN',
  },
];

export const WHY_CHOOSE = [
  { icon: 'SF', title: 'Safety Focused', desc: 'All solutions meet and exceed national and international safety standards.' },
  { icon: 'FD', title: 'Fast Decision Making', desc: 'Agile processes mean quick quotes, rapid deployment, and minimal downtime.' },
  { icon: 'VE', title: 'Value Engineering', desc: 'We optimize every solution to reduce client costs without compromising quality.' },
  { icon: 'SC', title: 'Supply Chain Mastery', desc: 'Direct partnerships with leading brands ensure best pricing and genuine products.' },
  { icon: 'QA', title: 'Unmatched Quality', desc: 'ISO-aligned processes and certified technicians on every project.' },
  { icon: 'OT', title: 'On-Time Delivery', desc: 'Our track record speaks — projects delivered on schedule, every time.' },
];
export const PARTNERS = [
  {
    id: 'glyptic',
    name: 'Glyptic',
    tagline: 'Time will change tomorrow',
    type: 'channel',
    typeLabel: 'Official Channel Partner',
    region: 'Bangalore',
    logo: '/glyptic-partner.png',
    website: 'https://www.glyptic.in',
    desc: 'Together, we strengthen our mission to deliver reliable fire safety & life protection solutions across Bangalore and surrounding regions.',
  },
  {
    id: 'cethna-fire',
    name: 'Cethna Fire Services',
    tagline: 'Fire Safety Specialists',
    type: 'associate',
    typeLabel: 'Associate Partner',
    region: 'Banglore',
    logo: '',                                  // add logo path when available
    website: '',
    desc: 'An associate partnership delivering comprehensive fire safety installation and maintenance services across Hyderabad and Telangana.',
  },
];