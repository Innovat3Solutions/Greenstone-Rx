export default function Footer() {
  return (
    <footer className="bg-[#111111] pt-24 pb-12 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div>
            <h4 className="font-medium mb-8 text-lg font-display">Menu</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors">Home</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors">Shop</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors">Videos</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors">COA's</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-8 text-lg font-display">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors">Login</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors">Register</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg flex items-center justify-center text-black">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 20L12 4L20 20" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14H16" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-3xl font-semibold tracking-tight font-display">FloxAmino</span>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="font-medium mb-8 text-lg font-display">Operational</h4>
            <p className="text-sm text-gray-400 mb-2">Every day: 9:00 – 22:00</p>
            <p className="text-sm text-gray-400 mb-10">Sat – Sun: 8:00 – 21:00</p>
            
            <h4 className="font-medium mb-4 text-lg font-display">You need a consult?</h4>
            <p className="text-sm text-gray-400 mb-2 hover:text-[#5CE1E6] transition-colors cursor-pointer">+ (123) 1800-567-8990</p>
            <p className="text-sm text-gray-400 hover:text-[#5CE1E6] transition-colors cursor-pointer">info@floxamino.com</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-6 md:mb-0">
            Copyright © 2025 FloxAmino. All Rights Reserved. | Usman A.
          </p>
          <div className="flex gap-3">
            {/* Payment icons mock */}
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">VISA</div>
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">MC</div>
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">AMEX</div>
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">PAYPAL</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
