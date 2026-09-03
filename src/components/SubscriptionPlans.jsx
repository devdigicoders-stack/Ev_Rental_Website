import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRoute, FaIdCard, FaMotorcycle, FaWeightHanging, FaUserFriends, FaTachometerAlt, FaBatteryFull } from 'react-icons/fa';

const plans = [
  {
    name: 'BLAZE PLAN',
    image: '/blaze_scooter.jpg',
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
    image: '/shine_scooter.jpg',
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
    image: '/plan_moped.jpg', // The original red one
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
    <section className="py-24 bg-white font-body overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <div className="badge bg-trisBlue-light text-trisBlue mb-4 px-4 py-2 uppercase tracking-widest font-bold">Pricing</div>
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase mb-4 text-gray-900">
            SUBSCRIPTION <span className="text-trisBlue">PLANS</span>
          </h2>
          <p className="text-trisGray-text font-medium max-w-2xl mx-auto">
            Inclusions - Service, Insurance, IoT, Regular Wear & Tear including<br/>
            Brake Wire and Brake Shoe.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          {/* Left Side: Graphic Rider Image */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] hidden md:flex justify-center items-center rounded-3xl overflow-hidden bg-gray-50/30">
            <img 
              src="/rider_wave.jpg" 
              alt="Delivery Rider" 
              className="w-full h-full object-contain relative z-10"
            />
            {/* Watermark Logo */}
            <div className="absolute bottom-8 right-8 z-20 opacity-80 drop-shadow-lg">
              <img src="/Tris _logo.png" alt="Tris Logo" className="h-8 md:h-12 object-contain" />
            </div>
          </div>

          {/* Right Side: Plan Carousel */}
          <div 
            className="w-full lg:w-1/2" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Window */}
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative w-full max-w-md mx-auto">
              
              {/* Sliding Track */}
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full"
                style={{ transform: `translateX(-${activePlan * 100}%)` }}
              >
                {plans.map((plan, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 flex flex-col">
                    
                    {/* Product Image Area */}
                    <div className="w-full h-64 md:h-[320px] bg-gray-50 flex items-center justify-center relative overflow-hidden">
                      <div 
                        className="absolute inset-0 opacity-[0.2] blur-3xl transition-colors duration-500" 
                        style={{ backgroundColor: plan.color }}
                      ></div>
                      <img 
                        src={plan.image} 
                        alt={plan.name} 
                        className="w-full h-full object-contain mix-blend-multiply relative z-10 transition-transform duration-500 hover:scale-105" 
                      />
                    </div>

                    {/* Plan Details */}
                    <div className="p-8 bg-white flex-grow">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-5 mb-6">
                        <h3 
                          className="text-2xl font-heading font-black tracking-wide transition-colors duration-500"
                          style={{ color: plan.color }}
                        >
                          {plan.name}
                        </h3>
                        <Link 
                          to="/contact" 
                          className="text-white text-xs md:text-sm font-bold uppercase py-2.5 px-6 rounded-full shadow-md transition-transform hover:-translate-y-1"
                          style={{ backgroundColor: plan.color }}
                        >
                          SUBSCRIBE NOW
                        </Link>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                        {plan.specs.map((spec, index) => {
                          const Icon = spec.icon;
                          return (
                            <div key={index} className="flex items-center gap-3">
                              <div 
                                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500"
                                style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">{spec.label}</div>
                                <div className="text-sm font-semibold text-gray-900">{spec.value}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {plans.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => setActivePlan(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activePlan === index ? 'w-8' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                  style={{ backgroundColor: activePlan === index ? plan.color : undefined }}
                  aria-label={`View ${plan.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
