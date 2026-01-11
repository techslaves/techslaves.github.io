import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const RecentContent = [
  {
    type: 'YouTube Series',
    title: 'Helm Series',
    date: '2025-10-01', // Approximate date, update if needed
    description: 'Master Helm charts with this comprehensive video series.',
    link: '/docs/youtube/helm-series',
  },
  {
    type: 'YouTube Series',
    title: 'GitHub Actions Security',
    date: '2026-01-10', // Approximate date, update if needed
    description: 'Learn how to secure your CI/CD pipelines with GitHub Actions.',
    link: '/docs/youtube/github-actions-security',
  },
];

export default function LatestPost() {
  return (
    <section className={styles.latestPost}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Latest Updates 🚀
        </Heading>
        <div className={styles.scrollingWrapper}>
          {RecentContent.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={`badge ${item.type === 'YouTube Series' ? 'badge--danger' : 'badge--primary'}`}>
                  {item.type}
                </span>
              </div>
              <Heading as="h3" className={styles.title}>
                <Link to={item.link}>{item.title}</Link>
              </Heading>
              <p className="text--secondary margin-bottom--sm">
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className={styles.description}>{item.description}</p>
              <Link
                className={`button ${item.type === 'YouTube Series' ? 'button--danger' : 'button--primary'}`}
                to={item.link}>
                {item.type === 'YouTube Series' ? 'Watch Series 📺' : 'Read Article 📖'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
