import { Star, ShieldCheck, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Polished UI",
    desc: "Beautiful, accessible components with a clean, modern look.",
  },
  {
    icon: Star,
    title: "Production ready",
    desc: "Built on a fast, scalable foundation using Vite and React.",
  },
  {
    icon: Zap,
    title: "Lightning fast",
    desc: "Optimized assets and delightful micro-interactions out of the box.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    desc: "Best practices and sensible defaults so you ship with confidence.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need</h2>
          <p className="mt-3 text-slate-300">A pragmatic set of features that cover the essentials without the bloat.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
