import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, ChevronDown, Menu, X, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import { SERVICES } from '@/data/services';

export type LinkItem = { label: string; href: string; children?: LinkItem[] };

export function useScrollReveal() {
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
}

export function useHeaderScroll(forceVisible: boolean) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setScrolled(y > 4);

      if (y < 80) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { hidden: forceVisible ? false : hidden, scrolled };
}

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [locked]);
}

export const navigation: LinkItem[] = [
  {
    label: 'Services',
    href: '/#practice',
    children: SERVICES.map((service) => ({ label: service.navLabel, href: `/services/${service.id}` })),
  },
  { label: 'About Us', href: '/about-us' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Our team', href: '/our-team' },
  { label: 'Start a conversation', href: '/contact' },
];

export function LogoLockup({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="arc-lockup" data-testid="brand-lockup">
      <img
        src="/logo-arc.png"
        alt="ITW ARC"
        className={`arc-logo-img${inverted ? ' arc-logo-img-inverted' : ''}`}
      />
    
    </div>
  );
}

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  return (
    <div className={`arc-menu-overlay ${open ? 'is-open' : ''}`} id="arc-navigation" aria-hidden={!open}>
      <div className="arc-menu-top">
        <LogoLockup inverted />
        <button className="arc-menu-close" onClick={onClose} aria-label="Close menu" data-testid="button-close-menu">
          <X size={25} strokeWidth={1.4} />
        </button>
      </div>
      <nav className="arc-menu-links" aria-label="Main navigation">
        {navigation.map((item, index) => {
          if (!item.children?.length) {
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                data-testid={`link-menu-${index}`}
              >
                {item.label}
              </a>
            );
          }

          const isExpanded = expanded === item.label;
          return (
            <div key={item.label} className="arc-menu-item">
              <button
                type="button"
                className={`arc-menu-dropdown-toggle ${isExpanded ? 'is-open' : ''}`}
                onClick={() => setExpanded(isExpanded ? null : item.label)}
                aria-expanded={isExpanded}
                aria-controls={`arc-menu-dropdown-${index}`}
                data-testid={`button-menu-dropdown-${index}`}
              >
                {item.label}
                <ChevronDown size={22} strokeWidth={1.5} className="arc-menu-dropdown-chevron" />
              </button>
              <div
                className={`arc-menu-dropdown-list ${isExpanded ? 'is-open' : ''}`}
                id={`arc-menu-dropdown-${index}`}
              >
                {item.children.map((child, childIndex) => (
                  <a
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    data-testid={`link-menu-dropdown-${index}-${childIndex}`}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
      <div className="arc-menu-footer">
        <span>FOR SPORTS · MEDIA · ENTERTAINMENT</span>
        <span>ARC / 01 — 2025</span>
      </div>
    </div>
  );
}

export function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  const { hidden, scrolled } = useHeaderScroll(menuOpen);

  return (
    <>
      <header className={`arc-header ${hidden ? 'is-hidden' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="/#top" aria-label="Back to top" data-testid="link-home">
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

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>{children}</div>;
}

export function SectionHead({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <div className={`arc-section-head ${index ? 'has-index' : ''}`}>
      {index ? <span className="arc-section-index" data-testid={`text-section-index-${index}`}>{index}</span> : null}
      <h2 className="arc-section-title">{children}</h2>
    </div>
  );
}

export function SectionCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="arc-section-cta" href={href}>
      {children}
      <ArrowRight size={17} strokeWidth={1.4} />
    </a>
  );
}

export function Footer() {
  const servicesNav = navigation.find((item) => item.label === 'Services');
  const pageLinks = navigation.filter((item) => item.label !== 'Services');

  return (
    <footer className="arc-footer">
      <div className="arc-footer-brand">
        <img src="/logo-arc.png" alt="ITW ARC" className="arc-logo-img arc-logo-img-inverted arc-footer-logo" />
        <span>The legal advisory &amp; compliance<br />for sports, media and entertainment.</span>
      </div>
      <div className="arc-footer-grid">
        <div className="arc-footer-col">
          <span className="arc-footer-label">Services</span>
          {servicesNav?.children?.map((service, index) => (
            <a key={service.href} href={service.href} data-testid={`link-footer-service-${index}`}>
              {service.label}
            </a>
          ))}
        </div>
        <div className="arc-footer-col">
          <span className="arc-footer-label">Pages</span>
          {pageLinks.map((item, index) => (
            <a key={item.href} href={item.href} data-testid={`link-footer-page-${index}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="arc-footer-col">
          <span className="arc-footer-label">Connect</span>
          <div className="arc-footer-social">
            <a href="#" aria-label="LinkedIn" data-testid="link-footer-linkedin"><Linkedin size={18} strokeWidth={1.6} /></a>
            <a href="#" aria-label="Instagram" data-testid="link-footer-instagram"><Instagram size={18} strokeWidth={1.6} /></a>
            <a href="#" aria-label="YouTube" data-testid="link-footer-youtube"><Youtube size={18} strokeWidth={1.6} /></a>
            <a href="#" aria-label="X (Twitter)" data-testid="link-footer-twitter"><Twitter size={18} strokeWidth={1.6} /></a>
          </div>
        </div>
      </div>
      <div className="arc-footer-bottom">
        <span>© 2025 ITW ARC / ITW UNIVERSE</span>
        {/* <a href="/#top" data-testid="link-footer-top">Back to top ↑</a> */}
      </div>
    </footer>
  );
}
