import {
  ACHIEVEMENTS,
  CAPABILITY_GROUPS,
  EDUCATION_LEDGER,
  EXPERIENCE_LEDGER,
  NAV_ITEMS,
  PROJECTS,
  SITE_PROFILE,
  type AchievementCategory,
  type AchievementItem,
  type CapabilityGroup,
  type ExperienceItem,
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
  achievementsMetaRight: (count: number) => string;
  achievementsHeading: string;
  achievementsLead: string;
  achievementsVerifyLabel: string;
  experienceTag: string;
  experienceMetaRight: string;
  experienceHeading: string;
  experienceLead: string;
  experienceSubLeadership: string;
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
  contactCopyEmail: string;
  contactCopiedStatus: string;
  contactSocialProfiles: string;
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
  experienceLedger: readonly ExperienceItem[];
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
    'Academic grounding in Information Technology paired with applied systems engineering and clear operational communication.',
  aboutPortraitCaption:
    'Aquila Altair Panggabean, Information Technology Undergraduate at Telkom University',
  projectsTag: '02 / CASE ARCHIVE',
  projectsMetaRight: 'SOFTWARE · IOT · APPLIED RESEARCH',
  projectsHeading: 'Selected Projects',
  projectsLead:
    'Verified software systems, national entrepreneurship case studies, applied lab prototypes, and Arduino IoT builds.',
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
    badge: '2nd Place',
    stagePrefix: 'Stage',
    footerRight: 'Product & Frontend Delivery',
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
        output: '2nd Place, MotionHack 5.0',
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
  achievementsTag: '03 / HONORS',
  achievementsMetaRight: (count) => `${count} VERIFIED RECORDS`,
  achievementsHeading: 'Honors & Recognition',
  achievementsLead:
    'National competition milestones, academic distinctions, and verified credentials earned across engineering and entrepreneurship.',
  achievementsVerifyLabel: 'Verify Credential',
  experienceTag: '04 / LEDGER',
  experienceMetaRight: 'CHRONOLOGICAL RECORD · 2025 TO 2026',
  experienceHeading: 'Experience & Education',
  experienceLead:
    'A chronological ledger of public relations leadership, national competition milestones, applied lab work, and university studies.',
  experienceSubLeadership: 'LEADERSHIP, COMPETITIONS & RESEARCH',
  experienceSubEducation: 'EDUCATION',
  capabilitiesTag: '05 / CAPABILITIES',
  capabilitiesMetaRight: 'SYSTEMS · STRATEGY · OPERATIONS',
  capabilitiesHeading: 'Core Capabilities',
  capabilitiesLead:
    'Technical, strategic, and operational disciplines practiced across coursework, lab research, competitions, and student organizations.',
  contactTag: '06 / INQUIRIES',
  contactMetaRight: 'DIRECT CHANNEL · BANDUNG, ID',
  contactHeading: 'Start a Conversation',
  contactLead:
    'Available for software engineering internships, applied IoT collaborations, product research, and technical roles. Reach out directly by email or use the structured inquiry form.',
  contactDirectEmail: 'DIRECT EMAIL',
  contactCopyEmail: 'Copy Email Address',
  contactCopiedStatus: 'Copied to clipboard.',
  contactSocialProfiles: 'GITHUB & LINKEDIN',
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
    'Landasan akademik Teknologi Informasi yang dipadukan dengan rekayasa sistem terapan serta komunikasi operasional yang jelas.',
  aboutPortraitCaption:
    'Aquila Altair Panggabean, Mahasiswa Sarjana Teknologi Informasi di Telkom University',
  projectsTag: '02 / ARSIP KARYA',
  projectsMetaRight: 'PERANGKAT LUNAK · IOT · RISET TERAPAN',
  projectsHeading: 'Proyek Pilihan',
  projectsLead:
    'Sistem perangkat lunak terverifikasi, studi kasus kewirausahaan nasional, prototipe riset lab, dan perangkat keras IoT berbasis Arduino.',
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
    badge: 'Juara 2',
    stagePrefix: 'Tahap',
    footerRight: 'Produk & Pengembangan Frontend',
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
        output: 'Juara 2, MotionHack 5.0',
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
  achievementsTag: '03 / PRESTASI',
  achievementsMetaRight: (count) => `${count} CATATAN TERVERIFIKASI`,
  achievementsHeading: 'Prestasi & Pengakuan',
  achievementsLead:
    'Capaian kompetisi nasional, penghargaan akademik, serta sertifikasi terverifikasi di bidang rekayasa dan kewirausahaan.',
  achievementsVerifyLabel: 'Lihat Bukti / Sertifikat',
  experienceTag: '04 / REKAM JEJAK',
  experienceMetaRight: 'CATATAN KRONOLOGIS · 2025 HINGGA 2026',
  experienceHeading: 'Pengalaman & Pendidikan',
  experienceLead:
    'Catatan kronologis kepemimpinan hubungan masyarakat, capaian kompetisi nasional, riset laboratorium terapan, dan studi universitas.',
  experienceSubLeadership: 'KEPEMIMPINAN, KOMPETISI & RISET',
  experienceSubEducation: 'PENDIDIKAN',
  capabilitiesTag: '05 / KAPABILITAS',
  capabilitiesMetaRight: 'SISTEM · STRATEGI · OPERASIONAL',
  capabilitiesHeading: 'Kapabilitas Utama',
  capabilitiesLead:
    'Disiplin teknis, strategis, dan operasional yang dipraktikkan melalui perkuliahan, riset laboratorium, kompetisi, dan organisasi mahasiswa.',
  contactTag: '06 / KONTAK',
  contactMetaRight: 'SALURAN LANGSUNG · BANDUNG, ID',
  contactHeading: 'Mulai Diskusi',
  contactLead:
    'Terbuka untuk magang rekayasa perangkat lunak, kolaborasi IoT terapan, riset produk, dan peran teknis. Hubungi langsung melalui email atau gunakan formulir terstruktur ini.',
  contactDirectEmail: 'EMAIL LANGSUNG',
  contactCopyEmail: 'Salin Alamat Email',
  contactCopiedStatus: 'Disalin ke papan klip.',
  contactSocialProfiles: 'GITHUB & LINKEDIN',
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
  githubUrl: SITE_PROFILE.githubUrl,
  githubHandle: SITE_PROFILE.githubHandle,
  linkedinUrl: SITE_PROFILE.linkedinUrl,
  linkedinHandle: SITE_PROFILE.linkedinHandle,
  location: SITE_PROFILE.location,
  statusInstitution: 'MAHASISWA S1 TELKOM UNIVERSITY',
  statusFaculty: 'FAKULTAS INFORMATIKA',
  badgeAdikara: 'FINALIS ADIKARA 2026',
  badgeMotionHack: 'JUARA 2 MOTIONHACK 5.0',
  positioning:
    'Mahasiswa sarjana Teknologi Informasi di Telkom University. Menjembatani Inovasi Digital, IoT, dan Strategi Bisnis menjadi Solusi TI yang Skalabel. Pendiri dan Strategis TiMu Escrow.',
  scrollHint: 'Gulir ke bawah untuk meninjau arsip studi kasus pilihan.',
  aboutProse: [
    'Saya adalah mahasiswa sarjana Teknologi Informasi di Telkom University yang berfokus mengubah arsitektur teknis dan kebutuhan bisnis menjadi perangkat lunak praktis serta sistem perangkat keras terhubung. Pekerjaan saya berada di persimpangan rekayasa web terstruktur, prototipe IoT berbasis mikrokontroler, dan perumusan produk yang terukur.',
    'Melalui kompetisi kewirausahaan nasional, hackathon, riset terapan tingkat fakultas, dan peran hubungan masyarakat mahasiswa, saya mengutamakan eksekusi yang jelas: merancang alur status transaksi yang andal, menguji telemetri perangkat keras secara langsung, serta berkomunikasi lugas lintas tim teknis maupun non-teknis.',
  ],
  aboutFacts: [
    { label: 'Institusi', value: 'Telkom University' },
    { label: 'Program Studi', value: 'S1 Teknologi Informasi (Sarjana)' },
    { label: 'Bidang Utama', value: 'Rekayasa Web, Arduino IoT, Strategi Produk' },
  ],
};

