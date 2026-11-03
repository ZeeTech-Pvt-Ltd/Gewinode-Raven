import Link from 'next/link';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { TRUST } from '@/data/content';

export default function Trust() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={TRUST.title} />
        <div className="grid grid--4">
          {TRUST.items.map((t, i) => (
            <Reveal className="card" delay={i * 90} key={t.title}>
              <div className="card__icon">
                <Icon name={t.icon} size={24} />
              </div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
          <p className="form__note" style={{ marginBottom: 20 }}>
            {TRUST.riskNote}
          </p>
          <Link className="btn btn--ember" href={TRUST.cta.to}>
            {TRUST.cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
