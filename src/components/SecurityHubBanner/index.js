import React from 'react';
import { personalInfo } from '@site/src/data/portfolioData';

export default function SecurityHubBanner() {
  return (
    <section style={{ padding: '3.5rem 0', background: 'rgba(2, 132, 199, 0.03)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(2, 132, 199, 0.3)',
            boxShadow: '0 12px 32px -4px rgba(2, 132, 199, 0.12)',
          }}
        >
          {/* Subtle Ambient Accent */}
          <div className="ambient-glow glow-cyan" style={{ top: '-30%', right: '-10%', width: '300px', height: '300px' }} />

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge-pill badge-danger">Cybersecurity Flagship Platform</span>
                <span className="badge-pill badge-cyan">OWASP Top 10 for LLMs (2025)</span>
                <span className="badge-pill badge-amber">EU NIS 2 &amp; CyFun®</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 800, margin: '0 0 0.75rem', color: 'var(--text-main)' }}>
                Security Hub: OWASP Top 10 LLM &amp; EU NIS 2 Platform
              </h2>

              <p style={{ fontSize: '0.96rem', lineHeight: '1.65', color: 'var(--text-muted)', margin: 0 }}>
                Explore my dedicated cybersecurity platform hosting independent modules for the <strong>OWASP Top 10 for Large Language Model Applications (2025 Edition)</strong> and the <strong>EU NIS 2 Directive with CCB CyberFundamentals (CyFun® 2025)</strong> self-assessment audit tool.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={personalInfo.securityHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow"
                style={{ padding: '0.85rem 1.85rem', fontSize: '1rem', whiteSpace: 'nowrap', justifyContent: 'center' }}
              >
                <span>Launch Security Hub</span>
                <span>↗</span>
              </a>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', fontFamily: 'var(--ifm-font-family-monospace)' }}>
                techslaves.github.io/security-hub/
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
