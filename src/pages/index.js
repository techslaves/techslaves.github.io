import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import PortfolioHero from '@site/src/components/PortfolioHero';
import SecurityHubBanner from '@site/src/components/SecurityHubBanner';
import ExperienceSkills from '@site/src/components/ExperienceSkills';
import ProjectsSection from '@site/src/components/ProjectsSection';
import YouTubeSection from '@site/src/components/YouTubeSection';
import CertificationsShowcase from '@site/src/components/CertificationsShowcase';
import BlogShowcase from '@site/src/components/BlogShowcase';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} | Cloud & AI Security Architect`}
      description="Personal portfolio of Utsav Garg: Lead Cloud & AI Security Architect, Staff DevSecOps Engineer with 14+ years experience in Kubernetes, Cloud Security, FedRAMP, NIS 2, and Enterprise Software."
    >
      <main>
        {/* Executive Portfolio Hero */}
        <PortfolioHero />

        {/* Security Hub Spotlight Banner */}
        <SecurityHubBanner />

        {/* 14+ Years Core Expertise, Achievements & Tech Stack */}
        <div id="experience" style={{ scrollMarginTop: '80px' }}>
          <ExperienceSkills />
        </div>

        {/* Featured Open-Source Projects */}
        <div id="projects" style={{ scrollMarginTop: '80px' }}>
          <ProjectsSection />
        </div>

        {/* YouTube Series & Tutorials (@TechHustlewithUG) */}
        <div id="youtube" style={{ scrollMarginTop: '80px' }}>
          <YouTubeSection />
        </div>

        {/* Professional Certifications & Roadmaps */}
        <CertificationsShowcase />

        {/* Technical Blog & Guides */}
        <BlogShowcase />
      </main>
    </Layout>
  );
}
