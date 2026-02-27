import { useState } from 'react';
import { ShoppingCart, Filter, ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      dosage: product.dosage
    });
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-green-dark transition-colors mb-6 sm:mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">Shop</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-display mb-3 sm:mb-4">
                Our Products
              </h1>
              <p className="text-gray-500 max-w-xl text-sm sm:text-base">
                Premium compounded medications with verified purity. All products undergo rigorous third-party testing.
              </p>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 text-gray-600 font-medium text-sm"
            >
              <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
              Filter by Category
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className={`mb-8 sm:mb-12 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] mb-3 sm:mb-4 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
                    addedProductId === product.id
                      ? 'bg-brand-green-dark opacity-100'
                      : 'bg-white opacity-0 group-hover:opacity-100 hover:bg-gray-50'
                  }`}
                >
                  {addedProductId === product.id ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  ) : (
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
                  )}
                </button>
              </div>

              {/* Product Info */}
              <div>
                <p className="text-[10px] sm:text-xs text-brand-green-primary font-medium uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                <h3 className="font-medium text-gray-900 mb-1 group-hover:text-brand-green-dark transition-colors text-sm sm:text-base line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 line-clamp-2 hidden sm:block">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-semibold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400">
                    {product.dosage}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
