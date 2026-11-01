import React from 'react';
import { expertiseAreas, keyAchievements, techStackCategories } from '@site/src/data/portfolioData';

export default function ExperienceSkills() {
  return (
    <section id="experience" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem' }}>
          <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            <span className="badge-pill badge-cyan">Technical Domains &amp; Background</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', color: 'var(--text-main)' }}>
            Core Expertise &amp; Technical Capabilities
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Proven leadership delivering resilient cloud infrastructure, continuous DevSecOps automation, and enterprise governance across 14+ years.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {expertiseAreas.map((area, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{area.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.75rem', color: 'var(--text-main)' }}>
                  {area.title}
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {area.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {area.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: 'rgba(2, 132, 199, 0.08)',
                      color: 'var(--ifm-color-primary)',
                      border: '1px solid rgba(2, 132, 199, 0.2)',
                      fontWeight: 600,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Career Achievements */}
        <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '1.75rem' }}>
            <span className="badge-pill badge-emerald">Track Record of Impact</span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: '0.5rem 0 0', color: 'var(--text-main)' }}>
              Key Career Achievements &amp; Production Deliveries
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {keyAchievements.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem',
                  borderRadius: '0.75rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: '#059669', fontWeight: 800 }}>✔</span>
                  <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {item.title}
                  </h4>
                </div>
                <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Categories */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.5rem', color: 'var(--text-main)' }}>
              Technologies, Tools &amp; Platforms
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Hands-on mastery across modern cloud, container, security, and enterprise engineering ecosystems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {techStackCategories.map((cat, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.25rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0284c7', margin: '0 0 0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {cat.name}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(148, 163, 184, 0.1)',
                        color: 'var(--text-main)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
