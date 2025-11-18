import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-[0_0_35px_rgba(56,189,248,0.5)]" />
            <span className="text-white font-semibold tracking-tight">BlueLanding</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-sm text-slate-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Sign in</a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">Get started</a>
          </div>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10" onClick={() => setOpen(v => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              <a href="#features" className="px-3 py-2 rounded text-slate-200 hover:bg-white/10">Features</a>
              <a href="#testimonials" className="px-3 py-2 rounded text-slate-200 hover:bg-white/10">Testimonials</a>
              <a href="#pricing" className="px-3 py-2 rounded text-slate-200 hover:bg-white/10">Pricing</a>
              <a href="#cta" className="px-3 py-2 rounded bg-gradient-to-r from-blue-600 to-cyan-500 text-white">Get started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
