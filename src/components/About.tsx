import { ArrowLeft, ArrowRight, ArrowUpRight, Shield, Atom } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div className="max-w-3xl">
          <p className="text-[#C4A47C] text-sm font-semibold tracking-wider uppercase mb-6">About Us</p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight text-gray-400 font-display">
            <span className="text-white">Welcome to FloxAmino</span> — your trusted source for premium-quality, lab-tested peptides.
          </h2>
        </div>
        <div className="hidden md:block">
          {/* Decorative element */}
          <div className="w-16 h-16 grid grid-cols-2 gap-1">
            <div className="bg-[#C4A47C] rounded-tl-full"></div>
            <div className="bg-[#C4A47C] rounded-tr-full"></div>
            <div className="bg-[#C4A47C] rounded-bl-full"></div>
            <div className="bg-[#C4A47C] rounded-br-full"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group h-[450px]">
          <img 
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1000" 
            alt="Scientist in lab" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <h3 className="text-3xl font-medium mb-8 font-display">Trust, Transparency, Results</h3>
            <div className="flex gap-2">
              <div className="h-1 w-16 bg-white rounded-full"></div>
              <div className="h-1 w-16 bg-white/30 rounded-full"></div>
              <div className="h-1 w-16 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#141414] border border-white/5 rounded-3xl p-10 flex flex-col">
          <h3 className="text-2xl font-medium mb-10 font-display">New arrivals</h3>
          
          <div className="flex gap-4 mb-12">
            <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center bg-[#1a1a1a]">
              <Shield className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
            <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center bg-[#1a1a1a]">
              <Atom className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
            </div>
          </div>

          <div className="mt-auto space-y-3">
            <button className="w-full bg-[#1a1a1a] hover:bg-[#222] border border-white/10 rounded-full py-3.5 px-6 flex items-center justify-between transition-colors">
              <span className="text-sm font-medium text-gray-300">Recovery & Repair Peptides</span>
              <ArrowUpRight className="w-4 h-4 text-gray-500" />
            </button>
            <button className="w-full bg-[#2a3f4c] hover:bg-[#324b5a] border border-[#5CE1E6]/20 rounded-full py-3.5 px-6 flex items-center justify-between transition-colors">
              <span className="text-sm font-medium text-[#5CE1E6]">Fat Loss Peptides</span>
              <ArrowUpRight className="w-4 h-4 text-[#5CE1E6]" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
