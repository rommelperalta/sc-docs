import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const documentations = [
    { name: 'Credentialing API', path: '/credentialing-api/intro' }
];

const apiEndpoints = [
  {
    name: 'Authentication',
    description: 'Secure API access with Bearer token authentication',
    path: '/credentialing-api/authentication/user-authentication'
  },
  {
    name: 'Check Matches',
    description: 'Create and upsert employee and entity records for credential verification',
    path: '/credentialing-api/check-matches/create-employees'
  },
  {
    name: 'Retrieve Matches',
    description: 'Get employee and entity data with credentials and exclusions',
    path: '/credentialing-api/retrieve-matches/retrieving-employees'
  },
  {
    name: 'Get Employee Lists',
    description: 'Retrieve employee lists and their metadata',
    path: '/credentialing-api/get-employee-lists'
  },
  {
    name: 'Resolve Matches',
    description: 'Resolve and manage credential verification matches',
    path: '/credentialing-api/resolve-matches/resolve-exclusions'
  }
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            {documentations.map((doc, idx) => (
                <Link key={idx} className="button button--secondary button--lg"
                    to={doc.path}>
                    {doc.name}
                </Link>
            ))}
        </div>
      </div>
    </header>
  );
}

function ApiEndpointsSection() {
  return (
    <section className="margin-top--lg margin-bottom--lg">
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">API Endpoints</Heading>
          <p className="hero__subtitle">
            Explore the comprehensive set of endpoints available in the Credentialing API
          </p>
        </div>
        <div className="row">
          {apiEndpoints.map((endpoint, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">
                    <Link to={endpoint.path} className="card__title--link">
                      {endpoint.name}
                    </Link>
                  </Heading>
                </div>
                <div className="card__body">
                  <p>{endpoint.description}</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to={endpoint.path}>
                    View Documentation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="StreamlineVerify Credentialing API - Real-time credential verification and exclusion screening for healthcare professionals">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ApiEndpointsSection />
      </main>
    </Layout>
  );
}
