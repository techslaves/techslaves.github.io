import React from 'react';
import { blogPosts } from '@site/src/data/portfolioData';
import Link from '@docusaurus/Link';

export default function BlogShowcase() {
  return (
    <section id="blog-showcase" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2.5rem' }}>
          <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            <span className="badge-pill badge-cyan">Engineering Articles &amp; Walkthroughs</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', color: 'var(--text-main)' }}>
            Technical Blog &amp; Case Studies
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            In-depth guides on Kubernetes storage, high-availability data infrastructure, and container image optimization.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {blogPosts.map((post, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--ifm-font-family-monospace)' }}>
                  📅 {post.date}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.5rem', color: 'var(--text-main)' }}>
                  <Link to={post.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h3>
                <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {post.description}
                </p>
              </div>

              <Link
                to={post.link}
                className="btn-secondary-outline"
                style={{ justifyContent: 'center', fontSize: '0.82rem', padding: '0.5rem 1rem' }}
              >
                <span>Read Full Article</span>
                <span>➔</span>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Blog Posts */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/blog" className="btn-secondary-outline" style={{ display: 'inline-flex', padding: '0.65rem 1.75rem' }}>
            <span>Explore All Blog Posts</span>
            <span>📚</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
