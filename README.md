# Panduan Pengelolaan Konten Portofolio — Aquila Altair Panggabean

Website portofolio ini bersifat **bilingual (`EN` / `ID`)** dengan seluruh data terpusat di folder `src/data/`. Kamu bisa menambah, mengubah, atau menghapus data di setiap section langsung dari kode tanpa perlu menu admin atau database eksternal.

---

## 1. Peta File Data Utama

| File | Fungsi |
| :--- | :--- |
| `src/data/media.ts` | Tempat mendaftarkan semua file **foto profil** & **gambar proyek**. |
| `src/data/portfolio.ts` | Data utama versi **Bahasa Inggris (`EN`)**: profil, email, GitHub, LinkedIn, proyek, prestasi, pengalaman, pendidikan, dan kapabilitas. |
| `src/data/i18n.ts` | Data terjemahan versi **Bahasa Indonesia (`ID`)** serta label teks antarmuka (`EN` & `ID`). |
| `src/App.tsx` | Urutan section yang ditampilkan di halaman (untuk menyembunyikan, menghapus, atau menambah section baru). |

> **Tips penting:** Karena website mendukung tombol bahasa `EN | ID`, setiap kali kamu menambah atau menghapus item di `src/data/portfolio.ts` (Bahasa Inggris), lakukan hal yang sama pada bagian `ID_*` di `src/data/i18n.ts` (Bahasa Indonesia) agar jumlah dan urutan data tetap sinkron.

---

## 2. Cara Mengganti atau Menambahkan Foto

### A. Foto Profil (Section About)
Foto profil kamu saat ini sudah terpasang di `src/data/media.ts`. Jika suatu saat ingin menggantinya dengan foto baru:

1. Siapkan foto berorientasi **potret rasio `3:4`** (misalnya `600x800` atau `1200x1600`, format `.jpg`, `.png`, atau `.webp`).
2. Simpan file foto tersebut ke dalam folder:
   ```text
   public/images/profile/foto-baru.jpg
   ```
   *(Buat folder `public/images/profile/` jika belum ada.)*
3. Buka `src/data/media.ts`, lalu ubah bagian `heroPortrait.src`:
   ```ts
   profile: {
     heroPortrait: {
       src: '/images/profile/foto-baru.jpg', // <-- ganti path di sini
       alt: 'Portrait of Aquila Altair Panggabean',
       width: 600,
       height: 800,
       aspectRatio: '3/4',
       caption: 'Aquila Altair Panggabean, Information Technology Undergraduate at Telkom University',
     },
   }
   ```
   *(Catatan: File yang ditaruh di dalam folder `public/` otomatis diakses dari root `/` tanpa menulis kata `public`.)*

### B. Foto / Screenshot Proyek Baru
1. Siapkan gambar berorientasi **landscape rasio `16:9`** (misalnya `1280x720`).
2. Simpan di folder `public/images/projects/nama-proyek.jpg`.
3. Daftarkan di `PORTFOLIO_MEDIA.projects` pada file `src/data/media.ts`:
   ```ts
   projects: {
     // ...proyek lama...
     proyekBaru: {
       src: '/images/projects/nama-proyek.jpg',
       alt: 'Tampilan aplikasi Proyek Baru',
       width: 1280,
       height: 720,
       aspectRatio: '16/9',
       caption: 'Ringkasan singkat tampilan Proyek Baru',
     },
   }
   ```
4. Panggil `media: PORTFOLIO_MEDIA.projects.proyekBaru` pada data proyek di `src/data/portfolio.ts`.

---

## 3. Mengubah Email, LinkedIn, GitHub, Bio & Profil

Buka `src/data/portfolio.ts`, lalu cari objek `SITE_PROFILE`:

