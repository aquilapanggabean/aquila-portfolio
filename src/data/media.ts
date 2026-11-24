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
  fit?: 'cover' | 'contain';
  objectPosition?: string;
  surfaceBg?: string;
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
      src: '/assets/aistudio/image_fa799e18.png',
      alt: 'TiMu (Titik Temu) live web platform landing page at timu-fawn.vercel.app showing unbiased anonymous talent matching and third-party Escrow protection',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'TiMu (Titik Temu): Live web platform at timu-fawn.vercel.app featuring anonymous skill matching and third-party Escrow (90% Talent · 10% Admin)',
      fit: 'contain',
      surfaceBg: '#0E1208',
    },
    superplus: {
      src: '/assets/aistudio/image_4dcf3cde.png',
      alt: 'MotionHack 5.0 3rd Champion official announcement featuring Team 12 SuperPlus household waste marketplace app screens and crew',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'SuperPlus (Team 12): 3rd Place at MotionHack 5.0 by Mobile Innovation Laboratory',
      fit: 'contain',
      surfaceBg: '#121212',
    },
    vantageAi: {
      src: '/images/projects/vantage-ai-cover.png',
      alt: 'Vantage AI pitch deck cover slide authored by Aquila Altair Panggabean for shopping mall Computer Vision analytics',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'Vantage AI Pitch Deck: Computer Vision retail intelligence layered over existing shopping mall CCTV networks',
      fit: 'contain',
      surfaceBg: '#FFFFFF',
    },
    ezpark: {
      src: '/assets/aistudio/1741144287998_6bbbd983.jpg',
      alt: 'EZPark Arduino Uno automated smart parking prototype showing microcontroller wiring, infrared sensors, servo barrier, and miniature parking bays',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'EZPark: Arduino Uno prototype with IR vehicle sensors, real-time 16x2 LCD slot readout, and automated servo entrance barrier',
      fit: 'cover',
      objectPosition: '50% 55%',
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
    huaweiAi: {
      src: '/assets/aistudio/1794564156435_88b51b1c.jpg',
      alt: 'Official KOMDIGI Digital Talent Scholarship 2026 certificate for Aquila Altair Panggabean completing Huawei AI for Everyone on November 6, 2026',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'Huawei AI for Everyone · Digital Talent Academy (KOMDIGI) · Cert No. 21213394840-3756/DTA/BLSDM.Komdigi/2026',
      fit: 'contain',
      surfaceBg: '#FFFFFF',
    },
    ecct: {
      src: '/images/certificates/ecct-certificate.png',
      alt: 'Official Telkom University Language Center ECCT (English Communicative Competence Test) certificate for Aquila Altair Panggabean with a total score of 3.5 issued March 13, 2026',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'ECCT Certificate No. 6522/SPI3-B/BHS/2026 · Total Score 3.5 (Low-Advanced Level)',
      fit: 'contain',
      surfaceBg: '#FFFFFF',
    },
    eprt: {
      src: '/images/certificates/eprt-certificate.png',
      alt: 'Official Telkom University Language Center EPrT (English Proficiency Test) certificate for Aquila Altair Panggabean with a total score of 503 issued December 02, 2025',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'EPrT Certificate · Total Score 503 (CEFR Level B1, Valid until Dec 2027)',
      fit: 'contain',
      surfaceBg: '#FFFFFF',
    },
    iblAllStar: {
      src: '/assets/aistudio/IBL_ALLSTAR_CERTI_4e662f95.jpg',
      alt: 'Official IBL All-Star 2026 Certificate of Appreciation awarded to Aquila Altair Panggabean signed by Indonesian Basketball League CEO Junas Miradiarsyah',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'IBL All-Star 2026 Certificate of Appreciation · Signed by Junas Miradiarsyah, CEO Indonesian Basketball League',
      fit: 'contain',
      surfaceBg: '#FFFFFF',
    },
  },
} as const satisfies {
  profile: Record<string, MediaAsset>;
  projects: Record<string, MediaAsset>;
  certificates: Record<string, MediaAsset>;
};

export const PROJECT_GALLERIES: Partial<
  Record<'timu' | 'superplus' | 'vantageAi' | 'ezpark', readonly MediaAsset[]>
