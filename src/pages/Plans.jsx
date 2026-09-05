import React, { useEffect } from 'react';
import SubscriptionPlans from '../components/SubscriptionPlans';

const Plans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Clean & Attractive Hero Section for Plans */}
      <div className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden py-16 lg:py-24 bg-gray-900">
        {/* EV Bike Background Image on the right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-3/5 h-full opacity-35 lg:opacity-60 pointer-events-none flex items-center justify-end overflow-hidden">
          <img 
            src="/hero-bike.png" 
            alt="EV Bike" 
            className="max-h-[85%] object-contain object-right"
          />
        </div>

        {/* Gradient overlay: dark on left for text readability, clearer on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30"></div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-xl text-left">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-trisBlue shadow-[0_0_8px_#1EA0E5]"></span>
              <span className="text-gray-200 font-bold tracking-wider text-xs uppercase">Transparent Pricing</span>
            </div>

            {/* Clean Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-white mb-4 leading-tight">
              Flexible & Affordable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisBlue to-cyan-300">
                eBike Plans
              </span>
            </h1>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed font-normal">
              All-inclusive subscriptions with zero maintenance fees, battery replacements, and comprehensive support. Pick the plan that matches your daily commute or business.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#plans-section"
                className="bg-trisBlue hover:bg-[#158BC6] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_5px_15px_rgba(30,160,229,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Choose a Plan
              </a>
              <a 
                href="/contact"
                className="bg-white/10 hover:bg-white hover:text-gray-900 text-white border border-white/30 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Fleet Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="plans-section">
        <SubscriptionPlans />
      </div>
    </div>
  );
};

export default Plans;
