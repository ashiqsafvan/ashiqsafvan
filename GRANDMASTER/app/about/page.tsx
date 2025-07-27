'use client';

import Link from 'next/link';

export default function About() {
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
              <Link href="/about" className="text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap border-b-2 border-blue-900">About Us</Link>
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Grandmaster</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted financial partner with deep expertise across UAE, KSA, India, and Oman
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Grandmaster was founded in 2009 with a simple yet ambitious vision: to provide world-class financial services to businesses operating across multiple jurisdictions in the Middle East and South Asia. What started as a small accounting practice has grown into a trusted partner for over 500 companies.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our founders, experienced chartered accountants with international exposure, recognized the unique challenges faced by businesses operating in different regulatory environments. They built Grandmaster to bridge these gaps, offering localized expertise with global standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we are proud to serve clients ranging from startups to multinational corporations, helping them navigate complex financial landscapes with confidence and compliance.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20building%20with%20glass%20facade%2C%20professional%20business%20architecture%2C%20clean%20lines%20and%20contemporary%20design%2C%20natural%20lighting%2C%20corporate%20headquarters%20atmosphere%2C%20business%20success%20concept%2C%20high-quality%20architectural%20photography&width=600&height=400&seq=office-building&orientation=landscape"
                alt="Grandmaster Office"
                className="rounded-lg shadow-xl w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-target-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional financial services that enable businesses to thrive across borders. We strive to be the most trusted partner for companies seeking compliance, accuracy, and strategic financial guidance in the UAE, KSA, India, and Oman.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-eye-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading cross-border financial services provider in the region, known for our expertise, reliability, and commitment to client success. We envision a future where businesses can expand globally with confidence, knowing they have a trusted financial partner by their side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards in all our dealings, ensuring transparency and trust with every client interaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every service we provide, continuously improving our processes and staying ahead of industry standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We view ourselves as an extension of your team, working collaboratively to achieve your business goals and objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace technology and innovative solutions to deliver more efficient and effective financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the qualified professionals who lead our organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20executive%20headshot%2C%20confident%20male%20chartered%20accountant%20in%20formal%20business%20suit%2C%20clean%20studio%20background%2C%20professional%20corporate%20photography%2C%20leadership%20portrait%2C%20trustworthy%20appearance&width=300&height=400&seq=ceo-portrait&orientation=portrait"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ahmed Al-Rashid</h3>
              <p className="text-blue-600 mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                CA, CPA with 20+ years of experience in international taxation and cross-border compliance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20executive%20headshot%2C%20confident%20female%20chartered%20accountant%20in%20formal%20business%20attire%2C%20clean%20studio%20background%2C%20professional%20corporate%20photography%2C%20leadership%20portrait%2C%20trustworthy%20appearance&width=300&height=400&seq=coo-portrait&orientation=portrait"
                alt="COO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 mb-3">COO</p>
              <p className="text-gray-600 text-sm">
                ACCA qualified with expertise in VAT compliance across GCC countries and operational excellence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20executive%20headshot%2C%20confident%20male%20finance%20director%20in%20formal%20business%20suit%2C%20clean%20studio%20background%2C%20professional%20corporate%20photography%2C%20leadership%20portrait%2C%20trustworthy%20appearance&width=300&height=400&seq=cfo-portrait&orientation=portrait"
                alt="CFO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rajesh Patel</h3>
              <p className="text-blue-600 mb-3">Head of India Operations</p>
              <p className="text-gray-600 text-sm">
                CA with specialized knowledge in GST, MCA filings, and Indian regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">Happy Clients</div>
              <div className="text-gray-600">Across four countries</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">Years Experience</div>
              <div className="text-gray-600">In international finance</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">99%</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">Client Satisfaction</div>
              <div className="text-gray-600">Based on annual surveys</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">Support</div>
              <div className="text-gray-600">Available when you need us</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who trust Grandmaster for their financial needs
          </p>
          <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg cursor-pointer whitespace-nowrap">
            Get Started Today
          </Link>
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
