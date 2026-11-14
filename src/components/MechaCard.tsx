import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Mecha } from '@/data/mecha';
import { SEASONS } from '@/data/seasons';

interface MechaCardProps {
  mecha: Mecha;
  index?: number;
  showSeries?: boolean;
}

const MechaCard = ({ mecha, index = 0, showSeries = true }: MechaCardProps) => {
  const [imgError, setImgError] = useState(false);
  const season = SEASONS.find((s) => s.number === mecha.seriesNo);

  return (
    <motion.article
      className="group flex flex-col"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="aspect-square rounded-xl overflow-hidden mb-4 shadow-card bg-foreground relative">
        {imgError ? (
          <div className="w-full h-full flex flex-col justify-between p-6 text-background">
            <span className="text-[11px] font-bold uppercase tracking-widest opacity-60 tabular-nums">
              No.{String(mecha.seriesNo).padStart(2, '0')} · {mecha.year}
            </span>
            <div>
              <p className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">{mecha.nameJa}</p>
              <p className="text-xs uppercase tracking-widest opacity-60 mt-2">Photo coming soon</p>
            </div>
          </div>
        ) : (
          <img
            src={mecha.image}
            alt={`${mecha.nameEn} DX toy`}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <span className="absolute top-4 right-4 rounded-full bg-background/90 text-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
          {mecha.category === 'Robot' ? 'Robo' : 'Mothership'}
        </span>
      </div>

      <div className="space-y-2 px-1">
        <div>
          <h3 className="font-semibold text-base text-foreground leading-snug">{mecha.nameEn}</h3>
          <p className="text-xs text-muted-foreground">{mecha.nameJa}</p>
        </div>

        {showSeries && (
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground tabular-nums">
            {mecha.year} ·{' '}
            {season ? (
              <Link
                to={`/season/${season.id}`}
                className="inline-flex items-center gap-0.5 hover:text-foreground transition-colors"
              >
                {mecha.seriesEn}
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            ) : (
              mecha.seriesEn
            )}
          </p>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed">{mecha.introEn}</p>

        <dl className="pt-3 border-t border-border text-xs space-y-1.5">
          <div className="flex gap-3">
            <dt className="w-20 shrink-0 font-semibold text-foreground">Combines</dt>
            <dd className="text-muted-foreground">{mecha.components}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-20 shrink-0 font-semibold text-foreground">Toy line</dt>
            <dd className="text-muted-foreground">{mecha.toyLine}</dd>
          </div>
          {mecha.dxRelease && (
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 font-semibold text-foreground">Released</dt>
              <dd className="text-muted-foreground tabular-nums">
                {mecha.dxRelease}
                {mecha.dxPriceJpy ? ` · ¥${mecha.dxPriceJpy.toLocaleString()}` : ''}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </motion.article>
  );
};

export default MechaCard;
