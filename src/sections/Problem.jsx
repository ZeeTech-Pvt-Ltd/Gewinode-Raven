import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { PROBLEM } from '@/data/content';

export default function Problem() {
  return (
    <section className="section section--deep">
      <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
        <SectionHead title={PROBLEM.title} />
        <Reveal>
          <p style={{ color: '#f5efe8', fontSize: 16.5, lineHeight: 1.8, marginBottom: 22 }}>
            {PROBLEM.lead}
          </p>
        </Reveal>
        <Reveal>
          <p style={{ color: '#f5efe8', fontSize: 16.5, lineHeight: 1.8 }}>
            {PROBLEM.resolution}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
