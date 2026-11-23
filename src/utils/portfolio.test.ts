import test from 'node:test';
import assert from 'node:assert/strict';
import { getPortfolioBundle } from '../data/i18n';
import { PORTFOLIO_MEDIA } from '../data/media';
import {
  ACHIEVEMENTS,
  CAPABILITY_GROUPS,
  EDUCATION_LEDGER,
  EXPERIENCE_LEDGER,
  ORGANISATIONAL_LEDGER,
  PROJECTS,
  SITE_PROFILE,
} from '../data/portfolio';
import {
  buildMailtoUrl,
  filterProjects,
  findEditorialViolations,
  validateContactForm,
} from './portfolio';

test('filterProjects returns all projects when category is All and query is empty', () => {
  const results = filterProjects(PROJECTS, 'All', '');
  assert.equal(results.length, PROJECTS.length);
});

test('filterProjects narrows by category accurately', () => {
  const iotProjects = filterProjects(PROJECTS, 'IoT & Hardware', '');
  assert.equal(iotProjects.length, 1);
  assert.equal(iotProjects[0].id, 'ezpark');

  const fintechProjects = filterProjects(PROJECTS, 'FinTech & Web', '');
  assert.equal(fintechProjects.length, 2);
  assert.deepEqual(
    fintechProjects.map((item) => item.id),
    ['timu', 'superplus']
  );
});

test('filterProjects searches across title, collaborators, and technologies', () => {
  const byCollaborator = filterProjects(PROJECTS, 'All', 'Berni Venus');
  assert.equal(byCollaborator.length, 1);
  assert.equal(byCollaborator[0].id, 'timu');

  const byTech = filterProjects(PROJECTS, 'All', 'Arduino');
  assert.equal(byTech.length, 1);
  assert.equal(byTech[0].id, 'ezpark');

  const empty = filterProjects(PROJECTS, 'All', 'nonexistent-query-xyz');
  assert.equal(empty.length, 0);
});

test('validateContactForm rejects empty and malformed inputs with localized field errors', () => {
  const emptyResult = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.subject);
  assert.ok(emptyResult.errors.message);

  const emptyId = validateContactForm(
    { name: '', email: '', subject: '', message: '' },
    'id'
  );
  assert.equal(emptyId.isValid, false);
  assert.ok(emptyId.errors.name?.includes('Mohon'));
  assert.ok(emptyId.errors.email?.includes('email'));

  const badEmail = validateContactForm({
    name: 'Rina Pratama',
    email: 'invalid-email',
    subject: 'Internship Inquiry',
    message: 'We would like to discuss a software engineering internship opportunity.',
  });
  assert.equal(badEmail.isValid, false);
  assert.ok(badEmail.errors.email);
  assert.equal(badEmail.errors.name, undefined);
});

test('validateContactForm accepts valid input and buildMailtoUrl encodes parameters', () => {
  const validPayload = {
    name: 'Rina Pratama',
    email: 'rina@company.co.id',
    subject: 'Software Engineering Internship',
    message: 'Hello Aquila, we reviewed TiMu and would like to schedule a technical call.',
  };

  const result = validateContactForm(validPayload);
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});

  const mailto = buildMailtoUrl(SITE_PROFILE.email, validPayload);
  assert.ok(mailto.startsWith(`mailto:${SITE_PROFILE.email}?subject=`));
  assert.ok(mailto.includes('Software%20Engineering%20Internship'));
});