const EN_PROFILE: LocalizedSiteProfile = {
  fullName: SITE_PROFILE.fullName,
  shortBrand: SITE_PROFILE.shortBrand,
  coordinates: SITE_PROFILE.coordinates,
  headlineFirst: SITE_PROFILE.headlineFirst,
  headlineLast: SITE_PROFILE.headlineLast,
  email: SITE_PROFILE.email,
  githubUrl: SITE_PROFILE.githubUrl,
  githubHandle: SITE_PROFILE.githubHandle,
  linkedinUrl: SITE_PROFILE.linkedinUrl,
  linkedinHandle: SITE_PROFILE.linkedinHandle,
  location: SITE_PROFILE.location,
  statusInstitution: 'UNDERGRADUATE AT TELKOM UNIVERSITY',
  statusFaculty: 'FACULTY OF INFORMATICS',
  badgeAdikara: 'ADIKARA 2026 FINALIST',
  badgeMotionHack: 'MOTIONHACK 5.0 2ND PLACE',
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
    recognition: 'Finalis, Kewirausahaan Nasional Adikara 2026',
    role: 'Arsitek Produk & Lead Rekayasa',
    overview:
      'Platform escrow peer-to-peer untuk melindungi transaksi daring langsung melalui mesin status penitipan dana empat tahap dan aturan serah terima terverifikasi.',
    problem:
      'Pembeli dan penjual pada transaksi langsung sering bertransaksi tanpa penitipan dana netral, sehingga menimbulkan risiko penyelesaian, bukti pengiriman yang kabur, dan sengketa tanpa kepastian.',
    contribution:
      'Merancang bersama model transaksi dan mesin status penitipan dana empat tahap, menyusun studi kasus masalah-ke-solusi, serta menyiapkan arsitektur produk yang dipresentasikan pada Kewirausahaan Nasional Adikara 2026.',
    escrowStateMachine: [
      {
        step: '01',
        stateName: 'Pesanan & Setoran',
        actor: 'Pembeli',
        summary:
          'Pembeli menginisiasi kesepakatan transaksi dan menyetorkan dana ke buku kas penitipan TiMu, bukan mentransfer langsung ke penjual.',
        guardCondition: 'Ketentuan kesepakatan dikunci dan bukti pembayaran terkonfirmasi.',
      },
      {
        step: '02',
        stateName: 'Penguncian Dana',
        actor: 'Buku Kas Escrow TiMu',
        summary:
          'Dana dibekukan sementara dalam penitipan netral saat penjual menerima sinyal terverifikasi untuk mengirim barang atau menyelesaikan hasil kerja.',
        guardCondition: 'Saldo terverifikasi; penarikan diblokir hingga pemenuhan selesai.',
      },
      {
        step: '03',
        stateName: 'Pengiriman & Verifikasi',
        actor: 'Penjual & Pembeli',
        summary:
          'Penjual mengunggah bukti pengiriman dan pembeli memeriksa barang atau hasil kerja dalam jendela waktu konfirmasi yang jelas.',
        guardCondition: 'Timer inspeksi aktif dengan opsi terima atau ajukan sanggahan.',
      },
      {
        step: '04',
        stateName: 'Penyelesaian atau Sengketa',
        actor: 'Mesin Aturan Escrow',
        summary:
          'Konfirmasi penerimaan mencairkan dana otomatis ke penjual; pesanan yang disanggah dialihkan ke peninjauan bukti terstruktur sebelum penyelesaian.',
        guardCondition: 'Satu status akhir pasti: Dicairkan ke Penjual atau Dikembalikan ke Pembeli.',
      },
    ],
  },
  {
    ...PROJECTS[1],
    recognition: 'Juara 2, MotionHack 5.0',
    role: 'Pengembang Produk & Frontend',
    overview:
      'Produk hackathon yang dibangun dalam tenggat waktu ketat untuk MotionHack 5.0, memadukan alur pengguna terfokus dengan antarmuka web fungsional dan kelayakan bisnis.',
    problem:
      'Tim yang berlomba dalam sprint produk berbatas waktu sering terpecah antara slide konsep yang terlalu luas dan antarmuka yang belum selesai mendemonstrasikan alur nyata.',
    contribution:
      'Menerjemahkan alur pengguna inti menjadi prototipe frontend yang berfungsi penuh, menyelaraskan lingkup fitur dengan kriteria penilaian, serta memaparkan demonstrasi teknis yang meraih Juara 2.',
  },
  {
    ...PROJECTS[2],
    recognition: 'Mobile Innovation Lab, Telkom University',
    role: 'Kontributor Sistem Mobile',
    overview:
      'Inisiatif riset aplikasi mobile terapan di Mobile Innovation Lab Telkom University yang menelaah alur kerja cerdas terstruktur serta arsitektur informasi mobile yang rapi.',
    problem:
      'Prototipe awal di laboratorium membutuhkan struktur interaksi mobile yang konsisten agar keluaran analitis dapat dibaca jelas pada layar ringkas tanpa membebani pengguna.',
    contribution:
      'Berkontribusi pada arsitektur interaksi mobile, mengevaluasi alur tugas pengguna, serta mendokumentasikan spesifikasi teknis selama siklus riset laboratorium.',
  },
  {
    ...PROJECTS[3],
    recognition: 'Prototipe IoT Arduino',
    role: 'Pembangun Sistem Tertanam & IoT',
    overview:
      'Prototipe deteksi parkir pintar berbasis mikrokontroler Arduino dan sensor jarak ultrasonik untuk memantau keterisian slot serta melaporkan status secara langsung.',
    problem:
      'Pengendara membuang waktu mencari area parkir ketika keterisian slot masih dipantau secara manual, bukan terdeteksi langsung di tiap petak parkir.',
    contribution:
      'Merakit rangkaian Arduino Uno dan sensor ultrasonik, mengkalibrasi ambang jarak untuk transisi status keterisian, serta memvalidasi pembacaan status langsung pada pengujian meja.',
  },
  {
    ...PROJECTS[4],
    title: 'Riset TI Terapan PKM-KC',
    recognition: 'Tingkat Fakultas, Skema Karsa Cipta',
    role: 'Peneliti TI Terapan',
    overview:
      'Inisiatif riset Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) tingkat fakultas yang berfokus membangun prototipe teknologi informasi terapan yang terukur dan dapat diuji.',
    problem:
      'Menerjemahkan konsep akademik TI menjadi prototipe fungsional membutuhkan perumusan masalah formal, validasi kebutuhan sistem, dan dokumentasi rekayasa yang dapat direproduksi.',
    contribution:
      'Menyusun spesifikasi teknis, diagram arsitektur sistem terstruktur, serta mengoordinasikan validasi berulang sesuai pedoman peninjauan tingkat fakultas.',
  },
];

