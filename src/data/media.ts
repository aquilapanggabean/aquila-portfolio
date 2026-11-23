/**
 * Centralized Media Manifest
 *
 * Replace any path below with a local asset under /images/profile/,
 * /images/projects/, /images/certificates/, or /images/experience/ (in public/)
 * whenever updating personal photography, certificates, or event documentation.
 */

export type MediaAspectRatio = '3/4' | '4/3' | '16/9';

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: MediaAspectRatio;
  caption: string;
}

export const PORTFOLIO_MEDIA = {
  profile: {
    heroPortrait: {
      src: '/assets/aistudio/Untitled_design__2__d6f8f0eb.png',
      alt: 'Studio portrait of Aquila Altair Panggabean in a dark formal suit and glasses against a charcoal backdrop',
      width: 600,
      height: 800,
      aspectRatio: '3/4',
      caption: 'Aquila Altair Panggabean, Information Technology Undergraduate at Telkom University',
    },
    aboutWorkspace: {
      src: '/src/assets/images/aquila_about_workspace_1795413452349.jpg',
      alt: 'Software and IoT engineering desk with laptop, system diagram notebook, and microcontroller prototype',
      width: 960,
      height: 720,
      aspectRatio: '4/3',
      caption: 'System design notes, web software workspace, and embedded hardware bench',
    },
  },
  projects: {
    timu: {
      src: '/src/assets/images/project_timu_preview_1795413452601.jpg',
      alt: 'TiMu peer-to-peer escrow ledger interface displaying active custody transactions and a four-stage transaction flow',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'TiMu escrow ledger overview and four-stage transaction custody workflow',
    },
    superplus: {
      src: '/src/assets/images/project_mobile_systems_1795413452932.jpg',
      alt: 'SuperPlus product prototype displayed across dual mobile screens showing workflow wireframes and analytics views',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'SuperPlus mobile workflow wireframes and competition product views',
    },
    vantageAi: {
      src: '/src/assets/images/project_mobile_systems_1795413452932.jpg',
      alt: 'Vantage AI mobile application concept developed at Mobile Innovation Lab showing structured interface flows',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'Vantage AI mobile architecture and applied research interface',
    },
    ezpark: {
      src: '/src/assets/images/project_ezpark_iot_1795413453188.jpg',
      alt: 'EZPark Arduino microcontroller and breadboard prototype wired with an HC-SR04 ultrasonic sensor and OLED readout',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'EZPark Arduino Uno, HC-SR04 ultrasonic rangefinder, and OLED bay telemetry prototype',
    },
    pkmKc: {
      src: '/src/assets/images/aquila_about_workspace_1795413452349.jpg',
      alt: 'Applied IT research workspace with system architecture notebook, laptop, and embedded hardware testbed for PKM-KC',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'PKM-KC faculty-level applied information technology research and prototype bench',
    },
  },
  certificates: {
    ecct: {
      src: '/images/certificates/ecct-certificate.png',
      alt: 'Official Telkom University Language Center ECCT (English Communicative Competence Test) certificate for Aquila Altair Panggabean with a total score of 3.5 issued March 13, 2026',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'ECCT Certificate No. 6522/SPI3-B/BHS/2026 — Total Score 3.5 (Low-Advanced Level)',
    },
    eprt: {
      src: '/images/certificates/eprt-certificate.png',
      alt: 'Official Telkom University Language Center EPrT (English Proficiency Test) certificate for Aquila Altair Panggabean with a total score of 503 issued December 02, 2025',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'EPrT Certificate — Total Score 503 (CEFR Level B1, Valid until Dec 2027)',
    },
  },
} as const satisfies {
  profile: Record<string, MediaAsset>;
  projects: Record<string, MediaAsset>;
  certificates: Record<string, MediaAsset>;
};

/**
 * Optional Experience Documentation Photos (4:3)
 *
 * To display your real event & internship photos inside the Experience Gallery,
 * save your images under public/images/experience/ (e.g., itsf.jpg, megabit.jpg,
 * ibl.jpg, jne.jpg) and replace `undefined` below with a MediaAsset object.
 */
export const EXPERIENCE_MEDIA: Record<
  'itsf' | 'megabit' | 'ibl' | 'jne',
  MediaAsset | undefined
> = {
  itsf: undefined,
  megabit: undefined,
  ibl: undefined,
  jne: undefined,
};
