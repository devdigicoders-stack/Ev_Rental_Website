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
      {/* Enhanced Hero Section for About Page */}
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
              <span className="text-gray-200 font-semibold tracking-wider text-sm uppercase ml-1">Our Mission</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 text-white uppercase tracking-tight leading-tight drop-shadow-2xl">
              Driving India Towards a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen via-trisBlue to-trisGreen bg-[length:200%_auto] animate-shine">
                Sustainable Future
              </span>
            </h1>
            
            {/* Description */}
            <div className="relative group mt-4 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-trisBlue to-trisGreen rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <p className="relative text-lg md:text-xl text-gray-200 font-medium leading-relaxed bg-gray-900/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                Tris aims to electrify the Indian mobility sector. We provide eBikes on subscription to businesses and individuals who are looking to reduce their carbon footprint. <br className="hidden md:block"/>
                <span className="text-white font-bold inline-block mt-2">Your next pizza delivery could be pollution-free!</span>
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
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
