import FaqList from '../components/FaqList.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { FAQS } from '../data/content.js';

export default function FaqSection() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title="Frequently asked questions" />
        <FaqList items={FAQS} />
      </div>
    </section>
  );
}
