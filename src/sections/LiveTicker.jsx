import { TICKER } from '../data/content.js';

export default function LiveTicker() {
  // Render the list twice so the translateX(-50%) loop is seamless.
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
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
