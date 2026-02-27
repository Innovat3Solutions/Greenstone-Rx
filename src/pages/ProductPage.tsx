import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, AlertTriangle, ChevronDown, Shield, Check } from 'lucide-react';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';

interface AccordionItemProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
  variant?: 'default' | 'warning';
}

function AccordionItem({ title, items, isOpen, onToggle, variant = 'default' }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`font-medium ${variant === 'warning' ? 'text-amber-700' : 'text-gray-900'}`}>
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'
        }`}
      >
        <ul className="space-y-2.5">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green-primary mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [openSection, setOpenSection] = useState<string | null>('common');
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!product) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      dosage: product.dosage
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-4xl font-display font-medium mb-4">Product Not Found</h1>
          <p className="text-gray-500 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Count total safety sections
  const safetyCategories = [
    { key: 'common', title: 'Common Side Effects', items: product.safetyInfo?.commonSideEffects },
    { key: 'serious', title: 'Serious Side Effects', items: product.safetyInfo?.seriousSideEffects },
    { key: 'contraindications', title: 'Contraindications', items: product.safetyInfo?.contraindications },
    { key: 'warnings', title: 'Key Warnings', items: product.safetyInfo?.keyWarnings },
    { key: 'interactions', title: 'Drug Interactions', items: product.safetyInfo?.drugInteractions },
    { key: 'precautions', title: 'Precautions', items: product.safetyInfo?.precautions },
  ].filter(cat => cat.items && cat.items.length > 0);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-green-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-brand-green-primary text-sm font-medium uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-medium font-display mb-4">
              {product.name}
            </h1>
            <p className="text-gray-500 text-lg mb-6 leading-relaxed">
              {product.fullDescription || product.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                {product.dosage}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-3 mb-4 ${
                addedToCart
                  ? 'bg-brand-green-dark text-white'
                  : 'bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white hover:opacity-90'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 text-center mb-8">
              Prescription required. A licensed provider will review your order.
            </p>

            {/* Quick Safety Note */}
            {product.safetyInfo && (
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Shield className="w-5 h-5 text-brand-green-primary" />
                  <span>See complete safety information below</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Safety Information - Professional Redesign */}
        {product.safetyInfo && (
          <div className="mb-20">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-2">Important</p>
                <h2 className="text-3xl font-medium font-display">Safety Information</h2>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>{safetyCategories.length} categories</span>
              </div>
            </div>

            {/* Black Box Warning - Prominent but Clean */}
            {product.safetyInfo.blackBoxWarning && (
              <div className="mb-8 rounded-2xl border-2 border-gray-900 bg-gray-900 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                      Boxed Warning
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {product.safetyInfo.blackBoxWarning}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Accordion Style Safety Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Side Effects
                </h3>
                {product.safetyInfo.commonSideEffects && product.safetyInfo.commonSideEffects.length > 0 && (
                  <AccordionItem
                    title="Common Side Effects"
                    items={product.safetyInfo.commonSideEffects}
                    isOpen={openSection === 'common'}
                    onToggle={() => toggleSection('common')}
                  />
                )}
                {product.safetyInfo.seriousSideEffects && product.safetyInfo.seriousSideEffects.length > 0 && (
                  <AccordionItem
                    title="Serious Side Effects"
                    items={product.safetyInfo.seriousSideEffects}
                    isOpen={openSection === 'serious'}
                    onToggle={() => toggleSection('serious')}
                    variant="warning"
                  />
                )}
              </div>

              {/* Right Column */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Warnings & Precautions
                </h3>
                {product.safetyInfo.contraindications && product.safetyInfo.contraindications.length > 0 && (
                  <AccordionItem
                    title="Contraindications"
                    items={product.safetyInfo.contraindications}
                    isOpen={openSection === 'contraindications'}
                    onToggle={() => toggleSection('contraindications')}
                    variant="warning"
                  />
                )}
                {product.safetyInfo.keyWarnings && product.safetyInfo.keyWarnings.length > 0 && (
                  <AccordionItem
                    title="Key Warnings"
                    items={product.safetyInfo.keyWarnings}
                    isOpen={openSection === 'warnings'}
                    onToggle={() => toggleSection('warnings')}
                  />
                )}
                {product.safetyInfo.drugInteractions && product.safetyInfo.drugInteractions.length > 0 && (
                  <AccordionItem
                    title="Drug Interactions"
                    items={product.safetyInfo.drugInteractions}
                    isOpen={openSection === 'interactions'}
                    onToggle={() => toggleSection('interactions')}
                  />
                )}
                {product.safetyInfo.precautions && product.safetyInfo.precautions.length > 0 && (
                  <AccordionItem
                    title="Precautions"
                    items={product.safetyInfo.precautions}
                    isOpen={openSection === 'precautions'}
                    onToggle={() => toggleSection('precautions')}
                  />
                )}
              </div>
            </div>

            {/* Special Notes */}
            {product.safetyInfo.specialNotes && product.safetyInfo.specialNotes.length > 0 && (
              <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  {product.safetyInfo.specialNotes.map((note, index) => (
                    <p key={index} className={index > 0 ? 'mt-1' : ''}>{note}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <p className="mt-8 text-xs text-gray-400 leading-relaxed">
              This information is provided for educational purposes only and is not intended as medical advice.
              Always consult with a qualified healthcare provider before starting any medication.
              Report any side effects to your healthcare provider immediately.
            </p>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="mb-8">
              <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-2">More Options</p>
              <h2 className="text-3xl font-medium font-display">Related Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.slug}`}
                  className="group"
                >
                  <div className="aspect-[4/5] mb-4 overflow-hidden rounded-2xl bg-gray-50">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs text-brand-green-primary font-medium uppercase tracking-wide mb-1">
                    {relatedProduct.category}
                  </p>
                  <h3 className="font-medium text-gray-900 mb-1 group-hover:text-brand-green-dark transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <span className="text-lg font-semibold text-gray-900">
                    ${relatedProduct.price}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
