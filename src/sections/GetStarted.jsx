import Link from 'next/link';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { GET_STARTED } from '@/data/content';

export default function GetStarted() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={GET_STARTED.title} />
        <div className="grid grid--4">
          {GET_STARTED.steps.map((s, i) => (
            <Reveal className="card" delay={i * 90} key={s.title}>
              <span className="card__num">step {s.step}</span>
              <div className="card__icon">
                <Icon name={s.icon} size={24} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="section-cta">
          <Link className="btn btn--ember" href={GET_STARTED.cta.to}>
            {GET_STARTED.cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
