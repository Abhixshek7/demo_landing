import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Folder } from '@/components/ui/folder';

export type FolderService = {
  id: string;
  title: string;
  description: string;
};

// ARC's practice areas — edit here to change what the folder shows.
const DEFAULT_SERVICES: FolderService[] = [
  {
    id: '01',
    title: 'EOI, ITT & franchise selection',
    description:
      'We design and run the tender process — from expression-of-interest documents to evaluation frameworks — so leagues attract the right franchises and partners.',
  },
  {
    id: '02',
    title: 'Franchise & partnership agreements',
    description:
      'We draft and negotiate the agreements that define how leagues and team owners work together — rights, responsibilities and revenue share.',
  },
  {
    id: '03',
    title: 'Broadcast & media rights deals',
    description:
      'We structure television, digital and OTT media-rights deals — covering commercial terms, territorial rights and distribution obligations.',
  },
  {
    id: '04',
    title: 'Production & vendor agreements',
    description:
      'We handle contracts with content production teams, event vendors and service providers — the operational agreements that ensure delivery and compliance.',
  },
  {
    id: '05',
    title: 'Compliance, governance & dispute advisory',
    description:
      'We build the governance systems, regulatory compliance frameworks and dispute-readiness protocols that let leagues operate with confidence.',
  },
  {
    id: '06',
    title: 'Strategic legal advisory',
    description:
      'Beyond specific transactions, we serve as ongoing legal counsel — from commercial strategy and rights structuring to stakeholder negotiations.',
  },
];

export function ServicesFolder({
  services = DEFAULT_SERVICES,
  heading = 'Services',
}: {
  services?: FolderService[];
  heading?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % services.length);

  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-end">
          {/* Left column: service list */}
          <div className="lg:col-span-5 flex flex-col justify-start order-1">
            <h2
              className="text-balance text-foreground mb-8 lg:mb-12"
              style={{
                fontSize: 'clamp(34px, 3.6vw, 58px)',
                lineHeight: 0.98,
                letterSpacing: '-0.05em',
                fontWeight: 500,
              }}
            >
              {heading}
            </h2>

            <div className="hidden lg:flex flex-col space-y-0">
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={cn(
                      'group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-300 border-t border-border/50 first:border-0',
                      isActive ? 'text-foreground' : 'text-muted-foreground/60 hover:text-foreground',
                    )}
                    data-testid={`button-service-tab-${service.id}`}
                  >
                    <div
                      className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-muted transition-colors duration-300"
                      style={isActive ? { backgroundColor: 'var(--color-teal)' } : undefined}
                    />
                    <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">
                      /{service.id}
                    </span>
                    <span
                      className={cn(
                        'text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-300 flex-1',
                        isActive ? 'text-foreground' : '',
                      )}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right column: open folder with the active service pulled out as a paper */}
          <div className="lg:col-span-7 order-2">
            <div className="services-folder-wrap">
              <Folder color="#075f4e" className="services-folder-shell">
                <div className="paper-stack-deco paper-stack-deco-1" />
                <div className="paper-stack-deco paper-stack-deco-2" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    className="paper paper-active-slot"
                    style={{ transformOrigin: 'bottom center' }}
                    initial={{ y: '10%', opacity: 0, scaleY: 0.32 }}
                    animate={{ y: '-58%', opacity: 1, scaleY: 1 }}
                    exit={{ y: '10%', opacity: 0, scaleY: 0.32 }}
                    transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <span className="paper-index">/{active.id}</span>
                    <span className="paper-title">{active.title}</span>
                    <span className="paper-description">{active.description}</span>
                    <a
                      className="arc-text-link paper-know-more"
                      href={`/services/${active.id}`}
                      data-testid={`link-service-know-more-${active.id}`}
                    >
                      Know more <ArrowUpRight size={15} strokeWidth={1.4} />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </Folder>
            </div>

            {/* Mobile: arrow nav drives the same paper-swap animation as hovering the list */}
            <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous service"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-transform active:scale-90"
                style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-bone)' }}
              >
                <ArrowLeft size={18} strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next service"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-transform active:scale-90"
                style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-bone)' }}
              >
                <ArrowRight size={18} strokeWidth={1.6} />
              </button>
            </div>
            <p className="services-folder-hint block lg:hidden">
              Click on the arrows to view the other services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesFolder;
