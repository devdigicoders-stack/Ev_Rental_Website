import React, { useState, useEffect } from 'react';
import { FaTools, FaEnvelope, FaChevronDown, FaQuestionCircle, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const faqList = [
  {
    question: "How do I book an EV?",
    answer: "Go to the Home screen, select your preferred vehicle, and choose a rental plan. Complete KYC verification first."
  },
  {
    question: "What documents are required?",
    answer: "Upload your Aadhar Card and a valid Driving License from the Profile -> KYC Documents section."
  },
  {
    question: "How do I become a franchise?",
    answer: "Go to Profile -> Franchise Enquiry and fill out the form. Our team will contact you within 48 hours."
  },
  {
    question: "How are weekly bills calculated?",
    answer: "Bills are generated every 7 days based on your rental plan. Late fees apply if payment is delayed."
  },
  {
    question: "How do I submit my vehicle?",
    answer: "Clear all pending dues first, then tap 'Submit Vehicle' on the Home screen. Our team will verify and close the booking."
  },
  {
    question: "What is included in the subscription plan?",
    answer: "Our all-inclusive plans cover the eBike, regular maintenance, insurance, IoT tracking, and standard wear-and-tear parts like brake shoes and wires."
  },
  {
    question: "What should I do in case of a breakdown?",
    answer: "If you face any issues on the road, immediately contact our Vehicle Service team via the app or the support numbers provided. We offer prompt roadside assistance."
  },
  {
    question: "Can I upgrade or change my plan later?",
    answer: "Yes, you can request a plan change after your current billing cycle ends. Just reach out to our support team and they will guide you through the process."
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-white min-h-screen font-body">
      
      {/* Clean & Attractive Hero Section for FAQs */}
      <div 
        className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden py-16 lg:py-24 bg-gray-900"
        style={{
          backgroundImage: "url('/ev_fleet_hero_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* Gradient overlay: dark on left for text readability, clearer on right for vehicles */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"></div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-xl text-left">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-trisGreen shadow-[0_0_8px_#25D366]"></span>
              <span className="text-gray-200 font-bold tracking-wider text-xs uppercase">Help Center</span>
            </div>

            {/* Clean Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-white mb-4 leading-tight">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen to-teal-300">
                Questions
              </span>
            </h1>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed font-normal">
              Find clear answers to common questions about our eBike subscriptions, daily operations, battery management, and support.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#faq-accordion"
                className="bg-trisGreen hover:bg-[#1EBE5C] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_5px_15px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Browse Questions
              </a>
              <a 
                href="/contact"
                className="bg-white/10 hover:bg-white hover:text-gray-900 text-white border border-white/30 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Contact Us */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-trisGray-text">Reach out to our support team directly.</p>
            </div>

            <div className="space-y-6">
              {/* Vehicle Service Card */}
              <div className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#F05A41]/10 flex items-center justify-center text-[#F05A41] mb-4 group-hover:scale-110 transition-transform">
                  <FaTools className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Vehicle Service</h4>
                <div className="flex items-center text-sm font-medium text-gray-500">
                  <FaClock className="w-4 h-4 mr-2 text-gray-400" />
                  10:00 AM - 6:00 PM
                </div>
              </div>

              {/* Email Us Card */}
              <a href="mailto:support@tristechnology.com" className="block bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-trisBlue-light flex items-center justify-center text-trisBlue mb-4 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Email Support</h4>
                <p className="text-sm font-medium text-gray-500 break-all">support@tristechnology.com</p>
              </a>

              {/* Location Card */}
              <div className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-trisGreen/10 flex items-center justify-center text-trisGreen mb-4 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Head Office</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                  AIHP Executive Center, Plot No. 48,<br/>
                  Institutional Area, Sector 32,<br/>
                  Gurugram, Haryana 122001
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: FAQs Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqList.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${isOpen ? 'border-trisBlue shadow-lg' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
                  >
                    <button 
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between p-6 focus:outline-none text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-trisBlue text-white' : 'bg-trisGray-light text-gray-400'}`}>
                          <FaQuestionCircle className="w-4 h-4" />
                        </div>
                        <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-trisBlue' : 'text-gray-800'}`}>
                          {faq.question}
                        </span>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-trisBlue/10 text-trisBlue' : 'bg-gray-50 text-gray-400'}`}>
                        <FaChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 pt-0 ml-12 text-gray-600 text-lg leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Faqs;
