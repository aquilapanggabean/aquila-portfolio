import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import type { LocalizedPortfolioBundle } from '../data/i18n';
import {
  buildMailtoUrl,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../utils/portfolio';

interface ContactFooterSectionProps {
  bundle: LocalizedPortfolioBundle;
}

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

type SubmitStatus = 'idle' | 'submitting' | 'sent';

export function ContactFooterSection({ bundle }: ContactFooterSectionProps) {
  const { lang, profile, ui } = bundle;
  const [chapterIndex, chapterLabel] = ui.contactTag.split(' / ');
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submittedPayload, setSubmittedPayload] = useState<ContactFormValues | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Re-translate active inline error messages if language switches while errors are displayed
  useEffect(() => {
    setErrors((prev) => {
      if (Object.keys(prev).length === 0) {
        return prev;
      }
      return validateContactForm(values, lang).errors;
    });
  }, [lang, values]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = profile.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedEmail(true);
    }

    window.setTimeout(() => {
      setCopiedEmail(false);
    }, 3000);
  };

  const handleFieldChange = (field: keyof ContactFormValues, nextValue: string) => {
    setValues((prev) => ({ ...prev, [field]: nextValue }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(values, lang);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    window.setTimeout(() => {
      setSubmittedPayload({ ...values });
      setStatus('sent');
    }, 240);
  };

  const handleResetForm = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmittedPayload(null);
    setStatus('idle');
  };

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white text-[#0B1220]"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-24 pb-14 lg:pt-32 lg:pb-16">
        {/* Homepage-Matched Technical Metadata Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-14 border-b border-[#E8EDF3] font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase tabular-nums reveal-block">
          <p className="flex items-center gap-2 text-[#0B1220] font-medium">
            <span className="text-[#2457D6]">{chapterIndex}</span>
            <span aria-hidden="true" className="text-[#CBD5E1]">
              /
            </span>
            <span>{chapterLabel}</span>
          </p>
          <p className="text-[#64748B]">{ui.contactMetaRight}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 5 columns: Direct contact channels (Email + LinkedIn + GitHub) */}
          <div className="lg:col-span-5 reveal-block">
            <h2
              id="contact-heading"
              className="font-serif italic text-[clamp(2.5rem,4.4vw,3.75rem)] font-normal tracking-[-0.018em] text-[#0B1220] leading-[1.02]"
            >
              {ui.contactHeading}
            </h2>

            <p className="mt-4 text-base sm:text-[17px] leading-[1.68] text-[#475569] max-w-[44ch]">
              {ui.contactLead}
            </p>

            <div className="mt-10 pt-8 border-t border-[#E8EDF3] space-y-7">
              <div>
                <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[#64748B] mb-2">
                  {ui.contactDirectEmail}
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-base sm:text-lg font-semibold text-[#0B1220] hover:text-[#2457D6] underline decoration-[#CBD5E1] underline-offset-4 transition-colors break-all"
                >
                  {profile.email}
                </a>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs tracking-[0.06em] uppercase font-medium text-[#0B1220] hover:text-[#2457D6] bg-white border border-[#CBD5E1] hover:border-[#2457D6] rounded-[4px] transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#059669]" aria-hidden="true" />
                        <span>{ui.heroEmailCopied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#64748B]" aria-hidden="true" />
                        <span>{ui.contactCopyEmail}</span>
                      </>
                    )}
                  </button>
                  <span
                    role="status"
                    aria-live="polite"
                    className="font-mono text-xs text-[#047857]"
                  >
                    {copiedEmail ? ui.contactCopiedStatus : ''}
                  </span>
                </div>
              </div>

              <div className="pt-7 border-t border-[#E8EDF3]">
                <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[#64748B] mb-2">
                  {ui.contactDirectPhone}
                </p>
                <a
                  href={profile.phoneHref}
                  className="text-base sm:text-lg font-semibold tabular-nums text-[#0B1220] hover:text-[#2457D6] underline decoration-[#CBD5E1] underline-offset-4 transition-colors"
                >
                  {profile.phone}
                </a>
              </div>

              <div className="pt-7 border-t border-[#E8EDF3]">
                <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[#64748B] mb-3">
                  {ui.contactSocialProfiles}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 py-2 border-b border-[#E8EDF3] font-mono text-xs tracking-[0.04em] font-medium text-[#0B1220] hover:text-[#2457D6] transition-colors"
                  >
                    <span>LinkedIn ({profile.linkedinHandle})</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 py-2 border-b border-[#E8EDF3] font-mono text-xs tracking-[0.04em] font-medium text-[#0B1220] hover:text-[#2457D6] transition-colors"
                  >
                    <span>GitHub ({profile.githubHandle})</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 py-2 border-b border-[#E8EDF3] font-mono text-xs tracking-[0.04em] font-medium text-[#2457D6] hover:text-[#315FC8] transition-colors"
                  >
                    <span>{ui.contactResumeLabel}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 columns: Structured Inquiry Form */}
          <div className="lg:col-span-7 reveal-block">
            <div className="bg-white border border-[#E8EDF3] rounded-[4px] p-6 sm:p-8 lg:p-10">
              {status === 'sent' && submittedPayload ? (
                <div data-testid="contact-success-state" className="space-y-5">
                  <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[#047857] font-medium">
                    {ui.contactSuccessTag}
                  </p>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-[#0B1220]">
                    {ui.contactSuccessHeading}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#475569] max-w-[54ch]">
                    {ui.contactSuccessBody(submittedPayload.name, profile.email)}
                  </p>

                  <dl className="p-4 bg-[#F7F8FA] border border-[#E8EDF3] rounded-[4px] space-y-2 text-xs">
                    <div className="flex flex-wrap gap-2">
                      <dt className="font-mono text-[#64748B]">
                        {ui.contactSuccessSubject}
                      </dt>
                      <dd className="text-[#0B1220] font-medium">
                        {submittedPayload.subject}
                      </dd>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <dt className="font-mono text-[#64748B]">
                        {ui.contactSuccessReplyTo}
                      </dt>
                      <dd className="text-[#475569]">{submittedPayload.email}</dd>
                    </div>
                  </dl>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={buildMailtoUrl(profile.email, submittedPayload)}
                      className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 font-mono text-xs tracking-[0.08em] uppercase font-medium text-white bg-[#2457D6] hover:bg-[#315FC8] rounded-[4px] transition-colors"
                    >
                      {ui.contactOpenEmailClient}
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="min-h-[44px] inline-flex items-center justify-center px-4 py-2.5 font-mono text-xs tracking-[0.06em] uppercase font-medium text-[#0B1220] border border-[#CBD5E1] hover:border-[#0B1220] rounded-[4px] transition-colors"
                    >
                      {ui.contactSendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-mono text-[11px] tracking-[0.06em] uppercase font-medium text-[#475569] mb-2"
                      >
                        {ui.contactNameLabel}
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={(event) => handleFieldChange('name', event.target.value)}
                        placeholder={ui.contactNamePlaceholder}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0B1220] placeholder:text-[#94A3B8] bg-[#F7F8FA] focus:bg-white border border-[#D8E0EA] focus:border-[#2457D6] rounded-[4px] transition-colors"
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1.5 text-xs text-[#DC2626]"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-mono text-[11px] tracking-[0.06em] uppercase font-medium text-[#475569] mb-2"
                      >
                        {ui.contactEmailLabel}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={(event) => handleFieldChange('email', event.target.value)}
                        placeholder={ui.contactEmailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0B1220] placeholder:text-[#94A3B8] bg-[#F7F8FA] focus:bg-white border border-[#D8E0EA] focus:border-[#2457D6] rounded-[4px] transition-colors"
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 text-xs text-[#DC2626]"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block font-mono text-[11px] tracking-[0.06em] uppercase font-medium text-[#475569] mb-2"
                    >
                      {ui.contactSubjectLabel}
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={(event) => handleFieldChange('subject', event.target.value)}
                      placeholder={ui.contactSubjectPlaceholder}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0B1220] placeholder:text-[#94A3B8] bg-[#F7F8FA] focus:bg-white border border-[#D8E0EA] focus:border-[#2457D6] rounded-[4px] transition-colors"
                    />
                    {errors.subject && (
                      <p
                        id="contact-subject-error"
                        role="alert"
                        className="mt-1.5 text-xs text-[#DC2626]"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-[11px] tracking-[0.06em] uppercase font-medium text-[#475569] mb-2"
                    >
                      {ui.contactMessageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(event) => handleFieldChange('message', event.target.value)}
                      placeholder={ui.contactMessagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className="w-full px-3.5 py-2.5 text-sm text-[#0B1220] placeholder:text-[#94A3B8] bg-[#F7F8FA] focus:bg-white border border-[#D8E0EA] focus:border-[#2457D6] rounded-[4px] transition-colors resize-y"
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1.5 text-xs text-[#DC2626]"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="min-h-[46px] inline-flex items-center justify-center px-6 py-2.5 font-mono text-xs tracking-[0.08em] uppercase font-medium text-white bg-[#2457D6] hover:bg-[#315FC8] disabled:opacity-60 rounded-[4px] transition-colors"
                    >
                      {status === 'submitting'
                        ? ui.contactSubmitBusy
                        : ui.contactSubmitIdle}
                    </button>
                    <span className="font-mono text-xs text-[#64748B]">
                      {ui.contactValidationHint}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Purpose-built Compact White Editorial Footer (with LinkedIn & GitHub, no Admin button) */}
        <div className="mt-20 pt-8 border-t border-[#E8EDF3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#64748B]">
          <p className="tabular-nums">
            © 2026 {profile.fullName} · {ui.footerUniversity}
          </p>

          <div className="flex flex-wrap items-center gap-6 uppercase tracking-[0.06em]">
            <a href="#top" className="hover:text-[#0B1220] transition-colors">
              {ui.footerBackToTop}
            </a>
            <a href="#projects" className="hover:text-[#0B1220] transition-colors">
              {ui.footerProjects}
            </a>
            <a href="#experience" className="hover:text-[#0B1220] transition-colors">
              {ui.footerExperience}
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0B1220] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0B1220] transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#0B1220] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
