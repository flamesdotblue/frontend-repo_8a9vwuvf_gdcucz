import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <CaseStudies />
    <Pricing />
  </>
);

const AppShell = ({ children }) => (
  <div className="min-h-screen scroll-smooth bg-slate-950 font-sans text-white">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-fuchsia-500 via-indigo-400 to-amber-400" />
          <span className="text-sm font-semibold tracking-wide">MagVoize</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <NavLink to="/features" className={({isActive}) => `${isActive ? 'text-white' : 'hover:text-white'}`}>Features</NavLink>
          <NavLink to="/case-studies" className={({isActive}) => `${isActive ? 'text-white' : 'hover:text-white'}`}>Case studies</NavLink>
          <NavLink to="/pricing" className={({isActive}) => `${isActive ? 'text-white' : 'hover:text-white'}`}>Pricing</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/pricing" className="hidden rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/90 backdrop-blur hover:bg-white/10 sm:inline-flex">
            Sign up
          </Link>
        </div>
      </div>
    </header>

    <main className="pt-14">{children}</main>

    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-fuchsia-500 via-indigo-400 to-amber-400" />
          <span className="text-sm font-semibold tracking-wide">MagVoize</span>
        </div>
        <p className="text-xs text-white/60">© {new Date().getFullYear()} MagVoize. All rights reserved.</p>
        <div className="flex gap-4 text-xs text-white/60">
          <Link to="/features" className="hover:text-white">Features</Link>
          <Link to="/case-studies" className="hover:text-white">Case studies</Link>
          <Link to="/pricing" className="hover:text-white">Pricing</Link>
        </div>
      </div>
    </footer>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppShell>
              <HomePage />
            </AppShell>
          }
        />
        <Route
          path="/features"
          element={
            <AppShell>
              <Features />
            </AppShell>
          }
        />
        <Route
          path="/case-studies"
          element={
            <AppShell>
              <CaseStudies />
            </AppShell>
          }
        />
        <Route
          path="/pricing"
          element={
            <AppShell>
              <Pricing />
            </AppShell>
          }
        />
        <Route
          path="*"
          element={
            <AppShell>
              <div className="mx-auto max-w-3xl px-6 py-24 text-center">
                <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
                <p className="mt-3 text-white/70">The page you’re looking for doesn’t exist.</p>
                <div className="mt-6">
                  <Link to="/" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900">Back home</Link>
                </div>
              </div>
            </AppShell>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
