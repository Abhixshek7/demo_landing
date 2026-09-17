import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface HorizontalStackStep {
  index: string;
  title: string;
  description: string;
  image: string;
}

export interface HorizontalStackProps {
  steps: HorizontalStackStep[];
  /** Scroll distance per step, as a multiple of the viewport height. */
  stepHeight?: number;
}

export function HorizontalStack({ steps, stepHeight = 100 }: HorizontalStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(steps.length - 1) * 100}vw`]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${steps.length * stepHeight}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div className="flex h-full" style={{ x }}>
          {steps.map((step) => (
            <article
              key={step.index}
              className="flex h-full w-screen shrink-0 flex-col justify-center gap-8 px-6 md:flex-row md:items-center md:gap-16 md:px-16 lg:px-24"
              data-testid={`card-horizontal-step-${step.index}`}
            >
              <div className="flex max-w-md flex-col md:w-[38%]">
                <span className="font-mono text-[12px] tracking-[0.04em]" style={{ color: 'var(--step-accent, var(--color-teal))' }}>
                  {step.index}
                </span>
                <h3 className="mt-4 text-[38px] font-medium leading-[1.02] tracking-[-0.05em] md:mt-6 md:text-[56px]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[420px] text-[18px] leading-[1.55] md:text-[21px]" style={{ color: 'var(--step-desc, var(--color-graphite))' }}>
                  {step.description}
                </p>
              </div>

              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[24px] md:w-[54%]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalStack;
