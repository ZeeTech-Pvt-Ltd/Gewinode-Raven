import Link from 'next/link';
import Icon from '@/components/Icon';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Reveal from '@/components/Reveal';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Thank You | Gewinode Raven Registration Received',
  description:
    'Your Gewinode Raven registration has been received. Our team will contact you shortly to complete your account setup.',
  path: '/thank-you',
  keywords: ['Gewinode Raven registration', 'Gewinode Raven account confirmation'],
});

export default function ThankYou() {
  return (
    <section className="section section--deep">
      <BreadcrumbSchema path="/thank-you" />
      <div className="container" style={{ maxWidth: 560, textAlign: 'center' }}>
        <Reveal>
          <div
            className="card__icon"
            style={{ margin: '0 auto 24px', width: 72, height: 72, borderRadius: 20 }}
          >
            <Icon name="check" size={34} />
          </div>
          <h1 className="section-title">Thank you - we have your details</h1>
          <p className="section-lead" style={{ margin: '16px auto 32px' }}>
            Our team will contact you shortly at the details you provided to complete your
            Gewinode Raven account. Please keep your phone nearby.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn--ember" href="/">
              Back to Home
            </Link>
            <Link className="btn btn--ghost" href="/faq">
              Read the FAQ
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
