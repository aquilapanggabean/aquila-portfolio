import {
  ACHIEVEMENTS,
  CAPABILITY_GROUPS,
  CERTIFICATES,
  EDUCATION_LEDGER,
  EXPERIENCE_LEDGER,
  EXPERIENCE_PHOTOS,
  NAV_ITEMS,
  ORGANISATIONAL_LEDGER,
  PROJECTS,
  SITE_PROFILE,
  type AchievementCategory,
  type AchievementItem,
  type CapabilityGroup,
  type CertificateItem,
  type ExperienceItem,
  type ExperienceKind,
  type ExperiencePhotoItem,
  type NavItem,
  type ProjectCategory,
  type ProjectItem,
} from './portfolio';

export type Language = 'en' | 'id';

export interface LocalizedSiteProfile {
  fullName: string;
  shortBrand: string;
  coordinates: string;
  headlineFirst: string;
  headlineLast: string;
  email: string;
  phone: string;
  phoneHref: string;
  resumeUrl: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  location: string;
  statusInstitution: string;
  statusFaculty: string;
  badgeAdikara: string;
  badgeMotionHack: string;
  positioning: string;
  scrollHint: string;
  aboutProse: readonly string[];
  aboutFacts: readonly { label: string; value: string }[];
}

export interface UiDictionary {
  skipToContent: string;
  navCta: string;
  navAriaLabel: string;
  navMobileOpen: string;
  navMobileClose: string;
  navMobileDialog: string;
  navMobileSendEmail: string;
  langGroupLabel: string;
  heroViewProjects: string;
  heroCopyEmailAria: string;
  heroEmailCopied: string;
  aboutTag: string;
  aboutMetaRight: string;
  aboutHeading: string;
  aboutLead: string;
  aboutPortraitCaption: string;
  aboutResumeLabel: string;
  projectsTag: string;
  projectsMetaRight: string;
  projectsHeading: string;
  projectsLead: string;
  projectsSearchLabel: string;
  projectsSearchPlaceholder: string;
  projectsSearchClear: string;
  projectsFilterAria: string;
  projectsCount: (visible: number, total: number) => string;
  projectsEmptyTitle: string;
  projectsEmptyBody: (query: string) => string;
  projectsResetFilters: string;
  projectsRoleLabel: string;
  projectsStackLabel: string;
  projectsReadCaseStudy: string;
  projectsViewSource: string;
  projectsOpenDemo: string;
  projectsViewPitchDeck: string;
  projectsInspectAria: (title: string) => string;
  categoryLabels: Record<ProjectCategory, string>;
  superPlusPlate: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    badge: string;
    stagePrefix: string;
    footerRight: string;
    milestones: readonly { index: string; phase: string; output: string }[];
  };
  modal: {
    closeAria: (title: string) => string;
    problemHeading: string;
    contributionHeading: string;
    escrowHeading: string;
    escrowHint: string;
    escrowTabsAria: string;
    stepPrefix: string;
    primaryActor: string;
    transitionGuard: string;
    roleLabel: string;
    methodsLabel: string;
    teamLabel: string;
    closeButton: string;
  };
  achievementsTag: string;
  achievementsMetaRight: (honorsCount: number, certsCount: number) => string;
  achievementsHeading: string;
  achievementsLead: string;
  achievementsVerifyLabel: string;
  achievementsSubCertifications: string;
  achievementsCertMetaRight: string;
  achievementsInspectCert: string;
  achievementsOpenPdf: string;
  achievementsClosePreview: string;
  achievementsValidUntil: string;
  experienceTag: string;
  experienceMetaRight: string;
  experienceHeading: string;
  experienceLead: string;
  experienceSubWork: string;
  experienceSubPhotos: string;
  experiencePhotosNote: string;
  experiencePhotoSlotLabel: string;
  experienceInspectPhoto: string;
  experiencePhotoCount: (count: number) => string;
  experienceSubOrganisational: string;
  experienceSubEducation: string;
  capabilitiesTag: string;
  capabilitiesMetaRight: string;
  capabilitiesHeading: string;
  capabilitiesLead: string;
  contactTag: string;
  contactMetaRight: string;
  contactHeading: string;
  contactLead: string;
  contactDirectEmail: string;
  contactDirectPhone: string;
  contactCopyEmail: string;
  contactCopiedStatus: string;
  contactSocialProfiles: string;
  contactResumeLabel: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactEmailLabel: string;
  contactEmailPlaceholder: string;
  contactSubjectLabel: string;
  contactSubjectPlaceholder: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactSubmitIdle: string;
  contactSubmitBusy: string;
  contactValidationHint: string;
  contactSuccessTag: string;
  contactSuccessHeading: string;
  contactSuccessBody: (name: string, email: string) => string;
  contactSuccessSubject: string;
  contactSuccessReplyTo: string;
  contactOpenEmailClient: string;
  contactSendAnother: string;
  footerBackToTop: string;
  footerProjects: string;
  footerExperience: string;
  footerUniversity: string;
}

export interface LocalizedPortfolioBundle {
  lang: Language;
  profile: LocalizedSiteProfile;
  navItems: readonly NavItem[];
  projects: readonly ProjectItem[];
  achievements: readonly AchievementItem[];
  certificates: readonly CertificateItem[];
  experienceLedger: readonly ExperienceItem[];
  experiencePhotos: readonly ExperiencePhotoItem[];
  organisationalLedger: readonly ExperienceItem[];
  educationLedger: readonly ExperienceItem[];
  capabilityGroups: readonly CapabilityGroup[];
  ui: UiDictionary;
}

