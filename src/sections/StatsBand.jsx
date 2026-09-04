import Reveal from '../components/Reveal.jsx';
import { STATS } from '../data/content.js';

export default function StatsBand() {
  return (
    <section className="stats section section--surface" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <Reveal className="stats__cell" delay={i * 80} key={s.label}>
              <div className="stats__value">{s.value}</div>
              <div className="stats__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
