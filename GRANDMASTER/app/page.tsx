
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900" style={{ fontFamily: "Pacifico, serif" }}>
                Grandmaster
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap">Contact</Link>
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
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20global%20finance%20consulting%20office%20with%20modern%20financial%20charts%2C%20international%20business%20documents%2C%20calculator%20and%20laptop%20on%20clean%20desk%2C%20soft%20natural%20lighting%2C%20corporate%20blue%20and%20white%20color%20scheme%2C%20minimalist%20professional%20atmosphere%2C%20financial%20excellence%20concept&width=1200&height=600&seq=hero-finance&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Accounting Excellence Across Borders
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">
              Trusted Financial Partner in UAE | KSA | India | Oman
            </p>
            <p className="text-lg text-blue-50 mb-10 leading-relaxed max-w-2xl">
              Expert financial services tailored for international businesses. From VAT compliance to corporate taxation, we deliver precision and reliability across multiple jurisdictions.
            </p>
            <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors cursor-pointer whitespace-nowrap">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Grandmaster</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to provide seamless financial services across borders, Grandmaster has emerged as a trusted partner for businesses operating in the Middle East and South Asia. Our team of qualified chartered accountants and tax professionals brings deep expertise in regional compliance requirements.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We understand the complexities of multi-jurisdictional operations and leverage cutting-edge technology to deliver accurate, timely, and cost-effective solutions. Our commitment to excellence has earned us the trust of over 500+ clients across four countries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">4</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20accounting%20team%20in%20modern%20office%20environment%2C%20diverse%20group%20of%20financial%20experts%20working%20with%20documents%20and%20computers%2C%20clean%20corporate%20setting%2C%20professional%20business%20attire%2C%20collaborative%20workspace%20atmosphere%2C%20high-quality%20business%20photography%20style&width=600&height=400&seq=about-team&orientation=landscape"
                alt="Our Professional Team"
                className="rounded-lg shadow-xl w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Grandmaster?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with global standards to deliver exceptional financial services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay compliant with FTA, ZATCA, GAZT, and other regulatory requirements across all jurisdictions we serve.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-rocket-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage advanced accounting software and automation tools for accurate and efficient service delivery.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-money-dollar-circle-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Affordable Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium quality services at competitive rates, designed to support businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services by Region</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to each country's unique requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🇦🇪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">UAE Services</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• VAT Registration & Filing</li>
                <li>• Corporate Tax Compliance</li>
                <li>• Bookkeeping Services</li>
                <li>• Audit Support</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🇸🇦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">KSA Services</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• ZATCA VAT Filing</li>
                <li>• e-Invoicing Compliance</li>
                <li>• Zakat & GAZT Returns</li>
                <li>• Withholding Tax</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">India Services</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• GST Filing & Reconciliation</li>
                <li>• TDS Returns & PAN/TAN</li>
                <li>• MCA Filings</li>
                <li>• Income Tax Filing</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🇴🇲</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Oman Services</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• VAT Return Filing</li>
                <li>• Excel-Based Bookkeeping</li>
                <li>• Annual Accounts</li>
                <li>• Income Tax Support</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg cursor-pointer whitespace-nowrap">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can streamline your financial operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg cursor-pointer whitespace-nowrap">
              Get Free Consultation
            </Link>
            <Link href="/services" className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-3 rounded-lg cursor-pointer whitespace-nowrap">
              View Services
            </Link>
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
