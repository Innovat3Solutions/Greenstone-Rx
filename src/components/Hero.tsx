import { ArrowUpRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-8 min-h-[95vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a]/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-20" />
        <img 
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2000" 
          alt="Medical background" 
          className="w-full h-full object-cover opacity-30"
        />
        
        {/* Abstract 3D shapes placeholder */}
        <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-[#5CE1E6]/10 rounded-full blur-3xl z-10" />
        <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-[#C4A47C]/10 rounded-full blur-3xl z-10" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[1.05] font-display">
            Cutting-Edge<br />Peptides
          </h1>
          
          <div className="flex items-center gap-4 pt-4">
            <button className="bg-[#5CE1E6] text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#4bc5ca] transition-colors">
              Open shop
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-white/10 rounded-full px-5 py-2.5 mt-12 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="text-sm text-gray-300">Got 25% off your first order</span>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full pt-12 lg:pt-0">
          <p className="text-gray-400 max-w-sm ml-auto text-right text-lg leading-relaxed">
            Explore our full catalog, read verified reviews, and experience the power of advanced peptide therapy — trusted by thousands worldwide.
          </p>

          <div className="mt-auto flex justify-end pt-32">
            <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center gap-4 max-w-xs shadow-2xl">
              <div className="bg-white/10 p-3 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <a href="#" className="text-sm font-medium underline underline-offset-4 hover:text-[#5CE1E6] transition-colors">
                  [View Lab Reports]
                </a>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  All products undergo rigorous third-party lab testing for purity, potency, and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
