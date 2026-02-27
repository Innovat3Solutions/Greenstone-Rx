export default function Newsletter() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-r from-[#4a6b7c] to-[#2a3f4c] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-0"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-12 md:p-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-medium mb-6 font-display leading-[1.1]">
              Unlock 25% Off Your<br />First Order!
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              Subscribe for updates, offers & peptide wellness tips.
            </p>
            
            <form className="flex items-center bg-white rounded-full p-1.5 max-w-md shadow-lg">
              <input 
                type="email" 
                placeholder="*Email address" 
                className="flex-1 bg-transparent text-black px-6 py-3 outline-none placeholder:text-gray-400 font-medium"
                required
              />
              <button 
                type="submit" 
                className="bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="relative h-[450px] hidden md:block">
            {/* Large Product Image Mock */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-[400px] bg-gradient-to-b from-white/95 to-white/70 backdrop-blur-md rounded-[2rem] shadow-2xl border border-white/30 flex flex-col items-center justify-center p-6 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-16 bg-gray-200 rounded-t-2xl mb-4 border-b-4 border-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                </div>
                <div className="flex-1 w-full bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-inner border border-gray-100">
                  <div className="flex items-center gap-1 mb-3">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#5CE1E6]" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 20L12 4L20 20" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 14H16" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="text-sm font-bold text-[#5CE1E6]">FloxAmino</div>
                  </div>
                  <div className="text-4xl font-bold text-black mb-3 font-display">Mots-C</div>
                  <div className="text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-1 rounded-full">10 mg</div>
                  <div className="text-[10px] text-gray-400 mt-8 uppercase tracking-wider font-medium">For research only<br/>Not for human consumption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
