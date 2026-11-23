import { PORTFOLIO_MEDIA, type MediaAsset } from './media';

export type ProjectCategory =
  | 'All'
  | 'FinTech & Web'
  | 'IoT & Hardware'
  | 'Mobile & Research';

export interface EscrowStateStep {
  step: string;
  stateName: string;
  actor: string;
  summary: string;
  guardCondition: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  recognition: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  role: string;
  overview: string;
  problem: string;
  contribution: string;
  technologies: string[];
  media: MediaAsset;
  collaborators?: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
  escrowStateMachine?: EscrowStateStep[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  kind: 'Leadership & Operations' | 'Competition & Research' | 'Education';
  highlights: string[];
}

export interface CapabilityGroup {
  index: string;
  title: string;
  summary: string;
  items: string[];
}

export type AchievementCategory =
  | 'Competition'
  | 'Academic'
  | 'Certification'
  | 'Organization';

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: AchievementCategory;
  summary: string;
  proofUrl?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const SITE_PROFILE = {
  fullName: 'Aquila Altair Panggabean',
  shortBrand: 'Aquila.AP',
  academicIdentity: 'Undergraduate at Telkom University / Faculty of Informatics',
  coordinates: 'LAT: -6.9744° S, 107.6303° E',
  headlineFirst: 'Aquila Altair',
  headlineLast: 'PANGGABEAN',
  headline: 'Aquila Altair Panggabean',
  positioning:
    'Information Technology undergraduate at Telkom University. Bridging Digital Innovation, IoT, and Business Strategy into Scalable IT Solutions. Founder and Strategist of TiMu Escrow.',
  scrollHint: 'Scroll down to inspect the curated case archive.',
  email: 'altair.panggabean@gmail.com',
  githubUrl: 'https://github.com/aquilapanggabean',
  githubHandle: '@aquilapanggabean',
  linkedinUrl: 'https://www.linkedin.com/in/aquilapanggabean',
  linkedinHandle: 'in/aquilapanggabean',
  location: 'Bandung, Indonesia',
  heroFocusAnchors: [
    {
      index: '01',
      label: 'Software & IoT Systems',
      detail: 'Web applications, state-machine workflows, and Arduino sensor hardware',
    },
    {
      index: '02',
      label: 'Product & Business Strategy',
      detail: 'Escrow transaction modeling, structured scoping, and national case pitches',
    },
    {
      index: '03',
      label: 'Leadership & Public Relations',
      detail: 'Campaign production, media partner coordination, and team liaison operations',
    },
  ],
  aboutProse: [
    'I am an Information Technology undergraduate at Telkom University focused on turning technical architecture and business requirements into practical software and connected hardware systems. My work sits at the intersection of structured web engineering, microcontroller-based IoT prototyping, and clear product scoping.',
    'Across national entrepreneurship competitions, hackathons, applied faculty research, and student public relations roles, I prioritize measurable execution: designing reliable transaction states, validating hardware telemetry on the bench, and communicating clearly across technical and non-technical teams.',
  ],
  aboutFacts: [
    { label: 'Institution', value: 'Telkom University' },
    { label: 'Program', value: 'B.Sc. Information Technology (Undergraduate)' },
    { label: 'Core Domains', value: 'Web Engineering, Arduino IoT, Product Strategy' },
  ],
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'projects', label: 'Work', href: '#projects' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Ledger', href: '#experience' },
  { id: 'capabilities', label: 'Capabilities', href: '#capabilities' },
  { id: 'contact', label: 'Inquiries', href: '#contact' },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All',
  'FinTech & Web',
  'IoT & Hardware',
  'Mobile & Research',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'timu',
    index: '01',
    title: 'TiMu',
    recognition: 'Finalist, National Entrepreneurship Adikara 2026',
    category: 'FinTech & Web',
    year: '2026',
    role: 'Product Architect & Engineering Lead',
    overview:
      'Peer-to-peer escrow platform designed to protect direct online transactions through an explicit four-step fund custody state machine and verifiable handoff rules.',
    problem:
      'Informal peer-to-peer buyers and sellers frequently transact without neutral payment custody, creating settlement risk, unclear delivery proof, and unresolved disputes.',
    contribution:
      'Co-authored the transaction model and four-step fund custody state machine, structured the problem-to-solution case study, and prepared the product architecture presented at National Entrepreneurship Adikara 2026.',
    technologies: [
      'TypeScript',
      'React',
      'State-Machine Architecture',
      'Escrow Custody Modeling',
      'Tailwind CSS',
    ],
    media: PORTFOLIO_MEDIA.projects.timu,
    collaborators: [
      'Aquila Altair Panggabean',
      'Berni Venus Mutri Azhara',
      'Vincentius Farrel Hermawan',
    ],
    repositoryUrl: 'https://github.com/aquilapanggabean',
    escrowStateMachine: [
      {
        step: '01',
        stateName: 'Order & Deposit',
        actor: 'Buyer',
        summary:
          'Buyer initiates the transaction agreement and deposits funds into the TiMu custody ledger rather than transferring directly to the seller.',
        guardCondition: 'Agreement terms locked and payment receipt confirmed.',
      },
      {
        step: '02',
        stateName: 'Custody Lock',
        actor: 'TiMu Escrow Ledger',
        summary:
          'Funds remain frozen in neutral custody while the seller receives a verified fulfillment signal to dispatch goods or complete deliverables.',
        guardCondition: 'Ledger balance verified; withdrawal blocked until fulfillment.',
      },
      {
        step: '03',
        stateName: 'Delivery & Verification',
        actor: 'Seller & Buyer',
        summary:
          'Seller submits fulfillment evidence and the buyer inspects the item or deliverable within a defined confirmation window.',
        guardCondition: 'Inspection timer active with explicit accept or contest action.',
      },
      {
        step: '04',
        stateName: 'Settlement or Dispute',
        actor: 'Escrow Rules Engine',
        summary:
          'Confirmed delivery releases funds automatically to the seller; contested orders route to structured evidence review before settlement.',
        guardCondition: 'Single terminal state: Released to Seller or Refunded to Buyer.',
      },
    ],
  },
  {
    id: 'superplus',
    index: '02',
    title: 'SuperPlus',
    recognition: '2nd Place, MotionHack 5.0',
    category: 'FinTech & Web',
    year: '2025',
    role: 'Product & Frontend Developer',
    overview:
      'Hackathon product built under tight delivery constraints for MotionHack 5.0, pairing focused user workflow design with a functional web interface and business viability pitch.',
    problem:
      'Teams competing in time-boxed product sprints often split between over-scoped slides and unfinished interfaces that fail to demonstrate real user flows.',
    contribution:
      'Translated the core user journey into a working frontend prototype, aligned feature scope with judging criteria, and delivered the technical walkthrough that earned 2nd Place.',
    technologies: ['React', 'TypeScript', 'Vite', 'UI Prototyping', 'Product Strategy'],
    media: PORTFOLIO_MEDIA.projects.superplus,
    repositoryUrl: 'https://github.com/aquilapanggabean',
  },
  {
    id: 'vantage-ai',
    index: '03',
    title: 'Vantage AI',
    recognition: 'Mobile Innovation Lab, Telkom University',
    category: 'Mobile & Research',
    year: '2025',
    role: 'Mobile Systems Contributor',
    overview:
      'Applied mobile application research initiative inside Telkom University Mobile Innovation Lab exploring structured intelligent workflows and clean mobile information architecture.',
    problem:
      'Early lab prototypes needed a repeatable mobile interaction structure capable of presenting analytical outputs clearly on compact screens without overwhelming users.',
    contribution:
      'Contributed to mobile interaction architecture, evaluated user task flows, and documented technical requirements within the lab research cycle.',
    technologies: [
      'Mobile UI Architecture',
      'Applied Research',
      'Workflow Design',
      'System Documentation',
    ],
    media: PORTFOLIO_MEDIA.projects.vantageAi,
  },
  {
    id: 'ezpark',
    index: '04',
    title: 'EZPark',
    recognition: 'Arduino IoT Prototype',
    category: 'IoT & Hardware',
    year: '2025',
    role: 'Embedded & Systems Builder',
    overview:
      'Microcontroller-based smart parking detection prototype using Arduino and ultrasonic distance sensors to monitor bay occupancy and report real-time slot status.',
    problem:
      'Drivers spend avoidable time searching multi-bay parking areas when occupancy is tracked manually rather than detected directly at the bay level.',
    contribution:
      'Wired the Arduino Uno and ultrasonic sensor circuit, calibrated distance thresholds for occupancy state transitions, and verified live local status readouts on the bench.',
    technologies: ['Arduino', 'C / C++', 'Ultrasonic Sensors', 'Embedded Systems', 'IoT Telemetry'],
    media: PORTFOLIO_MEDIA.projects.ezpark,
    repositoryUrl: 'https://github.com/aquilapanggabean',
  },
  {
    id: 'pkm-kc',
    index: '05',
    title: 'PKM-KC Applied IT Research',
    recognition: 'Faculty Level, Karsa Cipta Track',
    category: 'Mobile & Research',
    year: '2025',
    role: 'Applied IT Researcher',
    overview:
      'Faculty-level Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) research initiative focused on constructing a grounded, testable applied information technology prototype.',
    problem:
      'Translating academic IT concepts into working functional prototypes requires formal problem framing, system requirements validation, and reproducible engineering documentation.',
    contribution:
      'Authored technical specifications, structured system architecture diagrams, and coordinated iterative validation under faculty-level review guidelines.',
    technologies: [
      'Applied IT Research',
      'System Architecture',
      'Technical Writing',
      'Prototype Validation',
    ],
    media: PORTFOLIO_MEDIA.projects.pkmKc,
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'adikara-2026',
    title: 'Finalist, National Entrepreneurship Adikara 2026',
    issuer: 'National Entrepreneurship Adikara',
    year: '2026',
    category: 'Competition',
    summary:
      'Advanced to the national finalist stage with TiMu, a peer-to-peer escrow platform backed by a four-step fund custody state machine.',
  },
  {
    id: 'motionhack-5',
    title: '2nd Place, MotionHack 5.0',
    issuer: 'MotionHack 5.0 Competition Panel',
    year: '2025',
    category: 'Competition',
    summary:
      'Secured 2nd Place by delivering SuperPlus, pairing focused user workflow design with a working React and TypeScript interface.',
  },
];