> = {
  timu: [
    PORTFOLIO_MEDIA.projects.timu,
    {
      src: '/assets/aistudio/image_f03bf0a0.png',
      alt: 'TiMu active UMKM project listings screen with Escrow-protected briefs and category filters',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'TiMu Project Board: Active UMKM Escrow briefs with transparent budgets, distance tags, and skill filters',
      fit: 'contain',
      surfaceBg: '#0E1208',
    },
    {
      src: '/assets/aistudio/image_7ee07aa2.png',
      alt: 'TiMu Cari Talenta Tanpa Bias anonymous candidate card interface with verified skills and token unlock control',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'TiMu Unbiased Talent Discovery: Anonymous verified skill cards with distance filters and token-gated chat unlock',
      fit: 'contain',
      surfaceBg: '#0E1208',
    },
  ],
  superplus: [
    PORTFOLIO_MEDIA.projects.superplus,
    {
      src: '/assets/aistudio/image_74dacb7b.png',
      alt: 'SuperPlus Team 12 mobile app three-screen showcase showing Transaksi tracking, Rekomendasi feed, and SmartBid offers',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'SuperPlus Mobile Screens: Live transaction tracking, localized waste listings, and SmartBid price negotiation',
      fit: 'contain',
      surfaceBg: '#F6E7C3',
    },
    {
      src: '/images/projects/superplus-hifi.png',
      alt: 'SuperPlus pitch deck high-fidelity UI overview covering onboarding, marketplace, SmartBid, DirectChat inbox, and user postings',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'SuperPlus Pitch Deck Slide 15: Complete high-fidelity mobile prototype flow including DirectChat and SmartBid',
      fit: 'contain',
      surfaceBg: '#F7FBEF',
    },
    {
      src: '/assets/aistudio/image_ef3911b1.png',
      alt: 'SuperPlus MotionHack 5.0 project description card and seven-member Team 12 roster',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'SuperPlus Product Summary & Team 12 Crew Roster (MotionHack 5.0 3rd Place)',
      fit: 'contain',
      surfaceBg: '#F6E7C3',
    },
  ],
  vantageAi: [
    PORTFOLIO_MEDIA.projects.vantageAi,
    {
      src: '/images/projects/vantage-ai-solution.png',
      alt: 'Vantage AI pitch deck solution slide explaining Computer Vision CCTV integration, visitor tracking, and Dwell Time metrics',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'Vantage AI Solution & Value Proposition: Low-CAPEX Computer Vision layered on existing mall CCTV for Tracking and Dwell Time',
      fit: 'contain',
      surfaceBg: '#FFFFFF',
    },
    {
      src: '/images/projects/vantage-ai-model.png',
      alt: 'Vantage AI pitch deck business model slide detailing Basic and Advanced B2B SaaS subscription tiers with Heat Map visualization',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'Vantage AI Business Model: Tiered B2B SaaS subscriptions with Heat Maps and AI Consultant Insights',
      fit: 'contain',
      surfaceBg: '#FFFFFF',
    },
  ],
  ezpark: [
    PORTFOLIO_MEDIA.projects.ezpark,
    {
      src: '/assets/aistudio/1741144254077_3f759022.jpg',
      alt: 'Top-down hardware view of EZPark Arduino Uno smart parking prototype with illuminated 16x2 LCD display, dual IR sensors, and servo motor barrier',
      width: 1280,
      height: 720,
      aspectRatio: '16/9',
      caption: 'EZPark Top-Down Layout: Arduino Uno, illuminated 16x2 LCD counter, dual IR sensors, and servo motor entrance gate',
      fit: 'contain',
      surfaceBg: '#111827',
    },
  ],
};

/**
 * Experience Documentation Photos (4:3)
 */
export const EXPERIENCE_MEDIA: Record<
  'itsf' | 'megabit' | 'ibl' | 'jne',
  MediaAsset | undefined