const EN_UI: UiDictionary = {
  skipToContent: 'Skip to main content',
  navCta: 'Get in Touch',
  navAriaLabel: 'Primary navigation',
  navMobileOpen: 'Open navigation menu',
  navMobileClose: 'Close navigation menu',
  navMobileDialog: 'Mobile navigation',
  navMobileSendEmail: 'Send an Email',
  langGroupLabel: 'Language selector',
  heroViewProjects: 'View Selected Projects',
  heroCopyEmailAria: 'Copy email address',
  heroEmailCopied: 'Email Copied',
  aboutTag: '01 / PROFILE',
  aboutMetaRight: 'BANDUNG, INDONESIA · TELKOM UNIVERSITY',
  aboutHeading: 'About',
  aboutLead:
    'Academic grounding in Information Technology paired with software engineering internships, digital business research, and public relations leadership.',
  aboutPortraitCaption:
    'Aquila Altair Panggabean, Information Technology Undergraduate at Telkom University',
  aboutResumeLabel: 'Curriculum Vitae (PDF)',
  projectsTag: '02 / CASE ARCHIVE',
  projectsMetaRight: 'SOFTWARE · IOT · APPLIED RESEARCH',
  projectsHeading: 'Selected Projects',
  projectsLead:
    'Verified software systems, entrepreneurship case studies, Mobile Innovation Lab prototypes, and Arduino IoT builds.',
  projectsSearchLabel: 'Search projects by title, technology, or collaborator',
  projectsSearchPlaceholder: 'Filter by keyword or tech',
  projectsSearchClear: 'Clear search query',
  projectsFilterAria: 'Filter projects by category',
  projectsCount: (visible, total) => `Showing ${visible} of ${total} projects`,
  projectsEmptyTitle: 'No matching projects found',
  projectsEmptyBody: (query) =>
    `No projects match "${query}". Clear the active search term or switch back to all categories.`,
  projectsResetFilters: 'Reset Filters',
  projectsRoleLabel: 'Role',
  projectsStackLabel: 'Stack',
  projectsReadCaseStudy: 'Read Case Study',
  projectsViewSource: 'View Source on GitHub',
  projectsOpenDemo: 'Open Live Demo',
  projectsViewPitchDeck: 'View Pitch Deck (PDF)',
  projectsInspectAria: (title) => `Inspect ${title} case study preview`,
  categoryLabels: {
    All: 'All',
    'FinTech & Web': 'FinTech & Web',
    'IoT & Hardware': 'IoT & Hardware',
    'Mobile & Research': 'Mobile & Research',
  },
  superPlusPlate: {
    ariaLabel:
      'SuperPlus MotionHack 5.0 product architecture plate illustrating scope framing, frontend prototype build, and panel defense',
    eyebrow: 'MOTIONHACK 5.0 / COMPETITION ARCHITECTURE',
    title: 'SuperPlus Sprint Delivery Model',
    badge: '3rd Place',
    stagePrefix: 'Stage',
    footerRight: 'Mobile Innovation Lab Hackathon',
    milestones: [
      {
        index: '01',
        phase: 'Scope Framing',
        output: 'User Journey & Viability Brief',
      },
      {
        index: '02',
        phase: 'Interface Build',
        output: 'React + TypeScript Prototype',
      },
      {
        index: '03',
        phase: 'Panel Defense',
        output: '3rd Place, MotionHack 5.0',
      },
    ],
  },
  modal: {
    closeAria: (title) => `Close ${title} case study`,
    problemHeading: 'PROBLEM & PURPOSE',
    contributionHeading: 'MY CONTRIBUTION',
    escrowHeading: 'Four-Step Fund Custody State Machine',
    escrowHint: 'Select a state to inspect transition rules',
    escrowTabsAria: 'TiMu fund custody states',
    stepPrefix: 'Step',
    primaryActor: 'Primary Actor',
    transitionGuard: 'Transition Guard',
    roleLabel: 'ROLE',
    methodsLabel: 'TECHNOLOGIES & METHODS',
    teamLabel: 'TEAM & COLLABORATORS',
    closeButton: 'Close Inspector',
  },
  achievementsTag: '03 / HONORS & CERTIFICATIONS',
  achievementsMetaRight: (honorsCount, certsCount) =>
    `${honorsCount} HONORS · ${certsCount} CERTIFICATES`,
  achievementsHeading: 'Honors & Certifications',
  achievementsLead:
    'Entrepreneurship competition finals, internal hackathon awards, faculty-level research tracks, and verified certifications across AI, English proficiency, and national sports events.',
  achievementsVerifyLabel: 'Verify Credential',
  achievementsSubCertifications: 'VERIFIED CERTIFICATIONS',
  achievementsCertMetaRight: 'HUAWEI AI · ECCT · EPrT® · IBL 2026',
  achievementsInspectCert: 'Inspect Full Certificate',
  achievementsOpenPdf: 'Open Original PDF',
  achievementsClosePreview: 'Close Certificate Preview',
  achievementsValidUntil: 'Valid until',
  experienceTag: '04 / LEDGER',
  experienceMetaRight: 'CHRONOLOGICAL RECORD · 2023 TO 2026',
  experienceHeading: 'Experience & Education',
  experienceLead:
    'A complete chronological ledger of IT internships, campus and basketball event operations, visual field documentation, organizational leadership, and academic milestones.',
  experienceSubWork: 'WORK, INTERNSHIP & EVENT EXPERIENCE',
  experienceSubPhotos: 'FIELD & EVENT PHOTOGRAPHY',
  experiencePhotosNote: '4:3 DOCUMENTATION ARCHIVE',
  experiencePhotoSlotLabel: '4:3 Photo Frame Ready',
  experienceInspectPhoto: 'Inspect photo',
  experiencePhotoCount: (count) => `${count} Photos`,
  experienceSubOrganisational: 'ORGANISATIONAL EXPERIENCE',
  experienceSubEducation: 'EDUCATION LEVEL',
  capabilitiesTag: '05 / CAPABILITIES',
  capabilitiesMetaRight: 'HARD SKILLS · SOFT SKILLS · LANGUAGES',
  capabilitiesHeading: 'Core Capabilities',
  capabilitiesLead:
    'Hard skills, digital business problem-solving, leadership disciplines, and bilingual communication practiced across internships, labs, and organizations.',
  contactTag: '06 / INQUIRIES',
  contactMetaRight: 'DIRECT CHANNEL · BANDUNG, ID',
  contactHeading: 'Start a Conversation',
  contactLead:
    'Available for software engineering internships, mobile and web development, IoT collaborations, and digital business projects. Reach out directly or use the structured inquiry form.',
  contactDirectEmail: 'DIRECT EMAIL',
  contactDirectPhone: 'PHONE / WHATSAPP',
  contactCopyEmail: 'Copy Email Address',
  contactCopiedStatus: 'Copied to clipboard.',
  contactSocialProfiles: 'PROFILES & RESUME',
  contactResumeLabel: 'Curriculum Vitae (PDF)',
  contactNameLabel: 'Name',
  contactNamePlaceholder: 'Your name',
  contactEmailLabel: 'Email',
  contactEmailPlaceholder: 'name@domain.com',
  contactSubjectLabel: 'Subject',
  contactSubjectPlaceholder: 'Internship, engineering collaboration, or project inquiry',
  contactMessageLabel: 'Message',
  contactMessagePlaceholder: 'Share scope, timeline, or relevant context',
  contactSubmitIdle: 'Prepare Email Inquiry',
  contactSubmitBusy: 'Preparing Inquiry...',
  contactValidationHint: 'Validates locally before email handoff',
  contactSuccessTag: 'INQUIRY PREPARED',
  contactSuccessHeading: 'Message validated and ready to dispatch',
  contactSuccessBody: (name, email) =>
    `Thank you, ${name}. Because this portfolio is hosted as a static site, open your email client below to transmit the formatted message directly to ${email}.`,
  contactSuccessSubject: 'Subject:',
  contactSuccessReplyTo: 'Reply-To:',
  contactOpenEmailClient: 'Open in Email Client',
  contactSendAnother: 'Send Another Inquiry',
  footerBackToTop: 'Back to Top',
  footerProjects: 'Work',
  footerExperience: 'Ledger',
  footerUniversity: 'Telkom University',
};

