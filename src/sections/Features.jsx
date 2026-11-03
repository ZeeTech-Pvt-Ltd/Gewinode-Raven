import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { PLATFORM_FEATURES } from '@/data/content';

// The right-hand visual is a decorative mockup of a real insight, not
// live data - kept aria-hidden so screen readers skip it.
export default function Features() {
  return (
    <section className="section section--deep features">
      <div className="container">
        <SectionHead title={PLATFORM_FEATURES.title} />
        <div className="features__grid">
          <div className="features__list">
            {PLATFORM_FEATURES.items.map((f, i) => (
              <Reveal className="feature" delay={i * 70} key={f.title}>
                <div className="card__icon">
                  <Icon name={f.icon} size={20} />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="insight" aria-hidden="true">
            <div className="terminal__bar">
              <span className="terminal__dots">
                <span className="t--r" />
                <span className="t--a" />
                <span className="t--g" />
              </span>
              insight - btc/aud
            </div>
            <div className="insight__body">
              <div className="insight__head">
                <span className="insight__pair">▲ BTC/AUD</span>
                <span className="insight__time">alert · just now</span>
              </div>
              <h3 className="insight__title">Breakout above the 20-day range</h3>
              <p className="insight__reason">
                <strong>Reason:</strong> price closed above its 20-day high on volume 2.3× the
                monthly average.
              </p>
              <div className="insight__levels">
                <div className="level">
                  <span className="k">stop-loss</span>
                  <span className="v">68,900</span>
                </div>
                <div className="level">
                  <span className="k">take-profit</span>
                  <span className="v up">72,400</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
