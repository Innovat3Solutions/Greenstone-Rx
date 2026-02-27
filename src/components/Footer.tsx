export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 pt-24 pb-12 px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          {/* Greenstone Pharmacy - Left Side */}
          <div className="flex flex-col items-start">
            <img src="/assets/images/brand/Greenstone Logo.svg" alt="Greenstone Rx" className="h-12 mb-4" />
            <p className="text-sm text-gray-600">Your trusted compounding pharmacy</p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-medium mb-8 text-lg font-display">Menu</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-sm text-gray-600 hover:text-brand-green-primary transition-colors">Home</a></li>
              <li><a href="#products" className="text-sm text-gray-600 hover:text-brand-green-primary transition-colors">Shop</a></li>
              <li><a href="#about" className="text-sm text-gray-600 hover:text-brand-green-primary transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-sm text-gray-600 hover:text-brand-green-primary transition-colors">FAQ</a></li>
              <li><a href="#newsletter" className="text-sm text-gray-600 hover:text-brand-green-primary transition-colors">Newsletter</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-8 text-lg font-display">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#products" className="text-sm text-gray-600 hover:text-brand-green-primary transition-colors">Shop Products</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 hover:text-brand-green-primary transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="text-sm text-gray-600 hover:text-brand-green-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand-green-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Operational */}
          <div>
            <h4 className="font-medium mb-8 text-lg font-display text-black">Business Hours</h4>
            <p className="text-sm text-gray-600 mb-2">Mon – Fri: 9am – 5pm EST</p>
            <p className="text-sm text-gray-600">Sat – Sun: Closed</p>
          </div>

          {/* Need a Consult */}
          <div>
            <h4 className="font-medium mb-8 text-lg font-display text-black">Need a Consult?</h4>
            <a href="tel:+18556257588" className="block text-sm text-gray-600 mb-2 hover:text-brand-green-primary transition-colors">(855) 625-7588</a>
            <a href="mailto:pharmacy@greenstonerx.com" className="block text-sm text-gray-600 hover:text-brand-green-primary transition-colors">pharmacy@greenstonerx.com</a>
          </div>
        </div>

        {/* Copyright and Payment */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-6 md:mb-0">
            Copyright © 2025 Greenstone Rx. All Rights Reserved. | Usman A.
          </p>
          <div className="flex gap-3">
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">VISA</div>
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">MC</div>
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">AMEX</div>
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-gray-500">PAYPAL</div>
          </div>
        </div>

        {/* Compliance Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-8 mt-8 border-t border-gray-200">
          <img src="/assets/images/compliance/Hippa.webp" alt="HIPAA Compliant" className="h-12 object-contain mix-blend-multiply" />
          <img src="/assets/images/compliance/PCCA.webp" alt="PCCA Member" className="h-12 object-contain mix-blend-multiply" />
          <img src="/assets/images/compliance/legitscript.webp" alt="LegitScript Certified" className="h-12 object-contain" />
        </div>
      </div>
    </footer>
  );
}