test('EN and ID bundles match CV content, retain Adikara 2026, omit Current Role, and pass editorial gates', () => {
  const enBundle = getPortfolioBundle('en');
  const idBundle = getPortfolioBundle('id');

  assert.equal(enBundle.projects.length, idBundle.projects.length);
  assert.deepEqual(
    enBundle.projects.map((p) => p.id),
    idBundle.projects.map((p) => p.id)
  );
  assert.equal(enBundle.achievements.length, 4);
  assert.deepEqual(
    enBundle.achievements.map((a) => a.id),
    idBundle.achievements.map((a) => a.id)
  );
  // Ensure Adikara 2026 is preserved in both projects and achievements
  assert.ok(enBundle.projects.some((p) => p.id === 'timu' && /Adikara 2026/i.test(p.recognition)));
  assert.ok(enBundle.achievements.some((a) => a.id === 'adikara-2026'));

  // Verify CV Work (5), Organisational (2), and Education (2) ledgers
  assert.equal(enBundle.experienceLedger.length, 5);
  assert.equal(enBundle.experienceLedger.length, idBundle.experienceLedger.length);
  assert.equal(enBundle.organisationalLedger.length, 2);
  assert.equal(enBundle.organisationalLedger.length, idBundle.organisationalLedger.length);
  assert.equal(enBundle.educationLedger.length, 2);
  assert.equal(enBundle.educationLedger.length, idBundle.educationLedger.length);
  assert.equal(enBundle.capabilityGroups.length, idBundle.capabilityGroups.length);

  // Verify updated email, phone, LinkedIn profile, and uploaded portrait photo
  assert.equal(SITE_PROFILE.email, 'altair.panggabean@gmail.com');
  assert.equal(SITE_PROFILE.phone, '+62 812-2366-8133');
  assert.equal(SITE_PROFILE.linkedinUrl, 'https://www.linkedin.com/in/aquilapanggabean');
  assert.equal(
    PORTFOLIO_MEDIA.profile.heroPortrait.src,
    '/assets/aistudio/Untitled_design__2__d6f8f0eb.png'
  );

  // Verify Current Role has been removed from About facts in both languages
  assert.equal(enBundle.profile.aboutFacts.length, 3);
  assert.equal(idBundle.profile.aboutFacts.length, 3);
  assert.equal(
    enBundle.profile.aboutFacts.some((f) => /current role/i.test(f.label)),
    false
  );
  assert.equal(
    idBundle.profile.aboutFacts.some((f) => /peran saat ini|current role/i.test(f.label)),
    false
  );

  for (const bundle of [enBundle, idBundle]) {
    const allCopy: string[] = [
      bundle.profile.fullName,
      bundle.profile.statusInstitution,
      bundle.profile.statusFaculty,
      bundle.profile.positioning,
      bundle.profile.scrollHint,
      ...bundle.profile.aboutProse,
      ...bundle.profile.aboutFacts.flatMap((fact) => [fact.label, fact.value]),
      ...bundle.projects.flatMap((project) => [
        project.title,
        project.recognition,
        project.role,
        project.overview,
        project.problem,
        project.contribution,
        ...project.technologies,
        ...(project.escrowStateMachine?.flatMap((s) => [
          s.stateName,
          s.actor,
          s.summary,
          s.guardCondition,
        ]) ?? []),
      ]),
      ...bundle.experienceLedger.flatMap((item) => [
        item.period,
        item.role,
        item.organization,
        ...item.highlights,
      ]),
      ...bundle.organisationalLedger.flatMap((item) => [
        item.period,
        item.role,
        item.organization,
        ...item.highlights,
      ]),
      ...bundle.educationLedger.flatMap((item) => [
        item.period,
        item.role,
        item.organization,
        ...item.highlights,
      ]),
      ...bundle.achievements.flatMap((item) => [
        item.title,
        item.issuer,
        item.year,
        item.summary,
      ]),
      ...bundle.capabilityGroups.flatMap((group) => [
        group.title,
        group.summary,
        ...group.items,
      ]),
    ];

    const violations = findEditorialViolations(allCopy);
    assert.deepEqual(violations, []);
  }

  // Ensure default EN exports stay in sync
  assert.equal(PROJECTS.length, enBundle.projects.length);
  assert.equal(ACHIEVEMENTS.length, enBundle.achievements.length);
  assert.equal(EXPERIENCE_LEDGER.length, enBundle.experienceLedger.length);
  assert.equal(ORGANISATIONAL_LEDGER.length, enBundle.organisationalLedger.length);
  assert.equal(EDUCATION_LEDGER.length, enBundle.educationLedger.length);
  assert.equal(CAPABILITY_GROUPS.length, enBundle.capabilityGroups.length);
});

test('all media assets declare consistent width, height, and aspectRatio values', () => {
  const allAssets = [
    ...Object.values(PORTFOLIO_MEDIA.profile),
    ...Object.values(PORTFOLIO_MEDIA.projects),
  ];

  for (const asset of allAssets) {
    const [w, h] = asset.aspectRatio.split('/').map(Number);
    const expectedRatio = w / h;
    const actualRatio = asset.width / asset.height;
    assert.ok(
      Math.abs(actualRatio - expectedRatio) < 0.001,
      `Asset ${asset.src} dimensions (${asset.width}x${asset.height}) must match aspectRatio ${asset.aspectRatio}`
    );
  }
});
