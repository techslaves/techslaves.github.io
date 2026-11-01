import React, { useState } from 'react';
import { portfolioProjects } from '@site/src/data/portfolioData';
import Link from '@docusaurus/Link';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI Security & Compliance', 'DevSecOps', 'Kubernetes', 'Cloud Engineering'];

  const filtered = portfolioProjects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Kubernetes') return p.category.includes('Kubernetes');
    return p.category === activeCategory;
  });

  return (
    <section id="projects" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2.5rem' }}>
          <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            <span className="badge-pill badge-purple">Open Source &amp; Systems</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', color: 'var(--text-main)' }}>
            Featured Projects &amp; Repositories
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Open-source platforms, Model Context Protocol servers, reusable security pipelines, and Kubernetes architecture blueprints.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`badge-pill ${activeCategory === cat ? 'badge-cyan' : ''}`}
              style={{
                border: activeCategory === cat ? '1px solid #0284c7' : '1px solid var(--border-subtle)',
                background: activeCategory === cat ? 'rgba(2, 132, 199, 0.15)' : 'var(--bg-card)',
                color: activeCategory === cat ? '#0284c7' : 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.4rem 0.9rem',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: proj.highlight ? 'rgba(2, 132, 199, 0.45)' : 'var(--border-subtle)',
                background: proj.highlight ? 'rgba(2, 132, 199, 0.02)' : 'var(--bg-card)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className={`badge-pill ${proj.highlight ? 'badge-danger' : 'badge-purple'}`}>
                    {proj.tag}
                  </span>
                  <span className="badge-pill badge-cyan" style={{ fontSize: '0.72rem' }}>
                    {proj.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.65rem', color: 'var(--text-main)' }}>
                  {proj.title}
                </h3>

                <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {proj.desc}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(148, 163, 184, 0.1)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-outline"
                    style={{ flex: 1, padding: '0.5rem 0.75rem', fontSize: '0.82rem', justifyContent: 'center' }}
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>
                )}
                {proj.liveUrl && (
                  proj.liveUrl.startsWith('http') ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-glow"
                      style={{ flex: 1, padding: '0.5rem 0.75rem', fontSize: '0.82rem', justifyContent: 'center' }}
                    >
                      <span>Live Site</span>
                      <span>➔</span>
                    </a>
                  ) : (
                    <Link
                      to={proj.liveUrl}
                      className="btn-primary-glow"
                      style={{ flex: 1, padding: '0.5rem 0.75rem', fontSize: '0.82rem', justifyContent: 'center' }}
                    >
                      <span>Explore</span>
                      <span>➔</span>
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
