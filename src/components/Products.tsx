import { useState } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Weight Management',
    description: 'Clinically-proven GLP-1 medications and peptide therapies designed to support sustainable weight loss and optimize metabolic health. Our compounding expertise ensures precise dosing tailored to individual patient needs.',
    image: '/assets/images/hero/weight_loss_hero.png',
    highlights: ['GLP-1 Receptor Agonists', 'Custom Dosing', 'Metabolic Support']
  },
  {
    name: 'Hair Loss',
    description: 'FDA-approved treatments and advanced topical formulations to combat hair thinning and promote natural regrowth. We offer both oral and compounded topical solutions for comprehensive hair restoration.',
    image: '/assets/images/hero/practitioner-in-a-clean-white.png',
    highlights: ['Finasteride', 'Custom Topicals', 'Combination Therapies']
  },
  {
    name: 'Wellness',
    description: 'Comprehensive vitamin therapies and injectable supplements designed to optimize overall health, energy levels, and vitality. From B12 to lipotropic blends, we support your wellness journey.',
    image: '/assets/images/hero/fvials-common-for-peptides-and-glp1.png',
    highlights: ['MIC + B12 Injections', 'Glutathione', 'Vitamin Therapies']
  },
  {
    name: 'Hormone Therapy',
    description: 'Personalized bioidentical hormone replacement therapies meticulously compounded to restore hormonal balance. We work closely with providers to create individualized treatment protocols.',
    image: '/assets/images/hero/physician-seated-across-from-a-patient.png',
    highlights: ['BHRT for Women', 'Testosterone Therapy', 'Thyroid Support']
  },
  {
    name: 'Anti-Aging',
    description: 'Cutting-edge NAD+ therapies and cellular rejuvenation treatments that support healthy aging from within. Our anti-aging protocols are designed to enhance longevity and cognitive function.',
    image: '/assets/images/hero/anti_aging_hero.png',
    highlights: ['NAD+ Injections', 'NAD+ Nasal Spray', 'Cellular Support']
  },
  {
    name: 'Peptide Therapy',
    description: 'Research-grade peptides for recovery, performance optimization, and therapeutic applications. Every batch undergoes rigorous third-party testing to verify purity and potency.',
    image: '/assets/images/hero/closeup-macro-shot-of-peptide-vials.png',
    highlights: ['Sermorelin', 'BPC-157', 'Growth Hormone Peptides']
  },
  {
    name: 'Sexual Health',
    description: 'Discreet, effective treatments for intimate wellness and enhanced performance. Our compounded solutions offer customized approaches to address individual needs with confidentiality.',
    image: '/assets/images/hero/pharmacist.png',
    highlights: ['ED Treatments', 'Custom Compounds', 'Hormone Optimization']
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="products" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="mb-10 sm:mb-16">
        <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">What We Offer</p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-display max-w-2xl">
            Verified Purity & Potency
          </h2>
          <p className="text-gray-600 max-w-md lg:text-right text-sm sm:text-base">
            Every medication undergoes rigorous third-party testing. We specialize in these key therapeutic areas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
        {/* Left side - Category list */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="flex flex-wrap gap-2 lg:flex-col lg:space-y-1 lg:gap-0">
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`text-left px-4 sm:px-6 py-2.5 sm:py-4 rounded-full lg:rounded-xl transition-all flex items-center justify-between group text-sm sm:text-base ${
                  index === activeCategory
                    ? 'bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                } lg:w-full`}
              >
                <span className="font-medium">{category.name}</span>
                <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform hidden lg:block ${
                  index === activeCategory ? 'translate-x-1' : 'group-hover:translate-x-1'
                }`} />
              </button>
            ))}
          </div>

          <Link
            to="/shop"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-brand-green-dark font-semibold hover:underline text-sm sm:text-base"
          >
            Visit Our Full Shop
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right side - Image and details */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[200px] sm:h-[300px] lg:h-[350px] mb-4 sm:mb-6">
            <img
              src={categories[activeCategory].image}
              alt={categories[activeCategory].name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <h3 className="text-xl sm:text-2xl font-semibold font-display text-white">
                {categories[activeCategory].name}
              </h3>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            {categories[activeCategory].description}
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories[activeCategory].highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
