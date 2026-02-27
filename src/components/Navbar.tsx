import { useState, useRef, useEffect } from 'react';
import { User, ShoppingCart, X, Minus, Plus, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';
  const isServicesPage = location.pathname === '/services';
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contact';

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  // Close cart when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 bg-gradient-to-b from-white/90 to-transparent backdrop-blur-sm text-black">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img
            src="/assets/images/brand/Greenstone Logo.svg"
            alt="Greenstone Rx"
            className="h-8 sm:h-10"
            style={{ filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.9)) drop-shadow(0 0 20px rgba(255,255,255,0.7))' }}
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-8 py-3 rounded-full border border-gray-200">
        <Link to="/" className="text-sm font-medium hover:text-brand-green-primary transition-colors text-black">
          Home
        </Link>
        <Link to="/shop" className={`text-sm font-medium transition-colors ${isShopPage ? 'text-brand-green-dark' : 'text-gray-600 hover:text-brand-green-primary'}`}>
          Shop
        </Link>
        <Link to="/services" className={`text-sm font-medium transition-colors ${isServicesPage ? 'text-brand-green-dark' : 'text-gray-600 hover:text-brand-green-primary'}`}>
          Services
        </Link>
        <Link to="/about" className={`text-sm font-medium transition-colors ${isAboutPage ? 'text-brand-green-dark' : 'text-gray-600 hover:text-brand-green-primary'}`}>
          About
        </Link>
        <Link to="/contact" className={`text-sm font-medium transition-colors ${isContactPage ? 'text-brand-green-dark' : 'text-gray-600 hover:text-brand-green-primary'}`}>
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors bg-white/80"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {/* Vendor Login */}
        <a
          href="https://bloom.greenstonerx.com/register"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 items-center justify-center hover:bg-gray-100 transition-colors bg-white/80"
          title="Vendor Login"
        >
          <User className="w-4 h-4" />
        </a>

        {/* Cart Button & Dropdown */}
        <div className="relative" ref={cartRef}>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors bg-white/80 relative"
          >
            <ShoppingCart className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-green-dark text-white text-xs rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {isCartOpen && (
            <div className="absolute right-0 top-14 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Your Cart</h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {items.length === 0 ? (
                <div className="p-8 text-center">
                  <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">Your cart is empty</p>
                  <Link
                    to="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-block mt-4 text-brand-green-dark text-sm font-medium hover:underline"
                  >
                    Browse Products
                  </Link>
                </div>
              ) : (
                <>
                  <div className="max-h-72 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="p-4 border-b border-gray-50 flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover bg-gray-50"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                          <p className="text-xs text-gray-500">{item.dosage}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 md:hidden">
          <div className="flex flex-col p-4 space-y-2">
            <Link to="/" className="px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors text-black">
              Home
            </Link>
            <Link to="/shop" className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isShopPage ? 'bg-brand-green-dark/10 text-brand-green-dark' : 'hover:bg-gray-100 text-gray-600'}`}>
              Shop
            </Link>
            <Link to="/services" className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isServicesPage ? 'bg-brand-green-dark/10 text-brand-green-dark' : 'hover:bg-gray-100 text-gray-600'}`}>
              Services
            </Link>
            <Link to="/about" className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isAboutPage ? 'bg-brand-green-dark/10 text-brand-green-dark' : 'hover:bg-gray-100 text-gray-600'}`}>
              About
            </Link>
            <Link to="/contact" className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isContactPage ? 'bg-brand-green-dark/10 text-brand-green-dark' : 'hover:bg-gray-100 text-gray-600'}`}>
              Contact
            </Link>
            <a
              href="https://bloom.greenstonerx.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors text-gray-600 flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Vendor Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
