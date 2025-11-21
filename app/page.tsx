export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 md:px-8 md:py-24">
        {/* Top badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#22c55e]" />
            CROBOT • Live & Online
          </span>
        </div>

        {/* Hero section */}
        <section className="grid gap-12 md:grid-cols-[1.3fr,1fr] md:items-center">
          {/* Left: text */}
          <div className="space-y-8">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              The <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">all-in-one</span>{" "}
              dashboard for your Discord empire.
            </h1>

            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              Manage roles, automation, analytics, leveling, and premium perks for{" "}
              <span className="font-semibold text-slate-100">Crooks &amp; Castles</span> — all from one clean control panel.
              Built for server owners who actually care about their community.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:shadow-emerald-400/40"
              >
                Open CROBOT Dashboard
              </a>

              <a
                href="/auth"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800/70"
              >
                Login with Discord
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-300">
              <div>
                <div className="text-lg font-semibold text-slate-50">24/7</div>
                <div className="text-slate-400">Hosted on Railway &amp; Vercel</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-slate-50">Instant</div>
                <div className="text-slate-400">Slash command support</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-slate-50">Premium-ready</div>
                <div className="text-slate-400">Built for upgrades</div>
              </div>
            </div>
          </div>

          {/* Right: glass card */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-3xl bg-emerald-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/60 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Crobot · Control Panel
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Crooks &amp; Castles
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#22c55e]" />
                  Online
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                  <div>
                    <p className="text-xs text-slate-400">Members</p>
                    <p className="text-lg font-semibold text-slate-50">—</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Online</p>
                    <p className="text-lg font-semibold text-emerald-400">—</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                    <p className="text-xs text-slate-400">Automation</p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Auto-roles, welcomes, reminders
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                    <p className="text-xs text-slate-400">Insights</p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Activity &amp; leveling analytics
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-sky-500/10 px-4 py-3">
                  <p className="text-xs text-slate-400">Next up</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    Premium tiers, AI tools &amp; full guild controls — all from this dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features row */}
        <section className="grid gap-4 border-t border-slate-800 pt-8 text-sm text-slate-300 md:grid-cols-3">
          <div className="space-y-1">
            <p className="font-semibold text-slate-100">Server Automation</p>
            <p>Welcome flows, auto-roles, reminders and more without touching code.</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-slate-100">Powerful Analytics</p>
            <p>Track engagement, growth and leveling — see what actually works.</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-slate-100">Premium Ready</p>
            <p>Designed to plug in paid tiers, unlock perks and manage supporters.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
