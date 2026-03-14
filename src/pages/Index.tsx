import { Helmet } from 'react-helmet-async';
import PortfolioItem from '@/components/PortfolioItem';
import { SEASONS } from '@/data/seasons';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Archive | Sentai Toy Archive</title>
        <meta
          name="description"
          content="Explore a high-fidelity archive of Super Sentai toy history, featuring original logos, Chogokin die-cast figures, and DX Mecha gallery from 1975 to the present."
        />
        <meta property="og:title" content="GatchaFive — The Definitive Sentai Toy Archive" />
        <meta
          property="og:description"
          content="A curated visual history of Super Sentai craftsmanship, from 1975 to the present."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-6 pt-36 md:pt-40 pb-24">
        <div className="mb-16 md:mb-20 space-y-4">
          <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tight leading-[0.9]">
            The Definitive <br />
            <span className="text-muted-foreground">Sentai Toy Archive.</span>
          </h1>
          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            A curated visual history of Super Sentai craftsmanship, from 1975 to the present.
          </p>
        </div>

        <div
          id="history"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {SEASONS.map((season, index) => (
            <PortfolioItem key={season.id} season={season} index={index} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Index;
