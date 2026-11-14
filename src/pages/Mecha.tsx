import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MechaCard from '@/components/MechaCard';
import { MECHA, type MechaCategory } from '@/data/mecha';

type Filter = 'All' | MechaCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'All', label: 'All' },
  { value: 'Robot', label: 'Robo' },
  { value: 'Mothership', label: 'Motherships' },
];

const ERAS = [
  { label: 'Showa', from: 1975, to: 1988 },
  { label: 'Heisei', from: 1989, to: 2018 },
  { label: 'Reiwa', from: 2019, to: 2026 },
];

const Mecha = () => {
  const [filter, setFilter] = useState<Filter>('All');

  const items = useMemo(
    () => (filter === 'All' ? MECHA : MECHA.filter((m) => m.category === filter)),
    [filter],
  );

  const robotCount = MECHA.filter((m) => m.category === 'Robot').length;
  const shipCount = MECHA.length - robotCount;

  return (
    <>
      <Helmet>
        <title>DX Mecha | Sentai Toy Archive</title>
        <meta
          name="description"
          content={`Every main Super Sentai giant robot and mothership from 1975 to 2026 — ${robotCount} robo and ${shipCount} motherships, with combinations and toy history.`}
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-6 pt-36 md:pt-40 pb-24">
        <div className="mb-12 md:mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">1975 — 2026</p>
          <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tight leading-[0.9]">
            DX Mecha <br />
            <span className="text-muted-foreground">50 Years of Giant Robo.</span>
          </h1>
          <p className="max-w-xl text-muted-foreground text-lg leading-relaxed">
            The main giant robot and mothership of every Super Sentai series, from the first flying
            fortress in Gorenger to Tega Sword in Gozyuger, the final series.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Filter mecha">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-colors ${
                filter === f.value
                  ? 'bg-foreground text-background border-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="space-y-20">
          {ERAS.map((era) => {
            const eraItems = items.filter((m) => m.year >= era.from && m.year <= era.to);
            if (!eraItems.length) return null;
            return (
              <section key={era.label}>
                <div className="flex items-baseline justify-between border-b border-border pb-4 mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{era.label}</h2>
                  <span className="text-xs text-muted-foreground tabular-nums">{eraItems.length} items</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {eraItems.map((m, i) => (
                    <MechaCard key={m.id} mecha={m} index={i} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Mecha;