const ID_UI: UiDictionary = {
  skipToContent: 'Lompat ke konten utama',
  navCta: 'Hubungi Saya',
  navAriaLabel: 'Navigasi utama',
  navMobileOpen: 'Buka menu navigasi',
  navMobileClose: 'Tutup menu navigasi',
  navMobileDialog: 'Navigasi seluler',
  navMobileSendEmail: 'Kirim Email',
  langGroupLabel: 'Pilihan bahasa',
  heroViewProjects: 'Lihat Proyek Pilihan',
  heroCopyEmailAria: 'Salin alamat email',
  heroEmailCopied: 'Email Tersalin',
  aboutTag: '01 / PROFIL',
  aboutMetaRight: 'BANDUNG, INDONESIA · TELKOM UNIVERSITY',
  aboutHeading: 'Tentang Saya',
  aboutLead:
    'Landasan akademik Teknologi Informasi yang dipadukan dengan magang rekayasa perangkat lunak, riset bisnis digital, dan kepemimpinan hubungan masyarakat.',
  aboutPortraitCaption:
    'Aquila Altair Panggabean, Mahasiswa Sarjana Teknologi Informasi di Telkom University',
  aboutResumeLabel: 'Unduh CV (PDF)',
  projectsTag: '02 / ARSIP KARYA',
  projectsMetaRight: 'PERANGKAT LUNAK · IOT · RISET TERAPAN',
  projectsHeading: 'Proyek Pilihan',
  projectsLead:
    'Sistem perangkat lunak terverifikasi, studi kasus kewirausahaan, prototipe Mobile Innovation Lab, dan perangkat keras IoT berbasis Arduino.',
  projectsSearchLabel: 'Cari proyek berdasarkan judul, teknologi, atau kolaborator',
  projectsSearchPlaceholder: 'Saring kata kunci atau teknologi',
  projectsSearchClear: 'Hapus kata pencarian',
  projectsFilterAria: 'Saring proyek berdasarkan kategori',
  projectsCount: (visible, total) => `Menampilkan ${visible} dari ${total} proyek`,
  projectsEmptyTitle: 'Tidak ada proyek yang cocok',
  projectsEmptyBody: (query) =>
    `Tidak ditemukan proyek untuk "${query}". Hapus kata pencarian aktif atau kembali ke semua kategori.`,
  projectsResetFilters: 'Reset Filter',
  projectsRoleLabel: 'Peran',
  projectsStackLabel: 'Teknologi',
  projectsReadCaseStudy: 'Baca Studi Kasus',
  projectsViewSource: 'Lihat Kode di GitHub',
  projectsOpenDemo: 'Buka Demo Langsung',
  projectsViewPitchDeck: 'Buka Pitch Deck (PDF)',
  projectsInspectAria: (title) => `Tinjau pratinjau studi kasus ${title}`,
  categoryLabels: {
    All: 'Semua',
    'FinTech & Web': 'FinTech & Web',
    'IoT & Hardware': 'IoT & Perangkat Keras',
    'Mobile & Research': 'Mobile & Riset',
  },
  superPlusPlate: {
    ariaLabel:
      'Pelat arsitektur produk SuperPlus MotionHack 5.0 yang menampilkan perumusan ruang lingkup, prototipe antarmuka, dan presentasi juri',
    eyebrow: 'MOTIONHACK 5.0 / ARSITEKTUR KOMPETISI',
    title: 'Model Eksekusi Sprint SuperPlus',
    badge: 'Juara 3',
    stagePrefix: 'Tahap',
    footerRight: 'Hackathon Mobile Innovation Lab',
    milestones: [
      {
        index: '01',
        phase: 'Perumusan Lingkup',
        output: 'Alur Pengguna & Kelayakan Bisnis',
      },
      {
        index: '02',
        phase: 'Pembangunan Antarmuka',
        output: 'Prototipe React + TypeScript',
      },
      {
        index: '03',
        phase: 'Presentasi Panel',
        output: 'Juara 3, MotionHack 5.0',
      },
    ],
  },
  modal: {
    closeAria: (title) => `Tutup studi kasus ${title}`,
    problemHeading: 'MASALAH & TUJUAN',
    contributionHeading: 'KONTRIBUSI SAYA',
    escrowHeading: 'Mesin Status Penitipan Dana Empat Tahap',
    escrowHint: 'Pilih tahap untuk memeriksa aturan transisi',
    escrowTabsAria: 'Tahap penitipan dana TiMu',
    stepPrefix: 'Tahap',
    primaryActor: 'Aktor Utama',
    transitionGuard: 'Syarat Transisi',
    roleLabel: 'PERAN',
    methodsLabel: 'TEKNOLOGI & METODE',
    teamLabel: 'TIM & KOLABORATOR',
    closeButton: 'Tutup Detail',
  },
  achievementsTag: '03 / PRESTASI & SERTIFIKASI',
  achievementsMetaRight: (honorsCount, certsCount) =>
    `${honorsCount} PRESTASI · ${certsCount} SERTIFIKAT`,
  achievementsHeading: 'Prestasi & Sertifikasi',
  achievementsLead:
    'Finalis kompetisi kewirausahaan, penghargaan hackathon internal, riset terapan tingkat fakultas, serta sertifikasi terverifikasi di bidang AI, bahasa Inggris, dan acara nasional.',
  achievementsVerifyLabel: 'Lihat Bukti / Sertifikat',
  achievementsSubCertifications: 'SERTIFIKASI TERVERIFIKASI',
  achievementsCertMetaRight: 'HUAWEI AI · ECCT · EPrT® · IBL 2026',
  achievementsInspectCert: 'Perbesar Sertifikat',
  achievementsOpenPdf: 'Buka PDF Asli',
  achievementsClosePreview: 'Tutup Pratinjau Sertifikat',
  achievementsValidUntil: 'Berlaku hingga',
  experienceTag: '04 / REKAM JEJAK',
  experienceMetaRight: 'CATATAN KRONOLOGIS · 2023 HINGGA 2026',
  experienceHeading: 'Pengalaman & Pendidikan',
  experienceLead:
    'Catatan kronologis lengkap magang departemen TI, operasional acara kampus dan bola basket, dokumentasi foto lapangan, pengalaman organisasi, serta riwayat pendidikan.',
  experienceSubWork: 'PENGALAMAN KERJA, MAGANG & ACARA',
  experienceSubPhotos: 'DOKUMENTASI FOTO PENGALAMAN',
  experiencePhotosNote: 'ARSIP DOKUMENTASI 4:3',
  experiencePhotoSlotLabel: 'Slot Foto 4:3 Siap Diisi',
  experienceInspectPhoto: 'Perbesar foto',
  experiencePhotoCount: (count) => `${count} Foto`,
  experienceSubOrganisational: 'PENGALAMAN ORGANISASI',
  experienceSubEducation: 'RIWAYAT PENDIDIKAN',
  capabilitiesTag: '05 / KAPABILITAS',
  capabilitiesMetaRight: 'HARD SKILLS · SOFT SKILLS · BAHASA',
  capabilitiesHeading: 'Kapabilitas Utama',
  capabilitiesLead:
    'Keahlian teknis, pemecahan masalah bisnis digital, kepemimpinan, dan kemampuan dwibahasa yang dipraktikkan di magang, laboratorium, dan organisasi.',
  contactTag: '06 / KONTAK',
  contactMetaRight: 'SALURAN LANGSUNG · BANDUNG, ID',
  contactHeading: 'Mulai Diskusi',
  contactLead:
    'Terbuka untuk magang rekayasa perangkat lunak, pengembangan web dan mobile, kolaborasi IoT, serta proyek bisnis digital. Hubungi langsung atau gunakan formulir terstruktur ini.',
  contactDirectEmail: 'EMAIL LANGSUNG',
  contactDirectPhone: 'TELEPON / WHATSAPP',
  contactCopyEmail: 'Salin Alamat Email',
  contactCopiedStatus: 'Disalin ke papan klip.',
  contactSocialProfiles: 'PROFIL & CV',
  contactResumeLabel: 'Curriculum Vitae (PDF)',
  contactNameLabel: 'Nama',
  contactNamePlaceholder: 'Nama Anda',
  contactEmailLabel: 'Email',
  contactEmailPlaceholder: 'nama@domain.com',
  contactSubjectLabel: 'Subjek',
  contactSubjectPlaceholder: 'Magang, kolaborasi rekayasa, atau diskusi proyek',
  contactMessageLabel: 'Pesan',
  contactMessagePlaceholder: 'Bagikan ruang lingkup, linimasa, atau konteks terkait',
  contactSubmitIdle: 'Siapkan Email Pertanyaan',
  contactSubmitBusy: 'Menyiapkan Pesan...',
  contactValidationHint: 'Divalidasi secara lokal sebelum dibuka di aplikasi email',
  contactSuccessTag: 'PESAN SIAP DIKIRIM',
  contactSuccessHeading: 'Pesan tervalidasi dan siap dikirimkan',
  contactSuccessBody: (name, email) =>
    `Terima kasih, ${name}. Karena portofolio ini berjalan sebagai situs statis, buka aplikasi email Anda di bawah untuk mengirim pesan terformat langsung ke ${email}.`,
  contactSuccessSubject: 'Subjek:',
  contactSuccessReplyTo: 'Balas ke:',
  contactOpenEmailClient: 'Buka Aplikasi Email',
  contactSendAnother: 'Kirim Pesan Lain',
  footerBackToTop: 'Kembali ke Atas',
  footerProjects: 'Karya',
  footerExperience: 'Rekam Jejak',
  footerUniversity: 'Telkom University',
};

