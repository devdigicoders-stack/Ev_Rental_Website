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

const AboutVision = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % visionStatements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-trisBlue/10 rounded-[3rem] -rotate-6 transform scale-105 -z-10 transition-transform duration-500 hover:rotate-0"></div>
            <img 
              src="/blaze_scooter.jpg" 
              alt="Tris Electric Vision" 
              className="w-full rounded-[3rem] shadow-2xl object-cover h-[500px]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <div className="badge bg-trisBlue-light text-trisBlue mb-6 tracking-widest px-4 py-2 font-bold">OUR STORY</div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase mb-6 text-gray-900 leading-tight">
              Your Most Trusted <br className="hidden md:block"/>
              <span className="text-trisGreen relative">
                green delivery
                <span className="absolute bottom-2 left-0 w-full h-3 bg-trisGreen opacity-20 -z-10"></span>
              </span> and <br className="hidden md:block"/>
              last mile partner
            </h2>
            
            {/* Auto Slider Container */}
            <div className="relative min-h-[220px]">
              {visionStatements.map((item, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${activeSlide === index ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'}`}
                >
                  <div className="relative mb-8">
                    <FaQuoteLeft className="absolute -top-4 -left-4 text-trisBlue/10 w-16 h-16 -z-10" />
                    <p className="text-lg md:text-xl text-trisGray-text leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                  
                  <div className="bg-trisGray-light p-6 md:p-8 rounded-2xl border-l-4 border-trisBlue shadow-sm">
                    <p className="text-lg md:text-2xl font-heading font-bold text-trisBlue uppercase tracking-wide leading-snug">
                      {item.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bike Progress Bar / Pagination */}
            <div className="mt-12 relative w-full h-8 flex items-center">
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

export default AboutVision;
