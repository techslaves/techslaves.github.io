import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'YouTube Channel',
    // Using a normal image instead of SVG component
    image: require('@site/static/img/youtube-logo.png').default, 
    description: (
      <>
        Check out <b>Tech Hustle with UG</b> for in-depth tutorials on DevOps, Cloud, and Kubernetes.
        <br/><br/>
        <Link className="button button--primary" to="https://www.youtube.com/@techhustlewithUG">
          Watch Now 📺
        </Link>
      </>
    ),
  },
  {
    title: 'About Me',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I am a DevOps Engineer passionate about Cloud Native technologies, Automation, and Security.
        <br/><br/>
        <Link className="button button--secondary" to="/docs/about">
          Read More 🚀
        </Link>
      </>
    ),
  },
  {
    title: 'Connect with Me',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Let's connect! I share daily updates and insights on LinkedIn.
        <br/><br/>
        <Link className="button button--info" to="https://linkedin.com/in/utsavgarg">
          Connect on LinkedIn 🤝
        </Link>
      </>
    ),
  },
];

function Feature({Svg, image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Render Svg if available, otherwise render Image */}
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={image} className={styles.featureSvg} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
