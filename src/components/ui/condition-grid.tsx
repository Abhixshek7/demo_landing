import { MoveUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface BentoItem {
  id: string;
  title: string;
  des: string;
}

export function ConditionGrid({ items, className }: { items: BentoItem[]; className?: string }) {
  return (
    <div className={cn('grid grid-cols-12 gap-4', className)}>
      {items.map((item, index) => {
        let colSpanClass = 'col-span-12 sm:col-span-6';
        if (index === 0) {
          colSpanClass = 'col-span-12 sm:col-span-5';
        } else if (index === 1) {
          colSpanClass = 'col-span-12 sm:col-span-7';
        } else if (index === items.length - 2) {
          colSpanClass = 'col-span-12 sm:col-span-7';
        } else if (index === items.length - 1) {
          colSpanClass = 'col-span-12 sm:col-span-5';
        }

        return (
          <motion.article
            key={item.id}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
            className={cn('service-bento-card', colSpanClass)}
          >
            <h3 className="service-bento-title">{item.title}</h3>
            <p className="service-bento-desc">{item.des}</p>
            <div className="service-bento-foot">
              <div className="service-bento-arrow">
                <MoveUpRight size={18} strokeWidth={1.8} />
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export default ConditionGrid;
