import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
