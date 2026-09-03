import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaMotorcycle } from 'react-icons/fa';

const visionStatements = [
  {
    text: <><strong className="text-gray-900">Tris</strong> is a proprietary brand of TravelTech Experiences Pvt. Ltd., one of the pioneers in Electric Vehicle subscription ecosystems in India. Travel tech is an Initiative of a team lead by some very sensitive and passionate individuals who are driven by technology and sustainable lifestyle.</>,
    quote: '" WE WOULD WANT THE WORLD TO BE AN EXCITING PLACE FOR ALL AND FOR LONG. "'
  },
  {
    text: <>Our mission is to accelerate the adoption of sustainable mobility solutions by providing accessible, reliable, and high-performance electric vehicles. We strive to make green commuting the standard, not the alternative.</>,
    quote: '" DRIVING CHANGE THROUGH INNOVATION AND SUSTAINABILITY. "'
  },
  {
    text: <>We believe that the future of transportation is electric. By building a robust ecosystem of EVs, we aim to reduce carbon emissions and create cleaner, greener cities for the next generation of riders.</>,
    quote: '" EMPOWERING A GREENER TOMORROW, ONE RIDE AT A TIME. "'
  }
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % visionStatements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-trisGray-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-trisBlue-light rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-trisGreen/10 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container relative z-10">
        <div className="w-full text-center max-w-5xl mx-auto">
          <div className="badge bg-trisBlue-light text-trisBlue mb-6 tracking-widest px-4 py-2 font-bold">ABOUT US</div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase mb-8 text-gray-900 leading-tight">
            Your Most Trusted <br className="hidden md:block"/>
            <span className="text-trisGreen">green delivery</span> and <br className="hidden md:block"/>
            last mile partner
          </h2>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-trisGray-border relative overflow-hidden">
            {/* Quote Icon Background */}
            <div className="absolute -top-6 -left-6 text-trisBlue opacity-10">
              <FaQuoteLeft className="w-24 h-24" />
            </div>
            
            {/* Slider Container */}
            <div className="relative min-h-[200px] md:min-h-[160px] flex items-center justify-center">
              {visionStatements.map((item, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${activeSlide === index ? 'opacity-100 translate-x-0 pointer-events-auto relative' : 'opacity-0 translate-x-8 pointer-events-none absolute'}`}
                >
                  <p className="text-lg md:text-xl text-trisGray-text leading-relaxed mb-8 relative z-10 max-w-4xl mx-auto">
                    {item.text}
                  </p>
                  
                  <div className="border-t border-trisGray-border pt-8 mt-4">
                    <p className="text-xl md:text-2xl font-heading font-bold text-trisBlue uppercase tracking-wide">
                      {item.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bike Progress Bar / Pagination */}
            <div className="mt-12 relative w-full h-8 flex items-center max-w-2xl mx-auto">
              {/* The Road (Line) */}
              <div className="absolute left-0 right-0 h-1.5 bg-gray-200 rounded-full">
                {/* Active progress track */}
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-trisBlue transition-all duration-700 ease-in-out rounded-full"
                  style={{ width: `${(activeSlide / (visionStatements.length - 1)) * 100}%` }}
                ></div>
              </div>
              
              {/* The Moving Bike */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out z-10"
                style={{ left: `calc(${(activeSlide / (visionStatements.length - 1)) * 100}% - 16px)` }}
              >
                <div className="bg-white p-2 rounded-full border-2 border-trisBlue shadow-md text-trisBlue relative">
                  <FaMotorcycle className="w-5 h-5" />
                  {/* Exhaust effect */}
                  <div className="absolute -left-2 top-1/2 w-1 h-1 bg-gray-300 rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Invisible Clickable Zones for each slide */}
              <div className="absolute inset-0 flex">
                {visionStatements.map((_, index) => (
                  <div 
                    key={index}
                    className="flex-1 h-full cursor-pointer z-20"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  ></div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
