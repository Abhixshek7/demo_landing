export type CaseStudy = {
  index: string;
  tag: string;
  name: string;
  date: string;
  description: string;
  services: string[];
  image: string;
};

export const CASE_STUDIES: CaseStudy[] = [
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

export const getCaseStudyByIndex = (index: string) => CASE_STUDIES.find((cs) => cs.index === index);

/** Maps each service id (data/services.ts) to the case study that best evidences it. */
export const SERVICE_PROOF_MAP: Record<string, string> = {
  '01': '04', // EOI, ITT & Franchise Selection -> Building a league from inception (RFP, evaluation, franchise onboarding)
  '02': '03', // Franchise & Partnership Agreements -> Sponsorship architecture for TN Premier League (partnership contracting)
  '03': '02', // Broadcast & Media Rights Deals -> Global rights commercialization for WCL (TV/digital/OTT)
  '04': '01', // Production & Vendor Agreements -> Tata IPL 2024 Opening Ceremony (artist/vendor/production contracts)
  '05': '05', // Compliance, Governance & Dispute Advisory -> Compliance-ready league structure for CCPL
  '06': '06', // Strategic Legal Advisory -> Franchise-level commercial strategy for Mysore Warriors
};

export const getProofForService = (serviceId: string) => {
  const caseStudyIndex = SERVICE_PROOF_MAP[serviceId];
  return caseStudyIndex ? getCaseStudyByIndex(caseStudyIndex) : undefined;
};
