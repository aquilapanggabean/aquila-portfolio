import {
  EXPERIENCE_GALLERIES,
  EXPERIENCE_MEDIA,
  PORTFOLIO_MEDIA,
  PROJECT_GALLERIES,
  type MediaAsset,
} from './media';

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
  gallery?: readonly MediaAsset[];
  collaborators?: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
  pitchDeckUrl?: string;
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

export interface ExperiencePhotoItem {
  id: string;
  index: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  caption: string;
  slotPath: string;
  media?: MediaAsset;
  gallery?: readonly MediaAsset[];
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

export interface CertificateItem {
  id: string;
  index: string;
  code: string;
  title: string;
  issuer: string;
  issuedDate: string;
  validUntil?: string;
  scoreLabel: string;
  levelLabel: string;
  certificateNumber?: string;
  breakdown: readonly { label: string; score: string }[];
  media?: MediaAsset;
  pdfUrl?: string;
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
    'Information Technology student at Telkom University focused on the Internet of Things (IoT), digital innovation, IT problem-solving, and business solutions through technology. Finalist at ADIKARA 2026: Entrepreneurship with TiMu Escrow.',
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
    'From developing web and mobile applications during my IT Department internship at PT. Tiki Jalur Nugraha Ekakurir (JNE) and researching mobile-based social solutions at Mobile Innovation Laboratory, to reaching the ADIKARA 2026: Entrepreneurship finals with TiMu and leading large-scale campus and basketball events, I remain committed to continuous self-development and adapting to new technologies.',
  ],
  aboutFacts: [
    { label: 'Institution', value: 'Telkom University (Sep 2025 - Aug 2029)' },
    { label: 'Core Focus', value: 'IoT, Digital Innovation & Business IT Solutions' },
    { label: 'Languages', value: 'Bahasa Indonesia (Native), English (ECCT 3.5 · EPrT 503)' },
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
    title: 'TiMu (Titik Temu)',
    recognition: 'Finalist, ADIKARA 2026: Entrepreneurship',
    category: 'FinTech & Web',
    year: '2026',
    role: 'Product Architect & Engineering Lead',
    overview:
      'Web platform connecting young talent and local MSMEs (UMKM) safely through unbiased anonymous skill matching, third-party Escrow payment protection (90% Talent / 10% Admin), and verifiable work certificates.',
    problem:
      'Students and local MSMEs struggle with biased early hiring, informal payment agreements without neutral fund custody, and unverifiable freelance track records.',
    contribution:
      'Co-authored the four-step Escrow fund custody state machine, designed the unbiased anonymous talent card and project board flow, and deployed the live prototype presented at ADIKARA 2026: Entrepreneurship.',
    technologies: [
      'TypeScript',
      'React',
      'Escrow Custody Modeling',
      'Unbiased Skill Matching',
      'Tailwind CSS',
    ],
    media: PORTFOLIO_MEDIA.projects.timu,
    gallery: PROJECT_GALLERIES.timu,
    collaborators: [
      'Aquila Altair Panggabean',
      'Berni Venus Mutri Azhara',
      'Vincentius Farrel Hermawan',
    ],
    repositoryUrl: 'https://github.com/aquilapanggabean/TiMu',
    liveDemoUrl: 'https://timu-fawn.vercel.app/',
    escrowStateMachine: [
      {
        step: '01',
        stateName: 'Order & Deposit',
        actor: 'MSME / Employer',
        summary:
          'Employer locks project scope and deposits payment into third-party TiMu Escrow custody rather than sending informal direct transfers.',
        guardCondition: 'Agreement terms locked and Escrow deposit confirmed (90% Talent / 10% Admin).',
      },
      {
        step: '02',
        stateName: 'Custody Lock',
        actor: 'TiMu Escrow Ledger',
        summary:
          'Funds remain frozen in neutral custody while the matched talent completes deliverables against the agreed brief.',
        guardCondition: 'Ledger balance verified; withdrawal blocked until fulfillment.',
      },
      {
        step: '03',
        stateName: 'Delivery & Verification',
        actor: 'Talent & MSME',
        summary:
          'Talent submits work output and the MSME reviews deliverables within a structured confirmation window.',
        guardCondition: 'Inspection timer active with explicit accept or contest action.',
      },
      {
        step: '04',
        stateName: 'Settlement & Certificate',
        actor: 'Escrow Rules Engine',
        summary:
          'Confirmed delivery releases 90% to the talent and issues a verifiable TiMu work certificate; contested orders route to evidence review.',
        guardCondition: 'Terminal state: Released with verified certificate or Refunded to Employer.',
      },
    ],
  },
  {
    id: 'superplus',
    index: '02',
    title: 'SuperPlus',
    recognition: '3rd Place, MotionHack 5.0 (Mobile Innovation Lab)',
    category: 'FinTech & Web',
    year: '2025',
    role: 'Digital Business Co-Founder (Team 12)',
    overview:
      'Household waste marketplace mobile application turning plastic, organic waste, and used cooking oil into economic value by connecting households directly with MSMEs, farmers, and recyclers through Marketplace, SmartBid, and DirectChat.',
    problem:
      'Over 60% of Indonesian household waste ends up in landfills because residents lack simple sorting incentives and transparent direct access to MSME and recycling buyers.',
    contribution:
      'Led Digital Business modeling for Team 12: structured the Business Model Canvas, competitor analysis, Go-To-Market roadmap, and financial feasibility (NPV Rp2.76B, IRR 70%, BCR 2.73, 24-month payback) that won 3rd Place at MotionHack 5.0.',
    technologies: [
      'Digital Business Modeling',
      'Marketplace & SmartBid',
      'DirectChat Architecture',
      'Financial Feasibility',
      'Mobile UI Prototyping',
    ],
    media: PORTFOLIO_MEDIA.projects.superplus,
    gallery: PROJECT_GALLERIES.superplus,
    pitchDeckUrl: '/assets/aistudio/SuperPlus__1__ebfd9505.pdf',
    collaborators: [
      'Alexandra Yohana',
      'Aquila Altair Panggabean',
      'Adika Ghivan Pratama',
      'Muhammad Irfan Afifi',
      'Raditya A. Rachmadie',
      'Aufa Azzaky Arief',
      'Fathul Rozi',
    ],
  },
  {
    id: 'vantage-ai',
    index: '03',
    title: 'Vantage AI',
    recognition: 'Mobile Innovation Laboratory, Telkom University',
    category: 'Mobile & Research',
    year: '2025',
    role: 'Product Strategist & Digital Business Researcher',
    overview:
      'Computer Vision retail intelligence concept that integrates directly into existing shopping mall CCTV networks to eliminate low-traffic "Dead Zones" using real-time visitor tracking, Dwell Time metrics, and Heat Maps.',
    problem:
      'Shopping malls operate with blind spots in physical visitor analytics, leading to unbalanced foot traffic, low-performing retail areas, and high tenant churn without an affordable hardware-free insight layer.',
    contribution:
      'Authored the Vantage AI product and commercial pitch deck covering low-CAPEX CCTV integration, heat map analytics architecture, and a tiered B2B SaaS subscription model (Basic Rp5M/mo, Advanced Rp15M/mo, 8-month break-even).',
    technologies: [
      'Computer Vision Analytics',
      'CCTV Heat Maps & Dwell Time',
      'B2B SaaS Business Model',
      'Digital Business Research',
    ],
    media: PORTFOLIO_MEDIA.projects.vantageAi,
    gallery: PROJECT_GALLERIES.vantageAi,
    pitchDeckUrl:
      '/assets/aistudio/Black_and_White_Modern_Innovative_AI_Presentation__1__2d6d3c6f.pdf',
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
      'EZPark is an Arduino-based project designed to manage parking systems more efficiently by utilizing sensors and automation. The system works by detecting vehicles entering and exiting the parking area using infrared (IR) sensors, then displays the number of available parking spaces in real-time on the LCD screen. If the parking lot is full, the system will automatically close the entrance using a servo motor and alert the driver.',
    problem:
      'Manual parking management forces drivers to circle full lots unnecessarily and creates entrance congestion when available space counts are neither measured automatically nor shown at the gate.',
    contribution:
      'Assembled and programmed the Arduino Uno circuit with dual infrared (IR) entry/exit sensors, a real-time 16x2 LCD capacity display, and an automated servo motor gate that closes and alerts drivers when capacity reaches zero.',
    technologies: [
      'Arduino Uno',
      'C / C++',
      'Infrared (IR) Sensors',
      '16x2 LCD Display',
      'Servo Motor Automation',
    ],
    media: PORTFOLIO_MEDIA.projects.ezpark,
    gallery: PROJECT_GALLERIES.ezpark,
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
    title: 'Finalist, ADIKARA 2026: Entrepreneurship',
    issuer: 'ADIKARA 2026: Entrepreneurship',
    year: '2026',
    category: 'Competition',
    summary:
      'Advanced to the finalist stage with TiMu, a peer-to-peer escrow platform backed by a four-step fund custody state machine.',
  },
  {
    id: 'motionhack-5',
    title: '3rd Place, MotionHack 5.0 Internal Hackathon',
    issuer: 'Mobile Innovation Laboratory, Telkom University',
    year: '2025',
    category: 'Competition',
    summary:
      'Secured 3rd Place with Team 12 in the internal hackathon organized by Mobile Innovation Laboratory by delivering SuperPlus, a household waste marketplace with SmartBid and DirectChat.',
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
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'huawei-ai-2026',
    index: '01',
    code: 'HUAWEI AI',
    title: 'Artificial Intelligence - Huawei (Digital Talent Academy)',
    issuer: 'Digital Talent Scholarship · KOMDIGI & Huawei',
    issuedDate: 'November 06, 2026',
    scoreLabel: 'Completed · 3 Hours',
    levelLabel: 'Digital Talent Scholarship 2026',
    certificateNumber: 'No. 21213394840-3756/DTA/BLSDM.Komdigi/2026',
    breakdown: [
      { label: 'Program', score: 'Huawei AI for Everyone' },
      { label: 'Academy', score: 'Digital Talent Academy' },
      { label: 'Organizer', score: 'BLSDM KOMDIGI' },
    ],
    media: PORTFOLIO_MEDIA.certificates.huaweiAi,
  },
  {
    id: 'ecct-2026',
    index: '02',
    code: 'ECCT',
    title: 'English Communicative Competence Test (ECCT)',
    issuer: 'Telkom University Language Center',
    issuedDate: 'March 13, 2026',
    validUntil: 'March 13, 2028',
    scoreLabel: 'Score 3.5 / 4.00',
    levelLabel: 'Low-Advanced Level',
    certificateNumber: 'No. 6522/SPI3-B/BHS/2026',
    breakdown: [
      { label: 'Pronunciation', score: '3.5' },
      { label: 'Vocabulary', score: '3.5' },
      { label: 'Grammar', score: '3.0' },
      { label: 'Flow of Speech', score: '3.5' },
      { label: 'Idea Construction', score: '3.5' },
      { label: 'Task Completion', score: '3.5' },
    ],
    media: PORTFOLIO_MEDIA.certificates.ecct,
    pdfUrl: '/assets/aistudio/ecct_742219e8.pdf',
  },
  {
    id: 'eprt-2025',
    index: '03',
    code: 'EPrT®',
    title: 'English Proficiency Test (EPrT®)',
    issuer: 'Telkom University Language Center',
    issuedDate: 'December 02, 2025',
    validUntil: 'December 02, 2027',
    scoreLabel: 'Total Score 503',
    levelLabel: 'CEFR Level B1',
    breakdown: [
      { label: 'Listening', score: '55' },
      { label: 'Grammar', score: '50' },
      { label: 'Reading', score: '46' },
      { label: 'Total Score', score: '503' },
    ],
    media: PORTFOLIO_MEDIA.certificates.eprt,
    pdfUrl: '/assets/aistudio/eprt_43eb766c.pdf',
  },
  {
    id: 'ibl-allstar-2026',
    index: '04',
    code: 'IBL 2026',
    title: 'IBL All-Star 2026 Certificate of Appreciation',
    issuer: 'Indonesian Basketball League (IBL)',
    issuedDate: 'April 2026',
    scoreLabel: 'Appreciation Award',
    levelLabel: 'Usher Tribune Volunteer',
    breakdown: [
      { label: 'Event', score: 'IBL All-Star 2026' },
      { label: 'Venue', score: 'Bandung Arena' },
      { label: 'Signed By', score: 'Junas Miradiarsyah (CEO)' },
    ],
    media: PORTFOLIO_MEDIA.certificates.iblAllStar,
  },
];

