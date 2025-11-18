import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Launch beautiful sites fast
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-slate-300"
            >
              A modern landing page template designed with Tailwind and animations so you can focus on your product.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#cta" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">Get started</a>
              <a href="#features" className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">Learn more</a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-slate-400">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                ))}
              </div>
              <p className="text-sm">Loved by 1,200+ makers</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-900">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="Product screenshot" className="h-full w-full object-cover opacity-90" />
              </div>
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
