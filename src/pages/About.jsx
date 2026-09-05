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
        className="relative min-h-[65vh] flex items-center justify-center py-20 bg-gray-900 overflow-hidden"
        style={{
          backgroundImage: "url('/about_hero_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Clean dark overlay for optimal readability */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center justify-center">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-trisGreen"></span>
            <span className="text-gray-200 font-semibold tracking-wider text-xs uppercase">About Tris Electric</span>
          </div>

          {/* Clean Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl">
            Driving India Towards a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen to-teal-300">
              Sustainable Future
            </span>
          </h1>

          {/* Normal Clean Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Empowering businesses and daily commuters with smart, cost-effective, and all-inclusive electric bike subscriptions to build a greener tomorrow.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="/plans" 
              className="bg-trisGreen hover:bg-[#1EBE5C] text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore Plans
            </a>
            <a 
              href="/contact" 
              className="bg-white/10 hover:bg-white hover:text-gray-900 text-white border border-white/30 font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>

          {/* Minimal Clean Highlights */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-10 mt-10 border-t border-white/15 max-w-xl w-full">
            <div className="text-center">
              <div className="text-trisGreen font-bold text-base sm:text-lg font-heading">Cleaner</div>
              <div className="text-gray-400 text-[11px] sm:text-xs tracking-wider uppercase mt-0.5">Cities</div>
            </div>
            <div className="text-center border-x border-white/15">
              <div className="text-trisGreen font-bold text-base sm:text-lg font-heading">Greener</div>
              <div className="text-gray-400 text-[11px] sm:text-xs tracking-wider uppercase mt-0.5">Tomorrow</div>
            </div>
            <div className="text-center">
              <div className="text-trisGreen font-bold text-base sm:text-lg font-heading">Stronger</div>
              <div className="text-gray-400 text-[11px] sm:text-xs tracking-wider uppercase mt-0.5">India</div>
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
