import Hero from '@/sections/Hero';
import LiveTicker from '@/sections/LiveTicker';
import Highlights from '@/sections/Highlights';
import Problem from '@/sections/Problem';
import Platform from '@/sections/Platform';
import GetStarted from '@/sections/GetStarted';
import Markets from '@/sections/Markets';
import Features from '@/sections/Features';
import Audiences from '@/sections/Audiences';
import Trust from '@/sections/Trust';
import Testimonials from '@/sections/Testimonials';
import FaqSection from '@/sections/FaqSection';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Gewinode Raven | AI Market Insights & Smarter Trading',
  description:
    'Gewinode Raven is an AI trading platform for crypto, forex, stocks and commodities. Get clear, actionable insights - you stay in charge of every trade.',
  path: '/',
  keywords: [
    'AI market insights',
    'market analysis platform',
    'crypto forex stocks insights',
    'trading signals Australia',
  ],
});

// Static sections render fully on the server (no client JS). Interactivity is
// limited to the form, ticker, FAQ accordion and scroll reveals.
export default function Home() {
  return (
    <>
      <Hero />
      <LiveTicker />
      <Highlights />
      <Problem />
      <Platform />
      <GetStarted />
      <Markets />
      <Features />
      <Audiences />
      <Trust />
      <Testimonials />
      <FaqSection />
    </>
  );
}
