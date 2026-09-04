import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import useMeta from '../hooks/useMeta.js';

export default function ThankYou() {
  useMeta({
    title: 'Thank You | Gewinode Raven Registration Received',
    description:
      'Your Gewinode Raven registration has been received. Our team will contact you shortly to complete your account setup.',
    path: '/thank-you',
  });

  return (
    <section className="section section--deep">
      <div className="container" style={{ maxWidth: 560, textAlign: 'center' }}>
        <Reveal>
          <div
            className="card__icon"
            style={{ margin: '0 auto 24px', width: 72, height: 72, borderRadius: 20 }}
          >
            <Icon name="check" size={34} />
          </div>
          <h1 className="section-title">Thank you — we have your details</h1>
          <p className="section-lead" style={{ margin: '16px auto 32px' }}>
            Our team will contact you shortly at the details you provided to complete your
            Gewinode Raven account. Please keep your phone nearby.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn--ember" to="/">
              Back to Home
            </Link>
            <Link className="btn btn--ghost" to="/faq">
              Read the FAQ
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
