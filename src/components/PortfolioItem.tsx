import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { Season } from '@/data/seasons';

interface PortfolioItemProps {
  season: Season;
  index: number;
}

const PortfolioItem = ({ season, index }: PortfolioItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link to={`/season/${season.id}`} className="group block space-y-4">
        <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center p-10 relative overflow-hidden shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
          <img
            src={season.logo}
            alt={season.title}
            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/[0.02] transition-colors duration-300" />
        </div>
        <div className="flex justify-between items-start px-1">
          <div>
            <h3 className="text-sm font-semibold text-foreground">{season.shortTitle}</h3>
            <p className="text-xs text-muted-foreground tabular-nums">{season.year}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-border group-hover:text-foreground transition-colors duration-300" />
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioItem;