```ts
export const SITE_PROFILE = {
  fullName: 'Aquila Altair Panggabean',
  email: 'altair.panggabean@gmail.com',
  phone: '+62 812-2366-8133',
  phoneHref: 'tel:+6281223668133',
  resumeUrl: '/assets/aistudio/Aquila_Altair_Panggabean-resume__10__19d10eec.pdf',
  githubUrl: 'https://github.com/aquilapanggabean',
  githubHandle: '@aquilapanggabean',
  linkedinUrl: 'https://www.linkedin.com/in/aquilapanggabean',
  linkedinHandle: 'in/aquilapanggabean',
  positioning: 'Deskripsi singkat hero (EN)...',
  aboutProse: [
    'Paragraf 1 Tentang Saya (EN)...',
    'Paragraf 2 Tentang Saya (EN)...',
  ],
  aboutFacts: [
    { label: 'Institution', value: 'Telkom University (Sep 2025 - Aug 2029)' },
    { label: 'Core Focus', value: 'IoT, Digital Innovation & Business IT Solutions' },
    { label: 'Languages', value: 'Bahasa Indonesia (Native), English (Proficient)' },
  ],
};
```

- Email, nomor telepon, file CV PDF, GitHub, dan LinkedIn otomatis dipakai di seluruh website (Hero, About, Contact, dan Footer) untuk kedua bahasa.
- Untuk mengganti file CV PDF di masa depan, taruh file `.pdf` baru ke `public/` lalu ubah nilai `resumeUrl`.
- Untuk mengubah versi Bahasa Indonesia dari `positioning`, `aboutProse`, dan `aboutFacts`, edit objek `ID_PROFILE` di `src/data/i18n.ts`.

---

## 4. Menambah atau Menghapus Proyek (`02 / Selected Projects`)

### Menambah Proyek Baru
1. Tambahkan gambar proyek di `src/data/media.ts` (lihat Langkah 2B).
2. Buka `src/data/portfolio.ts` → array `PROJECTS`, lalu tambahkan objek baru:
   ```ts
   {
     id: 'nama-proyek-unik',
     index: '06',
     title: 'Nama Proyek',
     recognition: 'Penghargaan / Konteks Proyek',
     category: 'FinTech & Web', // Pilihan: 'FinTech & Web' | 'IoT & Hardware' | 'Mobile & Research'
     year: '2026',
     role: 'Full-Stack Developer',
     overview: 'Ringkasan singkat 1–2 kalimat (EN).',
     problem: 'Masalah utama yang diselesaikan proyek ini (EN).',
     contribution: 'Kontribusi spesifik kamu di proyek ini (EN).',
     technologies: ['React', 'TypeScript', 'Node.js'],
     media: PORTFOLIO_MEDIA.projects.proyekBaru,
     repositoryUrl: 'https://github.com/aquilapanggabean/nama-repo', // opsional
     liveDemoUrl: 'https://contoh-demo.com', // opsional
   },
   ```
3. Buka `src/data/i18n.ts` → array `ID_PROJECTS`, tambahkan terjemahan Bahasa Indonesia-nya dengan urutan yang sama:
   ```ts
   {
     ...PROJECTS[5], // sesuaikan indeks array di PROJECTS
     recognition: 'Penghargaan / Konteks Proyek (ID)',
     role: 'Pengembang Full-Stack',
     overview: 'Ringkasan singkat 1–2 kalimat (ID).',
     problem: 'Masalah utama yang diselesaikan proyek ini (ID).',
     contribution: 'Kontribusi spesifik kamu di proyek ini (ID).',
   },
   ```

### Menghapus Proyek
Hapus objek proyek tersebut dari array `PROJECTS` (`src/data/portfolio.ts`) **dan** hapus entri pasangannya dari `ID_PROJECTS` (`src/data/i18n.ts`). Pastikan indeks `PROJECTS[n]` pada entri `ID_PROJECTS` di bawahnya disesuaikan.

---

## 5. Menambah atau Menghapus Prestasi (`03 / Honors & Recognition`)

1. **Versi EN (`src/data/portfolio.ts` → array `ACHIEVEMENTS`):**
   ```ts
   {
     id: 'prestasi-baru-2026',
     title: '1st Place, National IT Competition 2026',
     issuer: 'Nama Penyelenggara',
     year: '2026',
     category: 'Competition', // Pilihan: 'Competition' | 'Academic' | 'Certification' | 'Organization'
     summary: 'Penjelasan singkat capaian dan dampaknya.',
     proofUrl: 'https://link-sertifikat-opsional.com', // opsional (wajib https://)
   },
   ```
