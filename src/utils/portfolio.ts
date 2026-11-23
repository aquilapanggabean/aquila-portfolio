import type { ProjectCategory, ProjectItem } from '../data/portfolio';

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const BANNED_COPY_PHRASES = [
  'get started',
  'learn more',
  'try now',
  'explore',
  'discover',
  'ai powered',
  'ai-powered',
  'next generation',
  'next-generation',
  'revolutionary',
  'seamless',
  'cutting edge',
  'cutting-edge',
  'passionate',
  'ultimate',
  'powerful',
  'effortless',
] as const;

export function filterProjects(
  projects: readonly ProjectItem[],
  category: ProjectCategory,
  rawQuery: string
): ProjectItem[] {
  const normalizedQuery = rawQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = category === 'All' || project.category === category;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      project.title,
      project.recognition,
      project.category,
      project.role,
      project.overview,
      project.problem,
      project.contribution,
      ...project.technologies,
      ...(project.collaborators ?? []),
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function validateContactForm(
  values: ContactFormValues,
  lang: 'en' | 'id' = 'en'
): {
  isValid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name =
      lang === 'id'
        ? 'Mohon isi nama Anda (minimal 2 karakter).'
        : 'Please enter your name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email) {
    errors.email =
      lang === 'id'
        ? 'Mohon masukkan alamat email agar saya dapat membalas.'
        : 'Please enter an email address so I can reply.';
  } else if (!emailPattern.test(email)) {
    errors.email =
      lang === 'id'
        ? 'Mohon masukkan alamat email yang valid (contoh: nama@domain.com).'
        : 'Please enter a valid email address (for example: name@domain.com).';
  }

  if (subject.length < 3) {
    errors.subject =
      lang === 'id'
        ? 'Mohon tambahkan subjek singkat (minimal 3 karakter).'
        : 'Please add a short subject line (at least 3 characters).';
  }

  if (message.length < 15) {
    errors.message =
      lang === 'id'
        ? 'Mohon sertakan pesan singkat (minimal 15 karakter).'
        : 'Please include a brief message (at least 15 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildMailtoUrl(
  recipientEmail: string,
  values: ContactFormValues
): string {
  const subject = encodeURIComponent(values.subject.trim());
  const body = encodeURIComponent(
    `From: ${values.name.trim()} (${values.email.trim()})\n\n${values.message.trim()}`
  );
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}

export function findEditorialViolations(texts: readonly string[]): string[] {
  const violations: string[] = [];

  for (const text of texts) {
    if (text.includes('—')) {
      violations.push(`Em dash found in: "${text.slice(0, 60)}"`);
    }
    const lower = text.toLowerCase();
    for (const phrase of BANNED_COPY_PHRASES) {
      const pattern = new RegExp(`\\b${phrase.replace('-', '[- ]')}\\b`, 'i');
      if (pattern.test(lower)) {
        violations.push(`Banned phrase "${phrase}" found in: "${text.slice(0, 60)}"`);
      }
    }
  }

  return violations;
}
