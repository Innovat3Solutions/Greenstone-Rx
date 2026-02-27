import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Heart, DollarSign, Shield, BookOpen, Award, Building2, Stethoscope, Sparkles } from 'lucide-react';
import USLicenseMap from '../components/USLicenseMap';

const advantages = [
  {
    icon: Heart,
    title: 'Personalized Customer Care',
    description: 'Tailored services to address your specific practice requirements.'
  },
  {
    icon: Sparkles,
    title: 'Unparalleled Investment',
    description: 'Our commitment to resources and technology in the marketplace demonstrates our dedication to our professional partners in patient care.'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Management',
    description: 'We focus on optimizing your drug utilization through cost management, formulary management, and procurement strategies.'
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Our consulting services adhere to state and federal regulations, emphasizing therapeutically appropriate, cost-effective, safe, and efficacious medication.'
  },
  {
    icon: BookOpen,
    title: 'Educational Programs',
    description: 'We offer educational resources on compounding best practices, regulatory compliance, and medication safety for your team.'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'We prioritize compliance, quality, and safety in all our operations.'
  }
];

const clientTypes = [
  { icon: Sparkles, name: 'Medspas', image: '/assets/images/hero/practitioner-in-a-clean-white.png' },
  { icon: Building2, name: 'Hospitals', image: '/assets/images/hero/specialty-pharmacy-fulfillment.png' },
  { icon: Stethoscope, name: 'Clinics', image: '/assets/images/hero/physician-seated-across-from-a-patient.png' }
];

export default function AboutPage() {
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
          <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-4">Our Advantages</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-display mb-6">
            Why Choose Greenstone Rx?
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Steadfast dedication to compliance, quality, and safety.
          </p>
        </div>

        {/* Client Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {clientTypes.map((client) => (
            <div key={client.name} className="relative group rounded-2xl overflow-hidden h-[280px]">
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                  <client.icon className="w-5 h-5 text-brand-green-dark" />
                </div>
                <span className="text-white font-semibold text-lg">{client.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group relative"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-display mb-2 text-gray-900">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
              {index < advantages.length - 1 && (
                <div className="hidden lg:block absolute -bottom-4 left-0 right-0 h-px bg-gray-100" />
              )}
            </div>
          ))}
        </div>

        {/* What Drives Us Section */}
        <div className="bg-gray-50 rounded-3xl p-12 md:p-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-4">What Drives Us</p>
              <h2 className="text-3xl md:text-4xl font-medium font-display mb-6">
                Our Core Principles
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold font-display mb-3 text-gray-900">
                    Outcome-Oriented Solutions
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    We strive to implement strategies and services that lead to improved health outcomes for your patients. Through this multifaceted approach, Greenstone Rx aims to exceed expectations and set new standards in pharmaceutical care and support.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-display mb-3 text-gray-900">
                    Comprehensive Support
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Our team is committed to providing exceptional assistance to all stakeholders in your healthcare ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-7xl font-display font-bold">25</span>
                    <p className="text-lg font-medium mt-2">Years</p>
                    <p className="text-sm text-white/80 mt-1">Of dedicated experience<br />in pharmaceutical care</p>
                  </div>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-brand-green-light/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Licenses Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-4">Our Reach</p>
            <h2 className="text-3xl md:text-4xl font-medium font-display mb-4">
              Licensed Across America
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Greenstone Rx maintains active pharmacy and DEA licenses in 28 states, ensuring we can serve healthcare providers nationwide with full regulatory compliance.
            </p>
          </div>
          <USLicenseMap />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-medium font-display mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Join our network of healthcare providers and experience the difference of working with a dedicated specialty pharmacy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Explore Our Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/shop"
              className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
