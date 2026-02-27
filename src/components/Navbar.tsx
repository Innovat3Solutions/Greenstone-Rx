import { User, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-gradient-to-b from-[#0a0a0a]/90 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm flex items-center justify-center text-black">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 20L12 4L20 20" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14H16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-xl font-semibold tracking-tight">FloxAmino</span>
      </div>

      <div className="hidden md:flex items-center gap-8 bg-[#1a1a1a]/80 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
        <a href="#" className="text-sm font-medium hover:text-[#5CE1E6] transition-colors">Home</a>
        <a href="#" className="text-sm font-medium text-gray-400 hover:text-[#5CE1E6] transition-colors">Shop</a>
        <a href="#" className="text-sm font-medium text-gray-400 hover:text-[#5CE1E6] transition-colors">About us</a>
        <a href="#" className="text-sm font-medium text-gray-400 hover:text-[#5CE1E6] transition-colors">Blog</a>
        <a href="#" className="text-sm font-medium text-gray-400 hover:text-[#5CE1E6] transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
          <User className="w-4 h-4" />
        </button>
        <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
