import React from 'react';
import { youtubePlaylists, personalInfo } from '@site/src/data/portfolioData';
import Link from '@docusaurus/Link';

export default function YouTubeSection() {
  return (
    <section id="youtube" style={{ padding: '4.5rem 0', background: 'rgba(239, 68, 68, 0.02)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Banner Card */}
        <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
          <div className="ambient-glow glow-amber" style={{ top: '-20%', right: '-10%', width: '350px', height: '350px', opacity: 0.3 }} />

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '750px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge-pill badge-danger">YouTube Channel • TechHustlewithUG</span>
                <span className="badge-pill badge-emerald">Free Technical Tutorials</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: '0 0 0.75rem', color: 'var(--text-main)' }}>
                Cloud, Kubernetes &amp; DevSecOps Masterclasses
              </h2>
              <p style={{ fontSize: '0.98rem', lineHeight: '1.65', color: 'var(--text-muted)', margin: 0 }}>
                On my YouTube channel <strong>@TechHustlewithUG</strong>, I produce structured, hands-on tutorials breaking down Helm charts, CI/CD pipeline security with GitHub Actions, and production Kubernetes engineering.
              </p>
            </div>

            <a
              href={personalInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                fontWeight: 700,
                padding: '0.85rem 1.75rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(220, 38, 38, 0.35)',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Subscribe on YouTube</span>
              <span>📺</span>
            </a>
          </div>

          {/* Series Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {youtubePlaylists.map((pl, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="badge-pill badge-danger">{pl.badge}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>TechHustlewithUG</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 0.5rem', color: 'var(--text-main)' }}>
                    {pl.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    {pl.description}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link
                    to={pl.link}
                    className="btn-secondary-outline"
                    style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.5rem 1rem' }}
                  >
                    <span>Episode Guide</span>
                    <span>➔</span>
                  </Link>
                  <a
                    href={pl.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-glow"
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.82rem', backgroundColor: '#dc2626' }}
                  >
                    <span>Watch</span>
                    <span>📺</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
