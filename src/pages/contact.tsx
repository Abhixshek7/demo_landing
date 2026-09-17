import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import {
  Header,
  Footer,
  Reveal,
  useScrollReveal,
  useBodyScrollLock,
} from '@/components/layout';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollReveal();
  useBodyScrollLock(menuOpen);

  return (
    <main className="arc-page" id="top">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="arc-section contact-page" aria-labelledby="contact-title">
        <div className="contact-grid">
          <Reveal>
            <div className="contact-intro">
              <h1 id="contact-title">Bring us the <em>hard part.</em></h1>
              <p className="contact-subtitle">
                Have a project, partnership or compliance question? Tell us what's on your mind
                and the right person on the team will get back to you.
              </p>

              <ul className="contact-info-list">
                <li>
                  <Mail size={17} strokeWidth={1.5} />
                  <a href="mailto:hello@itwarc.com" data-testid="link-contact-email">hello@itwarc.com</a>
                </li>
                <li>
                  <MapPin size={17} strokeWidth={1.5} />
                  <span>123 Tech Avenue, San Francisco, USA</span>
                </li>
                <li>
                  <Phone size={17} strokeWidth={1.5} />
                  <a href="tel:+14155552671" data-testid="link-contact-phone">+1 (415) 555-2671</a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form className="contact-panel" aria-label="Contact ITW ARC" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  required
                  data-testid="input-contact-name"
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  required
                  data-testid="input-contact-email"
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-org">Organisation</label>
                <input
                  id="contact-org"
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                  placeholder="Enter your organisation"
                  required
                  data-testid="input-contact-organisation"
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-topic">What would you like to discuss?</label>
                <select id="contact-topic" name="topic" required defaultValue="" data-testid="select-contact-topic">
                  <option value="" disabled>Select a topic</option>
                  <option value="eoi-itt">EOI, ITT & franchise selection</option>
                  <option value="franchise-agreements">Franchise & partnership agreements</option>
                  <option value="broadcast-rights">Broadcast & media rights deals</option>
                  <option value="production-vendor">Production & vendor agreements</option>
                  <option value="compliance-governance">Compliance, governance & dispute advisory</option>
                  <option value="general-advisory">General advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here"
                  data-testid="textarea-contact-message"
                />
              </div>
              <button type="submit" className="arc-cta contact-submit" data-testid="button-contact-submit">
                Send message <ArrowRight size={17} strokeWidth={1.4} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
