import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type VerticalTabService = {
  id: string;
  title: string;
  description: string;
  image: string;
};

// ARC's practice areas — edit here to change what the tab list shows.
const DEFAULT_SERVICES: VerticalTabService[] = [
  {
    id: '01',
    title: 'EOI, ITT & franchise selection',
    description:
      'We design and run the tender process — from expression-of-interest documents to evaluation frameworks — so leagues attract the right franchises and partners.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '02',
    title: 'Franchise & partnership agreements',
    description:
      'We draft and negotiate the agreements that define how leagues and team owners work together — rights, responsibilities and revenue share.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '03',
    title: 'Broadcast & media rights deals',
    description:
      'We structure television, digital and OTT media-rights deals — covering commercial terms, territorial rights and distribution obligations.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '04',
    title: 'Production & vendor agreements',
    description:
      'We handle contracts with content production teams, event vendors and service providers — the operational agreements that ensure delivery and compliance.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '05',
    title: 'Compliance, governance & dispute advisory',
    description:
      'We build the governance systems, regulatory compliance frameworks and dispute-readiness protocols that let leagues operate with confidence.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: '06',
    title: 'Strategic legal advisory',
    description:
      'Beyond specific transactions, we serve as ongoing legal counsel — from commercial strategy and rights structuring to stakeholder negotiations.',
    image:'/howWeWork/d',
  },
];

export function VerticalTabs({
  services = DEFAULT_SERVICES,
  eyebrow = 'WHAT WE DO',
  heading = 'Services',
}: {
  services?: VerticalTabService[];
  eyebrow?: string;
  heading?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const active = services[activeIndex];

  return (
    <section className="w-full bg-background pb-8 md:pb-16 lg:pb-24">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-start order-1">
            <div className="space-y-3 mb-8 lg:mb-12">
              <h2
                className="text-balance text-foreground"
                style={{
                  fontSize: 'clamp(34px, 3.6vw, 58px)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.05em',
                  fontWeight: 500,
                }}
              >
                {heading}
              </h2>
              <span
                className="block text-[11px] uppercase tracking-[0.2em]"
                style={{ color: 'var(--color-teal)', fontFamily: 'var(--app-font-mono)' }}
              >
                
              </span>
            </div>

            <div className="hidden lg:flex flex-col space-y-0">
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleSelect(index)}
                    onMouseEnter={() => handleSelect(index)}
                    onFocus={() => handleSelect(index)}
                    aria-pressed={isActive}
                    className={cn(
                      'group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-300 border-t border-border/50 first:border-0',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground/60 hover:text-foreground'
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

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={cn(
                          'text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight transition-colors duration-300',
                          isActive ? 'text-foreground' : ''
                        )}
                      >
                        {service.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image gallery */}
          <div className="lg:col-span-7 flex flex-col justify-start order-2">
            <div className="relative group/gallery">
              <div className="relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-muted/30 border border-border/40">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: 'spring', stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 m-0! p-0! block"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/85 via-black/40 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10 backdrop-blur-md bg-black/10">
                      <span className="text-white/60 text-[10px] md:text-xs font-medium tabular-nums uppercase tracking-[0.2em]">
                        /{active.id}
                      </span>
                      <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-tight mt-2">
                        {active.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed mt-2 max-w-md">
                        {active.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex lg:hidden justify-end gap-3 mt-5 md:mt-6">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:opacity-85 transition-all active:scale-90"
                  style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-bone)' }}
                  aria-label="Previous service"
                  data-testid="button-service-prev"
                >
                  <ArrowLeft size={18} strokeWidth={1.6} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:opacity-85 transition-all active:scale-90"
                  style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-bone)' }}
                  aria-label="Next service"
                  data-testid="button-service-next"
                >
                  <ArrowRight size={18} strokeWidth={1.6} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
