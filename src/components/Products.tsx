import { ShoppingCart, Link as LinkIcon, ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'MOTS-C',
    price: 50,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400',
    dosage: '10 mg'
  },
  {
    id: 2,
    name: 'GLP-3',
    price: 95,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400',
    dosage: '10 mg'
  },
  {
    id: 3,
    name: 'BPC-157',
    price: 90,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400',
    dosage: '10 mg'
  },
  {
    id: 4,
    name: 'TB-500',
    price: 90,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400',
    dosage: '10 mg'
  }
];

export default function Products() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="mb-8 text-[#C4A47C]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
          </svg>
        </div>
        <p className="text-[#C4A47C] text-sm font-semibold tracking-wider uppercase mb-4">Products</p>
        <h2 className="text-4xl md:text-5xl font-medium font-display">Verified Purity & Potency</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative bg-[#141414] rounded-3xl aspect-[4/5] mb-6 overflow-hidden border border-white/5 flex items-center justify-center p-8 transition-colors group-hover:bg-[#1a1a1a]">
              {/* Product Image Placeholder */}
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414]/80 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-auto h-full object-contain mix-blend-screen opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Mock Label */}
                <div className="absolute z-20 bg-white text-black p-4 rounded-xl shadow-2xl w-3/4 text-center transform -translate-y-4">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-[#5CE1E6]" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 20L12 4L20 20" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 14H16" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="text-[10px] font-bold text-[#5CE1E6]">FloxAmino</div>
                  </div>
                  <div className="text-xl font-bold mb-1 font-display">{product.name}</div>
                  <div className="text-[10px] text-gray-500 font-medium">{product.dosage}</div>
                </div>
              </div>

              {/* Hover Actions */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-30 translate-x-4 group-hover:translate-x-0 duration-300">
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                  <ShoppingCart className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                  <LinkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-lg font-medium font-display">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-between items-center">
        <div className="flex-1 max-w-md h-[1px] bg-white/10">
          <div className="w-1/3 h-full bg-white"></div>
        </div>
        <button className="ml-8 bg-[#5CE1E6] text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#4bc5ca] transition-colors">
          Open shop
          <div className="bg-white rounded-full p-1">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </button>
      </div>
    </section>
  );
}
