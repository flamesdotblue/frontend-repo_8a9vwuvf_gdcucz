import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: 'Everything to prototype',
    features: [
      '1,000 voice minutes',
      'Community support',
      'Basic analytics',
      'Email webhook'
    ],
    cta: 'Start free',
  },
  {
    name: 'Growth',
    price: '$199',
    period: '/mo',
    highlight: 'For small teams shipping',
    features: [
      '25,000 voice minutes',
      'Priority support',
      'Advanced analytics',
      'CRM + Helpdesk integrations'
    ],
    cta: 'Upgrade',
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    highlight: 'High volume & enterprise',
    features: [
      'Unlimited concurrency',
      'SSO/SAML, RBAC',
      'PII redaction, audit logs',
      'Dedicated success manager'
    ],
    cta: 'Contact sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, scalable pricing</h2>
          <p className="mt-3 text-white/70">Only pay for the minutes you use. Generous free tier to get you started.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border bg-white/5 p-6 backdrop-blur transition ${
                t.popular ? 'border-emerald-400/40 ring-2 ring-emerald-400/40' : 'border-white/10'
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-3 py-1 text-xs font-medium text-emerald-950 shadow">Most popular</div>
              )}
              <div className="flex items-end gap-2">
                <h3 className="text-xl font-semibold">{t.name}</h3>
              </div>
              <div className="mt-2">
                <span className="text-4xl font-bold">{t.price}</span>
                <span className="text-white/60">{t.period}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{t.highlight}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition ${
                    t.popular
                      ? 'bg-emerald-400 text-emerald-950 hover:opacity-90'
                      : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/60">
          Usage billed per minute beyond plan quota. Overages start at $0.004/min and scale down with volume.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
