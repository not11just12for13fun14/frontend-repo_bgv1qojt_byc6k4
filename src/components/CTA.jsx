export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/80 to-cyan-500/80 p-8 sm:p-12 text-center shadow-xl">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to build your next idea?</h2>
          <p className="mt-3 text-white/90">Get started for free. No credit card required.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition">Create account</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">See pricing</a>
          </div>
        </div>
      </div>
    </section>
  );
}