const ID_EXPERIENCE_LEDGER: readonly ExperienceItem[] = [
  {
    id: 'itsf-pr',
    period: 'Nov 2026 hingga Sekarang',
    role: 'Staf Hubungan Masyarakat (Public Relations)',
    organization: 'ITSF Championship',
    kind: 'Leadership & Operations',
    highlights: [
      'Menyusun jadwal kampanye media sosial terstruktur serta aset komunikasi visual untuk pengumuman turnamen.',
      'Mengelola relasi mitra media eksternal dan koordinasi publikasi lintas kanal mahasiswa serta regional.',
      'Bertugas sebagai Team Liaison Officer (LO) yang mengoordinasikan jadwal, pengarahan teknis, dan kebutuhan operasional tim peserta.',
    ],
  },
  {
    id: 'adikara-2026',
    period: '2026',
    role: 'Finalis & Lead Produk (TiMu)',
    organization: 'Kewirausahaan Nasional Adikara 2026',
    kind: 'Competition & Research',
    highlights: [
      'Merancang model escrow peer-to-peer TiMu serta mesin status penitipan dana empat tahap.',
      'Berkolaborasi bersama Berni Venus Mutri Azhara dan Vincentius Farrel Hermawan dari validasi masalah hingga presentasi final tingkat nasional.',
    ],
  },
  {
    id: 'motionhack-5',
    period: '2025',
    role: 'Juara 2 (SuperPlus)',
    organization: 'MotionHack 5.0',
    kind: 'Competition & Research',
    highlights: [
      'Membangun dan mempresentasikan prototipe produk SuperPlus dalam tenggat hackathon hingga meraih Juara 2.',
      'Menyeimbangkan kelayakan teknis, kejelasan antarmuka, dan strategi bisnis di hadapan panel juri.',
    ],
  },
  {
    id: 'mobile-innovation-lab',
    period: '2025',
    role: 'Kontributor Proyek & Riset (Vantage AI)',
    organization: 'Mobile Innovation Lab, Telkom University',
    kind: 'Competition & Research',
    highlights: [
      'Berkontribusi pada kajian sistem mobile dan spesifikasi UX terstruktur untuk inisiatif lab Vantage AI.',
      'Berpartisipasi dalam riset TI terapan tingkat fakultas pada skema PKM-KC Karsa Cipta.',
    ],
  },
];

