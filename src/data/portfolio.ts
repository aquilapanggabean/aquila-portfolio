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

export type ExperienceKind =
  | 'Work & Internship'
  | 'Event & Leadership'
  | 'Organization'
  | 'Education';

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  kind: ExperienceKind;
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
    'Information Technology student at Telkom University focused on the Internet of Things (IoT), digital innovation, IT problem-solving, and business solutions through technology. Finalist at National Entrepreneurship Adikara 2026 with TiMu Escrow.',
  scrollHint: 'Scroll down to inspect the curated case archive and CV ledger.',
  email: 'altair.panggabean@gmail.com',
  phone: '+62 812-2366-8133',
  phoneHref: 'tel:+6281223668133',
  resumeUrl: '/assets/aistudio/Aquila_Altair_Panggabean-resume__10__19d10eec.pdf',
  githubUrl: 'https://github.com/aquilapanggabean',
  githubHandle: '@aquilapanggabean',
  linkedinUrl: 'https://www.linkedin.com/in/aquilapanggabean',
  linkedinHandle: 'in/aquilapanggabean',
  location: 'Bandung, Indonesia',
  heroFocusAnchors: [
    {
      index: '01',
      label: 'Software & IoT Systems',
      detail: 'Web and mobile development (JavaScript, React Native, React), plus Arduino IoT hardware',
    },
    {
      index: '02',
      label: 'Digital Business & IT Solutions',
      detail: 'Escrow transaction modeling, Mobile Innovation Lab research, and PKM-KC prototyping',
    },
    {
      index: '03',
      label: 'Public Relations & Event Leadership',
      detail: 'Master of Ceremonies, media partner outreach, event operations, and team liaison work',
    },
  ],
  aboutProse: [
    'I am an Information Technology undergraduate at Telkom University (2025 to 2029) with strong interests in the Internet of Things (IoT), digital innovation, IT problem-solving, and addressing business challenges with practical IT solutions.',
    'From developing web and mobile applications during my IT Department internship at PT. Tiki Jalur Nugraha Ekakurir (JNE) and researching mobile-based social solutions at Mobile Innovation Laboratory, to reaching the National Entrepreneurship Adikara 2026 finals with TiMu and leading large-scale campus and national events, I remain committed to continuous self-development and adapting to new technologies.',
  ],
  aboutFacts: [
    { label: 'Institution', value: 'Telkom University (Sep 2025 - Aug 2029)' },
    { label: 'Core Focus', value: 'IoT, Digital Innovation & Business IT Solutions' },
    { label: 'Languages', value: 'Bahasa Indonesia (Native), English (Proficient)' },
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
    recognition: '2nd Place, MotionHack 5.0 (Mobile Innovation Lab)',
    category: 'FinTech & Web',
    year: '2025',
    role: 'Product & Frontend Developer',
    overview:
      'Internal hackathon product built for MotionHack 5.0 by Mobile Innovation Laboratory, pairing focused user workflow design with a functional web interface and business viability pitch.',
    problem:
      'Teams competing in time-boxed product sprints often split between over-scoped slides and unfinished interfaces that fail to demonstrate real user flows.',
    contribution:
      'Translated the core user journey into a working frontend prototype, aligned feature scope with judging criteria, and delivered the technical walkthrough that earned 2nd Place.',
    technologies: ['React', 'TypeScript', 'Vite', 'UI Prototyping', 'Digital Business'],
    media: PORTFOLIO_MEDIA.projects.superplus,
    repositoryUrl: 'https://github.com/aquilapanggabean',
  },
  {
    id: 'vantage-ai',
    index: '03',
    title: 'Vantage AI',
    recognition: 'Mobile Innovation Laboratory, Telkom University',
    category: 'Mobile & Research',
    year: '2025',
    role: 'Digital Business & Mobile Systems Intern',
    overview:
      'Applied mobile innovation research initiative at Telkom University Mobile Innovation Laboratory focused on solving social problems through structured mobile workflows and digital business modeling.',
    problem:
      'Early lab prototypes needed a clear bridge between social-impact research, viable digital business models, and repeatable mobile interaction structures.',
    contribution:
      'Engaged in study group research on mobile-based solutions to social problems, evaluated real-world application impact, and documented structured product requirements.',
    technologies: [
      'Digital Business Modeling',
      'Mobile UI Architecture',
      'Project Management',
      'Applied Research',
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
      'Faculty-level Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) research initiative at Telkom University focused on constructing a grounded, testable applied information technology prototype.',
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
    title: '2nd Place, MotionHack 5.0 Internal Hackathon',
    issuer: 'Mobile Innovation Laboratory, Telkom University',
    year: '2025',
    category: 'Competition',
    summary:
      'Secured 2nd Place in the internal hackathon organized by Mobile Innovation Laboratory by delivering SuperPlus with React and TypeScript.',
  },
  {
    id: 'pkm-kc-faculty',
    title: 'Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC)',
    issuer: 'Faculty of Informatics, Telkom University',
    year: '2025',
    category: 'Academic',
    summary:
      'Participated at the faculty level in the Karsa Cipta applied IT research track, developing technical specifications and testable system prototypes.',
  },
  {
    id: 'sdh-osn-distinction',
    title: '2024 School OSN Participant & Science Honors (91.50/100.00)',
    issuer: 'Sekolah Dian Harapan Jambi',
    year: '2024',
    category: 'Academic',
    summary:
      'Competed in the 2024 School National Science Olympiad (OSN), graduated in the Science track with a 91.50/100.00 score, and ran for Student Council President 2024.',
  },
];

