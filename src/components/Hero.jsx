import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden py-16" 
      id="home"
      style={{
        backgroundImage: "url('/home_hero_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container relative z-10 w-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-6 shadow-xl backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-trisBlue shadow-[0_0_8px_#1EA0E5]"></span>
            <span className="text-gray-100 font-bold tracking-widest text-xs uppercase">Electric Mobility</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold uppercase tracking-tight mb-4 drop-shadow-lg leading-tight">
            Worried about <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisBlue to-cyan-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Rising Petrol Prices?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-bold text-gray-200 mb-2 font-heading tracking-widest uppercase drop-shadow-md">
            INTRODUCING ALL-INCLUSIVE
          </p>
          <p className="text-2xl md:text-3xl font-extrabold text-white mb-8 font-heading tracking-widest uppercase drop-shadow-lg">
            eBike SUBSCRIPTIONS
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            <span className="text-white font-bold">SMART ELECTRIC MOBILITY</span> <br className="hidden md:block"/>
            Tris aims to electrify the Indian mobility sector. We provide eBikes on subscription to businesses and individuals who are looking to reduce their carbon footprint.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-trisBlue hover:bg-[#158BC6] text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0_5px_15px_rgba(30,160,229,0.5)] transition-transform hover:-translate-y-1 flex items-center">
              START SAVING NOW
              <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
