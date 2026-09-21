import { useState } from 'react';
import {
  Header,
  Footer,
  Reveal,
  SectionCta,
  useScrollReveal,
  useBodyScrollLock,
} from '@/components/layout';
import { CoverflowCarousel } from '@/components/ui/coverflow-carousel';
import { CASE_STUDIES } from '@/data/case-studies';

export default function CaseStudiesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useScrollReveal();
  useBodyScrollLock(menuOpen);

  const active = CASE_STUDIES[activeIndex];

  return (
    <main className="arc-page" id="top">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="arc-section about-top" aria-label="Case studies">
        <Reveal>
          <div className="about-top-head">
            <h1 className="about-top-title">Case Studies</h1>
            <p className="about-top-support">
              Proof across leagues, rights deals and high-stakes moments — the work behind the
              headlines.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="arc-section case-studies-carousel" aria-label="Case study gallery">
        <Reveal>
          <CoverflowCarousel
            slides={CASE_STUDIES.map((cs) => ({ src: cs.image, alt: cs.name }))}
            showNavigation
            onSelectedChange={setActiveIndex}
          />
        </Reveal>
        <Reveal delay={1}>
          <div className="case-study-card" key={active.index}>
            {/* <span className="case-study-tag">{active.tag}</span> */}
            <h3>{active.name}</h3>
            <span className="case-study-date">{active.date}</span>
            <p>{active.description}</p>
            <div className="case-study-services">
              {active.services.map((service) => (
                <span key={service} className="case-study-pill">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="arc-contact" aria-labelledby="case-contact-title">
        <Reveal>
          <div className="arc-contact-head">
            <h2 id="case-contact-title">Discuss your business</h2>
            {/* <p className="arc-contact-subtitle">
              Tell us what's on your mind and the right person on the team will get back to you.
            </p> */}
          </div>
        </Reveal>
        <Reveal delay={1}>
          <SectionCta href="/contact">Start a conversation</SectionCta>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
