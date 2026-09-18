export type ServiceWorkItem = {
  title: string;
  description: string;
};

export type ServiceContent = {
  id: string;
  eyebrow: string;
  navLabel: string;
  title: string;
  positioning: string;
  whatWeDo: ServiceWorkItem[];
  whoThisIsFor?: string;
  ctaLabel: string;
};

export const SERVICES: ServiceContent[] = [
  {
    id: '01',
    eyebrow: '01 / SELECT',
    navLabel: 'EOI, ITT & Franchise Selection',
    title: 'EOI, ITT & Franchise Selection',
    positioning:
      "A league's long-term strength is decided before the first match — in the quality of the franchises and partners it selects. We design and run the full tender process so that selection decisions are structured, defensible and commercially sound.",
    whatWeDo: [
      {
        title: 'Expression-of-interest design',
        description:
          'We draft the EOI documentation that defines scope, eligibility criteria and evaluation parameters.',
      },
      {
        title: 'Invitation-to-tender frameworks',
        description:
          'We structure the ITT process end to end: commercial terms, submission requirements, comparative evaluation models and scoring rubrics .',
      },
      {
        title: 'Evaluation & selection advisory',
        description:
          'We build the decision frameworks that let selection committees assess bids on commercial merit, operational capability and long-term alignment.',
      },
      {
        title: 'Franchise onboarding documentation',
        description:
          'Once selection is complete, we structure the onboarding ecosystem: mandate documentation, rights allocation templates and the legal architecture.',
      },
    ],
    ctaLabel: 'Discuss your requirements',
  },
  {
    id: '02',
    eyebrow: '02 / STRUCTURE',
    navLabel: 'Franchise & Partnership Agreements',
    title: 'Franchise & Partnership Agreements',
    positioning:
      "The agreement between a league and its franchises is the foundation everything else is built on — revenue share, IP usage, governance rights, operational obligations. We draft and negotiate agreements that are clear enough to execute and durable enough to survive the pressures of competition.",
    whatWeDo: [
      {
        title: 'Franchise agreements',
        description:
          'We structure the core league & franchise relationship: ownership rights, revenue-sharing mechanisms, IP licensing, territorial rights and the obligations.',
      },
      {
        title: 'Partnership & joint venture agreements',
        description:
          'We draft commercial partnership agreements that define scope, deliverables, exclusivity, termination and dispute resolution.',
      },
      {
        title: 'Revenue share & rights allocation',
        description:
          'We design the financial architecture that governs stakeholders & broadcast revenue, sponsorship income, merchandise rights and ancillary commercial streams.',
      },
      {
        title: 'IP & brand licensing',
        description:
          'We structure intellectual property agreements that let partners use league and franchise brands within clear boundaries.',
      },
    ],
    ctaLabel: 'Discuss your requirements',
  },
  {
    id: '03',
    eyebrow: '03 / DISTRIBUTE',
    navLabel: 'Broadcast & Media Rights Deals',
    title: 'Broadcast & Media Rights Deals',
    positioning:
      'Media rights are where the economics of sport are decided. Television, digital, OTT — each platform carries its own commercial logic, territorial complexity and regulatory requirements. We structure deals that protect revenue across every distribution channel.',
    whatWeDo: [
      {
        title: 'Television & linear broadcast rights',
        description:
          'We negotiate and structure linear broadcast agreements & territorial rights, exclusivity windows, commercial terms and the production obligations.',
      },
      {
        title: 'Digital & OTT rights structuring',
        description:
          'We build the legal frameworks for digital distribution: platform-specific licensing, geo-restrictions, sub-licensing provisions and the revenue models governing streaming rights.',
      },
      {
        title: 'Rights commercialization strategy',
        description:
          'We work across the full rights portfolio bundling, unbundling and sequencing rights packages to maximize commercial value and maintaining contractual coherence across buyers.',
      },
      {
        title: 'Production & broadcast support agreements',
        description:
          'We handle the operational contracts behind the broadcast: production house agreements, technical service providers, on-ground broadcast infrastructure and signal distribution.',
      },
    ],
    whoThisIsFor:
      'Broadcasters acquiring sports rights, leagues monetizing their media portfolio, OTT platforms negotiating content deals, production companies structuring delivery agreements.',
    ctaLabel: 'Discuss your requirements',
  },
  {
    id: '04',
    eyebrow: '04 / DELIVER',
    navLabel: 'Production & Vendor Agreements',
    title: 'Production & Vendor Agreements',
    positioning:
      "Behind every live event, broadcast and league operation is a network of vendors, production teams and service providers. We handle the contracts that govern delivery, quality and accountability — so the operational side runs without legal ambiguity.",
    whatWeDo: [
      {
        title: 'Event production contracts',
        description:
          "We structure agreements with production companies covering scope, deliverables, timelines, liability and the performance standards.",
      },
      {
        title: 'Vendor & service provider agreements',
        description:
          'We draft and negotiate contracts with technical vendors, logistics providers, hospitality operators and specialist suppliers.',
      },
      {
        title: 'Artist & talent engagement contracts',
        description:
          'We handle high-value engagement agreements for performers, presenters and creative talent — covering fees, rider obligations, IP assignments, cancellation provisions and compliance requirements.',
      },
      {
        title: 'Multi-vendor coordination frameworks',
        description:
          'For large-scale events with miltiple suppliers, we build the contracting architecture that keeps obligations clear, timelines aligned and accountability traceable across every vendor.',
      },
    ],
    ctaLabel: 'Discuss your production requirements',
  },
  {
    id: '05',
    eyebrow: '05 / PROTECT',
    navLabel: 'Compliance, Governance & Dispute Advisory',
    title: 'Compliance, Governance & Dispute Advisory',
    positioning:
      "Growth without governance is a liability. We build the compliance systems, governance frameworks and dispute-readiness protocols that let leagues, franchises and rights holders operate at scale — without the legal foundation falling behind the ambition.",
    whatWeDo: [
      {
        title: 'Governance framework design',
        description:
          'We design the decision-making structures, board protocols and authority matrices that define how leagues and organizations govern themselves.',
      },
      {
        title: 'Regulatory compliance systems',
        description:
          'We build compliance architectures tailored to sports and media regulation: licensing requirements, anti-corruption protocols, financial reporting standards and documentations.',
      },
      {
        title: 'Dispute-readiness & resolution',
        description:
          'We design the protocols that prepare organizations for disputes before they arise : escalation frameworks, arbitration provisions, evidence-preservation procedures and settlement architectures.',
      },
      {
        title: 'Policy & code drafting',
        description:
          'We write the internal policies, codes of conduct, anti-doping compliance documentation, operational behavioural and procedural standards across the organization.',
      },
    ],
    ctaLabel: 'Discuss your requirements',
  },
  {
    id: '06',
    eyebrow: '06 / ADVISE',
    navLabel: 'Strategic Legal Advisory',
    title: 'Strategic Legal Advisory',
    positioning:
      'Not every engagement is a transaction. Some organizations need a legal partner who understands the industry well enough to sit at the strategy table — advising on commercial direction, stakeholder negotiations and the structural decisions that shape what comes next.',
    whatWeDo: [
      {
        title: 'Ongoing legal counsel',
        description:
          'We serve as retained legal advisors available across commercial, regulatory and operational matters.',
      },
      {
        title: 'Commercial strategy & structuring',
        description:
          'We advise on the legal aspect of commercial decisions: market entry, new revenue streams, partnership models and the structural options.',
      },
      {
        title: 'Stakeholder & board advisory',
        description:
          'We support organizations through stakeholder negotiations, board-level decisions and investor conversations.',
      },
      {
        title: 'Rights structuring & portfolio advisory',
        description:
          'We help rights holders understand, organize and optimize their rights portfolio, identifying gaps, overlaps and undervalued assets across broadcast, sponsorship and commercial rights.',
      },
    ],
    ctaLabel: 'Start a conversation',
  },
];

export const getServiceById = (id: string) => SERVICES.find((service) => service.id === id);