const ID_EDUCATION_LEDGER: readonly ExperienceItem[] = [
  {
    id: 'telkom-university',
    period: 'Sarjana (S1)',
    role: 'S1 Teknologi Informasi',
    organization: 'Telkom University',
    kind: 'Education',
    highlights: [
      'Perkuliahan dan praktikum terapan mencakup rekayasa perangkat lunak, sistem web, Internet of Things (Arduino), serta strategi bisnis digital.',
      'Aktif mengikuti kompetisi kewirausahaan nasional, hackathon rekayasa, Mobile Innovation Lab, dan riset PKM-KC.',
    ],
  },
];

const ID_CAPABILITY_GROUPS: readonly CapabilityGroup[] = [
  {
    index: '01',
    title: 'Sistem Perangkat Lunak & IoT',
    summary:
      'Membangun aplikasi frontend andal, alur status eksplisit, serta prototipe perangkat tertanam berbasis sensor.',
    items: [
      'React, TypeScript, Vite & Tailwind CSS',
      'HTML5 Semantik & Rekayasa UI Aksesibel',
      'Pemodelan State-Machine & Alur Kerja',
      'Mikrokontroler Arduino & Sensor Ultrasonik',
      'Git, GitHub & Otomasi Deployment CI',
    ],
  },
  {
    index: '02',
    title: 'Strategi Produk & Bisnis',
    summary:
      'Menyelaraskan arsitektur teknis dengan kebutuhan pengguna, kelayakan pasar, dan dokumentasi keputusan yang jelas.',
    items: [
      'Desain Alur Escrow & Penitipan Dana Peer-to-Peer',
      'Penyusunan Studi Kasus Masalah-ke-Solusi',
      'Riset TI Terapan (Skema PKM-KC)',
      'Perumusan Ruang Lingkup & Pitching Produk',
      'Dokumentasi Kebutuhan Lintas Tim',
    ],
  },
  {
    index: '03',
    title: 'Kepemimpinan & Hubungan Masyarakat',
    summary:
      'Mengoordinasikan komunikasi eksternal, kemitraan media, serta kelancaran operasional kegiatan di lapangan.',
    items: [
      'Produksi Kampanye Media Sosial Terstruktur',
      'Relasi & Koordinasi Mitra Media',
      'Koordinasi Team Liaison Officer (LO)',
      'Pengarahan Pemangku Kepentingan & Presentasi Teknis',
      'Eksekusi Sprint Kolaboratif',
    ],
  },
];

