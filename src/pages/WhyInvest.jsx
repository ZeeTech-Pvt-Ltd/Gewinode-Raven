import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useMeta from '../hooks/useMeta.js';
import { WHY } from '../data/content.js';

export default function WhyInvest() {
  useMeta({
    title: 'Why Invest | Gewinode Raven',
    description:
      'Six reasons to invest with Gewinode Raven: a 24/7 AI trading engine, 85% execution accuracy, bank-grade security, transparency and fast withdrawals.',
    path: '/why-invest',
  });

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">{WHY.title}</h1>
          <p className="section-lead">{WHY.lead}</p>
        </div>
      </div>

      <section className="section section--deep">
        <div className="container">
          <div className="grid grid--3">
            {WHY.items.map((w, i) => (
              <Reveal className="card" delay={i * 80} key={w.title}>
                <div className="card__icon">
                  <Icon name={w.icon} size={24} />
                </div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <Reveal>
            <div
              className="card"
              style={{ borderColor: 'rgba(249,115,22,0.4)', marginBottom: 32 }}
            >
              <Icon name="shield-check" size={28} style={{ color: '#f97316', marginBottom: 12 }} />
              <h3 style={{ fontFamily: "'Sora', sans-serif", marginBottom: 10 }}>A note on risk</h3>
              <p style={{ color: '#a89e92', fontSize: 14.5 }}>{WHY.riskNote}</p>
            </div>
            <Link className="btn btn--ember" to={WHY.cta.to}>
              {WHY.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
