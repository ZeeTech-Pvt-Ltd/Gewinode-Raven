import Link from 'next/link';
import Icon from '@/components/Icon';
import RegistrationForm from '@/components/RegistrationForm';
import { HERO } from '@/data/content';

// Registration form temporarily hidden - flip to true to restore it.
const SHOW_FORM = false;

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container">
        <div className={`hero__inner${SHOW_FORM ? '' : ' hero__inner--single'}`}>
          <div className="hero__copy">
            <h1 className="hero__title">
              {HERO.titleLines[0]}
              <br />
              {HERO.titleLines[1]}
            </h1>

            <p className="hero__sub">{HERO.sub}</p>

            <div className="hero__cta">
              <Link className="btn btn--ember" href={HERO.ctaPrimary.to}>
                {HERO.ctaPrimary.label}
                <Icon name="arrow-right" size={17} />
              </Link>
            </div>

            <div className="hero__trust" style={{ marginTop: 24 }}>
              {HERO.microcopy.map((m) => (
                <span key={m.text}>
                  <Icon name={m.icon} size={15} />
                  {m.text}
                </span>
              ))}
            </div>
          </div>

          {SHOW_FORM && (
            <div className="terminal">
              <div className="terminal__bar">
                <span className="terminal__dots">
                  <span className="t--r" />
                  <span className="t--a" />
                  <span className="t--g" />
                </span>
                gewinode-raven - register
              </div>
              <div className="terminal__body">
                <RegistrationForm idPrefix="hero" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
