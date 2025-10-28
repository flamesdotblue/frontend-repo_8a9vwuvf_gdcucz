import React from 'react';
import { Rocket, Shield, Zap, Workflow, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-amber-400" />,
    title: 'Real‑time Streaming',
    desc: 'Ultra‑low latency speech in/out powered by edge inference and optimized streaming.',
  },
  {
    icon: <Headphones className="h-6 w-6 text-indigo-400" />,
    title: 'Human‑like Voices',
    desc: 'Studio‑quality neural voices with emotions, prosody control, and multilingual support.',
  },
  {
    icon: <Workflow className="h-6 w-6 text-cyan-400" />,
    title: 'Workflow Integrations',
    desc: 'Connect CRMs, helpdesks, calendars, and internal tools with secure webhooks.',
  },
  {
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    title: 'Enterprise‑grade Security',
    desc: 'PII redaction, SOC2‑ready logging, SSO/SAML, and role‑based controls.',
  },
  {
    icon: <Rocket className="h-6 w-6 text-fuchsia-400" />,
    title: 'Scale to Millions',
    desc: 'Autoscaling voice concurrency, queueing, and global POP distribution.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Powerful building blocks</h2>
          <p className="mt-3 text-white/70">
            Everything you need to design, deploy, and monitor production‑ready AI voice agents.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/[0.07]">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
