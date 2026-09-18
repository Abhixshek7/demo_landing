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

type CaseStudy = {
  index: string;
  tag: string;
  name: string;
  date: string;
  description: string;
  services: string[];
  image: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    index: '01',
    tag: 'Marquee Event',
    name: 'Tata IPL 2024 Opening Ceremony',
    date: '2024',
    description:
      'Enabled end-to-end legal structuring and execution for the Tata IPL 2024 Opening Ceremony. Managed high-value artist engagement contracts alongside complex, multi-layered vendor contracting across production, staging and technical domains.',
    services: ['Artist engagement contracts', 'Vendor & production agreements', 'Staging & technical contracts'],
    image: '/case-ipl.jpg',
  },
  {
    index: '02',
    tag: 'Rights & Commercialization',
    name: 'Global rights commercialization for WCL',
    date: '2024',
    description:
      'Served as the exclusive consulting and global rights commercialization partner for WCL. Led large-scale monetization across in-stadia inventory, FCT and broadcast rights spanning TV, digital and OTT platforms. Orchestrated broadcast negotiations, production support and comprehensive legal documentation for all media and commercial agreements.',
    services: [
      'Broadcast rights — TV, digital & OTT',
      'In-stadia & FCT monetization',
      'Broadcast negotiations & production support',
      'Media & commercial legal documentation',
    ],
    image: '/broadcast.jpg',
  },
  {
    index: '03',
    tag: 'Sponsorship & Compliance',
    name: 'Sponsorship architecture for TN Premier League',
    date: '2024',
    description:
      'Drove end-to-end legal structuring of sponsorship rights and commercial frameworks for the TN Premier League. Led contracting, negotiation and compliance architecture for multiple marquee brand partnerships. Enabled robust rights protection and scalable partnership structures across seasons.',
    services: ['Brand partnership contracting', 'Sponsorship negotiation', 'Compliance architecture', 'Rights protection across seasons'],
    image: '/case-t20.jpg',
  },
  {
    index: '04',
    tag: 'League Setup',
    name: 'Building a league from inception',
    date: '2023–2024',
    description:
      'Advised from inception on end-to-end league architecture — commercial structuring, governance frameworks and franchise model. Led the structuring of mandate documentation covering rights allocation and revenue-sharing mechanisms. Drove the complete franchise onboarding ecosystem including RFP design, evaluation frameworks and franchise agreements.',
    services: [
      'Commercial structuring & governance frameworks',
      'Rights allocation & revenue-sharing mandates',
      'RFP design & evaluation frameworks',
      'Franchise agreements & onboarding',
    ],
    image: '/howWeWork/discover.jpg',
  },
  {
    index: '05',
    tag: 'Governance',
    name: 'Compliance-ready league structure for CCPL',
    date: '2024',
    description:
      'Designed and implemented governance frameworks, sponsorship agreements and operational contracts for CCPL. Established a fully compliant and execution-ready league structure from inception. Enabled long-term scalability through sound legal foundations and commercial structuring.',
    services: ['Governance framework design', 'Sponsorship agreements', 'Operational contracts', 'Legal foundation for scalability'],
    image: '/about/legal.jpg',
  },
  {
    index: '06',
    tag: 'Franchise Advisory',
    name: 'Franchise-level commercial strategy for Mysore Warriors',
    date: '2024',
    description:
      'Served as the exclusive sports marketing consultant (legal and commercial) for Mysore Warriors. Structured and negotiated sponsorship agreements, commercial rights packages and brand integrations. Safeguarded and enhanced franchise-level commercial interests through strategic legal oversight.',
    services: ['Sponsorship agreements', 'Commercial rights packages', 'Brand integrations', 'Strategic legal oversight'],
    image: '/about/sports.jpg',
  },
];

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
            <span className="case-study-tag">{active.tag}</span>
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
            <h2 id="case-contact-title">Have a similarly complex situation?</h2>
            <p className="arc-contact-subtitle">
              Tell us what's on your mind and the right person on the team will get back to you.
            </p>
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