2. **Versi ID (`src/data/i18n.ts` → array `ID_ACHIEVEMENTS`):**
   Tambahkan objek dengan `id` yang sama dalam Bahasa Indonesia.
3. **Menghapus Prestasi:** Hapus objeknya dari `ACHIEVEMENTS` dan `ID_ACHIEVEMENTS`. Jika seluruh item dihapus, section Prestasi otomatis tidak dirender.

---

## 6. Menambah atau Menghapus Pengalaman & Pendidikan (`04 / Experience & Education`)

- **Pengalaman Kerja, Magang & Acara:** edit array `EXPERIENCE_LEDGER` di `src/data/portfolio.ts` dan `ID_EXPERIENCE_LEDGER` di `src/data/i18n.ts`.
- **Pengalaman Organisasi:** edit array `ORGANISATIONAL_LEDGER` di `src/data/portfolio.ts` dan `ID_ORGANISATIONAL_LEDGER` di `src/data/i18n.ts`.
- **Pendidikan:** edit array `EDUCATION_LEDGER` di `src/data/portfolio.ts` dan `ID_EDUCATION_LEDGER` di `src/data/i18n.ts`.

Contoh format 1 entri:
```ts
{
  id: 'magang-2026',
  period: 'Jun 2026 - Sep 2026',
  role: 'Software Engineering Intern',
  organization: 'Nama Perusahaan · Bandung, Indonesia',
  kind: 'Work & Internship', // Pilihan: 'Work & Internship' | 'Event & Leadership' | 'Organization' | 'Education'
  highlights: [
    'Pencapaian atau tanggung jawab pertama.',
    'Pencapaian atau tanggung jawab kedua.',
  ],
},
```
Untuk menghapus entri, cukup hapus blok `{ ... }` tersebut dari kedua file.

---

## 7. Menambah atau Menghapus Kapabilitas / Skill (`05 / Core Capabilities`)

Edit array `CAPABILITY_GROUPS` di `src/data/portfolio.ts` dan `ID_CAPABILITY_GROUPS` di `src/data/i18n.ts`:

```ts
{
  index: '01',
  title: 'Software & IoT Systems',
  summary: 'Deskripsi singkat bidang keahlian.',
  items: [
    'React, TypeScript, Vite & Tailwind CSS',
    'Tambahkan skill baru di sini',
  ],
}
```
Untuk mengurangi skill, hapus baris string di dalam array `items`.

---

## 8. Menghapus / Menyembunyikan Section atau Mengubah Menu Navigasi

1. **Menghapus atau menyembunyikan section dari halaman:**
   Buka `src/App.tsx`, lalu hapus (atau beri komentar `{/* ... */}`) komponen section yang tidak ingin ditampilkan di dalam `<main>`:
   ```tsx
   <main id="main-content">
     <HeroSection bundle={bundle} />
     <AboutSection bundle={bundle} />
     <ProjectsSection bundle={bundle} onSelectProject={handleOpenProject} />
     <AchievementsSection bundle={bundle} />
     <ExperienceSection bundle={bundle} />
     <CapabilitiesSection bundle={bundle} />
   </main>
   ```
2. **Menyesuaikan link di Navbar:**
   Hapus atau ubah entri pada `NAV_ITEMS` di `src/data/portfolio.ts` dan `ID_NAV_ITEMS` di `src/data/i18n.ts` agar sesuai dengan section yang aktif.

---

## 9. Menjalankan & Mem-build Website Secara Lokal

```bash
# 1. Install dependensi (cukup sekali di awal)
npm install

# 2. Jalankan mode development (http://localhost:3000)
npm run dev

# 3. Cek tipe TypeScript & unit test sebelum deploy
npm run lint
npx tsx --test src/utils/portfolio.test.ts src/utils/cursorField.test.ts src/utils/cursorState.test.ts

# 4. Build untuk production
npm run build
```