export const EXPERIENCE_LEDGER: ExperienceItem[] = [
  {
    id: 'itsf-pr',
    period: 'Nov 2026 - Present',
    role: 'Staff of Public Relation',
    organization: 'ITSF Championship · Bandung, Indonesia',
    kind: 'Event & Leadership',
    highlights: [
      'Content Creation: Designed and produced promotional and informational social media content to grow audience reach and tournament participation.',
      'Media Partners: Communicated, negotiated, and collaborated on publications with on-campus and external media outlets to expand exposure.',
      'Team Liaison Officer (LO): Served as primary point of contact and operational support for participating basketball teams, addressing technical needs throughout the tournament.',
    ],
  },
  {
    id: 'megabit-mc',
    period: 'Aug 2026 - Sep 2026',
    role: 'Master of Ceremonies',
    organization: 'PKKMB x Megabit 9.0 · Bandung, Indonesia',
    kind: 'Event & Leadership',
    highlights: [
      'Served as lead Master of Ceremonies (MC) for MEGABIT 9.0, hosting hundreds of incoming Information Technology undergraduate students.',
      'Delivered the "Hotel Transylvania"-themed program, managed session transitions according to rundown, and maintained high audience engagement.',
      'Improvised and coordinated with the on-field event division to handle real-time pacing dynamics and sudden schedule adjustments smoothly.',
    ],
  },
  {
    id: 'megabit-event',
    period: 'Jun 2026 - Sep 2026',
    role: 'Event Management Staff',
    organization: 'PKKMB x Megabit 9.0 (HMIT Telkom University) · Bandung, Indonesia',
    kind: 'Event & Leadership',
    highlights: [
      'Event Concept & Rundown Design: Designed the "Hotel Transylvania" orientation concept flow, rundown, and technical guidelines for B.Sc. Information Technology freshmen.',
      'Engagement & Activity Planning: Developed creative group assignments, ice-breakers, and interactive activities to help hundreds of new students adjust.',
      'Cross-Division Coordination & Live Operations: Coordinated mobilization plans and technical requirements with LO, Usher, Logistics, and PDD divisions while resolving on-site scheduling issues.',
    ],
  },
  {
    id: 'ibl-allstars-2026',
    period: 'Apr 2026',
    role: 'IBL All Stars 2026 - Usher Tribune Volunteer',
    organization: 'Indonesian Basketball League (IBL) · Bandung, Indonesia',
    kind: 'Event & Leadership',
    highlights: [
      'Managed seating arrangements and crowd flow in the grandstand area during high-traffic peak periods at the 2026 IBL All-Star Game ("Brighter Future").',
      'Proactively guided visitors to their seats while maintaining a safe, orderly, and conducive stadium environment.',
      'Collaborated with the event operations team to deliver high-quality hospitality and resolve guest inquiries in real time.',
    ],
  },
  {
    id: 'jne-it-internship',
    period: 'May 2025',
    role: 'Information Technology Department Internship',
    organization: 'PT. Tiki Jalur Nugraha Ekakurir (JNE) · Jambi, Indonesia',
    kind: 'Work & Internship',
    highlights: [
      'Developed web and mobile applications and designed front-end interfaces using JavaScript and React Native.',
      'Troubleshot back-end issues to support system functionality and assisted in maintaining and optimizing internal logistics systems.',
      'Handled day-to-day computer hardware troubleshooting while gaining practical IT experience in real-world logistics operations.',
    ],
  },
];

