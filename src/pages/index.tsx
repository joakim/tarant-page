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
        <h1 className="hero__title"><img alt={siteConfig.title} src="/img/logo.svg" style={{ height: "1em" }}/><span style={{"textShadow": "2px 2px #000", "marginLeft": "0.2em"}}>{siteConfig.title}</span></h1>
        <p className="hero__subtitle" style={{"textShadow": "2px 2px #000"}}>{siteConfig.tagline}</p>
        <video controls src='video/intro.mp4' width="700" height="400" />
        <div className={`row ${styles.buttons}`}>
          <Link 
            className={`col button button--secondary button--lg ${styles.heroButton}`}
            to="/docs/category/quick-start">
            Get Started
          </Link>
          <Link 
            className={`col button button--secondary button--lg ${styles.heroButton}`}
            to="https://app.gitter.im/#/room/#tarantx_general">
            Join The Conversation
          </Link>
          <button 
            className={`col button button--secondary button--lg ${styles.heroButton}`}
            onClick={() => {
              console.log("hello",document.getElementById('formbutton-button'))
              document.getElementById('formbutton-button').click()
            }}>
            Join The Cloud Beta
          </button>

        </div>
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
        <HomepageTryIt />
      </main>
    </Layout>
  );
}
