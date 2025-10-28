import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial overlays to enhance aura colors without blocking interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)]" />
        <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.12),transparent_70%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Now live — Voice AI Agent Platform
        </span>
        <h1 className="text-balance font-medium tracking-tight text-white [text-wrap:balance] sm:text-6xl text-4xl">
          MagVoize
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          Build, deploy, and scale AI voice agents that feel natural, respond instantly, and integrate seamlessly with your tooling.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#pricing" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-white/10 transition hover:opacity-90">
            Get started
          </a>
          <a href="#features" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10">
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
