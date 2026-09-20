import { useState } from 'react';
import { useParams } from 'wouter';
import {
  Header,
  Footer,
  Reveal,
  SectionCta,
  useScrollReveal,
  useBodyScrollLock,
} from '@/components/layout';
import { ServiceScoreboard } from '@/components/ui/service-scoreboard';
import { getServiceById } from '@/data/services';
import NotFound from '@/pages/not-found';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollReveal();
  useBodyScrollLock(menuOpen);

  const service = id ? getServiceById(id) : undefined;

  if (!service) {
    return <NotFound />;
  }

  return (
    <main className="arc-page" id="top">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="arc-section service-top" aria-label={service.title}>
        {/* <Reveal>
          <span className="service-eyebrow" data-testid="text-service-eyebrow">
            {service.eyebrow}
          </span>
        </Reveal> */}
        <div className="service-top-head">
          <Reveal delay={1}>
            <h1 className="service-top-title" data-testid="text-service-title">
              {service.title}
            </h1>
            
          </Reveal>
          <div className="service-top-side">
            {/* <Reveal delay={2}>
              <p className="service-top-support" data-testid="text-service-positioning">
                {service.positioning}
              </p>
            </Reveal> */}
            {/* <Reveal delay={3}>
              <a className="arc-cta" href="/contact" data-testid="link-service-hero-cta">
                {service.ctaLabel} <ArrowRight size={17} strokeWidth={1.4} />
              </a>
            </Reveal> */}
          </div>
        </div>
        {/* <Reveal delay={3}>
          <div className="service-top-panel" aria-hidden="true">
            <span className="service-top-panel-index">{service.id}</span>
            <span className="service-top-panel-label">ITW ARC / SERVICE</span>
          </div>
        </Reveal> */}
      </section>

      <section className="arc-section service-body" aria-label="What we do">
        <Reveal>
          <div className="arc-section-head">
            <h2 className="arc-section-title">
              What we <span className="accent">do.</span>
            </h2>
          </div>
        </Reveal>
        <ServiceScoreboard
          items={service.whatWeDo.map((item, index) => ({
            id: String(index + 1).padStart(2, '0'),
            title: item.title,
            description: item.description,
          }))}
        />
      </section>

      {service.whoThisIsFor ? (
        <section className="arc-section service-who" aria-label="Who this is for">
          {/* <Reveal>
            <div className="service-who-panel">
              <span className="service-who-label">Who this is for</span>
              <p>{service.whoThisIsFor}</p>
            </div>
          </Reveal> */}
        </section>
      ) : null}

      <section className="arc-contact" id="contact" aria-labelledby="service-contact-title">
        <Reveal>
          <div className="arc-contact-head">
            <h2 id="service-contact-title">{service.ctaLabel}.</h2>
            <p className="arc-contact-subtitle">
              {/* Tell us what's on your mind and the right person on the team will get back to you. */}
            </p>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <SectionCta href="/contact">{service.ctaLabel}</SectionCta>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
