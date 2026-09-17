import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StackingCardData {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  cta: string;
  href?: string;
  background: string;
  foreground: string;
  accent: string;
}

interface StackingCardProps extends StackingCardData {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function StackingCard({
  i,
  index,
  eyebrow,
  title,
  description,
  image,
  cta,
  href = '/contact',
  background,
  foreground,
  accent,
  progress,
  range,
  targetScale,
}: StackingCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.35, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <motion.div
        style={{
          backgroundColor: background,
          color: foreground,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[15%] mx-auto flex w-[86vw] max-w-[1040px] origin-top flex-col overflow-hidden rounded-[24px] p-8 md:h-[76vh] md:p-12"
        data-testid={`card-stacking-${index}`}
      >
        <div
          className="flex items-center justify-between gap-4 border-b pb-5 font-mono text-[10px] uppercase tracking-[0.06em]"
          style={{ borderColor: `${foreground}26` }}
        >
          <span style={{ color: accent }} className="text-[13px]">
            {index}
          </span>
          <span className="opacity-80">{eyebrow}</span>
        </div>

        <div className="mt-8 flex flex-col gap-8 md:flex-1 md:flex-row md:gap-10">
          <div className="flex flex-col justify-between md:w-[40%]">
            <div>
              <h3 className="mt-4 max-w-[300px] text-[28px] font-medium leading-[1.05] tracking-[-0.05em] md:mt-10 md:text-[31px]">
                {title}
              </h3>
              <p className="mt-3 max-w-[330px] text-[15px] leading-[1.5] md:mt-4 md:text-[17px]">
                {description}
              </p>
            </div>
            <a
              href={href}
              className="group mt-8 inline-flex w-fit items-center gap-[9px] border-b pb-[5px] text-sm transition-colors duration-300"
              style={{ borderColor: 'currentColor' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = accent;
                e.currentTarget.style.borderColor = accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '';
                e.currentTarget.style.borderColor = '';
              }}
            >
              {cta}
              <ArrowUpRight size={16} strokeWidth={1.3} />
            </a>
          </div>

          <div className="relative h-64 overflow-hidden md:h-auto md:w-[60%]">
            <motion.div className="h-full w-full" style={{ scale: imageScale }}>
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export interface StackingCardsProps {
  items: StackingCardData[];
  className?: string;
}

export function StackingCards({ items, className }: StackingCardsProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className={cn('relative', className)}>
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.05;
        return (
          <StackingCard
            key={item.title}
            i={i}
            {...item}
            progress={scrollYProgress}
            range={[i / items.length, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

export default StackingCards;
