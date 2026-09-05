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
      
      {/* Enhanced Hero Section for FAQs */}
      <div className="relative pt-24 pb-24 bg-gray-900 overflow-hidden flex items-center min-h-[50vh]">
        
        {/* EV Bike Background Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 lg:opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-trisBlue/40 to-trisGreen/40 blur-[150px] rounded-full w-full h-full m-auto animate-pulse mix-blend-screen"></div>
          <img 
            src="/hero-bike.png" 
            alt="" 
            className="w-[200%] md:w-[150%] lg:w-[110%] max-w-none transform translate-y-4 lg:translate-y-10 object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Dynamic Background Pattern with Animations */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-trisBlue to-transparent blur-[120px] transform -skew-x-12 opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-trisGreen to-transparent blur-[120px] transform skew-x-12 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trisGreen opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-trisGreen"></span>
              </span>
              <span className="text-gray-200 font-semibold tracking-wider text-sm uppercase ml-1">Help Center</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black mb-6 text-white uppercase tracking-tight leading-tight drop-shadow-2xl">
              Frequently Asked <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen via-trisBlue to-trisGreen bg-[length:200%_auto] animate-shine">
                Questions
              </span>
            </h1>
            
            {/* Description */}
            <div className="relative group mt-4 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-trisBlue to-trisGreen rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <p className="relative text-lg md:text-xl text-gray-200 font-medium leading-relaxed bg-gray-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                Find answers to common questions about our eBike subscriptions, rental process, and services. <br className="hidden md:block"/>
                <span className="text-white font-bold inline-block mt-2">If you can't find what you're looking for, feel free to contact us.</span>
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
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
