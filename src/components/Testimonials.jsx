import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This template saved me days. The animations and layout are stunning.",
    author: "Ava Thompson",
    role: "Founder, Nova Labs",
  },
  {
    quote: "I shipped my MVP in a weekend. It looks like a million bucks.",
    author: "Leo Nguyen",
    role: "Indie Maker",
  },
  {
    quote: "Clean, fast, and easy to tweak. Exactly what I needed.",
    author: "Maya Patel",
    role: "Product Designer",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by creators</h2>
          <p className="mt-3 text-slate-300">A few words from people using this layout to launch faster.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <Quote className="absolute -top-4 -left-4 h-8 w-8 text-cyan-400/50" />
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">
                <span className="font-medium text-slate-200">{t.author}</span> • {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