> = {
  itsf: {
    src: '/assets/aistudio/WhatsApp_Image_2026-11-21_at_22.47.08_689a250c.jpeg',
    alt: 'ITSF Championship committee and Public Relations team gathered together on the indoor basketball court in Bandung',
    width: 1200,
    height: 900,
    aspectRatio: '4/3',
    caption: 'ITSF Championship committee and Public Relations division after tournament operations in Bandung',
    fit: 'cover',
    objectPosition: '50% 54%',
  },
  megabit: {
    src: '/assets/aistudio/MEGABITT__1__9c2b30b2.jpeg',
    alt: 'Aquila Altair Panggabean hosting PKKMB x Megabit 9.0 on stage as Master of Ceremonies in front of the MEGABIT 9.0 screen and auditorium audience',
    width: 1200,
    height: 900,
    aspectRatio: '4/3',
    caption: 'Hosting PKKMB x Megabit 9.0 on the Telkom University auditorium stage in front of incoming Information Technology freshmen',
    fit: 'cover',
    objectPosition: '50% 50%',
  },
  ibl: {
    src: '/assets/aistudio/IBL_ALLSTAR_fb103dc1.jpg',
    alt: 'IBL All-Star 2026 Usher Tribune volunteer crew standing together on the Bandung Arena basketball court',
    width: 1200,
    height: 900,
    aspectRatio: '4/3',
    caption: 'IBL All-Star 2026 Usher Tribune volunteer crew on the Bandung Arena court',
    fit: 'cover',
    objectPosition: '50% 66%',
  },
  jne: {
    src: '/assets/aistudio/JNE__1__9151845f.jpeg',
    alt: 'Aquila Altair Panggabean holding the JNE Jambi IT Department internship completion certificate alongside his JNE mentor',
    width: 1200,
    height: 900,
    aspectRatio: '4/3',
    caption: 'Internship completion certificate presentation at PT. Tiki Jalur Nugraha Ekakurir (JNE) Jambi IT Department',
    fit: 'cover',
    objectPosition: '50% 58%',
  },
};

export const EXPERIENCE_GALLERIES: Partial<
  Record<'itsf' | 'megabit' | 'ibl' | 'jne', readonly MediaAsset[]>
> = {
  itsf: [
    EXPERIENCE_MEDIA.itsf!,
    {
      src: '/assets/aistudio/itsf_2d6950ea.JPG',
      alt: 'Aquila Altair Panggabean and fellow ITSF Championship committee members in white and blue jackets on court',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'On-court committee crew wearing official ITSF Championship jackets during tournament days',
      fit: 'cover',
      objectPosition: '50% 35%',
    },
    {
      src: '/assets/aistudio/ITSF_6e460c8a.jpeg',
      alt: 'Full portrait group photograph of the ITSF Championship organizing team inside the basketball venue',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'Full-court group portrait of the ITSF Championship organizing committee in Bandung',
      fit: 'contain',
      surfaceBg: '#0F172A',
    },
  ],
  megabit: [
    EXPERIENCE_MEDIA.megabit!,
    {
      src: '/assets/aistudio/MEGABITT__2__1083cca5.jpeg',
      alt: 'Close-up of Aquila Altair Panggabean holding Megabit 9.0 cue cards on stage while coordinating with the co-MC and speaker',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'On-stage rundown coordination and live session hosting during PKKMB x Megabit 9.0',
      fit: 'cover',
      objectPosition: '52% 28%',
    },
  ],
  ibl: [
    {
      src: '/assets/aistudio/IBL_ALLSTAR_fb103dc1.jpg',
      alt: 'Full vertical view of the IBL All-Star 2026 Usher Tribune volunteer crew inside Bandung Arena beneath the overhead scoreboard',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'IBL All-Star 2026 Usher Tribune volunteer crew inside Bandung Arena',
      fit: 'contain',
      surfaceBg: '#0F172A',
    },
  ],
  jne: [
    {
      src: '/assets/aistudio/JNE__1__9151845f.jpeg',
      alt: 'Aquila Altair Panggabean holding the JNE Jambi IT Department internship completion certificate alongside his JNE mentor',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'Internship completion certificate handoff at PT. JNE Jambi (May 6 to 23, 2025)',
      fit: 'contain',
      surfaceBg: '#0F172A',
    },
    {
      src: '/assets/aistudio/JNE__2__137187c9.jpeg',
      alt: 'Aquila Altair Panggabean smiling with the JNE Jambi IT Department mentor holding Sekolah Dian Harapan certificate of appreciation',
      width: 1200,
      height: 900,
      aspectRatio: '4/3',
      caption: 'Closing documentation with the PT. JNE Jambi IT Department team and appreciation plaque',
      fit: 'contain',
      surfaceBg: '#0F172A',
    },
  ],
};
