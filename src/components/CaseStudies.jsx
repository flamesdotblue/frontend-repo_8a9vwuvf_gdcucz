import React from 'react';

const cases = [
  {
    logo: 'SupportX',
    result: '45% faster resolution',
    text:
      'Inbound support triage with voice agents that authenticate users, summarize intent, and route to the right queue with context.'
  },
  {
    logo: 'SalesFlow',
    result: '+28% conversion lift',
    text:
      'Outbound follow‑ups that qualify leads, schedule demos, and update CRM records in real‑time.'
  },
  {
    logo: 'OpsTrack',
    result: '70% call deflection',
    text:
      'Proactive voice notifications for delivery ETAs and appointment changes, with natural two‑way rescheduling.'
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Proven in production</h2>
          <p className="mt-3 text-white/70">
            Teams across support, sales, and operations use MagVoize to deliver delightful voice experiences.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-widest text-white/60">{c.logo}</div>
              <div className="mt-2 text-2xl font-semibold text-emerald-300">{c.result}</div>
              <p className="mt-3 text-sm text-white/70">{c.text}</p>
              <div className="mt-4 flex gap-2 text-xs text-white/50">
                <span className="rounded-full bg-white/5 px-2 py-1">Voice IVR</span>
                <span className="rounded-full bg-white/5 px-2 py-1">CRM</span>
                <span className="rounded-full bg-white/5 px-2 py-1">Analytics</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
