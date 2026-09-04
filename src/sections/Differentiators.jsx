import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { DIFFERENTIATORS } from '../data/content.js';

export default function Differentiators() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead

          title={DIFFERENTIATORS.title}
          lead={DIFFERENTIATORS.lead}
        />
        <div className="grid grid--3">
          {DIFFERENTIATORS.items.map((d, i) => (
            <Reveal className="card" delay={i * 90} key={d.title}>
              <div className="card__icon">
                <Icon name={d.icon} size={24} />
              </div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
