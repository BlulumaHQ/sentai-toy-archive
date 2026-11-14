import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import siteLogo from '@/assets/logo-supersentai.webp';

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={siteLogo} alt="GatchaFive Sentai Toy Archive" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-8 text-[13px] font-medium uppercase tracking-widest text-muted-foreground">
          <Link
            to="/"
            className={`transition-colors hover:text-foreground ${isActive('/') ? 'text-foreground' : ''}`}
          >
            Archive
          </Link>
          <Link
            to="/mecha"
            className={`transition-colors hover:text-foreground ${isActive('/mecha') ? 'text-foreground' : ''}`}
          >
            DX Mecha
          </Link>
          <a href="#history" className="transition-colors hover:text-foreground">
            History
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 space-y-4">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium uppercase tracking-widest text-foreground"
          >
            Archive
          </Link>
          <Link
            to="/mecha"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium uppercase tracking-widest text-foreground"
          >
            DX Mecha
          </Link>
          <a
            href="#history"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            History
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            About
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
