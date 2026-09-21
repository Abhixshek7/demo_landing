import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Header, Footer, Reveal, SectionHead, SectionCta, useScrollReveal, useBodyScrollLock } from '@/components/layout';
import { VerticalTabs } from '@/components/ui/vertical-tabs';
import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from '@/components/ui/progressive-carousel';
import { StackingCards, type StackingCardData } from '@/components/ui/stacking-card';
import { HorizontalStack, type HorizontalStackStep } from '@/components/ui/horizontal-stack';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import TeamPage from '@/pages/team';
import ContactPage from '@/pages/contact';
import AboutUsPage from '@/pages/about-us';
import CaseStudiesPage from '@/pages/case-studies';
import ServiceDetailPage from '@/pages/service-detail';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const DEFAULT_OPEN_INSIGHT = 'insight-0';

const proofItems = [
  {
    sliderName: 'sports',
    title: 'Built for sports business',
    description:
      "From league formation to franchise onboarding, we've structured the legal architecture for competitions at every scale — domestic, international and marquee.",
    image: '/about/sports.jpg',
  },
  {
    sliderName: 'digital',
    title: 'Deep in media & rights',
    description:
      'TV, digital, OTT — we negotiate and structure broadcast deals, rights commercialization and production agreements across every platform and territory.',
    image: '/about/media.jpg',
  },
  {
    sliderName: 'compliance',
    title: 'Governance that scales',
    description:
      "Compliance frameworks, governance systems and dispute-readiness protocols — designed so that growth doesn't outpace the legal foundation.",
    image: '/about/legal.jpg',
  },
];

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

const caseStudies: StackingCardData[] = [
  {
    index: '01',
    eyebrow: 'Marquee Event',
    title: 'Tata IPL 2024 Opening Ceremony',
    description:
      'Enabled the end-to-end legal structuring and execution of the Tata IPL 2024 Opening Ceremony.',
    cta: 'Discuss a similar engagement',
    image: '/case-ipl.jpg',
    background: 'var(--color-bone)',
    foreground: 'var(--color-ink)',
    accent: 'var(--color-teal)',
  },
  {
    index: '02',
    eyebrow: 'Rights & Commercialization',
    title: 'Global rights commercialization for WCL',
    description:
      'Served as the exclusive consulting and global rights commercialization partner.',
    cta: 'Discuss a similar brief',
    image: '/broadcast.jpg',
    background: 'var(--color-ink)',
    foreground: 'var(--color-bone)',
    accent: 'var(--color-green-soft)',
  },
  {
    index: '03',
    eyebrow: 'Sponsorship & Compliance',
    title: 'Sponsorship architecture for TN Premier League',
    description:
      'Drove end-to-end legal structuring of sponsorship rights and commercial frameworks.',
    cta: 'Discuss a similar brief',
    image: '/case-t20.jpg',
    background: 'var(--color-teal)',
    foreground: 'var(--color-bone)',
    accent: 'var(--color-green-soft)',
  },
];

type InsightItem = {
  title: string;
  description: string;
  image: string;
  publishedOn: string;
};

const insights: InsightItem[] = [
  {
    title: 'Why the operating model comes before the rights deal',
    description:
      "A league's legal structure shapes every commercial negotiation that follows. Getting the operating model right first is the difference between sustainable revenue and recurring disputes.",
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    publishedOn: 'Mar 12, 2025',
  },
  {
    title: 'The hidden cost of unclear rights allocation',
    description:
      "Ambiguity in rights allocation doesn't just create legal risk — it travels through every commercial conversation, partner relationship and board decision that follows.",
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=80',
    publishedOn: 'Jan 28, 2025',
  },
  {
    title: 'How governance keeps ambition moving',
    description:
      "Governance is not a brake on growth. It's the shared operating language that lets responsible decision-makers move faster — because the boundaries and accountability are already clear.",
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80',
    publishedOn: 'Nov 04, 2024',
  },
];

function AppHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openInsight, setOpenInsight] = useState(DEFAULT_OPEN_INSIGHT);

  useScrollReveal();
  useBodyScrollLock(menuOpen);

  return (
    <main className="arc-page" id="top">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="arc-hero" aria-labelledby="hero-title">
        <div className="arc-hero-top">
          <Reveal>
            <h1 className="arc-hero-title" id="hero-title">
             Turning legal complexity into <em> simplicity.</em>
            </h1>
          </Reveal>
          <div className="arc-hero-side">
            <Reveal delay={1}>
              <p className="arc-hero-note" data-testid="text-hero-intro">
                The Advisory that make sports, media and entertainment businesses work: clear structures, durable agreements and confidence between partners.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="arc-hero-actions">
                <a className="arc-cta" href="/contact" data-testid="link-hero-contact">
                  Start a conversation <ArrowRight size={17} strokeWidth={1.4} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal delay={3}>
          <div className="arc-hero-media">
            <img src="/hero.png" alt="The ITW ARC team" className="arc-hero-image" />
          </div>
        </Reveal>
      </section>

      <section className="arc-section arc-proof" aria-labelledby="proof-title">
        <Reveal>
          <SectionHead>
            The legal team for<span className="accent"> sports,media and entertainment business.</span> 
          </SectionHead>
        </Reveal>
        <div id="proof-title" className="proof-carousel">
          <ProgressSlider vertical={false} activeSlider={proofItems[0].sliderName} duration={6000}>
            <SliderContent className="proof-carousel-heading">
              {proofItems.map((item) => (
                <SliderWrapper key={item.sliderName} value={item.sliderName} className="proof-carousel-heading-slide">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderContent className="proof-carousel-stage">
              {proofItems.map((item) => (
                <SliderWrapper key={item.sliderName} value={item.sliderName} className="proof-carousel-slide">
                  <img src={item.image} alt={item.title} className="proof-carousel-image" />
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderBtnGroup className="proof-carousel-btns">
              {proofItems.map((item) => (
                <SliderBtn
                  key={item.sliderName}
                  value={item.sliderName}
                  className="proof-carousel-btn"
                  progressBarClass="proof-carousel-progress"
                >
                  <span className="proof-carousel-btn-label">{item.title}</span>
                </SliderBtn>
              ))}
            </SliderBtnGroup>
          </ProgressSlider>
        </div>
        <Reveal>
          <SectionCta href="/contact">Know more</SectionCta>
        </Reveal>
      </section>
      {/* <section className="arc-decision" id="confidence" aria-labelledby="confidence-title">
        <Reveal>
          <div className="arc-section-head">
            <h2 className="arc-section-title" id="confidence-title">A better answer starts with the <span className="accent">right question.</span></h2>
          </div>
        </Reveal>
        <div className="arc-steps">
          <Reveal><article className="arc-step"><div><h3>What are we actually building?</h3><p>We establish the brief, the stakeholders and the decisions underneath the headline.</p></div></article></Reveal>
          <Reveal delay={1}><article className="arc-step"><div><h3>Where could it break?</h3><p>We examine structure, rights, contracts, compliance and governance as one connected system.</p></div></article></Reveal>
          <Reveal delay={2}><article className="arc-step"><div><h3>What can everyone stand behind?</h3><p>We make the practical route forward clear enough to approve, explain and execute.</p></div></article></Reveal>
        </div>
        <Reveal>
          <SectionCta href="/contact">Talk through your situation</SectionCta>
        </Reveal>
      </section> */}

      <section className="arc-section arc-method" id="method" aria-labelledby="method-title">
        <Reveal>
          <div className="arc-section-head">
            <h2 className="arc-section-title" id="method-title">Our way of< span className="accent"> planing and execution.</span></h2>
          </div>
        </Reveal>
        <HorizontalStack steps={workSteps} />
        {/* <Reveal>
          <SectionCta href="#confidence">Discuss your requirements</SectionCta>
        </Reveal> */}
      </section>

      <section className="arc-section arc-services" id="practice" aria-label="Services">
        <VerticalTabs />
        <Reveal>
          <div className="arc-vt-cta w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
            <SectionCta href="/contact">Discuss your requirements</SectionCta>
          </div>
        </Reveal>
      </section>

      <section className="arc-section arc-case-studies" id="case-studies" aria-labelledby="case-studies-title">
        <Reveal>
          <SectionHead>
            Proof of events executed <span className="accent">successfully.</span>
          </SectionHead>
        </Reveal>
        <div id="case-studies-title">
          <StackingCards items={caseStudies} />
        </div>
        <Reveal>
          <SectionCta href="/contact">Discuss your project with ARC</SectionCta>
        </Reveal>
      </section>

      <section className="arc-section arc-insights" id="insights" aria-labelledby="insights-title">
        <Reveal>
          <div className="arc-section-head arc-insights-head">
            <h2 className="arc-section-title" id="insights-title">Perspectives on what's <span className="accent">ahead.</span></h2>
            <a className="arc-text-link arc-insights-head-link" href="/contact">
              See all perspectives <ArrowUpRight size={16} strokeWidth={1.3} />
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="arc-insight-accordion-wrap">
            <Accordion
              type="single"
              collapsible
              value={openInsight}
              onValueChange={setOpenInsight}
              className="arc-insight-accordion"
            >
              {insights.map((insight, i) => {
                const value = `insight-${i}`;
                const isOpen = openInsight === value;
                return (
                  <AccordionItem
                    key={insight.title}
                    value={value}
                    className={`arc-insight-accordion-item${isOpen ? ' is-open' : ''}`}
                    data-testid={`accordion-insight-${i}`}
                  >
                    <AccordionTrigger className="arc-insight-accordion-trigger">
                      <span className="arc-insight-accordion-heading">
                        <span className={`arc-insight-accordion-title${isOpen ? ' is-open' : ''}`}>
                          {insight.title}
                        </span>
                        <span className="arc-insight-accordion-date">{insight.publishedOn}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="arc-insight-accordion-content">
                      <div className="arc-insight-accordion-body">
                        <div>
                          <p>{insight.description}</p>
                          <a className="arc-text-link" href="/contact">
                            Read the perspective <ArrowUpRight size={16} strokeWidth={1.3} />
                          </a>
                        </div>
                        <div className="arc-insight-accordion-image">
                          <img src={insight.image} alt={insight.title} loading="lazy" />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </Reveal>
      </section>

      <section className="arc-contact" id="contact" aria-labelledby="contact-title">
        <Reveal>
          <div className="arc-contact-head">
            <h2 id="contact-title">Bring us the complex part.</h2>
            <p className="arc-contact-subtitle"></p>
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

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={AppHome} />
        <Route path="/our-team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/case-studies" component={CaseStudiesPage} />
        <Route path="/services/:id" component={ServiceDetailPage} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;