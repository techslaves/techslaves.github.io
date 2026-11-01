import React from 'react';
import Link from '@docusaurus/Link';

export default function CertificationsShowcase() {
  return (
    <section style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2.5rem' }}>
          <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            <span className="badge-pill badge-emerald">Verified Credentials</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, margin: '0 0 1rem', color: 'var(--text-main)' }}>
            Professional Certifications &amp; Accreditations
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Continuous commitment to technical mastery across container runtimes, cloud platforms, and cybersecurity governance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1050px', margin: '0 auto' }}>
          {/* DCA */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge-pill badge-cyan">Mirantis / Docker</span>
                <span className="badge-pill badge-emerald">Certified</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.5rem', color: 'var(--text-main)' }}>
                Docker Certified Associate (DCA)
              </h3>
              <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Demonstrated in-depth knowledge of container orchestration, Docker networking, image security, enterprise storage, and Docker EE clustering.
              </p>
            </div>
            <Link to="/docs/certification" className="btn-secondary-outline" style={{ justifyContent: 'center', fontSize: '0.82rem', padding: '0.5rem 1rem' }}>
              <span>Read Preparation Strategy</span>
              <span>➔</span>
            </Link>
          </div>

          {/* AWS & Cloud Architecture */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge-pill badge-amber">Amazon Web Services</span>
                <span className="badge-pill badge-purple">Cloud Architect</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.5rem', color: 'var(--text-main)' }}>
                AWS Solutions Architecture &amp; Security
              </h3>
              <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Extensive production expertise in AWS EKS, Security Hub, KMS, GuardDuty, Transit Gateways, FinOps, and GovCloud architectures.
              </p>
            </div>
            <div style={{ padding: '0.5rem 0.85rem', background: 'rgba(245, 158, 11, 0.08)', borderRadius: '0.5rem', border: '1px solid rgba(245, 158, 11, 0.2)', fontSize: '0.78rem', color: '#d97706', fontWeight: 600 }}>
              ✓ 14+ Years Enterprise Cloud Delivery
            </div>
          </div>

          {/* Compliance & Cybersecurity */}
          <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge-pill badge-emerald">Governance</span>
                <span className="badge-pill badge-danger">Cybersecurity</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.5rem', color: 'var(--text-main)' }}>
                Regulatory Compliance (FedRAMP / NIS 2)
              </h3>
              <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Specialized in NIST SP 800-53 controls, Belgian CCB CyFun® 2025 assessment scheme, automated compliance guardrails, and audit readiness.
              </p>
            </div>
            <Link to="/docs/about" className="btn-secondary-outline" style={{ justifyContent: 'center', fontSize: '0.82rem', padding: '0.5rem 1rem' }}>
              <span>View Compliance Background</span>
              <span>➔</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
