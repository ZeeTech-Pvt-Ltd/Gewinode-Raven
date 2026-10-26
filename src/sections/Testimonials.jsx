import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import TestimonialCard, { Stars } from '@/components/TestimonialCard';
import { TESTIMONIALS, RATING } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="testimonials__top">
          <SectionHead

            title={TESTIMONIALS.title}
            lead={TESTIMONIALS.lead}
            align="left"
          />
          <Reveal className="rating">
            <div className="rating__score">{RATING.score}</div>
            <div className="rating__meta">
              <Stars />
              <div className="count">
                Based on {RATING.total.toLocaleString()} reviews
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid--3">
          {TESTIMONIALS.items.map((t, i) => (
            <TestimonialCard key={t.name} item={t} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
