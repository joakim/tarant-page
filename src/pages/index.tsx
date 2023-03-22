import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageTryIt from '@site/src/components/HomepageTryIt';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link 
            className={`button button--secondary button--lg ${styles.heroButton}`}
            to="docs/quick-start">
            Get Started
          </Link>
          <Link 
            className={`button button--secondary button--outline button--lg ${styles.heroButton}`}
            to="https://app.gitter.im/#/room/#tarantx_general">
            Gitter
          </Link>
        </div>
        <HomepageTryIt />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="library for building software with the Actor Model">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
