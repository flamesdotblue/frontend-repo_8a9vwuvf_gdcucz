import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 font-sans text-white">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-fuchsia-500 via-indigo-400 to-amber-400" />
            <span className="text-sm font-semibold tracking-wide">MagVoize</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#case-studies" className="hover:text-white">Case studies</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#pricing" className="hidden rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/90 backdrop-blur hover:bg-white/10 sm:inline-flex">
              Sign up
            </a>
          </div>
        </div>
      </header>

      {/* Page sections */}
      <main>
        <Hero />
        <Features />
        <CaseStudies />
        <Pricing />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-fuchsia-500 via-indigo-400 to-amber-400" />
            <span className="text-sm font-semibold tracking-wide">MagVoize</span>
          </div>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} MagVoize. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/60">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#case-studies" className="hover:text-white">Case studies</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
