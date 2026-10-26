import Link from 'next/link';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { FEATURES, DIFFERENTIATORS, CAPABILITIES } from '@/data/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Gewinode Raven Features | AI Trading Platform Capabilities',
  description:
    'Explore the Gewinode Raven platform: an AI-powered trading engine with 85% accuracy, cold storage security, multi-device support and 24/7 assistance.',
  path: '/features',
  keywords: [
    'Gewinode Raven features',
    'AI trading features',
    'trading platform capabilities',
    'automated trading features',
  ],
});

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbSchema path="/features" />
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">{FEATURES.title}</h1>
          <p className="section-lead">{FEATURES.lead}</p>
        </div>
      </div>

      <section className="section section--deep features">
        <div className="container">
          <div className="grid grid--4">
            {FEATURES.items.map((f, i) => (
              <Reveal className="card" delay={i * 90} key={f.title}>
                <div className="card__icon">
                  <Icon name={f.icon} size={24} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="section-cta">
            <Link className="btn btn--ghost" href="/sign-up">
              Register Now
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHead title={DIFFERENTIATORS.title} lead={DIFFERENTIATORS.lead} />
          <div className="grid grid--3">
            {DIFFERENTIATORS.items.map((d, i) => (
              <Reveal className="card" delay={i * 90} key={d.title}>
                <div className="card__icon">
                  <Icon name={d.icon} size={24} />
                </div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title={CAPABILITIES.title} lead={CAPABILITIES.lead} />
          <div className="caps">
            {CAPABILITIES.items.map((c, i) => (
              <Reveal className="caps__cell" delay={(i % 4) * 70} key={c.title}>
                <Icon name={c.icon} size={24} />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 48 }}>
            <Link className="btn btn--ember" href="/sign-up">
              Register Now
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
