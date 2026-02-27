import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#5CE1E6]/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
