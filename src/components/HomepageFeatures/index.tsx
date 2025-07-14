import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { HiShieldCheck, HiMagnifyingGlassCircle, HiCog8Tooth } from 'react-icons/hi2';

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Real-time Credential Verification',
    Icon: HiShieldCheck,
    description: (
      <>
        The Credentialing API provides real-time verification of healthcare professional credentials, 
        licenses, and certifications across multiple registries. Instantly validate employee credentials 
        and maintain compliance with automated background checks.
      </>
    ),
  },
  {
    title: 'Comprehensive Exclusion Screening',
    Icon: HiMagnifyingGlassCircle,
    description: (
      <>
        Perform thorough exclusion screening against OIG, GSA, and other federal databases. 
        Our API ensures your organization maintains compliance by identifying excluded individuals 
        and entities before hiring or contracting.
      </>
    ),
  },
  {
    title: 'Streamlined Integration',
    Icon: HiCog8Tooth,
    description: (
      <>
        Easy-to-integrate REST API with comprehensive documentation, JSON schemas, and example requests. 
        Supports bulk operations, real-time queries, and flexible authentication methods to fit your workflow.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
