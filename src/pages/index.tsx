import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import IntegrationFirst from '@site/src/components/IntegrationFirst';
import { Integration } from "@site/src/components/integration"
import { Section } from "@site/src/components/Section"


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Raptor's Kubernetes controller and Python SDK transform a data scientist's Python code into operational data pipelines that power real-time model APIs.</p>
        <p></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guides/getting-started-with-labsdk">
            Quickstart Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <main>
        <IntegrationFirst />
      </main>
{/* 
      <Section fullWidth odd>
      <Integration />
    </Section> */}
    </Layout>
  );
}
