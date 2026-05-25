export default function Home() {
  const faqs = [
    {
      q: "How does the monitoring work?",
      a: "We run automated probes from servers in 40+ countries every 5 minutes, testing connectivity to major VPN endpoints and reporting real-time block status."
    },
    {
      q: "Which countries are supported?",
      a: "We cover high-censorship regions including China, Russia, Iran, UAE, Turkey, and 35+ more. New countries are added based on user demand."
    },
    {
      q: "What happens when my VPN gets blocked?",
      a: "You receive an instant alert via email or webhook, along with curated recommendations for working alternatives tested in your specific region."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Real-Time VPN Monitoring
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor VPN Blocks<br />in Your Country
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Get instant alerts when your VPN is blocked and discover working alternatives — tested live from 40+ countries every 5 minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $9/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[["40+", "Countries"], ["5 min", "Check interval"], ["99.9%", "Uptime"]].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-3">
              <div className="text-[#58a6ff] font-bold text-xl">{val}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time VPN block detection",
              "40+ country coverage",
              "Instant email & webhook alerts",
              "Working alternative recommendations",
              "Historical block timeline",
              "API access included"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} VPN Censorship Detector. All rights reserved.
      </footer>
    </main>
  );
}
