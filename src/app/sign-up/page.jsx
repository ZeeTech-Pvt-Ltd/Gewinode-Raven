import RegistrationForm from '@/components/RegistrationForm';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { SITE } from '@/data/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Sign Up | Open a Gewinode Raven Account Today',
  description:
    'Open your Gewinode Raven trading account in minutes. Join 3.5 million members, fund from A$250 and let the AI engine trade for you.',
  path: '/sign-up',
  keywords: [
    'Gewinode Raven sign up',
    'open trading account Australia',
    'AI trading registration',
    'Gewinode Raven register',
  ],
});

export default function SignUp() {
  return (
    <section className="section section--deep">
      <BreadcrumbSchema path="/sign-up" />
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="page-hero__glow" />
      </div>
      <div className="container" style={{ maxWidth: 520 }}>
        <h1 className="section-title" style={{ textAlign: 'center', fontSize: 28, marginBottom: 32 }}>
          Open your Gewinode Raven account
        </h1>
        <div className="terminal">
          <div className="terminal__bar">
            <span className="terminal__dots">
              <span className="t--r" />
              <span className="t--a" />
              <span className="t--g" />
            </span>
            gewinode-raven - sign up
          </div>
          <div className="terminal__body">
            <RegistrationForm idPrefix="signup" />
          </div>
        </div>
        <p className="form__note" style={{ marginTop: 20 }}>
          {SITE.tagline} · Minimum deposit A$250
        </p>
      </div>
    </section>
  );
}
