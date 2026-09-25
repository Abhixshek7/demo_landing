import { useState } from 'react';
import {
  Header,
  Footer,
  Reveal,
  SectionCta,
  useScrollReveal,
  useBodyScrollLock,
} from '@/components/layout';
import { HorizontalStack, type HorizontalStackStep } from '@/components/ui/horizontal-stack';

const workSteps: HorizontalStackStep[] = [
  {
    index: '01',
    title: 'Discover',
    description:
      "We start by understanding the business.",
    image: '/howWeWork/discover.jpg',
  },
  {
    index: '02',
    title: 'Diagnose',
    description:
      'We map the legal, regulatory and commercial risk.',
    image: '/howWeWork/diagnose.jpg',
  },
  {
    index: '03',
    title: 'Design',
    description:
      "We structure the agreements, governance and rights architecture.",
    image: '/howWeWork/design.jpg',
  },
  {
    index: '04',
    title: 'Deliver',
    description:
      "We help you deliver your successful business.",
    image: '/howWeWork/deliver.jpg',
  },
];

const PILLARS = [
  {
    title: 'What are we actually building?',
    description:
      'We establish the brief, the stakeholders requirements .',
  },
  {
    title: 'Where could it break?',
    description:
      'We examine structure, rights, contracts, compliance and governance.',
  },
  {
    title: 'What can everyone stand behind?',
    description:
      'We make the practical route forward to execute.',
  },
];

export default function AboutUsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollReveal();
  useBodyScrollLock(menuOpen);

  return (
    <main className="arc-page" id="top">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="arc-section about-top" aria-label="About ITW ARC">
        <Reveal>
          <div className="about-top-head">
            <h1 className="about-top-title">About Us</h1>
            {/* <p className="about-top-support">
              ITW ARC is a legal advisory, regulation and compliance division serving the sports,
              media and entertainment industry. We work with businesses in handling the complexity
              of the legal side.
            </p> */}
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="about-top-image">
            <img src="/hero.png" alt="The ITW ARC team" />
          </div>
        </Reveal>
      </section>

      <section className="arc-section about-universe" aria-label="ITW Universe">
        <Reveal>
          <h2 className="about-universe-text">
           ITW ARC was founded within ITW Universe, one of India's established sports and media
            practices. Our team has operated in the field of sports and entertainment for over a
            decade.
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <SectionCta href="/our-team">View team</SectionCta>
        </Reveal>
      </section>

      <section className="arc-section arc-method" id="method" aria-labelledby="method-title">
        <Reveal>
          <div className="arc-section-head">
            <h2 className="arc-section-title" id="method-title">Our way of< span className="accent"> planing and execution.</span></h2>
          </div>
        </Reveal>
        <HorizontalStack steps={workSteps} />
      </section>

      <section className="arc-section why-arc-content" aria-labelledby="about-us-principles-title">
        <Reveal delay={1}>
          <h2 className="arc-section-title" id="about-us-principles-title">
             Our philosophy of <span className="accent"> work.</span>
          </h2>
        </Reveal>
        <div className="arc-steps">
          {PILLARS.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i + 1, 3)}>
              <article className="arc-step">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <SectionCta href="/">View our services</SectionCta>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
