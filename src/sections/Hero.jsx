import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { HERO } from '../data/content.js';

// Minimal candlestick strip — ember candles up, muted candles down.
function Candles() {
  const candles = [
    ['up', 34, 12], ['up', 22, 8], ['down', 18, 6], ['up', 30, 10], ['down', 24, 9],
    ['up', 38, 13], ['up', 26, 7], ['down', 20, 8], ['up', 34, 11], ['up', 28, 6],
    ['down', 16, 5], ['up', 32, 12], ['up', 24, 8], ['down', 20, 7], ['up', 36, 13],
  ];
  const step = 14;
  const w = 4;
  const base = 44;
  return (
    <svg viewBox="0 0 220 48" width="220" height="48" aria-hidden="true">
      {candles.map(([dir, h, wick], i) => {
        const x = 8 + i * step;
        const top = base - h;
        const up = dir === 'up';
        return (
          <g key={i}>
            <line
              x1={x + w / 2} y1={top - wick} x2={x + w / 2} y2={top + h + wick}
              stroke={up ? '#f97316' : '#6f6559'} strokeWidth="1"
            />
            <rect
              x={x} y={top} width={w} height={h} rx="1"
              fill={up ? 'url(#candle-up)' : '#4a423a'}
            />
          </g>
        );
      })}
      <defs>
        <linearGradient id="candle-up" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="hero__kicker">
              <span className="pulse" />
              {HERO.kicker}
            </span>

            <h1 className="hero__title">
              <span className="ember">Gewinode Raven</span> puts AI-powered precision behind
              every trade
              <span className="caret" aria-hidden="true">
                ▊
              </span>
            </h1>

            <p className="hero__sub">{HERO.sub}</p>

            <div className="hero__cta">
              <Link className="btn btn--ember" to={HERO.ctaPrimary.to}>
                {HERO.ctaPrimary.label}
                <Icon name="arrow-right" size={17} />
              </Link>
              <Link className="btn btn--ghost" to={HERO.ctaSecondary.to}>
                {HERO.ctaSecondary.label}
              </Link>
            </div>

            <div className="hero__steps">
              {HERO.steps.map((s, i) => (
                <span key={s}>
                  {i > 0 && <span className="hero__steps-sep">→</span>}
                  {s}
                </span>
              ))}
            </div>

            <div className="hero__trust">
              {HERO.trust.map((t) => (
                <span key={t}>
                  <Icon name="check" size={15} />
                  {t}
                </span>
              ))}
            </div>

            <div className="hero__readout">
              <div className="readout__head">
                <span className="dot dot--r" />
                <span className="dot dot--a" />
                <span className="dot dot--g" />
                {HERO.readout.title}
              </div>
              <div className="readout__body">
                <div className="readout__chart">
                  <Candles />
                </div>
                <div className="readout__data">
                  {HERO.readout.pairs.map((p) => (
                    <div className="readout__row" key={p.k}>
                      <span className="k">{p.k}</span>
                      <span className={`v ${p.dir}`}>
                        {p.v} {p.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dots">
                <span className="t--r" />
                <span className="t--a" />
                <span className="t--g" />
              </span>
              gewinode-raven — register
            </div>
            <div className="terminal__body">
              <RegistrationForm idPrefix="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