export const EXPERIENCE_LEDGER: ExperienceItem[] = [
  {
    id: 'itsf-pr',
    period: 'Nov 2026 to Present',
    role: 'Staff of Public Relations',
    organization: 'ITSF Championship',
    kind: 'Leadership & Operations',
    highlights: [
      'Produced structured social media campaign schedules and visual communication assets for tournament announcements.',
      'Managed external media partner relations and publication coordination across student and regional channels.',
      'Served as Team Liaison Officer (LO), coordinating schedules, briefings, and operational inquiries for participating teams.',
    ],
  },
  {
    id: 'adikara-2026',
    period: '2026',
    role: 'Finalist & Product Lead (TiMu)',
    organization: 'National Entrepreneurship Adikara 2026',
    kind: 'Competition & Research',
    highlights: [
      'Architected the TiMu peer-to-peer escrow model and four-step fund custody state machine.',
      'Collaborated with Berni Venus Mutri Azhara and Vincentius Farrel Hermawan from problem validation through national finalist presentation.',
    ],
  },
  {
    id: 'motionhack-5',
    period: '2025',
    role: '2nd Place Finisher (SuperPlus)',
    organization: 'MotionHack 5.0',
    kind: 'Competition & Research',
    highlights: [
      'Built and pitched the SuperPlus product prototype within hackathon delivery constraints, securing 2nd Place.',
      'Balanced technical feasibility, interface clarity, and business strategy under panel evaluation.',
    ],
  },
  {
    id: 'mobile-innovation-lab',
    period: '2025',
    role: 'Project & Research Contributor (Vantage AI)',
    organization: 'Mobile Innovation Lab, Telkom University',
    kind: 'Competition & Research',
    highlights: [
      'Contributed to mobile system exploration and structured UX specifications for the Vantage AI lab initiative.',
      'Participated in faculty-level applied IT research under the PKM-KC Karsa Cipta track.',
    ],
  },
];

