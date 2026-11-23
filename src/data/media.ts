/**
 * Centralized Media Manifest
 *
 * Replace any path below with a local asset under /images/profile/ or
 * /images/projects/ (in public/) whenever updating personal photography
 * or project screenshots.
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
} as const satisfies {
  profile: Record<string, MediaAsset>;
  projects: Record<string, MediaAsset>;
};