const ID_PROFILE: LocalizedSiteProfile = {
  fullName: SITE_PROFILE.fullName,
  shortBrand: SITE_PROFILE.shortBrand,
  coordinates: SITE_PROFILE.coordinates,
  headlineFirst: SITE_PROFILE.headlineFirst,
  headlineLast: SITE_PROFILE.headlineLast,
  email: SITE_PROFILE.email,
  phone: SITE_PROFILE.phone,
  phoneHref: SITE_PROFILE.phoneHref,
  resumeUrl: SITE_PROFILE.resumeUrl,
  githubUrl: SITE_PROFILE.githubUrl,
  githubHandle: SITE_PROFILE.githubHandle,
  linkedinUrl: SITE_PROFILE.linkedinUrl,
  linkedinHandle: SITE_PROFILE.linkedinHandle,
  location: SITE_PROFILE.location,
  statusInstitution: 'MAHASISWA S1 TELKOM UNIVERSITY',
  statusFaculty: 'FAKULTAS INFORMATIKA',
  badgeAdikara: 'FINALIS ADIKARA 2026',
  badgeMotionHack: 'JUARA 3 MOTIONHACK 5.0',
  positioning:
    'Mahasiswa Teknologi Informasi di Telkom University yang berfokus pada Internet of Things (IoT), inovasi digital, pemecahan masalah TI, dan solusi bisnis berbasis teknologi. Finalis ADIKARA 2026: Entrepreneurship bersama TiMu Escrow.',
  scrollHint: 'Gulir ke bawah untuk meninjau arsip studi kasus dan rekam jejak CV.',
  aboutProse: [
    'Saya adalah mahasiswa sarjana Teknologi Informasi di Telkom University (2025 hingga 2029) dengan minat kuat pada Internet of Things (IoT), inovasi digital, pemecahan masalah TI, serta penyelesaian tantangan bisnis melalui solusi teknologi yang praktis.',
    'Mulai dari membangun aplikasi web dan mobile saat magang Departemen TI di PT. Tiki Jalur Nugraha Ekakurir (JNE) dan meneliti solusi sosial berbasis mobile di Mobile Innovation Laboratory, hingga mencapai babak final ADIKARA 2026: Entrepreneurship bersama TiMu serta memimpin acara kampus dan turnamen bola basket, saya berkomitmen pada pengembangan diri berkelanjutan dan adaptasi teknologi baru.',
  ],
  aboutFacts: [
    { label: 'Institusi', value: 'Telkom University (Sep 2025 - Agu 2029)' },
    { label: 'Fokus Utama', value: 'IoT, Inovasi Digital & Solusi Bisnis TI' },
    { label: 'Bahasa', value: 'Bahasa Indonesia (Asli), Inggris (ECCT 3.5 · EPrT 503)' },
  ],
};

