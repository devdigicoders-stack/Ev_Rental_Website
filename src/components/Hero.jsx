import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center overflow-hidden bg-trisGray-light py-16" id="home">

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="badge bg-trisBlue-light text-trisBlue mb-4">Electric Mobility</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tighter mb-4">
            Worried about <br className="hidden md:block" />
            <span className="relative inline-block text-trisBlue">
              Rising Petrol Prices?
              <span className="absolute bottom-2 left-0 w-full h-2 bg-trisBlue opacity-20 -z-10"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 font-heading tracking-wide uppercase">
            INTRODUCING ALL-INCLUSIVE
          </p>
          <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 font-heading tracking-wide uppercase">
            eBike SUBSCRIPTIONS
          </p>

          <p className="text-lg text-trisGray-text mb-8">
            <span className="font-bold text-gray-900">SMART ELECTRIC MOBILITY</span> <br />
            Tris aims to electrify the Indian mobility sector. We provide eBikes on subscription to businesses and individuals who are looking to reduce their carbon footprint. Your next pizza delivery could be pollution free, count on us!
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary text-lg px-10 py-4">
              START SAVING NOW
              <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl isolate ">
          <div className="relative w-full group ">
            {/* Background Glow */}
            <div className="absolute inset-0   rounded-full blur-[80px] -z-10 group-hover:bg-trisBlue/40 transition-all duration-700 "></div>

            {/* 3D Video Background */}
            <div className="w-full relative flex  items-center justify-center group/video">
              <video
                src="/hero_ev_bike.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
              />

              {/* Logo Watermark */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-white/60 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
                <img src="/Tris _logo.png" alt="Tris Watermark" className="h-6 md:h-8 object-contain" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
