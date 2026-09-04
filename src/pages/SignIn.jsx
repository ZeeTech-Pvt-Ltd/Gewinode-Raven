import RegistrationForm from '../components/RegistrationForm.jsx';
import useMeta from '../hooks/useMeta.js';

export default function SignIn() {
  useMeta({
    title: 'Sign In | Gewinode Raven',
    description: 'Sign in to your Gewinode Raven account and return to your trading dashboard.',
    path: '/sign-in',
  });

  return (
    <section className="section section--deep">
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="page-hero__glow" />
      </div>
      <div className="container" style={{ maxWidth: 520 }}>
        <h1 className="section-title" style={{ textAlign: 'center', fontSize: 28, marginBottom: 32 }}>
          Sign in to Gewinode Raven
        </h1>
        <div className="terminal">
          <div className="terminal__bar">
            <span className="terminal__dots">
              <span className="t--r" />
              <span className="t--a" />
              <span className="t--g" />
            </span>
            gewinode-raven — sign in
          </div>
          <div className="terminal__body">
            <RegistrationForm
              idPrefix="signin"
              title="Welcome back"
              subtitle="Confirm your details and we will restore your session securely."
              buttonLabel="Sign In"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