const EN_PROFILE: LocalizedSiteProfile = {
  fullName: SITE_PROFILE.fullName,
  shortBrand: SITE_PROFILE.shortBrand,
  coordinates: SITE_PROFILE.coordinates,
  headlineFirst: SITE_PROFILE.headlineFirst,
  headlineLast: SITE_PROFILE.headlineLast,
  email: SITE_PROFILE.email,
  phone: SITE_PROFILE.phone,
  phoneHref: SITE_PROFILE.phoneHref,
  resumeUrl: SITE_PROFILE.resumeUrl,
  githubUrl: SITE_PROFILE.githubUrl,
  githubHandle: SITE_PROFILE.githubHandle,
  linkedinUrl: SITE_PROFILE.linkedinUrl,
  linkedinHandle: SITE_PROFILE.linkedinHandle,
  location: SITE_PROFILE.location,
  statusInstitution: 'UNDERGRADUATE AT TELKOM UNIVERSITY',
  statusFaculty: 'FACULTY OF INFORMATICS',
  badgeAdikara: 'ADIKARA 2026 FINALIST',
  badgeMotionHack: 'MOTIONHACK 5.0 3RD PLACE',
  positioning: SITE_PROFILE.positioning,
  scrollHint: SITE_PROFILE.scrollHint,
  aboutProse: SITE_PROFILE.aboutProse,
  aboutFacts: SITE_PROFILE.aboutFacts,
};

const ID_NAV_ITEMS: readonly NavItem[] = [
  { id: 'projects', label: 'Karya', href: '#projects' },
  { id: 'about', label: 'Profil', href: '#about' },
  { id: 'experience', label: 'Rekam Jejak', href: '#experience' },
  { id: 'capabilities', label: 'Kapabilitas', href: '#capabilities' },
  { id: 'contact', label: 'Kontak', href: '#contact' },
];

const ID_PROJECTS: readonly ProjectItem[] = [
  {
    ...PROJECTS[0],
    recognition: 'Finalis, ADIKARA 2026: Entrepreneurship',
    role: 'Arsitek Produk & Lead Rekayasa',
    overview:
      'Platform web yang mempertemukan talenta muda dan UMKM lokal secara aman melalui pencocokan keahlian anonim tanpa bias, perlindungan pembayaran Escrow pihak ketiga (90% Talenta / 10% Admin), serta sertifikat kerja terverifikasi.',
    problem:
      'Mahasiswa dan UMKM lokal kerap menghadapi bias rekrutmen awal, transaksi informal tanpa penitipan dana netral, serta portofolio kerja lepas yang sulit diverifikasi.',
    contribution:
      'Merancang mesin status penitipan dana Escrow empat tahap, menyusun alur pencocokan talenta anonim dan papan proyek UMKM, serta meluncurkan prototipe langsung yang dipresentasikan pada ADIKARA 2026: Entrepreneurship.',
    escrowStateMachine: [
      {
        step: '01',
        stateName: 'Pesanan & Setoran',
        actor: 'Pemberi Kerja (UMKM)',
        summary:
          'UMKM mengunci ruang lingkup proyek dan menyetorkan pembayaran ke Escrow pihak ketiga TiMu, bukan melalui transfer langsung informal.',
        guardCondition: 'Ketentuan kontrak dikunci dan setoran Escrow terkonfirmasi (90% Talenta / 10% Admin).',
      },
      {
        step: '02',
        stateName: 'Penguncian Dana',
        actor: 'Buku Kas Escrow TiMu',
        summary:
          'Dana dibekukan sementara dalam penitipan netral selama talenta menyelesaikan deliverables sesuai brief proyek.',
        guardCondition: 'Saldo terverifikasi; penarikan diblokir hingga pemenuhan selesai.',
      },
      {
        step: '03',
        stateName: 'Pengiriman & Verifikasi',
        actor: 'Talenta & UMKM',
        summary:
          'Talenta mengirimkan hasil pekerjaan dan UMKM meninjau deliverables dalam jendela konfirmasi terstruktur.',
        guardCondition: 'Timer inspeksi aktif dengan opsi terima atau ajukan sanggahan.',
      },
      {
        step: '04',
        stateName: 'Pencairan & Sertifikat',
        actor: 'Mesin Aturan Escrow',
        summary:
          'Konfirmasi penerimaan mencairkan 90% dana ke talenta dan menerbitkan sertifikat kerja TiMu terverifikasi; sanggahan diarahkan ke tinjauan bukti.',
        guardCondition: 'Status akhir pasti: Dicairkan beserta sertifikat terverifikasi atau Dikembalikan ke UMKM.',
      },
    ],
  },
  {
    ...PROJECTS[1],
    recognition: 'Juara 3, MotionHack 5.0 (Mobile Innovation Lab)',
    role: 'Co-Founder Digital Business (Tim 12)',
    overview:
      'Aplikasi marketplace pengelola limbah rumah tangga (plastik, organik, minyak jelantah) yang menghubungkan langsung penghasil limbah dengan UMKM, petani, dan industri daur ulang melalui Marketplace, SmartBid, dan DirectChat.',
    problem:
      'Lebih dari 60% limbah rumah tangga Indonesia berakhir di TPA karena minimnya insentif pemilahan dan akses langsung yang transparan ke pembeli UMKM maupun pengolah daur ulang.',
    contribution:
      'Memimpin pemodelan Bisnis Digital Tim 12: menyusun Business Model Canvas, analisis kompetitor, peta jalan Go-To-Market, dan kelayakan finansial (NPV Rp2,76 M, IRR 70%, BCR 2,73, Payback 24 bulan) hingga meraih Juara 3 MotionHack 5.0.',
  },
  {
    ...PROJECTS[2],
    recognition: 'Mobile Innovation Laboratory, Telkom University',
    role: 'Strategis Produk & Peneliti Bisnis Digital',
    overview:
      'Konsep analitik ritel berbasis Computer Vision yang terintegrasi ke jaringan CCTV pusat perbelanjaan yang sudah ada untuk mengatasi "Dead Zones" lewat pelacakan pengunjung real-time, Dwell Time, dan Heat Maps.',
    problem:
      'Pengelola pusat perbelanjaan sering kekurangan data pergerakan pengunjung fisik yang akurat sehingga area sepi (Dead Zones) sulit dioptimalkan dan tingkat retensi tenant menurun.',
    contribution:
      'Menyusun pitch deck produk dan komersial Vantage AI yang mencakup integrasi CCTV rendah CAPEX, arsitektur analitik Heat Map, serta model langganan SaaS B2B (Basic Rp5 jt/bulan, Advanced Rp15 jt/bulan, BEP 8 bulan).',
  },
  {
    ...PROJECTS[3],
    recognition: 'Prototipe IoT Arduino',
    role: 'Pembangun Sistem Tertanam & IoT',
    overview:
      'EZPark adalah proyek berbasis Arduino yang dirancang untuk mengelola sistem parkir secara lebih efisien menggunakan sensor dan otomatisasi. Sistem mendeteksi kendaraan masuk dan keluar area parkir dengan sensor inframerah (IR), menampilkan jumlah slot parkir tersedia secara real-time pada layar LCD, serta menutup palang pintu masuk secara otomatis menggunakan motor servo dan memberi peringatan saat lahan parkir penuh.',
    problem:
      'Pengelolaan parkir manual membuat pengendara membuang waktu mencari slot kosong dan memicu antrean di pintu masuk ketika ketersediaan ruang tidak terdeteksi secara otomatis.',
    contribution:
      'Merakit dan memprogram rangkaian Arduino Uno dengan sepasang sensor inframerah (IR) masuk/keluar, layar LCD 16x2 untuk jumlah slot real-time, serta palang pintu otomatis berbasis motor servo saat kapasitas penuh.',
  },
  {
    ...PROJECTS[4],
    title: 'Riset TI Terapan PKM-KC',
    recognition: 'Tingkat Fakultas, Skema Karsa Cipta',
    role: 'Peneliti TI Terapan',
    overview:
      'Inisiatif riset Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) tingkat fakultas di Telkom University yang berfokus membangun prototipe teknologi informasi terapan yang terukur dan dapat diuji.',
    problem:
      'Menerjemahkan konsep akademik TI menjadi prototipe fungsional membutuhkan perumusan masalah formal, validasi kebutuhan sistem, dan dokumentasi rekayasa yang dapat direproduksi.',
    contribution:
      'Menyusun spesifikasi teknis, diagram arsitektur sistem terstruktur, serta mengoordinasikan validasi berulang sesuai pedoman peninjauan tingkat fakultas.',
  },
];