export const EXPERIENCE_LEDGER: ExperienceItem[] = [
  {
    id: 'aws-sbg-event-ops',
    period: 'Nov 2026 - Present',
    role: 'Event Operations Staff',
    organization:
      'AWS Student Builder Group Telkom University Bandung · Bandung, Indonesia',
    kind: 'Event & Leadership',
    highlights: [
      'Planning cloud and AI workshops, technical seminars, and networking sessions for AWS SBG Telkom University members.',
      'Developing event concepts, detailed run-downs, and operational plans to ensure the smooth execution of on-site events.',
    ],
  },
  {
    id: 'itsf-pr',
    period: 'November 2026',
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
    organization: 'PKKMB x Megabit 9.0 (HMIT Telkom University) · Bandung, Indonesia',
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

export const EXPERIENCE_PHOTOS: ExperiencePhotoItem[] = [
  {
    id: 'exp-photo-itsf',
    index: 'FIG. 01',
    title: 'ITSF Championship',
    role: 'Staff of Public Relation & Team LO',
    organization: 'Information Technology Department',
    period: 'November 2026',
    location: 'Bandung, Indonesia',
    caption:
      'Public relations media partnerships, social campaign production, and on-court team liaison coordination.',
    slotPath: 'public/images/experience/itsf.jpg',
    media: EXPERIENCE_MEDIA.itsf,
    gallery: EXPERIENCE_GALLERIES.itsf,
  },
  {
    id: 'exp-photo-megabit',
    index: 'FIG. 02',
    title: 'PKKMB x Megabit 9.0',
    role: 'Master of Ceremonies & Event Staff',
    organization: 'HMIT Telkom University',
    period: 'Jun 2026 - Sep 2026',
    location: 'Bandung, Indonesia',
    caption:
      'Hosting hundreds of incoming Information Technology freshmen and coordinating live orientation rundowns.',
    slotPath: 'public/images/experience/megabit.jpg',
    media: EXPERIENCE_MEDIA.megabit,
    gallery: EXPERIENCE_GALLERIES.megabit,
  },
  {
    id: 'exp-photo-ibl',
    index: 'FIG. 03',
    title: 'IBL All Stars 2026',
    role: 'Usher Tribune Volunteer',
    organization: 'Indonesian Basketball League',
    period: 'Apr 2026',
    location: 'Bandung, Indonesia',
    caption:
      'Grandstand crowd flow, seating coordination, and real-time spectator hospitality at the 2026 IBL All-Star Game.',
    slotPath: 'public/images/experience/ibl.jpg',
    media: EXPERIENCE_MEDIA.ibl,
    gallery: EXPERIENCE_GALLERIES.ibl,
  },
  {
    id: 'exp-photo-jne',
    index: 'FIG. 04',
    title: 'PT. Tiki Jalur Nugraha Ekakurir (JNE)',
    role: 'IT Department Internship',
    organization: 'JNE Jambi',
    period: 'May 2025',
    location: 'Jambi, Indonesia',
    caption:
      'JavaScript & React Native front-end development, back-end troubleshooting, and logistics IT operations.',
    slotPath: 'public/images/experience/jne.jpg',
    media: EXPERIENCE_MEDIA.jne,
    gallery: EXPERIENCE_GALLERIES.jne,
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
      'Joined MotionHack 5.0 (Internal Hackathon by Mobile Innovation Laboratory) and earned 3rd Place.',
      'Finalist at ADIKARA 2026: Entrepreneurship with TiMu Escrow.',
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
      'Peer-to-Peer Escrow Architecture (TiMu · ADIKARA 2026: Entrepreneurship)',
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
      'Languages: Bahasa Indonesia (Native), English (ECCT 3.5 · EPrT 503)',
    ],
  },
];
