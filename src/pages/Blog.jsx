import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useMeta from '../hooks/useMeta.js';
import { BLOG_POSTS } from '../data/content.js';

export default function Blog() {
  useMeta({
    title: 'Blog | Gewinode Raven',
    description:
      'Insights from the Gewinode Raven team: how AI reads markets, cold storage explained, and the habits of calm investors.',
    path: '/blog',
  });

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">The Gewinode Raven blog</h1>
          <p className="section-lead">
            Short, honest reads about AI trading, security and investing well.
          </p>
        </div>
      </div>

      <section className="section section--deep">
        <div className="container">
          <div className="grid grid--3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal className="card blog-card" delay={i * 90} key={post.slug}>
                <div className="blog-card__meta">
                  {post.date}
                  <span>·</span>
                  {post.readTime}
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-card__more">Full article coming soon →</span>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
            <p className="form__note">
              New articles are published every two weeks. Full posts are currently in final review.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
