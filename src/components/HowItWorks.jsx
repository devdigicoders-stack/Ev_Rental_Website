import React from 'react';
import { FaHandPointer, FaIdCard, FaMotorcycle, FaSmileBeam } from 'react-icons/fa';

const steps = [
  {
    icon: FaHandPointer,
    title: 'Choose Your Plan',
    desc: 'Select a subscription plan that best fits your daily commute or business needs.'
  },
  {
    icon: FaIdCard,
    title: 'Complete KYC',
    desc: 'Upload your documents for a quick and paperless verification process.'
  },
  {
    icon: FaMotorcycle,
    title: 'Get Your eBike',
    desc: 'Pick up your fully charged eBike from our hub or get it delivered to your doorstep.'
  },
  {
    icon: FaSmileBeam,
    title: 'Ride Freely',
    desc: 'Enjoy your eco-friendly ride. We take care of maintenance and support.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 bg-trisGray-light relative overflow-hidden" id="how-it-works">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-trisBlue/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-10">
          <div className="badge bg-white text-trisBlue shadow-sm mb-4 px-4 py-2 uppercase tracking-widest font-bold">Process</div>
          <h2 className="text-2xl md:text-4xl font-heading font-black uppercase mb-4 text-gray-900">
            How It <span className="text-trisBlue">Works</span>
          </h2>
          <p className="text-base text-trisGray-text max-w-2xl mx-auto font-medium">
            Getting started with Tris Electric is as easy as 1-2-3-4. No hidden fees, no complex paperwork.
          </p>
        </div>

        <div className="relative w-full mt-12">
          {/* Connecting Line (Desktop) aligned with center of icons */}
          <div className="hidden lg:block absolute top-[80px] left-20 right-20 h-[2px] bg-gradient-to-r from-transparent via-trisBlue/30 to-transparent z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 px-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  className="bg-white p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-100 text-center flex flex-col items-center group relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(30,160,229,0.1)] h-full" 
                  key={index}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-trisGreen text-white font-bold flex items-center justify-center shadow-lg z-20 transition-transform group-hover:scale-110 group-hover:rotate-12 border-4 border-white">
                    {index + 1}
                  </div>
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-trisBlue/10 text-trisBlue flex items-center justify-center text-3xl mb-6 relative transition-colors duration-300 group-hover:bg-trisBlue group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(30,160,229,0.3)]">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-trisGray-text font-medium leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
