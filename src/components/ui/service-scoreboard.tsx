import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ScoreboardItem {
  id: string;
  title: string;
  description: string;
}

export function ServiceScoreboard({ items, className }: { items: ScoreboardItem[]; className?: string }) {
  return (
    <div className={cn('service-board', className)}>
      <div className="service-board-grid">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
            viewport={{ once: true, margin: '-80px' }}
            className="service-board-cell"
          >
            <div className="service-board-cell-top">
              <span className="service-board-index">/{item.id}</span>
              <span className="service-board-dot" aria-hidden="true" />
            </div>
            <h3 className="service-board-label">{item.title}</h3>
            <div className="service-board-readout">
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServiceScoreboard;
