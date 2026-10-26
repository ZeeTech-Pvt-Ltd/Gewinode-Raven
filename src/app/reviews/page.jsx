import Link from 'next/link';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import TestimonialCard, { Stars } from '@/components/TestimonialCard';
import { TESTIMONIALS, MORE_REVIEWS, RATING } from '@/data/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Gewinode Raven Reviews | Rated 4.8/5 by Members',
  description:
    'Read verified reviews from Gewinode Raven members across Australia. Rated 4.8 out of 5, based on 1,247 verified reviews.',
  path: '/reviews',
  keywords: [
    'Gewinode Raven reviews',
    'AI trading platform reviews',
    'Gewinode Raven ratings',
    'trading platform Australia reviews',
  ],
});

export default function Reviews() {
  const reviews = [...TESTIMONIALS.items, ...MORE_REVIEWS];

  return (
    <>
      <BreadcrumbSchema path="/reviews" />
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">{TESTIMONIALS.title}</h1>
          <p className="section-lead">{TESTIMONIALS.lead}</p>
        </div>
      </div>

      <section className="section section--surface">
        <div className="container">
          <Reveal className="rating" style={{ justifyContent: 'center', marginBottom: 40 }}>
            <div className="rating__score">{RATING.score}</div>
            <div className="rating__meta">
              <Stars />
              <div className="count">Based on {RATING.total.toLocaleString()} reviews</div>
            </div>
          </Reveal>

          <div className="grid grid--3">
            {reviews.map((t, i) => (
              <TestimonialCard key={t.name} item={t} delay={(i % 3) * 90} />
            ))}
          </div>

          <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
            <Link className="btn btn--ember" href="/sign-up">
              Join Gewinode Raven
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
