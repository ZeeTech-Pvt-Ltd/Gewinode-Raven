import Hero from '@/sections/Hero';
import LiveTicker from '@/sections/LiveTicker';
import StatsBand from '@/sections/StatsBand';
import Features from '@/sections/Features';
import Guarantees from '@/sections/Guarantees';
import Effortless from '@/sections/Effortless';
import Differentiators from '@/sections/Differentiators';
import Innovation from '@/sections/Innovation';
import Testimonials from '@/sections/Testimonials';
import Promo from '@/sections/Promo';
import FaqSection from '@/sections/FaqSection';
import Capabilities from '@/sections/Capabilities';
import FinalCta from '@/sections/FinalCta';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
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

// Static sections render fully on the server (no client JS, no BelowTheFold
// mount trick needed - that was an SPA-only optimisation). Interactivity is
// limited to the form, ticker, FAQ accordion and scroll reveals.
export default function Home() {
  return (
    <>
      <Hero />
      <LiveTicker />
      <StatsBand />
      <Features />
      <Guarantees />
      <Effortless />
      <Differentiators />
      <Innovation />
      <Testimonials />
      <Promo />
      <FaqSection />
      <Capabilities />
      <FinalCta />
    </>
  );
}
