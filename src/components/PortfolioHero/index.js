import React from 'react';
import { personalInfo, stats } from '@site/src/data/portfolioData';

export default function PortfolioHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '4rem', paddingBottom: '4.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
      {/* Ambient background glows */}
      <div className="ambient-glow glow-cyan" style={{ top: '-10%', left: '15%', width: '450px', height: '450px' }} />
      <div className="ambient-glow glow-blue" style={{ top: '20%', right: '10%', width: '400px', height: '400px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Pulsing Pill Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.1rem', borderRadius: '9999px', background: 'rgba(2, 132, 199, 0.1)', border: '1px solid rgba(2, 132, 199, 0.25)', marginBottom: '1.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0284c7', display: 'inline-block', boxShadow: '0 0 10px #0284c7' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.02em', color: 'var(--ifm-color-primary)' }}>
            14+ Years Enterprise Engineering • Cloud Security &amp; DevSecOps Architect
          </span>
        </div>

        {/* Hero Title */}
        <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.03em', maxWidth: '950px', margin: '0 auto 1.25rem', color: 'var(--text-main)' }}>
          {personalInfo.name}
        </h1>

        <p style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', fontWeight: 700, color: 'var(--ifm-color-primary)', maxWidth: '850px', margin: '0 auto 1.5rem' }}>
          {personalInfo.title}
        </p>

        {/* Bio */}
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.12rem)', lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: '820px', margin: '0 auto 2.25rem', fontWeight: 400 }}>
          {personalInfo.bio}
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          <a
            href={personalInfo.securityHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow"
          >
            <span>Visit Security Hub</span>
            <span>🛡️</span>
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-outline"
            style={{ borderColor: 'rgba(2, 132, 199, 0.4)' }}
          >
            <span>🤝</span>
            <span>LinkedIn Profile</span>
          </a>
          <a
            href={personalInfo.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-outline"
          >
            <span>📺</span>
            <span>TechHustlewithUG</span>
          </a>
          <a href="#projects" className="btn-secondary-outline">
            <span>💻</span>
            <span>View Projects</span>
          </a>
        </div>

        {/* Metric Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', maxWidth: '1050px', margin: '0 auto' }}>
          {stats.map((st, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '1.5rem 1rem' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0284c7', fontFamily: 'var(--ifm-font-family-monospace)', lineHeight: 1 }}>
                {st.value}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-main)', marginTop: '0.5rem', letterSpacing: '0.04em' }}>
                {st.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                {st.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
