import React, { useState, useEffect } from 'react';
import './App.css';

/* ═══════════════════════════════════════════════════════════════
   ██  CONFIG — update all personal info here, nowhere else  ██
   ═══════════════════════════════════════════════════════════════ */
const CONFIG = {
  // ── Name ──────────────────────────────────────────────
  firstName:     'Joehan',
  lastName:      'Misquitta',
  initials:      'J.',

  // ── Role & tagline ───────────────────────────────────────
  title:         'Security Engineer',
  tagline:       'VAPT & Cloud Security',
  availability:  'Open to Opportunities',

  // ── Location ────────────────────────────────────────────
  location:      'Mumbai, India',
  education:     'MSc IT',

  // ── HUD card (hero right panel) ────────────────────────
  hudRows: [
    ['Role',        'Security Engineer · VAPT'],
    ['Specialises', 'Vuln Mgmt · App Sec'],
    ['Cloud',       'AWS · Azure'],
    ['Framework',   'MITRE ATT&CK · OWASP'],
    ['Location',    'Mumbai, IN'],
    ['Status',      'Available'],
  ],
  hudChips: ['Qualys VMDR', 'GuardDuty', 'CloudTrail', 'Black Duck', 'Acunetix'],

  // ── Copy strings ───────────────────────────────────────
  scrollHint:    'scroll to explore',
  projectsIntro: 'Hands-on detection labs and CTI tooling built around my AWS Cloud Practitioner pathway — demonstrating practical security engineering capability.',
  contactIntro:  "Open to security engineering, VAPT, and cloud security roles. Let's connect.",

  // ── Contact ────────────────────────────────────────────
  email:         'joehanm10@gmail.com',
  phone:         '',
  emailSubject:  '',

  // ── Links ─────────────────────────────────────────────
  website:       'https://itsjoehan.com',
  websiteLabel:  'itsjoehan.com',
  linkedin:      'https://www.linkedin.com/in/joehan-misquitta/',
  github:        'https://github.com/joehanmisquitta',
  twitter:       'https://twitter.com/MisquittaJoehan',

  // ── Footer ────────────────────────────────────────────
  copyrightYear: '2026',
}

/* ═══════════════════════════════════════════════════════════════
   ██  DATA — edit your stats, skills, projects, certs here  ██
   ═══════════════════════════════════════════════════════════════ */
const STATS = [
  { value: '6mo', label: 'VAPT Internship' },
  { value: '3',   label: 'Certifications'  },
  { value: '6+',  label: 'Security Tools'  },
  { value: '2',   label: 'Active Projects' },
];

const SKILLS = [
  {
    category: 'Security Engineering',
    items: ['Qualys VMDR', 'Acunetix', 'Black Duck (SCA)', 'SAST / DAST', 'MITRE ATT&CK', 'OWASP Top 10'],
  },
  {
    category: 'Cloud Security',
    items: ['AWS CloudTrail', 'AWS GuardDuty', 'CloudWatch', 'Azure Security', 'IAM Controls', 'Threat Detection'],
  },
  {
    category: 'Methods & Practice',
    items: ['Vuln Management', 'Penetration Testing', 'App Security Review', 'Risk Assessment', 'Threat Intelligence', 'Security Auditing'],
  },
];

const EXPERIENCE = [
  {
    role:   'Cybersecurity (VAPT) Intern',
    org:    'Mahindra Group',
    dept:   'GTO Cyber Security',
    period: '6 months',
    bullets: [
      'Conducted enterprise vulnerability assessments using Qualys VMDR, managing the full lifecycle from scan configuration and asset scoping to remediation tracking.',
      'Coordinated application security reviews using Acunetix for DAST; supported SAST tooling deployment and managed external vendor engagements for manual penetration testing.',
      'Performed software composition analysis (SCA) via Black Duck, surfacing OSS license risks and vulnerable third-party dependencies across production codebases.',
      'Produced stakeholder-facing remediation reports and contributed to risk documentation across the GTO cyber function.',
    ],
  },
  // ── Add more roles below as you gain experience ──────────────
  // {
  //   role: 'Your Next Role',
  //   org: 'Company Name',
  //   dept: 'Team / Department',
  //   period: 'Duration',
  //   bullets: ['Bullet one', 'Bullet two'],
  // },
];

