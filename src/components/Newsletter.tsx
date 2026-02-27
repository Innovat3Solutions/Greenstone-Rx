export default function Newsletter() {
  return (
    <section id="newsletter" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/hero/specialty-pharmacy-fulfillment.png')" }}
        />
        {/* Dark overlay with gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />

        <div className="relative z-10 py-16 px-12 md:px-20 text-center max-w-3xl mx-auto">
          <p className="text-brand-green-light text-sm font-semibold tracking-wider uppercase mb-4">Partner With Us</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 font-display leading-[1.1] text-white">
            Become a Vendor
          </h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Interested in carrying our premium peptide products? Join our network of trusted vendors and healthcare providers. We offer competitive wholesale pricing and dedicated support.
          </p>

          <form className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1.5 max-w-md mx-auto border border-white/20">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-white px-6 py-3 outline-none placeholder:text-white/50 font-medium"
              required
            />
            <button
              type="submit"
              className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-6">
            We'll reach out within 24 hours to discuss partnership opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
