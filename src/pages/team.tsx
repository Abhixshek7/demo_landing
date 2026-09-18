import { useState } from 'react';
import {
  Header,
  Footer,
  Reveal,
  SectionCta,
  useScrollReveal,
  useBodyScrollLock,
} from '@/components/layout';
import { TeamAccordion, type TeamMember } from '@/components/ui/team-accordion';

const TEAM: TeamMember[] = [
  {
    name: 'Joylashmi Das',
    speciality: 'Sports, Media & Entertainment Law · High-value Deals',
    summary: 'Advises on high-value transactions across sports, media and entertainment — structuring deals built to hold up under pressure.',
    photo: '/team/joylashmi-das.jpg',
  },
  {
    name: 'Thomas Joseph',
    speciality: 'Intellectual Property · Media Rights · Regulatory Advisory',
    summary: 'Guides clients through IP protection, media rights and regulatory complexity across the sports and entertainment landscape.',
    photo: '/team/thomas-joseph.jpg',
  },
  {
    name: 'Ankit Suri',
    speciality: 'Corporate & Commercial Law · Business of Sport',
    summary: 'Brings corporate and commercial rigor to the business of sport, from deal structuring through to execution.',
    photo: '/team/ankit-suri.jpg',
  },
  {
    name: 'Preet Kamal Chawla',
    speciality: 'Commercial Contracts · Taxation · Compliance',
    summary: 'Handles commercial contracts, taxation and compliance so agreements hold up long after signing.',
    photo: '/team/preet-kamal-chawla.jpg',
  },
  {
    name: 'Amogh Sushilchandra',
    speciality: 'Sports Law · Technology · Rights Acquisition',
    summary: 'Works at the intersection of sports law and technology, with a focus on rights acquisition strategy.',
    photo: '/team/amogh-sushilchandra.jpg',
  },
  {
    name: 'Mutaman Amir',
    speciality: 'Contract Negotiation · IP · Cross-border Commercial',
    summary: 'Negotiates contracts and IP matters across borders, keeping commercial terms clear and enforceable.',
    photo: '/team/mutaman-amir.jpg',
  },
  {
    name: 'Pratyush Saxena',
    speciality: 'Company Law · Sports & Entertainment Law',
    summary: 'Combines company law expertise with a focus on sports and entertainment engagements.',
    photo: '/team/pratyush-saxena.jpg',
  },
  {
    name: 'Siddhanth Muralidharan',
    speciality: 'International Sports Law · Tender Processes',
    summary: 'Specializes in international sports law and the tender processes that shape franchise selection.',
    photo: '/team/siddhanth-muralidharan.jpg',
  },
  {
    name: 'Sadiqua Alam',
    speciality: 'Competition · Trade & Company Law',
    summary: 'Advises on competition, trade and company law matters across commercial disputes.',
    photo: '/team/sadiqua-alam.jpg',
  },
  {
    name: 'Shalini Pachaiyappan',
    speciality: 'Litigation · Dispute Resolution',
    summary: 'Leads litigation and dispute resolution, guiding clients through contested matters end to end.',
    photo: '/team/shalini-pachaiyappan.jpg',
  },
];

const TEAM_ROWS = [TEAM.slice(0, 3), TEAM.slice(3, 7), TEAM.slice(7, 10)];

export default function TeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollReveal();
  useBodyScrollLock(menuOpen);

  return (
    <main className="arc-page" id="top">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="arc-section" aria-labelledby="team-title">
        <Reveal>
          <div className="arc-section-head">
            <h1 className="arc-section-title" id="team-title">
              The people behind <span className="accent">every answer.</span>
            </h1>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <p className="arc-intro-copy">
            Specialist counsel across sports, media and entertainment law — the team leagues,
            franchises and rights holders bring their hardest questions to.
          </p>
        </Reveal>
      </section>

      <section className="arc-section" style={{ paddingTop: 0 }} aria-label="Team members">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {TEAM_ROWS.map((row, index) => (
            <Reveal key={row.map((member) => member.name).join('-')} delay={Math.min(index, 2)}>
              <TeamAccordion members={row} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="arc-contact" aria-labelledby="team-contact-title">
        <Reveal>
          <div className="arc-contact-head">
            <h2 id="team-contact-title">Want to work with the team?</h2>
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
