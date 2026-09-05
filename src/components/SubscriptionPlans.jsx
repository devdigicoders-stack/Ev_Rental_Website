import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRoute, FaIdCard, FaMotorcycle, FaWeightHanging, FaUserFriends, FaTachometerAlt, FaBatteryFull } from 'react-icons/fa';

const plans = [
  {
    name: 'BLAZE PLAN',
    image: '/blaze_scooter.png',
    color: '#1EA0E5', // trisBlue
    specs: [
      { label: 'RANGE', value: '75+ Km', icon: FaRoute },
      { label: 'REGISTRATION / LICENSE', value: 'Not Required', icon: FaIdCard },
      { label: 'TYPE', value: 'Unregistered', icon: FaMotorcycle },
      { label: 'CARRYING CAPACITY', value: '120 kg', icon: FaWeightHanging },
      { label: 'PASSENGERS', value: '1', icon: FaUserFriends },
      { label: 'SPEED RANGE', value: '25 km/h', icon: FaTachometerAlt },
      { label: 'BATTERY', value: '1.5 kWH', icon: FaBatteryFull }
    ]
  },
  {
    name: 'SHINE PLAN',
    image: '/shine_scooter.png',
    color: '#25D366', // trisGreen
    specs: [
      { label: 'RANGE', value: '90+ Km', icon: FaRoute },
      { label: 'REGISTRATION / LICENSE', value: 'Required', icon: FaIdCard },
      { label: 'TYPE', value: 'Registered', icon: FaMotorcycle },
      { label: 'CARRYING CAPACITY', value: '150 kg', icon: FaWeightHanging },
      { label: 'PASSENGERS', value: '2', icon: FaUserFriends },
      { label: 'SPEED RANGE', value: '45 km/h', icon: FaTachometerAlt },
      { label: 'BATTERY', value: '1.8 kWH', icon: FaBatteryFull }
    ]
  },
  {
    name: 'FLARE PLAN',
    image: '/plan_moped.png', // The original red one
    color: '#F05A41', // Orange/Red
    specs: [
      { label: 'RANGE', value: '120+ Km', icon: FaRoute },
      { label: 'REGISTRATION / LICENSE', value: 'Required', icon: FaIdCard },
      { label: 'TYPE', value: 'Registered', icon: FaMotorcycle },
      { label: 'CARRYING CAPACITY', value: '150 kg', icon: FaWeightHanging },
      { label: 'PASSENGERS', value: '2', icon: FaUserFriends },
      { label: 'SPEED RANGE', value: 'High Speed eBike', icon: FaTachometerAlt },
      { label: 'BATTERY', value: '2.5 kWH', icon: FaBatteryFull }
    ]
  }
];

const SubscriptionPlans = () => {
  const [activePlan, setActivePlan] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActivePlan((prev) => (prev + 1) % plans.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-16 bg-white font-body overflow-hidden">
      <div className="container">
        <div className="text-center mb-10">
          <div className="badge bg-trisBlue-light text-trisBlue mb-4 px-4 py-2 uppercase tracking-widest font-bold">Pricing</div>
          <h2 className="text-2xl md:text-4xl font-heading font-black uppercase mb-4 text-gray-900">
            SUBSCRIPTION <span className="text-trisBlue">PLANS</span>
          </h2>
          <p className="text-trisGray-text font-medium max-w-2xl mx-auto">
            Inclusions - Service, Insurance, IoT, Regular Wear & Tear including<br/>
            Brake Wire and Brake Shoe.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 w-full mt-12">
          {/* Plan Carousel */}
          <div className="w-full relative px-4">
            {/* Scroll Container */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar">
              {plans.map((plan, idx) => (
                <div 
                  key={idx} 
                  className="w-[85vw] sm:w-[320px] shrink-0 snap-center bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-300"
                >
                  
                  {/* Product Image Area */}
                  <div className="w-full h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden group">
                    <div 
                      className="absolute inset-0 opacity-[0.15] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.25]" 
                      style={{ backgroundColor: plan.color }}
                    ></div>
                    <img 
                      src={plan.image} 
                      alt={plan.name} 
                      className="w-full h-full object-contain mix-blend-multiply relative z-10 transition-transform duration-500 group-hover:scale-110 p-4" 
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider shadow-sm" style={{ color: plan.color }}>
                      MOST POPULAR
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 
                      className="text-xl font-heading font-black tracking-wide mb-6"
                      style={{ color: plan.color }}
                    >
                      {plan.name}
                    </h3>

                    <div className="grid grid-cols-1 gap-y-4 mb-8 flex-grow">
                      {plan.specs.slice(0, 4).map((spec, index) => {
                        const Icon = spec.icon;
                        return (
                          <div key={index} className="flex items-center gap-3">
                            <div 
                              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{spec.label}</div>
                              <div className="text-sm font-semibold text-gray-800 leading-tight">{spec.value}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="text-white text-xs font-bold uppercase py-3.5 px-6 rounded-full shadow-lg text-center transition-all hover:shadow-xl hover:scale-[1.02]"
                      style={{ 
                        backgroundColor: plan.color,
                        boxShadow: `0 10px 20px ${plan.color}40`
                      }}
                    >
                      SUBSCRIBE NOW
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Instructions (Mobile) */}
            <div className="flex justify-center mt-2 md:hidden">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-widest flex items-center gap-2">
                <svg className="w-4 h-4 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                Swipe to explore
                <svg className="w-4 h-4 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