export const EDUCATION_LEDGER: ExperienceItem[] = [
  {
    id: 'telkom-university',
    period: 'Undergraduate',
    role: 'B.Sc. in Information Technology',
    organization: 'Telkom University',
    kind: 'Education',
    highlights: [
      'Coursework and applied lab work spanning software engineering, web systems, Internet of Things (Arduino), and digital business strategy.',
      'Active participant in national entrepreneurship competitions, engineering hackathons, Mobile Innovation Lab, and PKM-KC research.',
    ],
  },
];

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    index: '01',
    title: 'Software & IoT Systems',
    summary:
      'Building reliable frontend applications, explicit state flows, and sensor-driven embedded prototypes.',
    items: [
      'React, TypeScript, Vite & Tailwind CSS',
      'Semantic HTML5 & Accessible UI Engineering',
      'State-Machine & Workflow Modeling',
      'Arduino Microcontrollers & Ultrasonic Sensors',
      'Git, GitHub & Automated CI Deployment',
    ],
  },
  {
    index: '02',
    title: 'Product & Business Strategy',
    summary:
      'Aligning technical architecture with user problems, market viability, and clear decision documentation.',
    items: [
      'Peer-to-Peer Escrow & Custody Flow Design',
      'Problem-to-Solution Case Study Framing',
      'Applied IT Research (PKM-KC Track)',
      'Competitive Product Scoping & Pitching',
      'Cross-Team Requirements Documentation',
    ],
  },
  {
    index: '03',
    title: 'Leadership & Public Relations',
    summary:
      'Coordinating external communications, partner relationships, and on-the-ground event operations.',
    items: [
      'Social Media Campaign Production',
      'Media Partner Relations & Outreach',
      'Team Liaison Officer (LO) Coordination',
      'Stakeholder Briefings & Technical Presentation',
      'Collaborative Sprint Execution',
    ],
  },
];
