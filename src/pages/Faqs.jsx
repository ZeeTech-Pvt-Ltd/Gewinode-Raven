import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import FaqList from '../components/FaqList.jsx';
import FaqSchema from '../components/FaqSchema.jsx';
import Reveal from '../components/Reveal.jsx';
import useMeta from '../hooks/useMeta.js';
import { FAQS, SITE } from '../data/content.js';

export default function Faqs() {
  useMeta({
    title: 'Gewinode Raven FAQ | Fees, Security & Withdrawals',
    description:
      'Answers to common questions about Gewinode Raven: legitimacy, minimum deposit, fund security, withdrawals, regulation and avoiding imitation sites.',
    path: '/faq',
  });

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">Frequently asked questions about Gewinode Raven</h1>
          <p className="section-lead">
            Everything members ask us most about Gewinode Raven — answered plainly. Still unsure?
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
            <Link className="btn btn--ember" to="/contact-us">
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
