import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const heroImages = [
  '/assets/images/hero/main_hero.png',
  '/assets/images/hero/vials_hero.png',
  '/assets/images/hero/weight_loss_hero.png',
  '/assets/images/hero/anti_aging_hero.png'
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-24 px-8 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Medical background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Subtle dark gradient from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] font-display text-white"
            style={{ textShadow: '0 4px 20px rgba(75,75,75,0.5), 0 2px 8px rgba(50,50,50,0.3)' }}
          >
            Cutting-Edge<br />Peptides
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-white max-w-md leading-relaxed" style={{ textShadow: '0 2px 12px rgba(75,75,75,0.4)' }}>
            Premium compounded medications with verified purity, backed by rigorous third-party lab testing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#products"
              className="bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:opacity-90 transition-opacity shadow-lg"
            >
              Explore Products
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="bg-white/90 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-white transition-colors border border-gray-200 shadow-md"
            >
              Learn More
            </a>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-3 shadow-md">
            <div className="w-2 h-2 bg-brand-green-dark rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-700 font-medium">25% off your first order</span>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-8 z-40 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentImage ? 'bg-brand-green-dark w-8' : 'bg-gray-400/40 w-4 hover:bg-gray-400/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
