import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

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
    question: 'Do you provide discounts for bulk orders?',
    answer: 'Yes, please contact our support team for bulk pricing.'
  },
  {
    question: 'What is your return policy?',
    answer: 'Due to the nature of our products, we do not accept returns. However, if there is an issue with your order, please contact us.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <p className="text-[#C4A47C] text-sm font-semibold tracking-wider uppercase mb-6">FAQ</p>
          <h2 className="text-5xl font-medium mb-6 font-display">Still need help?</h2>
          <p className="text-gray-400 mb-10 text-lg">Reach out to customer support!</p>
          
          <button className="bg-[#5CE1E6] text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#4bc5ca] transition-colors mb-20">
            Contact us
            <div className="bg-white rounded-full p-1">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>

          {/* Decorative element */}
          <div className="w-16 h-16 flex flex-col items-center justify-center gap-1">
            <div className="w-6 h-6 bg-[#C4A47C] rounded-full"></div>
            <div className="w-12 h-6 bg-[#C4A47C] rounded-b-full"></div>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white text-black' : 'bg-[#141414] text-white hover:bg-[#1a1a1a]'}`}
              >
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 text-gray-600 text-sm transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-col items-end">
            <div className="relative rounded-3xl overflow-hidden w-full aspect-video mb-6 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" 
                alt="Microscope" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#5CE1E6]/10 mix-blend-overlay"></div>
            </div>
            <div className="flex items-center gap-4 bg-[#141414] p-2 pr-4 rounded-full border border-white/5">
              <a href="#" className="text-sm font-medium underline underline-offset-4 hover:text-[#5CE1E6] transition-colors pl-4">
                [View Lab Reports]
              </a>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
