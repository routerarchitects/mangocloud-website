import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const projectHighlights = [
  {
    title: 'Open-source & community driven',
    description:
      'Transparent roadmap, public issue tracker, and contribution model backed by Router Architects.',
  },
  {
    title: 'Built for production',
    description:
      'Multi-tenant clustering, automated upgrades, and guardrails for ISPs running national networks.',
  },
  {
    title: 'OpenWiFi native',
    description:
      'First-class support for Access Points, Switches, and OpenLAN Gateways with OpenWiFi firmware.',
  },
];

const keyFeatures = [
  'Cloud-native controller architecture',
  'Device onboarding',
  'Centralized configuration',
  'Telemetry pipeline',
  'Multi-tenant support',
  'API-first design',
];

export default function Home() {
  return (
    <Layout
      title="MangoCloud"
      description="Open-source, scalable, production-ready cloud controller for OpenWiFi devices.">
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            MangoCloud
          </Heading>
          <p className="hero__subtitle">
            Open-source, scalable and production-ready cloud controller for OpenWiFi Access Points,
            Switches and OpenLAN Gateways.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro/overview">
              Get Started
            </Link>
            <Link
              className="button button--outline button--lg margin-left--md"
              to="https://github.com/RouterArchitects">
              View on GitHub
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="margin-vert--xl">
          <div className="container">
            <div className="row">
              {projectHighlights.map(card => (
                <div className="col col--4" key={card.title}>
                  <div className="card shadow--md">
                    <div className="card__body">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="margin-vert--xl">
          <div className="container">
            <Heading as="h2">Supported Devices</Heading>
            <p className="margin-bottom--lg">
              MangoCloud manages the full OpenWiFi device portfolio with consistent policy controls.
            </p>
            <ul>
              <li>Access Points (APs)</li>
              <li>Switches</li>
              <li>OpenLAN Gateways (OLGs)</li>
            </ul>
            <Link to="/docs/hardware/supported-devices" className="button button--link">
              View full compatibility list →
            </Link>
          </div>
        </section>

        <section className="margin-vert--xl">
          <div className="container">
            <Heading as="h2">Key Features</Heading>
            <div className="row">
              {keyFeatures.map(feature => (
                <div className="col col--4 margin-bottom--md" key={feature}>
                  <div className="card">
                    <div className="card__body">
                      <p className="text--bold">{feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="margin-vert--xl hero hero--secondary">
          <div className="container">
            <Heading as="h2">Roadmap Snapshot</Heading>
            <div className="row">
              <div className="col col--4">
                <h3>v0.x</h3>
                <p>Core services, controller scaffolding, and OpenWiFi baseline features.</p>
              </div>
              <div className="col col--4">
                <h3>v1.0</h3>
                <p>Production hardening, HA clusters, SOC 2 aligned operational tooling.</p>
              </div>
              <div className="col col--4">
                <h3>Beyond</h3>
                <p>Advanced analytics, automation pipelines, and ecosystem integrations.</p>
              </div>
            </div>
            <Link className="button button--primary margin-top--md" to="/roadmap">
              Read full roadmap
            </Link>
          </div>
        </section>

        <section className="margin-vert--xl">
          <div className="container">
            <Heading as="h2">Architecture</Heading>
            <p>
              Multi-region clusters, stateless control planes, and dedicated data pipelines power the
              MangoCloud platform. Review the high-level diagram and component responsibilities for
              planning deployments.
            </p>
            <Link className="button button--primary" to="/architecture">
              Explore the architecture
            </Link>
          </div>
        </section>

        <section className="margin-vert--xl hero hero--primary">
          <div className="container">
            <Heading as="h2" className="text--white">
              Join the Community
            </Heading>
            <p className="text--white">
              Participate in discussions, propose features, and help maintain MangoCloud for the
              OpenWiFi ecosystem.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/RouterArchitects/mangocloud-community/discussions">
                Join GitHub Discussions
              </Link>
              <Link
                className="button button--outline button--lg margin-left--md"
                to="/community">
                Contribution Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
