import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { MARKETS } from '@/data/content';

export default function Markets() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={MARKETS.title} />
        <div className="grid grid--4">
          {MARKETS.items.map((m, i) => (
            <Reveal className="card" delay={i * 90} key={m.title}>
              <div className="card__icon">
                <Icon name={m.icon} size={24} />
              </div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
