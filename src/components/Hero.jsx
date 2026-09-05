import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-[calc(100vh-120px)] flex items-center overflow-hidden py-16 lg:py-24" 
      id="home"
      style={{
        backgroundImage: "url('/home_hero_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Gradient overlay: dark on left for text readability, clearer on right for the bike */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-trisBlue shadow-[0_0_8px_#1EA0E5]"></span>
            <span className="text-gray-200 font-bold tracking-wider text-xs uppercase">Smart Electric Mobility</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-white mb-4 leading-tight">
            All-Inclusive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisBlue to-cyan-300">
              eBike Subscriptions
            </span>
          </h1>

          {/* Short & crisp description */}
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-lg leading-relaxed font-normal">
            Switch to smart, affordable electric mobility. Zero maintenance hassles, high fuel savings, and reliable rides for commuters and delivery businesses.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="/plans"
              className="bg-trisBlue hover:bg-[#158BC6] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_5px_15px_rgba(30,160,229,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex items-center"
            >
              Start Saving Now
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a 
              href="/contact"
              className="bg-white/10 hover:bg-white hover:text-gray-900 text-white border border-white/30 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Test Ride
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
