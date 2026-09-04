import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { CAPABILITIES } from '../data/content.js';

export default function Capabilities() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead

          title={CAPABILITIES.title}
          lead={CAPABILITIES.lead}
        />
        <div className="caps">
          {CAPABILITIES.items.map((c, i) => (
            <Reveal className="caps__cell" delay={(i % 4) * 70} key={c.title}>
              <Icon name={c.icon} size={24} />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
