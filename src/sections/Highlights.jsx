import Reveal from '@/components/Reveal';
import { HIGHLIGHTS } from '@/data/content';

export default function Highlights() {
  return (
    <section className="section section--surface" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="container">
        <div className="highlights">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal className="highlight" delay={i * 80} key={h.title}>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