export const ORGANISATIONAL_LEDGER: ExperienceItem[] = [
  {
    id: 'mobile-innovation-lab',
    period: 'Oct 2025 - Sep 2026',
    role: 'Digital Business / Project Manager Internship',
    organization: 'Mobile Innovation Laboratory, Telkom University · Bandung, Indonesia',
    kind: 'Organization',
    highlights: [
      'Engaged in research on mobile-based solutions to social problems under the Digital Business Division at Telkom University Faculty of Informatics.',
      'Participated in structured study groups to deepen digital business concepts and project management practices.',
      'Evaluated the real-world impact of mobile innovation concepts and applied student prototypes.',
    ],
  },
  {
    id: 'sdh-student-council',
    period: 'Sep 2023 - Nov 2024',
    role: 'Head of Public Relations Division',
    organization: 'Sekolah Dian Harapan Jambi Student Council · Jambi, Indonesia',
    kind: 'Organization',
    highlights: [
      'Led the Public Relations division to strengthen organizational branding and external communications.',
      'Managed social media content strategy to increase student and wider community engagement.',
      'Coordinated cross-division campaigns and publicizing activities while developing leadership, teamwork, and public speaking skills.',
    ],
  },
];

export const EDUCATION_LEDGER: ExperienceItem[] = [
  {
    id: 'telkom-university',
    period: 'Sep 2025 - Aug 2029 (Expected)',
    role: 'Undergraduate Information Technology Student',
    organization: 'Telkom University · Bandung, Indonesia',
    kind: 'Education',
    highlights: [
      'Participating in Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) at the Faculty Level.',
      'Joined MotionHack 5.0 (Internal Hackathon by Mobile Innovation Laboratory) and earned 2nd Place.',
      'Finalist at National Entrepreneurship Adikara 2026 with TiMu Escrow.',
      'Served as Master of Ceremonies in Megabit 9.0.',
    ],
  },
  {
    id: 'sekolah-dian-harapan',
    period: 'Jan 2023 - Jun 2025',
    role: 'Senior High School, Science (91.50 / 100.00)',
    organization: 'Sekolah Dian Harapan · Jambi, Indonesia',
    kind: 'Education',
    highlights: [
      'Head of Public Relations, Student Council; ran for Student Council President of Sekolah Dian Harapan Jambi 2024.',
      'Participated in the 2024 School National Science Olympiad (OSN).',
      'Master of Ceremony at National Education Day and various school events.',
      'Open House Committee (5K Fun Run) and School Representative for 1st Year Sekolah Dian Harapan Jambi Open House.',
    ],
  },
];

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    index: '01',
    title: 'Hard Skills & Engineering',
    summary:
      'Building web and mobile applications, front-end interfaces, IoT prototypes, and troubleshooting software and hardware systems.',
    items: [
      'App Development (JavaScript & React Native)',
      'Programming & Web Development (React, TypeScript, Tailwind CSS)',
      'Back-End Troubleshooting & Internal System Maintenance',
      'Internet of Things (IoT) & Arduino Prototyping',
      'Computer Hardware Troubleshooting',
    ],
  },
  {
    index: '02',
    title: 'Digital Business & Problem Solving',
    summary:
      'Translating business and social challenges into structured IT solutions through analytical thinking and product design.',
    items: [
      'IT Problem-Solving & Business IT Solutions',
      'Digital Business Research & Project Management',
      'Peer-to-Peer Escrow Architecture (TiMu · Adikara 2026)',
      'Applied IT Research (PKM-KC Faculty Level)',
      'Critical Thinking & Analytical Skills',
    ],
  },
  {
    index: '03',
    title: 'Leadership, Events & Languages',
    summary:
      'Leading public relations divisions, hosting hundreds of attendees as Master of Ceremonies, and coordinating live event operations.',
    items: [
      'Leadership & Cross-Division Event Management',
      'Public Relations, Media Partnerships & Content Creation',
      'Master of Ceremonies & Public Speaking',
      'Team Liaison Officer (LO) & Crowd Hospitality',
      'Languages: Bahasa Indonesia (Native), English (Proficient)',
    ],
  },
];
