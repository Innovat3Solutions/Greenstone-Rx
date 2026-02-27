import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const slides = [
  {
    image: '/assets/images/hero/physician-seated-across-from-a-patient.png',
    title: 'Efficient Delivery System',
    alt: 'Physician seated across from a patient',
    description: 'We provide multiple daily deliveries of accurately filled medications, STAT deliveries, and secure on-site dispensing systems for first dose and emergency medication needs.'
  },
  {
    image: '/assets/images/hero/pharmacist.png',
    title: 'Dedicated Field Representatives',
    alt: 'Pharmacist at work',
    description: 'Our team will familiarize themselves with your practice\'s needs, fostering open communication and trust with your staff.'
  },
  {
    image: '/assets/images/hero/specialty-pharmacy-fulfillment.png',
    title: '24/7 Availability',
    alt: 'Specialty pharmacy fulfillment',
    description: 'We operate round-the-clock, 365 days a year, recognizing the critical nature of new admission orders. These orders are processed and delivered continuously, exceeding industry standards.'
  }
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div className="max-w-3xl">
          <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-6">About Us</p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight text-gray-600 font-display">
            <span className="text-black">Welcome to Greenstone Rx</span> — your trusted source for premium-quality, lab-tested peptides.
          </h2>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mb-16 max-w-4xl">
        <blockquote className="relative">
          <div className="text-5xl text-brand-green-dark absolute -top-4 -left-2 font-serif">"</div>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed pl-8 italic">
            I've been in this field long enough to know that the details are what separate good pharmacy care from great. When I review a medication regimen, I'm not just checking boxes — I'm thinking about that specific patient, their history, what actually works for them. That's the standard we hold ourselves to here.
          </p>
          <p className="text-gray-500 mt-6 pl-8 text-base">
            Our owners and operators are locally based and actively involved in daily operations, ensuring dependability and immediate access to key decision-makers.
          </p>
        </blockquote>
        <div className="flex items-center gap-4 mt-8 pl-8">
          <div className="w-12 h-12 rounded-full bg-brand-green-dark flex items-center justify-center text-white font-semibold text-sm">
            KC
          </div>
          <div>
            <p className="font-medium text-black font-display">Kaila C.</p>
            <p className="text-sm text-gray-500">Lead Pharmacist</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Carousel */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden h-[450px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <h3 className="text-3xl font-medium mb-3 font-display">{slide.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md">{slide.description}</p>
                <div className="flex gap-2">
                  {slides.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setCurrentSlide(dotIndex)}
                      className={`h-1 w-16 rounded-full transition-colors ${
                        dotIndex === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 flex flex-col h-[450px]">
          <p className="text-brand-green-dark text-xs font-semibold tracking-wider uppercase mb-4">Why Choose Us</p>

          <div className="flex flex-col gap-2 mb-6">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white font-medium'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white'
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>

          <div className="flex-1 flex flex-col justify-center border-t border-gray-200 pt-6">
            <h4 className="text-xl font-semibold font-display text-black mb-3 transition-all duration-300">
              {slides[currentSlide].title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300">
              {slides[currentSlide].description}
            </p>
          </div>

          <a href="#contact" className="mt-auto pt-4 flex items-center gap-2 text-brand-green-dark font-medium hover:underline">
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-gray-300 bg-white text-black flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