const PROJECTS = [
  {
    name:   'Cloud Threat Detection Lab',
    desc:   'AWS-native detection environment using CloudTrail for API activity logging, GuardDuty for ML-based anomaly detection, and CloudWatch for alerting and dashboards. Attack scenarios simulated and mapped to MITRE ATT&CK.',
    tags:   ['AWS CloudTrail', 'GuardDuty', 'CloudWatch', 'MITRE ATT&CK'],
    status: 'In Progress',
    github: 'https://github.com/joehanmisquitta', // replace with direct repo link
    live:   null,                                  // set to URL string if you have a live demo
  },
  {
    name:   'IOC Threat Intelligence Tracker',
    desc:   'Python tool ingesting open-source CTI feeds, extracting Indicators of Compromise (IPs, domains, hashes), enriching via public APIs, and mapping TTPs to MITRE ATT&CK for security triage and threat hunting support.',
    tags:   ['Python', 'MITRE ATT&CK', 'CTI', 'IOC Analysis', 'OSINT'],
    status: 'In Progress',
    github: 'https://github.com/joehanmisquitta',
    live:   null,
  },
  // ── Add more projects below ───────────────────────────────────
];

const CERTIFICATIONS = [
  {
    name:      'AWS Cloud Practitioner',
    code:      'CLF-C02',
    issuer:    'Amazon Web Services',
    credlyUrl: null, // paste your Credly badge URL here if you have one
  },
  {
    name:      'Azure Fundamentals',
    code:      'AZ-900',
    issuer:    'Microsoft',
    credlyUrl: null,
  },
  {
    name:      'Security, Compliance & Identity',
    code:      'SC-900',
    issuer:    'Microsoft',
    credlyUrl: null,
  },
  // ── Add more certs below ──────────────────────────────────────
];

const EDUCATION = [
  {
    degree:      'Master of Science',
    field:       'Information Technology',
    institution: 'Wilson College (Autonomous), University of Mumbai',
    badge:       'Postgraduate',
  },
  {
    degree:      'Bachelor of Science',
    field:       'Information Technology',
    institution: 'R.D. National College, University of Mumbai',
    badge:       'Undergraduate',
  },
  // ── Add more degrees below ────────────────────────────────────
];


/* ═══════════════════════════════════════════════════════════════
   ██  ICONS — inline SVG, no extra npm packages needed       ██
   ═══════════════════════════════════════════════════════════════ */
