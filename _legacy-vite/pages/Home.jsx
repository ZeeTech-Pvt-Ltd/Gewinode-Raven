import useMeta from '../hooks/useMeta.js';
import BelowTheFold from '../components/BelowTheFold.jsx';
import Hero from '../sections/Hero.jsx';
import LiveTicker from '../sections/LiveTicker.jsx';
import StatsBand from '../sections/StatsBand.jsx';
import Features from '../sections/Features.jsx';
import Guarantees from '../sections/Guarantees.jsx';
import Effortless from '../sections/Effortless.jsx';
import Differentiators from '../sections/Differentiators.jsx';
import Innovation from '../sections/Innovation.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Promo from '../sections/Promo.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import Capabilities from '../sections/Capabilities.jsx';
import FinalCta from '../sections/FinalCta.jsx';

export default function Home() {
  useMeta({
    title: 'Gewinode Raven: AI-Powered Trading Platform for Australia',
    description:
      "Gewinode Raven is Australia's AI-powered trading platform. Automated trading at 85% accuracy, 95% cold storage and 24/7 support.",
    path: '/',
    keywords: [
      'automated trading Australia',
      'AI trading Australia',
      'secure trading platform',
      'cold storage trading',
      'trading engine 85% accuracy',
    ],
  });

  return (
    <>
      <Hero />
      <LiveTicker />
      {/* Below the fold: batches mount on idle, staggered so no single long task */}
      <BelowTheFold>
        <StatsBand />
        <Features />
      </BelowTheFold>
      <BelowTheFold delay={120}>
        <Guarantees />
        <Effortless />
        <Differentiators />
      </BelowTheFold>
      <BelowTheFold delay={240}>
        <Innovation />
        <Testimonials />
        <Promo />
      </BelowTheFold>
      <BelowTheFold delay={360}>
        <FaqSection />
        <Capabilities />
        <FinalCta />
      </BelowTheFold>
    </>
  );
}
