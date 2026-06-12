import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// ── Page title ──────────────────────────────────────────────────
document.title = 'Joehan Misquitta — Security Engineer';
 
// ── Meta: description (shown in Google search snippets) ─────────
const metaDesc = document.createElement('meta');
metaDesc.name    = 'description';
metaDesc.content = 'Security Engineer specialising in VAPT and cloud security. MSc IT (Cybersecurity), Mumbai. AWS & Azure certified.';
document.head.appendChild(metaDesc);
 
// ── Meta: Open Graph (WhatsApp / LinkedIn / Twitter previews) ───
const ogTags = [
  { property: 'og:title',       content: 'Joehan Misquitta — Security Engineer' },
  { property: 'og:description', content: 'VAPT & Cloud Security · MSc IT (Cybersecurity) · Mumbai' },
  { property: 'og:type',        content: 'website' },
  { property: 'og:url',         content: 'https://itsjoehan.com' },
];
ogTags.forEach(({ property, content }) => {
  const tag = document.createElement('meta');
  tag.setAttribute('property', property);
  tag.setAttribute('content', content);
  document.head.appendChild(tag);
});
 
// ── Google Fonts: preconnect (speeds up font load) ───────────────
[
  { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: false },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com',   crossOrigin: true  },
].forEach(({ rel, href, crossOrigin }) => {
  const link = document.createElement('link');
  link.rel  = rel;
  link.href = href;
  if (crossOrigin) link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
});
 
// ── Google Fonts: stylesheet ─────────────────────────────────────
const fontLink = document.createElement('link');
fontLink.rel  = 'stylesheet';
fontLink.href =
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700' +
  '&family=Inter:wght@400;500' +
  '&family=JetBrains+Mono:wght@400;500' +
  '&display=swap';
document.head.appendChild(fontLink);
 
 
/* ═══════════════════════════════════════════════════════════════
   REACT MOUNT
   ═══════════════════════════════════════════════════════════════ */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);