import React, { useRef, useState, useEffect } from 'react';
import { FaMotorcycle } from 'react-icons/fa';

const milestones = [
  { date: 'December 2024', event: '10,000 eBikes (projected)' },
  { date: 'December 2022', event: '6,500 eBikes' },
  { date: 'June 2022', event: '1000 eBikes' },
  { date: 'March 2022', event: '500 eBikes' },
  { date: 'March 2021', event: '200 eBikes' },
  { date: 'February 2021', event: 'Tris Campus App launched.' },
  { date: 'December 2020', event: 'First e-commerce delivery partnership in Hyderabad.' },
  { date: 'October 2020', event: '100 eBikes' },
  { date: 'September 2020', event: 'First funding round.' },
  { date: 'August 2020', event: 'Gig economy riders onboarded.' },
  { date: 'July 2020', event: 'First batch of high speed bikes deployed.' },
  { date: 'July 2020', event: '1st enterprise client onboarded in Hyderabad in the Dairy sector.' },
];

const Milestones = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      let p = -rect.top / scrollableDistance;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#f5f6fa]" style={{ height: '400vh' }}>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        {/* Section Header */}
        <div className="pt-24 pb-8 text-center shrink-0 relative z-30 bg-gradient-to-b from-[#f5f6fa] via-[#f5f6fa] to-transparent">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-md border border-gray-100 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-trisBlue shadow-[0_0_8px_#1EA0E5]"></span>
            <span className="text-gray-900 font-bold tracking-widest text-xs uppercase">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-800 uppercase tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-trisBlue to-trisGreen drop-shadow-sm">Milestones</span>
          </h2>
        </div>

        {/* Timeline Area */}
        <div className="relative flex-1 w-full max-w-5xl mx-auto overflow-hidden">
          
          {/* Static Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gray-200 transform -translate-x-1/2 rounded-full"></div>
          
          {/* Progress Center Line */}
          <div 
            className="absolute left-1/2 top-0 w-2 bg-trisBlue transform -translate-x-1/2 rounded-full transition-all duration-75 ease-out shadow-[0_0_15px_rgba(30,160,229,0.5)]"
            style={{ height: `${progress * 100}%` }}
          ></div>

          {/* Moving Bike Icon */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-75 ease-out"
            style={{ top: `${progress * 100}%` }}
          >
            <div className="w-14 h-14 bg-white rounded-full shadow-xl border-4 border-trisBlue flex items-center justify-center text-trisBlue relative">
              <FaMotorcycle className="w-7 h-7" />
              {/* Optional Glow Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-trisBlue opacity-30 animate-ping"></div>
            </div>
          </div>

          {/* Scrolling Track of Milestones */}
          <div 
            className="absolute top-0 left-0 w-full transition-transform duration-75 ease-out"
            style={{ transform: `translateY(calc(${progress * 100}vh - ${progress * 100}%))` }}
          >
            {/* Added top and bottom padding so the first/last items aren't cropped against the screen edge when progress is 0 or 1 */}
            <div className="flex flex-col gap-8 md:gap-24 py-[30vh]">
              {milestones.map((item, index) => {
                const isLeft = index % 2 === 0;
                
                // Calculate an active state if the bike has passed this item
                // Approximate position based on index
                const itemProgress = index / (milestones.length - 1);
                const isActive = progress >= itemProgress - 0.05;

                return (
                  <div key={index} className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'} relative px-4`}>
                    
                    {/* Center Dot */}
                    <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 z-20 transition-colors duration-300 ${isActive ? 'bg-trisBlue border-white shadow-lg' : 'bg-gray-200 border-white'}`}></div>
                    
                    {/* Content Card */}
                    <div className={`w-[45%] ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className={`bg-white rounded-3xl p-6 md:p-8 shadow-sm border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isActive ? 'border-trisBlue/30 shadow-md' : 'border-gray-100 opacity-60'}`}>
                        <span className={`inline-block px-4 py-1.5 font-bold rounded-full text-sm mb-4 transition-colors ${isActive ? 'bg-trisBlue text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {item.date}
                        </span>
                        <p className={`text-lg md:text-2xl font-bold leading-snug transition-colors ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Milestones;
