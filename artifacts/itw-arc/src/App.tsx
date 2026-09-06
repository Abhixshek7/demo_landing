import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, X } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

type LinkItem = { label: string; href: string };

const navigation: LinkItem[] = [
  { label: 'What ARC solves', href: '#practice' },
  { label: 'How we work', href: '#method' },
  { label: 'Why ARC', href: '#confidence' },
  { label: 'Case studies', href: '#case-studies' },
  { label: 'Insights', href: '#insights' },
  { label: 'Start a conversation', href: '#contact' },
];

function LogoLockup({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="arc-lockup" data-testid="brand-lockup">
      <div className="arc-mark" aria-label="ITW ARC mark">A/</div>
      <div className="arc-lockup-copy">
        <span>ITW UNIVERSE // ARC</span>
        <span>ADVISORY · REGULATORY · COMPLIANCE</span>
      </div>
      {inverted ? <span className="sr-only">ITW ARC menu</span> : null}
    </div>
  );
}

function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`arc-menu-overlay ${open ? 'is-open' : ''}`} id="arc-navigation" aria-hidden={!open}>
      <div className="arc-lockup">
        <div className="arc-mark" aria-label="ITW ARC mark">A/</div>
        <div className="arc-lockup-copy">
          <span>ITW UNIVERSE // ARC</span>
          <span>ADVISORY · REGULATORY · COMPLIANCE</span>
        </div>
        <button className="arc-menu-close" onClick={onClose} aria-label="Close menu" data-testid="button-close-menu">
          <X size={25} strokeWidth={1.4} />
        </button>
      </div>
      <nav className="arc-menu-links" aria-label="Main navigation">
        {navigation.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            data-testid={`link-menu-${index}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="arc-menu-footer">
        <span>FOR SPORTS · MEDIA · ENTERTAINMENT</span>
        <span>ARC / 01 — 2025</span>
      </div>
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  return (
    <>
      <header className="arc-header">
        <a href="#top" aria-label="Back to top" data-testid="link-home">
          <LogoLockup />
        </a>
        <button
          className="arc-menu-button"
          aria-expanded={menuOpen}
          aria-controls="arc-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-open-menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
          {menuOpen ? <X size={15} strokeWidth={1.7} /> : <Menu size={15} strokeWidth={1.7} />}
        </button>
      </header>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>{children}</div>;
}

function SectionHead({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <div className={`arc-section-head ${index ? 'has-index' : ''}`}>
      {index ? <span className="arc-section-index" data-testid={`text-section-index-${index}`}>{index}</span> : null}
      <h2 className="arc-section-title">{children}</h2>
    </div>
  );
}

function PracticeCard({ index, title, copy, accent }: { index: string; title: string; copy: string; accent: string }) {
  return (
    <article className="arc-practice" data-testid={`card-practice-${index}`}>
      <div className="arc-practice-index">
        <span>{index}</span>
        <span>{accent}</span>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
      <div className="arc-arrow" aria-hidden="true"><ArrowUpRight size={16} strokeWidth={1.3} /></div>
    </article>
  );
}

function SectionCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="arc-section-cta" href={href}>
      {children}
      <ArrowRight size={17} strokeWidth={1.4} />
    </a>
  );
}

function AppHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <main className="arc-page" id="top">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="arc-hero" aria-labelledby="hero-title">
        <Reveal>
          <h1 className="arc-hero-title" id="hero-title">
            Structure for the <em>stakes</em> behind the spectacle.
          </h1>
        </Reveal>
        <div className="arc-hero-bottom">
          <Reveal delay={1}>
            <p className="arc-hero-note" data-testid="text-hero-intro">
              ARC is the specialist practice within ITW Universe for the decisions that make sports, media and entertainment businesses work: clear structures, durable agreements and confidence between partners.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="arc-hero-actions">
              <a className="arc-cta" href="#contact" data-testid="link-hero-contact">
                Start a conversation <ArrowRight size={17} strokeWidth={1.4} />
              </a>
              <a className="arc-scroll-hint" href="#practice" data-testid="link-scroll-practice">
                <ArrowDown size={15} strokeWidth={1.4} />
                See what we solve
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="arc-band" aria-label="Editorial introduction">
        <div className="arc-band-visual" aria-hidden="true" />
        <div className="arc-band-content">
          <Reveal>
            <p className="arc-band-title" data-testid="text-band-statement">
              Build the operating logic before the next big moment.
            </p>
            <SectionCta href="#method">See how ARC works</SectionCta>
          </Reveal>
          <Reveal delay={1}>
            <p className="arc-band-meta">A visual study in shared rights, considered risk and the lines that hold a system together.</p>
          </Reveal>
        </div>
      </section>

      <section className="arc-section" id="practice" aria-labelledby="practice-title">
        <Reveal>
          <SectionHead index="01">
            When the opportunity is moving fast, <span className="accent">clarity</span> cannot wait.
          </SectionHead>
          <p className="arc-intro-copy" id="practice-title" data-testid="text-practice-intro">
            From league setup to partner negotiations, ARC gives decision-makers a precise view of what needs to be true — legally, commercially and operationally — before they move.
          </p>
        </Reveal>

        <div className="arc-practice-grid">
          <Reveal><PracticeCard index="01" accent="SET UP" title="League & franchise structures" copy="Shape the framework for new competitions, franchises, ownership and participation." /></Reveal>
          <Reveal delay={1}><PracticeCard index="02" accent="ALLOCATE" title="Rights & revenue architecture" copy="Make rights allocation, revenue structures and commercial value legible to every side." /></Reveal>
          <Reveal delay={2}><PracticeCard index="03" accent="AGREE" title="Media deals & contracts" copy="Turn complex media, sponsorship and partner terms into agreements built to perform." /></Reveal>
          <Reveal delay={3}><PracticeCard index="04" accent="PROTECT" title="Compliance & governance" copy="Design governance that protects trust, supports accountability and keeps decisions moving." /></Reveal>
        </div>
        <Reveal>
          <SectionCta href="#contact">View more services</SectionCta>
        </Reveal>
      </section>

      <section className="arc-section" id="method" aria-labelledby="method-title">
        <div className="arc-split">
          <Reveal>
            <div className="arc-section-head">
              <h2 className="arc-section-title" id="method-title">One table. The <span className="accent">full picture.</span></h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="arc-split-copy">
              <p>ARC sits where business intent, regulatory detail and stakeholder reality meet. The work is rigorous without becoming abstract.</p>
              <p>We help the people accountable for the outcome see the trade-offs early, align the room and leave with a path that can be put into practice.</p>
              <div className="arc-rule-list" aria-label="ARC principles">
                <div className="arc-rule-item"><span>01</span><span>Translate complexity into decisions</span><Check size={15} strokeWidth={1.4} /></div>
                <div className="arc-rule-item"><span>02</span><span>Keep commercial and legal logic connected</span><Check size={15} strokeWidth={1.4} /></div>
                <div className="arc-rule-item"><span>03</span><span>Make confidence part of the deliverable</span><Check size={15} strokeWidth={1.4} /></div>
              </div>
              <SectionCta href="#confidence">Explore the working model</SectionCta>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="arc-decision" id="confidence" aria-labelledby="confidence-title">
        <Reveal>
          <div className="arc-section-head">
            <h2 className="arc-section-title" id="confidence-title">A better answer starts with the <span className="accent">right question.</span></h2>
          </div>
        </Reveal>
        <div className="arc-steps">
          <Reveal><article className="arc-step"><span className="arc-step-number">01 / FRAME</span><div><h3>What are we actually building?</h3><p>We establish the brief, the stakeholders and the decisions underneath the headline.</p></div></article></Reveal>
          <Reveal delay={1}><article className="arc-step"><span className="arc-step-number">02 / TEST</span><div><h3>Where could it break?</h3><p>We examine structure, rights, contracts, compliance and governance as one connected system.</p></div></article></Reveal>
          <Reveal delay={2}><article className="arc-step"><span className="arc-step-number">03 / MOVE</span><div><h3>What can everyone stand behind?</h3><p>We make the practical route forward clear enough to approve, explain and execute.</p></div></article></Reveal>
        </div>
        <Reveal>
          <SectionCta href="#contact">Talk through your situation</SectionCta>
        </Reveal>
      </section>

      <section className="arc-section arc-proof" aria-labelledby="proof-title">
        <Reveal>
          <SectionHead>
            Expertise that respects both the <span className="accent">detail</span> and the moment.
          </SectionHead>
        </Reveal>
        <div className="arc-proof-grid" id="proof-title">
          <Reveal><article className="arc-proof-item" data-testid="card-proof-sport"><span className="arc-proof-mark">S /</span><h3>Built for the sports ecosystem</h3><p>League organizers, franchises, rights holders, sponsors and the partners around them.</p></article></Reveal>
          <Reveal delay={1}><article className="arc-proof-item" data-testid="card-proof-media"><span className="arc-proof-mark">M /</span><h3>Fluent in media reality</h3><p>Rights allocation, broadcast relationships and commercial terms considered together.</p></article></Reveal>
          <Reveal delay={2}><article className="arc-proof-item" data-testid="card-proof-governance"><span className="arc-proof-mark">A /</span><h3>Accountable by design</h3><p>Governance, compliance and dispute readiness that strengthens partner confidence.</p></article></Reveal>
        </div>
        <Reveal>
          <SectionCta href="#contact">Start with the right question</SectionCta>
        </Reveal>
      </section>

      <section className="arc-section arc-case-studies" id="case-studies" aria-labelledby="case-studies-title">
        <Reveal>
          <SectionHead index="02">
            Proof in the moments where <span className="accent">structure changes the outcome.</span>
          </SectionHead>
        </Reveal>
        <div className="arc-case-grid" id="case-studies-title">
          <Reveal>
            <article className="arc-case-card" data-testid="card-case-league">
              <div className="arc-case-top"><span>01</span><span>League / Structure</span></div>
              <div>
                <h3>Building a competition that could scale</h3>
                <p>A new league needed the ownership, participation and governance model to match its ambition before the first season began.</p>
              </div>
              <a className="arc-text-link" href="#contact">Discuss a similar brief <ArrowUpRight size={16} strokeWidth={1.3} /></a>
            </article>
          </Reveal>
          <Reveal delay={1}>
            <article className="arc-case-card arc-case-card-dark" data-testid="card-case-rights">
              <div className="arc-case-top"><span>02</span><span>Media / Rights</span></div>
              <div>
                <h3>Making a rights ecosystem legible</h3>
                <p>Multiple partners, territories and commercial priorities became a rights architecture people could negotiate, explain and operate.</p>
              </div>
              <a className="arc-text-link" href="#contact">Discuss a similar brief <ArrowUpRight size={16} strokeWidth={1.3} /></a>
            </article>
          </Reveal>
          <Reveal delay={2}>
            <article className="arc-case-card arc-case-card-green" data-testid="card-case-governance">
              <div className="arc-case-top"><span>03</span><span>Governance / Trust</span></div>
              <div>
                <h3>Turning scrutiny into confidence</h3>
                <p>Clear decision rights and dispute readiness gave a high-stakes partnership the confidence to move without losing control.</p>
              </div>
              <a className="arc-text-link" href="#contact">Discuss a similar brief <ArrowUpRight size={16} strokeWidth={1.3} /></a>
            </article>
          </Reveal>
        </div>
        <Reveal>
          <SectionCta href="#contact">Explore a case with ARC</SectionCta>
        </Reveal>
      </section>

      <section className="arc-section arc-insights" id="insights" aria-labelledby="insights-title">
        <Reveal>
          <div className="arc-section-head">
            <h2 className="arc-section-title" id="insights-title">The thinking behind the <span className="accent">next move.</span></h2>
          </div>
        </Reveal>
        <div className="arc-insight-list">
          <Reveal>
            <article className="arc-insight-item" data-testid="card-insight-operating-model">
              <div className="arc-insight-meta"><span>ARC / INSIGHT</span><span>01</span></div>
              <h3>Why the operating model comes before the rights deal</h3>
              <p>The questions to ask before the headline opportunity makes the underlying structure harder to change.</p>
              <a className="arc-text-link" href="#contact">Read the point of view <ArrowUpRight size={16} strokeWidth={1.3} /></a>
            </article>
          </Reveal>
          <Reveal delay={1}>
            <article className="arc-insight-item" data-testid="card-insight-allocation">
              <div className="arc-insight-meta"><span>ARC / INSIGHT</span><span>02</span></div>
              <h3>The hidden cost of unclear rights allocation</h3>
              <p>Where ambiguity travels through commercial conversations, partner relationships and the decisions that follow.</p>
              <a className="arc-text-link" href="#contact">Read the point of view <ArrowUpRight size={16} strokeWidth={1.3} /></a>
            </article>
          </Reveal>
          <Reveal delay={2}>
            <article className="arc-insight-item" data-testid="card-insight-governance">
              <div className="arc-insight-meta"><span>ARC / INSIGHT</span><span>03</span></div>
              <h3>Governance that keeps ambition moving</h3>
              <p>Good governance is not a brake. It is the shared language that lets responsible people make faster decisions.</p>
              <a className="arc-text-link" href="#contact">Read the point of view <ArrowUpRight size={16} strokeWidth={1.3} /></a>
            </article>
          </Reveal>
        </div>
        <Reveal>
          <SectionCta href="#contact">Start an insight conversation</SectionCta>
        </Reveal>
      </section>

      <section className="arc-contact" id="contact" aria-labelledby="contact-title">
        <Reveal>
          <div className="arc-contact-inner">
            <div>
              <h2 id="contact-title">Bring us the <em>hard part.</em></h2>
            </div>
            <div className="arc-contact-action">
              <a className="arc-cta" href="mailto:arc@itwuniverse.com?subject=ARC%20conversation" data-testid="link-contact">
                Start a conversation <ArrowRight size={17} strokeWidth={1.4} />
              </a>
              <span className="arc-contact-email">arc@itwuniverse.com</span>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="arc-footer">
        <div className="arc-footer-col">
          <span className="arc-footer-label">ITW ARC</span>
          <span>Advisory, regulatory &amp; compliance<br />within ITW Universe.</span>
        </div>
        <div className="arc-footer-col">
          <span className="arc-footer-label">Explore</span>
          <a href="#practice" data-testid="link-footer-practice">What ARC solves</a>
          <a href="#method" data-testid="link-footer-method">How we work</a>
          <a href="#confidence" data-testid="link-footer-confidence">Why ARC</a>
          <a href="#case-studies" data-testid="link-footer-case-studies">Case studies</a>
          <a href="#insights" data-testid="link-footer-insights">Insights</a>
        </div>
        <div className="arc-footer-col">
          <span className="arc-footer-label">For the people responsible</span>
          <span>League organizers · rights holders<br />Franchises · sponsors · broadcasters<br />In-house counsel · procurement</span>
        </div>
        <div className="arc-footer-bottom">
          <span>© 2025 ITW ARC / ITW UNIVERSE</span>
          <a href="#top" data-testid="link-footer-top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={AppHome} />
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