const ID_ACHIEVEMENTS: readonly AchievementItem[] = [
  {
    id: 'adikara-2026',
    title: 'Finalis, ADIKARA 2026: Entrepreneurship',
    issuer: 'ADIKARA 2026: Entrepreneurship',
    year: '2026',
    category: 'Competition',
    summary:
      'Melaju ke tahap finalis bersama TiMu, platform escrow peer-to-peer dengan mesin status penitipan dana empat tahap.',
  },
  {
    id: 'motionhack-5',
    title: 'Juara 3, Hackathon Internal MotionHack 5.0',
    issuer: 'Mobile Innovation Laboratory, Telkom University',
    year: '2025',
    category: 'Competition',
    summary:
      'Meraih Juara 3 bersama Tim 12 pada hackathon internal Mobile Innovation Laboratory lewat SuperPlus, marketplace limbah rumah tangga dengan fitur SmartBid dan DirectChat.',
  },
  {
    id: 'pkm-kc-faculty',
    title: 'Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC)',
    issuer: 'Fakultas Informatika, Telkom University',
    year: '2025',
    category: 'Academic',
    summary:
      'Berpartisipasi di tingkat fakultas pada skema Karsa Cipta riset TI terapan dengan menyusun spesifikasi teknis dan prototipe sistem teruji.',
  },
];

const ID_CERTIFICATES: readonly CertificateItem[] = [
  {
    ...CERTIFICATES[0],
    issuer: 'Digital Talent Scholarship · KOMDIGI & Huawei',
    issuedDate: '06 November 2026',
    scoreLabel: 'Selesai · 3 Jam Pelatihan',
    levelLabel: 'Digital Talent Scholarship 2026',
    breakdown: [
      { label: 'Program', score: 'Huawei AI for Everyone' },
      { label: 'Akademi', score: 'Digital Talent Academy' },
      { label: 'Penyelenggara', score: 'BLSDM KOMDIGI' },
    ],
  },
  {
    ...CERTIFICATES[1],
    issuer: 'Pusat Bahasa Telkom University',
    issuedDate: '13 Maret 2026',
    validUntil: '13 Maret 2028',
    scoreLabel: 'Skor 3.5 / 4.00',
    levelLabel: 'Tingkat Low-Advanced',
    breakdown: [
      { label: 'Pelafalan', score: '3.5' },
      { label: 'Kosakata', score: '3.5' },
      { label: 'Tata Bahasa', score: '3.0' },
      { label: 'Kelancaran', score: '3.5' },
      { label: 'Konstruksi Ide', score: '3.5' },
      { label: 'Penyelesaian Tugas', score: '3.5' },
    ],
  },
  {
    ...CERTIFICATES[2],
    issuer: 'Pusat Bahasa Telkom University',
    issuedDate: '02 Desember 2025',
    validUntil: '02 Desember 2027',
    scoreLabel: 'Skor Total 503',
    levelLabel: 'Level CEFR B1',
    breakdown: [
      { label: 'Listening', score: '55' },
      { label: 'Grammar', score: '50' },
      { label: 'Reading', score: '46' },
      { label: 'Skor Total', score: '503' },
    ],
  },
  {
    ...CERTIFICATES[3],
    title: 'Sertifikat Apresiasi IBL All-Star 2026',
    issuer: 'Indonesian Basketball League (IBL)',
    issuedDate: 'April 2026',
    scoreLabel: 'Sertifikat Apresiasi',
    levelLabel: 'Relawan Usher Tribune',
    breakdown: [
      { label: 'Acara', score: 'IBL All-Star 2026' },
      { label: 'Lokasi', score: 'Bandung Arena' },
      { label: 'Penandatangan', score: 'Junas Miradiarsyah (CEO)' },
    ],
  },
];

