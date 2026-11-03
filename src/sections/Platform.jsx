import Reveal from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { PLATFORM } from '@/data/content';

export default function Platform() {
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <Reveal>
            <SectionHead title={PLATFORM.title} lead={PLATFORM.lead} align="left" />
            <p style={{ color: '#f5efe8', fontSize: 16, lineHeight: 1.75 }}>{PLATFORM.close}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="terminal">
              <div className="terminal__bar">
                <span className="terminal__dots">
                  <span className="t--r" />
                  <span className="t--a" />
                  <span className="t--g" />
                </span>
                analyst - live feed
              </div>
              <div className="terminal__body">
                <div className="readout__row" style={{ marginBottom: 10 }}>
                  <span className="k">markets watched</span>
                  <span className="v">4</span>
                </div>
                <div className="readout__row" style={{ marginBottom: 10 }}>
                  <span className="k">every insight ships with</span>
                  <span className="v up">a reason</span>
                </div>
                <div className="readout__row" style={{ marginBottom: 10 }}>
                  <span className="k">execution</span>
                  <span className="v">always yours</span>
                </div>
                <div className="readout__row">
                  <span className="k">support</span>
                  <span className="v up">24/7</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
