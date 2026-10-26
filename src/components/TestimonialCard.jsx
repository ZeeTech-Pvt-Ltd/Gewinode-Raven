import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';

export function Stars({ n = 5, size = 15 }) {
  return (
    <div className="tcard__stars">
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </div>
  );
}

export default function TestimonialCard({ item, delay = 0 }) {
  return (
    <Reveal className="card tcard" delay={delay}>
      <Stars />
      <p className="tcard__quote">“{item.quote}”</p>
      <div className="tcard__person">
        <img
          className="tcard__avatar"
          src={item.photo}
          alt={`Portrait of ${item.name}`}
          width={46}
          height={46}
          loading="lazy"
        />
        <div>
          <div className="tcard__name">
            {item.name} · {item.place}
          </div>
          <span className="tcard__tag">
            <Icon name="verified" size={14} />
            {item.tag}
          </span>
        </div>
      </div>
    </Reveal>
  );
}
