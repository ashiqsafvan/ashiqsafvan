
('use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    services: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.message.length > 500) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          services: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-900 cursor-pointer" style={{ fontFamily: "Pacifico, serif" }}>
                Grandmaster
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap">Services</Link>
              <Link href="/contact" className="text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap border-b-2 border-blue-900">Contact</Link>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-900 w-6 h-6 flex items-center justify-center cursor-pointer">
                <i className="ri-menu-line"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to get started? Get in touch with our team for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <p className="text-gray-600 mb-1">UAE: +971 50 123 4567</p>
                    <p className="text-gray-600 mb-1">KSA: +966507896647</p>
                    <p className="text-gray-600 mb-1">India: +919567474256</p>
                    <p className="text-gray-600">Oman: +968 90 123 456</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-whatsapp-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
                    <p className="text-gray-600 mb-2">Available 24/7 for instant support</p>
                    <a href="https://wa.me/966507896647" className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm cursor-pointer whitespace-nowrap">
                      <i className="ri-whatsapp-line mr-2"></i>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">General Inquiries: grandmaster@gmail.com</p>
                    <p className="text-gray-600 mb-1">UAE Services: uae@grandmaster.com</p>
                    <p className="text-gray-600 mb-1">KSA Services: ksa@grandmaster.com</p>
                    <p className="text-gray-600 mb-1">India Services: india@grandmaster.com</p>
                    <p className="text-gray-600">Oman Services: oman@grandmaster.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-time-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600 mb-1">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 mb-1">Friday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="+971 50 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                    <div className="relative">
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none pr-8"
                      >
                        <option value="">Select Country</option>
                        <option value="uae"> UAE</option>
                        <option value="ksa"> Saudi Arabia</option>
                        <option value="india"> India</option>
                        <option value="oman"> Oman</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">Services Needed</label>
                    <div className="relative">
                      <select
                        id="services"
                        name="services"
                        value={formData.services}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none pr-8"
                      >
                        <option value="">Select Service</option>
                        <option value="bookkeeping">Bookkeeping</option>
                        <option value="accounting">Accounting</option>
                        <option value="audit">Audit</option>
                        <option value="taxation">Taxation</option>
                        <option value="vat">VAT Services</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Please describe your requirements..."
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                    {formData.message.length > 500
                      ? 'Message cannot exceed 500 characters. Please shorten your message.'
                      : 'There was an error sending your message. Please try again or contact us directly.'
                    }
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600">Find us across the Middle East and South Asia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4"> UAE</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UAE Office</h3>
              <p className="text-sm text-gray-600 mb-4">Dubai International Financial Centre</p>
              <p className="text-sm text-gray-600">Level 3, Gate Building</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4"> Saudi Arabia</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">KSA Office</h3>
              <p className="text-sm text-gray-600 mb-4">King Fahd Road, Riyadh</p>
              <p className="text-sm text-gray-600">Al Olaya District</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4"> India</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">India Office</h3>
              <p className="text-sm text-gray-600 mb-4">Connaught Place, New Delhi</p>
              <p className="text-sm text-gray-600">Block A, Central Delhi</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4"> Oman</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oman Office</h3>
              <p className="text-sm text-gray-600 mb-4">Muscat Business District</p>
              <p className="text-sm text-gray-600">Al Khuwair, Muscat</p>
            </div>
          </div>

          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.9091309371473!2d55.27235231501076!3d25.26243998389544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20International%20Financial%20Centre!5e0!3m2!1sen!2sae!4v1651234567890!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4" style={{ fontFamily: "Pacifico, serif" }}>
                Grandmaster
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted financial partner across UAE, KSA, India, and Oman.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white w-6 h-6 flex items-center justify-center cursor-pointer">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white w-6 h-6 flex items-center justify-center cursor-pointer">
                  <i className="ri-twitter-fill"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white w-6 h-6 flex items-center justify-center cursor-pointer">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white w-6 h-6 flex items-center justify-center cursor-pointer">
                  <i className="ri-instagram-fill"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white cursor-pointer">Bookkeeping</Link></li>
                <li><Link href="/services" className="hover:text-white cursor-pointer">Accounting</Link></li>
                <li><Link href="/services" className="hover:text-white cursor-pointer">Audit</Link></li>
                <li><Link href="/services" className="hover:text-white cursor-pointer">Taxation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Countries</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white cursor-pointer">UAE</Link></li>
                <li><Link href="/services" className="hover:text-white cursor-pointer">Saudi Arabia</Link></li>
                <li><Link href="/services" className="hover:text-white cursor-pointer">India</Link></li>
                <li><Link href="/services" className="hover:text-white cursor-pointer">Oman</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  +919567474256
                </li>
                <li className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  +966507896647
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  grandmaster@gmail.com
                </li>
                <li className="flex items-center">
                  <i className="ri-whatsapp-line mr-2"></i>
                  WhatsApp Support
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2024 Grandmaster Finance. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white cursor-pointer">Privacy Policy</Link>
                <Link href="#" className="hover:text-white cursor-pointer">Terms of Service</Link>
                <Link href="#" className="hover:text-white cursor-pointer">Legal Disclaimer</Link>
              </div>
            </div>
            <p className="mt-4 text-sm">Powered by Grandmaster Finance</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