const ID_EXPERIENCE_LEDGER: readonly ExperienceItem[] = [
  {
    id: 'itsf-pr',
    period: 'Nov 2026 - Sekarang',
    role: 'Staf Hubungan Masyarakat (Public Relations)',
    organization: 'ITSF Championship · Bandung, Indonesia',
    kind: 'Event & Leadership',
    highlights: [
      'Produksi Konten: Merancang dan memproduksi konten promosi serta informasi di media sosial untuk memperluas jangkauan audiens dan partisipasi turnamen.',
      'Mitra Media: Menjalin komunikasi, negosiasi, dan kolaborasi publikasi dengan media kampus maupun eksternal untuk meningkatkan eksposur acara.',
      'Team Liaison Officer (LO): Menjadi narahubung utama dan dukungan operasional bagi tim basket peserta serta menangani kebutuhan teknis selama turnamen.',
    ],
  },
  {
    id: 'megabit-mc',
    period: 'Agu 2026 - Sep 2026',
    role: 'Master of Ceremonies (MC)',
    organization: 'PKKMB x Megabit 9.0 (HMIT Telkom University) · Bandung, Indonesia',
    kind: 'Event & Leadership',
    highlights: [
      'Bertugas sebagai Master of Ceremonies (MC) utama MEGABIT 9.0 di hadapan ratusan mahasiswa baru S1 Teknologi Informasi.',
      'Membawakan rangkaian acara bertema "Hotel Transylvania", menjaga transisi sesi sesuai rundown, serta mempertahankan antusiasme audiens.',
      'Berkoordinasi langsung dengan divisi acara lapangan untuk menangani dinamika waktu dan penyesuaian jadwal mendadak secara mulus.',
    ],
  },
  {
    id: 'megabit-event',
    period: 'Jun 2026 - Sep 2026',
    role: 'Staf Manajemen Acara (Event Management Staff)',
    organization: 'PKKMB x Megabit 9.0 (HMIT Telkom University) · Bandung, Indonesia',
    kind: 'Event & Leadership',
    highlights: [
      'Konsep & Rundown Acara: Merancang alur konsep utama "Hotel Transylvania", rundown, dan pedoman teknis orientasi mahasiswa baru S1 Teknologi Informasi.',
      'Perencanaan Aktivitas & Interaksi: Menyusun penugasan kelompok kreatif, ice-breaker, dan kegiatan interaktif bagi ratusan mahasiswa baru.',
      'Koordinasi Lintas Divisi & Operasional Langsung: Mengoordinasikan mobilisasi dan kebutuhan teknis bersama divisi LO, Usher, Logistik, dan PDD serta menyelesaikan kendala jadwal di lapangan.',
    ],
  },
  {
    id: 'ibl-allstars-2026',
    period: 'Apr 2026',
    role: 'Relawan Usher Tribune - IBL All Stars 2026',
    organization: 'Indonesian Basketball League (IBL) · Bandung, Indonesia',
    kind: 'Event & Leadership',
    highlights: [
      'Mengatur tata duduk dan arus penonton di area tribun selama jam padat pertandingan IBL All-Star Game 2026 bertema "Brighter Future".',
      'Membantu pengunjung menemukan kursi secara proaktif sekaligus menjaga ketertiban dan suasana arena yang aman serta kondusif.',
      'Berkolaborasi dengan tim operasional acara untuk menghadirkan layanan hospitality terbaik dan menangani pertanyaan pengunjung secara langsung.',
    ],
  },
  {
    id: 'jne-it-internship',
    period: 'Mei 2025',
    role: 'Magang Departemen Teknologi Informasi',
    organization: 'PT. Tiki Jalur Nugraha Ekakurir (JNE) · Jambi, Indonesia',
    kind: 'Work & Internship',
    highlights: [
      'Mengembangkan aplikasi web dan mobile serta merancang antarmuka frontend menggunakan JavaScript dan React Native.',
      'Menangani pemecahan masalah backend untuk menjaga fungsi sistem serta membantu pemeliharaan dan optimasi sistem internal logistik.',
      'Melakukan troubleshooting perangkat keras komputer untuk operasional harian sekaligus memperoleh pengalaman praktis TI di industri logistik.',
    ],
  },
];

const ID_EXPERIENCE_PHOTOS: readonly ExperiencePhotoItem[] = [
  {
    ...EXPERIENCE_PHOTOS[0],
    role: 'Staf Public Relations & Team LO',
    organization: 'Departemen Teknologi Informasi',
    period: 'Nov 2026 - Sekarang',
    caption:
      'Kemitraan media publikasi, produksi kampanye sosial, dan koordinasi liaison officer tim peserta turnamen.',
  },
  {
    ...EXPERIENCE_PHOTOS[1],
    role: 'Master of Ceremonies & Staf Acara',
    period: 'Jun 2026 - Sep 2026',
    caption:
      'Memandu ratusan mahasiswa baru S1 Teknologi Informasi dan mengoordinasikan rundown orientasi di lapangan.',
  },
  {
    ...EXPERIENCE_PHOTOS[2],
    role: 'Relawan Usher Tribune',
    period: 'Apr 2026',
    caption:
      'Pengaturan arus penonton tribun, penataan kursi, dan layanan hospitality pada IBL All-Star Game 2026.',
  },
  {
    ...EXPERIENCE_PHOTOS[3],
    role: 'Magang Departemen TI',
    period: 'Mei 2025',
    caption:
      'Pengembangan antarmuka JavaScript & React Native, troubleshooting backend, dan dukungan sistem TI logistik.',
  },
];

const ID_ORGANISATIONAL_LEDGER: readonly ExperienceItem[] = [
  {
    id: 'mobile-innovation-lab',
    period: 'Okt 2025 - Sep 2026',
    role: 'Magang Digital Business / Project Manager',
    organization: 'Mobile Innovation Laboratory, Telkom University · Bandung, Indonesia',
    kind: 'Organization',
    highlights: [
      'Terlibat dalam riset solusi berbasis teknologi mobile untuk masalah sosial pada Divisi Digital Business di Fakultas Informatika Telkom University.',
      'Mengikuti kelompok studi terstruktur untuk memperdalam konsep bisnis digital dan manajemen proyek.',
      'Mengevaluasi dampak nyata konsep inovasi mobile serta prototipe terapan di lingkungan laboratorium.',
    ],
  },
  {
    id: 'sdh-student-council',
    period: 'Sep 2023 - Nov 2024',
    role: 'Kepala Divisi Hubungan Masyarakat (Public Relations)',
    organization: 'OSIS Sekolah Dian Harapan Jambi · Jambi, Indonesia',
    kind: 'Organization',
    highlights: [
      'Memimpin divisi Hubungan Masyarakat dalam membangun citra organisasi dan komunikasi eksternal.',
      'Mengelola strategi konten media sosial untuk meningkatkan keterlibatan siswa dan komunitas sekolah.',
      'Mengoordinasikan kampanye serta publikasi lintas divisi sembari mengembangkan kepemimpinan, kerja tim, dan kemampuan berbicara di depan umum.',
    ],
  },
];

