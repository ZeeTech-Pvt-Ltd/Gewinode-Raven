import { useEffect, useRef } from 'react';
import { TICKER } from '../data/content.js';

export default function LiveTicker() {
  const ref = useRef(null);

  // Animate only while the ticker is actually on screen - saves continuous
  // compositor work during page load and when scrolled away.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle('is-playing', entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Render the list twice so the translateX(-50%) loop is seamless.
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" ref={ref} aria-hidden="true">
      <div className="ticker__viewport">
        {items.map((t, i) => (
          <span className="ticker__item" key={i}>
            <b>{t.k}</b>
            {t.v}
            <span className={t.dir}>{t.change}</span>
            <span className="sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