const Ico = {
  ChevronRight: ({ size = 14, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  Mail: ({ size = 15, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  ),
  Phone: ({ size = 15, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.83 19.79 19.79 0 01.14 4.22 2 2 0 012.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  Linkedin: ({ size = 15, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Github: ({ size = 15, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  ),
  Twitter: ({ size = 15, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  ),
  ExternalLink: ({ size = 13, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  Globe: ({ size = 15, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  Menu: ({ size = 22, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  Close: ({ size = 22, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  ),
  Shield: ({ size = 15, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Cloud: ({ size = 15, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
  Terminal: ({ size = 15, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  Award: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  Database: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5"  rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

const SKILL_ICONS = [
  <Ico.Shield   size={15} color="var(--accent)" />,
  <Ico.Cloud    size={15} color="var(--accent)" />,
  <Ico.Terminal size={15} color="var(--accent)" />,
];

/* ═══════════════════════════════════════════════════════════════
   ██  APP COMPONENT                                           ██
   ═══════════════════════════════════════════════════════════════ */
export default function App() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  // ── Sticky nav ──────────────────────────────────────────────
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // ── Scroll-reveal ────────────────────────────────────────────
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!window.IntersectionObserver) {
      elements.forEach(el => el.classList.add('iv'));
      return;
    }
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('iv'); }),
      { threshold: 0.08 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── Helpers ──────────────────────────────────────────────────
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const mailHref = `mailto:${CONFIG.email}?subject=${encodeURIComponent(CONFIG.emailSubject)}`;
  const telHref  = CONFIG.phone
    ? `tel:${CONFIG.phone.replace(/\s/g, '')}`
    : null;

  /* ── NAV items ── */
  const NAV_LINKS = [
    { label: 'Skills',         id: 'skills'         },
    { label: 'Experience',     id: 'experience'     },
    { label: 'Projects',       id: 'projects'       },
    { label: 'Certifications', id: 'certifications' },
  ];

  /* ── Contact link list (conditionally includes phone) ── */
  const CONTACT_LINKS = [
    { label: 'LinkedIn',            icon: <Ico.Linkedin />,     href: CONFIG.linkedin,                  external: true  },
    { label: 'GitHub',              icon: <Ico.Github />,       href: CONFIG.github,                    external: true  },
    { label: 'Email',               icon: <Ico.Mail />,         href: mailHref,                         external: false },
    ...(CONFIG.phone ? [
      { label: CONFIG.phone,        icon: <Ico.Phone />,        href: telHref,                          external: false },
    ] : []),
    { label: CONFIG.websiteLabel,   icon: <Ico.Globe />,        href: CONFIG.website,                   external: true  },
    ...(CONFIG.twitter ? [
      { label: 'Twitter / X',       icon: <Ico.Twitter />,      href: CONFIG.twitter,                   external: true  },
    ] : []),
  ];

  /* ══════════════════════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════════════════════ */
  return (
    <div className="pf">

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav className={`pf-nav${scrolled ? ' stuck' : ''}`} role="navigation" aria-label="Main navigation">
        <button className="pf-logo" onClick={() => scrollToSection('hero')} aria-label="Back to top">
          <span className="pf-logo-accent">{CONFIG.initials}</span>{CONFIG.lastName}
        </button>

        {/* Desktop links */}
        <div className="pf-nav-links" role="list">
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} className="pf-nav-link" onClick={() => scrollToSection(id)} role="listitem">
              {label}
            </button>
          ))}
          <button className="pf-nav-cta" onClick={() => scrollToSection('contact')}>
            Hire Me
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="pf-burger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <Ico.Close size={22} color="var(--text)" /> : <Ico.Menu size={22} color="var(--muted)" />}
        </button>
      </nav>

      {/* ── MOBILE MENU ──────────────────────────────────── */}
      {menuOpen && (
        <div className="pf-mobile-nav" role="navigation" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} className="pf-mobile-link" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
          <button className="pf-mobile-link" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </div>
      )}

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="hero" className="pf-hero" aria-label="Introduction">
        <div className="pf-hero-inner">

          {/* Left column */}
          <div className="pf-hero-left">
            <div className="pf-badge" aria-label="Availability status">
              <span className="pf-sdot" aria-hidden="true" />
              <span className="pf-badge-green">{CONFIG.availability}</span>
              <span className="pf-badge-dim">· {CONFIG.title}</span>
            </div>

            <h1 className="pf-hero-name">
              {CONFIG.firstName}<br />
              <span className="pf-hero-name-accent">{CONFIG.lastName}</span>
            </h1>

            <p className="pf-hero-role">
              {CONFIG.title} · {CONFIG.tagline}
            </p>
            <p className="pf-hero-sub">
              {CONFIG.education} &nbsp;·&nbsp; {CONFIG.location}
            </p>

            {/* Stats */}
            <div className="pf-stats" role="list" aria-label="Key stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="pf-stat" role="listitem">
                  <span className="pf-stat-n">{value}</span>
                  <span className="pf-stat-l">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pf-cta-row">
              <button className="pf-cta-primary" onClick={() => scrollToSection('projects')}>
                View Projects <Ico.ChevronRight size={14} color="var(--bg)" />
              </button>
              <button className="pf-cta-secondary" onClick={() => scrollToSection('contact')}>
                <Ico.Mail size={14} color="var(--accent)" /> Get In Touch
              </button>
            </div>

            <div className="pf-scroll-hint" aria-hidden="true">
              <span className="pf-scroll-line" />
              {CONFIG.scrollHint}
            </div>
          </div>

          {/* Right column — HUD card */}
          <div className="pf-hero-right" aria-hidden="true">
            <div className="pf-hud">
              <div className="pf-hud-top">
                <div className="pf-hud-dots">
                  <span className="pf-hud-dot" style={{ background: '#EF4444' }} />
                  <span className="pf-hud-dot" style={{ background: '#F59E0B' }} />
                  <span className="pf-hud-dot" style={{ background: '#10B981' }} />
                </div>
                <span className="pf-hud-title">security.profile</span>
              </div>

              {CONFIG.hudRows.map(([key, val], i) => (
                <div key={i} className="pf-hud-row">
                  <span className="pf-hk">{key}</span>
                  <span className="pf-hv">
                    {key === 'Status'
                      ? <><span className="pf-sdot pf-sdot-inline" /><span className="pf-hg">{val}</span></>
                      : key === 'Role'
                        ? <><span className="pf-ha">{val.split(' · ')[0]}</span>{' · '}{val.split(' · ').slice(1).join(' · ')}</>
                        : val
                    }
                  </span>
                </div>
              ))}

              <div className="pf-hud-chips">
                {CONFIG.hudChips.map(chip => (
                  <span key={chip} className="pf-hud-chip">{chip}</span>
                ))}
              </div>

              <div className="pf-hud-cursor">
                <span>$ _</span>
                <span className="pf-blink">▌</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────── */}
      <section id="skills" className="pf-section" aria-labelledby="skills-heading">
        <div className="pf-section-inner">
          <span className="pf-eyebrow reveal">{'// 01 — Capabilities'}</span>
          <h2 id="skills-heading" className="pf-section-heading reveal">Technical Stack</h2>
          <div className="pf-skills-grid">
            {SKILLS.map(({ category, items }, i) => (
              <div key={category} className={`pf-skill-card reveal d${i + 1}`}>
                <div className="pf-skill-card-head">
                  {SKILL_ICONS[i]}
                  <span className="pf-skill-card-title">{category}</span>
                </div>
                <div className="pf-badges">
                  {items.map(item => (
                    <span key={item} className="pf-badge-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────── */}
      <section id="experience" className="pf-section" aria-labelledby="exp-heading">
        <div className="pf-section-inner">
          <span className="pf-eyebrow reveal">{'// 02 — Background'}</span>
          <h2 id="exp-heading" className="pf-section-heading reveal">Experience</h2>

          <div className="pf-timeline">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="pf-timeline-item reveal">
                <div className="pf-timeline-line">
                  <span className="pf-timeline-dot" />
                  <span className="pf-timeline-tail" />
                </div>
                <div className="pf-exp-card">
                  <div className="pf-exp-header">
                    <div>
                      <div className="pf-exp-role">{job.role}</div>
                      <div className="pf-exp-org">
                        {job.org}{' '}
                        <span className="pf-exp-dept">— {job.dept}</span>
                      </div>
                    </div>
                    <span className="pf-exp-period">{job.period}</span>
                  </div>
                  <ul className="pf-exp-bullets">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="pf-exp-bullet">
                        <Ico.ChevronRight size={13} color="var(--accent)" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────── */}
      <section id="projects" className="pf-section" aria-labelledby="proj-heading">
        <div className="pf-section-inner">
          <span className="pf-eyebrow reveal">{'// 03 — Portfolio'}</span>
          <h2 id="proj-heading" className="pf-section-heading reveal">Security Projects</h2>
          <p className="pf-section-sub reveal">
            {CONFIG.projectsIntro}
          </p>
          <div className="pf-projects-grid">
            {PROJECTS.map((proj, i) => (
              <div key={i} className={`pf-project-card reveal d${i + 1}`}>
                <div className="pf-project-top">
                  <span className="pf-project-name">{proj.name}</span>
                  <span className="pf-project-status">{proj.status}</span>
                </div>
                <p className="pf-project-desc">{proj.desc}</p>
                <div className="pf-project-tags">
                  {proj.tags.map(tag => (
                    <span key={tag} className="pf-project-tag">{tag}</span>
                  ))}
                </div>
                <div className="pf-project-links">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-project-link"
                      aria-label={`View ${proj.name} on GitHub`}
                    >
                      <Ico.Github size={12} />
                      GitHub
                      <Ico.ExternalLink size={10} />
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-project-link"
                      aria-label={`View live demo of ${proj.name}`}
                    >
                      <Ico.Globe size={12} />
                      Live Demo
                      <Ico.ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────── */}
      <section id="certifications" className="pf-section" aria-labelledby="certs-heading">
        <div className="pf-section-inner">
          <span className="pf-eyebrow reveal">{'// 04 — Credentials'}</span>
          <h2 id="certs-heading" className="pf-section-heading reveal">Certifications &amp; Education</h2>
          <div className="pf-cert-grid">
            {CERTIFICATIONS.map((cert, i) => {
              const cls = `pf-cert-card reveal d${i + 1}`;
              const iconColor = cert.issuer === 'Amazon Web Services' ? '#FF9900' : '#0078D4';
              const inner = (
                <>
                  <div className="pf-cert-top">
                    <div className="pf-cert-icon">
                      <Ico.Award size={18} color={iconColor} />
                    </div>
                    <span className="pf-cert-code">{cert.code}</span>
                  </div>
                  <div className="pf-cert-name">{cert.name}</div>
                  <div className="pf-cert-issuer">{cert.issuer}</div>
                </>
              );
              return cert.credlyUrl ? (
                <a key={i} href={cert.credlyUrl} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={i} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Education */}
          <div className="pf-edu-stack">
            {EDUCATION.map((edu, i) => (
              <div key={i} className={`pf-edu-card reveal d${i + 1}`}>
                <div className="pf-edu-left">
                  <div className="pf-edu-icon">
                    <Ico.Database size={20} color="var(--accent)" />
                  </div>
                  <div>
                    <div className="pf-edu-title">{edu.degree}</div>
                    {edu.field && (
                      <div className="pf-edu-field">{edu.field}</div>
                    )}
                    <div className="pf-edu-sub">{edu.institution}</div>
                  </div>
                </div>
                <span className="pf-edu-badge">{edu.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="pf-section" aria-labelledby="contact-heading">
        <div className="pf-section-inner">
          <span className="pf-eyebrow reveal">{'// 05 — Connect'}</span>
          <h2 id="contact-heading" className="pf-section-heading reveal">Get In Touch</h2>
          <p className="pf-section-sub reveal">
            {CONFIG.contactIntro}
          </p>
          <div className="pf-contact-links reveal">
            {CONTACT_LINKS.map(({ label, icon, href, external }) => (
              <a
                key={label}
                href={href}
                className="pf-contact-link"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="pf-footer" role="contentinfo">
        <span className="pf-footer-text">
          © {CONFIG.copyrightYear} {CONFIG.firstName} {CONFIG.lastName}
        </span>
        <span className="pf-footer-text">
          {CONFIG.websiteLabel}
        </span>
      </footer>

    </div>
  );
}