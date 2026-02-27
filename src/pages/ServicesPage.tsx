import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Beaker, Truck, Building2, Users, Clipboard, Shield, Phone, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Beaker,
    title: 'Custom Compounding',
    description: 'Sterile and non-sterile formulations tailored to your practice protocols. We specialize in weight management, hormone therapy, aesthetics, and peptide preparations.',
    features: ['Sterile & Non-Sterile Formulations', 'Practice-Specific Protocols', 'Peptide Preparations', 'Hormone Therapy Compounds']
  },
  {
    icon: Building2,
    title: 'Hospital & Clinic Supply',
    description: 'Specialty medications and injectables for outpatient clinics and hospitals. We maintain rigorous quality standards for all compounded preparations.',
    features: ['Specialty Medications', 'Injectable Preparations', 'Quality Assured', 'Clinic-Ready Packaging']
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Temperature-controlled shipping with multiple daily delivery options. Direct-to-patient or practice delivery available across the country.',
    features: ['Temperature-Controlled', 'Multiple Daily Deliveries', 'Direct-to-Patient', 'Practice Delivery']
  },
  {
    icon: Users,
    title: 'Dedicated Account Support',
    description: 'Assigned account representatives with practice-specific expertise. We focus on building long-term relationships with our partners.',
    features: ['Assigned Representatives', 'Practice Expertise', 'Long-Term Partnership', 'Personalized Service']
  },
  {
    icon: Clipboard,
    title: 'Seamless Onboarding',
    description: 'Zero-disruption pharmacy transitions with platform integration and comprehensive staff training to get you started quickly.',
    features: ['Zero-Disruption Transition', 'Platform Integration', 'Staff Training', 'Quick Setup']
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Round-the-clock pharmacist support for urgent needs. Our team is always available to assist with medication questions and emergencies.',
    features: ['24/7 Pharmacist On-Call', 'Emergency Support', 'Medication Guidance', 'Always Available']
  }
];

const clinicalExpertise = [
  'Formulation Development & Consultation',
  'USP 795 & 797 Compliance',
  'Drug Interaction Screening',
  'Sterile Compounding & Parenteral Preparations',
  'Custom Protocol Development',
  'Regulatory Guidance',
  'Medication Therapy Management',
  'Quality Assurance & Potency Testing'
];

const practiceSupport = [
  'Compliance & Licensing Guidance',
  'E-Prescribing Integration',
  'White-Label Dispensing Solutions',
  'Audit Preparation',
  'Medication Safety Programs',
  'Platform Integration'
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-green-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-display mb-6">
            Specialty Pharmacy Solutions
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            From custom compounding to nationwide delivery, we provide comprehensive pharmacy support for medical practices of all sizes.
          </p>
        </div>

        {/* Services Grid - Clean Professional Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-3xl overflow-hidden mb-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white p-10 hover:bg-gray-50 transition-colors duration-300 relative"
            >
              {/* Service Number */}
              <span className="absolute top-8 right-8 text-5xl font-display font-light text-gray-100 group-hover:text-brand-green-light/30 transition-colors">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark flex items-center justify-center mb-6">
                <service.icon className="w-5 h-5 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold font-display mb-4 text-gray-900 relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
                {service.description}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.features.slice(0, 2).map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-brand-green-dark/10 group-hover:text-brand-green-dark transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Clinical & Compliance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
            <img
              src="/assets/images/hero/pharmacist.png"
              alt="Clinical expertise"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-green-dark" />
                </div>
                <span className="text-white font-medium">USP 795 & 797 Compliant</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-4">Expertise</p>
            <h2 className="text-3xl md:text-4xl font-medium font-display mb-6">
              Clinical & Compliance Excellence
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our team of experienced pharmacists and compliance specialists ensure every formulation meets the highest standards of safety and efficacy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {clinicalExpertise.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Provider Support Section */}
        <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/hero/specialty-pharmacy-fulfillment.png')" }}
          />
          {/* Dark overlay with gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-green-light text-sm font-semibold tracking-wider uppercase mb-4">Support</p>
              <h2 className="text-3xl md:text-4xl font-medium font-display mb-6 text-white">
                Provider & Practice Support
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                We understand the complexities of running a medical practice. Our support services are designed to simplify your operations and ensure compliance.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white text-brand-green-dark px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {practiceSupport.map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green-light flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <h2 className="text-3xl md:text-4xl font-medium font-display mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Join our network of healthcare providers and experience the difference of working with a dedicated specialty pharmacy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Browse Products
            </Link>
            <a
              href="#contact"
              className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
