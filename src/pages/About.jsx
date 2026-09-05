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
      {/* Enhanced Hero Section for About Page - Graphic Style */}
      <div 
        className="relative pt-32 pb-24 bg-gray-900 overflow-hidden flex items-center min-h-[70vh]"
        style={{
          backgroundImage: "url('/about_hero_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

        <div className="container relative z-10 w-full h-full flex flex-col justify-center">
          
          {/* Cursive Text (Top Leftish) */}
          <div className="absolute top-20 left-4 md:left-10 lg:left-20 transform -rotate-12 opacity-90 hidden md:block z-20">
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-gray-300 drop-shadow-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <span className="block mb-[-10px]">Ride</span>
              <span className="block mb-[-10px] ml-4">A Cleaner</span>
              <span className="block ml-2">Tomorrow</span>
            </h3>
            <div className="w-40 h-[2px] bg-gradient-to-r from-trisGreen to-transparent mt-2 transform rotate-2"></div>
          </div>

          {/* Right Text Block (Top Rightish) */}
          <div className="absolute top-24 right-4 md:right-10 lg:right-20 text-right opacity-90 hidden lg:block border-r-4 border-trisGreen pr-6 py-2 z-20">
            <h3 className="text-xl md:text-2xl font-heading font-light text-gray-300 uppercase leading-relaxed tracking-[0.2em] drop-shadow-lg">
              ZERO<br/>EMISSIONS<br/>
              <span className="text-trisGreen font-black tracking-widest">BRIGHTER<br/>TOMORROW</span>
            </h3>
          </div>

          {/* Center Content */}
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center h-full relative z-30 px-4 mt-10 lg:mt-0">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800/80 border border-gray-700 backdrop-blur-md mb-8 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-trisGreen shadow-[0_0_8px_#25D366]"></span>
              <span className="text-gray-200 font-bold tracking-widest text-xs uppercase">Our Mission</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-10 text-white uppercase tracking-tight leading-[1.1] drop-shadow-2xl">
              Driving India Towards a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisGreen to-[#00d2ff] drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                Sustainable Future
              </span>
            </h1>
            
            {/* Description Text without Card */}
            <div className="relative w-full max-w-3xl mx-auto mt-4 px-4 text-center">
              <p className="mb-6 text-gray-100 text-base md:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                Tris aims to electrify the Indian mobility sector. We provide eBikes on subscription to businesses and individuals who are looking to reduce their carbon footprint.
              </p>
              <p className="text-white font-bold text-lg md:text-2xl lg:text-3xl tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] mb-8">
                Your next pizza delivery could be pollution-free!
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/plans" className="bg-trisGreen hover:bg-[#1EBE5C] text-white font-bold py-3 px-8 rounded-full shadow-[0_5px_15px_rgba(37,211,102,0.4)] transition-transform hover:-translate-y-1">
                  Explore Plans
                </a>
                <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1">
                  Contact Us
                </a>
              </div>
            </div>
            
          </div>

          {/* Bottom Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16 mt-16 lg:absolute lg:bottom-12 lg:left-20 relative z-40 w-full lg:w-auto px-4 pb-8 lg:pb-0">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="text-trisGreen transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.8)]">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5,2.5C15.5,2.5 13.5,3.5 12,5C10.5,3.5 8.5,2.5 6.5,2.5C3.5,2.5 1,5 1,8C1,12.5 6.5,17.5 12,21.5C17.5,17.5 23,12.5 23,8C23,5 20.5,2.5 17.5,2.5M12,18.5C7.5,15 4,11 4,8C4,6.5 5,5.5 6.5,5.5C8,5.5 9.5,6.5 10.5,8L12,10L13.5,8C14.5,6.5 16,5.5 17.5,5.5C19,5.5 20,6.5 20,8C20,11 16.5,15 12,18.5Z" /></svg>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">Cleaner</div>
                <div className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-0.5">Cities</div>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-gray-600/50"></div>
            
            <div className="flex items-center gap-4 group cursor-default">
              <div className="text-trisGreen transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.8)]">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M7,2V13H10V22L17,10H13L17,2H7Z" /></svg>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">Greener</div>
                <div className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-0.5">Tomorrow</div>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-gray-600/50"></div>
            
            <div className="flex items-center gap-4 group cursor-default">
              <div className="text-trisGreen transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.8)]">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15.37 17,17V19H23V17C23,14.34 18.33,13 16,13M8,13C5.67,13 1,14.34 1,17V19H15V17C15,14.34 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" /></svg>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">Stronger</div>
                <div className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-0.5">India</div>
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
