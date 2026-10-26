import Link from 'next/link';
import Icon from '@/components/Icon';
import FaqList from '@/components/FaqList';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Reveal from '@/components/Reveal';
import { FAQS, SITE } from '@/data/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Gewinode Raven FAQ | Fees, Security & Withdrawals',
  description:
    'Answers to common questions about Gewinode Raven: legitimacy, minimum deposit, fund security, withdrawals, regulation and avoiding imitation sites.',
  path: '/faq',
  keywords: [
    'Gewinode Raven FAQ',
    'trading platform questions',
    'withdrawal time trading',
    'trading platform regulation',
  ],
});

export default function Faqs() {
  return (
    <>
      <BreadcrumbSchema path="/faq" />
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">Frequently asked questions about Gewinode Raven</h1>
          <p className="section-lead">
            Everything members ask us most about Gewinode Raven - answered plainly. Still unsure?
            Contact us any time.
          </p>
        </div>
      </div>

      <FaqSchema />
      <section className="section section--surface">
        <div className="container">
          <FaqList items={FAQS} />
          <Reveal style={{ textAlign: 'center', marginTop: 44 }}>
            <p className="form__note" style={{ marginBottom: 20 }}>
              Can't find your answer? Our team replies around the clock.
            </p>
            <Link className="btn btn--ember" href="/contact-us">
              Contact Us
              <Icon name="arrow-right" size={17} />
            </Link>
            <p className="form__note" style={{ marginTop: 16 }}>
              {SITE.email}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