const ID_EDUCATION_LEDGER: readonly ExperienceItem[] = [
  {
    id: 'telkom-university',
    period: 'Sep 2025 - Agu 2029 (Perkiraan)',
    role: 'Mahasiswa Sarjana (S1) Teknologi Informasi',
    organization: 'Telkom University · Bandung, Indonesia',
    kind: 'Education',
    highlights: [
      'Berpartisipasi dalam Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) Tingkat Fakultas.',
      'Mengikuti MotionHack 5.0 (Hackathon Internal Mobile Innovation Laboratory) dan meraih Juara 3.',
      'Finalis ADIKARA 2026: Entrepreneurship bersama TiMu Escrow.',
      'Bertugas sebagai Master of Ceremonies pada kegiatan Megabit 9.0.',
    ],
  },
  {
    id: 'sekolah-dian-harapan',
    period: 'Jan 2023 - Jun 2025',
    role: 'SMA Jurusan IPA (91,50 / 100,00)',
    organization: 'Sekolah Dian Harapan · Jambi, Indonesia',
    kind: 'Education',
    highlights: [
      'Kepala Divisi Hubungan Masyarakat OSIS dan kandidat Ketua OSIS Sekolah Dian Harapan Jambi 2024.',
      'Berpartisipasi dalam Olimpiade Sains Nasional (OSN) tingkat sekolah tahun 2024.',
      'Master of Ceremony pada peringatan Hari Pendidikan Nasional dan berbagai acara sekolah.',
      'Panitia Open House Sekolah Dian Harapan Jambi (5K Fun Run) serta Perwakilan Sekolah untuk Open House Tahun Pertama.',
    ],
  },
];

const ID_CAPABILITY_GROUPS: readonly CapabilityGroup[] = [
  {
    index: '01',
    title: 'Hard Skills & Rekayasa',
    summary:
      'Membangun aplikasi web dan mobile, antarmuka frontend, prototipe IoT, serta troubleshooting sistem perangkat lunak dan keras.',
    items: [
      'Pengembangan Aplikasi (JavaScript & React Native)',
      'Pemrograman & Pengembangan Web (React, TypeScript, Tailwind CSS)',
      'Troubleshooting Backend & Pemeliharaan Sistem Internal',
      'Internet of Things (IoT) & Prototipe Arduino',
      'Troubleshooting Perangkat Keras Komputer',
    ],
  },
  {
    index: '02',
    title: 'Bisnis Digital & Pemecahan Masalah',
    summary:
      'Menerjemahkan tantangan bisnis dan sosial menjadi solusi TI terstruktur melalui pemikiran analitis dan desain produk.',
    items: [
      'Pemecahan Masalah TI & Solusi Bisnis Berbasis TI',
      'Riset Bisnis Digital & Manajemen Proyek',
      'Arsitektur Escrow Peer-to-Peer (TiMu · ADIKARA 2026: Entrepreneurship)',
      'Riset TI Terapan (PKM-KC Tingkat Fakultas)',
      'Berpikir Kritis & Kemampuan Analitis',
    ],
  },
  {
    index: '03',
    title: 'Kepemimpinan, Acara & Bahasa',
    summary:
      'Memimpin divisi hubungan masyarakat, memandu ratusan peserta sebagai Master of Ceremonies, dan mengoordinasikan operasional acara.',
    items: [
      'Kepemimpinan & Manajemen Acara Lintas Divisi',
      'Hubungan Masyarakat, Mitra Media & Produksi Konten',
      'Master of Ceremonies & Public Speaking',
      'Team Liaison Officer (LO) & Layanan Penonton',
      'Bahasa: Bahasa Indonesia (Asli), Bahasa Inggris (ECCT 3.5 · EPrT 503)',
    ],
  },
];

export const ACHIEVEMENT_CATEGORY_LABELS: Record<
  Language,
  Record<AchievementCategory, string>
> = {
  en: {
    Competition: 'Competition',
    Academic: 'Academic',
    Certification: 'Certification',
    Organization: 'Organization',
  },
  id: {
    Competition: 'Kompetisi',
    Academic: 'Akademik',
    Certification: 'Sertifikasi',
    Organization: 'Organisasi',
  },
};

export const EXPERIENCE_KIND_LABELS: Record<
  Language,
  Record<ExperienceKind, string>
> = {
  en: {
    'Work & Internship': 'Work & Internship',
    'Event & Leadership': 'Event & Leadership',
    Organization: 'Organization',
    Education: 'Education',
  },
  id: {
    'Work & Internship': 'Kerja & Magang',
    'Event & Leadership': 'Acara & Kepemimpinan',
    Organization: 'Organisasi',
    Education: 'Pendidikan',
  },
};

export function getPortfolioBundle(lang: Language): LocalizedPortfolioBundle {
  if (lang === 'id') {
    return {
      lang: 'id',
      profile: ID_PROFILE,
      navItems: ID_NAV_ITEMS,
      projects: ID_PROJECTS,
      achievements: ID_ACHIEVEMENTS,
      certificates: ID_CERTIFICATES,
      experienceLedger: ID_EXPERIENCE_LEDGER,
      experiencePhotos: ID_EXPERIENCE_PHOTOS,
      organisationalLedger: ID_ORGANISATIONAL_LEDGER,
      educationLedger: ID_EDUCATION_LEDGER,
      capabilityGroups: ID_CAPABILITY_GROUPS,
      ui: ID_UI,
    };
  }

  return {
    lang: 'en',
    profile: EN_PROFILE,
    navItems: NAV_ITEMS,
    projects: PROJECTS,
    achievements: ACHIEVEMENTS,
    certificates: CERTIFICATES,
    experienceLedger: EXPERIENCE_LEDGER,
    experiencePhotos: EXPERIENCE_PHOTOS,
    organisationalLedger: ORGANISATIONAL_LEDGER,
    educationLedger: EDUCATION_LEDGER,
    capabilityGroups: CAPABILITY_GROUPS,
    ui: EN_UI,
  };
}
