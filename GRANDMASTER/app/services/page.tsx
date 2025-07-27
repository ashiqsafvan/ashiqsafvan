
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  const [activeCountry, setActiveCountry] = useState('uae');

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
              <Link href="/services" className="text-blue-900 px-3 py-2 cursor-pointer whitespace-nowrap border-b-2 border-blue-900">Services</Link>
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
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to each country's unique requirements
          </p>
        </div>
      </section>

      {/* Country Selector */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCountry('uae')}
              className={`px-6 py-3 rounded-full font-semibold cursor-pointer whitespace-nowrap ${
                activeCountry === 'uae'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              UAE Services
            </button>
            <button
              onClick={() => setActiveCountry('ksa')}
              className={`px-6 py-3 rounded-full font-semibold cursor-pointer whitespace-nowrap ${
                activeCountry === 'ksa'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              KSA Services
            </button>
            <button
              onClick={() => setActiveCountry('india')}
              className={`px-6 py-3 rounded-full font-semibold cursor-pointer whitespace-nowrap ${
                activeCountry === 'india'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              India Services
            </button>
            <button
              onClick={() => setActiveCountry('oman')}
              className={`px-6 py-3 rounded-full font-semibold cursor-pointer whitespace-nowrap ${
                activeCountry === 'oman'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Oman Services
            </button>
          </div>
        </div>
      </section>

      {/* UAE Services */}
      {activeCountry === 'uae' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">UAE Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                FTA compliant solutions for your UAE business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-file-text-line text-2xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">VAT Registration & Filing</h3>
                <p className="text-gray-600 mb-4">
                  Complete VAT registration assistance and monthly/quarterly filing services compliant with FTA requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• VAT registration with FTA</li>
                  <li>• Monthly/quarterly VAT returns</li>
                  <li>• VAT compliance reviews</li>
                  <li>• Penalty resolution support</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-calculator-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Bookkeeping Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional bookkeeping services with monthly and quarterly reporting for UAE businesses.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Monthly bookkeeping</li>
                  <li>• Quarterly financial reports</li>
                  <li>• Bank reconciliation</li>
                  <li>• Expense categorization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-line-chart-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Statement Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive financial statement preparation and analysis for UAE entities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Annual financial statements</li>
                  <li>• Management reports</li>
                  <li>• Cash flow statements</li>
                  <li>• Financial analysis</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Internal & External Audit Support</h3>
                <p className="text-gray-600 mb-4">
                  Professional audit support services for both internal reviews and external audit requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Internal audit support</li>
                  <li>• External audit assistance</li>
                  <li>• Compliance reviews</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-percent-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Tax Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Complete corporate tax compliance services for the new 9% corporate tax regime effective from June 2023.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Corporate tax registration</li>
                  <li>• Tax return preparation</li>
                  <li>• Transfer pricing documentation</li>
                  <li>• Tax planning strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* KSA Services */}
      {activeCountry === 'ksa' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">KSA Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ZATCA compliant solutions for your Saudi Arabian business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-file-text-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ZATCA VAT Filing (15%)</h3>
                <p className="text-gray-600 mb-4">
                  Complete VAT filing services with ZATCA compliance for Saudi businesses.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• VAT registration with ZATCA</li>
                  <li>• Monthly VAT returns</li>
                  <li>• VAT compliance audits</li>
                  <li>• Penalty resolution</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-receipt-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">e-Invoicing (Fatoora Compliance)</h3>
                <p className="text-gray-600 mb-4">
                  Complete e-invoicing implementation and compliance with Fatoora requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• e-invoicing setup</li>
                  <li>• Fatoora compliance</li>
                  <li>• QR code generation</li>
                  <li>• System integration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-book-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Bookkeeping and Accounting</h3>
                <p className="text-gray-600 mb-4">
                  Professional bookkeeping and accounting services tailored for Saudi market requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Monthly bookkeeping</li>
                  <li>• Financial reporting</li>
                  <li>• Bank reconciliation</li>
                  <li>• Cost accounting</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-money-dollar-circle-line text-2xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Withholding Tax Filing</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive withholding tax filing and compliance services for Saudi businesses.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• WHT calculations</li>
                  <li>• Monthly WHT returns</li>
                  <li>• Certificate issuance</li>
                  <li>• Compliance reviews</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-hand-coin-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Zakat & GAZT Returns</h3>
                <p className="text-gray-600 mb-4">
                  Complete Zakat calculation and filing services with GAZT compliance.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Zakat calculations</li>
                  <li>• Annual Zakat returns</li>
                  <li>• GAZT compliance</li>
                  <li>• Appeals support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* India Services */}
      {activeCountry === 'india' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">India Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive tax and compliance solutions for Indian businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-file-list-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">GST Filing and Reconciliation</h3>
                <p className="text-gray-600 mb-4">
                  Complete GST filing services with reconciliation and compliance support.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• GST registration</li>
                  <li>• Monthly GST returns</li>
                  <li>• Input tax credit reconciliation</li>
                  <li>• GST audit support</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-subtract-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">TDS Returns & PAN/TAN Support</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive TDS compliance services with PAN/TAN registration support.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• TDS calculations</li>
                  <li>• Quarterly TDS returns</li>
                  <li>• PAN/TAN applications</li>
                  <li>• TDS certificates</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-building-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">MCA Filings (ROC, DIR, etc.)</h3>
                <p className="text-gray-600 mb-4">
                  Complete MCA compliance services including ROC filings and director compliance.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Annual ROC filings</li>
                  <li>• Director KYC compliance</li>
                  <li>• Board resolutions</li>
                  <li>• Statutory registers</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-user-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Income Tax Filing</h3>
                <p className="text-gray-600 mb-4">
                  Professional income tax filing services for businesses and individuals.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Business income tax returns</li>
                  <li>• Individual ITR filing</li>
                  <li>• Tax planning</li>
                  <li>• Assessment support</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-team-line text-2xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payroll & PF/ESI Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Complete payroll processing with PF and ESI compliance management.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Monthly payroll processing</li>
                  <li>• PF/ESI returns</li>
                  <li>• Salary certificates</li>
                  <li>• Labor law compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Oman Services */}
      {activeCountry === 'oman' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Oman Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional financial services for Omani businesses and SMEs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-file-text-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">VAT Return Filing</h3>
                <p className="text-gray-600 mb-4">
                  Professional VAT return filing services through Oman Tax Authority Portal.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• VAT registration assistance</li>
                  <li>• Monthly VAT returns</li>
                  <li>• Tax Authority portal management</li>
                  <li>• Compliance reviews</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-file-excel-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excel-Based Bookkeeping for SMEs</h3>
                <p className="text-gray-600 mb-4">
                  Affordable Excel-based bookkeeping solutions designed specifically for SMEs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Monthly bookkeeping</li>
                  <li>• Excel-based reporting</li>
                  <li>• Cash flow management</li>
                  <li>• Expense tracking</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-calendar-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Accounts Finalization</h3>
                <p className="text-gray-600 mb-4">
                  Complete annual accounts preparation and finalization services.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Annual financial statements</li>
                  <li>• Year-end adjustments</li>
                  <li>• Statutory compliance</li>
                  <li>• Management reporting</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-percent-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Withholding Tax & Income Tax Support</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive tax support services for withholding tax and income tax compliance.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Withholding tax calculations</li>
                  <li>• Income tax returns</li>
                  <li>• Tax planning advice</li>
                  <li>• Compliance support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* General Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive service offerings across all regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-open-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bookkeeping</h3>
              <p className="text-gray-600">
                Professional bookkeeping services with monthly and quarterly reporting across all jurisdictions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calculator-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accounting</h3>
              <p className="text-gray-600">
                Comprehensive accounting services including financial statement preparation and analysis.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit</h3>
              <p className="text-gray-600">
                Internal and external audit support services to ensure compliance and accuracy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-percent-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Taxation</h3>
              <p className="text-gray-600">
                Expert tax planning and compliance services tailored to each country's requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific requirements and get a customized solution
          </p>
          <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg cursor-pointer whitespace-nowrap">
            Get Free Consultation
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
