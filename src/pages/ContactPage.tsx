import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Screen */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img
            src="/assets/images/hero/physician-seated-across-from-a-patient.png"
            alt="Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>

        {/* Content - Left Side */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16 w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-green-dark transition-colors mb-6 sm:mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-xl">
            <p className="text-brand-green-dark text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">Contact Us</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-display mb-4 sm:mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-8">
              We'd love to hear from you. Reach out to learn how Greenstone Rx can support your practice with premium compounded medications.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="tel:+18556257588" className="flex items-center gap-3 text-gray-700 hover:text-brand-green-dark transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-green-light/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-brand-green-dark" />
                </div>
                <span className="font-medium text-sm sm:text-base">(855) 625-7588</span>
              </a>
              <a href="mailto:pharmacy@greenstonerx.com" className="flex items-center gap-3 text-gray-700 hover:text-brand-green-dark transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-green-light/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-brand-green-dark" />
                </div>
                <span className="font-medium text-sm sm:text-base break-all sm:break-normal">pharmacy@greenstonerx.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Contact Information - 2 columns */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6 font-display">Contact Information</h2>
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green-dark" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">Phone</p>
                      <a href="tel:+18556257588" className="text-gray-900 font-medium hover:text-brand-green-primary transition-colors text-sm sm:text-base">
                        (855) 625-7588
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green-dark" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">Email</p>
                      <a href="mailto:pharmacy@greenstonerx.com" className="text-gray-900 font-medium hover:text-brand-green-primary transition-colors text-sm sm:text-base break-all sm:break-normal">
                        pharmacy@greenstonerx.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green-dark" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">Address</p>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">
                        861 SW 8th Street, Suite 101<br />
                        Miami, Florida 33130
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-green-dark" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">Business Hours</p>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">
                        Monday - Friday: 9am - 5pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Register CTA */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-brand-green-dark to-brand-green-primary rounded-xl sm:rounded-2xl text-white">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Are you a Healthcare Provider?</h3>
                <p className="text-white/80 text-xs sm:text-sm mb-4">
                  Register for access to our full catalog of compounded medications and exclusive provider benefits.
                </p>
                <a
                  href="https://bloom.greenstonerx.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-green-dark px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                >
                  Register Now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-medium mb-2 font-display">Request Information</h2>
              <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Fill out the form below and we'll be in touch shortly.</p>

              {submitted ? (
                <div className="text-center py-10 sm:py-16">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 sm:w-8 sm:h-8 text-brand-green-dark" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-black mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6 text-sm sm:text-base">We've received your message and will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-green-dark font-medium hover:underline text-sm sm:text-base"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-brand-green-primary focus:ring-2 focus:ring-brand-green-light/50 outline-none transition-all bg-gray-50 focus:bg-white text-sm sm:text-base"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-brand-green-primary focus:ring-2 focus:ring-brand-green-light/50 outline-none transition-all bg-gray-50 focus:bg-white text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-brand-green-primary focus:ring-2 focus:ring-brand-green-light/50 outline-none transition-all bg-gray-50 focus:bg-white text-sm sm:text-base"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-brand-green-primary focus:ring-2 focus:ring-brand-green-light/50 outline-none transition-all resize-none bg-gray-50 focus:bg-white text-sm sm:text-base"
                      placeholder="Tell us about your practice and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-green-light via-brand-green-primary to-brand-green-dark text-white py-3 sm:py-4 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
