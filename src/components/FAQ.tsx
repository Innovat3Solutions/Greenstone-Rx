import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Are the peptides in a powder form?',
    answer: 'Yes, all peptides are in powder form and must be reconstituted with bacteriostatic water.'
  },
  {
    question: 'Are peptides legal?',
    answer: 'Peptides are legal for research purposes. They are not intended for human consumption.'
  },
  {
    question: 'What are the benefits of peptides?',
    answer: 'Benefits vary depending on the specific peptide, ranging from recovery and repair to fat loss and anti-aging.'
  },
  {
    question: 'How do I store peptides?',
    answer: 'Unreconstituted peptides should be stored in a freezer. Once reconstituted, they should be kept in a refrigerator.'
  },
  {
    question: 'Do you offer shipping?',
    answer: 'Yes, we offer worldwide shipping with discreet packaging.'
  },
  {
    question: 'What is your return policy?',
    answer: 'Due to the nature of our products, we do not accept returns. However, if there is an issue with your order, please contact us.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumn = faqs.slice(0, 3);
  const rightColumn = faqs.slice(3);

  const renderFAQItem = (faq: typeof faqs[0], index: number) => (
    <div
      key={index}
      className={`rounded-xl overflow-hidden transition-all duration-300 border ${
        openIndex === index
          ? 'bg-white border-brand-green-dark/20 shadow-sm'
          : 'bg-gray-50 border-gray-100 hover:border-gray-200'
      }`}
    >
      <button
        className="w-full px-5 py-4 flex items-center justify-between text-left gap-4"
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
      >
        <span className="font-medium text-sm text-gray-900">{faq.question}</span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
          openIndex === index ? 'bg-brand-green-dark text-white' : 'bg-gray-200 text-gray-600'
        }`}>
          {openIndex === index ? (
            <Minus className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </div>
      </button>
      <div
        className={`px-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
          openIndex === index ? 'max-h-32 pb-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {faq.answer}
      </div>
    </div>
  );

  return (
    <section id="faq" className="py-20 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-4">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-medium font-display mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Everything you need to know about our products and services.
        </p>
      </div>

      {/* Two Column FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        <div className="space-y-3">
          {leftColumn.map((faq, idx) => renderFAQItem(faq, idx))}
        </div>
        <div className="space-y-3">
          {rightColumn.map((faq, idx) => renderFAQItem(faq, idx + 3))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-10">
        <p className="text-gray-500 text-sm mb-3">Still have questions?</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-brand-green-dark font-medium hover:underline"
        >
          Contact our support team
        </a>
      </div>
    </section>
  );
}
