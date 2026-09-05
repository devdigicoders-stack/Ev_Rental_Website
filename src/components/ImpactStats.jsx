import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect(); // Stop observing once it animates
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, [end, duration]);
  
  // Format with commas (Indian numbering system)
  const formattedCount = count.toLocaleString('en-IN');
  
  return <span ref={counterRef}>{formattedCount}{suffix}</span>;
};

const stats = [
  {
    value: 12500,
    label: 'Fuel Saved (in litres)'
  },
  {
    value: 18000,
    label: 'Kgs CO2 saved'
  },
  {
    value: 20000,
    label: 'Km Covered'
  }
];

const ImpactStats = () => {
  return (
    <section className="py-16 bg-trisBlue relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div className="py-4 md:py-0 px-4 flex flex-col items-center justify-center transition-transform hover:scale-105" key={index}>
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-2 tracking-tight">
                <AnimatedCounter end={stat.value} duration={2500} />
              </div>
              <div className="text-sm md:text-base font-medium uppercase tracking-wider text-trisBlue-light opacity-90 text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
