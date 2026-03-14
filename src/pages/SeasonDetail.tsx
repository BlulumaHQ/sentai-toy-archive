import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { SEASONS } from '@/data/seasons';
import { useState } from 'react';

const SeasonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const season = SEASONS.find((s) => s.id === id);

  if (!season) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Season not found</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Archive
          </Link>
        </div>
      </div>
    );
  }

  const visibleToys = season.toys.slice(0, 12);

  return (
    <>
      <Helmet>
        <title>{season.shortTitle} | Sentai Toy Archive</title>
        <meta
          name="description"
          content={`Explore the ${season.title} toy collection (${season.year}). ${season.description.slice(0, 120)}`}
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <Link
            to="/"
            className="mb-10 md:mb-12 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground hover:gap-4 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Archive
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-muted rounded-2xl border border-border">
                <div className="aspect-[3/2] flex items-center justify-center mb-8">
                  <img
                    src={season.logo}
                    alt={`${season.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 text-foreground">
                  {season.title}
                </h1>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>{season.description}</p>
                  <div className="pt-4 border-t border-border flex flex-col gap-2 text-sm">
                    <span className="flex justify-between">
                      <strong className="text-foreground">Season</strong>
                      <span>{season.number}</span>
                    </span>
                    <span className="flex justify-between">
                      <strong className="text-foreground">Year</strong>
                      <span>{season.year}</span>
                    </span>
                    <span className="flex justify-between">
                      <strong className="text-foreground">Era</strong>
                      <span>{season.era}</span>
                    </span>
                    <span className="flex justify-between">
                      <strong className="text-foreground">Manufacturer</strong>
                      <span>{season.manufacturer}</span>
                    </span>
                    <span className="flex justify-between">
                      <strong className="text-foreground">Items</strong>
                      <span>{season.toys.length} pieces</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="lg:col-span-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
                Toy Collection
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visibleToys.map((toy, index) => (
                  <ToyCard key={toy.id} toy={toy} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

interface ToyCardProps {
  toy: { id: number; name: string; img: string; desc: string };
  index: number;
}

const ToyCard = ({ toy, index }: ToyCardProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="aspect-square bg-muted rounded-xl overflow-hidden mb-4 shadow-card">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground text-xs">
            Image unavailable
          </div>
        ) : (
          <img
            src={toy.img}
            alt={toy.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <h4 className="font-semibold text-sm text-foreground">{toy.name}</h4>
      <p className="text-xs text-muted-foreground mt-1">{toy.desc}</p>
    </motion.div>
  );
};

export default SeasonDetail;
