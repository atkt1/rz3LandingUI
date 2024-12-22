import { Navbar } from './components/layout/navbar';
import { Hero } from './components/sections/hero';
import { Features } from './components/sections/features/index';
import { Pricing } from './components/sections/pricing/index';
import { CTA } from './components/sections/cta';
import { Footer } from './components/layout/footer';

export function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}