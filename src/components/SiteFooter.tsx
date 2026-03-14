import { ArrowUp } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs font-bold uppercase tracking-widest text-foreground">
          GatchaFive Sentai Toy
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 GatchaFive Sentai Toy. All rights reserved.
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-full border border-border hover:bg-foreground hover:text-background transition-all duration-250"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default SiteFooter;
