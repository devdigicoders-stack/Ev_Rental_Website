import React, { useEffect } from 'react';
import AboutVision from '../components/AboutVision';
import CoreValues from '../components/CoreValues';
import Milestones from '../components/Milestones';
import Team from '../components/Team';
import Services from '../components/Services';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Clean & Attractive Hero Section for About Page */}
      <div 
        className="relative min-h-[60vh] flex items-center overflow-hidden py-16 lg:py-24 bg-gray-900"
        style={{
          backgroundImage: "url('/about_hero_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* Gradient overlay: dark on left for text readability, clearer on right for the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"></div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-xl text-left">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-trisGreen shadow-[0_0_8px_#25D366]"></span>
              <span className="text-gray-200 font-bold tracking-wider text-xs uppercase">About Tris Electric</span>
            </div>

            {/* Clean Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
              Driving India Towards a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen to-teal-300">
                Sustainable Future
              </span>
            </h1>

            {/* Normal Clean Description */}
            <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed font-normal">
              Empowering businesses and daily commuters with smart, cost-effective, and all-inclusive electric bike subscriptions to build a greener tomorrow.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="/plans" 
                className="bg-trisGreen hover:bg-[#1EBE5C] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Plans
              </a>
              <a 
                href="/contact" 
                className="bg-white/10 hover:bg-white hover:text-gray-900 text-white border border-white/30 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>

            {/* Minimal Clean Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/15 max-w-md w-full">
              <div>
                <div className="text-trisGreen font-bold text-base sm:text-lg font-heading">Cleaner</div>
                <div className="text-gray-400 text-[11px] uppercase tracking-wider mt-0.5">Cities</div>
              </div>
              <div className="border-x border-white/15 px-3">
                <div className="text-trisGreen font-bold text-base sm:text-lg font-heading">Greener</div>
                <div className="text-gray-400 text-[11px] uppercase tracking-wider mt-0.5">Tomorrow</div>
              </div>
              <div>
                <div className="text-trisGreen font-bold text-base sm:text-lg font-heading">Stronger</div>
                <div className="text-gray-400 text-[11px] uppercase tracking-wider mt-0.5">India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* The Detailed Vision & Quote Component */}
      <AboutVision />
      
      {/* The New Core Values Component */}
      <CoreValues />
      
      {/* Existing Milestones & Team Components */}
      <Milestones />
      <Team />
      
      {/* Existing Services Component */}
      <Services />
    </div>
  );
};

export default About;