const ID_ACHIEVEMENTS: readonly AchievementItem[] = [
  {
    id: 'adikara-2026',
    title: 'Finalis, Kewirausahaan Nasional Adikara 2026',
    issuer: 'Kewirausahaan Nasional Adikara',
    year: '2026',
    category: 'Competition',
    summary:
      'Melaju ke tahap finalis nasional bersama TiMu, platform escrow peer-to-peer dengan mesin status penitipan dana empat tahap.',
  },
  {
    id: 'motionhack-5',
    title: 'Juara 2, MotionHack 5.0',
    issuer: 'Panel Juri MotionHack 5.0',
    year: '2025',
    category: 'Competition',
    summary:
      'Meraih Juara 2 lewat produk SuperPlus yang memadukan alur pengguna terfokus dengan antarmuka web React dan TypeScript.',
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
  Record<ExperienceItem['kind'], string>
> = {
  en: {
    'Leadership & Operations': 'Leadership & Operations',
    'Competition & Research': 'Competition & Research',
    Education: 'Education',
  },
  id: {
    'Leadership & Operations': 'Kepemimpinan & Operasional',
    'Competition & Research': 'Kompetisi & Riset',
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
      experienceLedger: ID_EXPERIENCE_LEDGER,
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
    experienceLedger: EXPERIENCE_LEDGER,
    educationLedger: EDUCATION_LEDGER,
    capabilityGroups: CAPABILITY_GROUPS,
    ui: EN_UI,
  };
}
