import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { AUDIENCES } from '@/data/content';

export default function Audiences() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={AUDIENCES.title} />
        <div className="grid grid--3">
          {AUDIENCES.items.map((a, i) => (
            <Reveal className="card" delay={i * 90} key={a.title}>
              <div className="card__icon">
                <Icon name={a.icon} size={24} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
